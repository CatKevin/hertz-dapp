import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import { Text, Box } from 'leek-uikit'
import Row, { NameColumn, AumColumn, TopAssetsColumn, InceptionColumn, MonthColumn, DayColumn, WeekColumn } from "./Row"

interface ListProps {
    index: string
    name: string,
    aum: string,
    assets: string[],
    inception: string,
    month: string,
    day: string,
    week: number[],
    color: string
}

const DepositRow: React.FC<ListProps> = ({ index, name, aum, assets, inception, month, day, week, color }) => {
    return (
        <Row>
            <Box>
                <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                    {index}
                </Text>
            </Box>
            <NameColumn>
                <Text>{name}</Text>
            </NameColumn>
            <AumColumn>
                <Text>{aum}</Text>
            </AumColumn>
            <TopAssetsColumn>
                {
                    assets.map((item) => (
                        <span>
                            <img key={item} src={`./images/asset/token/${item}.png`} alt={item} width="25px" />
                        </span>
                    ))
                }
            </TopAssetsColumn>

            <InceptionColumn>
                <Text color={parseFloat(inception) > 0 ? "success" : 'failure'}>{inception}</Text>
            </InceptionColumn>

            <MonthColumn>
                <Text color={parseFloat(month) >= 0 ? "success" : 'failure'}>{month}</Text>
            </MonthColumn>

            <DayColumn>
                <Text color={parseFloat(day) >= 0 ? "success" : 'failure'}>{day}</Text>
            </DayColumn>

            <WeekColumn>
                <Sparklines data={week}>
                    <SparklinesLine color={color} />
                    <SparklinesSpots />
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
            </WeekColumn>
        </Row>
    )
}

export default DepositRow