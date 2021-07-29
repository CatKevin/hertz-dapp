import React from "react"
import styled from "styled-components"
import { Box, Flex, Text, Heading, Link } from 'leek-uikit'
import Divider from "./Divider"

const InlineLink = styled(Link)`
  display: inline;
`

const Questions = () => {
    return (
        <Box width="100%" style={{ marginBottom: "30px" }}>
            <Divider />
            <Flex justifyContent="center" alignItems="center" flexDirection={['column', 'column', 'row']}>
                <Flex maxWidth="100px" mr="8px" mb="16px">
                    <img src="./images/lottery/question.png" alt="question" />
                </Flex>
                <Flex maxWidth="300px" flexDirection="column">
                    <Heading mb="16px">
                        Still got questions?
                    </Heading>
                    <Text>
                        Check our in-depth guide on
                        <InlineLink href="https://docs.leekdao.xyz" marginLeft="5px" target="_blank">
                            our detailed document
                        </InlineLink>
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Questions