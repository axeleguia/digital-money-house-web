import type { Meta, StoryObj } from "@storybook/react";
import { Activities } from "./activities";

const meta: Meta<typeof Activities> = {
  title: "Activities",
  component: Activities,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#eeeaea", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
