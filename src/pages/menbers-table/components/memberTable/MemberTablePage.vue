<template>
  <member-table :members="members" :get-all-members="getAllMembers" />
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";
import MemberTable from "./Table.vue";
export default Vue.extend({
  name: "MemberTablePage",
  components: {
    MemberTable
  },
  props: {
    members: {
      required: true
    } as PropOptions<Member[]>,
    getAllMembers: {
      required: true
    } as PropOptions<() => void>
  }
});
</script>

