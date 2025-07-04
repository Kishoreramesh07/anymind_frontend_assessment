import type { MessageType } from "@/types/Messages";
import MessageCard from "./MessageCard";

type MessagesProps = { messages: MessageType[] };

export default function Messages({ messages }: MessagesProps) {
  if (!messages.length) return <div>No messages available</div>;

  return (
    <div className="py-2">
      {messages.map((message) => (
        <MessageCard key={message?.messageId} message={message} />
      ))}
    </div>
  );
}
