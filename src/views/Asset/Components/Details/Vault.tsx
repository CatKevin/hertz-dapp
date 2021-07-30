import React, { useState } from "react"
import { Link } from "react-router-dom"
import validator from 'validator'
import { Text, Flex, Heading, Box, Input, Button } from "hertz-uikit"
import Container from "components/layout/Container"
import Select from 'components/Select/select'
import Divider from "../General/Divider"
import VaultHero from "../General/VaultHero"
import BreadcrumbList from "../General/BreadcrumbList"
import Questions from "../General/Questions"

const Vault = () => {
    const [vaultName, setVaultName] = useState("");
    const [validVaultName, setValidVaultName] = useState(true);

    const validateAllFields = (field: string, fieldValue: string) => {
        if (field === 'vault') {
            setVaultName(fieldValue)
            if (validator.isLength(fieldValue, { min: 3, max: 30 })) {
                setValidVaultName(true)
            } else {
                setValidVaultName(false)
            }
        }
    }

    const handleIsValid = (e, field: string) => {
        validateAllFields(field, e.currentTarget.value);
    }

    const onBlurValidate = (field: string) => {
        const fieldMapping = {
            'vault': vaultName,
        }
        validateAllFields(field, fieldMapping[field])
    }

    return (
        <div>
            <VaultHero />

            <Container style={{ marginTop: "20px" }}>
                <BreadcrumbList step={0} />

                <Divider />

                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Basics
                    </Heading>

                    <Flex>
                        <Text mr="2px">Basic vault settings. </Text>
                        <Text bold>Basic settings cannot be changed after creation.</Text>
                    </Flex>
                </Flex>

                <Box mt="20px">
                    <div style={{ marginBottom: '10px' }}>
                        <Text mb="5px">Name</Text>
                        <Box width="50%">
                            <Input placeholder="Enter your vault name..."
                                value={vaultName}
                                onChange={(e) => handleIsValid(e, 'vault')}
                                onBlur={() => onBlurValidate('vault')}
                                required
                                isSuccess={validVaultName}
                                isWarning={!validVaultName} />
                        </Box>

                        {!validVaultName && (
                            <Text color="failure" fontSize="15px" mt="5px">
                                Sorry! The vault name should be at least 3 characters
                            </Text>
                        )}
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <Text mb="5px">Denomination Asset</Text>
                        <Select
                            options={[
                                {
                                    value: 'WBTC',
                                    label: 'Wrapped BTC',
                                    src: "./images/asset/token/wbtc.png"
                                },
                                {
                                    value: 'WETH',
                                    label: 'Wrapped ETH',
                                    src: "./images/asset/token/weth.png"
                                },
                                {
                                    value: 'USDC',
                                    label: 'USD Coin',
                                    src: "./images/asset/token/usdc.png"
                                },
                                {
                                    value: 'Alpha',
                                    label: 'Alpha Token',
                                    src: "./images/asset/token/alpha.png"
                                },
                                {
                                    value: '1Inch',
                                    label: '1INCH Token',
                                    src: "./images/asset/token/1inch.png"
                                },
                                {
                                    value: 'UNI',
                                    label: 'Uniswap',
                                    src: "./images/asset/token/uni.png"
                                },
                                {
                                    value: 'USDT',
                                    label: 'Tether USD',
                                    src: "./images/asset/token/usdt.png"
                                },
                                {
                                    value: 'MATIC',
                                    label: 'Matic Token',
                                    src: "./images/asset/token/matic.png"
                                }
                            ]}
                        />
                    </div>

                    <Box>
                        <Text>
                            The denomination asset is the asset in which depositors deposit into your vault and in which the vault&apos;s share price and the performance are measured.
                        </Text>
                    </Box>

                    <Box mt="10px">
                        <Button disabled={!validVaultName} as={Link} to="/assets/setup/1">Next</Button>
                    </Box>
                </Box>

                <Questions />
            </Container>
        </div>
    )
}

export default Vault