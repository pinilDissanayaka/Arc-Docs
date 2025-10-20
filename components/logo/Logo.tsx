import { FC } from "react";
import { HTMLChakraProps, chakra, Heading, Flex } from "@chakra-ui/react";

const Logo: FC<HTMLChakraProps<"img">> = (props) => {
  return (
    <Flex alignItems="center">
      <chakra.img
        src="/static/favicons/azrien.svg"
        alt="AzrienLabs logo"
        width="40px"
        height="40px"
        {...props}
      />
      <Heading ml="2" fontSize="2xl" display={{ base: "none", md: "block" }}>
        <chakra.span color="white">Azrien</chakra.span>
        <chakra.span color="white">Labs</chakra.span>
      </Heading>
    </Flex>
  );
};

export default Logo;
