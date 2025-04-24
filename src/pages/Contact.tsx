import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+971 545458167",
    link: "https://wa.me/+971545458167",
    description: "Monday to Friday, 9am to 6pm"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "hello@aieera.com",
    link: "mailto:hello@aieera.com",
    description: "24/7"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Office",
    details: "Naif,deira",
    description: "Dubai"
  }
];

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
  
    try {
      const form = new FormData();
      form.append("firstName", formData.firstName);
      form.append("lastName", formData.lastName);
      form.append("email", formData.email);
      form.append("message", formData.message);
  
      await fetch('https://script.google.com/macros/s/AKfycbwHJjzsa1Q6Vkn135Tscxz0eavwjOLigkA2hBiebXA5GL8a8x8i2aYWnNMUTZ1nlrK7/exec', {
        method: 'POST',
        body: form,
      });
  
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Get in
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900">
              Touch
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with us to discover how our AI solutions can transform your digital marketing strategy.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full inline-block text-white mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
              {method.link ? (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium mb-1 block hover:underline"
                >
                  {method.details}
                </a>
              ) : (
                <p className="text-gray-900 font-medium mb-1">{method.details}</p>
              )}
              <p className="text-gray-600">{method.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-xl p-8 max-w-2xl mx-auto"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
            {success && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
