<script lang="ts" setup></script>

<template>
  <div class="flex items-center justify-between p-4">
    <!-- search bar -->
    <div class="hidden items-center rounded-full px-2 text-sm ring-[1.5px] ring-gray-300 md:flex">
      <img src="/icon/search.png" alt="search" class="size-3.5" />
      <input type="text" placeholder="Search.." class="w-[200px] bg-transparent p-2 outline-none" />
    </div>

    <!-- icon & user -->
    <div class="flex w-full items-center justify-end gap-4">
      <div class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
        <img src="/icon/message.png" alt="" class="size-5" />
      </div>
      <div
        class="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white"
      >
        <img src="/icon/announcement.png" alt="" class="size-5" />
        <div
          class="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white"
        >
          1
        </div>
      </div>
      <div class="ml-4 flex cursor-pointer items-center gap-3">
        <div class="flex flex-col text-gray-600">
          <span class="text-sm font-medium">Mochamad Rizky</span>
          <span class="text-right text-xs">Admin</span>
        </div>
        <img src="/icon/avatar.png" alt="avatar" class="size-9 rounded-full" />
      </div>
    </div>
  </div>
</template>
