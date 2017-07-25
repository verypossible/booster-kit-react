import { graphql } from 'react-apollo'

import { mutate } from 'lib/graphql'

/* Typings */
import * as Schema from 'lib/graphql/schema'

import { WithAllProps } from './types'

export const loginSocial = graphql<Schema.LoginWithAuth0Mutation, {}, WithAllProps>(mutate.LoginWithAuth0, {
  props: (props) => ({
    loginSocialUser: ({ idToken }: Schema.LoginUserWithAuth0Input) => props.mutate({
      variables: { input: { idToken } }
    })
  })
})

export const updateUser = graphql<Schema.UpdateUserMutation, {}, WithAllProps>(mutate.UpdateUser, {
  props: (props) => ({
    updateUser: ({ ...user }: Schema.UpdateUserInput) => props.mutate({
      variables: { input: { ...user } }
    })
  })
})

export const createUser = graphql<Schema.CreateUserMutation, {}, WithAllProps>(mutate.CreateUser, {
  props: (props) => ({
    createUser: (user: Schema.CreateUserInput) => props.mutate({
      variables: { input: { ...user } }
    })
  })
})

export const deleteUser = graphql<Schema.UpdateUserMutation, {}, WithAllProps>(mutate.DeleteUser, {
  props: (props) => ({
    deleteUser: (id: Schema.DeleteUserInput) => props.mutate({
      variables: { input: { id } }
    })
  })
})

export const login = graphql<Schema.LoginUserMutation, {}, WithAllProps>(mutate.LoginUser, {
  props: (props) => ({
    loginUser: (credentials: Schema.LoginUserInput) => props.mutate({
      variables: { input: { ...credentials } }
    })
  })
})

export const forgotPassword = graphql<Schema.ForgotPasswordMutation, {}, WithAllProps>(mutate.ForgotPassword, {
  props: (props) => ({
    forgotPassword: (newCredentials: Schema.UpdateUserInput) => props.mutate({
      variables: { input: { ...newCredentials } }
    })
  })
})
