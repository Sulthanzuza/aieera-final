import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; 
import Logo from "../assets/Logo large single.png"; 

const About = () => {
  return (
    <div className="min-h-screen pt-16 relative">
      <Helmet>
              
              <title> AI Digital Marketing Solutions | Automate Online Growth with AI</title>
              <meta name="description" content="We are a leading AI-powered digital marketing agency in Dubai, offering intelligent online marketing solutions to help your brand grow smarter and faster." />
              <meta name="keywords" content="digital marketing agency in dubai, online marketing agency, ai digital marketing agency." />
              <meta property="og:title" content=" AI Digital Marketing Solutions | Automate Online Growth with AI" />
              <meta property="og:description" content="We are a leading AI-powered digital marketing agency in Dubai, offering intelligent online marketing solutions to help your brand grow smarter and faster" />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="aieera" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="aieera" />
              <meta name="language" content="English" />
              
              
              <link rel="canonical" href={window.location.href} />
            </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Unlock New Possibilities
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900">
              with <span className="animated-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900">
              aieera
</span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              At aieera, we are a Dubai based, future ready, AI digital marketing agency dedicated to assisting brands in expanding with faithfulness. We offer specific strategies using the most advanced tools of AI as well as real time insights, allowing your company to grow alongside today’s constantly evolving market with our online marketing agency</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
              Our goal is to assist companies with AI based digital marketing solutions that enable intelligent decision making and sustainable success. We subscribe to long-lasting partnerships that deliver measurable success as well as digital transformation to each of our clients. </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600" >
              Selecting aieera is selecting a team that breathes, sleeps, and wakes up for renovating. As a digital marketing agency based out of Dubai, “We get it done” by using our creativity, team effort, and AI for getting the job done. We're not only marketers, we're your team players. Our staff doesn't punch a clock, they bring your dreams to the table. Innovation is not only encouraged here it is embraced. </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover New Opportunities for Your Business through aieera, Your Digital Marketing Agency in Dubai</h2>
              <p className="text-lg text-gray-600" style={{ textAlign: 'justify' }}>
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full opacity-20 blur-3xl" />  <div className="relative flex justify-center items-center">
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
                <img src={Logo} alt="logo" className="w-full h-full object-contain brightness-50 " />
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
                  className="absolute inset-0 bg-gradient-to-r from-gray-500 to-white-900 rounded-full opacity-10 blur-2xl"
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