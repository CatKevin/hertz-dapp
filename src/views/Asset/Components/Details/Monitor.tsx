import React from "react"
import styled from "styled-components"
import Container from "components/layout/Container"
import Select, { OptionProps } from 'components/Select/select'
import { Text, Card, Flex, Heading, BaseLayout, Box, Input } from "leek-uikit"
import Row, { NameColumn, AumColumn, TopAssetsColumn, InceptionColumn } from "../General/Row"
import MonitorRow from "../General/MonitorRow"
import Hero from "../General/Hero"
import monitor from "../../Constants/monitor.json"
import Questions from "../General/Questions"

const MonitorLayout = styled(BaseLayout)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: 30px auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`

const StyledIconContainer = styled(Box)`
  background-image:linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%);
  width:50px;
  height:50px;
  border-radius:10px;
  position:relative;
  margin-right:5px;
`

const StyledIcon = styled.img`
  position:absolute;
  width:32px;
  top:9px;
  left:9px;
  filter:brightness(0) invert(1);
`

const StyledMonitorCard = styled(Card)`
  background-repeat: no-repeat;
  background-size: contain;
  padding:20px;
  width: 100%;
  height:100px;
  border-radius:15px;
  display:flex;
  align-items:center;
`

const monitorFigure = [
    {
        title: "Vaults",
        imgSrc: "./images/asset/network/vault.svg",
        value: "785"
    },

    {
        title: "Assets Management",
        imgSrc: "./images/asset/network/assets.svg",
        value: "$91,918,973.21"
    },

    {
        title: "Deposits",
        imgSrc: "./images/asset/network/deposits.svg",
        value: "1,830"
    },
]

const Monitor = () => {
    const title = "Explore and Learn"
    const heading = "Monitor the assets at any time"
    return (
        <div>
            <Hero title={title} heading={heading} />

            <Container>
                <MonitorLayout>
                    {
                        monitorFigure.map((item) => (
                            <StyledMonitorCard key={item.title}>
                                <Flex alignItems="center" justifyContent="flex-start">
                                    <StyledIconContainer>
                                        <StyledIcon src={item.imgSrc} alt={item.title} />
                                    </StyledIconContainer>

                                    <Box>
                                        <Heading>{item.title}</Heading>
                                        <Text>{item.value}</Text>
                                    </Box>
                                </Flex>
                            </StyledMonitorCard>
                        ))
                    }
                </MonitorLayout>
            </Container>

            <Container>
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Assets Monitor
                    </Heading>
                </Flex>

                <Flex width="100%" alignItems="center" justifyContent="space-between" mb="20px">
                    <div style={{ width: "300px" }}>
                        <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
                            Search Funds
                        </Text>
                        <Input placeholder="Search..." />
                    </div>

                    <div>
                        <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
                            Sort by
                        </Text>
                        <div>
                            <Select
                                options={[
                                    {
                                        label: 'Name',
                                        value: 'Name',
                                    },
                                    {
                                        label: 'Amount',
                                        value: 'Amount',
                                    },
                                    {
                                        label: 'Price',
                                        value: 'Price',
                                    },
                                    {
                                        label: 'Lock Value',
                                        value: 'Lock Value',
                                    },
                                ]}
                            />
                        </div>
                    </div>

                </Flex>

                <Card>
                    <Row>
                        <Box>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                # Index
                            </Text>
                        </Box>
                        <NameColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                NAME
                            </Text>
                        </NameColumn>
                        <AumColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                ADDRESS
                            </Text>
                        </AumColumn>
                        <TopAssetsColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                Amount
                            </Text>
                        </TopAssetsColumn>

                        <InceptionColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                Current Price
                            </Text>
                        </InceptionColumn>

                        <Box style={{ width: "150px" }}>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                Total Value Locked
                            </Text>
                        </Box>
                    </Row>

                    {
                        monitor.map((item) => (
                            <MonitorRow key={item.id} imgSrc={`./images/asset/token/${item.token.toLowerCase()}.png`} name={item.name} address={item.address} amount={item.amount} price={item.price} lockValue={item.lockValue} token={item.token} index={item.id} />
                        ))
                    }
                </Card>

                <Questions />
            </Container>
        </div>
    )

}

export default Monitor