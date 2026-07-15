import Link from "next/link";

type Props = {
  emoji: string;
  title: string;
  href: string;
};

export default function CategoryCard({
  emoji,
  title,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
      bg-white
      rounded-3xl
      shadow-sm
      p-6
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300"
    >
      <div className="text-5xl">
        {emoji}
      </div>

      <h3 className="mt-5 font-semibold text-lg">
        {title}
      </h3>
    </Link>
  );
}