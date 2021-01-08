<template>
  <div class="container-fluid my-3" id="education">
    <div class="row justify-content-center">
      <div class="col-md-10 mt-5" style="max-width: 720px;">
        <div class="text-left text-secondary h2 mx-4 my-4">
          Education
        </div>
      </div>
    </div>
    <!-- MALAYAN COLLEGES LAGUNA -->
    <div class="row justify-content-center">
      <div class="col-md-10 align-self-center">
        <!-- DETAILS -->
        <div class="row justify-content-center">
          <div class="col" style="max-width: 720px;">
            <div class="row justify-content-center mt-3 mx-4">
              <div style="width: 360px">
                <img 
                    src="../assets/malayan.png" 
                    class="w-100" 
                    alt="Malayan Colleges Laguna">
              </div>
              <div class="text-justify font-weight-bold h5 text-secondary my-3">
                  Bachelor of Science - Civil Engineering
              </div>
              <div class="text-center font-weight-bold text-secondary h6 w-100">
                <a href="https://www.mcl.edu.ph/" class="deco-none"> 
                  Malayan Colleges Laguna
                </a>
              </div>
              <div class="text-center font-weight-light text-secondary h6 w-100">
              (July 2009 - May 2014)
              </div>
            </div>
          </div>
        </div>
        <!-- END -->
      </div>
    </div>
    <!-- END -->
  </div>
</template>
<script>

export default {
  name: 'MyExperience',
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
  .small-icon {
    color: #FFD700;
  }

  .small-icon:hover {
    color: #17a2b8;
  }

</style>