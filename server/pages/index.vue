<template>
  <div class="main flex-1">
    <div class="mt-5 ">
      <div class="text-tiny">Christ's College / FCC / Home</div>
      <div class="container">

        <div class="flex mt-4">
          <p>
            The Friend's of Christ's College, the school's PTA,
            is a vital part of the school community, we work throughout the year fundraising for
            the benefit of Christ’s College students.
          </p>
        </div>

        <div class="flex mt-4">

          On the &nbsp <span class="underline"><a href="https://www.christscollege.surrey.sch.uk/298/calendar">School Calendar</a></span>&nbsp you will find the dates of our meetings and the Second Hand Uniform Sales that we run

        </div>


      </div>



      <div class="flex mt-4">
        If you would like to help out as a Committee member or just helping at events to raise money, please contact us on the email below. There are numerous ways to help!
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
        {"visual_order": 1, "role": "Chair", "name": "Nigel Stirzaker"},
        {"visual_order": 2, "role": "Treasurer", "name": "Sarah Hedger-Howe"},
        {"visual_order": 3, "role": "Secretary", "name": "Margareth Mayersbeth"},
        {"visual_order": 4, "role": "2nd Hand Uniform Sales", "name": "Sandra Philips"},
        {"visual_order": 5, "role": "Member", "name": "Hanna Morris"},
        {"visual_order": 6, "role": "Member", "name": "Sylvia Owen"},
        {"visual_order": 7, "role": "Staff Representative", "name": "Stuart Kennedy"},
        {"visual_order": 8, "role": "Staff Representative", "name": "Zed Annan"},
      ]
    }
  },
  fetchOnServer: false,
  async fetch() {
    console.log('Fetch Called')
    const baseStrapiURL = this.$config.strapiBaseUrl;
    this.meetingDates = await this.$axios.$get(baseStrapiURL + '/meeting-dates')
    this.uniformSaleDates = await this.$axios.$get(baseStrapiURL + '/uniform-sale-dates');
    this.members = await this.$axios.$get(baseStrapiURL + '/members');

  },


  methods: {

    pickNextDate: function (records) {
      let meetingDatesAndTimes = [];
      for (let key in records) {
        let record = records[key]
        let dateTime = String(record['Date']) + " " + String(record['Time']);
        meetingDatesAndTimes.push(new Date(dateTime));
      }
      meetingDatesAndTimes.sort(function(a,b){
        return new Date(a) - new Date(b);
      });
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
