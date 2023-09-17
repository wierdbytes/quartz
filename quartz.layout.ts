import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/wierdbytes/notes",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  // beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.Darkmode()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({title: "Содержание"})),
  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
