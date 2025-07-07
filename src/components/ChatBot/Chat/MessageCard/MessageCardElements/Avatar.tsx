import type { MessageType } from "@Types/Messages";

type AvatarProps = {
  userId: MessageType["userId"];
};

export function Avatar({ userId }: AvatarProps) {
  return (
    <div className="w-10 text-center">
      <img src={`avatars/${userId}.png`} alt={userId} />
      <p className="text-xs pt-1">{userId}</p>
    </div>
  );
}
