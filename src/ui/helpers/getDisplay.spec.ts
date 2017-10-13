import getDisplay, { SetDisplay } from './getDisplay'

const setup = (props?: SetDisplay) => getDisplay(props)

describe('(UI) getDisplay Helper', () => {
  test('sets the correct display value based on props', () => {
    const grid = setup({ block: true, columns: 'auto' })

    const inline = setup({ inline: true })

    const inlineBlock = setup({ inlineBlock: true })

    const block = setup({ block: true })

    const flex = setup()

    const returnsFalse = setup({ noFlex: true })

    expect(grid).toEqual('grid')
    expect(inline).toEqual('inline')
    expect(inlineBlock).toEqual('inline-block')
    expect(block).toEqual('block')
    expect(flex).toEqual('flex')
    expect(returnsFalse).toBeFalsy()
  })
})
