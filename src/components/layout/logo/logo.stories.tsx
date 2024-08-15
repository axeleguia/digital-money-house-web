import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  tags: ["autodocs"],
};

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
