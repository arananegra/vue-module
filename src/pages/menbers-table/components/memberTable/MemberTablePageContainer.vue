<template>
    <member-table-page :members="members" :get-all-members="getAllMembers"/>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";
import MemberTablePage from "./MemberTablePage.vue";
import { getAllMembers } from "../../../../rest-api/api/memberAPI";

export default Vue.extend({
  name: "MemberTablePageContainer",
  components: {
    MemberTablePage
  },
  data: () => ({
    members: [] as Member[]
  }),
  methods: {
    getAllMembers: function() {
      getAllMembers("lemoncode").then(members => {
        this.members = members;
      });
    }
  }
});
</script>

