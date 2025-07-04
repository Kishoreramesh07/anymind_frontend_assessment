import { useChannel } from "@/context/channelContext";
import Spinner from "@Shared/Spinner";
import { useQuery } from "@apollo/client";
import { FETCH_LATEST_MESSAGES } from "@GraphQL/queries";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

export function Chat() {
  const {
    activeChannel: { id: channelId },
  } = useChannel();

  const { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { channelId },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-100">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-4">
      <Messages messages={data?.fetchLatestMessages} />
      <ChatInput />
    </div>
  );
}
