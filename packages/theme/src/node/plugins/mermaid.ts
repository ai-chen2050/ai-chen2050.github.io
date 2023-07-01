import { mermaidPlugin } from "../../../../plugins/mermaid";
import type { MermaidOptions } from "../../../../plugins/mermaid";
import type { Plugin } from "@vuepress/core";

export const getMermaidPlugin = (
  mermaid?: MermaidOptions | boolean
): Plugin | [] => {
  if (!mermaid) return [];

  mermaid = mermaid === true ? {} : mermaid;
  mermaid.darkClass = mermaid.darkClass ? mermaid.darkClass : "dark";
  mermaid.darkSelector = mermaid.darkSelector ? mermaid.darkSelector : "html";

  return mermaidPlugin(mermaid);
};
