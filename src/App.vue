<script setup>
import ReusableButton from './components/button/ReusableButton.vue'
import ArrowIcon from '@/components/svg_icons/ArrowIcon.vue'
</script>

<template>
  <div class="flex flex-col space-y-10 items-center justify-center my-80">
    <ReusableButton variant="primary">Action</ReusableButton>
    <ReusableButton variant="primary" :left-icon="ArrowIcon" />
    <ReusableButton variant="primary" :left-icon="ArrowIcon"> Action </ReusableButton>
    <ReusableButton variant="primary" :right-icon="ArrowIcon"> Action </ReusableButton>

    <ReusableButton variant="secondary">Action</ReusableButton>
    <ReusableButton variant="secondary" :left-icon="ArrowIcon" />
    <ReusableButton variant="secondary" :left-icon="ArrowIcon"> Action </ReusableButton>
    <ReusableButton variant="secondary" :right-icon="ArrowIcon"> Action </ReusableButton>
  </div>
</template>

<style scoped></style>
