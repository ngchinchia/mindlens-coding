<script setup>
import { computed, useSlots } from 'vue'

// Props declaration
const props = defineProps({
  leftIcon: {
    type: Object,
    default: null
  },
  rightIcon: {
    type: Object,
    default: null
  },
  leftIconColor: String,
  rightIconColor: String,
  variant: {
    type: String,
    default: 'default'
  }
})

// Define whetgher the button has words content
const slots = useSlots()
const hasSlotContent = computed(() => {
  return !!slots.default
})

// Define different width length of a button based on edge cases
const buttonWidth = computed(() => {
  let widthClasses = ''
  if ((props.leftIcon || props.rightIcon) && hasSlotContent.value) {
    widthClasses = 'w-[130px]'
  } else if (!hasSlotContent.value && (props.leftIcon || props.rightIcon)) {
    widthClasses = 'w-10'
  } else if (hasSlotContent.value && !props.leftIcon && !props.rightIcon) {
    widthClasses = 'w-[98px]'
  } else {
    widthClasses = 'w-auto'
  }
  return widthClasses
})

// Define different variants of a button
const buttonClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[#F7BA50] text-[#0C0D0D] hover:bg-[#F5AB2B] hover:shadow-custom-shadow'
    case 'secondary':
      return 'bg-white border border-[#C75100] text-[#C75100] hover:shadow-custom-shadow'
    case 'primary-info':
      return 'bg-[#F7BA50] text-[#0C0D0D] hover:bg-[#F5AB2B] hover:shadow-custom-shadow'
    case 'secondary-info':
      return 'bg-white border border-[#C75100] text-[#C75100] hover:shadow-custom-shadow'
    case 'primary-error':
      return 'bg-[#CC3123] text-white hover:shadow-custom-shadow'
    case 'secondary-error':
      return 'bg-white border border-[#CC3123] text-[#CC3123] hover:shadow-custom-shadow'
    case 'primary-alert':
      return 'bg-[#C75100] text-white hover:shadow-custom-shadow'
    case 'secondary-alert':
      return 'bg-white border border-[#C75100] text-[#C75100] hover:shadow-custom-shadow'
    case 'primary-success':
      return 'bg-[#008700] text-white hover:shadow-custom-shadow'
    case 'secondary-success':
      return 'bg-white border border-[#008700] text-[#008700] hover:shadow-custom-shadow'
    default:
      return 'bg-[#F7BA50] text-[#0C0D0D]  hover:bg-[#F5AB2B] hover:shadow-custom-shadow'
  }
})
</script>

<template>
  <button
    :class="`${buttonClass} ${buttonWidth} inline-flex justify-center items-center text-center font-semibold text-base h-10 gap-1 py-[6px] px-3 font-opensans rounded-[8px]`"
  >
    <component
      :is="props.leftIcon"
      v-if="props.leftIcon"
      :stroke-color="leftIconColor"
      class="min-w-6 min-h-6"
    ></component>
    <slot />
    <component
      :is="props.rightIcon"
      v-if="props.rightIcon"
      :stroke-color="rightIconColor"
      class="min-w-6 min-h-6"
    ></component>
  </button>
</template>
