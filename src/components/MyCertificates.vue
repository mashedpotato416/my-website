<template>
  <div class="container-fluid my-3" id="certificates">
    <div class="row justify-content-center">
      <div class="col-md-10 mt-5" style="max-width: 720px;">
        <div class="text-left text-secondary h2 mx-4 my-4">
          Certificates
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10" style="max-width: 720px;">
        <div class="px-2">
          <ul class="list-unstyled">
            <div id="accordion" class="px-4">
              <!-- CERTIFICATE #1 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingOne">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne">
                        <font-awesome-icon 
                          :icon="['fas', 'graduation-cap']"
                          class="small-icon mr-2"/>
                        Python for Everybody Specialization
                      </button>
                  </div>
                  <div 
                    id="collapseOne" 
                    class="collapse" 
                    aria-labelledby="headingOne" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        This Specialization builds on the success of the Python for Everybody course 
                        and will introduce fundamental programming concepts including data structures, 
                        networked application program interfaces, and databases, using the Python 
                        programming language. In the Capstone Project, you’ll use the technologies 
                        learned throughout the Specialization to design and create your own  applications 
                        for data retrieval, processing, and visualization.
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/michigan.png" 
                              style="width: 110px" 
                              alt="University of Michigan Logo">
                        </div>
                        <div class="col text-center">
                          <img 
                              src="../assets/coursera.png" 
                              style="width: 110px"
                              alt="Coursera Logo">
                        </div>
                      </div>
                      <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="https://www.coursera.org/account/accomplishments/specialization/N5JX3N5FE2US">
                              <div class="btn btn-info">
                                See Certificate & Courses
                              </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
              <!-- CERTIFICATE #2 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseTwo" 
                        aria-expanded="true" 
                        aria-controls="collapseTwo">
                        <font-awesome-icon 
                          :icon="['fas', 'graduation-cap']"
                          class="small-icon mr-2"/>
                        Python 3 Programming Specialization
                      </button>
                  </div>
                  <div 
                    id="collapseTwo" 
                    class="collapse" 
                    aria-labelledby="headingTwo" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary  ">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        This specialization teaches the fundamentals of programming in Python 3. We will 
                        begin at the beginning, with variables, conditionals, and loops, and get to some 
                        intermediate material like keyword parameters, list comprehensions, lambda 
                        expressions, and class inheritance.
                        <br>
                        <br>
                        You will have lots of opportunities to practice. You will also learn ways to reason 
                        about program execution, so that it is no longer mysterious and you are able to 
                        debug programs when they don’t work.
                        <br>
                        <br>
                        By the end of the specialization, you’ll be writing programs that query Internet 
                        APIs for data and extract useful information from them.  And you’ll be able to learn 
                        to use new modules and APIs on your own by reading the documentation. That will 
                        give you a great launch toward being an independent Python programmer.
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/michigan.png" 
                              style="width: 110px" 
                              alt="University of Michigan Logo">
                        </div>
                        <div class="col text-center">
                          <img 
                              src="../assets/coursera.png" 
                              style="width: 110px"
                              alt="Coursera Logo">
                        </div>
                      </div>
                      <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="https://www.coursera.org/account/accomplishments/specialization/72S2Z8B8VHG8">
                              <div class="btn btn-info">
                                See Certificate & Courses
                              </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
              <!-- CERTIFICATE #3 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingThree">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseThree" 
                        aria-expanded="true" 
                        aria-controls="collapseThree">
                        <font-awesome-icon 
                          :icon="['fas', 'graduation-cap']"
                          class="small-icon mr-2"/>
                        Web Design for Everybody Specialization
                      </button>
                  </div>
                  <div 
                    id="collapseThree" 
                    class="collapse" 
                    aria-labelledby="headingThree" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary  ">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        This Specialization covers how to write syntactically correct HTML5 and CSS3, and 
                        how to create interactive web experiences with JavaScript. Mastering this range 
                        of technologies will allow you to develop high quality web sites that, work 
                        seamlessly on mobile, tablet, and large screen browsers accessible. During the 
                        capstone you will develop a professional-quality web portfolio demonstrating 
                        your growth as a web developer and your knowledge of accessible web design. This 
                        will include your ability to design and implement a responsive site that utilizes 
                        tools to create a site that is accessible to a wide audience, including those with 
                        visual, audial, physical, and cognitive impairments.
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/michigan.png" 
                              style="width: 110px" 
                              alt="University of Michigan Logo">
                        </div>
                        <div class="col text-center">
                          <img 
                              src="../assets/coursera.png" 
                              style="width: 110px"
                              alt="Coursera Logo">
                        </div>
                      </div>
                      <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="https://www.coursera.org/account/accomplishments/specialization/5Z9CTHCY88LT">
                              <div class="btn btn-info">
                                See Certificate & Courses
                              </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
              <!-- CERTIFICATE #4 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingFour">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseFour" 
                        aria-expanded="true" 
                        aria-controls="collapseFour">
                        <font-awesome-icon 
                          :icon="['fas', 'graduation-cap']"
                          class="small-icon mr-2"/>
                        Django for Everybody Specialization
                      </button>
                  </div>
                  <div 
                    id="collapseFour" 
                    class="collapse" 
                    aria-labelledby="headingFour" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary  ">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        This specialization introduces Python programmers to building websites using the 
                        Django library. Across the four courses, you will learn HTML, CSS, SQL, Django, 
                        JavaScript, jQuery, and JSON Web Services.  During the course, you will build 
                        online websites using Django and those working websites are graded throughout 
                        the course. This series is  excellent preparation for learning other ways to build 
                        web applications using technologies like PHP (Web Applications for Everybody), 
                        Flask or Ruby on Rails.  This is a great first course in any web development curriculum.
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/michigan.png" 
                              style="width: 110px" 
                              alt="University of Michigan Logo">
                        </div>
                        <div class="col text-center">
                          <img 
                              src="../assets/coursera.png" 
                              style="width: 110px"
                              alt="Coursera Logo Logo">
                        </div>
                      </div>
                      <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="https://www.coursera.org/account/accomplishments/specialization/H64CH2WJL393">
                              <div class="btn btn-info">
                                See Certificate & Courses
                              </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
              <!-- CERTIFICATE #5 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingFive">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseFive" 
                        aria-expanded="true" 
                        aria-controls="collapseFive">
                        <font-awesome-icon 
                          :icon="['fas', 'graduation-cap']"
                          class="small-icon mr-2"/>
                        Web Applications for Everybody Specialization
                      </button>
                  </div>
                  <div 
                    id="collapseFive" 
                    class="collapse" 
                    aria-labelledby="headingFive" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary  ">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        This Specialization is an introduction to building web applications for anybody who 
                        already has a basic understanding of responsive web design with JavaScript,  HTML, 
                        and CSS. Web Applications for Everybody is your introduction to web application 
                        development. You will develop web and database applications in PHP, using SQL for 
                        database creation, as well as functionality in JavaScript, jQuery, and JSON.
                        <br>
                        <br>
                        Over the course of this Specialization, you will create several web apps to add to 
                        your developer portfolio. This Specialization (and its prerequisites) will prepare 
                        you, even if you have little to no experience in programming or technology, for entry 
                        level web developer jobs in PHP.
                        <br>
                        <br>
                        You’ll demonstrate basic concepts, like database design, while working on assignments 
                        that require the development of increasing challenging web apps. From installing a 
                        text editor to understanding how a web browser interacts with a web server to handling 
                        events with JQuery, you’ll gain a complete introductory overview of web application development.
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/michigan.png" 
                              style="width: 110px" 
                              alt="University of Michigan Logo">
                        </div>
                        <div class="col text-center">
                          <img 
                              src="../assets/coursera.png" 
                              style="width: 110px"
                              alt="Coursera Logo Logo">
                        </div>
                      </div>
                      <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="https://www.coursera.org/account/accomplishments/specialization/D775XZM3SFFS">
                              <div class="btn btn-info">
                                See Certificate & Courses
                              </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
              <!-- CERTIFICATE #6 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingSix">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseSix" 
                        aria-expanded="true" 
                        aria-controls="collapseSix">
                        <font-awesome-icon 
                          :icon="['fas', 'certificate']"
                          class="small-icon mr-2"/>
                        Introduction to Git and GitHub Course
                      </button>
                  </div>
                  <div 
                    id="collapseSix" 
                    class="collapse" 
                    aria-labelledby="headingSix" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary  ">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        In this course, you’ll learn how to keep track of the different versions of your code 
                        and configuration files using a popular version control system (VCS) called Git. We'll 
                        also go through how to setup an account with a service called GitHub so that you can 
                        create your very own remote repositories to store your code and configuration. 
                        <br>
                        <br>
                        Throughout this course, you'll learn about Git's core functionality so you can understand 
                        how and why it’s used in organizations. We’ll look into both basic and more advanced 
                        features, like branches and merging. We'll demonstrate how having a working knowledge 
                        of a VCS like Git can be a lifesaver in emergency situations or when debugging. And 
                        then we'll explore how to use a VCS to work with others through remote repositories, 
                        like the ones provided by GitHub.
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/google.png" 
                              style="width: 110px" 
                              alt="Google Logo">
                        </div>
                        <div class="col text-center">
                          <img 
                              src="../assets/coursera.png" 
                              style="width: 110px"
                              alt="Coursera Logo">
                        </div>
                      </div>
                      <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="http://coursera.org/verify/4KF6Z2JWNKPB">
                              <div class="btn btn-info">
                                See Certificate
                              </div>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
              <!-- CERTIFICATE #7 -->
              <li>
                <div class="card">
                  <div class="card-header" id="headingSeven">
                      <button 
                        class="btn btn-link" 
                        data-toggle="collapse" 
                        data-target="#collapseSeven" 
                        aria-expanded="true" 
                        aria-controls="collapseSeven">
                        <font-awesome-icon 
                          :icon="['fas', 'certificate']"
                          class="small-icon mr-2"/>
                        Registered Civil Engineer - Philippines
                      </button>
                  </div>
                  <div 
                    id="collapseSeven" 
                    class="collapse" 
                    aria-labelledby="headingSeven" 
                    data-parent="#accordion">
                    <div class="card-body pl-4 pr-5">
                      <div class="row ml-1 my-3 text-secondary  ">
                        Description:
                      </div>
                      <div class="row ml-2 text-justify px-2 text-secondary">
                        A successful examinee of the PRC Civil Engineering board examination. Averaged 86.4% 
                        across all 3 subjects (Mathematics and Surveying, Hydraulics & Design and Construction).
                      </div>
                      <div class="row ml-1 my-3 text-secondary">
                        Provider:
                      </div>
                      <div class="row ml-3">
                        <div class="col text-center">
                          <img 
                              src="../assets/prc-ph.png" 
                              style="width: 110px" 
                              alt="Google Logo">
                        </div>
                      </div>
                      <!-- <div class="row ml-1 my-2 text-secondary">
                        <div class="col text-center mt-3">
                            <a href="#">
                              <div class="btn btn-info">
                                See Certificate
                              </div>
                            </a>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </li>
              <!-- END -->
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyCertificates',
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
    color: #FFDF00;
  }

</style>