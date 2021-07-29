import React from "react"
import { Text, Card, Flex, Heading } from "leek-uikit"
import Container from "components/layout/Container"
import Hero from "../General/Hero"
import Row, { NameColumn, AumColumn, TopAssetsColumn, InceptionColumn, MonthColumn, DayColumn, WeekColumn } from "../General/Row"

const Deposit = () => {
    const title = "Browse and Deposit"
    const heading = "Safety is our top priority"
    return (
        <div>
            <Hero title={title} heading={heading} />

            <Container>
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="40px" mb="10px">
                        Top Assets
                    </Heading>
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
                </Card>
            </Container>

        </div>
    )

}

export default Deposit