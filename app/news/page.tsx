'use client';

import { useState, useMemo, useEffect } from 'react';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsCard from '@/components/NewsCard';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  cover?: string;
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) return newsItems;
    return newsItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, newsItems]);

  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'News' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Latest News</h1>
          <p className="text-xl mt-4 text-blue-100">
            Stay updated with school announcements and events
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              disabled={loading}
            />
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading news...</p>
            </div>
          ) : filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <NewsCard
                  key={news.slug}
                  slug={news.slug}
                  title={news.title}
                  excerpt={news.excerpt || ''}
                  date={news.date}
                  coverImage={news.cover || '/placeholder-1.jpg'}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No news found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
