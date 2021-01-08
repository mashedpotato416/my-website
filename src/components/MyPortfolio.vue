<template>
  <div class="container-fluid my-3" id="portfolio">
    <div class="row justify-content-center">
      <div class="col-md-10 mt-5" style="max-width: 720px;">
        <div class="text-left text-secondary h2 mx-4 my-4">
          Portfolio / Sample Jobs
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8 align-self-center text-secondary">
        <div class="row justify-content-center">
          <div class="col-xl-7 px-3">
            <!-- PORTFOLIO 1 -->
            <div class="card mb-3">
              <div class="card-header bg-info text-light h5">
                Notes
              </div>
              <div class="card-body  text-justify">
                <span class="card-text">
                  A web app deployed in Firebase that allows users to create, read, update and delete notes. 
                  Users can choose to only show only those that notes which are done or notes which are still in progress.
                  The app uses Vue and utilizes both Firebase Database and Authentication. 
                  Only logged in users may use the app. If you feel uncomfortable using your own google 
                  account but want to test it out you may use the following credential: 
                  <br>
                  <br>
                  <div class="text-center">
                    Email Address: <span class="font-italic text-dark">trial@sample.com</span>
                    <br>
                    Password: <span class="font-italic text-dark">password</span>
                  </div>
                </span>
                <br>
                <br>
                <div class="text-center">
                <a href="https://notes-app-vue-a42c9.web.app/" class="btn btn-info">Try App</a>
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- PORTFOLIO 2 -->
            <div class="card mb-3 ">
              <div class="card-header bg-info text-light h5">
                Rock Paper Scissors
              </div>
              <div class="card-body  text-justify">
                <span class="card-text">
                  A web app of the game Rock, Paper, Scissors. User will play against a bot that generates
                  random moves. Once the user quit or loses, The app registers his / her total score (consecutive wins).
                  Players have the option to play using their name or just play as anonymous.
                  The app uses Vue and is deployed in Firebase. 
                </span>
                <br>
                <br>
                <div class="text-center">
                <a href="https://rock-paper-scissors-vue-10eaf.web.app/" class="btn btn-info">Try App</a>
                </div>
              </div>
            </div>
            <!-- END -->
            <!-- PORTFOLIO 3 -->
            <div class="card mb-3 ">
              <div class="card-header bg-info text-light h5">
                Word Cloud
              </div>
              <div class="card-body  text-justify">
                <span class="card-text">
                  A python script that reads through a text file and creates a word cloud from words in it. Words that are common
                  are marked in a list and is excluded in the Word Cloud. This script is the course project for Crash Course
                  in Python by Google. A sample output follows.
                </span>
                <br>
                <br>
                <div class="text-center">
                <img src="../assets/WordCloud.png" class="w-75 my-1">
                </div>
              </div>
            </div>
            <!-- END -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MyPortfolio',
  props: {
  }
}

</script>

<style>
    .deco-none {
  color: inherit;
  text-decoration: inherit;
  }

  .deco-none:link {
    color: inherit;
    text-decoration: inherit;
  }

  .deco-none:hover {
    color: #17a2b8;
    text-decoration: inherit;
  }

</style>