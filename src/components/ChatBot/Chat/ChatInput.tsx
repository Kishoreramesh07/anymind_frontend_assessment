import { useChannel } from "@Context/channelContext";
import { useMutation } from "@apollo/client";
import { POST_MESSAGE } from "@GraphQL/mutations";
import { useState, type KeyboardEvent } from "react";
import { useMessageStore } from "@Context/MessageStore";
import type { MessageType } from "@Types/Messages";

export default function ChatInput() {
  const [userText, setUserText] = useState("");
  const {
    activeChannel: { id: channelId },
    activeUser,
  } = useChannel();
  const { setMessageStore } = useMessageStore();

  const [postMessage, { loading, error, data }] = useMutation(POST_MESSAGE);

  const handlePostMessage = () => {
    if (!userText.length) return;

    const newMessage: MessageType = {
      messageId: crypto.randomUUID(),
      text: userText,
      userId: activeUser,
      datetime: new Date(),
    };

    setMessageStore((prevStore) => {
      const channelExists = prevStore.find(
        ({ channelId: id }) => id === channelId
      );

      // If channel exists, append the new message to its message list
      if (channelExists) {
        return prevStore.map((channel) =>
          channel.channelId === channelId
            ? {
                ...channel,
                messages: [...channel.messages, newMessage],
              }
            : channel
        );
      }

      // If channel does not exist, create a new one with the message
      return [
        ...prevStore,
        {
          channelId,
          messages: [newMessage],
        },
      ];
    });

    postMessage({
      variables: { channelId, text: userText, userId: activeUser },
    });

    setUserText("");
  };

  const handleUserInput = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === `Enter`) {
      event.preventDefault();
      handlePostMessage();
    }
  };

  return (
    <div className="flex gap-2 items-start">
      <textarea
        placeholder="Type your message here..."
        className="bg-white flex-5 border border-slate-300 rounded-sm h-15 p-2"
        value={userText}
        onChange={({ target: { value } }) => setUserText(value)}
        onKeyDown={(event) => handleUserInput(event)}
      />
      <button
        className="flex-1 bg-cyan-500 text-white rounded-sm px-4 py-2 hover:bg-cyan-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handlePostMessage}
        disabled={!userText.length || loading}
      >
        Send Message
      </button>
    </div>
  );
}
