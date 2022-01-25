import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../app/components/button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  label: "Primary button",
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  type: "secondary",
  label: "secondary button",
};

export const PrimaryOutlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryOutlined.args = {
  type: "primary-outlined",
  label: "primary-outlined button",
};

export const SecondaryOutlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryOutlined.args = {
  type: "secondary-outlined",
  label: "secondary-outlined button",
};
