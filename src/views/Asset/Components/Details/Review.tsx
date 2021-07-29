import React, { useState } from "react"
import Container from "components/layout/Container"
import { Flex, Heading, Text, Box, Button, Card, Checkbox } from "leek-uikit"
import Questions from "../General/Questions"
import Row, { NameColumn, AumColumn } from "../General/Row"
import VaultHero from "../General/VaultHero"
import BreadcrumbList from "../General/BreadcrumbList"
import Divider from "../General/Divider"

const Review = () => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div>
            <VaultHero />
            <Container style={{ marginTop: "20px" }}>
                <BreadcrumbList step={5} />

                <Divider />
                <Flex width="100%" flexDirection="column" alignItems="start" justifyContent="center">
                    <Heading size="lg" color="secondary" mt="10px" mb="5px">
                        Review
                    </Heading>

                    <Text mt="10px">Please review the vault configuration carefully before creating.</Text>
                    <Text bold>All configuration settings are permanent (except where indicated).</Text>


                </Flex>

                <Box>
                    <Text mt="10px" mb="10px" bold>Vault Basics</Text>
                    <Card style={{ borderRadius: "15px" }}>
                        <Row>
                            <NameColumn>
                                <Text bold>
                                    Vault Name
                                </Text>
                            </NameColumn>

                            <AumColumn>
                                <Text>My Vault</Text>
                            </AumColumn>
                        </Row>

                        <Row>
                            <NameColumn>
                                <Text bold>
                                    Denomination Asset
                                </Text>
                            </NameColumn>

                            <AumColumn>
                                <Text>WBTC</Text>
                            </AumColumn>
                        </Row>
                    </Card>
                </Box>

                <Box>
                    <Text mt="10px" mb="10px" bold>Advanced Settings</Text>
                    <Card style={{ borderRadius: "15px" }}>
                        <Row>
                            <NameColumn>
                                <Text bold>
                                    Shares Action Timelock
                                </Text>
                            </NameColumn>

                            <AumColumn>
                                <Text>24 hours</Text>
                            </AumColumn>
                        </Row>
                    </Card>
                </Box>

                <Box>
                    <Text mt="10px" mb="10px" bold>Terms & Conditions</Text>
                    <Card style={{ borderRadius: "15px", padding: "30px" }}>
                        <Text>By using this software, you understand, acknowledge and accept that Enzyme Finance and/or the underlying software are provided “as is” and without warranties or representations of any kind either expressed or implied. Any use of this open source software released under the GNU General Public License version 3 (GPL 3) is done at your own risk to the fullest extent permissible pursuant to applicable law any and all liability as well as all warranties, including any fitness for a particular purpose with respect to Enzyme Finance and/or the underlying software and the use thereof are disclaimed.
                        </Text>
                    </Card>
                </Box>

                <Flex alignItems="center" justifyContent="flex-start" mt="10px">
                    <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                    <Text ml="10px">I agree to the Terms & Conditions</Text>
                </Flex>

                <Box mt="10px">
                    <Button disabled={!isChecked}>Submit</Button>
                </Box>

                <Questions />
            </Container>
        </div >
    )
}
export default Review