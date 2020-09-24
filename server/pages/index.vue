<template>
  <div class="main flex-1">
    <div class="mt-5">
      <div class="text-tiny">Christ's College / FCC / Home</div>
      <div class="content">

        <div class="flex mt-4">
          <p>
            The Friend's of Christ's College, the school's PTA,
            is a community of parents working to enrich the education of all the students.
            All money raised is fed back into the pupils
          </p>
        </div>

        <div class="flex mt-4">
          <p>
            The current Committee members are as follows:
          </p>
        </div>

        <div class="flex w-1/2">
          <table class="table-auto">
            <thead>
            <tr>
              <th class="w-1/2">&nbsp</th>
              <th class="w-1/2">&nbsp</th>
            </tr>
            </thead>
            <tbody>
            <div v-for="member in members">
              <tr>
                <td class="border px-4 py-2">{{ member.role }}</td>
                <td class="border px-4 py-2">{{ member.name }}</td>
              </tr>
            </div>
            </tbody>
          </table>
        </div>

        <div class="flex mt-4">
          As a committee we are a small team of parents,
          however all the fundraising activities we organise are facilitated by a large group of parents who come to help at events
        </div>

        <div class="flex mt-4">
          If you would like to know more about joining the Committee or becoming a “helper” please contact us on the email below as there are numerous ways to help!
        </div>

        <div class="flex mt-4">
          If you would like to pop in and share your ideas our next committee meeting is on {}, at Worpleston Place
        </div>
        <div class="flex mt-4">
          Our next 2nd Hand Uniform Sale is on {}
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  layout: 'default',
  name: "index.vue",
  data() {
    return {
      members: [
        {"index": 1, "role": "Chair", "name": "Nigel Stirzaker"},
        {"index": 2, "role": "Treasurer", "name": "Sarah Hedger Howe"},
        {"index": 3, "role": "Secretary", "name": "Margret Mayersbeth"},
        {"index": 4, "role": "2nd Hand Uniform", "name": "Sandra Phillips"},
        {"index": 5, "role": "Member", "name": "Hanna Morris"},
        {"index": 6, "role": "Member", "name": "Sylvia Owen"},
        {"index": 7, "role": "Teacher", "name": "Stuart Kennedy"},
        {"index": 8, "role": "Teacher", "name": "Zed Annan"},
      ]
    }
  }

}
</script>

<style>
body {
  @apply text-black bg-white
}
</style>
