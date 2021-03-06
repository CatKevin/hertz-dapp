import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    ChevronDownIcon,
    Flex,
    Heading,
    Button,
    ChevronUpIcon,
    Text,
} from 'hertz-uikit'
import Row, { AddressColumn, ChoiceColumn, VotingPowerColumn } from '../General/Row'
import { useGetParticipationList, useGetCurrentRound } from '../../api'
import ParticipantsListRow from "../General/ParticipantsListRow"

const LIST_PER_VIEW = 5

const ParticipationListCard: React.FC = () => {
    const participationList = useGetParticipationList()
    const [showAll, setShowAll] = useState(false)
    const displayList = showAll ? participationList : participationList.slice(0, LIST_PER_VIEW)
    const round = useGetCurrentRound();

    const handleClick = () => {
        setShowAll(!showAll)
    }

    let comp;
    if (participationList.length === 0) {
        comp = <Flex alignItems="center" justifyContent="center" py="32px">
            <Heading as="h5">No Participants found</Heading>
        </Flex>

    } else {
        comp = displayList.map((item) => (
            <ParticipantsListRow key={item.wallet_address} address={item.wallet_address} score={item.wallet_score} level={item.wallet_level} />
        ))
    }

    return (
        <Card>
            <CardHeader>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading>Participation List ({participationList.length})</Heading>
                    {
                        round > 0 ? <Text>Current Round: #{round}</Text> : ""
                    }
                </Flex>
            </CardHeader>

            <Row>
                <AddressColumn>
                    <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                        Participator
                    </Text>
                </AddressColumn>
                <ChoiceColumn>
                    <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                        Level
                    </Text>
                </ChoiceColumn>
                <VotingPowerColumn>
                    <Text fontSize="12px" color="textSubtle" textTransform="uppercase" bold>
                        score
                    </Text>
                </VotingPowerColumn>
            </Row>
            {comp}
            {
                displayList.length > 0 && (<Flex alignItems="center" justifyContent="center" py="8px" px="24px">
                    <Button
                        onClick={handleClick}
                        variant="text"
                        endIcon={
                            showAll ? (
                                <ChevronUpIcon color="primary" width="21px" />
                            ) : (
                                <ChevronDownIcon color="primary" width="21px" />
                            )
                        }
                    >
                        {showAll ? "Hide" : "See All"}
                    </Button>
                </Flex>)
            }
        </Card>
    )
}

export default ParticipationListCard

