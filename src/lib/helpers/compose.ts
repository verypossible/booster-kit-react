/* tslint:disable:ban-types */
export default function compose (...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: () => void) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: Function[]) => a(b(...args)))
}
