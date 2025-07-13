import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
    configuration: {
      pageTitle: "Beneath the Abstraction",
      enableSPA: true,
      enablePopovers: true,
      baseUrl: "aminmasoudi.github.io",
      ignorePatterns: ["private", "templates", ".obsidian"],
      defaultDateType: "created",
      theme: {
        typography: {
          header: "Inter",
          body: "Inter",
          code: "JetBrains Mono",
        },
        colors: {
          lightMode: {
            light: "#FeF5ee",
            lightgray: "#e5e5e5",
            gray: "#b8b8b8",
            darkgray: "#4e4e4e",
            dark: "#2b2b2b",
            secondary: "#9e9856",
            tertiary: "#565222",
            highlight: "rgba(124, 118, 170, 0.15)",
            textHighlight: ""
          },
          darkMode: {
            light: "#161618",
            lightgray: "#393639",
            gray: "#646464",
            darkgray: "#d4d4d4",
            dark: "#ebebec",
            secondary: "#C1988D",
            tertiary: "#F1C8BD",
            highlight: "rgba(124, 118, 170, 0.15)",
            textHighlight: ""
          },
        },
        cdnCaching: false,
        fontOrigin: "googleFonts"
      },
      analytics: null,
      generateSocialImages: false,
      locale: "en-US"
    },
    plugins: {
      transformers: [
        Plugin.FrontMatter(),
        Plugin.TableOfContents(),
        Plugin.CreatedModifiedDate({
          priority: ["frontmatter"], // you can add 'git' here for last modified from Git but this makes the build slower
        }),
        Plugin.SyntaxHighlighting(),
        Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
        Plugin.GitHubFlavoredMarkdown(),
        Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
        Plugin.Latex({ renderEngine: "katex" }),
        Plugin.Description(),
      ],
      filters: [Plugin.RemoveDrafts()],
      emitters: [
        Plugin.AliasRedirects(),
        Plugin.ComponentResources(),
        Plugin.ContentPage(),
        Plugin.FolderPage(),
        Plugin.TagPage(),
        Plugin.ContentIndex({
          enableSiteMap: true,
          enableRSS: true,
        }),
        Plugin.Assets(),
        Plugin.Static(),
        Plugin.NotFoundPage(),
      ],
    },
  }
  

export default config