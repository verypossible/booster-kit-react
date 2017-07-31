import atom from 'ui'

const base = ({ theme }: Cite) => `
  display: block;
  width: 100%;
  height: auto;
  margin: 0 0;
  padding: 0 0;
  float: left;
  clear: both;
  position: relative;
  left: -.25em;
  font-size: 1.5em;
  line-height: 125%;
  text-align: left;
  color: ${theme.colors.primaryColorInverted};

  &::before {
    content: '—';
    display: inline;
    position: relative;
    color: inherit;
  }
`

const Cite = atom.cite`
  ${base}
`
export default Cite
