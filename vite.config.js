import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

function syncImgPlugin() {
  const srcDir = path.resolve("img");
  const destDir = path.resolve("public/img");

  function copyFile(srcPath) {
    const dest = path.join(destDir, path.relative(srcDir, srcPath));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(srcPath, dest);
    console.log(`[sync-img] ${path.relative(srcDir, srcPath)}`);
  }

  function syncAll() {
    if (!fs.existsSync(srcDir)) return;
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
      const src = path.join(srcDir, file);
      if (!fs.statSync(src).isFile()) continue;
      const dest = path.join(destDir, file);
      const srcMtime = fs.statSync(src).mtimeMs;
      const destMtime = fs.existsSync(dest) ? fs.statSync(dest).mtimeMs : 0;
      if (srcMtime > destMtime) copyFile(src);
    }
  }

  return {
    name: "sync-img",
    buildStart() {
      syncAll();
    },
    configureServer(server) {
      syncAll();
      server.watcher.add(srcDir);
      server.watcher.on("add", (file) => {
        if (file.startsWith(srcDir + path.sep)) copyFile(file);
      });
      server.watcher.on("change", (file) => {
        if (file.startsWith(srcDir + path.sep)) copyFile(file);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), syncImgPlugin()],
  base: "/sonnymarcin_portfolio/",
});
