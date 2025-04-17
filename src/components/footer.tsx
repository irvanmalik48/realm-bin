export function Footer() {
  return (
    <footer className="w-full hidden md:flex items-center justify-between border-t border-border">
      <div className="flex items-center gap-2 px-5 py-3">
        <p className="text-sm text-muted-foreground">
          Copyright © 2025{" "}
          <a
            href="https://irvanma.eu.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Irvan Malik Azantha
          </a>
          . Licensed in RCCL.
        </p>
      </div>
      <div className="flex items-center gap-2 px-5 py-3">
        <p className="text-sm text-muted-foreground">
          Powered by{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Next.js 15
          </a>
          ,{" "}
          <a
            href="https://elysiajs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Elysia
          </a>
          , and{" "}
          <a
            href="https://valkey.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Valkey
          </a>
        </p>
      </div>
    </footer>
  );
}
