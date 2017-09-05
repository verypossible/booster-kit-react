import styled from 'styled-components'

import base from './base'

const color = 'rgba(255,255,255, 0.1)'
const xGradient = `
  0deg,
  transparent 24%,
  ${color} 25%,
  ${color} 26%,
  transparent 27%,
  transparent 74%,
  ${color} 75%,
  ${color} 76%,
  transparent 77%,
  transparent
`

const yGradient = `
  90deg,
  transparent 24%,
  ${color} 25%,
  ${color} 26%,
  transparent 27%,
  transparent 74%,
  ${color} 75%,
  ${color} 76%,
  transparent 77%,
  transparent
`
const Wrapper = styled.div`
 grid-area: main;
 background-color: rgb(60,60,60);
 height: 100%;
 width: 100%;
 display: flex;
 ${base}

.storm-diagrams-canvas {
	height: 100%;
	background-color: rgb(60,60,60);
	background-image: linear-gradient(${xGradient}), linear-gradient(${yGradient});
	background-size: 50px 50px;

	path {
		stroke: ${color};
	}

	.pointui {
		fill: ${color};
	}
}
`
export default Wrapper
