import { useChannel } from "@/context/channelContext";
import { Chat } from "./Chat";

export function Channel() {
  const { activeChannel } = useChannel();
  
  return (
    <div className="col-span-3 border-l-1 border-slate-200">
      <h2 className="p-4 border-b-1 border-slate-200">{activeChannel.name}</h2>
      <Chat />
    </div>
  );
}
