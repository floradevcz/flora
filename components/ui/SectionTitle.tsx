type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 mb-5">
      {children}
    </h2>
  );
}