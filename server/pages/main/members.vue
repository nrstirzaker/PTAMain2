<template>

  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Members</div>
    </div>

    <div class='container'>

      <div class="member">
        <ul>
          <li
            v-for="member in members"
            :key="member._id"
          >
            <div class="flex m-10">
              <div class="w-48">
                <img v-bind:src="getMemberImageURL(member)" class="object-fit:contain w-full" :alt=member.name>
              </div>
              <div class="w-full ml-10">
                <div v-html="$md.render(member.bio)"></div>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "members.vue",
  layout: 'default',
  data() {
    return {
      members: []
    }

  },
  methods: {
    getCMSBaseURL: function () {
      return process.env.NUXT_ENV_STRAPI_BASE_URL;
    },
    getMemberImageURL: function (member) {
      let url = this.getCMSBaseURL() + member.photo.url || '';
      return url;
    }
  },
  mounted() {

    axios.get(
      this.getCMSBaseURL() + "/members"
      ,
      {
        params: {
          _sort: 'visual_order:ASC'
        }
      }
    )
      .then(response => {
        this.members = response.data;
      })
  }

}
</script>

<style scoped>
</style>
