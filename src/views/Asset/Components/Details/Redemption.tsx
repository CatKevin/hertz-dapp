import React, { useState } from "react"
import Container from "components/layout/Container"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Flex, Heading, Text, Toggle, InfoIcon, Box, Input, Button } from "leek-uikit"
import Select from 'components/Select/select'
import VaultHero from "../General/VaultHero"
import BreadcrumbList from "../General/BreadcrumbList"
import Divider from "../General/Divider"

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  margin-top:20px;

  ${Text} {
    margin-left: 8px;
  }
`

const Redemption = () => {
    const [withdrawWindow, setWithdrawWindow] = useState(false)

    return (
        <div>
            <VaultHero />
            <Container style={{ marginTop: "20px" }}>
                <BreadcrumbList step={3} />

                <Divider />
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Redemptions (optional)
                    </Heading>


                    <Text>In principle withdrawals can happen any time. However, in some cases where a trade doesn’t settle instantly (like on Synthetix), there may be short time windows of a few minutes when depositors can’t withdraw their shares.</Text>

                    <Text mt="10px">A guaranteed redemption window can protect depositors from not being able to withdraw. It is recommended in cases where Synthetix assets are frequently traded.
                        <Text bold style={{ display: "inline", marginLeft: "5px" }}>The Guaranteed Redemption Window cannot be changed after creation.</Text>
                    </Text>


                    <ToggleWrapper>
                        <Toggle checked={withdrawWindow} onChange={() => setWithdrawWindow(!withdrawWindow)} />
                        <Text mr="5px">Provide a Guaranteed Withdrawal Window</Text>
                        <InfoIcon />
                    </ToggleWrapper>

                    {
                        withdrawWindow && <div>
                            <Box mt="10px">
                                <Text mb="5px">The Guaranteed Redemption Policy ensures that the vault will have a daily time period during which depositors will be able to freely withdraw their shares or deposit more. During that period, the vault cannot trade on Synthetix.</Text>
                                <Box width="50%" style={{ marginTop: "10px" }}>
                                    <Text>Window Start Time (UTC - 10)</Text>
                                    <Input readOnly value="00:00" />
                                </Box>

                                <Box width="50%" style={{ marginTop: "10px" }}>
                                    <Text>Duration</Text>
                                    <Input readOnly value="60 minutes" />
                                </Box>
                            </Box>
                        </div>
                    }

                    <Box mt="10px">
                        <Button as={Link} to="/assets/setup/4">Next</Button>
                    </Box>
                </Flex>
            </Container>

        </div >

    )
}
export default Redemption