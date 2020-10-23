<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Profile Management
                  <span>built on Ceramic Network using IDX.</span>
                </h1>
                <p class="lead text-white">
                  Unlock a whole new web3 experience with decentralized
                  identities and profiles globally available.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="https://github.com/aditya-vijaykumar/Aletheia/"
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="fa fa-github"
                  >
                    GitHub
                  </base-button>
                  <base-button
                    tag="a"
                    href="http://localhost:8080/#/start"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="fa fa-rocket"
                  >
                    Try the Demo
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-badge" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary text-uppercase">IDX Protocol</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>

                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="success" rounded class="mb-4">
                  </icon>
                  <h6 class="text-success text-uppercase">Ceramic Network</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>

                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-single-02"
                    type="warning"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-warning text-uppercase">
                    Decentralized Identity
                  </h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>

                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img
                v-lazy="'img/theme/img-1-1200x1000.jpg'"
                class="card-img-top"
              />
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon
                    points="0,52 583,95 0,95"
                    class="fill-default"
                  ></polygon>
                  <polygon
                    points="0,42 583,95 683,0 0,95"
                    opacity=".2"
                    class="fill-default"
                  ></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">
                  Profile Display System
                </h4>
                <p class="lead text-italic text-white">
                  Manage your profiles through Aletheia.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon
                name="ni ni-circle-08"
                class="mb-5"
                size="lg"
                type="warning"
                shadow
                rounded
              ></icon>

              <h3>Example Profile Display</h3>
              <p class="lead">Here is an example of the basic profile.</p>
              <p>Web3 Applications can easily accesses these.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">The Team</h2>
            <p class="lead text-muted">
              Meet the team behind Project Aletheia built as a project during
              ETHGlobal's biggest event - ETHOnline.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-2 mb-5 mb-lg-0"></div>
          <div class="col-md-6 col-lg-1 mb-5 mb-lg-0"></div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-3-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Aditya Vijaykumar</span>
                  <small class="h6 text-muted">Backend Developer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-linkedin"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-instagram"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-4-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Anshul Rai</span>
                  <small class="h6 text-muted">Frontend Developer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-linkedin"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-instagram"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">
              This project is just a start!
              <span class="text-success"
                >We plan on building a lot more awesome stuff with Ceramic and
                IDX.</span
              >
            </h2>
            <p class="lead">
              Start and watch our repository on GitHub for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>