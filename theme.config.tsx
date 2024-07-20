import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - vjump SD Download List Docs",
    };
  },
  logo: <span style={{ fontWeight: "bold" }}>SD Download List</span>,
  project: {
    link: "https://github.com/vjumpkung/vjump-sd-download-list-docs",
  },
  chat: {
    link: "https://discord.com/users/250567674504019968",
  },
  docsRepositoryBase:
    "https://github.com/vjumpkung/vjump-sd-download-list-docs",
  footer: {
    text: "vjump colab and SD Download List",
  },
};

export default config;
