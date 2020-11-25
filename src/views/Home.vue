<template>
  <div id="home">
    <div class="content">
      <h1>StoryPoint Ninja</h1>
      <input placeholder="Enter session id" />
      <br />
      <button>Create new session</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss">
.content {
  text-align: center;
}
</style>
