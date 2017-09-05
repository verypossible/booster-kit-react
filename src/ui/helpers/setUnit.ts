import * as S from 'string'

import hasUnit from './hasUnit'

const isNumber = (v: string): boolean => S(v).isNumeric()
const set = (v, themeItem) => (hasUnit(v) && v) || themeItem[v] || (isNumber(v) && `${v}em`) || v

const setUnit = (value, themeItem) => S(value)
  .split(' ')
  .map(v => set(v, themeItem))
  .join(' ')

export default setUnit
