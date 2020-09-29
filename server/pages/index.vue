<template>
  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Home</div>
      <div class="content">

        <div class="flex mt-4">
          <p>
            The Friend's of Christ's College, the school's PTA,
            is a community of parents working to enrich the education of all the students.
            <span class="font-bold">All money raised is used to provide for the pupils</span>
          </p>
        </div>


        <div class="flex">
          <div class="w-1/4">
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
          <div class="w-1/2">
            <div class="mt-4 text-center">
              Calendar
            </div>
            <div class="mt-4">
              Next Meeting <span class="font-bold" v-text="nextMeeting()"/>
              <div>(Due to the 'Rule of 6' we are meeting on-line. If you have ideas or questions please email us for connections details)</div>
            </div>

            <div class="mt-4">
              Next 2nd Hand Uniform Sale <span class="font-bold" v-text="next2ndHandUniformSale()"/> from <span class="font-bold">3:15 - 4:15 pm</span>
            </div>

          </div>
        </div>

        <div class="flex mt-4">
          As a committee we are a small team of parents,
          however all the fundraising activities we organise are facilitated by a large group of parents who come to help at events
        </div>

        <div class="flex mt-4">
          If you would like to know more about joining the Committee or becoming a “helper” please contact us on the email below as there are numerous ways to help!
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
  mounted() {
    dayjs.extend(AdvancedFormat)
  },
  data() {
    return {
      members: [
        {"index": 1, "role": "Chair", "name": "Nigel Stirzaker"},
        {"index": 2, "role": "Treasurer", "name": "Sarah Hedger Howe"},
        {"index": 3, "role": "Secretary", "name": "Margret Mayersbeth"},
        {"index": 4, "role": "2nd Hand Uniform Sales", "name": "Sandra Phillips"},
        {"index": 5, "role": "Member", "name": "Hanna Morris"},
        {"index": 6, "role": "Member", "name": "Sylvia Owen"},
        {"index": 7, "role": "Teacher", "name": "Stuart Kennedy"},
        {"index": 8, "role": "Teacher", "name": "Zed Annan"},
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

      const nextDate = dayjs(dates.find(date => (date > new Date()))).format('dddd Do MMMM');

      return nextDate;
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

      const nextDate = dayjs(dates.find(date => (date > new Date()))).format('dddd Do MMMM');

      return nextDate;

    }

  }

}
</script>

<style>
body {
  @apply text-black bg-white
}
</style>
