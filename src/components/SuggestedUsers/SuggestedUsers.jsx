import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;

  return (
    // <Container maxW={"container.sm"} py={10} px={2}>
    //   {isLoading &&
    //     [0, 1, 2].map((_, index) => (
    //       <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
    //         <Flex gap={2}>
    //           <SkeletonCircle size={10} />
    //           <VStack gap={2} alignItems={"flex-start"}>
    //             <Skeleton height={5} width={200} />
    //             <Skeleton height={5} width={200} />
    //           </VStack>
    //         </Flex>
    //       </VStack>
    //     ))}
    // {!isLoading && (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested For You
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            cursor={"pointer"}
            _hover={{ color: "gray.400" }}
          >
            See all
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built by{" "}
        <Link
          href="https://github.com/3nethz"
          target="blank"
          color={"blue.500"}
          fontSize={14}
        >
          3nethz
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
