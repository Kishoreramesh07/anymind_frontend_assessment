import User from "@Components/ChatBot/SideBar/User";
import ChannelsNav from "@Components/ChatBot/SideBar/ChannelsNav";

export function SideBar() {
  return (
    <div className="col-span-1 p-4">
      <User />
      <ChannelsNav />
    </div>
  );
}
