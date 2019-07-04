<template>
  <div>
    <h2 :class="$style.info">Member Page</h2>
    <v-btn type="submit" color="info" @click.prevent="getAllMembers">Load</v-btn>
    <table :class="$style.table">
      <thead>
        <member-head />
      </thead>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../../../rest-api/api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
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

<style module>
.info {
  text-align: center;
}
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
