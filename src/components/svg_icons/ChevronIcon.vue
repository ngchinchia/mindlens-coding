<script>
export default {
  name: 'ChevronIcon',
  props: {
    strokeColor: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    strokeClass() {
      switch (this.strokeColor) {
        case 'primary':
          return '#F7BA50'
        case 'secondary':
          return '#C75100'
        // Add more variants as needed
        default:
          return this.strokeColor
      }
    }
  }
}
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 20L8 12L16 4"
      :stroke="strokeClass"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
