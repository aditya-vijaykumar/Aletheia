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
                <h3>Edit your Profile</h3>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form role="form">
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Name"
                      addon-left-icon="ni ni-hat-3"
                      maxlength="150"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Emoji"
                      addon-left-icon="ni ni-email-83"
                      maxlength="2"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Url"
                      addon-left-icon="ni ni-email-83"
                      maxlength="240"
                    >
                    </base-input
                    ><base-input
                      alternative
                      class="mb-3"
                      placeholder="Description"
                      addon-left-icon="ni ni-email-83"
                      maxlength="420"
                    >
                    </base-input
                    ><base-input
                      alternative
                      class="mb-3"
                      placeholder="Gender"
                      addon-left-icon="ni ni-email-83"
                      maxlength="42"
                    >
                    </base-input>

                    <div class="">
                      <span class="text-success font-weight-600"
                        >Choose Background Image</span
                      >
                    </div>
                    <base-input
                      class="mb-3"
                      placeholder="BG"
                      addon-left-icon="ni ni-email-83"
                      type="file"
                    >
                    </base-input>
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Birth Date"
                      type="date"
                      addon-left-icon="ni ni-email-83"
                      maxlength="42"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Affiliations"
                      addon-left-icon="ni ni-email-83"
                      maxlength="140"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Home Location"
                      addon-left-icon="ni ni-email-83"
                      maxlength="140"
                    >
                    </base-input>
                    <base-input
                      alternative
                      class="mb-3"
                      placeholder="Nationalities"
                      addon-left-icon="ni ni-email-83"
                      maxlength="140"
                    >
                    </base-input
                    ><base-input
                      alternative
                      class="mb-3"
                      placeholder="Residence Country"
                      addon-left-icon="ni ni-email-83"
                      maxlength="2"
                    >
                    </base-input>
                    <div class="">
                      <span class="text-success font-weight-600"
                        >Choose Profile Image</span
                      >
                    </div>
                    <base-input
                      class="mb-3"
                      placeholder="Image"
                      addon-left-icon="ni ni-email-83"
                      type="file"
                    >
                    </base-input>
                  </div>
                </div>

                <div class="text-muted font-italic">
                  <small
                    >password strength:
                    <span class="text-success font-weight-700">strong</span>
                  </small>
                </div>

                <div class="text-center">
                  <base-button type="primary" class="my-4">Update</base-button>
                </div>
              </form>
            </template>
          </card>
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