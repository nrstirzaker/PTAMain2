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
                <img v-bind:src="getMemberImageURL(member.visual_order)" class="object-fit:contain w-full" :alt=member.name>
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
import Nigel from '~/assets/images/members/Nigel.jpg';
import Sarah from '~/assets/images/members/Sarah.jpg';
import Margareth from '~/assets/images/members/Margareth.jpg';
import Sandra from '~/assets/images/members/Sandra.jpg';
import Hanna from '~/assets/images/members/Hanna.jpg';
import Sylvia from '~/assets/images/members/Sylvia.jpg';
import Stuart from '~/assets/images/members/Stuart.jpg';
import Zed from '~/assets/images/members/Zed.jpg';

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
      return 'https://fcc-strapi.herokuapp.com';
    },
    getMemberImageURL: function (id) {
      const images = [
        "Nigel.jpg",
        "Sarah.jpg",
        "Margareth.jpg",
        "Sandra.jpg",
        "Stuart.jpg",
        "Zed.jpg",
        "Hanna.jpg",
        "Sylvia.jpg"
      ]

      return '_nuxt/assets/images/members/' + images[id - 1];
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
