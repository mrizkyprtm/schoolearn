<script lang="ts" setup>
const data = {
  series: [
    {
      name: 'Income',
      data: [2000, 4540, 3523, 5110, 4920, 6230, 6970, 9100, 1480, 4567, 3456, 2345],
    },
    {
      name: 'Expense',
      data: [2345, 1230, 3523, 9100, 4932, 5210, 5932, 4321, 5480, 4700, 3490, 5600],
    },
  ],
  chartOptions: {
    chart: {
      height: '400',
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      opacity: 1,
      colors: ['#cfceff', '#fae27c'],
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    legend: {
      position: 'top',
    },
  },
}
</script>

<template>
  <div class="h-full w-full rounded-2xl bg-white p-4">
    <div class="flex items-center justify-between">
      <h1 class="text-lg font-semibold">Finance</h1>
      <img src="/icon/moreDark.png" alt="more" class="size-5" />
    </div>
    <!-- chart -->
    <div id="chart" class="h-full w-full">
      <apexchart
        type="line"
        height="350"
        :options="data.chartOptions"
        :series="data.series"
      ></apexchart>
    </div>
  </div>
</template>
