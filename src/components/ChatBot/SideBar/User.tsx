import { useChannel } from "@/context/channelContext";
import { Users } from "@Constants/users_db";

export default function User() {
  const { activeUser, setActiveUser } = useChannel();

  const handleUser = ({ value }: { value: string }) => {
    setActiveUser(value);
  };

  return (
    <div className="flex flex-wrap pb-5">
      <label className="w-100 pb-2.5">Choose your user</label>
      <select
        className="p-2.5 bg-white w-full rounded-sm"
        value={activeUser}
        onChange={({ target: { value } }) => handleUser({ value })}
      >
        {Users.map((user) => (
          <option key={user}>{user}</option>
        ))}
      </select>
    </div>
  );
}
