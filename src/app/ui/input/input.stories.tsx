import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const args = {};

const meta = {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { ...args },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    type: "text",
    placeholder: "Username",
    size: "normal",
  },
};

export const InputPassword: Story = {
  args: {
    type: "password",
    placeholder: "Password",
    size: "normal",
  },
};

export const SmallSize: Story = {
  args: {
    type: "text",
    placeholder: "Username",
    size: "small",
  },
};

export const NormalSize: Story = {
  args: {
    type: "text",
    placeholder: "Password",
    size: "normal",
  },
};
