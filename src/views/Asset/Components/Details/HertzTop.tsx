import React, {useState} from 'react'
import { Text, Card, Flex, Heading, Box, BaseLayout, Button } from 'leek-uikit'
import Container from 'components/layout/Container'
import styled from 'styled-components'

import { LineChart, Line} from 'recharts'

import Hero from '../General/Hero'
import Row, {
  NameColumn,
  AumColumn,
  TopAssetsColumn,
  InceptionColumn,
} from '../General/Row'

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
  const [chartInterval, setChartInterval] = useState('month')

  const title = 'Hertz Top Index'
  const heading = 'Invest in best top 10 fund as an Index '
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
          <Text fontSize="30px" mb="10px" color="green">
            +179.3%
          </Text>
          <Heading size="md" mb="10px">
            MINING APR ℹ️
          </Heading>
          <Text fontSize="30px" mb="10px" color="green">
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
          <Heading>About Hertz Top Index</Heading>
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
          </Row>
          <Row>
            <Box>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase">
                1
              </Text>
            </Box>
            <NameColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase">
                Jesse Livermore Hearts Crypto
              </Text>
            </NameColumn>
            <AumColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase">
                Ben aka JL
              </Text>
            </AumColumn>
            <TopAssetsColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase">
                18.93%
              </Text>
            </TopAssetsColumn>
            <InceptionColumn>
              <Text fontSize="12px" color="textSubtle" textTransform="uppercase">
                +317.19%
              </Text>
            </InceptionColumn>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default HertzTop
