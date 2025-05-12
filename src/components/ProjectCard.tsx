import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image src={image} alt={title} width={400} height={300} className="rounded" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}