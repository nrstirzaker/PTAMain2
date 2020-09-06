<template>
  <div class="header">
    <div class="flex">
      <div class="w-56 flex-none"></div>
      <div class="mt-4 flex">
        <div class="mr-4">
          <img src="~/assets/logo.png" height="66" width="57" alt="School Logo"/>
        </div>
        <div class="text-2xl pt-3">
          <span class="font-bold">Friend's of Christ's</span> College Guildford (PTA)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header.vue"
  }
</script>

<style scoped>
  .header {
    @apply flex text-white bg-school_blue h-24
  }
</style>
