<template>
    <Common>
      <template #page>
        <PageHeader :page-info="pageInfo" />

        <div class="projs-wrapper">
          <div
            v-for="(group, groupId) in frontmatter.projs"
            :key="`proj-group-${groupId}`"
            class="proj-section"
          >
            <h2>
              {{ group.title }}
              <span v-if="group.subtitle" class="proj-subtitle">{{ group.subtitle }}</span>
            </h2>
            <div class="proj-group">
              <div
                v-for="(item, itemId) in group.items"
                :key="`proj-${itemId}`"
                class="proj-item"
              >
                <div class="content">
                  <a :href="item.url" target="_blank" rel="noopener noreferrer">
                    <div v-if="item.img" class="proj-cover">
                      <img :src="$withBase(item.img)" />
                    </div>
                    <div
                      v-else
                      class="proj-cover proj-cover--text"
                      :style="coverStyle(item)"
                    >
                      <span class="proj-initials">{{ initials(item.sitename) }}</span>
                      <span v-if="item.lang" class="proj-lang">{{ item.lang }}</span>
                    </div>
                    <span class="sitename">
                      <span v-if="item.tag" class="proj-tag">{{ item.tag }}</span>
                      {{ item.sitename }}
                    </span>
                    <div class="desc">
                      {{ item.desc }}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Common>
  </template>

  <script setup lang="ts">
  import Common from "@theme/Common.vue";
  import PageHeader from "@theme/PageHeader.vue";
  import { usePageFrontmatter } from "@vuepress/client";
  import { computed } from "vue";
  import type {
    GungnirThemeProjsPageFrontmatter,
    GungnirThemePageOptions
  } from "../../shared";
  import { useThemeLocaleData } from "../composables";

  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter<GungnirThemeProjsPageFrontmatter>();

  const pageInfo = computed(() => {
    const info = (
      themeLocale.value.pages && themeLocale.value.pages.projs
        ? themeLocale.value.pages.projs
        : {}
    ) as GungnirThemePageOptions;
    if (info.title === undefined) info.title = themeLocale.value.pageText?.projs;
    return info;
  });

  const PALETTE = [
    ["#667eea", "#764ba2"],
    ["#f093fb", "#f5576c"],
    ["#4facfe", "#00f2fe"],
    ["#43e97b", "#38f9d7"],
    ["#fa709a", "#fee140"],
    ["#30cfd0", "#330867"],
    ["#a8edea", "#fed6e3"],
    ["#ff9a9e", "#fad0c4"],
    ["#fbc2eb", "#a6c1ee"],
    ["#ffecd2", "#fcb69f"],
  ];

  function hashCode(str: string): number {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function initials(name: string): string {
    if (!name) return "";
    const cleaned = name.replace(/[-_/]/g, " ").trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function coverStyle(item: { sitename: string; color?: string }) {
    if (item.color) {
      return { background: item.color };
    }
    const [a, b] = PALETTE[hashCode(item.sitename) % PALETTE.length];
    return { background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)` };
  }
  </script>
