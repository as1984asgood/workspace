import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function ProfileCard() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <Card variant="elevated" className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-3xl mb-6 overflow-hidden">
            {personalInfo.imageUrl ? (
              <img
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            ) : (
              personalInfo.name.charAt(0)
            )}
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {personalInfo.title}
          </p>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 mb-6 text-gray-600 dark:text-gray-400">
            {personalInfo.email && (
              <p>
                <span className="font-semibold">Email:</span> {personalInfo.email}
              </p>
            )}
            {personalInfo.phone && (
              <p>
                <span className="font-semibold">Phone:</span> {personalInfo.phone}
              </p>
            )}
            {personalInfo.location && (
              <p>
                <span className="font-semibold">Location:</span> {personalInfo.location}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {personalInfo.social.email && (
              <a
                href={`mailto:${personalInfo.social.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition"
                aria-label="Email"
              >
                <MdEmail size={24} />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
