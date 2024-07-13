import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const args = {
  onClick: fn(),
};

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { ...args },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Responsive Button",
  },
};

export const Primary: Story = {
  args: {
    label: "Button",
    btnType: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    btnType: "secondary",
    icon: true,
  },
};

export const Third: Story = {
  args: {
    label: "Button",
    btnType: "third",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};

export const MediumSize: Story = {
  args: {
    label: "Button",
    size: "medium",
  },
};
export const LargeSize: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};
