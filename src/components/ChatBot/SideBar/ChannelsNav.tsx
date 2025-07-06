import { useChannel } from "@Context/channelContext";

export default function ChannelsNav() {
  const { Channels, activeChannel, setActiveChannel } = useChannel();

  return (
    <div className="flex flex-wrap pb-5">
      <label className="w-100 pb-2.5">Choose your Channel</label>
      {!!Channels.length && (
        <ul className="w-100">
          {Channels.map(({ id, name }) => (
            <li
              key={id}
              className={`px-2.5 py-4 cursor-pointer hover:bg-white rounded-sm text-sm ${
                id === activeChannel.id ? `bg-white` : ``
              }`}
              onClick={() => setActiveChannel({ id, name })}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
