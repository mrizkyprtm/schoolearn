<script setup>
import { ref } from 'vue'

const series = ref([55, 45])
const chartOptions = ref({
  chart: {
    type: 'radialBar',
    parentHeightOffset: 100,
  },
  fill: {
    colors: ['#c3ebfa', '#fae27c'],
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: '#f2f2f2',
        strokeWidth: '97%',
        opacity: 1,
        margin: 3,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        name: {
          fontSize: '16px',
        },
        value: {
          fontSize: '16px',
        },
      },
    },
  },
  labels: ['Boys', 'Girls'],
})
</script>

<template>
  <div class="h-full w-full rounded-2xl bg-white p-4">
    <!-- title -->
    <div class="flex items-center justify-between">
      <h1 class="text-lg font-semibold">Students</h1>
      <img src="/icon/moreDark.png" alt="more" class="size-5" />
    </div>
    <!-- chart -->
    <div id="chart" class="w-full">
      <apexchart width="100%" type="radialBar" :options="chartOptions" :series="series"></apexchart>
    </div>
    <!-- bottom -->
    <div class="flex justify-center gap-16">
      <div class="flex flex-col gap-1">
        <div class="bg-scl-sky h-5 w-5 rounded-full" />
        <h1 class="font-bold">1,234</h1>
        <h2 class="text-xs text-gray-300">Boys (55%)</h2>
      </div>
      <div class="flex flex-col gap-1">
        <div class="bg-scl-yellow h-5 w-5 rounded-full" />
        <h1 class="font-bold">1,234</h1>
        <h2 class="text-xs text-gray-300">Girls (45%)</h2>
      </div>
    </div>
  </div>
</template>
