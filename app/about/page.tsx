import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About | Blissland Academy',
  description: 'Learn about Blissland Academy mission, vision, values, and leadership team.',
  openGraph: {
    title: 'About Blissland Academy',
    description: 'Discover our vision for quality education',
  },
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'About' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">About Blissland Academy</h1>
          <p className="text-xl mt-4 text-blue-100">
            Committed to developing young minds and strong characters
          </p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Blissland Academy was founded in 2009 with a simple mission: to provide quality education that develops not just the intellect, but also the character and values of our students.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Over the years, we have grown into a premier educational institution serving over 1,200 students from Nursery to Secondary. Our dedicated team of educators and staff work tirelessly to create an environment where every child can thrive.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Blissland Academy stands as a beacon of educational excellence, known for developing well-rounded, confident, and compassionate individuals prepared for success in higher education and beyond.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder-6.jpg"
                alt="School Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Mission & Vision"
            subtitle="Our guiding principles"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic education that develops academic excellence, moral values, emotional intelligence, and social responsibility in every student, preparing them for meaningful lives and positive contributions to society.
              </p>
            </Card>
            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that cultivates confident, creative, compassionate, and conscientious learners who are equipped to navigate the complexities of the modern world and make positive differences in their communities.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Core Values"
            subtitle="The principles that guide us"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in all we do.',
              },
              {
                title: 'Integrity',
                description: 'We uphold honesty, fairness, and strong ethical principles.',
              },
              {
                title: 'Compassion',
                description: 'We care for one another and serve our community with empathy.',
              },
              {
                title: 'Innovation',
                description: 'We embrace creativity and continuous improvement.',
              },
              {
                title: 'Inclusion',
                description: 'We celebrate diversity and ensure every student feels valued.',
              },
              {
                title: 'Accountability',
                description: 'We take responsibility for our actions and growth.',
              },
            ].map((value, idx) => (
              <Card key={idx}>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Experienced educators dedicated to excellence"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Dr. Sarah Johnson',
                title: 'Principal',
                image: '/placeholder-7.jpg',
              },
              {
                name: 'Mr. James Williams',
                title: 'Vice Principal',
                image: '/placeholder-8.jpg',
              },
              {
                name: 'Ms. Emily Davis',
                title: 'Head of Academics',
                image: '/placeholder-9.jpg',
              },
            ].map((member, idx) => (
              <Card key={idx} className="text-center">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-900 font-semibold">{member.title}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Our Facilities"
            subtitle="Modern infrastructure for enhanced learning"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder-10.jpg"
                alt="School Facilities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ul className="space-y-4">
                {[
                  'Spacious and well-equipped classrooms with interactive boards',
                  'State-of-the-art STEM laboratory for hands-on learning',
                  'Modern library with extensive digital and print resources',
                  'Fully equipped science and computer labs',
                  'Indoor and outdoor sports facilities',
                  'Art and music rooms with quality instruments',
                  'Safe and secure campus with CCTV surveillance',
                  'Comfortable cafeteria with nutritious meals',
                  'Medical room with trained healthcare personnel',
                  'Transportation services with GPS tracking',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-900 font-bold text-xl mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
