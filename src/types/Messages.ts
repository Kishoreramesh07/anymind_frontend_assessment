import type { ApolloError } from "@apollo/client";

export type MessageType = {
  messageId: string;
  text: string;
  datetime: string | number | Date;
  userId: string;
  status?: string;
  error?: ApolloError;
};
