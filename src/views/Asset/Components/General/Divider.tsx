import React from 'react'
import styled from 'styled-components'

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 40px 0;
  width: 100%;
`

export default Divider