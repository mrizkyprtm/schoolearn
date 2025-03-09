<script setup lang="ts">
import CountChart from '@/components/CountChart.vue'
import UserCard from '@/components/UserCard.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="flex flex-col gap-4 p-4 md:flex-row">
      <!-- left -->
      <div class="flex w-full flex-col gap-8 lg:w-2/3">
        <div class="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <!-- middle chart -->
        <div class="flex flex-col gap-4 lg:flex-row">
          <!-- count chart -->
          <div class="w-full lg:w-1/3">
            <CountChart />
          </div>
          <div class="w-full lg:w-2/3"></div>
        </div>
      </div>
      <!-- right -->
      <div class="w-full lg:w-1/3">right content</div>
    </div>
  </DashboardLayout>
</template>
