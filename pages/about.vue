<template>
  <div>
    <Head>
      <!-- Another way to override "app: { head: ...} }"" in nuxt.config.ts -->
      <Title>My First Nuxt App | About</Title>
      <Meta name="description" content="Nuxt | About Page" />
    </Head>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam
      minima unde nemo harum quam maxime optio quos corrupti. Eum sapiente
      facere nemo, laborum ullam non cum fuga quas eveniet harum molestiae minus
      atque vel ratione illo quia, iure commodi dicta porro excepturi quam.
      Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam
      laborum veniam est quo, repellat saepe impedit labore?
    </p>
    <p>API response:</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/server?name=mario", {
  method: "post",
  body: { age: 30 },
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
