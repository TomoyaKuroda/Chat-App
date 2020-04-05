export interface Conversation {
  name: string;
  id: string;
}

export interface Message {
  /**This is the message content */
  content: string;
  id: string;
}

export interface Params {
  conversationID: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
