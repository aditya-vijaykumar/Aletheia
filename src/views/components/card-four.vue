<template>
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
        <!-- <small>Or sign up with credentials</small> -->
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
              v-model="profile.name"
            >
            </base-input>
            <base-input
              alternative
              class="mb-3"
              placeholder="Emoji"
              addon-left-icon="ni ni-email-83"
              maxlength="2"
              v-model="profile.emoji"
            >
            </base-input>
            <base-input
              alternative
              class="mb-3"
              placeholder="Url"
              addon-left-icon="ni ni-email-83"
              maxlength="240"
              v-model="profile.url"
            >
            </base-input
            ><base-input
              alternative
              class="mb-3"
              placeholder="Description"
              addon-left-icon="ni ni-email-83"
              maxlength="420"
              v-model="profile.description"
            >
            </base-input
            ><base-input
              alternative
              class="mb-3"
              placeholder="Gender"
              addon-left-icon="ni ni-email-83"
              maxlength="42"
              v-model="profile.gender"
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
              v-model="profile.birthDate"
            >
            </base-input>
            <base-input
              alternative
              class="mb-3"
              placeholder="Affiliations"
              addon-left-icon="ni ni-email-83"
              maxlength="140"
              v-model="profile.affiliations[0]"
            >
            </base-input>
            <base-input
              alternative
              class="mb-3"
              placeholder="Home Location"
              addon-left-icon="ni ni-email-83"
              maxlength="140"
              v-model="profile.homeLocation"
            >
            </base-input>
            <base-input
              alternative
              class="mb-3"
              placeholder="Nationalities"
              addon-left-icon="ni ni-email-83"
              maxlength="140"
              v-model="profile.nationalities[0]"
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
              @change="onFileChanged"
            >
            </base-input>
          </div>
        </div>

        <div class="text-center">
          <base-button type="primary" class="my-4" @click="update"
            >Update</base-button
          >
        </div>
      </form>
    </template>
  </card>
</template>
<script>
import ipfsClient from "ipfs-http-client";
export default {
  name: "card4",
  props: {
    profile: {
      required: true,
    },
    method: { type: Function },
  },
  data: () => {
    return { selectedFile: null };
  },
  methods: {
    async update() {
      let infura = "https://ipfs.infura.io:5001";
      const { globSource } = ipfsClient;

      const ipfs = ipfsClient({ url: infura });
      const file = await ipfs.add(this.selectedFile);
      console.log(file);
      this.profile.image = "https://ipfs.io/ipfs/" + file.path;
      console.log(this.profile);

      this.method(this.profile);
    },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>
