import React from "react"
import Container from "components/layout/Container"
import { Text, Card, Flex, Heading } from "leek-uikit"
import Hero from "../General/Hero"

const Monitor = () => {
    const title = "Explore and Learn"
    const heading = "Monitor the assets at any time"
    return (
        <div>
            <Hero title={title} heading={heading} />

            <Container>
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="40px" mb="5px">
                        Top Assets
                    </Heading>
                </Flex>

            </Container>
        </div>
    )

}

export default Monitor