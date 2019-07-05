<template>
  <v-app>
    <v-content>
      <v-container>
        <keep-alive include="MemberTablePageContainer">
          <router-view />
        </keep-alive>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>
