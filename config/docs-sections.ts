import { Route, Section } from "@/types";

export const docsSections: Section[] = [
  {
    section: "Getting Started",
    routes: [
      { title: "Overview", path: "/docs/overview" },
      { title: "Installation", path: "/docs/installation" },
      { title: "Lorem Ipsum Nº2", path: "/docs/lorem-ipsum-2" },
      { title: "Lorem Ipsum Nº3", path: "/docs/lorem-ipsum-3" },
    ],
  }
];

export const allDocsRoutes: Route[] = docsSections.flatMap(
  (route) => route.routes
);
