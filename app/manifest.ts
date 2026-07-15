import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Flora – péče o rostliny", short_name: "Flora", description: "Osobní průvodce péčí o rostliny.", start_url: "/", display: "standalone", background_color: "#f7faf7", theme_color: "#065f46", icons: [{ src: "/images/plants/monstera.png", sizes: "1024x1536", type: "image/png" }] };
}
