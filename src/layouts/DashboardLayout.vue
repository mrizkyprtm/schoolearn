<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <!-- sidebar -->
    <div class="w-[14%] bg-red-200 p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
      <RouterLink to="/" class="flex items-center justify-center gap-2 lg:justify-start">
        <img src="/icon/logo.png" alt="logo" width="32" height="32" />
        <span class="hidden lg:block">SchooLearn</span>
      </RouterLink>
    </div>
    <!-- content -->
    <div class="w-[86%] bg-blue-200 md:w-[92%] lg:w-[84%] xl:w-[86%]">
      <slot />
    </div>
  </div>
</template>
