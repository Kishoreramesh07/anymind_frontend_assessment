import { useChannel } from "@/context/channelContext";
import { Avatar, Text, Time } from "./MessageCardElements";
import type { MessageType } from "@/types/Messages";

type MessageProps = { message: MessageType };

export default function MessageCard({ message }: MessageProps) {
  const { activeUser } = useChannel();
  const { datetime, text, userId } = message;
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
        <Time datetime={datetime} />
      </div>
    </div>
  );
}
