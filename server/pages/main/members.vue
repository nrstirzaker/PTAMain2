<template>
  <div class="root">
    <div class="main flex-1">
      <div class="mt-5">
        <div class="text-tiny">Christ's College / FCC / Members</div>
      </div>
    </div>
    <div class='container'>

      <div class="member">
        <div class="flex">
          <img src="~/assets/images/members/Sandra.jpg" class="h-48 w-48" alt="Sandra Philips">
          <div>
            Hi my name is Sandra Phillips. I have 2 boys at Christ's, they are currently in years 7 and 9.
            I have been involved with FCC for nearly 2 years. I help run the 2nd hand uniform sales along with Sarah and help at the events like summer festival serving
            refreshments etc.
            I was also involved in the boys previous school PTA, having been involved with both I can definitely say that there is less pressure in a secondary school PTA.
          </div>
        </div>

        <div class="flex">
          <img src="~/assets/images/members/Margareth.jpeg" class="h-48 w-48" alt="Margareth Mayersbeth">
          <div>
            Hi my name is Margareth Mayersbeth, I have two children at Christ's college, one started in September 2017, the other in 2019.
            I have helped FCC since November 2019 and it has been really great to meet monthly at Worplesdon Place with the FCC team to come up with ideas for building up our
            school's community and to raise funds. I have taken on the secretarial duties for FCC.
            I have recently become an exam invigilator too and volunteer at the schools library regularly during the day.
            Forthrightly I enjoy attending Parents Prayer in the Chapel to pray for our school too.
            I have been a class representative in my children's primary school and enjoy getting together building the school's community.

            Me and Nigel knew each other from Ripley Primary school, a local school which had to go through closure. It was a painful process and this made me realise even more how
            important parental input, community, fundraising and positivity is for a school, no matter what size the school is.
          </div>
        </div>

        <div class="flex">
          <img src="~/assets/images/members/Stuart.jpeg" class="h-48 w-48" alt="Stuart Kennedy">
          <div>
          </div>
        </div>


      </div>

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
