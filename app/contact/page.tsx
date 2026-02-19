'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Container from '@/components/Container';
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone must be at least 10 digits';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <main className="min-h-screen">
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { label: 'Contact' },
          ]}
        />
      </Container>

      <section className="bg-blue-900 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4 text-blue-100">
            Get in touch with New Life School
          </p>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center">
              <p className="text-4xl mb-4">📍</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                123 School Lane<br />
                City, State 12345
              </p>
            </Card>

            <Card className="text-center">
              <p className="text-4xl mb-4">📞</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-blue-900">
                  (123) 456-7890
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Available weekdays 8 AM - 4 PM
              </p>
            </Card>

            <Card className="text-center">
              <p className="text-4xl mb-4">📧</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@blisslandacademy.edu" className="hover:text-blue-900">
                  info@blisslandacademy.edu
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Reply within 24 hours
              </p>
            </Card>
          </div>

          {/* Office Hours */}
          <div className="max-w-2xl mx-auto mb-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-semibold">Weekdays (Mon-Fri)</p>
                <p>8:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday</p>
                <p>9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="Send Us a Message"
            subtitle="Fill the form below and we'll get back to you soon"
          />

          <div className="max-w-2xl mx-auto mt-12">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <div className="text-center text-gray-500">
              <p className="text-xl font-semibold mb-2">📍 Academy Location</p>
              <p>123 School Lane, City, State 12345</p>
              <p className="text-sm mt-2">
                (Map integration with Google Maps API can be added here)
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
