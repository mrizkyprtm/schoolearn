<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col gap-4 p-4 md:flex-row">
      <!-- left -->
      <div class="w-full lg:w-2/3">
        <div class="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      <!-- right -->
      <div class="w-full lg:w-1/3">right content</div>
    </div>
  </DashboardLayout>
</template>
