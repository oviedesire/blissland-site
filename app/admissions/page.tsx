import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Admissions | Blissland Academy',
  description: 'Apply to Blissland Academy. Learn about the admission process, requirements, and fees.',
  openGraph: {
    title: 'Admissions | Blissland Academy',
    description: 'Join our school community',
  },
};

const faqItems = [
  {
    title: 'What is the admission process?',
    content: 'The admission process includes an inquiry, application, entrance assessment, and final enrollment. Please visit our admissions office for detailed guidance.',
  },
  {
    title: 'What are the entry requirements?',
    content: 'Students are evaluated based on their previous academic performance, entrance test scores, and an interview with school management.',
  },
  {
    title: 'When are admissions open?',
    content: 'Admissions are open throughout the year, with the main intake in December-January for the upcoming academic year.',
  },
  {
    title: 'Does your school offer scholarships?',
    content: 'Yes, merit-based and need-based scholarships are available for deserving students. Contact admissions for details.',
  },
  {
    title: 'What is the fee structure?',
    content: 'Fees vary by grade level. Contact our admissions office to receive the detailed fee structure and payment options.',
  },
  {
    title: 'Can I visit the school before applying?',
    content: 'Absolutely! We encourage parents and students to visit. You can schedule a campus tour through our contact page or by calling us.',
  },
];

export default function Admissions() {
  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'Admissions' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Admissions</h1>
          <p className="text-xl mt-4 text-blue-100">
            Join our school community
          </p>
        </Container>
      </section>

      {/* Admission Process Timeline */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Admission Process"
            subtitle="Step-by-step guide to joining New Life School"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                step: '1',
                title: 'Inquiry',
                description: 'Contact our admissions office to learn about school programs and request prospectus',
              },
              {
                step: '2',
                title: 'Application',
                description: 'Submit completed application form with required documents',
              },
              {
                step: '3',
                title: 'Assessment',
                description: 'Student takes entrance test and attends interview with school management',
              },
              {
                step: '4',
                title: 'Enrollment',
                description: 'Complete fee submission and finalize enrollment process',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="absolute left-6 top-full h-8 w-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Admission Requirements"
            subtitle="Documents and criteria needed for admission"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Documentation</h3>
              <ul className="space-y-3">
                {[
                  'Birth certificate (certified copy)',
                  'Previous school transfer certificate',
                  'Academic records and report cards',
                  'Character certificate from previous school',
                  'Medical and immunization records',
                  'Parent/Guardian ID proofs',
                  'Recent passport-size photographs',
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-900 font-bold">✓</span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Admission Criteria</h3>
              <ul className="space-y-3">
                {[
                  'Age appropriate for grade level',
                  'Satisfactory performance in entrance assessment',
                  'Good behavioral and moral character',
                  'Ability to participate in school activities',
                  'Completion of medical examination',
                  'Parent commitment to school values',
                ].map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-900 font-bold">✓</span>
                    <span className="text-gray-700">{criterion}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Fee Structure & Downloads */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Fee Structure & Documents"
            subtitle="Download our admission forms and handbook"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center">
              <p className="text-4xl mb-4">📄</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Admission Form
              </h3>
              <p className="text-gray-600 mb-4">
                Complete the application form to begin the admission process
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Download PDF
              </a>
            </Card>

            <Card className="text-center">
              <p className="text-4xl mb-4">📖</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                School Handbook
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about school policies, rules, and facilities
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Download PDF
              </a>
            </Card>

            <Card className="text-center">
              <p className="text-4xl mb-4">💰</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Fee Structure
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed fee information by grade level
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Download PDF
              </a>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-gray-700">
              <strong>Note:</strong> Fee structure varies by grade level. Payment options include annual, semi-annual, quarterly, and monthly plans. Need-based scholarships and fee concessions are available. Contact our admissions office for specific fee details and payment arrangements.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get answers to common admission questions"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Start your journey at New Life School. Contact our admissions team today!
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-900 hover:bg-gray-100">
              Contact Admissions
            </Button>
          </Link>
        </Container>
      </section>
    </main>
  );
}
