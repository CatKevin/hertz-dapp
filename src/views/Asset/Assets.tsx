import React from "react";
import { BaseLayout, Flex, Heading, Box } from "hertz-uikit";
import Hero from "./Components/General/Hero"
import BoardCard from "./Components/AssetsCard/BoardCard";

const Assets = () => {
  const title = "Hertz Assets Management"
  const heading = "Property is under our care. We help you manage your assets."
  return (
    <div>
      <Hero title={title} heading={heading} />
      <Box style={{ textAlign: "center" }}>
        <Heading size="xl" color="secondary" mt="40px">
          Join Our Assets Management
        </Heading>
      </Box>
      <BoardCard />
    </div>
  )
}

export default Assets