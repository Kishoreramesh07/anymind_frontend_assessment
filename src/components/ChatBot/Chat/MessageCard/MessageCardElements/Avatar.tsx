import type { MessageType } from "@Types/Messages";

type AvatarProps = {
  userId: MessageType["userId"];
};

export function Avatar({ userId }: AvatarProps) {
  return (
    <div className="w-10 text-center">
      <img src={`${import.meta.env.VITE_BASE_URL}/${userId}.png`} />
      <p className="text-xs pt-1">{userId}</p>
    </div>
  );
}
