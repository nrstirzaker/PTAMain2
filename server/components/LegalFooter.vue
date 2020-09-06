<template>
  <div class="footer">
    <div class="flex-none w-56 h-24"></div>
    <div class="flex flex-row content-center">
      <div class="w-1/4">
        <nuxt-link to="/static/privacy-policy">Privacy Policy</nuxt-link>
      </div>
      <div class="w-1/4">
        <nuxt-link to="/static/cookie-usage">Cookie Usage</nuxt-link>
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
