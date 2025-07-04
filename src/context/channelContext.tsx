import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Channels, type ChannelType } from "@Constants/channels_db";
import { Users } from "@Constants/users_db";

interface ChannelContextType {
  activeUser: string;
  setActiveUser: Dispatch<SetStateAction<string>>;
  Channels: ChannelType[];
  activeChannel: ChannelType;
  setActiveChannel: Dispatch<SetStateAction<ChannelType>>;
}

const ChannelContext = createContext<ChannelContextType | undefined>(undefined);

export const ChannelProvider = ({ children }: { children: ReactNode }) => {
  const [activeUser, setActiveUser] = useState<string>(Users[0]);
  const [activeChannel, setActiveChannel] = useState<ChannelType>(Channels[0]);

  return (
    <ChannelContext.Provider
      value={{
        activeUser,
        setActiveUser,
        Channels,
        activeChannel,
        setActiveChannel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannel = (): ChannelContextType => {
  const context = useContext(ChannelContext);
  if (!context) {
    throw new Error("useChannel must be used within a ChannelProvider");
  }
  return context;
};
