<template>
  <h1>{{this.user.url}}</h1>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { getUser } from "../../rest-api/api/userAPI";
import { createDefaultUser } from "../../model/user";

export default Vue.extend({
  name: "MemberInfoPageContainer",
  data: () => ({
    user: createDefaultUser()
  }),
  props: {
    username: {
      required: true
    } as PropOptions<string>
  },
  beforeMount() {
    getUser(this.username)
      .then(user => {
        this.user = user;
      })
      .catch(error => console.log(error));
  }
});
</script>

