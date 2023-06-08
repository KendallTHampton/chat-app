/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount(
    $filter: ModelSubscriptionAccountFilterInput
    $owner: String
  ) {
    onCreateAccount(filter: $filter, owner: $owner) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount(
    $filter: ModelSubscriptionAccountFilterInput
    $owner: String
  ) {
    onUpdateAccount(filter: $filter, owner: $owner) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount(
    $filter: ModelSubscriptionAccountFilterInput
    $owner: String
  ) {
    onDeleteAccount(filter: $filter, owner: $owner) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onCreateConversation(filter: $filter, owner: $owner) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onUpdateConversation(filter: $filter, owner: $owner) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
    $owner: String
  ) {
    onDeleteConversation(filter: $filter, owner: $owner) {
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
