<template>
  <div>
    <h2 :class="$style.info">Member Page</h2>
    <div :class="$style.form">
      <div :class="$style.input">
        <v-text-field
          label="Organization name"
          :value="organizationName"
          @input="(organizationName) => updateOrganizationName(organizationName)"
        />
      </div>
      <div :class="$style.searchButton">
        <v-btn type="submit" color="info" @click.prevent="getAllMembers">Load</v-btn>
      </div>
    </div>
    <v-data-table :headers="headers" :items="members" class="elevation-1">
      <template v-slot:items="members">
        <td :class="$style.column">
          <img :src="members.item.avatar_url" :class="$style.image" />
        </td>
        <td :class="$style.column">{{ members.item.id }}</td>
        <td :class="$style.column">{{ members.item.login }}</td>
        <td :class="$style.column">
          <v-btn flat icon :to="`member/${members.item.login}`">
            <v-icon>edit</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../../../model/member";

export default Vue.extend({
  data: () => ({
    headers: [
      { text: "Avatar", value: "avatar", sortable: false, align: "center" },
      { text: "Id", value: "id", sortable: false, align: "center" },
      { text: "Name", value: "name", sortable: false, align: "center" },
      { text: "Extra info", value: "moreInfo", sortable: false, align: "center" }
    ]
  }),
  name: "MemberTable",
  props: {
    members: {
      required: true
    } as PropOptions<Member[]>,
    getAllMembers: {
      required: true
    } as PropOptions<() => void>,
    updateOrganizationName: {
      required: true
    } as PropOptions<(organizationName) => void>,
    organizationName: {
      required: true
    } as PropOptions<string>
  }
});
</script>

<style module>
.form {
  display: flex;
  justify-content: center;
}

.input {
  width: 50vw;
}
.searchButton {
  margin-top: 0.5rem;
}
.info {
  text-align: center;
}

.image {
  max-width: 10rem;
}

.column {
  width: 33.33%;
  text-align: center;
}
</style>
