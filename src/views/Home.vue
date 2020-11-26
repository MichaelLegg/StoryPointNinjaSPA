<template>
  <div id="home">
    <div class="content">
      <h1>StoryPoint Ninja</h1>
      <input
        @keyup.enter="joinSession"
        type="text"
        v-model="sessionCode"
        placeholder="Enter session id"
      />
      <br />
      <button @click="createTest()">Test</button>
      <router-link to="NewSession" tag="button">Create new session</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Events } from "@/models/common/events";

@Component({})
export default class Home extends Vue {
  private sessionCode: string = "";

  joinSession() {
    console.log("join session pressed");
    this.$socket.client.emit(Events.JOIN_SESSION, this.sessionCode);
  }

  createTest() {
    this.$socket.client.emit("create-session");
  }
}
</script>

<style lang="scss">
.content {
  text-align: center;
}
</style>
