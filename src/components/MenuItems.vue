<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/icon/home.png',
        label: 'Home',
        link: '/',
      },
      {
        icon: '/icon/teacher.png',
        label: 'Teachers',
        link: '/admin/teachers',
      },
      {
        icon: '/icon/student.png',
        label: 'Students',
        link: '/admin/students',
      },
      {
        icon: '/icon/parent.png',
        label: 'Parents',
        link: '/',
      },
      {
        icon: '/icon/class.png',
        label: 'Classes',
        link: '/',
      },
      {
        icon: '/icon/lesson.png',
        label: 'Lessons',
        link: '/',
      },
      {
        icon: '/icon/exam.png',
        label: 'Exams',
        link: '/',
      },
      {
        icon: '/icon/assignment.png',
        label: 'Assignments',
        link: '/',
      },
      {
        icon: '/icon/attendance.png',
        label: 'Attendances',
        link: '/',
      },
      {
        icon: '/icon/calendar.png',
        label: 'Events',
        link: '/',
      },
      {
        icon: '/icon/message.png',
        label: 'Messages',
        link: '/',
      },
      {
        icon: '/icon/announcement.png',
        label: 'Announcements',
        link: '/',
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/icon/profile.png',
        label: 'Profile',
        link: '/',
      },
      {
        icon: '/icon/setting.png',
        label: 'Settings',
        link: '/',
      },
      {
        icon: '/icon/logout.png',
        label: 'Logout',
        link: '/',
      },
    ],
  },
]
</script>

<template>
  <div class="mt-4 text-sm">
    <div v-for="i in menuItems" :key="i.title" class="flex flex-col gap-2">
      <span class="my-4 hidden font-light text-gray-400 lg:block">{{ i.title }}</span>
      <RouterLink
        v-for="item in i.items"
        :key="item.label"
        :to="item.link"
        class="flex items-center justify-center gap-4 py-2 text-gray-500 lg:justify-start"
      >
        <img :src="item.icon" :alt="item.label" class="size-5" />
        <span class="hidden lg:block">{{ item.label }}</span>
      </RouterLink>
    </div>
  </div>
</template>
