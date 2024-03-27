import ReusableButton from '../components/button/ReusableButton.vue'
import ArrowIcon from '@/components/svg_icons/ArrowIcon.vue'
export default {
  title: 'Components/Button',
  component: ReusableButton,
  argTypes: {
    // Define the arguments (props) that can be adjusted in Storybook
    leftIcon: { control: 'object' },
    rightIcon: { control: 'object' },
    leftIconColor: { control: 'color' },
    rightIconColor: { control: 'color' },
    tags: ['autodocs'],
    variant: {
      control: {
        type: 'select'
      },
      options: [
        'primary',
        'secondary',
        'primary-info',
        'secondary-info',
        'primary-error',
        'secondary-error',
        'primary-alert',
        'secondary-alert',
        'primary-success',
        'secondary-success'
      ]
    },
    onClick: { action: 'clicked' }
  }
}

const Template = (args) => ({
  components: { ReusableButton },
  setup() {
    return { args }
  },
  template:
    '<ReusableButton v-bind="args" v-if="args.hasSlot">{{ args.default }}</ReusableButton><ReusableButton v-bind="args" v-else></ReusableButton>'
})

// Primary
export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  hasSlot: true,
  default: 'Action'
}
export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
  rightIcon: ArrowIcon
}
export const PrimaryRightIcon = Template.bind({})
PrimaryRightIcon.args = {
  variant: 'primary',
  rightIcon: ArrowIcon,
  hasSlot: true,
  default: 'Action'
}
export const PrimaryLeftIcon = Template.bind({})
PrimaryLeftIcon.args = {
  variant: 'primary',
  leftIcon: ArrowIcon,
  hasSlot: true,
  default: 'Action'
}

// Secondary
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  hasSlot: true,
  default: 'Action'
}

export const SecondaryIcon = Template.bind({})
SecondaryIcon.args = {
  variant: 'secondary',
  rightIcon: ArrowIcon,
  rightIconColor: 'secondary'
}
export const SecondaryRightIcon = Template.bind({})
SecondaryRightIcon.args = {
  variant: 'secondary',
  rightIcon: ArrowIcon,
  rightIconColor: 'secondary',
  hasSlot: true,
  default: 'Action'
}
export const SecondaryLeftIcon = Template.bind({})
SecondaryLeftIcon.args = {
  variant: 'secondary',
  leftIcon: ArrowIcon,
  leftIconColor: 'secondary',
  hasSlot: true,
  default: 'Action'
}

{
  /* Info Button */
}
export const PrimaryInfo = Template.bind({})
PrimaryInfo.args = {
  variant: 'primary-info',
  hasSlot: true,
  default: 'Action'
}

export const SecondaryInfo = Template.bind({})
SecondaryInfo.args = {
  variant: 'secondary-info',
  hasSlot: true,
  default: 'Action'
}

{
  /* Error Button */
}
export const PrimaryError = Template.bind({})
PrimaryError.args = {
  variant: 'primary-error',
  hasSlot: true,
  default: 'Action'
}

export const SecondaryError = Template.bind({})
SecondaryError.args = {
  variant: 'secondary-error',
  hasSlot: true,
  default: 'Action'
}

{
  /* Alert Button */
}
export const PrimaryAlert = Template.bind({})
PrimaryAlert.args = {
  variant: 'primary-alert',
  hasSlot: true,
  default: 'Action'
}

export const SecondaryAlert = Template.bind({})
SecondaryAlert.args = {
  variant: 'secondary-alert',
  hasSlot: true,
  default: 'Action'
}
{
  /* Success Button */
}
export const PrimarySuccess = Template.bind({})
PrimarySuccess.args = {
  variant: 'primary-success',
  hasSlot: true,
  default: 'Action'
}

export const SecondarySuccess = Template.bind({})
SecondarySuccess.args = {
  variant: 'secondary-success',
  hasSlot: true,
  default: 'Action'
}

// Add more stories for each variant and configuration as needed
