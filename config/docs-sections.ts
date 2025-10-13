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
      { title: "Teams", path: "/docs/teams" },

    ],
  }
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
