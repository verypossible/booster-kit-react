import border from './border'

describe('(UI) Border Helper', () => {
  test('converts an object prop into the string representation of the CSS border spec', () => {
    const borderProp = {
      bottom: '3em',
      right: '2px dotted red',
      top: '1px solid #CCC'
    }

    const borderCSS = 'border-bottom: 3em; border-right: 2px dotted red; border-top: 1px solid #CCC;'
    expect(border(borderProp)).toEqual(borderCSS)
  })

  test('returns a shorthand border CSS attribute when passed a string', () => {
    const borderProps = '1px solid red'

    const borderCSS = 'border: 1px solid red;'
    expect(border(borderProps)).toEqual(borderCSS)
  })
})
