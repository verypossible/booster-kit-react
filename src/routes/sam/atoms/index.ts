import * as React from 'react'

import styled from 'ui'

const Form = styled.form`
  width: 100%;
  max-width: 16rem;
`

const Box = styled.div`
  display: flex;
`

const Input = styled.input`
  background-color: none;
`

const Button = styled.button`
  background-color: none;
  border: none;
  pointer: cursor;
`

const Span = styled.span`
  color: ${props => props.color || 'black'};
`

export { Box, Button, Form, Input, Span }
