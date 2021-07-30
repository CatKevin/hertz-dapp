import React from 'react'
import { Modal } from 'hertz-uikit'
import LoadingContent from '../General/LoadingContent'

type ConfirmationPendingContentProps = { onDismiss: () => void }

const ConfirmationPendingContent = ({ onDismiss }: ConfirmationPendingContentProps) => {
    return (
        <Modal title="Waiting for confirmation" onDismiss={onDismiss}>
            <LoadingContent />
        </Modal>
    )
}

export default ConfirmationPendingContent