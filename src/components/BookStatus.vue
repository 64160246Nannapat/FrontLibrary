<template>
  <v-container>
    <h1>ตรวจสอบสถานะ</h1>
    <!-- เนื้อหาการตรวจสถานะ -->
    <v-simple-table>
      <thead>
        <tr>
          <th>ชื่อหนังสือ</th>
          <th>สถานะ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ตัวอย่างหนังสือ 1</td>
          <td>กำลังตรวจสอบ</td>
        </tr>
        <tr>
          <td>ตัวอย่างหนังสือ 2</td>
          <td>อนุมัติแล้ว</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
export default {
  name: 'BookStatus',
}
</script>
