import atom from 'ui'

import icons from '../assets/icons@2x.png'

const x = {
  x1: -6,
  x10: -312,
  x11: -346,
  x12: -380,
  x13: -412,
  x14: -442,
  x2: -40,
  x3: -74,
  x4: -108,
  x5: -137,
  x6: -176,
  x7: -205,
  x8: -244,
  x9: -278
}

const y = {
 y1: -6,
 y10: -310,
 y11: -348,
 y12: -37,
 y2: -37,
 y3: -71,
 y4: -105,
 y5: -142,
 y6: -173,
 y7: -207,
 y8: -239,
 y9: -280
}

const coords = (xCoord, yCoord) => `${xCoord}px ${yCoord}px`

const focusIcon = {
  function: coords(x.x9, y.y5),
  variable: coords(x.x1, y.y1)
}

const DocIcon = atom.i`
  background: url(${icons}) no-repeat ${({ icon }) => focusIcon[icon]};
  display: inline-block;
  width: 22px;
  height: 22px;
  margin: 0 3px 2px 0;
`

export default DocIcon
