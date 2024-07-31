import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta = {
  title: "Logo",
  component: Logo,
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoPrimary: Story = {
  args: {
    color: "primary",
  },
};

export const LogoBackground: Story = {
  args: {
    color: "background",
  },
};
