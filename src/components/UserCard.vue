<script setup>
defineProps({
  type: String,
})
</script>

<template>
  <div class="odd:bg-scl-purple even:bg-scl-yellow min-w-[130px] flex-1 rounded-2xl p-4">
    <div class="flex items-center justify-between">
      <span class="rounded-full bg-white px-2 py-1 text-xs text-green-600">2025/01</span>
      <img src="/icon/more.png" alt="" class="size-5" />
    </div>
    <h1 class="my-4 text-2xl font-semibold">1,234</h1>
    <h2 class="text-sm font-medium text-gray-500 capitalize">{{ type }}s</h2>
  </div>
</template>
