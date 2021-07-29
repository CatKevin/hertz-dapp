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
                            <Heading>Hertz Fund Dashboard</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                Hertz Fund Dashboard gives you a one stop dashboard to reach hundreds and thousands of Fund created by
                                Fund Manager around the world. You can pick the one you like based on your own Risk tolerance,
                                Portofolio Preferences and Return Ratio. Also make sure to join our community to disscuss different
                                trading strategy under different Fund Manager.
                            </Text>
                        </Flex>

                        {account ? (
                            <Button as={Link} fullWidth to="/assets/deposit">
                                Browse
                            </Button>
                        ) : (
                            <UnlockButton fullWidth />
                        )}
                    </CardConatiner>
                </Card>

                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading>Create your Fund</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                Are you hyped to be fund manger? Whether you are dreamed to be Warren Buffet or Ray Dalio, now it is
                                the time to open your own fund / vault under your finger tips in a decentralized fashion. If you fund
                                potofolio leading the way, then it potentially can attract thousands of followers to invest in your
                                fund! Lets check it out here!
                            </Text>
                        </Flex>

                        {account ? <Button fullWidth>Create Fund</Button> : <UnlockButton fullWidth />}
                    </CardConatiner>
                </Card>
            </CardLayout>

            <CardLayout>
                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading>Network Stats</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                As an Asset management platform, stats of the whole network is the top priority for us. Over here you
                                can see all the important stats including Hertz Price, Hertz Market Cap, Network C-Ratio, Active
                                C-Ratio, Token distributed heat map. Lucky draw latest winners. Total AUM, total fund managers and
                                vaults etc etc.
                            </Text>
                        </Flex>

                        {account ? <Button fullWidth as={Link} to="/assets/monitor">Check Status</Button> : <UnlockButton fullWidth />}
                    </CardConatiner>
                </Card>

                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="space-between">
                            <Heading>Hertz Top Index</Heading>
                        </Flex>
                    </CardHeader>

                    <CardConatiner>
                        <Flex alignItems="center" justifyContent="center" mb="20px">
                            <Text>
                                hTopIndex is a tokenized index mirroring the best traders on Hertz. The Hertz platform crowdsources
                                the best managers around the world and ranks them based on their risk-adjusted returns. With hTopIndex
                                anyone can easily get exposure to the best traders through one ERC-20 token. Hertz ranks managers
                                based on their Score.
                            </Text>
                        </Flex>

                        {account ? (
                            <Button as={Link} fullWidth to="/assets/hertzTop">
                                Explore
                            </Button>
                        ) : (
                            <UnlockButton fullWidth />
                        )}
                    </CardConatiner>
                </Card>
            </CardLayout>
        </div>
    )

}

export default BoardCard