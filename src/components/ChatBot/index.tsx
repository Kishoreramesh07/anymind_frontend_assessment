import { SideBar } from "@Components/ChatBot/SideBar";
import { Channel } from "@Components/ChatBot/Channel";
import { ChannelProvider } from "@/context/channelContext";

export default function ChatBot() {
  return (
    <ChannelProvider>
      <div className="grid grid-cols-4 bg-slate-100">
        <SideBar />
        <Channel />
      </div>
    </ChannelProvider>
  );
}
