/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onCreateConversation(filter: $filter) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onUpdateConversation(filter: $filter) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $filter: ModelSubscriptionConversationFilterInput
  ) {
    onDeleteConversation(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
