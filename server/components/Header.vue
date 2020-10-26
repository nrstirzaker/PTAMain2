<template>
  <div class="header flex">

    <div class="w-56 mt-4 mb-4 flex-none"></div>

    <div class="mt-4 mb-4">
      <div class="flex">
        <div class="mr-4">
          <img src="~/assets/images/general/schoolLogo.png" height="66" width="57" alt="School Logo"/>
        </div>
        <div class="text-2xl pt-3">
          <span class="font-bold">Friend's of Christ's</span> College Guildford (PTA)
        </div>
        <div class="ml-4 mt-2">
          <img src="~/assets/images/general/fccLogo.jpg" height="66" width="57" alt="FCC Logo"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header.vue",
  head() {
    return {
      title: "Friend's of Christ's College Guildford"
    }

  }
}
</script>

<style scoped>
.header {
  @apply text-white bg-school_blue h-auto border-b-4 border-school_gold
}
</style>
