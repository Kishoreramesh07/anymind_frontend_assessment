import { formatTime } from "@Helpers/index";
import type { MessageType } from "@Types/Messages";

type TimeProps = {
  datetime: MessageType["datetime"];
};

export function Time({ datetime }: TimeProps) {
  return (
    <p className="text-sm" aria-label="Message time">
      {formatTime(datetime)}
    </p>
  );
}
