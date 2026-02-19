import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsCard from '@/components/NewsCard';
import { getNewsBySlug, getRelatedNews, calculateReadingTime, getAllNews } from '@/lib/news';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const newsItems = getAllNews();
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const news = getNewsBySlug(params.slug);

  if (!news) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${news.title} | News | Blissland Academy`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.cover || '/placeholder-1.jpg'],
    },
  };
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const news = getNewsBySlug(params.slug);

  if (!news) {
    notFound();
  }

  const relatedNews = getRelatedNews(news.slug);
  const readingTime = calculateReadingTime(news.content);

  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/news', label: 'News' },
            { label: news.title },
          ]}
        />
      </Container>

      <article className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span>
                  {new Date(news.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>•</span>
                <span>{readingTime} min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {news.title}
              </h1>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src={news.cover || '/placeholder-1.jpg'}
                  alt={news.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: news.content }}
              ></div>
            </div>

            {/* Back to News */}
            <div className="mt-12 pt-8 border-t">
              <Link
                href="/news"
                className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                ← Back to News
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Posts */}
      {relatedNews.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related News</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <NewsCard
                  key={item.slug}
                  slug={item.slug}
                  title={item.title}
                  excerpt={item.excerpt || ''}
                  date={item.date}
                  coverImage={item.cover || '/placeholder-1.jpg'}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
