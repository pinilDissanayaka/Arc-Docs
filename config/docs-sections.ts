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
      { title: "Reinforcement Learning", path: "/docs/rl" },
      { title: "MCP", path: "/docs/mcp" },
      { title: "Advanced Workflows Patterns", path: "/docs/workflows" },
      { title: "Advanced Agent Patterns", path: "/docs/agents" },
    ],
  }
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
