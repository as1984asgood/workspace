import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personal';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

export function ContactInfo() {
  const contactItems = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: personalInfo.phone ? `tel:${personalInfo.phone}` : undefined,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: personalInfo.social.github },
    { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.social.linkedin },
    { icon: FaInstagram, label: 'Instagram', href: personalInfo.social.instagram },
    { icon: FaYoutube, label: 'YouTube', href: personalInfo.social.youtube },
  ].filter((link) => link.href);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {contactItems
        .filter((item) => item.value)
        .map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.label} variants={itemVariants}>
              <Card variant="bordered" className="h-full flex flex-col items-center text-center p-8">
                <Icon className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                )}
              </Card>
            </motion.div>
          );
        })}

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <motion.div variants={itemVariants} className="md:col-span-3">
          <Card variant="bordered" className="flex flex-col items-center py-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 smooth-transition transform hover:scale-110"
                    aria-label={link.label}
                  >
                    <Icon size={32} />
                  </a>
                );
              })}
            </div>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
