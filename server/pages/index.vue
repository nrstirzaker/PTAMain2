<template>

  <div class='container'>

    <li
      v-for="member in members"
      :key="member._id"
      class='py-10 px-10'
    >
      {{ member.Fullname }}
      {{ member.Profile }}
      <img
        :src="strapiUrl+member.Photo.url"
        width="100"
        height="200"
      />
    </li>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  //#ECC33D yellow
  //#182F59 blue
  data () {
    return {
      members: [],
      strapiUrl: 'http://localhost:1337'
    };
  },
  mounted () {
    axios.get("http://localhost:1337/members")
      .then(response => {
        this.members = response.data;
      })
  }

}
</script>

<style>
body {
  background-color: #182f59;
  color: white;
}
</style>
