import { SiteConfig } from "@/types";

export const websiteUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
export const githubBaseUrl =
  "https://github.com/Azrienlabs/Az-Core";

const siteConfig: SiteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`,
  },
  author: {
    name: "Team AzrienLabs",
    github: "Azrien labs",
    twitter: "azrienlabs",
    email: "info@azrienlabs.com ",
  },
  seo: {
    title: "Azcore",
    description: "AzrienLabs documentation for Arc projects.",
    openGraph: {
      url: websiteUrl,
      type: "website",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1240,
        height: 480,
        alt: "AzrienLabs Documentation: AzrienLabs documentation for Arc projects.",
        type: "image/png",
      },
      locale: "en_US",
      siteName: "AzrienLabs",
    },
    twitter: {
      site: "@bryanbarrios__",
      handle: "@bryanbarrios__",
      cardType: "summary_large_image",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1012,
        height: 506,
        alt: "AzrienLabs Documentation: AzrienLabs documentation for Arc projects.",
        type: "image/png",
      },
    },
    robots: "index, follow",
  },
};

export default siteConfig;
