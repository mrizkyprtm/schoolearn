<script setup lang="ts">
import AnnouncementsCard from '@/components/AnnouncementsCard.vue'
import AttendanceChart from '@/components/AttendanceChart.vue'
import CountChart from '@/components/CountChart.vue'
import EventCalendar from '@/components/EventCalendar.vue'
import FinanceChart from '@/components/FinanceChart.vue'
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
          <div class="min-h-[360px] w-full lg:w-1/3">
            <CountChart />
          </div>
          <div class="min-h-[360px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        <!-- bottom -->
        <div class="min-h-[450px] w-full">
          <FinanceChart />
        </div>
      </div>
      <!-- right -->
      <div class="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
        <AnnouncementsCard />
      </div>
    </div>
  </DashboardLayout>
</template>
