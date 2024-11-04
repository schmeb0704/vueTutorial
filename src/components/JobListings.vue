<script setup>
import { ref , defineProps, onMounted, reactive} from 'vue'
import JobListing from './JobListing.vue';
import { RouterLink } from 'vue-router';
import fetchJobData from '@/functions/fetchJobs';

// const jobs = ref([])
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
})

const state = reactive({
  jobs:[],
  isLoading: true
})

onMounted(async()=>{
  try {
    const jobData = await fetchJobData()
    state.jobs = jobData
  } catch (error) {
   console.error(error) 
  }finally{
    state.isLoading = false
  }
})

</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center" id="browse-jobs-header">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing 
        v-for="job in state.jobs.slice(0, limit || state.jobs.length)" 
        :key="job.id" 
        :job="job"/>
      </div>
    </div>
  </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>