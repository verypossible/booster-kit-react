import S from 'string'

import hasUnit from './hasUnit'

const isNumber = (v: string): boolean => S(v).isNumeric()
const set = (v, fromTheme) => (hasUnit(v) && v) || fromTheme[v] || (isNumber(v) && `${v}em`) || v

const setUnit = (value, fromTheme) => S(value)
  .split(' ')
  .map(v => set(v, fromTheme))
  .join(' ')

export default setUnit
