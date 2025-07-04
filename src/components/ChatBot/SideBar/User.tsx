import { Users } from "@Constants/users_db";

export default function User() {
  return (
    <div className="flex flex-wrap pb-5">
      <label className="w-100 pb-2.5">Choose your user</label>
      <select className="p-2.5 bg-white w-full rounded-sm">
        {Users.map((user) => (
          <option key={user}>{user}</option>
        ))}
      </select>
    </div>
  );
}
