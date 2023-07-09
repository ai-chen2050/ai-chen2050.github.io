import type { ReadingTime } from "../../../plugins/reading-time";
import type { GitPluginPageData } from "@vuepress/plugin-git";
import type { NavLink, SidebarConfig } from "./nav";

export interface GungnirThemePageData extends GitPluginPageData {
  filePathRelative: string | null;
  readingTime?: ReadingTime;
}

export interface GungnirThemePageFrontmatter {
  navbar?: boolean;
  pageClass?: string;
  search?: boolean;
}

export interface GungnirThemeNormalPageFrontmatter
  extends GungnirThemePageFrontmatter {
  title?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  contributors?: boolean;
  sidebar?: "auto" | false | SidebarConfig;
  sidebarDepth?: number;
  prev?: string | NavLink;
  next?: string | NavLink;
  giscus?: boolean;
}

export interface GungnirThemePostFrontmatter
  extends GungnirThemePageFrontmatter {
  title: string;
  subtitle?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  useHeaderImage?: boolean;
  author?: string;
  date?: string;
  headerImage: string;
  headerMask?: string;
  headerImageCredit?: string;
  headerImageCreditLink?: string;
  catalog?: boolean;
  tags?: string[];
  hide?: boolean;
}

interface LinkItem {
  sitename: string;
  url: string;
  img: string;
  desc: string;
}

interface LinkGroup {
  title: string;
  item: Array<LinkItem>;
}

export interface GungnirThemeLinksPageFrontmatter
  extends GungnirThemePageFrontmatter {
  title?: string;
  links: Array<LinkGroup>;
}

interface ProjItem {
  sitename: string;
  url: string;
  img: string;
  desc: string;
}

interface ProjGroup {
  title: string;
  item: Array<ProjItem>;
}

export interface GungnirThemeProjsPageFrontmatter
  extends GungnirThemePageFrontmatter {
  title?: string;
  projs: Array<ProjGroup>;
}
