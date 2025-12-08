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
        title="Build  Deploy  Scale"
        subtitle="Make things happen"
        text="Design and ship intelligent agent systems with enterprise-grade reliability, scalability, and precise coordination."
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
              src="/static/images/azcore_core.png"
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
              Azcore
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Azcore is a core AI agentic framework that gives users complete control over their AI agents. It is designed to make developing, deploying, observing, and orchestrating agents effortless and efficient.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Through powerful middleware, intelligent agent planning, automated summarization, and seamless orchestration, Azcore empowers you to build advanced AI systems with clarity and precision. Whether you're managing a single agent or coordinating multi-agent workflows, Azcore ensures transparency, flexibility, and full authority over every part of the process.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Build smarter. Orchestrate better. Own your AI.
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
              src="/static/images/azcore_rl.png"
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
              Azcore Universal Reinforcement Trainer
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Language models change fast, new versions, new costs, new behaviors. Azcore keeps your AI agent evolving without losing what it has already learned. It acts as the agent's core "brain," continuously improving and preserving knowledge.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Azcore lets you switch between any LLM instantly, ensuring your agent always runs on the most efficient and powerful model available. Its reinforcement-driven system enables steady growth across multiple models within one unified framework.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Evolve your AI agent across any LLM, anytime without ever losing progress.
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
              src="/static/images/Azcore_synthd.png"
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
              Azcore Harmony — Synthetic Data Generation Platform
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Prepare and perfect your AI agent long before it interacts with the real world. Azcore Harmony enables you to generate rich, diverse synthetic data at scale, allowing you to train, test, and validate your agent across a massive range of scenarios and edge cases.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                By simulating real-world interactions safely, you can ensure your agent behaves reliably, performs consistently, and remains robust under any condition. Azcore Harmony helps you trace issues, identify weaknesses, and fix them early—before anyone ever encounters them in production.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Train smarter. Test deeper. Deploy with confidence.
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
              src="/static/images/azcore_cli.png"
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
              Azcore CLI
            </Heading>
            <Stack color={useColorModeValue("gray.600", "gray.400")}>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Let the agent do the heavy lifting for you. Azcore CLI streamlines software development by assisting users across a wide range of tasks—from writing code and crafting architectures to developing full software systems autonomously.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                With Azcore CLI, you can accelerate development, reduce overhead, and let intelligent automation handle the complexity, while you focus on vision and direction.
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Build faster. Build smarter. Build with Azcore.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </DefaultLayout>
  );
};

export default Home;
