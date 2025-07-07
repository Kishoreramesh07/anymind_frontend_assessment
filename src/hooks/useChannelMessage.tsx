import { useMessageStore } from "@Context/MessageStore";
import { useChannel } from "@Context/channelContext";
import { useQuery } from "@apollo/client";
import { FETCH_LATEST_MESSAGES } from "@GraphQL/queries";
import { useEffect } from "react";
import { sortMessagesByTime } from "@Helpers/index";

export default function useChannelMessage() {
  const { messageStore, setMessageStore } = useMessageStore();
  const {
    activeChannel: { id: channelId },
  } = useChannel();

  const { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
  });

  useEffect(() => {
    if (loading || !data) return;

    const existingChannel = messageStore.find(
      ({ channelId: id }) => id === channelId
    );

    if (!existingChannel && data?.fetchLatestMessages) {
      setMessageStore((prev) => [
        ...prev,
        { channelId, messages: sortMessagesByTime(data.fetchLatestMessages) },
      ]);
    }
  }, [data, loading, channelId, messageStore, setMessageStore]);

  const activeChannelMessages =
    messageStore?.find(({ channelId: id }) => id === channelId)?.messages || [];

  return { loading, error, messages: activeChannelMessages };
}
