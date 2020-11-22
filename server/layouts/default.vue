<template>

  <div class='flex flex-col max-h-full'>

    <Header></Header>
    <div class="flex flex-row flex-grow">
      <SideNavBar></SideNavBar>
      <nuxt/>
    </div>
    <ContactAndMediaFooter></ContactAndMediaFooter>
    <LegalFooter></LegalFooter>

  </div>

</template>

<script>

import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import ContactAndMediaFooter from '../components/ContactAndMediaFooter'
import LegalFooter from '../components/LegalFooter'


export default {
  components: {Header, SideNavBar, ContactAndMediaFooter, LegalFooter},
}
</script>

<style>
body {
  @apply text-black bg-white
}
</style>


