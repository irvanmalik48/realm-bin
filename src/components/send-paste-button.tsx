"use client";

import { useAtom } from "jotai";
import { contentAtom } from "@/lib/atoms";
import { Button } from "@/components/ui/button";

export function SendPasteButton(
  props: React.ComponentProps<"button"> & {
    className?: string;
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
  }
) {
  const [content] = useAtom(contentAtom);

  const handleSendPaste = async () => {
    const requestBody = {
      content: content,
    };
  };

  return (
    <Button variant="default" onClick={handleSendPaste} {...props}>
      {props.children || "Send Paste"}
    </Button>
  );
}
