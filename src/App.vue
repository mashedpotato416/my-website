<template>
  <div id="app">
    <div>
      <my-header></my-header>
      <about-me></about-me>
      <hr/>
      <my-experience></my-experience>
      <hr/>
      <my-education></my-education>
      <hr/>
      <my-certificates></my-certificates>
      <hr/>
      <my-skills></my-skills>
      <hr/>
      <my-portfolio></my-portfolio>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import AboutMe from './components/AboutMe.vue'
import MyExperience from './components/MyExperience.vue'
import MyEducation from './components/MyEducation.vue'
import MyCertificates from './components/MyCertificates.vue'
import MySkills from './components/MySkills.vue'
import MyPortfolio from './components/MyPortfolio.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    AboutMe,
    MyExperience,
    MyEducation,
    MyCertificates,
    MySkills,
    MyPortfolio
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  #app {
    font-family: 'Source Sans Pro', sans-serif;
  }
</style>
