import React from 'react'
import { Box, Flex, Heading, Image } from 'hertz-uikit'
import styled from 'styled-components'
import Container from 'components/layout/Container'

interface HeroProps {
    title: string,
    heading: string
    image?: string
}

const StyledHero = styled(Box)`
 background-image:linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%);
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

const Hero: React.FC<HeroProps> = ({ title, heading }) => {
    return (
        <StyledHero>
            <Container>
                <Flex alignItems="center" justifyContent="space-between">
                    <Box pr="32px">
                        <Title>
                            {title}
                        </Title>
                        <Heading mb="16px">
                            {heading}
                        </Heading>
                    </Box>
                </Flex>
            </Container>
        </StyledHero >
    )
}

export default Hero