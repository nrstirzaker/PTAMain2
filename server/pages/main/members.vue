<template>

  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Members</div>
    </div>

    <div class='container'>

      <div class="member">
        <ul>
          <li
            v-for="(member, key) in members"
          >
            <div class="flex m-10">
              <div class="w-48">
                <!--<img :src='items[key].src' class="object-fit:contain w-full" :alt=member.name>-->
                <img v-bind:src='getMemberImageURL(key)' class="object-fit:contain w-full" :alt=member.name>
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


//const images = require.context('../../static/images/members', true, /\.jpg$/);
//const images = require.context('../../static/', false, /\.jpg$/);
//this is used to ensure that the images are pulled into the build
const images = require.context('../../assets/images/members', true, /\.jpg$/);
// const imagesArray = Array.from(images.keys());
// console.log(images);
// console.log(imagesArray);

// let constructed = [];
//
// function constructItems(fileNames, constructed) {
//   fileNames.forEach(fileName => {
//     console.log("filename.substr:" + fileName.substr(1))
//     let nameKey = fileName.trim().substr(2, fileName.length - 6);
//     console.log("nameKey:" + nameKey);
//     let memberImageData = {[nameKey]: {'src': '../../_nuxt/assets/images/members' + fileName.substr(1)}}
//     constructed.push(memberImageData);
//   });
//   return constructed;
// };


//let res = constructItems(imagesArray, constructed);


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
      return '../../_nuxt/assets/images/members/' + images[id];
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
        // let membersArray = [];
        // membersArray = response.data;
        // membersArray.forEach(member => {
        //   member.firstName = member.name.split(" ")[0]
        //   this.members.push(member);
        // })

      })
  }

}
</script>

<style scoped>
</style>
