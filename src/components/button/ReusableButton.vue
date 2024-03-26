<script setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
  leftIcon: {
    type: Object,
    default: null
  },
  rightIcon: {
    type: Object,
    default: null
  },
  variant: {
    type: String,
    default: 'default'
  }
})

const slots = useSlots()

const hasSlotContent = computed(() => {
  return !!slots.default
})
const buttonWidth = computed(() => {
  let widthClasses = ''
  if ((props.leftIcon || props.rightIcon) && hasSlotContent.value) {
    widthClasses = 'w-[130px]'
  } else if (!hasSlotContent.value && (props.leftIcon || props.rightIcon)) {
    widthClasses = 'w-10'
  } else {
    widthClasses = 'w-auto'
  }
  return widthClasses
})

// Setting different variants
const buttonClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[#F7BA50] text-[#0C0D0D] hover:bg-[#F5AB2B] hover:shadow-custom-shadow'
    case 'secondary':
      return 'bg-white border border-[#C75100] text-[#C75100] hover:shadow-custom-shadow'
    // Add more variants as needed
    default:
      return 'bg-[#F7BA50] text-[#0C0D0D]  hover:bg-[#F5AB2B] hover:shadow-custom-shadow'
  }
})
</script>

<template>
  <button
    :class="`${buttonClass} ${buttonWidth} inline-flex justify-center items-center text-center font-semibold text-base h-10 gap-1 py-[6px] px-3 font-opensans rounded-[8px]`"
  >
    <component :is="props.leftIcon" v-if="props.leftIcon" class="min-w-6 min-h-6"></component>
    <slot />
    <component :is="props.rightIcon" v-if="props.rightIcon" class="min-w-6 min-h-6"></component>
  </button>
</template>
