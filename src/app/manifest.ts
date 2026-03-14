import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ravi Tripathi Portfolio",
    short_name: "Ravi Portfolio",
    description:
      "Full-stack engineer with a product-first mindset. Building reliable systems and calm experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3ece2",
    theme_color: "#1f6f6c",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
