import React from 'react'
import { Box, Flex, Heading, Image } from 'hertz-uikit'
import styled from 'styled-components'
import Container from 'components/layout/Container'

const StyledHero = styled(Box)`
 background-image: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  margin-top:20px;
`

const DesktopImage = styled(Image)`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box pr="32px">
            <Title>
              Hertz Lucky Draw
            </Title>
            <Heading mb="16px">
              Sometimes the Good Things in Life Do Come Easy
            </Heading>
          </Box>
          <DesktopImage src="./images/lottery/luckyDraw.png" width={250} height={250} />
        </Flex>
      </Container>
    </StyledHero >
  )
}

export default Hero