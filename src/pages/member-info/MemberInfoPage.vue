<template>
  <h1>{{id}}</h1>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "MemberInfoPage",
  props: {
    id: {
      required: true
    } as PropOptions<string>
  }
});
</script>

