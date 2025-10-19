import { Route, Section } from "@/types";

export const docsSections: Section[] = [
  {
    section: "Getting Started",
    routes: [
      { title: "Overview", path: "/docs/overview" },
      { title: "Installation", path: "/docs/installation" },
      { title: "Quick Start", path: "/docs/quickstart" },
    ],
  },
  {
    section: "Core Concepts",
    routes: [
      { title: "Architecture", path: "/docs/architecture" },
      { title: "State Management", path: "/docs/state" },
      { title: "Agents", path: "/docs/agents" },
      { title: "Teams", path: "/docs/teams" },
      { title: "Nodes", path: "/docs/nodes" },
      { title: "Tools", path: "/docs/tools" },
      { title: "Orchestration", path: "/docs/orchestration" },
    ],
  },
  {
    section: "Reinforcement Learning",
    routes: [
      { title: "Overview", path: "/docs/rl-overview" },
      { title: "Getting Started", path: "/docs/rl-gettingstart" },
      { title: "RL Manager", path: "/docs/rl-manager" },
      { title: "Reward Calculators", path: "/docs/rl-reward-calculation" },
      { title: "State Representation", path: "/docs/rl-state-representation" },
      { title: "Exploration Strategies", path: "/docs/rl-exploration-strategies" },
      { title: "Training Workflows", path: "/docs/rl-training-workflows" },
      { title: "Advanced Patterns", path: "/docs/rl-advanced-patterns" },
      { title: "Monitoring", path: "/docs/rl-monitoring" },
      { title: "Production", path: "/docs/rl-production" },
    ],
  },
    {
    section: "Model Context Protocol (MCP)",
    routes: [
      { title: "Overview", path: "/docs/mcp-overview" },
      { title: "Getting Started", path: "/docs/mcp-getting-start" },
      { title: "MCP Team Builder", path: "/docs/mcp-team-builder" },
      { title: "Transport Types", path: "/docs/mcp-transport" },
      { title: "Official Servers", path: "/docs/mcp-official-servers" },
      { title: "Custom Servers", path: "/docs/mcp-custom-servers" },
      { title: "Hybrid Teams", path: "/docs/mcp-hybrid-team" },
      { title: "Error Handling", path: "/docs/mcp-error" },
      { title: "Production", path: "/docs/mcp-production" },
    ],
  }
];





export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
