<template>
    <Common>
      <template #page>
        <PageHeader :page-info="pageInfo" />
          <div class="about-wrapper">
            <Page :key="page.path" class="about-content">
            </Page>
          </div>
      </template>
    </Common>
  </template>
  
  <script setup lang="ts">
  import Common from "@theme/Common.vue";
  import Page from "@theme/Page.vue";
  import { computed } from "vue";
  import { usePageData } from "@vuepress/client";
  import { useThemeLocaleData } from "../composables";
  import PageHeader from "@theme/PageHeader.vue";
  import type {
    GungnirThemePageOptions
  } from "../../shared";

  const themeLocale = useThemeLocaleData();
  const page = usePageData();

  const pageInfo = computed(() => {
  const info = (
    themeLocale.value.pages && themeLocale.value.pages.about
      ? themeLocale.value.pages.about
      : {}
  ) as GungnirThemePageOptions;
  if (info.title === undefined) info.title = themeLocale.value.pageText?.about;
  return info;
});
  </script>
  