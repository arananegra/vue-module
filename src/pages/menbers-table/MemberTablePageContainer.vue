<template>
  <member-table-page
    :members="members"
    :get-all-members="getAllMembers"
    :update-organization-name="updateOrganizationName"
    :organization-name="organizationName"
  />
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";
import MemberTablePage from "./MemberTablePage.vue";
import { getAllMembers } from "../../rest-api/api/memberAPI";

export default Vue.extend({
  name: "MemberTablePageContainer",
  components: {
    MemberTablePage
  },
  data: () => ({
    members: [] as Member[],
    organizationName: ""
  }),
  methods: {
    getAllMembers: function() {
      getAllMembers(this.organizationName).then(members => {
        this.members = members;
      });
    },
    updateOrganizationName(organizationName: string) {
      this.organizationName = organizationName;
    }
  }
});
</script>

