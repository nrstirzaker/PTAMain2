<template>

  <div class='flex flex-col h-screen'>

    <Header></Header>
    <div class="flex flex-row flex-grow ">
      <SideNavBar></SideNavBar>
      <nuxt/>
    </div>
    <footer>
    <ContactAndMediaFooter></ContactAndMediaFooter>
    <LegalFooter></LegalFooter>
    </footer>
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


