import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta = {
  title: "Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Authenticated: Story = {
  args: {
    isLoggedIn: true,
  },
};

export const NoAuthenticated: Story = {
  args: {
    isLoggedIn: false,
  },
};
