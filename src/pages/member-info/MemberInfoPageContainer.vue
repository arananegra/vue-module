<template>
  <member-info-page :user="this.user"/>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { getUser } from "../../rest-api/api/userAPI";
import { createDefaultUser } from "../../model/user";
import MemberInfoPage from "./MemberInfoPage.vue";

export default Vue.extend({
  name: "MemberInfoPageContainer",
  components: {
    MemberInfoPage
  },
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

