import AlertNotification from '../components/notification/AlertNotification.vue'
import ReusableButton from '../components/button/ReusableButton.vue'
import infoIcon from '@/assets/icons/info.svg' // adjust paths as needed
import errorIcon from '@/assets/icons/error.svg'
import alertIcon from '@/assets/icons/warning.svg'
import successIcon from '@/assets/icons/success.svg'
import closeIcon from '@/assets/icons/close.svg'

export default {
  title: 'Components/AlertNotification',
  component: AlertNotification,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['info', 'error', 'alert', 'success', 'default']
      }
    },
    showPrimaryButton: { control: 'boolean' },
    showSecondaryButton: { control: 'boolean' }
  }
}

const Template = (args) => ({
  components: { AlertNotification, ReusableButton },
  setup() {
    return { args, infoIcon, errorIcon, alertIcon, successIcon, closeIcon }
  },
  template: `
    <AlertNotification v-bind="args" />
  `
})
{
  /* Content only */
}
export const ContentInfoOnly = Template.bind({})
ContentInfoOnly.args = {
  variant: 'info',
  content: 'A short descriptive header'
}
export const ContentErrorOnly = Template.bind({})
ContentErrorOnly.args = {
  variant: 'error',
  content: 'A short descriptive header'
}
export const ContentAlertOnly = Template.bind({})
ContentAlertOnly.args = {
  variant: 'alert',
  content: 'A short descriptive header'
}
export const ContentSuccessOnly = Template.bind({})
ContentSuccessOnly.args = {
  variant: 'success',
  content: 'A short descriptive header'
}
{
  /* Title only */
}
export const TitleInfoOnly = Template.bind({})
TitleInfoOnly.args = {
  variant: 'info',
  title: 'A short descriptive header'
}
export const TitleErrorOnly = Template.bind({})
TitleErrorOnly.args = {
  variant: 'error',
  title: 'A short descriptive header'
}
export const TitleAlertOnly = Template.bind({})
TitleAlertOnly.args = {
  variant: 'alert',
  title: 'A short descriptive header'
}
export const TitleSuccessOnly = Template.bind({})
TitleSuccessOnly.args = {
  variant: 'success',
  title: 'A short descriptive header'
}
{
  /* Title & Content only */
}
export const TitleAndContentInfoOnly = Template.bind({})
TitleAndContentInfoOnly.args = {
  variant: 'info',
  title: 'A short descriptive header',
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
export const TitleAndContentErrorOnly = Template.bind({})
TitleAndContentErrorOnly.args = {
  variant: 'error',
  title: 'A short descriptive header',
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
export const TitleAndContentAlertOnly = Template.bind({})
TitleAndContentAlertOnly.args = {
  variant: 'alert',
  title: 'A short descriptive header',
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
export const TitleAndContentSuccessOnly = Template.bind({})
TitleAndContentSuccessOnly.args = {
  variant: 'success',
  title: 'A short descriptive header',
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
{
  /* All Notification Component */
}
export const AllContentInfo = Template.bind({})
AllContentInfo.args = {
  variant: 'info',
  title: 'A short descriptive header',
  showPrimaryButton: true,
  showSecondaryButton: true,
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
export const AllContentError = Template.bind({})
AllContentError.args = {
  variant: 'error',
  title: 'A short descriptive header',
  showPrimaryButton: true,
  showSecondaryButton: true,
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
export const AllContentAlert = Template.bind({})
AllContentAlert.args = {
  variant: 'alert',
  title: 'A short descriptive header',
  showPrimaryButton: true,
  showSecondaryButton: true,
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}
export const AllContentSuccess = Template.bind({})
AllContentSuccess.args = {
  variant: 'success',
  title: 'A short descriptive header',
  showPrimaryButton: true,
  showSecondaryButton: true,
  content:
    'This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.'
}

// Add more stories for other variants
