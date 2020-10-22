<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <h3>Find Profiles by resolving ENS, Ethadresses or DIDs!</h3>
              </div>
            </template>
            <template>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="Name"
                  addon-left-icon="fa fa-at"
                >
                </base-input>

                <div class="">
                  <small
                    >password strength:
                    <span class="text-success font-weight-700">strong</span>
                  </small>
                </div>

                <div class="text-center">
                  <base-button type="primary" class="my-4"
                    >Create account</base-button
                  >
                </div>
              </form>
            </template>
          </card>
          <div class="nav-wrapper">
            <ul
              class="nav nav-pills nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link mb-sm-3 mb-md-0 active"
                  id="tabs-icons-text-1-tab"
                  data-toggle="tab"
                  href="#tabs-icons-text-1"
                  role="tab"
                  aria-controls="tabs-icons-text-1"
                  aria-selected="true"
                  ><i class="ni ni-cloud-upload-96 mr-2"></i>Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-sm-3 mb-md-0"
                  id="tabs-icons-text-2-tab"
                  data-toggle="tab"
                  href="#tabs-icons-text-2"
                  role="tab"
                  aria-controls="tabs-icons-text-2"
                  aria-selected="false"
                  ><i class="ni ni-bell-55 mr-2"></i>Profile</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-sm-3 mb-md-0"
                  id="tabs-icons-text-3-tab"
                  data-toggle="tab"
                  href="#tabs-icons-text-3"
                  role="tab"
                  aria-controls="tabs-icons-text-3"
                  aria-selected="false"
                  ><i class="ni ni-calendar-grid-58 mr-2"></i>Messages</a
                >
              </li>
            </ul>
          </div>
          <div class="card shadow">
            <div class="card-body">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="tabs-icons-text-1"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-1-tab"
                >
                  <p class="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                  <p class="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse.
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="tabs-icons-text-2"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-2-tab"
                >
                  <p class="description">
                    Cosby sweater eu banh mi, qui irure terry richardson ex
                    squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                    quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="tabs-icons-text-3"
                  role="tabpanel"
                  aria-labelledby="tabs-icons-text-3-tab"
                >
                  <p class="description">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                    synth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
</style>
