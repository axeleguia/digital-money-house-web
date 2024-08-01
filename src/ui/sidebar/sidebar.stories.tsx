import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./sidebar";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
