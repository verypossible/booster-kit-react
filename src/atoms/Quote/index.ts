import atom from 'ui'

const base = ({ theme }: Quote) => `
  display: block;
  width: 100%;
  height: auto;
  margin: 0 0;
  padding: 0 0;
  float: left;
  clear: both;
  position: relative;
  font-size: 2.5em;
  line-height: 145%;
  text-align: left;
  color: ${theme.colors.primaryColorInverted};
`

const Quote = atom.q`
  ${base}
`
export default Quote
