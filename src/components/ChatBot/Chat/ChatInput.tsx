import { useChannel } from "@Context/channelContext";
import { useMutation } from "@apollo/client";
import { POST_MESSAGE } from "@GraphQL/mutations";
import { useState } from "react";

export default function ChatInput() {
  const [userText, setUserText] = useState("");
  const {
    activeChannel: { id: channelId },
    activeUser,
  } = useChannel();

  const [postMessage, { loading }] = useMutation(POST_MESSAGE);

  const handlePostMessage = () => {
    postMessage({
      variables: { channelId, text: userText, userId: activeUser },
    });
  };

  return (
    <div className="flex gap-2 items-start">
      <textarea
        placeholder="Type your message here..."
        className="bg-white flex-5 border border-slate-300 rounded-sm h-15 p-2"
        value={userText}
        onChange={({ target: { value } }) => setUserText(value)}
      />
      <button
        className="flex-1 bg-cyan-500 text-white rounded-sm px-4 py-2"
        onClick={handlePostMessage}
      >
        Send Message
      </button>
    </div>
  );
}
