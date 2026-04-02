/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Scissors, 
  Sparkles, 
  Heart, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Data ---

const BUSINESS_NAME = "Swag Unisex Salon";
const PHONE_NUMBER = "9059600699";
const WHATSAPP_NUMBER = "9059600699";
const ADDRESS = "Suraram Main Rd, 2nd Floor, UPPALA'S Arcade, APHB Colony, Suraram, Hyderabad, Telangana 500055";
const MAPS_LINK = "https://maps.app.goo.gl/2A7s9nhLrfdpJE4C9";

const SERVICES = [
  {
    title: "Hair Styling & Straightening",
    description: "Expert cuts, vibrant coloring, and professional straightening for a flawless look.",
    icon: <Scissors className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Facials & Bleaching",
    description: "Rejuvenating skin treatments designed to bring out your natural glow.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Pedicure & Manicure",
    description: "Complete nail care and relaxation for your hands and feet.",
    icon: <Heart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Function & Bridal Makeup",
    description: "Stunning makeup artistry for your most special occasions.",
    icon: <Star className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    name: "Anjali Sharma",
    review: "The best bridal makeup experience I've ever had. They really understood what I wanted and made me look stunning for my big day!",
    rating: 5
  },
  {
    name: "Rahul Verma",
    review: "Professional hair styling at its best. The staff is friendly and the atmosphere is very premium. Highly recommended for men's grooming too.",
    rating: 5
  },
  {
    name: "Priya Reddy",
    review: "Excellent facial services. My skin felt so refreshed and glowing. The hygiene standards are top-notch.",
    rating: 5
  }
];

const FAQS = [
  {
    question: "Do you offer home services?",
    answer: "Yes, we offer specialized home services for Bridal Makeup to ensure you are comfortable on your special day."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open every day from 8:00 AM to 9:30 PM."
  },
  {
    question: "Do I need to book an appointment?",
    answer: "While we accept walk-ins, we highly recommend booking an appointment to avoid waiting times, especially on weekends."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <Scissors className="text-zinc-950 w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            Swag <span className="text-[#D4AF37]">Unisex</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#D4AF37] text-zinc-950 px-6 py-2 rounded-full text-sm font-bold hover:bg-[#C5A028] transition-all shadow-lg hover:shadow-[#D4AF37]/20"
          >
            CALL NOW
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-[#D4AF37]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="bg-[#D4AF37] text-zinc-950 p-4 rounded-xl text-center font-bold"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2000&auto=format&fit=crop" 
          alt="Salon Interior" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Premium Beauty Parlour
            </span>
            <div className="mb-6">
              <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase">
                <span className="text-[#D4AF37]">Swag</span>
                <br />
                <span className="text-white text-3xl md:text-5xl tracking-[0.2em] block mt-2">Unisex Salon</span>
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-[#FF00FF] font-bold tracking-widest text-lg md:text-2xl uppercase">Hair & Beauty</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-8 bg-zinc-700" />
              <span className="text-white font-serif italic text-xl md:text-3xl tracking-wide">The Beauty Expert</span>
              <div className="h-px w-8 bg-zinc-700" />
            </div>

            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              Experience the ultimate transformation with Suraram's most trusted beauty specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#booking-box"
                className="bg-[#D4AF37] text-zinc-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all"
              >
                BOOK NOW <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                VIEW SERVICES
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8 text-zinc-500"
          >
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">8 AM - 9:30 PM</span>
              <span className="text-xs uppercase tracking-widest">Open Daily</span>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">Suraram, HYD</span>
              <span className="text-xs uppercase tracking-widest">Local Experts</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-zinc-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
              Crafted <span className="text-[#D4AF37]">Services</span>
            </h3>
          </div>
          <p className="text-zinc-400 max-w-md text-right hidden md:block">
            From daily grooming to your most important life events, we provide specialized care for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-zinc-950 transition-colors duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="flex items-center text-[#D4AF37] text-xs font-bold tracking-widest uppercase gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 cursor-pointer">
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    title: "Signature Wavy Highlights"
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
    title: "Professional Salon Styling"
  },
  {
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
    title: "Precision Layered Cut"
  },
  {
    url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
    title: "Vibrant Red Highlights"
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    title: "Before & After Transformation"
  },
  {
    url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
    title: "The Beauty Expert Finish"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase">Visual <span className="text-[#D4AF37]">Gallery</span></h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-8">
                <span className="text-white font-bold text-xs md:text-lg uppercase tracking-wider">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/Swag+Unisex+Salon/@17.5424729,78.4335273,17z/data=!4m8!3m7!1s0x3bcb8f9e2f34b243:0xb08fe1c5fb7927d7!8m2!3d17.5424729!4d78.4335273!9m1!1b1!16s%2Fg%2F11tbr8jcv8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-bold border border-[#D4AF37]/30 px-6 py-3 rounded-full hover:bg-[#D4AF37] hover:text-zinc-950 transition-all"
          >
            VIEW MORE ON GOOGLE MAPS <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-zinc-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop" 
                alt="Stylist at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-10 rounded-[30px] hidden md:block shadow-2xl">
              <div className="text-zinc-950 text-center">
                <span className="block text-5xl font-black">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest">Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">About Swag Salon</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-8">
              Where Beauty Meets <span className="text-[#D4AF37]">Excellence</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Located in the heart of Suraram, Swag Unisex Salon is more than just a beauty parlour. We are a sanctuary of style and relaxation, dedicated to providing premium grooming services for both men and women.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Expert Stylists & Beauticians",
                "Premium International Products",
                "Strict Hygiene Protocols",
                "Personalized Consultation"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-[#D4AF37] w-5 h-5" />
                  {item}
                </div>
              ))}
            </div>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-all"
            >
              TALK TO OUR EXPERTS <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Client Love</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase">Real <span className="text-[#D4AF37]">Stories</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 p-10 rounded-[40px] border border-zinc-800 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-zinc-300 text-lg italic leading-relaxed mb-8">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">
                  {t.name[0]}
                </div>
                <span className="text-white font-bold">{t.name}</span>
              </div>
              <div className="absolute top-10 right-10 text-zinc-800">
                <Sparkles className="w-12 h-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-950 rounded-[60px] overflow-hidden shadow-2xl border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-12">
                Visit <span className="text-[#D4AF37]">Us Today</span>
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 border border-zinc-800">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-zinc-400 leading-relaxed">{ADDRESS}</p>
                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] text-sm font-bold mt-2 inline-block hover:underline">GET DIRECTIONS</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 border border-zinc-800">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-zinc-400 leading-relaxed">+{PHONE_NUMBER}</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-[#D4AF37] text-sm font-bold mt-2 inline-block hover:underline">CALL NOW</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 border border-zinc-800">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-zinc-400 leading-relaxed">Mon - Sun: 8:00 AM - 9:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a href={`https://wa.me/91${WHATSAPP_NUMBER}`} className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-zinc-950 transition-all border border-zinc-800">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-zinc-950 transition-all border border-zinc-800">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-zinc-950 transition-all border border-zinc-800">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.819774635649!2d78.4313386!3d17.5424729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f9e2f34b243%3A0xb08fe1c5fb7927d7!2sSwag%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1711950000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale invert opacity-60"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
              <div id="booking-box" className="absolute bottom-12 left-12 right-12 scroll-mt-24">
                <div className="bg-[#D4AF37] p-8 rounded-3xl text-zinc-950">
                  <h4 className="font-black text-2xl uppercase mb-2">Ready for a change?</h4>
                  <p className="font-bold mb-6">Book your slot instantly via WhatsApp.</p>
                  <a 
                    href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                    className="bg-zinc-950 text-white px-8 py-4 rounded-xl font-bold inline-block hover:bg-zinc-800 transition-all"
                  >
                    WHATSAPP US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase">FAQ</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center text-white font-bold text-xl"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                >
                  <ChevronRight className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-8 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <Scissors className="text-zinc-950 w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                Swag <span className="text-[#D4AF37]">Unisex</span>
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              Your destination for premium beauty and grooming services in Hyderabad. We combine expertise with luxury to give you the best salon experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-[#D4AF37] transition-colors"><Instagram /></a>
              <a href="#" className="text-zinc-500 hover:text-[#D4AF37] transition-colors"><Facebook /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8">Contact Info</h4>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#D4AF37]" /> +{PHONE_NUMBER}</li>
              <li className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-[#D4AF37]" /> WhatsApp Support</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" /> {ADDRESS}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Designed for Excellence in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-[#D4AF37] selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden"
      >
        <a 
          href={`https://wa.me/91${WHATSAPP_NUMBER}`}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="w-14 h-14 bg-[#D4AF37] text-zinc-950 rounded-full flex items-center justify-center shadow-2xl"
        >
          <Phone className="w-7 h-7" />
        </a>
      </motion.div>
    </div>
  );
}
