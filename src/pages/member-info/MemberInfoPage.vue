<template>
  <div class="container">
    <div class="url">
      <label class="headline">URL de usuario:</label>
      <h1>https://github.com/Lemoncode/jest-testing-by-sample/blob/</h1>
    </div>
    <div>
      <label class="headline">ID</label>
      <h1>235454cdr43</h1>
    </div>
    <div>
      <label class="headline">Name</label>
      <h1>arananegra</h1>
    </div>
    <div>
      <label class="headline">Fecha de creación de perfil</label>
      <h1>{{new Date('2008-01-14T04:33:35Z').toUTCString()}}</h1>
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


