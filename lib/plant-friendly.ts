const tips: Record<string, string[]> = {
  "washingtonie-statna": ["Dopřejte jí co nejvíce světla.", "Pěstujte ji v propustném substrátu.", "Zalévejte ji až po částečném proschnutí substrátu."],
  "konopna-palma": ["Umístěte ji na chráněné místo bez silného větru.", "Zajistěte jí dobrou drenáž.", "Pravidelně kontrolujte vlhkost substrátu."],
  citronik: ["Dopřejte mu několik hodin slunce denně.", "Udržujte substrát mírně vlhký, ne mokrý.", "Hnojte jej hnojivem určeným pro citrusy."],
  granatovnik: ["Pěstujte jej na plném slunci.", "V létě mu prospěje pobyt venku.", "Přes zimu mu dopřejte chladnější období klidu."],
  olivovnik: ["Umístěte jej na místo s celodenním sluncem.", "Použijte vzdušný minerální substrát.", "Zalévejte střídmě až po částečném proschnutí."],
  monstera: ["Umístěte ji na světlé místo s rozptýleným světlem.", "Dopřejte jí oporu pro zdravý růst.", "Udržujte substrát mírně vlhký."],
  "tchynin-jazyk": ["Nechte substrát mezi zálivkami úplně proschnout.", "Vyhovuje jí světlé místo i polostín.", "Pěstujte ji v propustném substrátu."],
  zamiokulkas: ["Nechte substrát mezi zálivkami proschnout.", "Umístěte jej do polostínu nebo na rozptýlené světlo.", "Zajistěte mu květináč s drenáží."],
  "kaktus-echinopsis": ["Dopřejte mu co nejvíce přímého slunce.", "V zimě ho nechte v suchu a chladu.", "Zalévejte jej až po úplném vyschnutí substrátu."],
};

export const getFriendlyTips = (slug: string, fallback: string[]) => tips[slug] ?? fallback;
