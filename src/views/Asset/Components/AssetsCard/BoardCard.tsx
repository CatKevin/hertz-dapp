import React from "react"
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { BaseLayout, Flex, Heading, Card, CardHeader, Text, Button } from "leek-uikit";
import UnlockButton from "components/UnlockButton";
import { useWallet } from '@binance-chain/bsc-use-wallet'

const CardLayout = styled(BaseLayout)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  padding-top:50px;
  padding-bottom:50px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
   padding:30px
  }
`

const CardConatiner = styled.div`
    padding:50px;

    @media (max-width: 768px) {
        padding:30px
    }
`

const BoardCard = () => {
    const { account } = useWallet()

    return (
        <div>
            <CardLayout>
                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading>Asset Deposit</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                Asset Deposit Description
                            </Text>
                        </Flex>

                        {
                            account ? <Button as={Link} fullWidth to="/assets/deposit">Browse</Button> : <UnlockButton fullWidth />
                        }

                    </CardConatiner>

                </Card>

                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading>Vault Management</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                Network Monitor Description
                            </Text>
                        </Flex>

                        {
                            account ? <Button fullWidth>Create Vault</Button> : <UnlockButton fullWidth />
                        }

                    </CardConatiner>

                </Card>

            </CardLayout>


            <CardLayout>
                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading>Network Monitor</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                Vault Management Description
                            </Text>
                        </Flex>

                        {
                            account ? <Button fullWidth>Browse</Button> : <UnlockButton fullWidth />
                        }

                    </CardConatiner>

                </Card>

            </CardLayout>
        </div>

    )

}

export default BoardCard