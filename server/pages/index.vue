<template>
  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Home</div>
      <div class="content">

        <div class="flex mt-4">
          <p>
            The Friend's of Christ's College, the school's PTA,
            is a vital part of the school community, who work throughout the year fundraising for
            the benefit of Christ’s College students.
          </p>
        </div>


        <div class="flex">
          <div class="w-1/3">
            <div class="mt-4">
              The current committee members are:
            </div>

            <table class="table-fixed">
              <thead>
              <tr>
                <th class="w-1/2">Role</th>
                <th class="w-1/2">Name</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="member in members">
                <td class="border px-4 py-2">{{ member.role }}</td>
                <td class="border px-4 py-2">{{ member.name }}</td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="border border-4 rounded-md border-blue-900 w-1/3 ml-15 mt-20 mb-20 p-4">

            <div class="align-middle">

              <div class="mt-4 text-center font-bold">
                Calendar
              </div>

              <div class="mt-4">
                Next Meeting <span class="font-bold" v-text="nextMeeting()"/>
                <div>(Due to the 'Rule of 6' we are meeting on-line.</div>
                <div> If you have ideas or questions please email us for connections details)</div>
              </div>

              <div class="mt-4">
                Next 2nd Hand Uniform Sale <span class="font-bold" v-text="next2ndHandUniformSale()"/> from <span class="font-bold">3:15 - 4:15 pm</span>
              </div>

            </div>
          </div>
        </div>

        <div class="mt-4">
          In the past few years, we have been able to provide the school with funds for
          <ul class="ml-6 list-disc">
            <li>the outdoor table-tennis tables,</li>
            <li>the school’s new personalised football kits,</li>
            <li>some language dictionaries</li>
          </ul>
          and we are raising funds for an outdoor shelter as requested by the students.
        </div>

        <div class="flex mt-4">
          If you would like to help out as a Committee member or help raise money, please contact us on the email below. There are numerous ways to help!
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'

export default {
  layout: 'default',
  name: "index.vue",
  created() {
    dayjs.extend(AdvancedFormat)
  },
  data() {
    return {
      members: [
        {"index": 1, "role": "Chair", "name": "Nigel Stirzaker"},
        {"index": 2, "role": "Treasurer", "name": "Sarah Hedger-Howe"},
        {"index": 3, "role": "Secretary", "name": "Margret Mayersbeth"},
        {"index": 4, "role": "2nd Hand Uniform Sales", "name": "Sandra Philips"},
        {"index": 5, "role": "Member", "name": "Hanna Morris"},
        {"index": 6, "role": "Member", "name": "Sylvia Owen"},
        {"index": 7, "role": "Staff Representative", "name": "Stuart Kennedy"},
        {"index": 8, "role": "Staff Representative", "name": "Zed Annan"},
      ]
    }
  },
  methods: {
    next2ndHandUniformSale: function () {
      const dates = [
        new Date("2020-09-25"),
        new Date("2020-10-23"),
        new Date("2020-11-27"),
        new Date("2021-01-29"),
        new Date("2021-02-26"),
        new Date("2021-03-26"),
        new Date("2021-04-30"),
        new Date("2021-05-28"),
        new Date("2021-06-25"),
        new Date("2021-07-15")
      ];

      return dayjs(dates.find(date => (date > new Date()))).format('dddd Do MMMM');

    },
    nextMeeting: function () {

      const dates = [
        new Date("2020-10-07"),
        new Date("2020-11-11"),
        new Date("2020-12-09"),
        new Date("2021-01-13"),
        new Date("2021-02-03"),
        new Date("2021-03-10"),
        new Date("2021-04-21"),
        new Date("2021-05-12"),
        new Date("2021-06-16"),
        new Date("2021-07-14")

      ];

      return dayjs(dates.find(date => (date > new Date()))).format('dddd Do MMMM');


    }

  }

}
</script>

<style>
body {
  @apply text-black bg-white
}
</style>
