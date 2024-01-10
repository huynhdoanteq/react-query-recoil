import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: "/",
    server: {
      open: false,
    },
    define: {
      "process.env": process.env,
    },
  });
};
