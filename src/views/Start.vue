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
    <div class="container pt-lg-md" v-if="account">
      <Card @toggle="account = !account" />
        </div>
        <div v-else>
          <Account @toggle="account = !account" />

        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Account from "./Account";
import Card from "./card";


export default {
  name: "App",
  components: {
    Account,
    Card,
  },
  methods: {
    toAccount() {
      this.cards = false
    }
  },
  data: () => {
    account : false;
    cards: true;
  },
};
</script>

<style></style>
