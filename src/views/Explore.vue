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
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                          
                        <template>
                            <div class="text-muted text-center mb-3">
                                <h3>Find Profiles by resolving ENS, Ethadresses or DIDs!</h3>
                            </div>
                        </template>
                        <template>
                            
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="fa fa-at">
                                </base-input>
                               
                                <div class="">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <!-- <tabs fill class="flex-column flex-md-row">
    <card shadow>
        <tab-pane>
            <span slot="title">
                
                Home
            </span>
            <p class="description">Raw denim you probably haven't heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                keffiyeh dreamcatcher synth.</p>
        </tab-pane>

        <tab-pane title="Profile">
            <span slot="title">
                
                Profile
            </span>
            <p class="description">Cosby sweater eu banh mi, qui irure terry richardson ex
                squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui.</p>
        </tab-pane>

        <tab-pane>
             <span slot="title">
               
                Messages
              </span>
            <p class="description">Raw denim you probably haven't heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                keffiyeh dreamcatcher synth.</p>
        </tab-pane>
    </card>
</tabs> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {};
</script>
<style>
</style>
