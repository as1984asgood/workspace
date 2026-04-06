import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProfileCard } from '../components/about/ProfileCard';
import { Timeline } from '../components/about/Timeline';
import { personalInfo } from '../data/personal';
import { FiDownload } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="section-container pt-24 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-950 dark:to-blue-900/20">
        <SectionTitle>About Me</SectionTitle>
      </section>

      {/* Profile Card */}
      <section className="section-container py-12">
        <ProfileCard />
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Resume Download */}
      <section className="section-container py-12 bg-white dark:bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionTitle>Download My Resume</SectionTitle>
          {personalInfo.resume && (
            <a href={personalInfo.resume} download className="inline-block">
              <Button size="lg" variant="primary">
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </a>
          )}
        </motion.div>
      </section>
    </div>
  );
}
