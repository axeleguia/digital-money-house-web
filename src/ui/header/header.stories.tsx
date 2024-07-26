import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta = {
  title: "Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "80px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

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
