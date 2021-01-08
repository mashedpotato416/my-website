<template>
  <div>
    <div class="container-fluid fixed-top mb-5">
      <div class="row bg-info">
        <!-- display only on SM and XS sizes -->
        <div class="col align-self-center d-block d-md-none">
          <div class="row justify-content-center">
            <div class="col-10 align-self-center pl-4 py-3">
              <span class="text-light h5">
                Hector Vergara
              </span>
            </div>
            <!-- hamburger button / navigator -->
            <div class="col-2 align-self-center">
              <div class="row justify-content-center">
                <div class="col align-self-center btn-group">
                  <button 
                    type="button" 
                    class="btn btn-info dropdown-toggle" 
                    data-toggle="dropdown" 
                    data-display="static" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    <font-awesome-icon :icon="['fas', 'bars']"/>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right bg-muted">
                    <a href="#aboutme" class="deco-none dropdown-item text-info">About Me</a>
                    <a href="#experience" class="deco-none dropdown-item text-info">Experience</a>
                    <a href="#education" class="deco-none dropdown-item text-info">Education</a>
                    <a href="#certificates" class="deco-none dropdown-item text-info">Certificates</a>
                    <a href="#skills" class="deco-none dropdown-item text-info">Skills</a>
                    <a href="#portfolio" class="deco-none dropdown-item text-info">Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- -------------- END --------------- -->
        <!-- display only on MD and above sizes -->
        <div class="col align-self-center d-none d-md-block">
          <div class="row justify-content-center">
            <a 
              href="#aboutme"
              class="col align-self-center  deco-none">
              <div class="btn btn-info text-center py-3 w-100">
                <span class="text-light h5">
                About Me
                </span>
              </div>
            </a>
            <a 
              href="#experience"
              class="col align-self-center  deco-none">
              <div class="btn btn-info text-center py-3 w-100">
                <span class="text-light h5">
                Experience
                </span>
              </div>
            </a>
            <a 
              href="#education"
              class="col align-self-center  deco-none">
              <div class="btn btn-info text-center py-3 w-100">
                <span class="text-light h5">
                Education
                </span>
              </div>
            </a>
            <a 
              href="#certificates"
              class="col align-self-center  deco-none">
              <div class="btn btn-info text-center py-3 w-100">
                <span class="text-light h5">
                Certificates
                </span>
              </div>
            </a>
            <a 
              href="#skills"
              class="col align-self-center  deco-none">
              <div class="btn btn-info text-center py-3 w-100">
                <span class="text-light h5">
                Skills
                </span>
              </div>
            </a>
            <a 
              href="#portfolio"
              class="col align-self-center  deco-none">
              <div class="btn btn-info text-center py-3 w-100">
                <span class="text-light h5">
                Portfolio
                </span>
              </div>
            </a>
            
          </div>
        </div>
        <!-- -------------- END --------------- -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyHeader'
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
  
</style>
