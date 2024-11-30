<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer app color="#F8E8E7">
      <v-list>
        <v-list-item-group v-model="selectedItem" color="#002a5c">
          <!-- โลโก้ -->
          <v-list-item>
            <v-list-item-avatar>
              <img src="@/assets/logo_buu_library.png" alt="Library Logo" />
            </v-list-item-avatar>
          </v-list-item>

          <!-- เมนูใน Sidebar -->
          <v-list-item :to="{ name: 'book-form' }">
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>แบบฟอร์มการเสนอหนังสือ</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'book-status' }">
            <v-list-item-icon>
              <v-icon>mdi-book-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>สถานะการเสนอซื้อหนังสือ</v-list-item-title>
          </v-list-item>

          <!-- ออกจากระบบ -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ออกจากระบบ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- แถบด้านบน -->
    <v-app-bar app color="#F8E8E7" elevate-on-scroll>
      <v-toolbar-title>
        <span class="blue--text font-weight-bold">BUU LIBRARY</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- ชื่อผู้ใช้งาน -->
      <div class="text-right">
        <span class="text-body-2 font-weight-bold">นวพรรษ สีหมุด</span>
        <br />
        <span class="text-caption">นิสิต</span>
      </div>
    </v-app-bar>

    <!-- พื้นที่สำหรับเนื้อหา -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'LibraryPage',
  data() {
    return {
      selectedItem: 0, // ค่าดีฟอลต์เมนูที่ถูกเลือก
    }
  },
}
</script>

<style scoped>
.blue--text {
  color: #002a5c !important;
}
</style>
