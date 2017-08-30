import S from 'string'

const getValue = (value, units) => {
  switch (true) {
    case !value:
      return 'auto'
    case S(value).isNumeric():
      return `${Math.round((value / units) * 100)}%`
    case !S(value).isNumeric():
      return value
    default:
      return null
  }
}

const autoTrack = name => /^px|em|rem|%|vh|vmin/.test(name)

const valueAccumulator = (parts, units, length) => {
  let prevName
  const result = (name, val) => !autoTrack(name) ? [val] : [name]
  return parts.reduce((acc, [name, value], index) => {
    const base = val => `[${prevName}-end ${name}-start] ${getValue(val, units)}`
    if (index === 0) {
      const first = result(name, `[${name}-start] ${getValue(value, units)}`)
      prevName = name
      return acc.concat(first)
    }

    if (index === (length - 1)) {
      const last = result(name, `${base(value)} [${name}-end]`)
      prevName = name
      return acc.concat(last)
    }

    const middle = result(name, base(value))
    prevName = name
    return acc.concat([middle])
  }, [])
}

export const buildTrack = track => {
  const parts = track.includes('(') ? track : S(track)
    .split('/')
    .map(p => p.trim().split(' '))

  if (Array.isArray(parts)) {
    const units = parts.reduce((a, b) => {
      const percentBasedSize = S(a[1]).isNumeric() && S(b[1]).isNumeric()
      return percentBasedSize ? S(a[1]).toInteger() + S(b[1]).toInteger() : false
    })

    return valueAccumulator(parts, units, parts.length).join(' ')
  }

  return parts
}

export const buildTrackItem = trackItem => {
  const span = S(trackItem).include('/')
  if (span) {
    const trackParts = S(trackItem)
      .split('/')
      .map(s => s.trim())

    const formatStart = start => S(start).include('-start') ? start : `${start}-start`
    const formatEnd = end => S(end).include('-end') ? end : `${end}-end`
    const [rowStart, columnStart, rowEnd, columnEnd] = trackParts
    return {
      column: `${formatStart(columnStart)} / ${formatEnd(columnEnd)}`,
      row: `${formatStart(rowStart)} /  ${formatEnd(rowEnd)}`

    }
  }

  return `${trackItem}-start`
}

export const buildGap = (gap, theme) => {
  if (!gap) {
    return theme.grid.gap.medium
  }

  const rowsAndColumns = S(gap).include('/')
  if (rowsAndColumns) {
    const gaps = S(gap)
      .split('/')
      .map(s => s.trim())

    const [row, column] = gaps
    const rowVal = theme.grid.gap[row] || row
    const columnVal = theme.grid.gap[column] || column
    return `${rowVal} / ${columnVal}`
  }

  return `${theme.grid.gap[gap] || gap}`
}
