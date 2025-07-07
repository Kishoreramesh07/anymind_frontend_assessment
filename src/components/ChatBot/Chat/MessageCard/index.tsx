import { useChannel } from "@Context/channelContext";
import { Avatar, Text, Time } from "./MessageCardElements";
import type { MessageType } from "@Types/Messages";
import Status from "./MessageCardElements/Status";

type MessageProps = { message: MessageType };

export default function MessageCard({ message }: MessageProps) {
  const { activeUser } = useChannel();
  const { datetime, text, userId, status } = message;
  const isActiveUser = userId === activeUser;

  return (
    <div
      className={`flex flex-start gap-4 py-2 ${
        isActiveUser ? `flex-row-reverse` : ``
      }`}
    >
      <Avatar userId={userId} />
      <div
        className={`flex gap-2 items-center ${
          isActiveUser ? `messageRight flex-row-reverse` : ``
        }`}
      >
        <Text text={text} />
        {isActiveUser && (
          <Status status={status}/>
        )}
        <Time datetime={datetime} />
      </div>
    </div>
  );
}
