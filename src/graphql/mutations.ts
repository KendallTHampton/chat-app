/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
