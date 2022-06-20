<template>
  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Second Hand Uniforms</div>
      <div class="container">

        <br/>

        <div class="text-lg">
          Thank you to all parents and carers who have contributed second hand uniform over the last years. Your contributions are invaluable. The Second-Hand Uniform Sale is the
          FCCs biggest money-maker and it is great to be able to help the school’s community with the essential uniform at very good value. We try to hold the second hand uniform
          sales monthly and more often at important times of the school year. These are the future dates:
        </div>
        <div>
          <ul class="font-bold">
          </ul>
        </div>

        <br/>

        <div class="text-2xl">
          2nd Hand Uniform Prices
        </div>

        <br>

        <div class="text-2xl">
          Boys
        </div>


        <div class="flex">

          <div v-for="item in getBoysUniforms" :key="item.id">
            <div>
              <img class="h-48 w-48" :src="item.Photo.formats.thumbnail.url"/>
              <div class="text-center">{{ item.Item_Name }}</div>
              <div class="text-center">
                {{ item.Price | currency }}
              </div>
            </div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Shirt-400x400.jpg" alt="Single Shirt"/>
            <div class="text-center">Single Shirt</div>
            <div class="text-center">£4</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Tie-400x400.jpg" alt="Tie"/>
            <div class="text-center">Tie</div>
            <div class="text-center">£2</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Jumper-400x400.jpg" alt="Jumper"/>
            <div class="text-center">Jumper</div>
            <div class="text-center">£5</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Trousers-400x400.jpg" alt="Trousers"/>
            <div class="text-center">Trousers</div>
            <div class="text-center">£3</div>
          </div>


        </div>


        <br>

        <div class="text-2xl">
          Girls
        </div>

        <div class="flex">

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Girls-Blazer-400x400.jpg" alt="Girls Blazer"/>
            <div class="text-center">Girls Blazer</div>
            <div class="text-center">£10</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Blouse-400x400.jpg" alt="Single Blouse"/>
            <div class="text-center">Single Blouse</div>
            <div class="text-center">£4</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Cardi-400x400.jpg" alt="Cardigan"/>
            <div class="text-center">Cardigan</div>
            <div class="text-center">£5</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Skirt-400x400.jpg" alt="Skirt"/>
            <div class="text-center">Skirt</div>
            <div class="text-center">£5</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Trousers-400x400.jpg" alt="Trousers"/>
            <div class="text-center">Trousers</div>
            <div class="text-center">£3</div>
          </div>


        </div>

        <div class="text-2xl">
          General
        </div>

        <div class="flex">
          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Rucksack-400x400.jpg" alt="Rucksack"/>
            <div class="text-center">Rucksack</div>
            <div class="text-center">£8</div>
          </div>
        </div>

        <div class="text-2xl">
          PE
        </div>

        <div class="flex">

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Black-Shorts-400x400.jpg" alt="Black Shorts"/>
            <div class="text-center">Black Shorts</div>
            <div class="text-center">£4</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Black-Skort-400x400.jpg" alt="Black Skort"/>
            <div class="text-center">Black Skort</div>
            <div class="text-center">£4</div>
          </div>


          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Football-Shirt-400x400.jpg" alt="Football Shirt"/>
            <div class=" text-center">New PE Shirt
            </div>
            <div class="text-center">£5</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Rugby-Shirt-400x400.jpg" alt="Rugby Shirt"/>
            <div class="text-center">Rugby Shirt</div>
            <div class="text-center">£5</div>
          </div>

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Hoodie-400x400.jpg" alt="Rugby Shirt"/>
            <div class="text-center">Hoodie</div>
            <div class="text-center">£5</div>
          </div>


          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Football-Socks-510x510.jpg" alt="Rugby Socks"/>
            <div class="text-center">Rugby Socks</div>
            <div class="text-center">£1</div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VueNumeric from 'vue-numeric'

export default {

  name: "second-hand-uniform.vue",
  fetchOnServer: true,
  async fetch() {

    const baseStrapiURL = this.$config.strapiBaseUrl;
    const uniforms = await this.$axios.$get(baseStrapiURL + '/uniforms');
    this.uniforms = uniforms;

  },
  data() {
    return {
      uniforms: 'TBA'
    }
  },

  computed: {
    getBoysUniforms: function () {
      let boysUniform = this.uniforms.filter(item => (item.Category === 'Boys'))
      return boysUniform;
    },
    getGirlsUniforms: function () {
      let girlsUniform = this.uniforms.filter(item => (item.Category === 'Girls'))
      return girlsUniform;
    }
  }
}
</script>

<style scoped>

</style>
