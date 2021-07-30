import React from 'react'
import { Button, Modal } from 'hertz-uikit'
import { AutoColumn } from '../General/Column'
import TransactionMessage from '../General/TransactionMessage'
import { claimAirdropStore } from "../store/store"

type TransactionSubmittedContentProps = {
    onDismiss: () => void
}

const ClaimAirdropTransactionModal = ({ onDismiss }: TransactionSubmittedContentProps) => {
    const { claimAirdropTxHash } = claimAirdropStore.getState()

    return (
        <Modal title="Transaction Submitted" onDismiss={onDismiss}>
            <TransactionMessage transactionHash={claimAirdropTxHash} />
            <AutoColumn gap="8px" justify="center">
                <Button onClick={onDismiss} mt="20px">
                    Close
                </Button>
            </AutoColumn>
        </Modal>
    )
}

export default ClaimAirdropTransactionModal