import {
  AspectRatio,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { DefaultLayout } from "@/layouts";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Teams } from "@/components/teams";
import { Features } from "@/components/features";
import { Tweets } from "@/components/tweets";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      {/*<Teams mt="6" />*/}
      <Features mt="6" />
      <Section
        mt="12"
        title="Build. Ship. Blazing fast."
        subtitle="Make things happen"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed consequatur."
      />
      {/* TODO: Make this component. */}
      <Stack spacing="10">
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          spacing={{ base: "4", md: "16" }}
        >
          <AspectRatio
            w="full"
            ratio={4 / 3}
            borderRadius="3xl"
            overflow="hidden"
          >
            <Image
              src="/static/images/banner1.gif"
              layout="fill"
              alt="Gradient wallpaper"
            />
          </AspectRatio>
          <Stack
            w="full"
            maxW={{ base: "full", md: "xl" }}
            spacing={{ base: "3", md: "4" }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Pre-Built Project Structure
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Instantly initialize a complete, production-ready folder structure with a single command. 
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Our pre-built architecture sets up all essential directories, configurations, and templates enabling users to start building immediately and ship projects faster with consistent, scalable foundations.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          spacing={{ base: "4", md: "16" }}
        >
          <AspectRatio
            w="full"
            ratio={4 / 3}
            order={{ base: 0, md: 1 }}
            borderRadius="3xl"
            overflow="hidden"
          >
            <Image
              src="/static/images/banner2.gif"
              layout="fill"
              alt="Gradient wallpaper"
            />
          </AspectRatio>
          <Stack
            w="full"
            maxW={{ base: "full", md: "xl" }}
            spacing={{ base: "3", md: "4" }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Lorem ipsum dolor, sit amet consectetur elit
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                <b>Duis aute irure.</b> Dolor in reprehenderit in voluptate
                velit esse.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                <b>Sed ut perspiciatis.</b> Unde omnis iste natus error sit
                voluptatem.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          spacing={{ base: "4", md: "16" }}
        >
          <AspectRatio
            w="full"
            ratio={4 / 3}
            borderRadius="3xl"
            overflow="hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              layout="fill"
              alt="Gradient wallpaper"
            />
          </AspectRatio>
          <Stack
            w="full"
            maxW={{ base: "full", md: "xl" }}
            spacing={{ base: "3", md: "4" }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Lorem ipsum dolor, sit amet consectetur elit
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                <b>Duis aute irure.</b> Dolor in reprehenderit in voluptate
                velit esse.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                <b>Sed ut perspiciatis.</b> Unde omnis iste natus error sit
                voluptatem.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          spacing={{ base: "4", md: "16" }}
        >
          <AspectRatio
            w="full"
            ratio={4 / 3}
            order={{ base: 0, md: 1 }}
            borderRadius="3xl"
            overflow="hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              layout="fill"
              alt="Gradient wallpaper"
            />
          </AspectRatio>
          <Stack
            w="full"
            maxW={{ base: "full", md: "xl" }}
            spacing={{ base: "3", md: "4" }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Lorem ipsum dolor, sit amet consectetur elit
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                <b>Duis aute irure.</b> Dolor in reprehenderit in voluptate
                velit esse.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                <b>Sed ut perspiciatis.</b> Unde omnis iste natus error sit
                voluptatem.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Tweets mt="12" />
    </DefaultLayout>
  );
};

export default Home;
