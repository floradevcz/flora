import { plants, type Plant } from "../data/plants";

export type CareProfile = {
  sunlight: string;
  likes: string;
  avoids: string;
  fertilizeDays: number;
  repotMonths: number;
};

const profiles: Record<string, CareProfile> = {
  "washingtonie-statna": { sunlight: "plné slunce", likes: "teplo a proudění vzduchu", avoids: "mráz a přemokření", fertilizeDays: 21, repotMonths: 18 },
  "konopna-palma": { sunlight: "slunce až polostín", likes: "chráněné místo venku", avoids: "promrznutí mokrých kořenů", fertilizeDays: 30, repotMonths: 24 },
  citronik: { sunlight: "velmi světlé místo se sluncem", likes: "stabilní podmínky a vlhčí vzduch", avoids: "průvan a úplné vyschnutí", fertilizeDays: 14, repotMonths: 24 },
  granatovnik: { sunlight: "plné slunce", likes: "léto venku a chladnější zimování", avoids: "přemokření v zimě", fertilizeDays: 30, repotMonths: 24 },
  olivovnik: { sunlight: "plné slunce", likes: "sucho, teplo a vzdušný substrát", avoids: "stojatou vodu", fertilizeDays: 30, repotMonths: 30 },
  monstera: { sunlight: "světlé místo bez ostrého slunce", likes: "vyšší vlhkost a oporu", avoids: "přemokření a přímé polední slunce", fertilizeDays: 28, repotMonths: 18 },
  "tchynin-jazyk": { sunlight: "polostín až světlé místo", likes: "suchý substrát", avoids: "častou zálivku", fertilizeDays: 56, repotMonths: 36 },
  zamiokulkas: { sunlight: "polostín až rozptýlené světlo", likes: "méně častou zálivku", avoids: "mokré kořeny", fertilizeDays: 56, repotMonths: 36 },
  "kaktus-echinopsis": { sunlight: "co nejvíce slunce", likes: "suchý zimní odpočinek", avoids: "vodu v misce", fertilizeDays: 30, repotMonths: 30 },
};

const fallback: CareProfile = { sunlight: "světlé místo", likes: "pravidelnou kontrolu substrátu", avoids: "stojatou vodu", fertilizeDays: 30, repotMonths: 24 };
export const getCareProfile = (plant: Plant) => profiles[plant.slug] ?? fallback;
export { plants };
