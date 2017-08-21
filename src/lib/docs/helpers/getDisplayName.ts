export default function getDisplayName (WrappedComponent: any, hocName: string) {
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  return hocName ? `${hocName}(${name})` : name
}
