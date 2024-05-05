import { Flex, Avatar, Text, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex justifyContent={"space-between "} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
      <Link to={`${authUser.username}`}>
        <Avatar
          size={"lg"}
          src={authUser.profilePicURL}
        />
      </Link>
      <Link to={`${authUser.username}`}>
        <Text fontSize={12} fontWeight={"bold"}>
          {authUser.username}
        </Text>
      </Link>
      </Flex>
      <Button
        background={"transparent"}
        _hover={{ bg: "transparent" }}
        fontSize={14}
        color={"blue.500"}
        fontWeight={600}
        cursor={"pointer"}
        bg={"transparent"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
