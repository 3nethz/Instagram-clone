import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "./../../components/AuthForm/AuthForm"

const Authpage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/*left hand side*/}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone" />
          </Box>

          {/*right hand side*/}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}> Get the app </Box>
            <Flex gap={6} justifyContent={"center"}>
              <Image src="/playstore.png" h={12} alt="Playstore" />
              <Image src="/microsoft.png" h={12} alt="Microsoft" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Authpage;
