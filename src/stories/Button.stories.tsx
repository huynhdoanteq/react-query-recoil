import type { Story, StoryDefault } from "@ladle/react";
import Button from "@src/components/Button";

interface Props {
  className?: string;
  name: string;
}

export default {
  title: "Button",
  args: {
    name: "button",
    className: "outline",
  },
  argTypes: {},
} satisfies StoryDefault<Props>;

export const ButtonStories: Story<Props> = ({ name, className }) => {
  return (
    <Button
      className={`bg-white-100 text-blue-600 border text-sm ${className}`}
    >
      {name}
    </Button>
  );
};

ButtonStories.storyName = "Button";
