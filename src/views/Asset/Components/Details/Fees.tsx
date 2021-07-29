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

const Fees = () => {
    const [isManagementChecked, setIsManagementChecked] = useState(false)
    const [isPerformanceChecked, setIsPerformanceChecked] = useState(false)
    const [isEntranceChecked, setIsEntranceChecked] = useState(false)

    return (
        <div>
            <VaultHero />
            <Container style={{ marginTop: "20px" }}>
                <BreadcrumbList step={1} />

                <Divider />
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Fees (optional)
                    </Heading>

                    <Flex>
                        <Text>There are several types of fees that can be charged. Please read each description carefully. All fees are paid out in shares of the vault.
                            <Text bold style={{ display: "inline", marginLeft: "5px" }}>Fee settings cannot be changed after creation.</Text>
                        </Text>
                    </Flex>

                    <ToggleWrapper>
                        <Toggle checked={isManagementChecked} onChange={() => setIsManagementChecked(!isManagementChecked)} />
                        <Text mr="5px">Charge Management Fee</Text>
                        <InfoIcon />
                    </ToggleWrapper>

                    {
                        isManagementChecked && <div>
                            <Box mt="10px">
                                <Text>Management fee is a flat fee charged to manage the vault. It is measured as an annual percent of total assets under management. It accrues continuously and is automatically paid out to the manager with every deposit and redemption.</Text>
                            </Box>

                            <Box mt="10px">
                                <Text mb="5px">Management Fee Rate</Text>
                                <Box width="50%">
                                    <Input readOnly value="1%" />
                                </Box>
                            </Box>
                        </div>
                    }


                    <ToggleWrapper>
                        <Toggle checked={isPerformanceChecked} onChange={() => setIsPerformanceChecked(!isPerformanceChecked)} />
                        <Text mr="5px">Charge Performance Fee</Text>
                        <InfoIcon />
                    </ToggleWrapper>

                    {
                        isPerformanceChecked && <div>
                            <Box mt="10px">
                                <Text>Performance fee is charged based on the vaults&apos;s performance. It can be claimed after each Crystallization Period, and it is subject to a high water mark. For an in-depth description of how this fee is calculated, please refer to the Enzyme Protocol Documentation.</Text>
                            </Box>

                            <Box mt="10px">
                                <Text mb="5px">Performance Fee Rate</Text>
                                <Box width="50%">
                                    <Input value="10%" read-only />
                                </Box>
                            </Box>

                            <Box mt="10px">
                                <Text mb="5px">Crystallization Period</Text>
                                <Box width="50%">
                                    <Input value="365 days" read-only />
                                </Box>
                            </Box>
                        </div>
                    }

                    <ToggleWrapper>
                        <Toggle checked={isEntranceChecked} onChange={() => setIsEntranceChecked(!isEntranceChecked)} />
                        <Text mr="5px">Charge Entrance Fee</Text>
                        <InfoIcon />
                    </ToggleWrapper>

                    {
                        isEntranceChecked && <div>
                            <Box mt="10px">
                                <Text>Entrance Fees are charged with every new deposit. The selected entrance fee is allocated to the manager.</Text>
                            </Box>

                            <Box mt="10px">
                                <Text mb="5px">Entrance Fee Rate</Text>
                                <Box width="50%">
                                    <Input value="1%" read-only />
                                </Box>
                            </Box>

                            <Box mt="10px">
                                <Text mb="5px">Entrance Fee allocated to</Text>
                                <Select
                                    options={[
                                        {
                                            value: 'Manager',
                                            label: 'Manager',
                                        },
                                        {
                                            value: 'Vault',
                                            label: 'Vault'
                                        }
                                    ]}
                                />
                            </Box>
                        </div>
                    }

                    <Box mt="10px">
                        <Button as={Link} to="/assets/setup/2">Next</Button>
                    </Box>

                </Flex>
            </Container>

        </div >

    )
}
export default Fees