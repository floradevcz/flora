export type Plant = {
  id: number;
  slug: string;
  commonName: string;
  latinName: string;
  category: string;
  image: string;
  difficulty: 1 | 2 | 3;
  watering: string;
  sunlight: string;
  temperature: string;
  humidity: string;
  feeding: string;
  soil: string;
  summary: string;
  thrivesWith: string[];
  watchOutFor: string;
};

export const plants: Plant[] = [
  {
    id: 1,
    slug: "washingtonie-statna",
    commonName: "Washingtonie statná",
    latinName: "Washingtonia robusta",
    category: "Palmy",
    image: "/images/plants/washingtonie-statna.png",
    difficulty: 3,
    watering: "Nechte vrchní 2–3 cm substrátu proschnout, pak rostlinu důkladně zalijte. V zimě zálivku omezte.",
    sunlight: "Velmi světlé místo, ideálně s několika hodinami přímého slunce denně.",
    temperature: "V období růstu 18–27 °C. Chraňte před mrazem a studeným průvanem.",
    humidity: "Běžná pokojová vlhkost stačí; pomůže jí dobré proudění čerstvého vzduchu.",
    feeding: "Od března do srpna přihnojujte jednou za 2–4 týdny hnojivem pro palmy.",
    soil: "Vzdušný, velmi propustný substrát pro palmy a květináč s odtokovým otvorem.",
    summary: "Rychle rostoucí, výrazná palma, která nejlépe vynikne na opravdu světlém místě.",
    thrivesWith: ["dostatkem světla", "propustným substrátem", "zálivkou až po částečném proschnutí"],
    watchOutFor: "Stojatá voda u kořenů a dlouhé období šera vedou ke žloutnutí listů.",
  },
  {
    id: 2,
    slug: "konopna-palma",
    commonName: "Konopná palma",
    latinName: "Trachycarpus fortunei",
    category: "Palmy",
    image: "/images/plants/konopna-palma.png",
    difficulty: 2,
    watering: "Zalévejte pravidelně po proschnutí povrchu. V nádobě nenechávejte kořeny stát ve vodě.",
    sunlight: "Slunce až světlý polostín; na chráněném venkovním místě se jí daří velmi dobře.",
    temperature: "Odolná palma pro venkovní pěstování, ale rostlinu v nádobě na zimu chraňte před promrznutím kořenů.",
    humidity: "Nevyžaduje zvýšenou vlhkost vzduchu.",
    feeding: "Na jaře a začátkem léta přidejte hnojivo pro palmy podle dávkování výrobce.",
    soil: "Hlinitopísčitý, dobře odvodněný substrát; drenáž je zásadní.",
    summary: "Vějířovitá palma vhodná pro slunné patio, balkon i světlou zimní zahradu.",
    thrivesWith: ["chráněným místem bez silného větru", "drenáží", "světlem a pravidelnou kontrolou vlhkosti"],
    watchOutFor: "V zimě je největším rizikem kombinace mokrých kořenů a mrazu.",
  },
  {
    id: 3,
    slug: "citronik",
    commonName: "Citroník",
    latinName: "Citrus limon",
    category: "Citrusy",
    image: "/images/plants/citronik.png",
    difficulty: 3,
    watering: "V létě udržujte substrát mírně vlhký a kontrolujte jej často. V zimě nechte povrch částečně proschnout, pak zalijte důkladně.",
    sunlight: "Potřebuje co nejvíce světla a několik hodin přímého slunce. V létě mu prospívá pobyt venku na chráněném místě.",
    temperature: "Má rád teplo, ale v zimě ocení světlé, chladnější místo bez mrazu a průvanu.",
    humidity: "Vyšší vzdušná vlhkost mu prospívá; suchý vzduch a prudké změny teplot mohou způsobit opad listů.",
    feeding: "Od konce března do října používejte hnojivo pro citrusy; v zimě volte vyvážené zimní hnojivo podle návodu.",
    soil: "Kvalitní, propustný substrát pro citrusy s dobrou drenáží.",
    summary: "Voňavý citrus, který při stálé péči odmění květy, lesklými listy a někdy i vlastními plody.",
    thrivesWith: ["sluncem", "pravidelnou, ale ne přehnanou zálivkou", "hnojivem pro citrusy a stabilními podmínkami"],
    watchOutFor: "Nenechte substrát úplně vyschnout ani květináč stát ve vodě; citroník špatně snáší náhlé změny.",
  },
  {
    id: 4,
    slug: "granatovnik",
    commonName: "Granátovník",
    latinName: "Punica granatum",
    category: "Ovocné",
    image: "/images/plants/granatovnik.png",
    difficulty: 2,
    watering: "Zalévejte, když vrchní vrstva substrátu vyschne. V zimním klidu zálivku výrazně omezte.",
    sunlight: "Plné slunce je pro kvetení i tvorbu plodů zásadní.",
    temperature: "V létě teplo a čerstvý vzduch; přes zimu světlé, chladnější místo bez mrazu.",
    humidity: "Běžná vlhkost vzduchu je dostačující.",
    feeding: "Od jara do léta přihnojujte přibližně jednou za měsíc hnojivem pro plodové rostliny.",
    soil: "Propustný, výživný substrát a nádoba s dobrým odvodem přebytečné vody.",
    summary: "Sluncemilný keř s nápadnými květy; v nádobě se mu daří na teplém balkoně nebo terase.",
    thrivesWith: ["plným sluncem", "letněním venku", "klidnějším a chladnějším zimováním"],
    watchOutFor: "Bez dostatku světla může málo kvést; přemokření v zimě mu nesvědčí.",
  },
  {
    id: 5,
    slug: "olivovnik",
    commonName: "Olivovník",
    latinName: "Olea europaea",
    category: "Středomořské",
    image: "/images/plants/olivovnik.png",
    difficulty: 2,
    watering: "Po proschnutí části substrátu zalijte vydatně a nechte přebytečnou vodu odtéct. V zimě zalévejte méně.",
    sunlight: "Vyžaduje plné slunce; nejlépe se mu daří venku od jara do podzimu.",
    temperature: "Miluje teplo, na zimu mu dopřejte světlé a chladné místo bez silných mrazů.",
    humidity: "Běžná až suchá vzdušná vlhkost mu vyhovuje.",
    feeding: "Od jara do léta hnojte zhruba jednou za měsíc hnojivem pro středomořské rostliny.",
    soil: "Velmi propustný, spíše minerální substrát s drenáží.",
    summary: "Středomořský stromek s klidným charakterem, ideální pro nejslunnější místo na balkoně či terase.",
    thrivesWith: ["celodenním sluncem", "vzdušným minerálním substrátem", "střídmou zálivkou"],
    watchOutFor: "Nejčastější problém je přelití a nedostatek světla během zimy.",
  },
  {
    id: 6, slug: "monstera", commonName: "Monstera", latinName: "Monstera deliciosa", category: "Pokojové", image: "/images/plants/monstera.png", difficulty: 2,
    watering: "Zalijte, až vrchní 3–5 cm substrátu proschne.", sunlight: "Světlé místo bez ostrého poledního slunce.", temperature: "18–27 °C, bez studeného průvanu.", humidity: "Má ráda vyšší vzdušnou vlhkost.", feeding: "Od jara do léta jednou za 4 týdny.", soil: "Vzdušný substrát s drenáží.", summary: "Oblíbená pokojovka s velkými děrovanými listy.", thrivesWith: ["rozptýleným světlem", "opěrou pro růst", "mírně vlhkým substrátem"], watchOutFor: "Přelití vede k žloutnutí listů a hnilobě kořenů.",
  },
  {
    id: 7, slug: "tchynin-jazyk", commonName: "Tchynin jazyk", latinName: "Dracaena trifasciata", category: "Pokojové", image: "/images/plants/tchynin-jazyk.png", difficulty: 1,
    watering: "Zalévejte až po úplném proschnutí substrátu.", sunlight: "Snese polostín i světlé místo.", temperature: "15–27 °C.", humidity: "Běžná pokojová vlhkost stačí.", feeding: "V sezóně jednou za 6–8 týdnů.", soil: "Lehký substrát pro sukulenty.", summary: "Mimořádně nenáročná rostlina se vzpřímenými listy.", thrivesWith: ["střídmou zálivkou", "propustným substrátem", "klidným místem"], watchOutFor: "Nejčastěji jí uškodí příliš mnoho vody.",
  },
  {
    id: 8, slug: "zamiokulkas", commonName: "Zamiokulkas", latinName: "Zamioculcas zamiifolia", category: "Pokojové", image: "/images/plants/zamiokulkas.png", difficulty: 1,
    watering: "Mezi zálivkami nechte celý substrát vyschnout.", sunlight: "Polostín až rozptýlené světlo.", temperature: "18–26 °C.", humidity: "Běžná pokojová vlhkost.", feeding: "V létě jednou za 6 týdnů.", soil: "Velmi propustný substrát s drenáží.", summary: "Odolná pokojovka s lesklými listy, vhodná i pro začátečníky.", thrivesWith: ["méně častou zálivkou", "rozptýleným světlem", "drenáží"], watchOutFor: "Přemokření může poškodit hlíznaté kořeny.",
  },
  {
    id: 9, slug: "kaktus-echinopsis", commonName: "Kaktus Echinopsis", latinName: "Echinopsis sp.", category: "Kaktusy", image: "/images/plants/kaktus-echinopsis.png", difficulty: 1,
    watering: "Zalijte až po úplném vyschnutí; v zimě téměř vůbec.", sunlight: "Co nejvíce slunce, přivykejte mu postupně.", temperature: "V létě teplo, v zimě chladnější suché zimování.", humidity: "Suchý vzduch mu vyhovuje.", feeding: "V létě slabé hnojivo pro kaktusy jednou měsíčně.", soil: "Minerální, velmi propustný kaktusový substrát.", summary: "Kulatý kaktus, který umí vykvést velkým květem.", thrivesWith: ["plným sluncem", "suchým zimováním", "střídmou zálivkou"], watchOutFor: "Stojatá voda způsobuje rychlou hnilobu.",
  },
];

export function getPlantBySlug(slug: string) {
  return plants.find((plant) => plant.slug === slug);
}
