{

  const vendors = ['ms', 'moz', 'webkit', 'o']
  const af = 'AnimationFrame'
  let lastTime = 0

  if('performance' in window == false)
      window.performance = {}

  if(!Date.now)
    Date.now = () => new Date().getTime()

  if ('now' in window.performance == false){
    let nowOffset = Date.now()

    if(performance.timing && performance.timing.navigationStart)
      nowOffset = performance.timing.navigationStart

    window.performance.now = () => Date.now() - nowOffset
  }

  for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      const vendor = vendors[x]
      window.requestAnimationFrame  = window[`${vendor}Request${af}`]
      window.cancelAnimationFrame   = window[`${vendor}Cancel${af}`] || window[`${vendor}CancelRequest${af}`]
  }

  if(!window.requestAnimationFrame){
    window.requestAnimationFrame = callback =>{
        const currTime    = Date.now()
        const timeToCall  = Math.max(0, 16 - (currTime - lastTime))
        const id          = window.setTimeout(() => callback(currTime + timeToCall), timeToCall)

        lastTime = currTime + timeToCall
        return id
    }
  }

  if(!window.cancelAnimationFrame)
    window.cancelAnimationFrame = id => clearTimeout(id)

}
