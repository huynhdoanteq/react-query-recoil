import type { StoryDefault } from "@ladle/react";
import Button from "@src/components/Button";

interface Props {
  className?: string;
}

export default {
  title: "Button",
  args: {
    className: "outline",
  },
} satisfies StoryDefault<Props>;

export const ButtonStories = () => {
  return <Button className="bg-white-100 text-blue-600 text-sm">test</Button>;
};

ButtonStories.storyName = "Button";
