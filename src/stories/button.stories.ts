import { Story, Meta } from '@storybook/angular/types-6-0';
import ButtonComponent from '../components/button/button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  text: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  text: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Button'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  text: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  text: 'Button'
};
