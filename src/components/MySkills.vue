<template>
  <div class="container-fluid my-3" id="skills">
    <div class="row justify-content-center">
      <div class="col-md-10 mt-5" style="max-width: 720px;">
        <div class="text-left text-secondary h2 mx-4 my-4">
          Skills / Tools
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10 mt-5 mx-4" style="max-width: 840px;">
        <!-- SKILL CARDS -->
        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6">
          <!-- SKILL 1 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://docs.python.org/3/">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/python.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="python logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">Python</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 2 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/javascript.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="javascript logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">Javascript</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 3 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/html.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="html5 logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">HTML5</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 4 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/css.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="CSS3 logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">CSS3</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>      
          <!-- SKILL 5 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://vuejs.org/">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/vue.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="vueJS logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">Vue</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 6 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://getbootstrap.com/">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/bootstrap.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="Bootstrap logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">Bootstrap</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 7 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://github.com/">
                <div class="card text-center card-max-width">
                  <font-awesome-icon 
                    :icon="['fab', 'github']"
                    class="github-icon w-100 p-2"/>
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">Git / Github</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END --> 
          <!-- SKILL 8 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://www.php.net/docs.php">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/php.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="PHP logo">
                  <div class="card-body bg-info py-2">
                    <h5 class="text-light h6">PHP</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END --> 
          <!-- SKILL 9 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://www.bentley.com/en/products/product-line/structural-analysis-software/staadpro">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/staad.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="STAAD Logo">
                  <div class="card-body bg-dark py-2">
                    <h5 class="text-light h6">STAAD</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 10 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://www.csiamerica.com/products/etabs">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/etabs.jpg" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="ETABS Logo">
                  <div class="card-body bg-dark py-2">
                    <h5 class="text-light h6">ETABS</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->       
          <!-- SKILL 11 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://risa.com/products/risa-3d">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/risa.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="RISA3D Logo">
                  <div class="card-body bg-dark py-2">
                    <h5 class="text-light h6">RISA3D</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 12 (DIFFERENT FORMAT ... IMAGE NOT 1:1) -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://www.osmose.com/o-calc-pro">
                <div class="card text-center card-max-width">
                  <div class="img-height">
                    <img 
                      src="../assets/ocalc.png" 
                      class="px-3 py-4"
                      style="width: 100%;" 
                      alt="OCalc Pro Logo">
                  </div>
                  <div class="card-body bg-dark py-2">
                    <h5 class="text-light h6">OCalc Pro</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 13 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://risa.com/products/risa-3d">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/tnx.jpg" 
                    class="card-img-top p-3"
                    style="height: 118px;" 
                    alt="TnxTowers Logo">
                  <div class="card-body bg-dark py-2">
                    <h5 class="text-light h6">TnxTowers</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 14 -->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <a href="https://www.autodesk.com/products/autocad/overview">
                <div class="card text-center card-max-width">
                  <img 
                    src="../assets/acad.png" 
                    class="card-img-top p-3"
                    style="width: 100%" 
                    alt="AutoCAD Logo">
                  <div class="card-body bg-dark py-2">
                    <h5 class="text-light h6">AutoCAD</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- END -->
          <!-- SKILL 15 (NO LINK)-->
          <div class="col mb-2">
            <div class="row justify-content-center">
              <div class="card text-center card-max-width">
                <img 
                  src="../assets/msoffice.jpg" 
                  class="card-img-top p-3"
                  style="width: 100%" 
                  alt="Microsoft Office Logo">
                <div class="card-body bg-warning py-2">
                  <h5 class="text-dark h6">MS Office</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- END -->                                         
        </div>
        <!-- END -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MySkills',
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

  .bg-card {
    background-color: blue;
  }

  .card-max-width {
    max-width: 120px;
  }

  .github-icon {
    height: 118px;
    color: #6c757d;
  }

  .img-height {
    height: 118px;
  }


</style>