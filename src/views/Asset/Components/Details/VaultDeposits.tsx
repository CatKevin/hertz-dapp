import React, { useState } from "react"
import Container from "components/layout/Container"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Flex, Heading, Text, Toggle, InfoIcon, Box, Input, Button } from "hertz-uikit"
import truncateWalletAddress from "utils/truncateWalletAddress"
import Select from 'components/Select/select'
import VaultHero from "../General/VaultHero"
import BreadcrumbList from "../General/BreadcrumbList"
import Divider from "../General/Divider"
import Questions from "../General/Questions"

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

const VaultDeposits = () => {
    const [isPersonLimit, setIsPersonLimit] = useState(false)
    const [isAmountLimit, setIsAmountLimit] = useState(false)
    const [maxAmount, setMaxAmount] = useState(false)
    const [minAmount, setMinAmount] = useState(false)
    const [walletList, setWalletList] = useState("");


    return (
        <div>
            <VaultHero />
            <Container style={{ marginTop: "20px" }}>
                <BreadcrumbList step={2} />

                <Divider />
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Deposits (optional)
                    </Heading>

                    <Flex>
                        <Text>Deposits can be subject to restrictions, such as who is allowed to deposit, and what amounts they can deposit.
                            <Text bold style={{ display: "inline", marginLeft: "5px" }}>Deposit settings can be changed at any time.</Text>
                        </Text>
                    </Flex>

                    <ToggleWrapper>
                        <Toggle checked={isPersonLimit} onChange={() => setIsPersonLimit(!isPersonLimit)} />
                        <Text mr="5px">Limit who can deposit</Text>
                        <InfoIcon />
                    </ToggleWrapper>

                    {
                        isPersonLimit && <div >
                            <Box mt="10px">
                                <Text>Adding Ethereum addresses to the whitelist specifically permissions those addresses to deposit into the vault. Note that if this policy is enabled, depositors who are NOT on the list will not be able to deposit into the vault.</Text>
                            </Box>

                            <Box mt="10px">
                                <Text mb="5px">Depositor Whitelist</Text>
                                <Box width="50%">
                                    <Input value={walletList} placeholder="Enter address..." onChange={(e) => setWalletList(e.target.value)} />
                                    <Button size="sm" variant="secondary" mt="10px" onClick={() => setWalletList(truncateWalletAddress("0xB232D899b39Ee282EC26BBA385497b9FCD150ED3"))}>Add Manager Wallet</Button>
                                </Box>
                            </Box>
                        </div>
                    }


                    <ToggleWrapper>
                        <Toggle checked={isAmountLimit} onChange={() => setIsAmountLimit(!isAmountLimit)} />
                        <Text mr="5px">Limit deposit amount</Text>
                        <InfoIcon />
                    </ToggleWrapper>

                    {
                        isAmountLimit && <div>
                            <Box mt="10px">
                                <Text mb="10px">You can set upper and/or lower limits on individual deposits. In addition, you can also reject all deposits.</Text>

                                <Flex alignItems="center" justifyContent="flex-start">
                                    <Toggle checked={minAmount} onChange={() => setMinAmount(!minAmount)} />

                                    <Box width="50%" style={{ marginLeft: "10px" }}>
                                        <Text mb="5px">Minimum Deposit Amount</Text>
                                        <Input value="1 WBTC" readOnly disabled={!minAmount} />
                                    </Box>
                                </Flex>

                                <Flex alignItems="center" justifyContent="flex-start" mt="20px">
                                    <Toggle checked={maxAmount} onChange={() => setMaxAmount(!maxAmount)} />

                                    <Box width="50%" style={{ marginLeft: "10px" }}>
                                        <Text mb="5px">Maximum Deposit Amount</Text>
                                        <Input value="10 WBTC" readOnly disabled={!maxAmount} />
                                    </Box>
                                </Flex>

                                <Divider />

                                <Flex alignItems="center" justifyContent="flex-start">
                                    <Toggle checked={!maxAmount || !minAmount} onChange={() => { setMaxAmount(false); setMinAmount(false); }} />
                                    <Text ml="10px" mr="5px">Reject all deposits</Text>
                                    <InfoIcon />
                                </Flex>
                            </Box>
                        </div>
                    }

                    <Box mt="20px">
                        <Button as={Link} to="/assets/setup/3">Next</Button>
                    </Box>

                </Flex>

                <Questions />
            </Container>

        </div >

    )
}
export default VaultDeposits