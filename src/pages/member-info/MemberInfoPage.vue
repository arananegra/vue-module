<template>
  <div class="container">
    <div class="url">
      <label class="headline">URL de usuario:</label>
      <h1>{{this.user.url}}</h1>
    </div>
    <div>
      <label class="headline">ID</label>
      <h1>{{this.user.login}}</h1>
    </div>
    <div>
      <label class="headline">Name</label>
      <h1>{{this.user.name}}</h1>
    </div>
    <div>
      <label class="headline">Fecha de creación de perfil</label>
      <h1>{{this.user.created_at}}</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { User } from "../../model/user";

export default Vue.extend({
  name: "MemberInfoPage",
  props: {
    user: {
      required: true
    } as PropOptions<User>
  }
});
</script>

<style lang="scss">
.container {
  >div {
    padding: 1rem;
  }
  >div.url {
    word-wrap: break-word;
  }
}
</style>


