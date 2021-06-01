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
            <li v-for="dates in getAllFuture2ndHandUniformSaleDates()">
              {{ $moment(dates).format('dddd Do MMMM') + ' at ' + $moment(dates).format('h:m a') }}
            </li>
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

          <div>
            <img class="h-48 w-48" src="~/assets/images/uniform/Boys-Blazer-400x400.jpg" alt="Boys Blazer"/>
            <div class="text-center">Boys Blazer</div>
            <div class="text-center">£10</div>
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
export default {
  name: "second-hand-uniform.vue",
  methods: {
    getAllFuture2ndHandUniformSaleDates: function () {
      const dates = [
        new Date("2020-09-25 00:00:00"),
        new Date("2020-10-23 00:00:00"),
        new Date("2020-11-27 00:00:00"),
        new Date("2021-01-29 00:00:00"),
        new Date("2021-02-26 00:00:00"),
        new Date("2021-03-26 00:00:00"),
        new Date("2021-04-30 00:00:00"),
        new Date("2021-06-23 15:15:00"),
        new Date("2021-07-17 10:00:00"),
        new Date("2021-07-31 10:00:00")
      ];
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      return dates.filter(date => (date >= today));
    },
    displayFuture2ndHandUniformSaleDates: function (dates) {

    }
  }
}
</script>

<style scoped>

</style>
