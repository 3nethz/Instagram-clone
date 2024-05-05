import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={10} width={200} />
                <Skeleton height={10} width={200} />
              </VStack>
            </Flex>
            <Skeleton width={"full"}>
              <Box h={"400px"}>contents wrappped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
        {!isLoading && posts.length === 0 && (
          <>
            <Text fontSize={"md"} color={"red.400"} >
              No posts to show
            </Text>
          </>
        )}
    </Container>
  );
};
export default FeedPosts;
