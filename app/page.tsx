import Link from "next/link";

const categories = [
  {
    title: "Palmy",
    emoji: "🌴",
    href: "/atlas/palmy",
  },
  {
    title: "Citrusy",
    emoji: "🍊",
    href: "/atlas/citrusy",
  },
  {
    title: "Pokojové",
    emoji: "🪴",
    href: "/atlas/pokojove",
  },
  {
    title: "Sukulenty",
    emoji: "🌵",
    href: "/atlas/sukulenty",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7FAF7] pb-24">

      <header className="h-72 relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=1200"
          className="w-full h-full object-cover"
          alt="Plants"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-8 text-white">

          <h1 className="text-5xl font-bold">
            Flora
          </h1>

          <p className="mt-2 text-lg opacity-90">
            Tvůj osobní průvodce světem rostlin
          </p>

        </div>

      </header>

      <section className="max-w-md mx-auto p-6">

        <div className="bg-white rounded-3xl shadow-sm p-5 mb-6">

          <h2 className="text-xl font-bold">
            Dnešní péče
          </h2>

          <div className="mt-4 space-y-3">

            <div className="flex justify-between">
              <span>💧 Zalít</span>
              <span className="font-semibold">3 rostliny</span>
            </div>

            <div className="flex justify-between">
              <span>🌱 Pohnojit</span>
              <span className="font-semibold">1 rostlina</span>
            </div>

          </div>

        </div>

        <h2 className="text-2xl font-bold mb-4">
          Atlas rostlin
        </h2>

        <div className="grid grid-cols-2 gap-4">

          {categories.map((category) => (

            <Link
              key={category.title}
              href={category.href}
              className="rounded-3xl bg-white shadow-sm p-5 hover:scale-105 transition"
            >
              <div className="text-5xl">
                {category.emoji}
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                {category.title}
              </h3>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}