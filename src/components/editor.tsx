"use client";

import { useAtom } from "jotai";
import { contentAtom } from "@/lib/atoms";
import "@uiw/react-textarea-code-editor/dist.css";

export function EditorComponent() {
  const [content, setContent] = useAtom(contentAtom);

  return (
    <>
      <textarea
        className="w-full grow h-full text-sm outline-0 p-5 font-mono resize-none"
        placeholder="Type your code here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </>
  );
}
