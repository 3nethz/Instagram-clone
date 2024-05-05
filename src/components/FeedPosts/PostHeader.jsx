import { Avatar, Box, Button, Flex, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  );

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicURL}
              alt="user profile pic"
              size={"sm"}
            />
          </Link>
        ) : (
          <SkeletonCircle size={10} />
        )}

        <Flex gap={2}>
          {creatorProfile ? (
            <Link to={`${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <SkeletonCircle size={10} />
          )}
          <Box color={"gray.500"}> • {timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          fontSize={12}
          size={"xs"}
          bg={"transparent"}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
