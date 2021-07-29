import React from 'react'
import { Flex, Text, Box, Heading } from 'leek-uikit'
import truncateWalletAddress from "utils/truncateWalletAddress"
import Row, { NameColumn, AumColumn, TopAssetsColumn, InceptionColumn } from "./Row"

interface ListProps {
    index: string
    token: string,
    name: string,
    address: string,
    imgSrc: string,
    amount: string,
    price: string,
    lockValue: string
}

const MonitorRow: React.FC<ListProps> = ({ index, token, name, address, imgSrc, amount, price, lockValue }) => {
    return (
        <Row>
            <Box>
                <Text>{index}</Text>
            </Box>
            <NameColumn>
                <Flex alignItems="center" justifyContent="flex-start">
                    <img src={imgSrc} alt={token} width="32px" style={{ marginRight: "5px" }} />
                    <Box>
                        <Heading size="sm">{token}</Heading>
                        <Text fontSize="12px">{name}</Text>
                    </Box>
                </Flex>
            </NameColumn>
            <AumColumn>
                <Text>{truncateWalletAddress(address)}</Text>
            </AumColumn>
            <TopAssetsColumn>
                <Text>{amount}</Text>
            </TopAssetsColumn>

            <InceptionColumn>
                <Text>{price}</Text>
            </InceptionColumn>

            <Box style={{ width: "150px" }}>
                <Text>{lockValue}</Text>
            </Box>
        </Row>
    )
}

export default MonitorRow