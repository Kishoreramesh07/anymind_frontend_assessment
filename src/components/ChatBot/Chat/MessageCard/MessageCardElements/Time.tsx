import type { MessageType } from "@/types/Messages";

type TimeProps = {
  datetime: MessageType["datetime"];
};

export function Time({ datetime }: TimeProps) {
  const time = new Date(datetime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  return (
    <p className="text-sm text-gray-500" aria-label="Message time">
      {time}
    </p>
  );
}
