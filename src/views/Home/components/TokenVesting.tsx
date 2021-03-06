import React, { useState, useEffect } from 'react'
import { Card, CardBody, Heading, Text, Link, Button } from 'hertz-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'

import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import moment from 'moment'
import numeral from 'numeral'
import { getVestingAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { useVestingContract } from '../../../hooks/useContract'
import useRefresh from '../../../hooks/useRefresh'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TokenVesting = () => {
  const [state, setState] = useState({
    cliff: 0,
    releaseTime: 0,
    finalTime: 0,
    nextReleaseTime: 0,
    linearReleaseInterval: 0,
    releaseCount: 0,
    releaseAmount: 0,
    remainingTokens: 0,
  })
  const { fastRefresh } = useRefresh()
  const { account } = useWallet()

  const contract = useVestingContract(getVestingAddress())

  useEffect(() => {
    const fetchVestingInfo = async () => {
      const [
        cliff,
        releaseTime,
        finalTime,
        nextReleaseTime,
        linearReleaseInterval,
        releaseCount,
        releaseAmount,
        remainingTokens,
      ] = await Promise.all([
        contract.methods.cliff().call(),
        contract.methods.releaseTime().call(),
        contract.methods.finalTime().call(),
        contract.methods.nextReleaseTime().call(),
        contract.methods.linearReleaseInterval().call(),
        contract.methods.releaseTotalCount().call(),
        contract.methods.releaseAmount().call(),
        contract.methods.remainingTokens().call(),
      ])

      setState({
        cliff,
        releaseTime,
        finalTime,
        nextReleaseTime,
        linearReleaseInterval,
        releaseCount,
        releaseAmount,
        remainingTokens,
      })
    }
    fetchVestingInfo()
  }, [contract, setState, fastRefresh])

  const releaseTime = moment.utc(Number(state.releaseTime) * 1000).format('MMMM Do YYYY, HH:mm')
  const finalTime = moment.utc(Number(state.finalTime) * 1000).format('MMMM Do YYYY, HH:mm')
  const nextReleaseTime = moment.utc(Number(state.nextReleaseTime) * 1000).format('MMMM Do YYYY, HH:mm')
  const linearReleaseInterval = Number(state.linearReleaseInterval / 3600 / 24 / 7).toFixed().toString()
  const releaseAmount = numeral(getBalanceNumber(new BigNumber(state.releaseAmount))).format('0,0')
  const remainingTokens = numeral(getBalanceNumber(new BigNumber(state.remainingTokens))).format('0,0')

  const claim = async () => {
    await contract.methods.release().send({ from: account })
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          HERTZ Vesting Info
        </Heading>

        <Row>
          <Text fontSize="14px">HERTZ Release Start Time</Text>
          <Link href="https://www.timeanddate.com/worldclock/timezone/utc">
            <Text bold fontSize="14px" color="primary">
              {releaseTime} UTC
            </Text>
          </Link>
        </Row>

        <Row>
          <Text fontSize="14px">HERTZ Release End Time</Text>
          <Link href="https://www.timeanddate.com/worldclock/timezone/utc">
            <Text bold fontSize="14px" color="primary">
              {finalTime} UTC
            </Text>
          </Link>
        </Row>

        <Row>
          <Text fontSize="14px">Next HERTZ Release Date</Text>
          <Link href="https://www.timeanddate.com/worldclock/timezone/utc">
            <Text bold fontSize="14px" color="primary">
              {nextReleaseTime} UTC
            </Text>
          </Link>
        </Row>
        <Row>
          <Text fontSize="14px">HERTZ Release Interval</Text>
          <Text bold fontSize="14px">
            {linearReleaseInterval} WEEK
          </Text>
        </Row>

        <Row>
          <Text fontSize="14px">HERTZ Release Count </Text>
          <Text bold fontSize="14px">
            {state.releaseCount}
          </Text>
        </Row>

        <Row>
          <Text fontSize="14px">HERTZ Release Every Time </Text>
          <Text bold fontSize="14px">
            {releaseAmount} HERTZ
          </Text>
        </Row>
        <Row>
          <Text fontSize="14px">HERTZ Locked </Text>
          <Text bold fontSize="14px">
            {remainingTokens} HERTZ
          </Text>
        </Row>

        <div>
          {!account ? (
            <UnlockButton fullWidth mt="8px" />
          ) : (
            <Button mt="8px" onClick={claim} fullWidth>
              Claim
            </Button>
          )}
        </div>
      </CardBody>
    </StyledCakeStats>
  )
}

export default TokenVesting
