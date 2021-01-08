<template>
  <div class="container-fluid my-5 pt-3" id="aboutme">
    <!-- profile pic -->
    <div class="row justify-content-center mt-5">
      <img src="../assets/profile-pic.jpg" alt="hector vergara" class="bg-light img-thumbnail rounded-circle">
    </div>
    <!-- info -->
    <div class="row my-3">
      <div class="col">
        <!-- name -->
        <div class="row justify-content-center">
          <span class="text-secondary h2">
            Hector Vergara
          </span>
        </div>
        <!-- title -->
        <div class="row justify-content-center">
          <span 
            class="text-secondary"
            style="line-height: 1em;">
            Civil/Structural Engineer
          </span>
        </div>
      </div>
    </div>
    <!-- about me -->
    <div class="row justify-content-center my-5">
      <!-- display only on XL and above sizes -->
      <div class="col-2 align-self-start d-none d-xl-block">
        <div class="mb-5">
          <div class="row justify-content-center mb-3">
          <font-awesome-icon 
                  :icon="['fas', 'hands-helping']"
                  class="huge-icon"/>
          </div>
          <div class="row justify-content-center text-secondary h4">
            Team Player
          </div>
        </div>
        <div>
          <div class="row justify-content-center mb-3">
          <font-awesome-icon 
                  :icon="['fas', 'user-graduate']"
                  class="huge-icon"/>
          </div>
          <div class="row justify-content-center text-secondary h4">
            Fast Learner
          </div>
        </div>
      </div>
      <!-- -------------- END --------------- -->
      <div class="col-md-10" style="max-width: 720px;">
        <div class="row justify-content-center mx-4 my-2">
          <div class="text-justify text-secondary">
            An engineer who crave opportunities to further more develop systems or 
            even create new solutions that will make an impact to lives of other people.
            He is a flexible professional who embraces teamwork which makes him efficient in
            delivering all assigned task to him. Confident with both the foreign and native language,
            He is able to convey his message and instructions well to his colleagues and clients. 
            A future-oriented individual who always seeks to adapt to rapid technological changes 
            via online learning, external trainings and reading.
          </div>
        </div>
        <!-- icons / website -->
        <div class="row justify-content-center mx-4 mt-2">
          <div class="col">
            <div 
              v-if="phoneOn" 
              class="row justify-content-center text-secondary font-weight-normal">
              Globe: +63 906 460 2347<br>
              Smart: +63 929 311 4243
            </div>
            <div 
              v-if="emailOn" 
              class="row justify-content-center text-secondary font-weight-normal">
              Email Address: hector.vergara@gmail.com
            </div>
          </div>
        </div>
        <div class="row justify-content-center mx-4 my-5">
          <div class="col text-center">
            <a href="#" class="deco-none" onclick="return false" @click="clickPhone">
              <font-awesome-icon 
                :icon="['fas', 'phone-square']"
                class="big-icon"/>
            </a>
          </div>
          <div class="col text-center">
            <a href="https://github.com/mashedpotato416" class="deco-none">
              <font-awesome-icon 
                :icon="['fab', 'github']"
                class="big-icon"/>
            </a>
          </div>
          <div class="col text-center">
            <a href="https://linkedin.com/in/hector-vergara-905392a7" class="deco-none">
              <font-awesome-icon 
                :icon="['fab', 'linkedin']"
                class="big-icon"/>
            </a>
          </div>
          <div class="col text-center">
            <a href="#" class="deco-none" onclick="return false" @click="clickEmail">
              <font-awesome-icon 
                :icon="['fas', 'envelope']"
                class="big-icon"/>
            </a>
          </div>
        </div>
      </div>
      <!-- display only on XL and above sizes -->
      <div class="col-2 align-self-start d-none d-xl-block">
        <div class="mb-5">
          <div class="row justify-content-center mb-3">
          <font-awesome-icon 
                  :icon="['fas', 'people-arrows']"
                  class="huge-icon"/>
          </div>
          <div class="row justify-content-center text-secondary h4">
            Communicative
          </div>
        </div>
        <div>
          <div class="row justify-content-center mb-3">
          <font-awesome-icon 
                  :icon="['fas', 'people-carry']"
                  class="huge-icon"/>
          </div>
          <div class="row justify-content-center text-secondary h4">
            Diligent
          </div>
        </div>
      </div>
      <!-- -------------- END --------------- -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      phoneOn: false,
      emailOn: false
    }
  },
  methods: {
    clickPhone () {
      this.phoneOn = !this.phoneOn
    },
    clickEmail () {
      this.emailOn = !this.emailOn
    }
  }
}
</script>

<style scoped>
  .deco-none {
  color: inherit;
  text-decoration: inherit;
  }

  .deco-none:link {
    color: inherit;
    text-decoration: inherit;
  }

  .deco-none:hover {
    color: inherit;
    text-decoration: inherit;
  }

  .big-icon {
    height: 55px;
    width: auto;
    color: #6c757d;
  }

  .big-icon:hover {
    height: 55px;
    width: auto;
    color: #17a2b8;
  }

  .huge-icon {
    height: 60px;
    width: auto;
    color: #6c757d;
  }

  .huge-icon:hover {
    height: 75px;
    width: auto;
    color: #17a2b8;
  }
  
</style>