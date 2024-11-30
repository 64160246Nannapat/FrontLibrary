<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- เนื้อหาของแอปพลิเคชันที่นี่ -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'AppBarExample',
}
</script>

<style scoped>
/* กำหนดสไตล์เพิ่มเติมที่นี่ */
</style>
