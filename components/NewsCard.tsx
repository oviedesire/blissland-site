import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  coverImage: string;
}

export default function NewsCard({
  slug,
  title,
  excerpt,
  date,
  coverImage,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
      </div>
      <Link
        href={`/news/${slug}`}
        className="text-blue-900 font-semibold hover:text-blue-700 inline-block"
      >
        Read More →
      </Link>
    </Card>
  );
}
