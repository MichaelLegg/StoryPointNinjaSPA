<template>
  <div id="home">
    <div class="content">
      <h1>StoryPoint Ninja</h1>
      <CreateSession />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Events } from "@/models/common/events";
import CreateSession from "../components/CreateSession.vue";

@Component({ components: { CreateSession } })
export default class Home extends Vue {
  private sessionCode: string = "";
}
</script>

<style lang="scss"></style>
