<template>
  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Home</div>
      <div class="container">

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
          <div class="border border-4 rounded-md border-blue-900 w-5/12 ml-15 mt-20 mb-20 p-4">

            <div class="align-middle">

              <div class="mt-4 text-center font-bold">
                Calendar
              </div>

              <div class="mt-4">
                Next FCC Committee Meeting (At the Jovial Sailor Ripley)
                <div class="font-bold" v-text="displayNextMeetingDate(pickNextDate(this.meetingDates))"/>
              </div>
            </div>

            <div class="mt-4">
              Next 2nd Hand Uniform Sale ( See
              <nuxt-link class="outline-none" to="/main/second-hand-uniform">Details</nuxt-link>
              )
              <div class="font-bold" v-text="displayDateAndTimeWithRange(pickNextDate(this.uniformSaleDates))"/>
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

</template>

<script>
import moment from 'moment';
import axios from '@nuxtjs/axios';

export default {
  layout: 'default',
  name: "index.vue",
  created() {

  },
  mounted() {

  },
  data() {
    return {
      meetingDates: 'TBA',
      uniformSaleDates: 'TBA',
      members: [
        {"index": 1, "role": "Chair", "name": "Nigel Stirzaker"},
        {"index": 2, "role": "Treasurer", "name": "Sarah Hedger-Howe"},
        {"index": 3, "role": "Secretary", "name": "Margareth Mayersbeth"},
        {"index": 4, "role": "2nd Hand Uniform Sales", "name": "Sandra Philips"},
        {"index": 5, "role": "Member", "name": "Hanna Morris"},
        {"index": 6, "role": "Member", "name": "Sylvia Owen"},
        {"index": 7, "role": "Staff Representative", "name": "Stuart Kennedy"},
        {"index": 8, "role": "Staff Representative", "name": "Zed Annan"},
      ]
    }
  },
  fetchOnServer: true,
  async fetch() {
    const baseStrapiURL = this.$config.strapiBaseUrl;
    const meetingDates = await this.$axios.$get(baseStrapiURL + '/meeting-dates');
    this.meetingDates = meetingDates;

    const uniformSaleDates = await this.$axios.$get(baseStrapiURL + '/uniform-sale-dates');
    this.uniformSaleDates = uniformSaleDates;


  },


  methods: {

    pickNextDate: function (records) {
      let meetingDatesAndTimes = [];
      for (let key in records) {
        let record = records[key]
        let dateTime = String(record['Date']) + " " + String(record['Time']);
        meetingDatesAndTimes.push(new Date(dateTime));
      }
      let futureTBADate = new Date();
      futureTBADate.setHours(0, 0, 0, 0);
      futureTBADate.setFullYear(3000, 1, 1);
      meetingDatesAndTimes.push(futureTBADate);

      let today = new Date();
      today.setHours(0, 0, 0, 0);
      return meetingDatesAndTimes.find(date => (date >= today));

    },

    displayNextMeetingDate: function (date) {
      let dateWrapper = moment(date);
      if (dateWrapper.year() === 3000) {
        return "TBA"
      }
      return dateWrapper.format('dddd Do MMMM') + ' at ' + dateWrapper.format('h:m a');
    }
    ,
    displayDateAndTimeWithRange: function (date) {
      let dateWrapper = moment(date);
      if (dateWrapper.year() === 3000) {
        return "TBA"
      }
      let base = dateWrapper.format('dddd Do MMMM') + ' from ' + dateWrapper.format('h:m a') + ' until approximately ';

      if (dateWrapper.day() === moment().day('saturday').day()) {
        return base + dateWrapper.add(2, 'hours').format('h:m a');
      } else {
        return base + dateWrapper.add(1, 'hours').format('h:m a');
      }

    }


  }


}
</script>

<style>
body {
  @apply text-black bg-white
}
</style>
