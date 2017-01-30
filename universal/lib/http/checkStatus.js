const parseError = response => Promise.resolve(response.json())

export async function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const message = await parseError(response)
    const error = new Error(message.error, response)
    return Promise.reject(error)
  }
}
