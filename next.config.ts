import type { NextConfig } from "next";
import removeImports from "next-remove-imports";

const removeImport = removeImports();

const nextConfig: NextConfig = removeImport({
  experimental: {
    esmExternals: true,
  },
});

export default nextConfig;
