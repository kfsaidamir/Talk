import { Box, Container, Flex ,Text } from '@chakra-ui/react'
import React from 'react'
import { SiHackerearth } from "react-icons/si";

const Header = () => {
    const nav = ["Nekto.me"]
  return (
    <>
    <Box w={"full"} >
        <Container maxW={"container.xxl"} bgColor={"gray"} padding={"10px"} >
        <Flex alignItems={"center"} gap={"30px"}   >
            {
                nav.map((c) => (
                    <Text>{c}</Text>
                )  )
            }
            <SiHackerearth  fontSize={"60px"} color={"white"}/>
        </Flex>
        </Container>

    </Box>
    </>
  )
}

export default Header