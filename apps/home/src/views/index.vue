<template>
    <div>
        <h1>子应用标题</h1>

        <h2>这里有个图标，微前端环境下不显示</h2>
        <Icon icon="material-symbols:10k-outline" height="36" width="36" />

        <h2>这里有个echarts图表，微前端环境下有报错展示异常</h2>
        <EchartsUI ref="chartRef" />
    </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue';
import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '../plugins/echarts';

const chartRef = ref<EchartsUIType>();
const { renderEcharts } = useEcharts(chartRef);

onMounted(() => {
  renderEcharts({
    grid: {
      bottom: 0,
      containLabel: true,
      left: '1%',
      right: '1%',
      top: '2 %',
    },
    series: [
      {
        areaStyle: {},
        data: [
          111, 2000, 6000, 16_000, 33_333, 55_555, 64_000, 33_333, 18_000,
          36_000, 70_000, 42_444, 23_222, 13_000, 8000, 4000, 1200, 333, 222,
          111,
        ],
        itemStyle: {
          color: '#5ab1ef',
        },
        smooth: true,
        type: 'line',
      },
      {
        areaStyle: {},
        data: [
          33, 66, 88, 333, 3333, 6200, 20_000, 3000, 1200, 13_000, 22_000,
          11_000, 2221, 1201, 390, 198, 60, 30, 22, 11,
        ],
        itemStyle: {
          color: '#019680',
        },
        smooth: true,
        type: 'line',
      },
    ],
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: '#019680',
          width: 1,
        },
      },
      trigger: 'axis',
    },
    xAxis: {
      axisTick: {
        show: false,
      },
      boundaryGap: false,
      data: Array.from({ length: 18 }).map((_item, index) => `${index + 6}:00`),
      splitLine: {
        lineStyle: {
          type: 'solid',
          width: 1,
        },
        show: true,
      },
      type: 'category',
    },
    yAxis: [
      {
        axisTick: {
          show: false,
        },
        max: 80_000,
        splitArea: {
          show: true,
        },
        splitNumber: 4,
        type: 'value',
      },
    ],
  });
});
</script>