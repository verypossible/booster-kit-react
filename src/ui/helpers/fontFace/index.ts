const fontFace = (
  name: string,
  src: string,
  fontWeight: string = 'normal',
  fontStyle: string = 'normal'
) => `
  @font-face{
    font-family: "${name}";
    src: url(${require(`../../fonts/${src}.eot`)});
    src: url(${require(`../../fonts/${src}.eot`)}?#iefix) format("embedded-opentype"),
         url(${require(`../../fonts/${src}.woff`)}) format("woff"),
         url(${require(`../../fonts/${src}.ttf`)}) format("truetype"),
         url(${require(`../../fonts/${src}.svg`)}#${name}) format("svg");

    font-style: ${fontStyle};
    font-weight: ${fontWeight};
  }
`
export default fontFace
