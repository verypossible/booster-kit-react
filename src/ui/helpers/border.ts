interface BorderConfig {
  right?: string,
  left?: string,
  top?: string,
  bottom?: string
}

export type Border = BorderConfig | string

const makeBorder = (border: Border): string => {
  if (typeof border === 'object') {
    return Object.entries(border).map(([key, value]) => `border-${key}: ${value};`).join(' ')
  }
  return `border: ${border};`
}

export default makeBorder
