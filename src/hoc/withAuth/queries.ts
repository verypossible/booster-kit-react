import { graphql } from 'react-apollo'

import { mutate as mutation } from 'lib/graphql'

/* Typings */
import * as Schema from 'lib/graphql/schema'

import { AuthServerProps, AuthSocialProps, WithRouter } from './types'

const loginSocialResult = ({ data }) => {
  const query = data && data.loginUserWithAuth0
  const user = query && query.user
  const { id, username } = user
  return { id, username }
}

export const loginSocial = graphql<Schema.LoginWithAuth0Mutation, {}, WithRouter>(mutation.LoginWithAuth0, {
  alias: 'loginSocial',
  props: (props) => ({
   loginSocialResult: props.data && props.data.loginUserWithAuth0 && props.data.loginUserWithAuth0.user,
    loginSocialUser: ({ idToken }: Schema.LoginUserWithAuth0Input) => props.mutate({
      variables: { input: { idToken } }
    })
  })
})

export const updateUser = graphql<Schema.UpdateUserMutation, {}, AuthServerProps | AuthSocialProps>(
    mutation.UpdateUser, {
    alias: 'updateUser',
    props: (props) => ({
      updateUser: ({ ...user }: Schema.UpdateUserInput) => props.mutate({
        variables: { input: { ...user } }
      })
    })
  }
)

export const createUser = graphql<Schema.CreateUserMutation, {}, AuthServerProps>(mutation.CreateUser, {
  alias: 'createUser',
  props: (props) => ({
    createUser: (user: Schema.CreateUserInput) => props.mutate({
      variables: { input: { ...user } }
    })
  })
})

export const deleteUser = graphql<Schema.UpdateUserMutation, {}, AuthSocialProps>(mutation.DeleteUser, {
  alias: 'deleteUser',
  props: (props) => ({
    deleteUser: (id: Schema.DeleteUserInput) => props.mutate({
      variables: { input: { id } }
    })
  })
})

export const login = graphql<Schema.LoginUserMutation, {}, AuthServerProps>(mutation.LoginUser, {
  props: (props) => ({
    alias: 'login',
    loginUser: (credentials: Schema.LoginUserInput) => props.mutate({
      variables: { input: { ...credentials } }
    })
  })
})

export const forgotPassword = graphql<Schema.ForgotPasswordMutation, {}, AuthServerProps>(mutation.ForgotPassword, {
  alias: 'forgotPassword',
  props: (props) => ({
    forgotPassword: (newCredentials: Schema.ChangeUserPasswordInput) => props.mutate({
      variables: { input: { ...newCredentials } }
    })
  })
})
