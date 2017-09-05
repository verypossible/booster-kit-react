import { css, keyframes } from 'styled-components'

const dash = keyframes`
  from {
    stroke-dashoffset: 24;
  }
  to {
    stroke-dashoffset: 0;
  }
`

export default css`
.storm-diagrams-canvas {
  position: relative;
  flex-grow: 1;
  display: flex;
  cursor: move;
  overflow: hidden;
  width: 100%;

  .point {
    fill: rgba(white,0.5);
    &.selected{
      fill: rgb(0,192,255);
    }
  }

  .selector {
    position: absolute;
    background-color: rgba(0,192,255,0.2);
    border: solid 2px rgb(0,192,255);
  }

  svg {
    position: absolute;
    height: 100%;
    width: 100%;
    transform-origin: 0 0;
    overflow: visible;
  }

  .node-view {
    top:0;
    left:0;
    right:0;
    bottom:0;
    position: absolute;
    pointer-events: none;
    transform-origin: 0 0;
  }

  .node {
    position: absolute;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    user-select: none;
    cursor: move;
    pointer-events: all;

    &.selected {
      > * {
        border-color:rgb(0,192,255) !important;
        -webkit-filter: drop-shadow( 0 0 20px rgba(0,192,255,0.5));
      }
    }
  }

  path {
    fill:none;
    pointer-events:all;

    &.selected {
      stroke: rgb(0,192,255) !important;
      stroke-dasharray: 10,2;
      animation: ${dash} 1s linear infinite;
    }
  }

  .port {
    width: 15px;
    height: 15px;
    background: rgba(white,0.1);
    &:hover,&.selected{
      background: rgb(192,255,0);
    }
  }

  .basic-node {
    background-color: rgb(30,30,30);
    border-radius: 50%;
    font-family:Arial;
    color: white;
    border: solid 2px black;
    overflow: visible;
    font-size: 11px;
    box-shadow: 0 0 10px rgba(black,0.5);

    .title {
  /*			background-image: linear-gradient(rgba(black,0.1),rgba(black,0.2));*/
      background: rgba(black,0.3);
      display: flex;
      white-space: nowrap;
      > * {
        align-self: center;
      }
      .fa {
        padding: 5px;
        opacity: 0.2;
        cursor: pointer;

        &:hover {
          opacity: 1.0;
        }
      }
      .name {
        flex-grow: 1;
        padding: 5px 5px;
      }
    }

    .ports {
      display: flex;
      background-image: linear-gradient(rgba(black,0.1),rgba(black,0.2));
      .in, .out {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .in-port,.out-port {
        display: flex;
        margin-top: 1px;
        >*{
          align-self: center;
        }
        .name {
          padding: 0 5px;
        }
      }
      .out-port {
        justify-content: flex-end;
        .name{
          justify-content: flex-end;
          text-align: right;
        }
      }
    }
  }
}

`
