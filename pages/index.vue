<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis
      omnis consequatur quod necessitatibus autem repellat aperiam quia atque
      fugit praesentium earum rerum minus, porro asperiores explicabo inventore
      animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi
      pariatur veniam veritatis quo eligendi, ratione libero impedit.
      Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid
      exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis
      omnis consequatur quod necessitatibus autem repellat aperiam quia atque
      fugit praesentium earum rerum minus, porro asperiores explicabo inventore
      animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi
      pariatur veniam veritatis quo eligendi, ratione libero impedit.
      Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid
      exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?
    </p>
  </div>
</template>

<script setup lang="ts">
// One way to override "app: { head: ...} }"" in nuxt.config.ts

useSeoMeta({
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  title: "My First Nuxt App | title override",
  meta: [{ name: "description", content: "description override" }],
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
