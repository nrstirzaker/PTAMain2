<template>
<div class="footer">
    <!-- pushed footer to right under main content not nav section-->
    <div class="flex-none w-56 h-24"></div>
    <div class="flex w-full items-center justify-center">
      <div class="mr-10">
        <nuxt-link to="/static/privacy-policy">Privacy Policy</nuxt-link>
      </div>
      <div class="mr-10">
        <nuxt-link to="/static/cookie-usage">Cookie Usage</nuxt-link>
      </div>
      <div class="mr-10">
        &copy; Copyright 2020
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LegalFooter.vue"
}
</script>

<style scoped>
.footer {
  @apply flex bg-white text-black
}
</style>
