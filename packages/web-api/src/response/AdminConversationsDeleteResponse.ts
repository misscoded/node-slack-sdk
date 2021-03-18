/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type AdminConversationsDeleteResponse = WebAPICallResult & {
  ok?:       boolean;
  error?:    string;
  needed?:   string;
  provided?: string;
};
