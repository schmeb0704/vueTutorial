<script>
export default{
  data(){
    return{
      name: "John Doe",
      status: "stuf",
      tasks: [
        'task one',
        'task 2',
        'task 3',
      ], 
      link: 'https://google.com',
      link2: 'https://youtube.com'
    }
  },
  methods:{
    toggleStatus(){
      if(this.status === "active"){
        this.status = 'pending'
      } else if(this.status === 'pending'){
        this.status = 'inactive'
      }else{
        this.status = 'active'
      }
    }
  }
}
</script>
<template>
<h1>{{ name }}</h1>
<p v-if="status === 'active'">User is active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<p v-else>User is inactive</p>

<h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
</h3>
<a v-bind:href="link">Click for Google</a>
<br>
<a :href="link2">Click for Google</a>
<br>
<button @click="toggleStatus">Change status</button>
</template>

<style>
h1{
  color: red
}
</style>