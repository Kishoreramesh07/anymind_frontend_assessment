import type { MessageType } from "@Types/Messages";
import MessageCard from "./MessageCard";
import FetchMoreMessages from "./FetchMoreMessages";

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
      <FetchMoreMessages old={true} />
      <div className="messageCardsWrapper mt-auto pb-2">
        {messages.map((message) => (
          <MessageCard key={message?.messageId} message={message} />
        ))}
      </div>
      <FetchMoreMessages old={false} />
    </>
  );
}
