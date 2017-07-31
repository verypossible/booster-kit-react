const BUFFERED_ACTION_RETURN = 'buffer: buffered action'

const setImmediate = (
  typeof global !== 'undefined' &&
  ((typeof global.setImmediate !== 'undefined') ?
    global.setImmediate : setTimeout
  )
)

export default function (breaker) {
  let active = true
  const queue = []

  const breakerType = typeof breaker

  if (breakerType === 'string' || breakerType === 'symbol') {
    const actionType = breaker

    breaker = (action) => action.type === actionType
  }

  return () => {
    return (next) => {
      return (action) => {
        // console.log('next', next, action)
        if (!active) {
          return next(action)
        }

        if (breaker(action)) {
          active = false
          const result = next(action)
          setImmediate(() => {
            const queueResults = []
            queue.forEach((queuedAction) => {
              const queuedActionResult = next(queuedAction)
              queueResults.push(queuedActionResult)
            })
          })
          return result
        } else {
          queue.push(action)
          // consider returning a dummy action, or maybe null for cleanliness
          return BUFFERED_ACTION_RETURN
        }
      }
    }
  }
}
