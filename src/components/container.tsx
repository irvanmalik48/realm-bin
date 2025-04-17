export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grow overflow-auto flex flex-col bg-background text-foreground">
      {children}
    </div>
  );
}
