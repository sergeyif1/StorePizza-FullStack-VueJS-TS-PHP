<script setup lang="ts">
import { cn } from '@/lib/utils'; 
import { buttonVariants, type buttonVariants as ButtonVariants } from './buttonVariants';
import { Loader } from 'lucide-vue-next'; 
import { ref } from 'vue';

// Определяем пропсы
const props = withDefaults(defineProps<{
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: string;
  asChild?: boolean;
  loading?: boolean;
  disabled?: boolean;
}>(), {
  variant: 'default',
  size: 'default',
  asChild: false,
  loading: false,
  disabled: false,
});

// Определяем ссылку на DOM-элемент
const buttonRef = ref<HTMLButtonElement | null>(null);
// Делаем ссылку доступной для родительских компонентов
defineExpose({ buttonRef }); 

// Выбираем компонент: либо слот, либо кнопка
const Comp = props.asChild ? 'slot' : 'button';
</script>

<template>
  <!-- Основной компонент -->
  <Comp
    ref="buttonRef"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
    :disabled="props.disabled || props.loading"
    v-bind="$attrs"
  >
    <!-- Содержимое: загрузка или дети -->
    <template v-if="props.loading">
      <Loader class="w-5 h-5 animate-spin" />
    </template>
    <template v-else>
      <slot />
    </template>
  </Comp>
</template>
