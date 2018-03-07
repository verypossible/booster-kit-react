const fetchPost = (url: string, data: object) =>
  fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *omit
    headers: {
      'content-type': 'application/json',
      'user-agent': 'Mozilla/4.0 MDN Example'
    },
    method: 'POST', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer' // *client
  }).then(response => response.json()) // parses response to JSON

const api = (endpoint: string) =>
  `http://staging-app.theamplify.com/api/v1/${endpoint}`

export const post = <P extends {}>(endpoint: string, payload: P) =>
  fetchPost(api(endpoint), payload)

// postData('http://example.com/answer', { answer: 42 })
//   .then(data => console.log(data)) // JSON from `response.json()` call
//   .catch(error => console.error(error))
