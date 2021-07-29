import React from "react"
import { Breadcrumbs, Text } from "leek-uikit"

const steps = ['Basic', 'Fees (optional)', 'Deposits (optional)', 'Redemptions (optional)', 'Advanced Settings (optional)', 'Review']

interface CurrentStepProps {
    step: number
}

const BreadcrumbList: React.FC<CurrentStepProps> = ({ step }) => {
    return (
        <Breadcrumbs>
            {steps.map((item, index) => {
                return (
                    <Text key={item} color={index <= step ? 'text' : 'textDisabled'}>
                        {item}
                    </Text>
                )
            })}
        </Breadcrumbs>
    )
}

export default BreadcrumbList