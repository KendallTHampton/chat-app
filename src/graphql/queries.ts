/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      emailVerified
      image
      hashedPassword
      createdAt
      updatedAt
      account {
        id
        userId
        type
        provider
        providerAccountId
        refresh_token
        access_token
        expires_at
        token_type
        scope
        id_token
        session_state
        user {
          id
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
          userAccountId
        }
        createdAt
        updatedAt
      }
      conversations {
        items {
          id
          userId
          name
          image
          createdAt
          updatedAt
          userConversationsId
        }
        nextToken
      }
      userAccountId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        account {
          id
          userId
          type
          provider
          providerAccountId
          refresh_token
          access_token
          expires_at
          token_type
          scope
          id_token
          session_state
          createdAt
          updatedAt
        }
        conversations {
          nextToken
        }
        userAccountId
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      userId
      type
      provider
      providerAccountId
      refresh_token
      access_token
      expires_at
      token_type
      scope
      id_token
      session_state
      user {
        id
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        account {
          id
          userId
          type
          provider
          providerAccountId
          refresh_token
          access_token
          expires_at
          token_type
          scope
          id_token
          session_state
          createdAt
          updatedAt
        }
        conversations {
          nextToken
        }
        userAccountId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        type
        provider
        providerAccountId
        refresh_token
        access_token
        expires_at
        token_type
        scope
        id_token
        session_state
        user {
          id
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
          userAccountId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      userId
      name
      image
      messages {
        items {
          id
          conversationId
          content
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
      }
      user {
        id
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        account {
          id
          userId
          type
          provider
          providerAccountId
          refresh_token
          access_token
          expires_at
          token_type
          scope
          id_token
          session_state
          createdAt
          updatedAt
        }
        conversations {
          nextToken
        }
        userAccountId
      }
      createdAt
      updatedAt
      userConversationsId
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        image
        messages {
          nextToken
        }
        user {
          id
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
          userAccountId
        }
        createdAt
        updatedAt
        userConversationsId
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      conversationId
      content
      createdAt
      conversation {
        id
        userId
        name
        image
        messages {
          nextToken
        }
        user {
          id
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
          userAccountId
        }
        createdAt
        updatedAt
        userConversationsId
      }
      updatedAt
      conversationMessagesId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        conversationId
        content
        createdAt
        conversation {
          id
          userId
          name
          image
          createdAt
          updatedAt
          userConversationsId
        }
        updatedAt
        conversationMessagesId
      }
      nextToken
    }
  }
`;
