import Image from "next/image";
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';
import NewsCard from '@/components/NewsCard';
import { getAllNews } from '@/lib/news';

export default function Home() {
  const newsItems = getAllNews();
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Where Excellence Meets Character
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Blissland Academy provides holistic education combining academic rigor with values and character development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <Button>Apply Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Our Curriculum"
            subtitle="Quality education tailored for every stage of development"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Nursery</h3>
              <p className="text-gray-600 mb-4">
                Foundational learning through play, developing social skills and early literacy.
              </p>
              <Link href="/academics" className="text-blue-900 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Primary</h3>
              <p className="text-gray-600 mb-4">
                Strong academics with emphasis on critical thinking, creativity, and collaboration skills.
              </p>
              <Link href="/academics" className="text-blue-900 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Secondary</h3>
              <p className="text-gray-600 mb-4">
                Preparation for success with advanced curriculum, leadership development, and college readiness.
              </p>
              <Link href="/academics" className="text-blue-900 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Why Choose New Life School"
            subtitle="We are committed to developing well-rounded, confident learners"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Qualified Teachers',
                icon: '👨‍🏫',
                desc: 'Experienced educators committed to student growth',
              },
              {
                title: 'Safe Environment',
                icon: '🏫',
                desc: 'Secure, welcoming campus with modern facilities',
              },
              {
                title: 'Modern Learning',
                icon: '💻',
                desc: 'Technology-integrated curriculum with hands-on activities',
              },
              {
                title: 'Extra-Curricular',
                icon: '⚽',
                desc: 'Sports, arts, clubs, and activities for all interests',
              },
            ].map((item, idx) => (
              <Card key={idx}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Students', value: '1,200+' },
              { label: 'Teachers', value: '85+' },
              { label: 'Clubs & Activities', value: '40+' },
              { label: 'Years of Excellence', value: '15+' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principal's Message */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Message from Our Principal
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Education is not merely about transmitting knowledge; it is about shaping character and developing the critical thinking skills needed for the challenges of tomorrow.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Blissland Academy, we believe in nurturing the whole child—intellectually, emotionally, socially, and physically. Our holistic approach ensures that students develop into confident, compassionate, and capable individuals.
              </p>
              <div>
                <p className="font-bold">Dr. Sarah Johnson</p>
                <p className="text-gray-600">Principal, Blissland Academy</p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder-5.jpg"
                alt="Principal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Campus Life"
            subtitle="Get a glimpse of our vibrant school community"
          />
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link key={num} href="/gallery" className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                <Image
                  src={`/placeholder-${num + 2}.jpg`}
                  alt={`Gallery ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button variant="secondary">View Full Gallery</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Latest News"
            subtitle="Stay updated with school announcements and events"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {newsItems.slice(0, 3).map((news) => (
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
          <div className="text-center mt-10">
            <Link href="/news">
              <Button variant="outline">Read All News</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-900 text-white py-16 md:py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our School?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Book a school tour and discover why families choose Blissland Academy.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-900 hover:bg-gray-100">
              Book a Tour
            </Button>
          </Link>
        </Container>
      </section>
    </main>
  );
}
