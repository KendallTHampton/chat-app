/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  emailVerified?: string | null,
  image?: string | null,
  hashedPassword?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userAccountId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  emailVerified?: ModelStringInput | null,
  image?: ModelStringInput | null,
  hashedPassword?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userAccountId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email?: string | null,
  emailVerified?: string | null,
  image?: string | null,
  hashedPassword?: string | null,
  createdAt: string,
  updatedAt: string,
  account?: Account | null,
  conversations?: ModelConversationConnection | null,
  userAccountId?: string | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  userId: string,
  type: string,
  provider: string,
  providerAccountId: string,
  refresh_token?: string | null,
  access_token?: string | null,
  expires_at?: number | null,
  token_type?: string | null,
  scope?: string | null,
  id_token?: string | null,
  session_state?: string | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  userId: string,
  name?: string | null,
  image?: string | null,
  messages?: ModelMessageConnection | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userConversationsId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  conversationId: string,
  content?: string | null,
  createdAt: string,
  conversation?: Conversation | null,
  updatedAt: string,
  conversationMessagesId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  emailVerified?: string | null,
  image?: string | null,
  hashedPassword?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userAccountId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAccountInput = {
  id?: string | null,
  userId: string,
  type: string,
  provider: string,
  providerAccountId: string,
  refresh_token?: string | null,
  access_token?: string | null,
  expires_at?: number | null,
  token_type?: string | null,
  scope?: string | null,
  id_token?: string | null,
  session_state?: string | null,
};

export type ModelAccountConditionInput = {
  userId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  providerAccountId?: ModelStringInput | null,
  refresh_token?: ModelStringInput | null,
  access_token?: ModelStringInput | null,
  expires_at?: ModelIntInput | null,
  token_type?: ModelStringInput | null,
  scope?: ModelStringInput | null,
  id_token?: ModelStringInput | null,
  session_state?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAccountInput = {
  id: string,
  userId?: string | null,
  type?: string | null,
  provider?: string | null,
  providerAccountId?: string | null,
  refresh_token?: string | null,
  access_token?: string | null,
  expires_at?: number | null,
  token_type?: string | null,
  scope?: string | null,
  id_token?: string | null,
  session_state?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateConversationInput = {
  id?: string | null,
  userId: string,
  name?: string | null,
  image?: string | null,
  userConversationsId?: string | null,
};

export type ModelConversationConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
  userConversationsId?: ModelIDInput | null,
};

export type UpdateConversationInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  image?: string | null,
  userConversationsId?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  conversationId: string,
  content?: string | null,
  createdAt?: string | null,
  conversationMessagesId?: string | null,
};

export type ModelMessageConditionInput = {
  conversationId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  conversationMessagesId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  conversationId?: string | null,
  content?: string | null,
  createdAt?: string | null,
  conversationMessagesId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  emailVerified?: ModelStringInput | null,
  image?: ModelStringInput | null,
  hashedPassword?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userAccountId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  providerAccountId?: ModelStringInput | null,
  refresh_token?: ModelStringInput | null,
  access_token?: ModelStringInput | null,
  expires_at?: ModelIntInput | null,
  token_type?: ModelStringInput | null,
  scope?: ModelStringInput | null,
  id_token?: ModelStringInput | null,
  session_state?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
  userConversationsId?: ModelIDInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  conversationId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  conversationMessagesId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  emailVerified?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  hashedPassword?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  provider?: ModelSubscriptionStringInput | null,
  providerAccountId?: ModelSubscriptionStringInput | null,
  refresh_token?: ModelSubscriptionStringInput | null,
  access_token?: ModelSubscriptionStringInput | null,
  expires_at?: ModelSubscriptionIntInput | null,
  token_type?: ModelSubscriptionStringInput | null,
  scope?: ModelSubscriptionStringInput | null,
  id_token?: ModelSubscriptionStringInput | null,
  session_state?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionConversationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConversationFilterInput | null > | null,
  or?: Array< ModelSubscriptionConversationFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  conversationId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      conversationId: string,
      content?: string | null,
      createdAt: string,
      conversation?:  {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null,
      updatedAt: string,
      conversationMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    emailVerified?: string | null,
    image?: string | null,
    hashedPassword?: string | null,
    createdAt: string,
    updatedAt: string,
    account?:  {
      __typename: "Account",
      id: string,
      userId: string,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token?: string | null,
      access_token?: string | null,
      expires_at?: number | null,
      token_type?: string | null,
      scope?: string | null,
      id_token?: string | null,
      session_state?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        userId: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        userConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    userAccountId?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    userId: string,
    type: string,
    provider: string,
    providerAccountId: string,
    refresh_token?: string | null,
    access_token?: string | null,
    expires_at?: number | null,
    token_type?: string | null,
    scope?: string | null,
    id_token?: string | null,
    session_state?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type OnUpdateConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type OnDeleteConversationSubscriptionVariables = {
  filter?: ModelSubscriptionConversationFilterInput | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    userId: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        conversationId: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      emailVerified?: string | null,
      image?: string | null,
      hashedPassword?: string | null,
      createdAt: string,
      updatedAt: string,
      account?:  {
        __typename: "Account",
        id: string,
        userId: string,
        type: string,
        provider: string,
        providerAccountId: string,
        refresh_token?: string | null,
        access_token?: string | null,
        expires_at?: number | null,
        token_type?: string | null,
        scope?: string | null,
        id_token?: string | null,
        session_state?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      userAccountId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userConversationsId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    conversationId: string,
    content?: string | null,
    createdAt: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      userId: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        emailVerified?: string | null,
        image?: string | null,
        hashedPassword?: string | null,
        createdAt: string,
        updatedAt: string,
        userAccountId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userConversationsId?: string | null,
    } | null,
    updatedAt: string,
    conversationMessagesId?: string | null,
  } | null,
};
