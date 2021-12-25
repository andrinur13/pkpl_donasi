<template>
  <div>
      <navbar-top></navbar-top>
      <hero></hero>
      <project></project>
      <success-story style="margin-top: 100px"></success-story>
      <call-to-action style="margin-top: 150px"></call-to-action>
      <footer-component></footer-component>
  </div>
</template>

<script>
import NavbarTop from "../components/NavbarTop.vue";
import Hero from "../components/Hero.vue";
import SuccessStory from "../components/SuccessStory.vue";
import CallToAction from "../components/CallToAction.vue";
import FooterComponent from "../components/Footer.vue";
import Project from "../components/Project.vue";

export default {
    name: "HomePage",
    components: {
        NavbarTop, Hero, SuccessStory, CallToAction, FooterComponent, Project
    }
}
</script>

<style>

</style>