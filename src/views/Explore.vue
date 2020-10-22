<template>
  <tabs fill class="flex-column flex-md-row">
    <card shadow>
        <tab-pane>
            <span v-slot:="title">
                <i class="ni ni-cloud-upload-96">
                ENS
            </span>
            <p class="description">Raw denim you probably haven't heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                keffiyeh dreamcatcher synth.</p>
        </tab-pane>

        <tab-pane title="Profile">
            <span v-slot:="title">
                <i class="ni ni-bell-55 mr-2">
                DID
            </span>
            <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui.</p>
        </tab-pane>

        <tab-pane>
             <span v-slot:="title">
                <i class="ni ni-calendar-grid-58">
               Eth address
              </span>
            <p class="description">Raw denim you probably haven't heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                keffiyeh dreamcatcher synth.</p>
        </tab-pane>
    </card>
</tabs>
</template>
<script>
export default {};
</script>
<style>
</style>
