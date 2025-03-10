<script setup>
const options = {
  series: [
    {
      name: 'Present',
      data: [44, 55, 57, 56, 61],
    },
    {
      name: 'Absent',
      data: [76, 85, 101, 98, 87],
    },
  ],
  chart: {
    type: 'bar',
    height: '350',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '60%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
  yaxis: {
    title: {
      text: 'student',
    },
  },
  fill: {
    opacity: 1,
    colors: ['#c3ebfa', '#fae27c'],
  },
}
</script>

<template>
  <div class="h-full w-full rounded-2xl bg-white p-4">
    <div class="flex items-center justify-between">
      <h1 class="text-lg font-semibold">Attendance</h1>
      <img src="/icon/moreDark.png" alt="more" class="size-5" />
    </div>
    <!-- chart -->
    <div id="chart" class="h-full w-full">
      <apexchart
        width="100%"
        height="350"
        type="bar"
        :options="options"
        :series="options.series"
      ></apexchart>
    </div>
  </div>
</template>
