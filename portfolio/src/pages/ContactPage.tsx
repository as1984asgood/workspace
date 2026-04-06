import emailjs from '@emailjs/browser';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import type { ContactMessage } from '../types';

// TODO: Replace with your actual EmailJS credentials
// Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxx'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxx'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'; // Replace with your public key

async function handleContactSubmit(message: ContactMessage) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: message.name,
        from_email: message.email,
        subject: message.subject,
        message: message.message,
      },
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="section-container pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-blue-900/20">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Have a project in mind or just want to chat? Feel free to reach out. I'm
          always interested in hearing about new opportunities and collaborations.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h2>
            <ContactForm onSubmit={handleContactSubmit} />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
