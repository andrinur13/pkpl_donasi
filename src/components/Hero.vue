<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div style="font-size: 40px; margin-top: 100px">
            We helps <strong>startup</strong> to getting started & <strong>funding</strong> their truly needs
          </div>
          <div class="mt-4">Fund the best idea to become a real product and be the contributor</div>
          <div class="mt-4">
            <button class="btn btn-success py-2 px-4">Find Project</button>
          </div>
        </div>
        <div class="col">
          <img :src="HeroImg" class="img-fluid mt-4" alt="" />
        </div>
      </div>

      <!-- step -->
      <div style="margin-top: 100px">
        <div class="row">
          <div class="col">
              <h4>
                  Only 3 steps to execute your bright ideas
              </h4>
          </div>
        </div>

        <div class="row justify-content-center" style="margin-top: 100px">
          <div class="col-8">
              <img :src="LineStep" class="img-fluid" alt="">
          </div>
        </div>

        <div class="row justify-content-center" style="margin-top: 100px">
          <div class="col">
              <div class="text-center">
                <img :src="Step1" class="img-fluid" alt="">
                <div class="mt-4">
                    <div class="font-weight-bold">Sign Up</div>
                    <div class="mt-3">Sign Up account and start funding project</div>
                </div>
              </div>
          </div>
          <div class="col">
              <div class="text-center">
                <img :src="Step2" class="img-fluid" style="margin-top: -70px" alt="">
                <div class="mt-4">
                    <div class="font-weight-bold">Sign Up</div>
                    <div class="mt-3">Sign Up account and start funding project</div>
                </div>
              </div>
          </div>
          <div class="col">
              <div class="text-center">
                <img :src="Step3" class="img-fluid" style="margin-top: -140px" alt="">
                <div class="mt-4">
                    <div class="font-weight-bold">Sign Up</div>
                    <div class="mt-3">Sign Up account and start funding project</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImg from "../assets/hero-image.png";
import LineStep from "../assets/line-step.svg";
import Step1 from "../assets/step1.svg";
import Step2 from "../assets/step2.svg";
import Step3 from "../assets/step3.svg";
export default {
  name: "Hero",
  data() {
    return {
      HeroImg, LineStep, Step1, Step2, Step3
    };
  },
};
</script>

<style>
</style>