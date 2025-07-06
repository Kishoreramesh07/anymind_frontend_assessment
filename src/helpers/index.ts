import type { MessageType } from "@Types/Messages";

export const sortMessagesByTime = (messages: MessageType[]) =>
  [...messages].sort(
    (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
  );
