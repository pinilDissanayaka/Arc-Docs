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
      { title: "Reinforcement Learning", path: "/docs/rl" },
      { title: "MCP", path: "/docs/mcp" },
      { title: "Quick Start", path: "/docs/quickstart" },
    ],
  }
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
