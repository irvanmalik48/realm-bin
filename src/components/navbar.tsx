import { Send, Upload } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggleButton from "./ui/theme-toggle-button";
import { SendPasteButton } from "./send-paste-button";

export function Navbar() {
  return (
    <header className="sticky z-50 top-0 left-0 border-b border-border w-full bg-muted/20 backdrop-blur-lg px-5 py-3 flex justify-between items-center">
      <h1 className="text-xl font-medium">realmbin.</h1>
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          className="hidden md:flex items-center gap-3 cursor-pointer"
        >
          <Upload className="w-4 h-4" />
          Send File
        </Button>
        <SendPasteButton
          variant="default"
          className="hidden md:flex items-center gap-3 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          Send Paste
        </SendPasteButton>
        <ThemeToggleButton variant="circle-blur" start="top-right" />
      </div>
    </header>
  );
}
