import { graphql } from 'react-apollo'

import { mutate } from 'lib/graphql'

/* Typings */
import * as Schema from 'lib/graphql/schema'

import { InitialAuthProps } from './types'

export const loginSocial = graphql<Schema.LoginWithAuth0Mutation, {}, InitialAuthProps>(mutate.LoginWithAuth0, {
  props: (props) => ({
    loginSocialUser: ({ idToken }: Schema.LoginUserWithAuth0Input) => props.mutate({
      variables: { input: { idToken } }
    })
  })
})

export const updateUser = graphql<Schema.UpdateUserMutation, {}, InitialAuthProps>(mutate.UpdateUser, {
  props: (props) => ({
    updateUser: (updatedUser: Schema.UpdateUserInput) => props.mutate({
      variables: { input: { ...updatedUser } }
    })
  })
})

export const createUser = graphql<Schema.CreateUserMutation, {}, InitialAuthProps>(mutate.CreateUser, {
  props: (props) => ({
    createUser: (user: Schema.CreateUserInput) => props.mutate({
      variables: { input: { ...user } }
    })
  })
})

export const deleteUser = graphql<Schema.UpdateUserMutation, {}, InitialAuthProps>(mutate.DeleteUser, {
  props: (props) => ({
    deleteUser: (id: Schema.DeleteUserInput) => props.mutate({
      variables: { input: { id } }
    })
  })
})

export const login = graphql<Schema.LoginUserMutation, {}, InitialAuthProps>(mutate.LoginUser, {
  props: (props) => ({
    loginUser: (credentials: Schema.LoginUserInput) => props.mutate({
      variables: { input: { ...credentials } }
    })
  })
})

export const forgotPassword = graphql<Schema.ForgotPasswordMutation, {}, InitialAuthProps>(mutate.ForgotPassword, {
  props: (props) => ({
    forgotPassword: (newCredentials: Schema.UpdateUserInput) => props.mutate({
      variables: { input: { ...newCredentials } }
    })
  })
})
