import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Academics | Blissland Academy',
  description: 'Explore our comprehensive academic programs from Nursery to Secondary at Blissland Academy.',
  openGraph: {
    title: 'Academics at Blissland Academy',
    description: 'Quality education with modern curriculum',
  },
};

const academicsData = {
  nursery: {
    overview: 'Our nursery program focuses on early childhood development through play-based learning, fostering curiosity, creativity, and social skills.',
    highlights: [
      'Phonics and early literacy foundations',
      'Numeracy through interactive games and activities',
      'Art, music, and creative expression',
      'Physical education and motor skills development',
      'Moral and values education',
      'Social-emotional learning',
    ],
    activities: [
      'Daily circle time and storytelling',
      'Outdoor play and exploration',
      'Art and craft projects',
      'Music and movement activities',
      'Role-playing and imaginative play',
      'Parent engagement programs',
    ],
  },
  primary: {
    overview: 'Our primary program builds strong foundations in literacy and numeracy while emphasizing critical thinking, creativity, and collaborative learning.',
    highlights: [
      'Comprehensive English and Language Arts',
      'Mathematics with problem-solving focus',
      'Science with hands-on experiments',
      'Social Studies and Global Awareness',
      'Arts (Visual Arts, Music, Dance)',
      'Physical Education and Life Skills',
    ],
    activities: [
      'Project-based learning activities',
      'Science fairs and exhibitions',
      'Inter-class competitions and events',
      'Field trips and excursions',
      'Digital literacy and coding basics',
      'Leadership and teamwork programs',
    ],
  },
  secondary: {
    overview: 'Our secondary program prepares students for higher education with advanced curriculum, critical thinking, and preparation for competitive exams.',
    highlights: [
      'Advanced Language Arts and Literature',
      'Higher Mathematics and Science subjects',
      'Social Sciences and History',
      'Elective courses in specialized subjects',
      'Digital literacy and computer science',
      'Life skills and personality development',
    ],
    activities: [
      'Science exhibitions and competitions',
      'Debate and public speaking clubs',
      'Student leadership councils',
      'Career guidance and counseling',
      'Study tours and educational trips',
      'Preparation for board and entrance exams',
    ],
  },
};

export default function Academics() {
  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'Academics' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Our Academics</h1>
          <p className="text-xl mt-4 text-blue-100">
            Comprehensive, innovative, and values-based education
          </p>
        </Container>
      </section>

      {/* Academic Sections */}
      {Object.entries(academicsData).map(([level, data]) => (
        <section
          key={level}
          className={level === 'primary' ? 'bg-gray-50 py-16 md:py-20' : 'py-16 md:py-20'}
        >
          <Container>
            <h2 className="text-4xl font-bold text-blue-900 mb-6 capitalize">
              {level === 'nursery' ? 'Nursery Program' : level === 'primary' ? 'Primary Program' : 'Secondary Program'}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              {data.overview}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Curriculum Highlights
                </h3>
                <ul className="space-y-3">
                  {data.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg">
                        •
                      </span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Typical Activites
                </h3>
                <ul className="space-y-3">
                  {data.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-900 font-bold text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/admissions">
              <Button>Learn More & Enroll</Button>
            </Link>
          </Container>
        </section>
      ))}

      {/* Teaching Methodology */}
      <section className="py-16 md:py-20 bg-blue-50">
        <Container>
          <SectionHeading
            title="Our Teaching Methodology"
            subtitle="We combine traditional teaching with modern pedagogical approaches"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Student-Centric Learning',
                description: 'Lessons are designed around student interests and learning styles to maximize engagement.',
              },
              {
                title: 'Hands-On Activities',
                description: 'Practical, experiential learning through projects, experiments, and real-world applications.',
              },
              {
                title: 'Technology Integration',
                description: 'Leveraging modern educational technology to enhance learning outcomes and digital literacy.',
              },
              {
                title: 'Collaborative Learning',
                description: 'Group projects and teamwork to develop communication and cooperation skills.',
              },
              {
                title: 'Critical Thinking',
                description: 'Encouraging problem-solving, analysis, and independent thinking skills.',
              },
              {
                title: 'Holistic Development',
                description: 'Balancing academic excellence with character development and life skills.',
              },
            ].map((method, idx) => (
              <Card key={idx}>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Assessment */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Student Assessment"
            subtitle="Comprehensive evaluation methods to track progress"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              'Continuous Assessment',
              'Formative Tests',
              'Project Work',
              'Participation & Skills',
            ].map((method, idx) => (
              <Card key={idx} className="text-center">
                <p className="text-2xl mb-2">📊</p>
                <h3 className="text-lg font-bold text-gray-900">{method}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
