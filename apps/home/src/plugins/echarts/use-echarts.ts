import type { EChartsOption } from 'echarts';

import type EchartsUI from './echarts-ui.vue';

import type { Ref } from 'vue';
import { nextTick, watch } from 'vue';

import {
  tryOnUnmounted,
  useDebounceFn,
  useResizeObserver,
  useTimeoutFn,
  useWindowSize,
} from '@vueuse/core';

import echarts from './echarts';

type EchartsUIType = typeof EchartsUI | undefined;

function useEcharts(chartRef: Ref<EchartsUIType>) {
  let chartInstance: echarts.ECharts | null = null;
  const { height, width } = useWindowSize();
  const resizeHandler: () => void = useDebounceFn(resize, 200);

  const initCharts = () => {
    const el = chartRef?.value?.$el;
    if (!el) {
      return;
    }
    chartInstance = echarts.init(el);

    return chartInstance;
  };

  const renderEcharts = (options: EChartsOption, clear = true) => {
    return new Promise((resolve) => {
      if (chartRef.value?.offsetHeight === 0) {
        useTimeoutFn(() => {
          renderEcharts(options);
          resolve(null);
        }, 30);
        return;
      }
      nextTick(() => {
        useTimeoutFn(() => {
          if (!chartInstance) {
            const instance = initCharts();
            if (!instance) return;
          }
          clear && chartInstance?.clear();
          chartInstance?.setOption(options);
          resolve(null);
        }, 30);
      });
    });
  };

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    });
  }

  watch([width, height], () => {
    resizeHandler?.();
  });

  useResizeObserver(chartRef as never, resizeHandler);

  tryOnUnmounted(() => {
    // 销毁实例，释放资源
    chartInstance?.dispose();
  });
  return {
    renderEcharts,
    resize,
  };
}

export { useEcharts };

export type { EchartsUIType };
