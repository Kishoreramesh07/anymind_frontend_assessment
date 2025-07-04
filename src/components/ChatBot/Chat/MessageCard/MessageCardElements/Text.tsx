import type { MessageType } from "@/types/Messages";

type TextProps = {
  text: MessageType["text"];
};

export function Text({ text }: TextProps) {
  return <p className="relative message bg-white p-3 rounded-sm">{text}</p>;
}
