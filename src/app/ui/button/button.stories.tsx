import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

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
    label: "Submit",
  },
};

export const PrimaryColor: Story = {
  args: {
    label: "Button",
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  args: {
    label: "Button",
    color: "secondary",
    icon: true,
  },
};

export const TertiaryColor: Story = {
  args: {
    label: "Button",
    color: "tertiary",
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "Button",
    color: "background",
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
