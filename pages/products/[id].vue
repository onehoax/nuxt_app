<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

// fetch the products
const { data: product } = await useFetch(uri, { key: id });

// throw custom error if product is empty from API
if (!product.value)
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found",
    // when this error is thrown by the browser (and not the server), nuxt doesn't show the error page by default
    // fatal: true forces nuxt to display the error page not matter if the error is thrown in the server or in the browser
    fatal: true,
  });
</script>
