<template>
  <v-container>
    <h1>แบบฟอร์มการเสนอหนังสือ</h1>
    <!-- เนื้อหาของฟอร์ม -->
    <v-form>
      <v-text-field label="ชื่อหนังสือ" required></v-text-field>
      <v-text-field label="ผู้แต่ง" required></v-text-field>
      <v-btn color="primary" class="mt-3">ส่งข้อมูล</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
export default {
  name: 'BookForm',
}
</script>
