import React from "react";
import { BaseLayout, Flex, Heading } from "hertz-uikit";
import Hero from "./Components/General/Hero"
import BoardCard from "./Components/AssetsCard/BoardCard";

const Assets = () => {
  const title = "Hertz Assets Management"
  const heading = "Property is under our care. We help you manage your assets."
  return (
    <div>
      <Hero title={title} heading={heading} />
      <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading size="xl" color="secondary" mt="40px">
          Join Our Assets Management
        </Heading>
      </Flex>
      <BoardCard />
    </div>
  )
}

export default Assets