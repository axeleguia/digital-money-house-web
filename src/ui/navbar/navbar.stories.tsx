import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "80px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarPrimary: Story = {
  args: {
    color: "primary",
    pathname: "/register",
  },
};

export const NavbarBackground: Story = {
  args: {
    color: "background",
    pathname: "/home",
  },
};
