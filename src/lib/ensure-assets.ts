import fs from "fs";
import path from "path";

export function ensurePublicAssets() {
  if (typeof window !== "undefined") return;

  try {
    const projectRoot = process.cwd();
    const publicAssetsDir = path.join(projectRoot, "public", "assets");
    const srcAssetsDir = path.join(projectRoot, "src", "assets");

    if (!fs.existsSync(publicAssetsDir)) {
      fs.mkdirSync(publicAssetsDir, { recursive: true });
    }

    // 1. Copy everything from src/assets to public/assets
    if (fs.existsSync(srcAssetsDir)) {
      const srcFiles = fs.readdirSync(srcAssetsDir);
      for (const file of srcFiles) {
        const srcPath = path.join(srcAssetsDir, file);
        const destPath = path.join(publicAssetsDir, file);
        try {
          fs.copyFileSync(srcPath, destPath);
        } catch {}
      }
    }

    // 2. Copy generated 8K images from brain artifacts if available
    const brainDir = "C:\\Users\\BALASUNDAR M\\.gemini\\antigravity-ide\\brain\\962d409b-e485-472b-8433-ead58452c98c";
    const brainMapping: Record<string, string[]> = {
      "product_laptop_1785750999799.png": ["product-laptop.jpg", "product-laptop.png"],
      "product_headphones_1785751071634.png": ["product-headphones.jpg", "product-headphones.png"],
      "product_watch_1785751086997.png": ["product-watch.jpg", "product-watch.png"],
      "product_phone_1785751101822.png": ["product-phone.jpg", "product-phone.png"],
      "gen_cart_logo_1785751287916.png": ["logo.png", "logo.jpg"],
      "product_camera_1785751307501.png": ["product-camera.png", "product-camera.jpg"],
      "product_gaming_1785751325994.png": ["product-gaming.png", "product-gaming.jpg"],
    };

    for (const [brainFile, targetNames] of Object.entries(brainMapping)) {
      const brainPath = path.join(brainDir, brainFile);
      if (fs.existsSync(brainPath)) {
        for (const targetName of targetNames) {
          const destPublic = path.join(publicAssetsDir, targetName);
          const destSrc = path.join(srcAssetsDir, targetName);
          try {
            fs.copyFileSync(brainPath, destPublic);
            if (fs.existsSync(srcAssetsDir)) {
              fs.copyFileSync(brainPath, destSrc);
            }
          } catch {}
        }
      }
    }
  } catch (err) {
    console.error("Asset sync notice:", err);
  }
}
