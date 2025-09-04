import React from 'react';
import { motion } from 'framer-motion';
import { Helmet,HelmetProvider } from 'react-helmet-async';
import Logo from "../assets/Single logo with white gradient.webp"; 

const About = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <div className="min-h-screen pt-16 bg-black">
      <HelmetProvider>
               <Helmet>
              <title> Top AI Digital Marketing Agency in Dubai | Smart Online Marketing</title>
              <meta name="description" content=" We are a leading AI-powered digital marketing agency in Dubai, offering intelligent online marketing solutions to help your brand grow smarter and faster." />
              <meta name="keywords" content="digital marketing agency in dubai, online marketing agency, ai digital marketing agency." />
              <meta property="og:title" content=" Top AI Digital Marketing Agency in Dubai | Smart Online Marketing" />
              <meta property="og:description" content=" We are a leading AI-powered digital marketing agency in Dubai, offering intelligent online marketing solutions to help your brand grow smarter and faster." />
              <meta property="og:url" content={currentUrl} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="aieera" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="aieera" />
              <meta name="language" content="English" />
              <link rel="canonical" href={currentUrl} />
              </Helmet>
            </HelmetProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16 "
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-400 mb-8">
            About aieera <br/> Redefining Technology & Marketing
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Partner with us to unlock breakthrough growth, gain access to advanced technologies, and benefit from a dedication to future success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            
            <div>
              <h2 className="text-3xl font-bold text-gray-300 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-300" style={{ textAlign: 'justify' }}>
              At aieera, we are a Dubai based, future ready, AI digital marketing agency dedicated to assisting brands in expanding with faithfulness. We offer specific strategies using the most advanced tools of AI as well as real time insights, allowing your company to grow alongside today’s constantly evolving market with our online marketing agency</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-300 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300" style={{ textAlign: 'justify' }}>
              Our goal is to assist companies with AI based digital marketing solutions that enable intelligent decision making and sustainable success. We subscribe to long-lasting partnerships that deliver measurable success as well as digital transformation to each of our clients. </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-300 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-300" >
              Selecting aieera is selecting a team that breathes, sleeps, and wakes up for renovating. As a digital marketing agency based out of Dubai, “We get it done” by using our creativity, team effort, and AI for getting the job done. We're not only marketers, we're your team players. Our staff doesn't punch a clock, they bring your dreams to the table. Innovation is not only encouraged here it is embraced. </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-300 mb-4">Discover New Opportunities for Your Business through aieera, Your Digital Marketing Agency in Dubai</h2>
              <p className="text-lg text-gray-300" style={{ textAlign: 'justify' }}>
              Join forces with aieera, a top online agency, and be propelled by artificial intelligence-driven breakthrough growth. Leverage powerful technologies and a team geared toward your success.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:sticky lg:top-24"
          >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full opacity-20 blur-2xl" />  <div className="relative flex justify-center items-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-full max-w-md aspect-square relative"
              >
                <img src={Logo} alt="aieera digital marketing"  loading="lazy" className="w-full h-full object-contain  brightness-90 " />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-gray-500 to-slate-900 rounded-full opacity-10 blur-3xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;