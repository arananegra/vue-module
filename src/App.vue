<template>
  <v-app>
    <v-content>
      <v-container>
        <member-table-page-container />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberTablePageContainer } from "./pages/menbers-table/components";

export default Vue.extend({
  name: "App",
  components: { MemberTablePageContainer }
});
</script>
