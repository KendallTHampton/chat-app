/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      conversation {
        id
        owner
        userId {
          id
          owner
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
        }
        content
        messages {
          nextToken
        }
        createdAt
        updatedAt
        userConversationsId
      }
      createdAt
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
        content
        conversation {
          id
          owner
          content
          createdAt
          updatedAt
          userConversationsId
        }
        createdAt
        updatedAt
        conversationMessagesId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      owner
      name
      email
      emailVerified
      image
      hashedPassword
      createdAt
      updatedAt
      accounts {
        items {
          id
          owner
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
          userAccountsId
        }
        nextToken
      }
      conversations {
        items {
          id
          owner
          content
          createdAt
          updatedAt
          userConversationsId
        }
        nextToken
      }
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
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
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
      userAccountsId
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
        owner
        userId {
          id
          owner
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
        }
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
        userAccountsId
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      owner
      userId {
        id
        owner
        name
        email
        emailVerified
        image
        hashedPassword
        createdAt
        updatedAt
        accounts {
          nextToken
        }
        conversations {
          nextToken
        }
      }
      content
      messages {
        items {
          id
          content
          createdAt
          updatedAt
          conversationMessagesId
        }
        nextToken
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
        owner
        userId {
          id
          owner
          name
          email
          emailVerified
          image
          hashedPassword
          createdAt
          updatedAt
        }
        content
        messages {
          nextToken
        }
        createdAt
        updatedAt
        userConversationsId
      }
      nextToken
    }
  }
`;
