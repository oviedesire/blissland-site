import { getAllNews } from '@/lib/news';

export async function GET() {
  try {
    const news = getAllNews();
    return Response.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return Response.json([], { status: 200 });
  }
}
