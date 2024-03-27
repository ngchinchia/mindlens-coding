<script setup>
import ReusableButton from './components/button/ReusableButton.vue'
import ArrowIcon from '@/components/svg_icons/ArrowIcon.vue'
import ChevronIcon from '@/components/svg_icons/ChevronIcon.vue'
import AlertNotification from '@/components/notification/AlertNotification.vue'
</script>

<template>
  <div class="flex flex-col space-y-10 items-center justify-center my-20">
    <ReusableButton variant="primary">Action</ReusableButton>
    <ReusableButton variant="primary" :left-icon="ArrowIcon" />
    <ReusableButton variant="primary" :left-icon="ArrowIcon"> Action </ReusableButton>
    <ReusableButton variant="primary" :right-icon="ArrowIcon"> Action </ReusableButton>

    <ReusableButton variant="secondary">Action</ReusableButton>
    <ReusableButton variant="secondary" :left-icon="ArrowIcon" left-icon-color="secondary" />
    <ReusableButton variant="secondary" :left-icon="ArrowIcon" left-icon-color="secondary">
      Action
    </ReusableButton>
    <ReusableButton variant="secondary" :right-icon="ArrowIcon" right-icon-color="secondary">
      Action
    </ReusableButton>
    <ReusableButton variant="secondary" :left-icon="ChevronIcon" left-icon-color="secondary">
      Action
    </ReusableButton>
    <h2 class="font-bold">Content only</h2>
    <AlertNotification content="A short descriptive header" variant="info" />
    <AlertNotification content="A short descriptive header" variant="error" />
    <AlertNotification content="A short descriptive header" variant="alert" />
    <AlertNotification content="A short descriptive header" variant="success" />
    <h2 class="font-bold">Title only</h2>
    <AlertNotification title="A short descriptive header" variant="info" />
    <AlertNotification title="A short descriptive header" variant="error" />
    <AlertNotification title="A short descriptive header" variant="alert" />
    <AlertNotification title="A short descriptive header" variant="success" />
    <h2 class="font-bold">Title and Content</h2>
    <AlertNotification
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="info"
    />
    <AlertNotification
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="error"
    />
    <AlertNotification
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="alert"
    />
    <AlertNotification
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="success"
    />
    <h2 class="font-bold">All</h2>
    <AlertNotification
      show-primary-button
      show-secondary-button
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="info"
    />
    <AlertNotification
      show-primary-button
      show-secondary-button
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="error"
    />
    <AlertNotification
      show-primary-button
      show-secondary-button
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="alert"
    />
    <AlertNotification
      show-primary-button
      show-secondary-button
      title="A short descriptive header"
      content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."
      variant="success"
    />
  </div>
</template>

<style scoped></style>

<!-- right-icon-color="primary" -->
<!-- right-icon-color="secondary" -->
<!-- left-icon-color="primary" -->
<!-- left-icon-color="secondary" -->
