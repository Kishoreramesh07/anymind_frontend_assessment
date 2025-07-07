import type { MessageType } from "@Types/Messages";
import MessageCard from "./MessageCard";

type MessagesProps = { messages: MessageType[] };

export default function Messages({ messages }: MessagesProps) {
  if (!messages?.length)
    return (
      <div className="flex items-center justify-center h-full">
        No messages available
      </div>
    );

  return (
    <>
      <div>
        <button className="flex-1 bg-cyan-500 text-white rounded-sm px-4 py-2 hover:bg-cyan-600 cursor-pointer">
          Fetch More
        </button>
      </div>
      {messages.map((message) => (
        <MessageCard key={message?.messageId} message={message} />
      ))}
    </>
  );
}
