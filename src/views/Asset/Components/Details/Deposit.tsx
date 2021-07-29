import React from "react"
import Select, { OptionProps } from 'components/Select/select'
import { Text, Card, Flex, Heading, Input } from "leek-uikit"
import Container from "components/layout/Container"
import Hero from "../General/Hero"
import Row, { NameColumn, AumColumn, TopAssetsColumn, InceptionColumn, MonthColumn, DayColumn, WeekColumn } from "../General/Row"

import deposit from "../../Constants/depositList.json"
import DepositRow from "../General/DepositRow"
import Questions from "../General/Questions"

const Deposit = () => {
    const title = "Browse and Deposit"
    const heading = "Safety is our top priority"
    return (
        <div>
            <Hero title={title} heading={heading} />

            <Container>
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="40px" mb="5px">
                        Top Assets
                    </Heading>
                </Flex>

                <Flex width="100%" alignItems="center" justifyContent="space-between" mb="10px">
                    <div>
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
                                        label: 'AUM',
                                        value: 'AUM',
                                    },
                                    {
                                        label: 'Name',
                                        value: 'Name',
                                    },
                                    {
                                        label: 'Inception',
                                        value: 'Inception',
                                    },
                                    {
                                        label: 'This month',
                                        value: 'This month',
                                    },
                                ]}
                            />
                        </div>
                    </div>

                </Flex>

                <Card>
                    <Row>
                        <NameColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                NAME
                            </Text>
                        </NameColumn>
                        <AumColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                AUM
                            </Text>
                        </AumColumn>
                        <TopAssetsColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                TOP ASSETS
                            </Text>
                        </TopAssetsColumn>

                        <InceptionColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                SINCE INCEPTION
                            </Text>
                        </InceptionColumn>

                        <MonthColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                THIS MONTH
                            </Text>
                        </MonthColumn>

                        <DayColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                24H
                            </Text>
                        </DayColumn>

                        <WeekColumn>
                            <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                                LAST 7 DAYS
                            </Text>
                        </WeekColumn>
                    </Row>

                    {
                        deposit.map((item) => (
                            <DepositRow key={item.id} name={item.name} aum={item.aum} assets={item.assets} month={item.month} day={item.day} inception={item.inception} week={item.week} color={item.color} />
                        ))
                    }
                </Card>

                <Questions />
            </Container>

        </div>
    )

}

export default Deposit