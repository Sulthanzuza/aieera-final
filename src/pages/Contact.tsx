import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

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

const successMessageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Reset the submission status when user starts typing again
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare data for FormSubmit
    const formSubmitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formSubmitData.append(key, value);
    });
    
    // Add the hidden fields
    formSubmitData.append('_captcha', 'false');
    formSubmitData.append('_subject', 'New Contact Form Submission');
    formSubmitData.append('_next', window.location.href); // Ensures we stay on the same page
    
    try {
      // Use fetch to submit the form data
      const response = await fetch('https://formsubmit.co/ajax/hello@aieera.com', {
        method: 'POST',
        body: formSubmitData
      });
      
      if (response.ok) {
        // Form submitted successfully
        setIsSubmitted(true);
        // Reset form fields
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        
        // Scroll to the top of the form to ensure the success message is visible
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Handle error
        console.error('Form submission failed');
        alert('There was an error submitting the form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
          id="contact-form"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="glass-card rounded-xl p-8 max-w-2xl mx-auto"
        >
<AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                variants={successMessageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mb-6 flex flex-col items-center text-center"
              >
                <CheckCircle className="h-12 w-12 text-gray-800 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-4">Thank you for contacting us. We'll be in touch soon.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;