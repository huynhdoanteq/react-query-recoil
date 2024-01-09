import type { Story, StoryDefault } from "@ladle/react";

export const Button: Story = () => <button>My Button</button>;

export default {
  title: "Atoms",
} satisfies StoryDefault;

export const ButtonStory: Story = () => {
  return <Button />;
};

ButtonStory.storyName = "Button";
ButtonStory.meta = {
  iframed: true,
};
