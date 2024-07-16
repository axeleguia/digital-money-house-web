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

export const Default: Story = {
  args: {
    placeholder: "Your username goes here and there",
    size: "normal",
  },
};
