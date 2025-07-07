import Spinner from "@Shared/Spinner";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import useChannelMessage from "@/hooks/useChannelMessage";

export function Chat() {
  const { loading, error, messages } = useChannelMessage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-100 messageWrapper">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="p-4 messageWrapper">
        <Messages messages={messages} />
      </div>
      <ChatInput />
    </>
  );
}
