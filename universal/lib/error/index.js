export function formError (error) {
  if (error.status > 499) {
    return {
      _error: 'There was a problem communicating with the remote server. Please try again shortly.'
    }
  }
  return {
    ...error.response.data.errors[0]
  }
}
