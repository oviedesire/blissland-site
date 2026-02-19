'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import Modal from '@/components/Modal';

interface GalleryItem {
  slug: string;
  title: string;
  image: string;
  caption?: string;
}

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch gallery images from the API
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setGalleryItems(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'Gallery' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-xl mt-4 text-blue-100">
            Moments from our vibrant school community
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading gallery...</p>
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No gallery images yet. Add images via the Netlify CMS admin.
              </p>
            </div>
          ) : (
            <>
              {/* Gallery Grid */}
              <div className="grid md:grid-cols-4 gap-4">
                {galleryItems.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => setSelectedImage(item)}
                    className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                    aria-label={`Open ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                      <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                        {item.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div>
            <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedImage.title}
            </h2>
            <p className="text-gray-600">
              {selectedImage.caption || 'Blissland Academy'}
            </p>
          </div>
        )}
      </Modal>
    </main>
  );
}
