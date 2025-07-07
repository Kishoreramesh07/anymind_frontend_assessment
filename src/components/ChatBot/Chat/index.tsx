import Spinner from "@Shared/Spinner";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import useChannelMessage from "@/hooks/useChannelMessage";

export function Chat() {
  const { loading, error, messages, refetch } = useChannelMessage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-100 messageWrapper">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-100 messageWrapper flex-col">
        <p className="text-red-500 mb-2">
          Error loading messages. Please try again.
        </p>
        <button
          type="button"
          className="bg-cyan-500 text-white rounded-sm px-4 py-2 hover:bg-cyan-600 cursor-pointer"
          onClick={() => refetch()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 messageWrapper flex flex-col justify-between">
        <Messages messages={messages} />
      </div>
      <ChatInput />
    </>
  );
}
