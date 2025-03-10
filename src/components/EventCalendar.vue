<script setup>
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'
import { ref } from 'vue'

const attrs = ref([
  {
    highlight: true,
    dates: new Date(),
  },
])

const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]
</script>

<template>
  <div class="rounded-md bg-white p-4">
    <Calendar color="purple" :attributes="attrs" expanded borderless />
    <div class="flex items-center justify-between">
      <h1 class="my-4 text-lg font-semibold">Events</h1>
      <img src="/icon/moreDark.png" alt="more" class="size-5" />
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="event in events"
        :key="event.id"
        class="odd:border-t-scl-sky even:border-t-scl-purple rounded-md border-2 border-t-4 border-gray-100 p-5"
      >
        <div class="flex items-center justify-between">
          <h1 class="font-semibold text-gray-600">{{ event.title }}</h1>
          <span class="text-xs text-gray-300">{{ event.time }}</span>
        </div>
        <p class="mt-2 text-sm text-gray-400">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>
