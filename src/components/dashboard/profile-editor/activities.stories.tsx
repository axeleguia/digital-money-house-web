import type { Meta, StoryObj } from "@storybook/react";
import { ProfileEditor } from "./profile-editor";

const meta: Meta<typeof ProfileEditor> = {
  title: "ProfileEditor",
  component: ProfileEditor,
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
