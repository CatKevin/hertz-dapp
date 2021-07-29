import React from "react"
import Container from "components/layout/Container"
import { Link } from "react-router-dom"
import { Flex, Heading, Text, Box, Input, Button } from "leek-uikit"
import VaultHero from "../General/VaultHero"
import BreadcrumbList from "../General/BreadcrumbList"
import Divider from "../General/Divider"

const Advanced = () => {

    return (
        <div>
            <VaultHero />
            <Container style={{ marginTop: "20px" }}>
                <BreadcrumbList step={4} />

                <Divider />
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Advanced Settings (optional)
                    </Heading>

                    <Text mt="10px">Only change these settings if you know what you are doing.
                        <Text bold style={{ display: "inline", marginLeft: "5px" }}>Advanced settings cannot be changed after creation.</Text>
                    </Text>

                    <Text mt="10px" bold>
                        Flash Loan Protection
                    </Text>

                    <Text mt="10px">
                        Setting a minimum time between deposits and withdrawals can protect a vault from various forms of arbitrage. It defaults to 24 hours.
                    </Text>

                    <div style={{ marginTop: "10px" }}>
                        <Box style={{ marginTop: "10px" }}>
                            <Text>Timelock shares for</Text>
                            <Input readOnly value="24 hours" />
                        </Box>

                        <Box style={{ marginTop: "10px" }}>
                            <Text bold>Risk Management Policies</Text>
                            <Text mt="5px">No policies set</Text>
                        </Box>
                    </div>

                    <Box mt="10px">
                        <Button as={Link} to="/assets/setup/5">Next</Button>
                    </Box>
                </Flex>
            </Container>
        </div >
    )
}
export default Advanced