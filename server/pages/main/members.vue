<template>
  <div class="root">
    <div class="main flex-1">
      <div class="mt-5">
        <div class="text-tiny">Christ's College / FCC / Members</div>
      </div>
    </div>
    <div class='container'>

      <!--      <ul>
              <li
                v-for="member in members"
                :key="member._id"
                class='py-10 px-10'
              >
                <div class="flex">
                  <div class="flex-initial">
                    Name: {{ member.Fullname }}
                  </div>
                  <div class="flex-initial px-4">
                    Role: {{ member.Role }}
                  </div>
                </div>
                <div class="">
                  <div class="">
                    <img
                      class="object-cover h-200 w-full"
                      :src="strapiUrl+member.Photo.url"
                    />
                  </div>
                  <div class="flex-initial px-4">
                    {{ member.Profile }}
                  </div>
                </div>
              </li>
            </ul> -->

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "members.vue",
  //#ECC33D yellow
  //#182F59 blue
  layout: 'default',
  data() {
    return {
      members: [],
      //strapiUrl: 'http://localhost:1337'
    };
  },
  mounted() {
    // axios.get("http://localhost:1337/members")
    //   .then(response => {
    //     this.members = response.data;
    //   })
  }

}
</script>

<style scoped>
</style>
