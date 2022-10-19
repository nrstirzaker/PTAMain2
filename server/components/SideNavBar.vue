<template>

  <div class="side-nav-bar flex-none h-auto w-56">
    <div class="bg-links_area text-link_words_gray ml-8 mr-8 mt-5">
      <ul id="nav">
        <li class="menu-links-header">
          <h1>FCC</h1>
        </li>
        <li @click="clickMenu('Home')" class="nav-item menu-links" :class="{selected:isMenuSelected('Home')}">
          <nuxt-link class="outline-none" to="/">Home</nuxt-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "SideNavBar.vue",
  data: function () {
    return {
      activeItem: 'Home'
    }
  },
  components: {},
  methods: {
    clickMenu: function (menuItem) {
      this.activeItem = menuItem;
    },
    isMenuSelected: function (menuItem) {
      return (this.activeItem === menuItem);
    }

  },
  computed: {}
}
</script>

<style scoped>

.side-nav-bar {
  @apply bg-white
}

.menu-links-header {
  @apply bg-school_blue text-school_gold text-3xl border-b-4 border-school_gold pl-5;
}

.selected {
  @apply text-school_blue
}


</style>
