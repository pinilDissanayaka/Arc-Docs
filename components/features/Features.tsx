import { FC } from "react";
import {
  Box,
  BoxProps,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import { Section } from "@/components/section";
import {
  RiStackFill,
  RiAppsFill,
  RiFingerprintFill,
  RiNavigationFill,
  RiRefreshFill,
  RiSparklingFill,
} from "react-icons/ri";
import { Feature } from "@/types";

interface FeaturesProps extends BoxProps {}

const features: Feature[] = [
  {
    title: "Reinforcement Learning Module",
    description:
      "Train agents with Q-learning to optimize tool selection over time. No LLM fine-tuning required—agents learn optimal behavior through experience and synthetic data generation before production deployment.",
    icon: RiRefreshFill,
  },
  {
    title: "Synthetic Data Generation",
    description:
      "Generate high-quality training data for AI agents automatically. Create diverse scenarios and edge cases to train agents with synthetic data before deploying to production environments.",
    icon: RiSparklingFill,
  },
  {
    title: "Agent Orchestration",
    description:
      "Flexible orchestration patterns including sequential, concurrent, swarm, and hierarchical workflows. Coordinate complex multi-agent systems with coordinator-planner-supervisor architecture for intelligent task routing.",
    icon: RiNavigationFill,
  },
  {
    title: "Multi-Agent Architectures",
    description:
      "Design reliable and scalable  multi-agent systems using a structured agent collaboration model. This pattern enables specialized  agents to operate in coordinated groups while maintaining clear oversight through orchestration layers.",
    icon: RiStackFill,
  },
  {
    title: "Advanced Design Patterns",
    description:
      "Leverage proven agent patterns including self-consistency, reflexion, reasoning duo, and agent judge. Enhance agent reliability, reasoning quality, and decision-making with battle-tested techniques.",
    icon: RiAppsFill,
  },
  {
    title: "Traceability & Evaluation",
    description:
      "Built-in monitoring, traceability, and evaluation tools to track agent performance. Monitor RL metrics, visualize decision paths, and evaluate agent outputs with automated quality assessment.",
    icon: RiFingerprintFill,
  },
];

const Features: FC<FeaturesProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Section
        title="From Vision to Execution we let you build the agents that world runs on"
        text="Professional-grade features for building, training, and deploying intelligent multi-agent systems at scale."
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
        {features.map(({ title, description, icon }, index) => (
          <FeatureCard
            key={index}
            title={title}
            description={description}
            icon={<Icon as={icon} boxSize="6" />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
