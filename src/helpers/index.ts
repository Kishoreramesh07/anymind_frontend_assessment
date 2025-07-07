import type { MessageType } from "@Types/Messages";

export const sortMessagesByTime = (messages: MessageType[]) =>
  [...messages].sort(
    (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
  );

export const formatTime = (datetime: string | number | Date) =>
  new Date(datetime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
