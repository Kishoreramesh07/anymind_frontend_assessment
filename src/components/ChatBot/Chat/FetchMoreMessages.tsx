import Spinner from "@Shared/Spinner";
import { useChannel } from "@Context/channelContext";
import { FETCH_MORE_MESSAGES } from "@GraphQL/queries";
import { useLazyQuery } from "@apollo/client";
import { useMessageStore } from "@Context/MessageStore";
import { sortMessagesByTime } from "@Helpers/index";
import type { MessageType } from "@Types/Messages";

type FetchMoreMessagesProps = {
  old: boolean;
};

export default function FetchMoreMessages({ old }: FetchMoreMessagesProps) {
  const { messageStore, setMessageStore } = useMessageStore();
  const {
    activeChannel: { id: channelId },
  } = useChannel();

  const activeChannelStore = messageStore.find(
    ({ channelId: id }) => id === channelId
  ) || {
    messages: [],
  };

  const handleCompleted = (data: { fetchMoreMessages: MessageType[] }) => {
    const fetchedMessages = data?.fetchMoreMessages.map(
      (message: MessageType) => ({
        ...message,
        status: "sent",
      })
    );
    
    if (!fetchedMessages?.length) return;

    setMessageStore((prev) => {
      const existingChannel = prev?.find(
        (channel) => channel?.channelId === channelId
      );

      if (existingChannel) {
        return prev.map((channel) =>
          channel.channelId === channelId
            ? {
                ...channel,
                messages: [
                  ...sortMessagesByTime(
                    old ? fetchedMessages : channel?.messages
                  ),
                  ...sortMessagesByTime(
                    old ? channel?.messages : fetchedMessages
                  ),
                ],
              }
            : channel
        );
      }

      return [
        ...prev,
        {
          channelId,
          messages: sortMessagesByTime(fetchedMessages),
        },
      ];
    });
  };

  const [fetchMessages, { loading, error }] = useLazyQuery(
    FETCH_MORE_MESSAGES,
    {
      fetchPolicy: "network-only",
      onCompleted: handleCompleted,
    }
  );

  const handleFetchMore = (old: boolean) => {
    const messages = activeChannelStore.messages;
    const currentMessageId = old
      ? messages[0]?.messageId
      : messages[messages.length - 1]?.messageId;

    if (!currentMessageId) return;

    fetchMessages({
      variables: {
        channelId,
        messageId: currentMessageId,
        old,
      },
    });
  };

  if (loading)
    return (
      <div className={`flex items-center justify-center py-1.5`}>
        <Spinner />
      </div>
    );

  return (
    <div className="flex items-center justify-center flex-wrap flex-col">
      <button
        onClick={() => handleFetchMore(old)}
        className="bg-cyan-500 text-white rounded-sm px-4 py-2 hover:bg-cyan-600 cursor-pointer"
      >
        {`Load ${old ? `Previous` : `Latest`}`}
      </button>
      {!!error && (
        <p className="text-red-500 mt-2">
          Error loading messages. Please try again.
        </p>
      )}
    </div>
  );
}
