import React, { useState, useCallback } from 'react'
import { Text, Card, Flex, Heading, Box, BaseLayout, Button } from 'leek-uikit'
import Container from 'components/layout/Container'
import styled from 'styled-components'
import { LineChart, Line, PieChart, Pie, Sector, Cell, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'
import deposit from '../../Constants/depositList.json'

import Hero from '../General/Hero'
import Row, { NameColumn, AumColumn, TopAssetsColumn, InceptionColumn, MonthColumn } from '../General/Row'

import Questions from "../General/Questions"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ec2eb3', '#767177']

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

const barChartData = [
  {
    name: 'USD',
    amtY: '$24,000,000',
    amt: 24000000,
  },
  {
    name: 'ETH',
    amtY: '$6,000,000',
    amt: 6000000,
  },
  {
    name: 'BTC',
    amtY: '$12,000,000',
    amt: 12000000,
  },
  {
    name: 'DPI',
    amtY: '$8,727,272',
    amt: 8727272,
  },
  {
    name: 'NFT',
    amtY: '$2,397,839',
    amt: 2397839,
  },
  {
    name: 'Other',
    amtY: '$240,000',
    amt: 240000,
  },
]

const exposureData = [
  { name: 'USDT/USD', value: 400 },
  { name: 'ETH', value: 100 },
  { name: 'WBTC', value: 200 },
  { name: 'DPI', value: 150 },
  { name: 'NFT', value: 40 },
  { name: 'OTHERS', value: 10 },
]

const data = [
  {
    name: 'Bitcoin A',
    week: 30000,
    month: 55000,
    day: 41000,
  },
  {
    name: 'Bitcoin B',
    week: 28000,
    month: 65000,
    day: 39000,
  },
  {
    name: 'Bitcoin C',
    week: 33000,
    month: 45000,
    day: 37000,
  },
  {
    name: 'Bitcoin D',
    week: 38000,
    month: 35000,
    day: 35000,
  },
  {
    name: 'Bitcoin E',
    week: 42000,
    month: 30000,
    day: 41500,
  },
  {
    name: 'Bitcoin F',
    week: 39000,
    month: 38000,
    day: 43000,
  },
  {
    name: 'Bitcoin G',
    week: 40000,
    month: 43000,
    day: 45000,
  },
]


const CurrentLayout = styled(BaseLayout)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 50px;
  padding-bottom: 50px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`

const HertzTop: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [chartInterval, setChartInterval] = useState('month')
  const title = 'Hertz Top Index'
  const heading = 'Invest in best top 10 fund as an Index '


  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex],
  )

  return (
    <div>
      <Hero title={title} heading={heading} />
      <CurrentLayout>
        <Flex flexDirection="column" alignItems="center" justifyContent="" mb="20px" mt="20px">
          <Heading size="xxl" mb="10px">
            $1.31
          </Heading>
          <Heading size="md" mb="10px">
            VALUE MANAGED
          </Heading>
          <Text fontSize="30px" mb="10px">
            $1,061,397.21
          </Text>
          <Heading size="md" mb="10px">
            PERFORMANCE FEES
          </Heading>
          <Text fontSize="30px" mb="10px">
            10%
          </Text>
          <Heading size="md" mb="10px">
            LIFETIME RETURN ℹ️
          </Heading>
          <Text fontSize="30px" mb="10px" color="#31D0AA">
            +179.3%
          </Text>
          <Heading size="md" mb="10px">
            MINING APR ℹ️
          </Heading>
          <Text fontSize="30px" mb="10px" color="#31D0AA">
            19.3%
          </Text>
        </Flex>
        <Flex width="80%" flexDirection="column" alignItems="start" justifyContent="" mb="20px" mt="20px">
          <Heading size="xxl" mb="10px">
            Charts
          </Heading>
          <LineChart
            key={chartInterval}
            width={1000}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Line type="monotone" dataKey={chartInterval} stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
          <Flex width="100%" alignItems="center" justifyContent="center" mb="20px">
            <span style={{ marginRight: '10px' }}>
              <Button
                onClick={() => {
                  setChartInterval('day')
                }}
              >
                1 Day
              </Button>
            </span>
            <span style={{ marginRight: '10px' }}>
              <Button
                onClick={() => {
                  setChartInterval('week')
                }}
              >
                1 Week
              </Button>
            </span>
            <span>
              <Button
                onClick={() => {
                  setChartInterval('month')
                }}
              >
                3 Months
              </Button>
            </span>
          </Flex>
        </Flex>
      </CurrentLayout>

      <Container>
        <Flex alignItems="center" justifyContent="space-between" mb="20px" mt="20px">
          <Heading size="lg">About Hertz Top Index</Heading>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="20px">
          <Text>
            hTopIndex is a tokenized index mirroring the best traders on Hertz. The Hertz platform crowdsources the best
            managers around the world and ranks them based on their risk-adjusted returns. With hTopIndex anyone can
            easily get exposure to the best traders through one ERC-20 token. Hertz ranks managers based on their Score.
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="20px">
          <Text>
            Herts ranks managers based on their Score. The Score in turn is a reflection of a value-weighted
            risk-adjusted return measure called Sortino Ratio. At the end of each month, hTopIndex rebalances to the 10
            pools with the highest rank (place 1 to 10 on the Herts Leaderboard). Each pool has a weight in the index
            relative to their Score. hTopIndex is managed by a bot that constantly tracks the pools in the index and
            their underlying exposures and also pays the gas for all the rebalancing it’s doing. 100% of Performance
            fees are shared with managers of pools included in the index.
          </Text>
        </Flex>
      </Container>

      <Container>
        <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
          <Heading size="lg" color="secondary" mt="40px" mb="10px">
            Index Composition
          </Heading>
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
                # Fund Name
              </Text>
            </NameColumn>
            <AumColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                # Manager
              </Text>
            </AumColumn>
            <TopAssetsColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                # Weight
              </Text>
            </TopAssetsColumn>
            <InceptionColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                # Performance
              </Text>
            </InceptionColumn>
            <Box width="100px">
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                # Charts
              </Text>
            </Box>
          </Row>

          {deposit.map((item) => (
            <Row key={item.id}>
              <Box>
                <Text fontSize="" color="" textTransform="uppercase">
                  {item.id}
                </Text>
              </Box>
              <NameColumn>
                <Text fontSize="" color="" textTransform="uppercase">
                  {item.name}
                </Text>
              </NameColumn>
              <AumColumn>
                <Text fontSize="" color="" textTransform="uppercase">
                  {item.manager}
                </Text>
              </AumColumn>
              <TopAssetsColumn>
                <Text fontSize="" color="" textTransform="uppercase">
                  {item.weight}
                </Text>
              </TopAssetsColumn>
              <InceptionColumn>
                <Text fontSize="" color="" textTransform="uppercase">
                  {item.inception}
                </Text>
              </InceptionColumn>
              <MonthColumn>
                <Sparklines data={item.week} width={250} height={100}>
                  <SparklinesLine color={item.color} />
                  <SparklinesSpots />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
              </MonthColumn>
            </Row>
          ))}
        </Card>
        <Heading size="lg" mt="20px">
          Exposure
        </Heading>
        <Flex alignItems="center" justifyContent="space-between" mb="20px" mt="20px">
          <PieChart width={400} height={600}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={exposureData}
              cx="200"
              cy="300"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width={100} />
            <Bar dataKey="amt">
              {barChartData.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </Flex>
        <Questions />
      </Container>
    </div>
  )
}

export default HertzTop
