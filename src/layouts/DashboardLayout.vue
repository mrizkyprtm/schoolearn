<script setup>
import MenuItems from '@/components/MenuItems.vue'
import NavBar from '@/components/NavBar.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <!-- sidebar -->
    <div class="w-[14%] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
      <RouterLink to="/" class="flex items-center justify-center gap-2 lg:justify-start">
        <img src="/icon/logo.png" alt="logo" width="32" height="32" />
        <span class="hidden lg:block">SchooLearn</span>
      </RouterLink>
      <MenuItems />
    </div>
    <!-- content -->
    <div class="w-[86%] overflow-scroll bg-[#f7f8fa] md:w-[92%] lg:w-[84%] xl:w-[86%]">
      <NavBar />
      <slot />
    </div>
  </div>
</template>
