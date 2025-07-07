import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { MessageType } from "@Types/Messages";

type MessageStoreType = {
  channelId: string;
  messages: MessageType[];
};

interface MessageContextType {
  messageStore: MessageStoreType[];
  setMessageStore: Dispatch<SetStateAction<MessageStoreType[]>>;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messageStore, setMessageStore] = useState<MessageStoreType[]>([]);

  return (
    <MessageContext.Provider value={{ messageStore, setMessageStore }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageStore = (): MessageContextType => {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error("useMessageStore must be used within a MessageProvider");
  }

  return context;
};
