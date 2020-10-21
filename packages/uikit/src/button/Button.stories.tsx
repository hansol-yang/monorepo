import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './';

export default { title: 'Component/Button', component: Button, argTypes: { theme: { control: 'inline-radio' } } } as Meta;

const Template: Story<any> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = { title: 'Click me' };

export const Primary = Template.bind({});
Primary.args = { title: 'Primary', theme: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { title: 'Secondary', theme: 'secondary' };
