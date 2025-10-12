import { IconType } from "react-icons";

export type Route = {
  label: string;
  path: string;
  icon?: IconType;
};

// Removed top-level site sections (Documentation, Showcases, Resources, Team)
// to prevent them from rendering in the sidebar and search.
export const topLevelSectionsRoutes: Route[] = [];
