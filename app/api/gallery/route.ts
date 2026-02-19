import { getAllGalleryImages } from '@/lib/gallery';

export async function GET() {
  try {
    const images = getAllGalleryImages();
    return Response.json(images);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return Response.json([], { status: 200 });
  }
}
