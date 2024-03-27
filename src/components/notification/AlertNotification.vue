<script setup>
import { defineProps, computed } from 'vue'
import infoIcon from '@/assets/icons/info.svg'
import errorIcon from '@/assets/icons/error.svg'
import alertIcon from '@/assets/icons/warning.svg'
import successIcon from '@/assets/icons/success.svg'
import closeIcon from '@/assets/icons/close.svg'
import ReusableButton from '../button/ReusableButton.vue'

const props = defineProps({
  title: String,
  content: String,
  variant: {
    type: String,
    default: 'default'
  },
  icon: {
    type: Object,
    default: null
  },
  showPrimaryButton: Boolean,
  showSecondaryButton: Boolean
})

// Define different variants of a notification card
const notiClass = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'bg-[#F4FAFF] border border-[#2C75DD]'
    case 'error':
      return 'bg-[#FEF5F5]  border border-[#CC3123]'
    case 'alert':
      return 'bg-[#FDF3E1]  border border-[#DC5A00]'
    case 'success':
      return 'bg-[#F8FFF2]  border border-[#008700]'
    default:
      return 'bg-[#F4FAFF]  border border-[#2C75DD]'
  }
})

const buttonVariantPrimary = computed(() => {
  switch (props.variant) {
    case 'info':
      return `primary-${props.variant}`
    case 'error':
      return `primary-${props.variant}`
    case 'alert':
      return `primary-${props.variant}`
    case 'success':
      return `primary-${props.variant}`
    default:
      return `primary-${props.variant}`
  }
})
const buttonVariantSecondary = computed(() => {
  switch (props.variant) {
    case 'info':
      return `secondary-${props.variant}`
    case 'error':
      return `secondary-${props.variant}`
    case 'alert':
      return `secondary-${props.variant}`
    case 'success':
      return `secondary-${props.variant}`
    default:
      return `secondary-${props.variant}`
  }
})

const variantIcon = computed(() => {
  switch (props.variant) {
    case 'info':
      return infoIcon
    case 'error':
      return errorIcon
    case 'alert':
      return alertIcon
    case 'success':
      return successIcon
    default:
      return ''
  }
})
</script>

<template>
  <div :class="`${notiClass} md:min-w-[720px] w-[330px] p-3 rounded-[4px] leading-6`">
    <div class="flex items-start gap-3">
      <img
        v-if="variantIcon"
        :src="variantIcon"
        alt="notif icon"
        :class="`${content && title ? 'max-w-[32px] max-h-[32px] my-1' : 'max-w-6 max-h-6'}`"
      />
      <div class="flex flex-col space-y-2">
        <h1 v-if="title" class="font-semibold">{{ title }}</h1>
        <p v-if="content" class="font-regular text-[#0C0D0D] md:min-w-[596px] w-[206px]">
          {{ content }}
        </p>
        <div class="flex md:flex-row flex-col gap-4">
          <ReusableButton v-if="showPrimaryButton" :variant="buttonVariantSecondary"
            >Action</ReusableButton
          >
          <ReusableButton v-if="showSecondaryButton" :variant="buttonVariantPrimary"
            >Action</ReusableButton
          >
        </div>
      </div>
      <img
        :src="closeIcon"
        alt="close icon"
        :class="`min-w-5 min-h-5 ml-auto ${content && title ? 'my-0' : 'my-auto'}`"
      />
    </div>
  </div>
</template>
