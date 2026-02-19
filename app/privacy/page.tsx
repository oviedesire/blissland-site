import type { Metadata } from 'next';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Blissland Academy',
  description: 'Privacy policy for Blissland Academy website',
};

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'Privacy Policy' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-xl mt-4 text-blue-100">
            Your privacy matters to us
          </p>
        </Container>
      </section>

      <article className="py-16 md:py-20">
        <Container className="max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                Blissland Academy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect on this site includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Information you provide when filling out forms (admissions forms, contact forms, etc.)</li>
                <li>Automatically collected information (IP address, browser type, device information, etc.)</li>
                <li>Information about your usage of the website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3. Use of Your Information
              </h2>
              <p className="leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Process admission applications and inquiries</li>
                <li>Send periodic emails regarding your inquiry or account</li>
                <li>Generate analytics data</li>
                <li>Improve the website and services</li>
                <li>Respond to your inquiries and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5. Security of Your Information
              </h2>
              <p className="leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                6. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>New Life School</strong><br />
                123 School Lane<br />
                City, State 12345<br />
                Email: info@newlifeschool.edu<br />
                Phone: (123) 456-7890
              </p>
            </section>

            <section className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().getFullYear()}
              </p>
            </section>
          </div>
        </Container>
      </article>
    </main>
  );
}
