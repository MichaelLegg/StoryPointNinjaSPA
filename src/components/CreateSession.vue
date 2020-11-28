<template>
  <div class="create-session">
    Your Name: <input v-model="displayName" placeholder="enter name here" />
    Session Name:
    <input v-model="sessionName" placeholder="enter name here" />
    Choose your scoring mode:
    <select v-model="scoringMethod">
      <option value="0">Fibbonaci Sequence (1, 2..)</option>
    </select>
    <button @click="createSession()">Create</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewSession from "../models/common/dtos/newSession";
import { ScoringMethod } from "../models/common/session";
@Component({})
export default class CreateSession extends Vue {
  private sessionName: string = "";
  private displayName: string = "";
  private scoringMethod: ScoringMethod = ScoringMethod.Fibbonaci;

  private createSession() {
    this.$socket.client.emit("create-session", {
      displayName: this.displayName,
      sessionName: this.sessionName,
      scoringMethod: this.scoringMethod
    } as NewSession);

    this.$router.push("Session");
  }
}
</script>

<style lang="scss">
.create-session {
  max-width: 300px;
}

.input-form {
  display: flex;
  flex-direction: column;
}
</style>
