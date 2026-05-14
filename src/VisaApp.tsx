// @ts-nocheck
/* eslint-disable */
import mobilePreview from '@/assets/mobile-preview.png';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { toast } from 'sonner';
import {
  Menu, X, Globe, Users, Briefcase, Mail, Phone, MapPin,
  ChevronRight, ArrowRight, CheckCircle2, Star, Quote,
  Building, Plane, MessageCircle, Home as HomeIcon, FileText, FileTextIcon,
  Award, Shield, Target, Zap, ChevronDown, ExternalLink,
  Calendar, Clock, Check, TrendingUp, Lightbulb, Heart,
  Search, Filter, Bookmark, Eye, Download, User, Settings,
  LogOut, Bell, ChevronLeft, Play, Pause, BookmarkCheck,
  AlertCircle, Info, CreditCard, DollarSign, BookOpen,
  PieChart, BarChart3, Activity, FolderOpen, Edit3,
  Camera, Upload, Lock, Key, GraduationCap, Wallet,
  Layers, ShieldCheck,
  BriefcaseBusiness,
  UserCheck, UsersRound, ClipboardCheck, Stamp,
  PlaneTakeoff, Landmark, Building2, BriefcaseMedical,
  ShieldAlert, FileBadge, ClipboardList, EyeOff,
  CheckCheck, AlertTriangle, ArrowUpRight,
  ChevronUp, Plus, Minus, Copy, Share2, Sparkles,
  Headphones, Monitor, Wifi, Coffee, Mountain,
  Sun, Moon, Cloud, Droplets, Wind,
  Mic, Radio, Tv, Music, Film,
  Languages, Map, Clock4
} from 'lucide-react';


// --- BRAND CONFIG ---
const BRAND = {
  name: 'VisaHOBe Pte. Ltd.',
  colors: { primary: '#6C5CE7', red1: '#6C5CE7', red2: '#FD79A8', gray: '#6E7580', gold: '#A29BFE', dark: '#2D1B69' }
};

// --- ANIMATED SECTION ---
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={domRef} className={`transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// --- COUNTER ANIMATION ---
const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { if (entries[0]?.isIntersecting) setIsVisible(true); });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);
  return <span ref={domRef}>{count}{suffix}</span>;
};

// --- PARALLAX SECTION ---
const ParallaxSection = ({ image, title, subtitle, subtitleBelow }) => (
  <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#2D1B69]/90 via-[#6C5CE7]/70 to-[#2D1B69]/90"></div>
    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#A29BFE]"></div>
        <div className="w-3 h-3 rounded-full bg-[#A29BFE] animate-pulse"></div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#A29BFE]"></div>
      </div>
      <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-sm mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{subtitle}</h4>
      <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">{title}</h2>
      {subtitleBelow && (
        <div className="mt-8 flex justify-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
          <span>Home</span><span>/</span><span className="text-white">{subtitleBelow}</span>
        </div>
      )}
    </div>
  </div>
);

// --- HERO SLIDER ---
const HeroSlider = ({ navigate }) => {
  const slides = [
    { image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000', title: 'Global Opportunities', subtitle: 'Your Gateway to', desc: 'Trusted partner for manpower recruitment and comprehensive visa processing services worldwide.', cta: 'Explore Services' },
    { image: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=2000', title: 'Seamless Transitions', subtitle: 'Experience', desc: 'End-to-end immigration support ensuring full legal compliance for your corporate mobility.', cta: 'Learn More' },
    { image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000', title: 'Expert Consulting', subtitle: 'Strategic', desc: 'Professional guidance for international workforce planning and regulatory compliance.', cta: 'Get Started' }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#2D1B69]">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B69]/95 via-[#6C5CE7]/70 to-transparent z-10"></div>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-80" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full mt-16">
              <div className="max-w-3xl border-l-4 border-[#A29BFE] pl-8">
                <div className="inline-flex items-center gap-3 mb-8 text-[#A29BFE] text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: 'Playfair Display, serif' }}><Globe className="h-4 w-4" /> Connecting Global Talent</div>
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
                  <span className="block text-3xl md:text-5xl font-light text-white/80 mb-4 tracking-normal" style={{ fontFamily: 'Playfair Display, serif' }}>{slide.subtitle}</span>{slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-light border-t border-white/20 pt-6 mt-6">{slide.desc}</p>
                <div className="flex gap-4">
                  <button onClick={() => navigate('/services')} className="group relative overflow-hidden bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300">
                    <span className="relative z-10 flex items-center">{slide.cta} <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
                  </button>
                  <button onClick={() => navigate('/contact')} className="border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#6C5CE7] transition-all duration-300">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-12 left-6 lg:left-auto lg:right-12 z-30 flex gap-4 items-center">
        <span className="text-white/50 text-xs font-bold tracking-widest">0{current + 1}</span>
        <div className="flex gap-2">{slides.map((_, idx) => <button key={idx} onClick={() => setCurrent(idx)} className={`h-[2px] transition-all duration-500 ${current === idx ? 'w-16 bg-[#A29BFE]' : 'w-8 bg-white/30 hover:bg-white/60'}`} />)}</div>
        <span className="text-white/50 text-xs font-bold tracking-widest">0{slides.length}</span>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 animate-bounce"><ChevronDown className="h-8 w-8 text-white/50" /></div>
    </div>
  );
};

// --- PARTNERS MARQUEE ---
const PartnersMarquee = () => {
  const partners = ["TechCorp Global", "Nexus Industries", "MediHealth Group", "BuildRight Const.", "FinServe Int.", "AeroSpace Tech", "Global Logistics", "Prime Energy", "EcoPower Solutions", "MedTech Innovations"];
  return (
    <div className="bg-[#2D1B69] py-10 overflow-hidden relative flex items-center border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#2D1B69] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#2D1B69] to-transparent z-10"></div>
      <div className="flex w-fit animate-marquee whitespace-nowrap">{[...partners, ...partners, ...partners].map((partner, idx) => <div key={idx} className="mx-12 text-lg font-bold text-white/30 uppercase tracking-[0.2em] flex items-center"><Building className="mr-4 h-5 w-5 opacity-50" /> {partner}</div>)}</div>
    </div>
  );
};

// --- TESTIMONIALS CAROUSEL ---
const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    { text: "VisaHOBe streamlined our entire corporate relocation process. Absolute professionals with unmatched global reach.", author: "James Wilson", role: "HR Director, TechCorp Global" },
    { text: "The fastest, most transparent visa processing we have ever experienced. Highly recommended for enterprises.", author: "Sarah Jenkins", role: "Operations Lead, Nexus Industries" },
    { text: "Their global manpower sourcing provided us with top-tier engineering talent in a matter of weeks.", author: "Ali Rahman", role: "CEO, BuildRight Const." },
    { text: "Outstanding support for our healthcare staff deployment. They handled everything seamlessly.", author: "Dr. Michael Chen", role: "Director, MediHealth Group" }
  ];
  useEffect(() => {
    const timer = setInterval(() => setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return (
    <section className="py-32 bg-white overflow-hidden relative border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="md:w-1/3">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Testimonials</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight leading-tight">Client<br/>Perspectives</h2>
          </div>
          <div className="md:w-2/3 border-l border-gray-200 pl-8"><p className="text-gray-500 font-light leading-relaxed">Discover why industry leaders trust our rigorous processes and global network.</p></div>
        </div>
        <div className="relative min-h-[300px]">
          {testimonials.map((test, idx) => (
            <div key={idx} className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-t border-gray-200">
                {[test, testimonials[(idx + 1) % testimonials.length], testimonials[(idx + 2) % testimonials.length]].map((t, i) => (
                  <div key={`${idx}-${i}`} className={`p-12 ${i !== 2 ? 'md:border-r' : ''} border-b md:border-b-0 border-gray-200 hover:bg-gray-50 transition-colors`}>
                    <Quote className="h-10 w-10 text-[#A29BFE] mb-8 opacity-20" />
                    <p className="text-xl leading-relaxed mb-12 font-light text-gray-700" style={{ fontFamily: 'Playfair Display, serif' }}>"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#6C5CE7] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{t.author.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#6C5CE7] text-sm uppercase tracking-wider">{t.author}</h4>
                        <p className="text-[#6E7580] text-xs font-medium uppercase tracking-wider mt-1">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-12">{testimonials.map((_, idx) => <button key={idx} onClick={() => setActiveIndex(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#A29BFE] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />)}</div>
      </div>
    </section>
  );
};

// --- FAQ ITEM ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-8 flex items-center justify-between text-left group">
        <h4 className="text-lg font-bold text-[#6C5CE7] group-hover:text-[#A29BFE] transition-colors pr-8" style={{ fontFamily: 'Playfair Display, serif' }}>{question}</h4>
        <ChevronRight className={`h-5 w-5 text-[#A29BFE] transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}><p className="text-gray-500 leading-relaxed font-light">{answer}</p></div>
    </div>
  );
};

// --- NAVBAR (sticky, no mobile menu — horizontal scroll on small screens) ---
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/countries', label: 'Countries' },
  { path: '/jobs', label: 'Jobs' },
  { path: '/documents', label: 'Documents' },
  { path: '/study', label: 'Study' },
  { path: '/invest', label: 'Invest' },
  { path: '/news', label: 'News' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/book', label: 'Book' },
];
const Navbar = ({ currentPath, navigate }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleNavigate = (path) => { navigate(path); setDrawerOpen(false); };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    if (drawerOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 lg:py-4">
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-center cursor-pointer shrink-0" onClick={() => handleNavigate('/')}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-[#A29BFE] to-[#FD79A8] rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col border-l border-[#6C5CE7]/30 pl-3">
                  <span className="font-black text-lg sm:text-xl lg:text-2xl leading-none tracking-tight text-[#6C5CE7]">VisaHOBe</span>
                  <span className="text-[8px] lg:text-[9px] font-bold tracking-[0.3em] uppercase mt-1 text-[#6E7580]">Pte. Ltd.</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-5 lg:gap-7 justify-center min-w-max px-2">
                {NAV_LINKS.map(({ path, label }) => {
                  const active = currentPath === path || (currentPath.startsWith('/country') && path === '/countries');
                  return (
                    <button
                      key={path}
                      onClick={() => handleNavigate(path)}
                      className={`text-[11px] lg:text-xs font-bold tracking-widest uppercase transition-colors duration-200 relative py-2 whitespace-nowrap ${active ? 'text-[#A29BFE]' : 'text-[#6C5CE7] hover:text-[#A29BFE]'}`}
                    >
                      {label}
                      {active && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A29BFE]"></span>}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:flex gap-2 shrink-0">
              <button onClick={() => handleNavigate('/profile')} className="px-5 py-2.5 font-bold text-xs tracking-widest uppercase transition-all border border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white rounded">Profile</button>
              <button onClick={() => handleNavigate('/book')} className="px-5 py-2.5 bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] text-white font-bold text-xs tracking-widest uppercase hover:shadow-lg transition-all rounded">Book</button>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#6C5CE7]/20 text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-[70] h-screen w-[85%] max-w-sm bg-[#2D1B69] text-white shadow-2xl transform transition-transform duration-300 ease-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!drawerOpen}
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#A29BFE] to-[#FD79A8] rounded-lg flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg leading-none tracking-tight">VisaHOBe</span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase mt-1 text-gray-400">Pte. Ltd.</span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)] pb-32">
          <nav className="flex flex-col px-2 py-4 divide-y divide-white/5">
            {NAV_LINKS.map(({ path, label }) => {
              const active = currentPath === path || (currentPath.startsWith('/country') && path === '/countries');
              return (
                <button
                  key={path}
                  onClick={() => handleNavigate(path)}
                  className={`flex items-center justify-between px-4 py-4 text-sm font-bold tracking-widest uppercase transition-colors ${active ? 'text-[#A29BFE]' : 'text-white hover:text-[#A29BFE]'}`}
                >
                  <span>{label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </button>
              );
            })}
          </nav>
          <div className="px-6 mt-6 flex flex-col gap-3">
            <button onClick={() => handleNavigate('/profile')} className="w-full px-5 py-3 font-bold text-xs tracking-widest uppercase border border-white/30 text-white hover:bg-white hover:text-[#6C5CE7] rounded transition-colors">Profile</button>
            <button onClick={() => handleNavigate('/book')} className="w-full px-5 py-3 bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] text-white font-bold text-xs tracking-widest uppercase rounded">Book Now</button>
          </div>
          <div className="px-6 mt-8 text-[10px] tracking-[0.25em] uppercase text-gray-500">
            © {new Date().getFullYear()} VisaHOBe Pte. Ltd.
          </div>
        </div>
      </aside>
    </>
  );
};

// --- MOBILE BOTTOM NAV ---
const MobileBottomNav = ({ currentPath, navigate }) => {
  const tabs = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/countries', icon: Globe, label: 'Countries' },
    { path: '/jobs', icon: Briefcase, label: 'Jobs' },
    { path: '/documents', icon: FileText, label: 'Documents' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#2D1B69] border-t border-white/10 z-50 pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPath === tab.path || (tab.path === '/countries' && currentPath.startsWith('/country'));
          return (
            <button key={tab.path} onClick={() => navigate(tab.path)} className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-[#A29BFE]' : 'text-gray-500'}`}>
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-bold tracking-wider uppercase">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// --- FOOTER ---
const Footer = ({ navigate }) => (
  <footer className="bg-[#2D1B69] text-white pt-32 pb-40 lg:pb-12 border-t border-[#A29BFE]/30">
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-20">
        <div className="col-span-2 md:col-span-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#A29BFE] to-[#FD79A8] rounded-xl flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4">
              <span className="font-black text-2xl text-white leading-none tracking-tight">VisaHOBe</span>
              <span className="text-[9px] text-gray-500 font-bold tracking-[0.3em] uppercase mt-1">Pte. Ltd.</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-light pr-4 mb-6">Global leaders in manpower recruitment and comprehensive visa agency services. Connecting talent with opportunities worldwide since 2010.</p>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, idx) => (
              <button key={idx} className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#A29BFE] transition-colors">
                <span className="text-xs font-bold">{social.charAt(0)}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 md:col-start-6">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#A29BFE]" style={{ fontFamily: 'Playfair Display, serif' }}>Company</h4>
          <ul className="space-y-4">
            {['About Us', 'Our Team', 'Careers', 'Press', 'Contact'].map((item) => <li key={item}><button onClick={() => navigate(`/${item.toLowerCase().replace(' ', '')}`)} className="text-gray-300 hover:text-[#A29BFE] transition-colors text-sm flex items-center gap-3 font-medium"><ChevronRight className="h-3 w-3" />{item}</button></li>)}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#A29BFE]" style={{ fontFamily: 'Playfair Display, serif' }}>Services</h4>
          <ul className="space-y-4">
            {['Work Visas', 'Study Visas', 'Business Visas', 'PR Applications', 'Recruitment'].map((item) => <li key={item}><button onClick={() => navigate('/services')} className="text-gray-300 hover:text-[#A29BFE] transition-colors text-sm flex items-center gap-3 font-medium"><ChevronRight className="h-3 w-3" />{item}</button></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-[#A29BFE]" style={{ fontFamily: 'Playfair Display, serif' }}>Corporate HQ</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-sm text-gray-300 font-light"><MapPin className="h-5 w-5 text-[#A29BFE] shrink-0" /><span className="leading-relaxed">10 Anson Road, #22-02<br/>International Plaza<br/>Singapore 079903</span></li>
            <li className="flex items-center gap-4 text-sm text-gray-300 font-light"><Phone className="h-5 w-5 text-[#A29BFE] shrink-0" /><span>+65 6222 1234</span></li>
            <li className="flex items-center gap-4 text-sm text-gray-300 font-light"><Mail className="h-5 w-5 text-[#A29BFE] shrink-0" /><span>info@visahobe.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-bold">
        <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Cookie Policy</button>
        </div>
      </div>
    </div>
  </footer>
);

// ====================================================================
// --- COUNTRY VISA DATA ---
// ====================================================================
const COUNTRY_VISA_DATA = {
  'Singapore': {
    flag: '🇸🇬',
    capital: 'Singapore',
    currency: 'SGD',
    language: 'English, Malay, Mandarin, Tamil',
    timezone: 'UTC+8',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600',
    description: 'Singapore is a global financial hub offering world-class infrastructure, low crime rates, and a thriving business environment. As one of Asia\'s most developed economies, it attracts professionals, students, and investors from around the world.',
    quickFacts: [
      { icon: Building2, label: 'GDP', value: '$466.7B' },
      { icon: Users, label: 'Population', value: '5.9M' },
      { icon: Languages, label: 'Languages', value: '4 Official' },
      { icon: Globe, label: 'Global Rank', value: '#1 (Business)' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Tourist / Short-Term Visit Pass',
            duration: 'Up to 30 days (extendable to 90)',
            processing: '3-5 working days',
            price: 'SGD 30',
            description: 'For tourism, sightseeing, or casual visits to friends and family in Singapore.',
            requirements: ['Valid passport (6+ months validity)', 'Confirmed return flight tickets', 'Proof of sufficient funds', 'Hotel reservation or invitation letter', 'Completed SG Arrival Card'],
            benefits: ['Multiple entry available', 'No sponsor required for eligible nationals', 'Extendable via ICA online'],
            eligibility: 'All nationalities (subject to visa requirements)',
            popular: true
          },
          {
            name: 'Business Visitor Pass',
            duration: 'Up to 30 days',
            processing: '3-5 working days',
            price: 'SGD 30',
            description: 'For attending business meetings, conferences, trade fairs, or exploratory business visits.',
            requirements: ['Valid passport (6+ months validity)', 'Letter of invitation from Singapore company', 'Business registration proof', 'Return flight tickets', 'Proof of funds'],
            benefits: ['Attend business meetings legally', 'Network with local businesses', 'No work permit required for meetings'],
            eligibility: 'Business professionals with valid invitation',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Employment Pass (EP)',
            duration: 'Up to 2 years (renewable)',
            processing: '3-8 weeks',
            price: 'SGD 105+',
            description: 'For foreign professionals, managers, and executives with job offers in Singapore. Minimum qualifying salary applies.',
            requirements: ['Fixed monthly salary ≥ SGD 5,600', 'Accepted qualifications (degree/professional)', 'COMPASS framework points ≥ 40', 'Valid job offer from Singapore employer', 'Clean criminal record'],
            benefits: ['Bring dependents (DP) on Dependant Pass', 'Eligible for Permanent Residency', 'No quota restrictions', 'Pathway to PR'],
            eligibility: 'Professionals earning ≥ SGD 5,600/month',
            popular: true
          },
          {
            name: 'S Pass',
            duration: 'Up to 2 years (renewable)',
            processing: '3-5 weeks',
            price: 'SGD 105+',
            description: 'For mid-skilled technical staff with job offers. Subject to quota and levy requirements.',
            requirements: ['Fixed monthly salary ≥ SGD 3,150', 'Technical diploma/certificate', 'Relevant work experience', 'Employer quota availability', 'Medical examination (if required)'],
            benefits: ['Bring dependents (subject to salary threshold)', 'Renewable', 'Access to local healthcare'],
            eligibility: 'Mid-skilled workers earning ≥ SGD 3,150/month',
            popular: false
          },
          {
            name: 'Work Permit',
            duration: 'Up to 2 years',
            processing: '1-7 working days',
            price: 'SGD 35+',
            description: 'For semi-skilled foreign workers in construction, manufacturing, marine shipyard, process, or service sectors.',
            requirements: ['Employer sponsorship required', 'Valid passport', 'Medical examination (within 2 weeks of entry)', 'Security bond (for non-Malaysian)', 'Source country restrictions apply'],
            benefits: ['Quick processing', 'Lower salary threshold', 'Sector-specific opportunities'],
            eligibility: 'Semi-skilled workers in approved sectors',
            popular: false
          },
          {
            name: 'ONE Pass (Overseas Networks & Expertise)',
            duration: 'Up to 5 years',
            processing: '4-8 weeks',
            price: 'SGD 200+',
            description: 'For top-tier talent with exceptional skills and leadership in arts, sports, science, technology, or business.',
            requirements: ['Fixed monthly salary ≥ SGD 30,000', 'OR outstanding achievements in respective field', 'Clean criminal record', 'Valid passport', 'Employer not required'],
            benefits: ['5-year validity', 'No employer sponsorship needed', 'Start/operate businesses in Singapore', 'Flexibility to change employers'],
            eligibility: 'Top talent earning ≥ SGD 30,000/month or with exceptional achievements',
            popular: false
          }
        ]
      },
      {
        category: 'Study',
        icon: GraduationCap,
        color: '#6C5CE7',
        bgGradient: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        visas: [
          {
            name: 'Student\'s Pass',
            duration: 'Course duration + 1 month',
            processing: '2-4 weeks',
            price: 'SGD 90',
            description: 'For international students enrolled in full-time courses at approved educational institutions in Singapore.',
            requirements: ['Acceptance letter from approved institution', 'Valid passport (6+ months)', 'Proof of financial support', 'Academic transcripts', 'Medical examination (if required)'],
            benefits: ['Work part-time during term breaks', 'Post-study work opportunities', 'Bring family members (in some cases)', 'Pathway to Employment Pass'],
            eligibility: 'Full-time students at approved institutions',
            popular: true
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Permanent Residence (PR)',
            duration: 'Indefinite (with 5-year renewal)',
            processing: '6-12 months',
            price: 'SGD 100',
            description: 'For foreign professionals, spouses of Singapore citizens/PRs, and investors seeking long-term residency.',
            requirements: ['Valid Employment Pass/S Pass', 'Minimum 6 months residence in Singapore', 'Tax contributions history', 'Community involvement', 'Financial stability proof'],
            benefits: ['No need to renew work pass', 'Access to CPF housing', 'Children access local schools', 'Pathway to citizenship'],
            eligibility: 'EP/S Pass holders, spouses, children, or investors',
            popular: true
          },
          {
            name: 'Dependant\'s Pass',
            duration: 'Tied to sponsor\'s pass validity',
            processing: '2-3 weeks',
            price: 'SGD 105',
            description: 'For spouses and unmarried children (under 21) of Employment Pass or S Pass holders.',
            requirements: ['Sponsor holds valid EP/S Pass', 'Sponsor earns ≥ SGD 6,000/month', 'Marriage certificate or birth certificate', 'Valid passport', 'Proof of relationship'],
            benefits: ['Live in Singapore legally', 'Work with Letter of Consent', 'Study at local institutions', 'Access to healthcare'],
            eligibility: 'Spouses and children of EP/S Pass holders',
            popular: false
          }
        ]
      },
      {
        category: 'Business & Investment',
        icon: Landmark,
        color: '#D97706',
        bgGradient: 'from-amber-50 to-amber-100/50',
        borderColor: 'border-amber-200',
        visas: [
          {
            name: 'Global Investor Programme (GIP)',
            duration: 'PR status (renewable)',
            processing: '6-12 months',
            price: 'SGD 2.5M+',
            description: 'For high-net-worth individuals and entrepreneurs seeking PR through business investment or entrepreneurial activity.',
            requirements: ['Business investment of SGD 10M+ OR', 'Fund investment of SGD 25M+ in GIP-approved funds', 'Track record of successful business', 'Business plan for Singapore operations', 'Background check and due diligence'],
            benefits: ['PR status for family', 'Tax-efficient investment environment', 'Access to Singapore business network', 'No physical presence requirement'],
            eligibility: 'Substantial business owners or investors',
            popular: false
          }
        ]
      }
    ]
  },
  'Japan': {
    flag: '🇯🇵',
    capital: 'Tokyo',
    currency: 'JPY',
    language: 'Japanese',
    timezone: 'UTC+9',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600',
    description: 'Japan offers cutting-edge technology, rich cultural heritage, and world-class living standards. With a strong economy and growing demand for skilled professionals, Japan is increasingly open to international talent.',
    quickFacts: [
      { icon: Building2, label: 'GDP', value: '$4.2T' },
      { icon: Users, label: 'Population', value: '125M' },
      { icon: Languages, label: 'Languages', value: 'Japanese' },
      { icon: Globe, label: 'Safety Rank', value: '#10 Global' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Temporary Visitor Visa (Tourist)',
            duration: 'Up to 90 days',
            processing: '5-7 working days',
            price: '¥3,000',
            description: 'For tourism, visiting friends/family, or short-term recreational activities.',
            requirements: ['Valid passport (6+ months)', 'Completed visa application form', 'Photo (4.5cm x 4.5cm)', 'Flight itinerary', 'Hotel reservation or invitation letter'],
            benefits: ['Visa exemption for eligible countries', 'Multiple entry options', 'Extendable in special circumstances'],
            eligibility: 'All nationalities (visa exemption applies to 68+ countries)',
            popular: true
          },
          {
            name: 'Business Visitor Visa',
            duration: 'Up to 90 days',
            processing: '5-7 working days',
            price: '¥3,000',
            description: 'For attending meetings, conferences, market research, or contract negotiations.',
            requirements: ['Invitation letter from Japanese company', 'Company registration documents', 'Employment verification letter', 'Return flight tickets', 'Detailed schedule of activities'],
            benefits: ['Conduct business meetings', 'Attend trade shows', 'Sign contracts (not employment)'],
            eligibility: 'Business professionals with Japanese host',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Engineer / Specialist in Humanities',
            duration: '1-5 years (renewable)',
            processing: '2-4 months',
            price: '¥4,000',
            description: 'For professionals working in IT, engineering, translation, marketing, finance, or other specialized fields.',
            requirements: ['University degree or 10+ years experience', 'Job offer from Japanese employer', 'Certificate of Eligibility (COE)', 'Employment contract details', 'Company registration documents'],
            benefits: ['Bring family (Dependent visa)', 'Pathway to Permanent Residence', 'Access to national health insurance', 'Renewable indefinitely'],
            eligibility: 'University graduates or experienced professionals',
            popular: true
          },
          {
            name: 'Highly Skilled Professional (HSP)',
            duration: 'Up to 5 years',
            processing: '2-3 months',
            price: '¥4,000',
            description: 'Points-based visa for highly qualified professionals, researchers, and business managers.',
            requirements: ['Minimum 70 points on HSP scale', 'Academic/professional qualifications', 'Job offer in Japan', 'Salary documentation', 'Clean criminal record'],
            benefits: ['Faster PR pathway (1-3 years)', 'Spouse can work full-time', 'Parents can reside in Japan', 'Multiple activities permitted'],
            eligibility: 'High-scoring professionals on points system',
            popular: false
          },
          {
            name: 'Specified Skilled Worker (SSW)',
            duration: 'Up to 5 years',
            processing: '1-3 months',
            price: '¥3,000',
            description: 'For workers in 14 specified industries facing labor shortages (nursing, construction, agriculture, etc.).',
            requirements: ['Pass skills test', 'Pass Japanese language test (N4 level)', 'Employer sponsorship', 'Industry-specific certification', 'Clean criminal record'],
            benefits: ['No degree required', 'Multiple industries available', 'Pathway to SSW Type 2 (indefinite)'],
            eligibility: 'Workers who pass skills and language tests',
            popular: false
          }
        ]
      },
      {
        category: 'Study',
        icon: GraduationCap,
        color: '#6C5CE7',
        bgGradient: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        visas: [
          {
            name: 'Student Visa',
            duration: 'Course duration (up to 4 years 3 months)',
            processing: '1-3 months',
            price: '¥4,000',
            description: 'For students enrolled in Japanese universities, language schools, or vocational colleges.',
            requirements: ['Acceptance from approved institution', 'Financial support proof (¥2M+ savings)', 'Academic transcripts', 'Certificate of Eligibility (COE)', 'Japanese language proficiency (for some programs)'],
            benefits: ['Work part-time up to 28 hrs/week', 'Access to scholarships', 'Post-graduation job search visa', 'Cultural immersion experience'],
            eligibility: 'Accepted students at Japanese institutions',
            popular: true
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Permanent Residence',
            duration: 'Indefinite',
            processing: '6-12 months',
            price: '¥8,000',
            description: 'For long-term residents who have lived in Japan for 10+ years (or less under certain conditions).',
            requirements: ['10+ years continuous residence (or less for HSP)', 'Good conduct record', 'Financial stability proof', 'Tax compliance history', 'Guarantor (Japanese national or PR)'],
            benefits: ['No visa renewal required', 'No work restrictions', 'Access to all social services', 'Pathway to naturalization'],
            eligibility: '10+ year residents or HSP visa holders',
            popular: false
          },
          {
            name: 'Spouse/Child of Japanese National',
            duration: '6 months - 5 years',
            processing: '1-3 months',
            price: '¥4,000',
            description: 'For spouses and children of Japanese nationals.',
            requirements: ['Marriage certificate or birth certificate', 'Japanese spouse\'s family registry', 'Proof of genuine relationship', 'Financial stability', 'Valid passport'],
            benefits: ['No work restrictions', 'Access to all visa categories', 'Renewable indefinitely', 'Pathway to PR'],
            eligibility: 'Spouses and children of Japanese nationals',
            popular: false
          }
        ]
      }
    ]
  },
  'Canada': {
    flag: '🇨🇦',
    capital: 'Ottawa',
    currency: 'CAD',
    language: 'English, French',
    timezone: 'UTC-3.5 to UTC-8',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600',
    description: 'Canada welcomes immigrants with open doors, offering a high quality of life, universal healthcare, and diverse employment opportunities. With programs like Express Entry and Provincial Nominee Programs, Canada is a top destination.',
    quickFacts: [
      { icon: Building2, label: 'GDP', value: '$2.1T' },
      { icon: Users, label: 'Population', value: '40M' },
      { icon: Languages, label: 'Languages', value: 'English, French' },
      { icon: Globe, label: 'Immigration Goal', value: '500K/year' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Visitor Visa (Temporary Resident Visa)',
            duration: 'Up to 6 months per entry',
            processing: '2-4 weeks',
            price: 'CAD 100',
            description: 'For tourism, visiting family/friends, or short-term business visits.',
            requirements: ['Valid passport', 'Proof of financial support', 'Travel itinerary', 'Ties to home country', 'Biometrics (fingerprints & photo)'],
            benefits: ['Multiple entry visa available', 'Visit for up to 6 months', 'Apply from inside or outside Canada'],
            eligibility: 'All nationalities (eTA required for visa-exempt countries)',
            popular: true
          },
          {
            name: 'Super Visa (Parents & Grandparents)',
            duration: 'Up to 5 years per entry',
            processing: '2-8 weeks',
            price: 'CAD 100',
            description: 'For parents and grandparents of Canadian citizens or permanent residents.',
            requirements: ['Letter of invitation from child/grandchild in Canada', 'Child\'s minimum income proof', 'Canadian medical insurance (1 year minimum)', 'Medical examination', 'Proof of relationship'],
            benefits: ['Stay up to 5 years per visit', 'Multiple entry for 10 years', 'No need to apply for extensions frequently'],
            eligibility: 'Parents and grandparents of Canadian citizens/PRs',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Work Permit (LMIA-based)',
            duration: 'Up to 3 years',
            processing: '2-12 weeks',
            price: 'CAD 155+',
            description: 'For workers with a job offer from a Canadian employer who has obtained a positive LMIA.',
            requirements: ['Valid job offer from Canadian employer', 'Positive Labour Market Impact Assessment (LMIA)', 'Proof of qualifications', 'Clean criminal record', 'Medical exam (if required)'],
            benefits: ['Work legally in Canada', 'Bring family members', 'Pathway to PR', 'Accumulate Canadian work experience'],
            eligibility: 'Workers with LMIA-approved job offers',
            popular: true
          },
          {
            name: 'International Experience Canada (IEC)',
            duration: '12-24 months',
            processing: '2-8 weeks',
            price: 'CAD 250',
            description: 'Working Holiday visa for young people from partner countries to work and travel in Canada.',
            requirements: ['Age 18-35 (varies by country)', 'Citizen of partner country', 'Valid passport', 'Proof of funds (CAD 2,500+)', 'Health insurance'],
            benefits: ['Open work permit', 'Travel and work freely', 'No LMIA required', 'Gain Canadian experience'],
            eligibility: 'Youth from 35+ partner countries',
            popular: false
          }
        ]
      },
      {
        category: 'Study',
        icon: GraduationCap,
        color: '#6C5CE7',
        bgGradient: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        visas: [
          {
            name: 'Study Permit',
            duration: 'Course duration + 90 days',
            processing: '4-12 weeks',
            price: 'CAD 150',
            description: 'For international students enrolled in designated learning institutions (DLIs) in Canada.',
            requirements: ['Letter of acceptance from DLI', 'Proof of financial support (CAD 20,635+)', 'Statement of purpose', 'Clean criminal record', 'Medical examination (if required)'],
            benefits: ['Work part-time up to 20 hrs/week', 'Post-Graduation Work Permit (PGWP)', 'Spouse can get open work permit', 'Pathway to PR'],
            eligibility: 'Accepted students at Canadian DLIs',
            popular: true
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Express Entry (Federal Skilled Worker)',
            duration: 'PR status (5-year card)',
            processing: '6-12 months',
            price: 'CAD 1,365+',
            description: 'Points-based immigration system for skilled workers seeking permanent residence in Canada.',
            requirements: ['Minimum 1 year skilled work experience', 'Language test (IELTS/CELPIP)', 'Educational Credential Assessment (ECA)', 'CRS score meets draw threshold', 'Proof of funds'],
            benefits: ['Permanent residence', 'Work anywhere in Canada', 'Access to healthcare and education', 'Pathway to citizenship in 3 years'],
            eligibility: 'Skilled workers meeting CRS threshold',
            popular: true
          },
          {
            name: 'Provincial Nominee Program (PNP)',
            duration: 'PR status',
            processing: '12-18 months',
            price: 'CAD 1,365+',
            description: 'Provincial immigration programs tailored to local labor market needs.',
            requirements: ['Nomination from a province/territory', 'Job offer (in most streams)', 'Minimum work experience', 'Language proficiency', 'Intent to reside in province'],
            benefits: ['600 additional CRS points', 'Lower score requirements', 'Targeted to local needs', 'Faster processing in some cases'],
            eligibility: 'Workers meeting provincial criteria',
            popular: false
          }
        ]
      }
    ]
  },
  'UAE': {
    flag: '🇦🇪',
    capital: 'Abu Dhabi / Dubai',
    currency: 'AED',
    language: 'Arabic, English',
    timezone: 'UTC+4',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600',
    description: 'The UAE offers tax-free income, world-class infrastructure, and a cosmopolitan lifestyle. Dubai and Abu Dhabi are global business hubs attracting professionals and investors from every continent.',
    quickFacts: [
      { icon: Building2, label: 'GDP', value: '$507B' },
      { icon: Users, label: 'Population', value: '10M' },
      { icon: Languages, label: 'Languages', value: 'Arabic, English' },
      { icon: Globe, label: 'Tax Rate', value: '0% Income Tax' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Tourist / Visit Visa (30 Days)',
            duration: '30 days (extendable)',
            processing: '2-4 working days',
            price: 'AED 350+',
            description: 'For tourism, shopping, or visiting friends and family in the UAE.',
            requirements: ['Valid passport (6+ months)', 'Passport-size photograph', 'Flight booking', 'Hotel reservation or sponsor details', 'Travel insurance (recommended)'],
            benefits: ['Quick processing', 'Extendable once for 30 days', 'Available for most nationalities'],
            eligibility: 'All nationalities',
            popular: true
          },
          {
            name: 'Business Visit Visa',
            duration: '30-90 days',
            processing: '2-5 working days',
            price: 'AED 500+',
            description: 'For attending business meetings, exhibitions, or exploring business opportunities.',
            requirements: ['Invitation from UAE company', 'Company trade license copy', 'Passport copy with 6+ months validity', 'Photo with white background', 'NOC from employer (if employed)'],
            benefits: ['Attend business meetings', 'Visit trade shows', 'Explore partnerships'],
            eligibility: 'Business professionals with UAE sponsor',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Employment Visa (Work Permit)',
            duration: '2-3 years (renewable)',
            processing: '2-4 weeks',
            price: 'AED 3,000+',
            description: 'For foreign workers with a job offer from a UAE-based employer. Includes work permit and residence visa.',
            requirements: ['Job offer from UAE employer', 'Attested educational certificates', 'Passport with 6+ months validity', 'Medical fitness test', 'Emirates ID application'],
            benefits: ['Tax-free salary', 'Residence visa included', 'Health insurance mandatory', 'Bring family on dependent visas'],
            eligibility: 'Workers with UAE employer sponsorship',
            popular: true
          },
          {
            name: 'Freelance / Self-Employed Visa',
            duration: '1-2 years (renewable)',
            processing: '2-4 weeks',
            price: 'AED 7,500+',
            description: 'For freelancers and self-employed professionals to work independently in the UAE.',
            requirements: ['Freelance permit from free zone', 'Portfolio or proof of expertise', 'Passport copy', 'Educational certificate attestation', 'Health insurance'],
            benefits: ['Work independently', 'No employer sponsorship needed', 'Residence visa included', 'Open multiple free zones'],
            eligibility: 'Freelancers in approved fields',
            popular: false
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Golden Visa (10 Years)',
            duration: '10 years (renewable)',
            processing: '2-4 weeks',
            price: 'AED 3,000+',
            description: 'Long-term residence visa for investors, entrepreneurs, outstanding students, scientists, and professionals.',
            requirements: ['Real estate investment (AED 2M+)', 'OR business investment (AED 2M+)', 'OR exceptional talent/skills', 'OR outstanding academic achievements', 'Health insurance'],
            benefits: ['10-year renewable residence', 'No sponsor needed', 'Bring family members', '6-month grace period after expiry'],
            eligibility: 'Investors, entrepreneurs, exceptional talents',
            popular: true
          },
          {
            name: 'Green Visa (5 Years)',
            duration: '5 years (renewable)',
            processing: '2-3 weeks',
            price: 'AED 2,000+',
            description: 'Self-sponsored residence visa for skilled employees, freelancers, and investors.',
            requirements: ['Skilled employment (Category 1-3)', 'Minimum salary AED 15,000', 'Bachelor\'s degree or equivalent', 'Health insurance', 'Valid passport'],
            benefits: ['Self-sponsored (no employer)', '5-year validity', 'Sponsor family members', '6-month grace period'],
            eligibility: 'Skilled workers earning ≥ AED 15,000/month',
            popular: false
          },
          {
            name: 'Dependent / Family Visa',
            duration: '2-3 years (tied to sponsor)',
            processing: '1-2 weeks',
            price: 'AED 2,000+',
            description: 'For spouses and children of UAE residents to join them in the UAE.',
            requirements: ['Sponsor holds valid UAE residence visa', 'Minimum salary AED 4,000+ (or AED 3,000 + housing)', 'Attested marriage/birth certificates', 'Medical fitness test for adults', 'Emirates ID application'],
            benefits: ['Live in UAE with family', 'Spouse can get work permit', 'Children can attend local schools', 'Access to healthcare'],
            eligibility: 'Spouses and children of UAE residents',
            popular: false
          }
        ]
      },
      {
        category: 'Business & Investment',
        icon: Landmark,
        color: '#D97706',
        bgGradient: 'from-amber-50 to-amber-100/50',
        borderColor: 'border-amber-200',
        visas: [
          {
            name: 'Investor / Partner Visa',
            duration: '3 years (renewable)',
            processing: '2-3 weeks',
            price: 'AED 4,000+',
            description: 'For investors who establish or partner in a UAE-based company.',
            requirements: ['Company trade license', 'Minimum share value (varies by free zone)', 'Memorandum of Association', 'Passport copies', 'Medical fitness test'],
            benefits: ['Self-sponsored residence', 'Business ownership', 'Bring family', 'Tax-free profits'],
            eligibility: 'Company investors/partners',
            popular: false
          }
        ]
      }
    ]
  },
  'Australia': {
    flag: '🇦🇺',
    capital: 'Canberra',
    currency: 'AUD',
    language: 'English',
    timezone: 'UTC+8 to UTC+11',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600',
    description: 'Australia offers a high quality of life, excellent healthcare, and diverse career opportunities. With a strong demand for skilled workers and world-class education, Australia remains a premier destination.',
    quickFacts: [
      { icon: Building2, label: 'GDP', value: '$1.7T' },
      { icon: Users, label: 'Population', value: '26M' },
      { icon: Languages, label: 'Languages', value: 'English' },
      { icon: Globe, label: 'Livability', value: 'Top 10 Cities' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Visitor Visa (Subclass 600)',
            duration: 'Up to 12 months',
            processing: '2-4 weeks',
            price: 'AUD 150+',
            description: 'For tourism, visiting family/friends, or short-term business activities.',
            requirements: ['Valid passport', 'Proof of financial capacity', 'Travel itinerary', 'Genuine Temporary Entrant statement', 'Health insurance (recommended)'],
            benefits: ['Multiple entry options', 'Stay up to 12 months', 'Stream processing available'],
            eligibility: 'All nationalities',
            popular: true
          },
          {
            name: 'eVisitor (Subclass 651)',
            duration: 'Up to 3 months per visit',
            processing: 'Instant - 2 days',
            price: 'Free',
            description: 'Free visa for eligible passport holders for tourism or business visitor activities.',
            requirements: ['Eligible passport (EU countries)', 'Valid for tourism or business visits', 'No tuberculosis', 'No criminal convictions', 'Genuine visitor intent'],
            benefits: ['Free of charge', 'Fast processing', 'Multiple entries for 12 months'],
            eligibility: 'EU passport holders',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Temporary Skill Shortage (TSS) - Subclass 482',
            duration: '2-4 years',
            processing: '1-3 months',
            price: 'AUD 1,455+',
            description: 'For skilled workers nominated by an approved Australian employer to fill labor shortages.',
            requirements: ['Sponsorship by approved employer', 'Nomination for occupation on skilled list', '2+ years relevant work experience', 'English language proficiency', 'Skills assessment (if required)'],
            benefits: ['Bring family members', 'Pathway to PR (after 2-3 years)', 'Change employers (with new nomination)', 'Access to Medicare (in some cases)'],
            eligibility: 'Skilled workers with employer sponsorship',
            popular: true
          },
          {
            name: 'Skilled Independent Visa - Subclass 189',
            duration: 'Permanent Residence',
            processing: '6-12 months',
            price: 'AUD 4,640',
            description: 'Points-tested permanent visa for skilled workers not sponsored by employer, state, or family.',
            requirements: ['EOI submission and invitation', 'Points test (minimum 65)', 'Skills assessment for nominated occupation', 'English language proficiency', 'Age under 45 at invitation'],
            benefits: ['Permanent residence', 'Work and live anywhere in Australia', 'Access to Medicare', 'Pathway to citizenship'],
            eligibility: 'Skilled workers meeting points threshold',
            popular: false
          }
        ]
      },
      {
        category: 'Study',
        icon: GraduationCap,
        color: '#6C5CE7',
        bgGradient: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        visas: [
          {
            name: 'Student Visa (Subclass 500)',
            duration: 'Course duration',
            processing: '4-8 weeks',
            price: 'AUD 710',
            description: 'For international students enrolled in full-time courses at registered Australian institutions.',
            requirements: ['Confirmation of Enrolment (CoE)', 'Genuine Student (GS) requirement', 'Financial capacity proof', 'English language proficiency', 'Health insurance (OSHC)'],
            benefits: ['Work 48 hrs/fortnight during term', 'Unlimited work during breaks', 'Bring family members', 'Post-study work visa eligible'],
            eligibility: 'Students accepted at Australian institutions',
            popular: true
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Skilled Nominated Visa - Subclass 190',
            duration: 'Permanent Residence',
            processing: '6-12 months',
            price: 'AUD 4,640',
            description: 'State-nominated permanent visa for skilled workers.',
            requirements: ['State/territory nomination', 'EOI and invitation', 'Points test (minimum 65 + state points)', 'Skills assessment', 'Commitment to live in nominating state'],
            benefits: ['Permanent residence', 'State support services', 'Access to Medicare', 'Pathway to citizenship'],
            eligibility: 'Skilled workers nominated by state/territory',
            popular: false
          }
        ]
      }
    ]
  },
  'UK': {
    flag: '🇬🇧',
    capital: 'London',
    currency: 'GBP',
    language: 'English',
    timezone: 'UTC+0',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600',
    description: 'The UK is a global leader in finance, technology, education, and culture. With the points-based immigration system, the UK welcomes skilled workers, students, and investors from around the world.',
    quickFacts: [
      { icon: Building2, label: 'GDP', value: '$3.1T' },
      { icon: Users, label: 'Population', value: '67M' },
      { icon: Languages, label: 'Languages', value: 'English' },
      { icon: Globe, label: 'Universities', value: 'Top 100 Globally' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Standard Visitor Visa',
            duration: 'Up to 6 months (up to 10 years for long-term)',
            processing: '3 weeks',
            price: '£100+',
            description: 'For tourism, visiting family/friends, business meetings, or short courses.',
            requirements: ['Valid passport', 'Proof of financial support', 'Travel itinerary', 'Accommodation details', 'Intent to leave after visit'],
            benefits: ['Long-term visa options (2, 5, 10 years)', 'Multiple entries', 'Attend business meetings', 'Short study courses allowed'],
            eligibility: 'All nationalities requiring UK visa',
            popular: true
          },
          {
            name: 'Business Visitor Visa',
            duration: 'Up to 6 months',
            processing: '3 weeks',
            price: '£100',
            description: 'For attending conferences, meetings, training, or negotiating contracts.',
            requirements: ['Letter of invitation from UK company', 'Evidence of business activities', 'Proof of employment overseas', 'Financial support evidence', 'Intent to return'],
            benefits: ['Attend meetings and conferences', 'Negotiate contracts', 'Short training sessions', 'Site visits'],
            eligibility: 'Business professionals with UK contacts',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Skilled Worker Visa',
            duration: 'Up to 5 years (renewable)',
            processing: '3-8 weeks',
            price: '£719+',
            description: 'For skilled workers with a job offer from a UK employer holding a sponsor license.',
            requirements: ['Job offer from licensed sponsor', 'Certificate of Sponsorship (CoS)', 'Salary meets threshold (£38,700+ or going rate)', 'English language proficiency (B1)', 'Maintenance funds'],
            benefits: ['Bring dependants', 'Pathway to ILR (5 years)', 'Change employers (with new CoS)', 'Access to NHS healthcare'],
            eligibility: 'Skilled workers with sponsored job offers',
            popular: true
          },
          {
            name: 'Global Talent Visa',
            duration: '1-5 years',
            processing: '3-8 weeks',
            price: '£716+',
            description: 'For leaders or emerging leaders in academia, research, arts, culture, or digital technology.',
            requirements: ['Endorsement from approved body', 'Evidence of talent/promise', 'Field-specific achievements', 'English language proficiency', 'Maintenance funds'],
            benefits: ['No sponsor needed', 'Bring dependants', 'Pathway to ILR (3-5 years)', 'Work flexibility'],
            eligibility: 'Recognized leaders in eligible fields',
            popular: false
          },
          {
            name: 'Health and Care Worker Visa',
            duration: 'Up to 5 years (renewable)',
            processing: '3 weeks',
            price: '£284+',
            description: 'For qualified healthcare professionals with a job offer in the UK health or social care sector.',
            requirements: ['Job offer from approved employer', 'Certificate of Sponsorship', 'Eligible occupation code', 'English language proficiency', 'Maintenance funds (or sponsor certification)'],
            benefits: ['Reduced visa fee', 'Fast-track processing', 'Bring dependants', 'Pathway to ILR'],
            eligibility: 'Healthcare professionals with UK job offer',
            popular: false
          }
        ]
      },
      {
        category: 'Study',
        icon: GraduationCap,
        color: '#6C5CE7',
        bgGradient: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        visas: [
          {
            name: 'Student Visa',
            duration: 'Course duration + 4 months (or 2 months for short courses)',
            processing: '3 weeks',
            price: '£490',
            description: 'For students aged 16+ enrolled in courses at licensed UK student sponsors.',
            requirements: ['CAS from licensed sponsor', 'Financial evidence (tuition + living costs)', 'English language proficiency', 'TB test (if applicable)', 'ATAS certificate (for certain courses)'],
            benefits: ['Work 20 hrs/week during term', 'Full-time during holidays', 'Graduate Route visa (2-3 years)', 'Bring dependants (postgraduate level)'],
            eligibility: 'Students accepted at UK institutions',
            popular: true
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Indefinite Leave to Remain (ILR)',
            duration: 'Indefinite',
            processing: '6 months',
            price: '£2,885',
            description: 'Permanent settlement for those who have lived in the UK for a qualifying period.',
            requirements: ['5+ years continuous residence', 'Life in the UK test', 'English language (B1)', 'No excessive absences', 'Good character'],
            benefits: ['No time limit on stay', 'Work without restrictions', 'Access to public funds', 'Pathway to British citizenship'],
            eligibility: 'Visa holders meeting residence requirements',
            popular: true
          }
        ]
      }
    ]
  },
  'Middle East': {
    flag: '🌍',
    capital: 'Various',
    currency: 'Multiple',
    language: 'Arabic, English, others',
    timezone: 'UTC+3 to UTC+4',
    heroImage: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1600',
    description: 'The Middle East region, particularly the GCC countries, offers tremendous opportunities in construction, energy, hospitality, and technology. With rapid development and tax-free salaries, it attracts workers worldwide.',
    quickFacts: [
      { icon: Building2, label: 'GDP (GCC)', value: '$1.8T' },
      { icon: Users, label: 'Expat Population', value: '40%+' },
      { icon: Languages, label: 'Languages', value: 'Arabic, English' },
      { icon: Globe, label: 'Key Sectors', value: 'Energy, Construction' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Tourist Visa (30/90 Days)',
            duration: '30 or 90 days',
            processing: '2-5 working days',
            price: 'AED 300+',
            description: 'For tourism and leisure travel across GCC countries.',
            requirements: ['Valid passport', 'Return flight booking', 'Hotel reservation', 'Proof of funds', 'Travel insurance'],
            benefits: ['Quick processing', 'Available online (e-visa)', 'Extendable in some cases'],
            eligibility: 'Most nationalities',
            popular: true
          },
          {
            name: 'Business Visit Visa',
            duration: '30-90 days',
            processing: '3-7 working days',
            price: 'AED 500+',
            description: 'For business meetings, trade shows, and market exploration.',
            requirements: ['Invitation from local company', 'Company trade license', 'Passport with 6+ months validity', 'Photo', 'Employment proof'],
            benefits: ['Attend meetings', 'Visit exhibitions', 'Explore partnerships'],
            eligibility: 'Business professionals',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'Employment / Work Permit',
            duration: '2-3 years (renewable)',
            processing: '2-4 weeks',
            price: 'Varies by country',
            description: 'Standard work visa sponsored by employer for employment in GCC countries.',
            requirements: ['Employment contract', 'Attested educational certificates', 'Medical fitness test', 'Police clearance certificate', 'Passport with 6+ months validity'],
            benefits: ['Tax-free income (in most GCC)', 'Accommodation/transport allowance', 'Annual flight tickets', 'Health insurance'],
            eligibility: 'Workers with employer sponsorship',
            popular: true
          },
          {
            name: 'Domestic Worker Visa',
            duration: '1-2 years (renewable)',
            processing: '1-2 weeks',
            price: 'Varies',
            description: 'For domestic workers including drivers, housekeepers, nannies, and caregivers.',
            requirements: ['Sponsor (employer) in GCC', 'Employment contract', 'Medical fitness test', 'Passport validity', 'Recruitment agency involvement'],
            benefits: ['Sponsored accommodation', 'Fixed working hours (new regulations)', 'Health insurance'],
            eligibility: 'Domestic workers with employer',
            popular: false
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'Family / Dependent Visa',
            duration: '2-3 years (tied to sponsor)',
            processing: '1-3 weeks',
            price: 'Varies',
            description: 'For family members of GCC residents to join them.',
            requirements: ['Sponsor with valid residence visa', 'Minimum salary requirement', 'Attested marriage/birth certificates', 'Medical fitness for adults', 'Housing proof'],
            benefits: ['Family reunification', 'Spouse can work (in some countries)', 'Children education access'],
            eligibility: 'Family of GCC residents',
            popular: false
          }
        ]
      }
    ]
  },
  'Europe': {
    flag: '🇪🇺',
    capital: 'Various',
    currency: 'EUR / GBP / others',
    language: 'Multiple',
    timezone: 'UTC-1 to UTC+3',
    heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600',
    description: 'Europe offers diverse opportunities across its member states, from tech hubs in Germany to financial centers in the UK. The Schengen Area enables seamless travel across 27 countries.',
    quickFacts: [
      { icon: Building2, label: 'GDP (EU)', value: '$17T' },
      { icon: Users, label: 'Population', value: '450M (EU)' },
      { icon: Languages, label: 'Languages', value: '24 Official' },
      { icon: Globe, label: 'Schengen Countries', value: '29' }
    ],
    visaTypes: [
      {
        category: 'Visitor',
        icon: PlaneTakeoff,
        color: '#6C5CE7',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-200',
        visas: [
          {
            name: 'Schengen Short-Stay Visa (Type C)',
            duration: 'Up to 90 days in 180-day period',
            processing: '15 calendar days',
            price: '€80',
            description: 'For tourism, business, or family visits across the Schengen Area.',
            requirements: ['Valid passport', 'Travel insurance (€30,000+ coverage)', 'Proof of accommodation', 'Flight itinerary', 'Proof of financial means'],
            benefits: ['Travel across 29 Schengen countries', 'Single/multiple entry options', 'Standardized across EU'],
            eligibility: 'All nationalities requiring Schengen visa',
            popular: true
          },
          {
            name: 'Business Schengen Visa',
            duration: 'Up to 90 days',
            processing: '15 calendar days',
            price: '€80',
            description: 'For business meetings, conferences, training, or trade fairs in the Schengen Area.',
            requirements: ['Invitation from European company', 'Employer letter', 'Proof of business activities', 'Travel insurance', 'Financial proof'],
            benefits: ['Attend EU conferences', 'Business meetings across Schengen', 'Trade show participation'],
            eligibility: 'Business professionals with EU contacts',
            popular: false
          }
        ]
      },
      {
        category: 'Work',
        icon: Briefcase,
        color: '#6C5CE7',
        bgGradient: 'from-red-50 to-red-100/50',
        borderColor: 'border-red-200',
        visas: [
          {
            name: 'EU Blue Card',
            duration: '1-4 years (renewable)',
            processing: '1-3 months',
            price: 'Varies by country',
            description: 'For highly skilled non-EU workers with a job offer and recognized qualifications.',
            requirements: ['University degree', 'Job offer with salary ≥ 1.5x average', 'Work contract (1+ years)', 'Valid passport', 'Health insurance'],
            benefits: ['Work across EU after 12 months', 'Bring family members', 'Pathway to permanent residence', 'Equal working conditions'],
            eligibility: 'Highly qualified professionals with job offers',
            popular: true
          },
          {
            name: 'National Work Visa (Country-specific)',
            duration: 'Varies by country',
            processing: '1-3 months',
            price: 'Varies',
            description: 'Country-specific work permits for employment in individual European nations.',
            requirements: ['Job offer from local employer', 'Labor market test (in some countries)', 'Qualifications recognition', 'Language proficiency (in some)', 'Financial proof'],
            benefits: ['Country-specific advantages', 'Pathway to national PR', 'Access to social benefits'],
            eligibility: 'Workers with local employer offers',
            popular: false
          }
        ]
      },
      {
        category: 'Study',
        icon: GraduationCap,
        color: '#6C5CE7',
        bgGradient: 'from-purple-50 to-purple-100/50',
        borderColor: 'border-purple-200',
        visas: [
          {
            name: 'Student Visa (Schengen / National)',
            duration: 'Course duration',
            processing: '2-4 weeks',
            price: '€80+',
            description: 'For students enrolled in European universities or educational programs.',
            requirements: ['University acceptance letter', 'Proof of financial means', 'Health insurance', 'Accommodation proof', 'Language proficiency'],
            benefits: ['Work part-time (120 full/240 half days per year in Germany)', 'Post-study job search visa', 'Schengen travel access', 'Affordable tuition in some countries'],
            eligibility: 'Accepted students at European institutions',
            popular: true
          }
        ]
      },
      {
        category: 'Residency',
        icon: HomeIcon,
        color: '#059669',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-200',
        visas: [
          {
            name: 'EU Long-Term Residence',
            duration: 'Indefinite (5-year renewable card)',
            processing: '3-6 months',
            price: 'Varies',
            description: 'Permanent residence status for non-EU nationals who have legally resided in an EU country for 5+ years.',
            requirements: ['5 years continuous legal residence', 'Stable and regular resources', 'Health insurance', 'Integration conditions (language/civics)', 'No threat to public policy'],
            benefits: ['Equal treatment with nationals', 'Work and study freely', 'Access to social benefits', 'Intra-EU mobility'],
            eligibility: '5+ year legal residents in EU',
            popular: false
          }
        ]
      }
    ]
  }
};

// ====================================================================
// --- COUNTRY DETAIL PAGE ---
// ====================================================================
const CountryDetail = ({ navigate, countryName }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedVisa, setExpandedVisa] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);
  
  const countryData = COUNTRY_VISA_DATA[countryName];
  
  useEffect(() => {
    setAnimateIn(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
    return () => setAnimateIn(false);
  }, [countryName]);

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-[#6C5CE7] mx-auto mb-6" />
          <h2 className="text-2xl font-black text-[#6C5CE7] mb-4">Country Not Found</h2>
          <button onClick={() => navigate('/countries')} className="bg-[#6C5CE7] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6C5CE7] transition-colors">Back to Countries</button>
        </div>
      </div>
    );
  }

  const allVisas = countryData.visaTypes.flatMap(cat => cat.visas);
  const popularVisas = allVisas.filter(v => v.popular);

  return (
    <div className={`animate-in fade-in duration-500 ${animateIn ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img src={countryData.heroImage} alt={countryName} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D1B69]/70 via-[#6C5CE7]/50 to-[#2D1B69]"></div>
        <div className="absolute inset-0 z-10 flex items-end pb-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/60">
                <li><button onClick={() => navigate('/')} className="hover:text-[#A29BFE] transition-colors">Home</button></li>
                <li aria-hidden="true">/</li>
                <li><button onClick={() => navigate('/countries')} className="hover:text-[#A29BFE] transition-colors">Countries</button></li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">{countryName}</li>
              </ol>
            </nav>
            <button onClick={() => navigate('/countries')} className="mb-6 text-white/70 hover:text-white flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors group">
              <ChevronLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" /> Back to Countries
            </button>
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <span className="text-5xl sm:text-7xl">{countryData.flag}</span>
              <div>
                <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Visa Categories & Requirements</h4>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight">{countryName}</h1>
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg font-light max-w-3xl leading-relaxed">{countryData.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white/80">
              <Clock className="h-3 w-3 text-[#A29BFE]" />
              Last updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-[#2D1B69] py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {countryData.quickFacts.map((fact, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#A29BFE]/50 transition-all duration-300 group">
                <fact.icon className="h-10 w-10 text-[#A29BFE] mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black text-white mb-1">{fact.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Visas Quick Access */}
      {popularVisas.length > 0 && (
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Star className="h-8 w-8 text-[#A29BFE]" />
                <h3 className="text-3xl font-black text-[#6C5CE7]" style={{ fontFamily: 'Playfair Display, serif' }}>Most Popular Visas</h3>
              </div>
              <p className="text-gray-500 font-light ml-11">Quick access to the most frequently applied visa programs</p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {popularVisas.map((visa, idx) => {
                const category = countryData.visaTypes.find(cat => cat.visas.includes(visa));
                return (
                  <div key={idx} className="bg-white rounded-2xl border-2 border-[#A29BFE]/20 p-8 hover:border-[#A29BFE] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      const catIdx = countryData.visaTypes.findIndex(cat => cat.visas.includes(visa));
                      if (catIdx !== -1) setActiveCategory(catIdx);
                    }}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#A29BFE]/10 to-[#A29BFE]/5 rounded-xl flex items-center justify-center">
                        {category && React.createElement(category.icon, { className: 'h-7 w-7 text-[#A29BFE]' })}
                      </div>
                      <span className="bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3" /> Popular
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#6C5CE7] mb-3">{visa.name}</h4>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{visa.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-gray-400"><Clock className="h-3 w-3" />{visa.processing}</span>
                      <span className="font-bold text-[#6C5CE7] text-lg">{visa.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Visa Categories Navigation */}
      <div className="bg-white sticky top-[72px] z-30 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-3">
            {countryData.visaTypes.map((cat, idx) => (
              <button key={idx} onClick={() => setActiveCategory(idx)}
                className={`flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === idx
                  ? 'bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-[#6C5CE7]'
                }`}>
                <cat.icon className="h-5 w-5" />
                {cat.category}
                <span className={`ml-1 px-3 py-1 rounded-full text-[10px] ${activeCategory === idx ? 'bg-white/20' : 'bg-gray-200'}`}>{cat.visas.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visa Types Detail */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-3">
                {React.createElement(countryData.visaTypes[activeCategory].icon, { className: 'h-10 w-10', style: { color: countryData.visaTypes[activeCategory].color } })}
                <h2 className="text-4xl md:text-5xl font-black text-[#6C5CE7]" style={{ fontFamily: 'Playfair Display, serif' }}>{countryData.visaTypes[activeCategory].category} Visas</h2>
              </div>
              <p className="text-gray-500 font-light ml-14 text-lg">All available {countryData.visaTypes[activeCategory].category.toLowerCase()} visa options for {countryName}</p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {countryData.visaTypes[activeCategory].visas.map((visa, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className={`rounded-3xl border-2 ${expandedVisa === idx ? 'border-[#6C5CE7] shadow-2xl' : 'border-gray-200 hover:border-[#6C5CE7]/50'} transition-all duration-500 overflow-hidden`}>
                  <div className={`bg-gradient-to-r ${countryData.visaTypes[activeCategory].bgGradient} p-10 md:p-12`}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          {visa.popular && (
                            <span className="bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1">
                              <Star className="h-3 w-3" /> Popular
                            </span>
                          )}
                          <span className="text-gray-400 text-xs font-medium">{countryData.visaTypes[activeCategory].category} Visa</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#6C5CE7] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{visa.name}</h3>
                        <p className="text-gray-600 font-light leading-relaxed max-w-2xl">{visa.description}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[140px]">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Processing</div>
                          <div className="text-sm font-bold text-[#6C5CE7]">{visa.processing}</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[140px]">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Fee</div>
                          <div className="text-sm font-bold text-[#A29BFE] text-lg">{visa.price}</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-xl px-6 py-4 text-center min-w-[140px]">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Duration</div>
                          <div className="text-sm font-bold text-[#6C5CE7]">{visa.duration}</div>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setExpandedVisa(expandedVisa === idx ? null : idx)}
                      className="mt-8 w-full lg:w-auto bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:from-[#A29BFE] hover:to-[#FD79A8] transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">
                      {expandedVisa === idx ? (
                        <>Hide Details <ChevronUp className="h-4 w-4" /></>
                      ) : (
                        <>View Full Details <ChevronDown className="h-4 w-4" /></>
                      )}
                    </button>
                  </div>

                  <div className={`transition-all duration-500 overflow-hidden ${expandedVisa === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-10 md:p-12 bg-white">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                          <h4 className="text-xl font-bold text-[#6C5CE7] mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                            <ClipboardList className="h-6 w-6 text-[#A29BFE]" />
                            Requirements
                          </h4>
                          <div className="space-y-4">
                            {visa.requirements.map((req, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50/50 transition-colors group">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#A29BFE] group-hover:to-[#FD79A8] transition-all">
                                  <span className="text-xs font-bold text-white">{rIdx + 1}</span>
                                </div>
                                <span className="text-gray-700 font-medium text-sm leading-relaxed pt-2">{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
                            <h4 className="text-sm font-bold text-emerald-800 mb-4 flex items-center gap-2">
                              <CheckCheck className="h-5 w-5 text-emerald-600" />
                              Key Benefits
                            </h4>
                            <ul className="space-y-3">
                              {visa.benefits.map((benefit, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-emerald-700 text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                            <h4 className="text-sm font-bold text-amber-800 mb-3 flex items-center gap-2">
                              <UserCheck className="h-5 w-5 text-amber-600" />
                              Eligibility
                            </h4>
                            <p className="text-amber-700 text-sm leading-relaxed">{visa.eligibility}</p>
                          </div>

                          <button onClick={() => navigate('/book')}
                            className="w-full bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] text-white py-5 text-xs font-bold uppercase tracking-widest hover:from-[#6C5CE7] hover:to-[#8B7FE8] transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">
                            Apply for This Visa <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* All Visa Types Summary */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-4xl font-black text-[#6C5CE7] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>All Visa Types for {countryName}</h3>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">Complete overview of all available visa categories and their respective programs</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allVisas.map((visa, idx) => {
              const category = countryData.visaTypes.find(cat => cat.visas.includes(visa));
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#6C5CE7] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    const catIdx = countryData.visaTypes.findIndex(cat => cat.visas.includes(visa));
                    setActiveCategory(catIdx);
                    const vIdx = countryData.visaTypes[catIdx].visas.indexOf(visa);
                    setExpandedVisa(vIdx);
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                  }}>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6C5CE7] transition-colors">
                    {category && React.createElement(category.icon, { className: 'h-6 w-6 text-gray-400 group-hover:text-white transition-colors' })}
                  </div>
                  <h4 className="text-xs font-bold text-[#6C5CE7] mb-2 line-clamp-2 leading-tight">{visa.name}</h4>
                  <p className="text-[10px] text-gray-400">{visa.duration}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Country Quick Info & CTA */}
      <div className="bg-[#2D1B69] py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                <Info className="h-6 w-6 text-[#A29BFE]" />
                Country Quick Facts
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Capital</span>
                  <span className="text-white font-bold text-lg">{countryData.capital}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Currency</span>
                  <span className="text-white font-bold text-lg">{countryData.currency}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-gray-400 text-sm">Language</span>
                  <span className="text-white font-bold text-lg">{countryData.language}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-400 text-sm">Timezone</span>
                  <span className="text-white font-bold text-lg">{countryData.timezone}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col justify-center">
              <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                <MessageCircle className="h-6 w-6 text-[#A29BFE]" />
                Need Help?
              </h4>
              <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">Our visa specialists are ready to assist you with your {countryName} visa application. Book a free consultation today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/book')} className="bg-gradient-to-r from-[#A29BFE] to-[#FD79A8] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:from-[#6C5CE7] hover:to-[#8B7FE8] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl">
                  <Calendar className="h-4 w-4" /> Book Consultation
                </button>
                <button onClick={() => navigate('/contact')} className="border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl">
                  <Phone className="h-4 w-4" /> Contact Us
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- HOME PAGE (20 SECTIONS) ---
// ====================================================================
const Home = ({ navigate }) => {
  const featuredCountries = [
    { name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600', desc: 'Global financial hub with thriving tech scene.', hasVisaData: true },
    { name: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600', desc: 'Advanced engineering and specialized manufacturing.', hasVisaData: true },
    { name: 'Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600', desc: 'Mining, healthcare, and skilled migration pathways.', hasVisaData: false },
    { name: 'UAE', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1600', desc: 'Tax-free opportunities in a booming Gulf economy.', hasVisaData: true },
    { name: 'Schengen', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600', desc: '27-country European travel and business zone.', hasVisaData: false },
    { name: 'Saudi Arabia', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1600', desc: 'Vision 2030 megaprojects driving demand.', hasVisaData: true },
  ];
  const [activeFeat, setActiveFeat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveFeat(prev => prev === featuredCountries.length - 1 ? 0 : prev + 1), 4000);
    return () => clearInterval(timer);
  }, []);

  const visaCategories = [
    { icon: Plane, title: 'Work Visa', desc: 'Employment passes, work permits, and skilled worker visas for professionals across all sectors.', count: '15,200+ Processed' },
    { icon: GraduationCap, title: 'Study Visa', desc: 'Student visas for top universities and educational institutions worldwide.', count: '8,400+ Processed' },
    { icon: DollarSign, title: 'Investor Visa', desc: 'Business and investment visa programs for entrepreneurs and high-net-worth individuals.', count: '2,100+ Processed' },
    { icon: Heart, title: 'Family Visa', desc: 'Spouse, dependent, and family reunification visas with comprehensive support.', count: '6,800+ Processed' },
    { icon: Shield, title: 'Permanent Residency', desc: 'PR applications with expert guidance through complex eligibility requirements.', count: '3,500+ Processed' },
    { icon: Globe, title: 'Business Visa', desc: 'Short-term business visits, conferences, and corporate travel arrangements.', count: '12,000+ Processed' }
  ];

  const talentStats = [
    { icon: Users, label: 'Active Candidates', value: '45,000+' },
    { icon: Building, label: 'Partner Companies', value: '1,200+' },
    { icon: Globe, label: 'Countries Served', value: '25+' },
    { icon: Award, label: 'Success Rate', value: '99.7%' }
  ];

  const howWeWork = [
    { icon: Target, title: 'Assessment', desc: 'Comprehensive evaluation of your requirements, qualifications, and career objectives.' },
    { icon: Search, title: 'Matching', desc: 'Proprietary AI-powered matching system connects you with optimal opportunities.' },
    { icon: Edit3, title: 'Documentation', desc: 'Expert preparation and verification of all required documents and applications.' },
    { icon: ShieldCheck, title: 'Processing', desc: 'Streamlined submission and tracking through government immigration systems.' },
    { icon: Check, title: 'Approval', desc: 'Successful visa issuance with pre-departure orientation and support.' },
    { icon: Heart, title: 'Settlement', desc: 'Post-arrival assistance including accommodation, banking, and cultural integration.' }
  ];

  const newsItems = [
    { date: "Oct 12, 2025", category: "Immigration", title: "Navigating EU Blue Card Regulatory Updates", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", readTime: "5 min" },
    { date: "Sep 28, 2025", category: "Industry", title: "Strategic Analysis: Asian Tech Hubs in 2026", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600", readTime: "8 min" },
    { date: "Sep 15, 2025", category: "Technology", title: "AI Integration in Institutional Recruitment", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600", readTime: "6 min" },
    { date: "Sep 05, 2025", category: "Policy", title: "Singapore EP Framework Changes 2025", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600", readTime: "7 min" }
  ];

  const studyPrograms = [
    { title: 'Bachelor in Computer Science', country: 'Singapore', duration: '4 Years', tuition: '$30,000/yr', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', university: 'NUS' },
    { title: 'MBA Program', country: 'UK', duration: '2 Years', tuition: '£45,000/yr', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600', university: 'Oxford' },
    { title: 'Engineering PhD', country: 'Germany', duration: '3-4 Years', tuition: '€15,000/yr', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600', university: 'TU Munich' },
    { title: 'Medical Degree', country: 'Australia', duration: '6 Years', tuition: 'AUD 60,000/yr', image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600', university: 'UNSW' }
  ];

  const investPrograms = [
    { title: 'Singapore Global Investor', investment: '$2.5M+', benefits: ['PR Eligibility', 'Tax Benefits', 'Business Setup'], processing: '6-12 Months' },
    { title: 'UK Innovator Visa', investment: '£50K+', benefits: ['Startup Funding', 'Residency Path', 'Networking'], processing: '3-6 Months' },
    { title: 'Canada Start-Up', investment: 'CAD 200K+', benefits: ['PR Track', 'Innovation Hub', 'Support Network'], processing: '12-16 Months' },
    { title: 'Australia Business Innovation', investment: 'AUD 800K+', benefits: ['Residency', 'Business Growth', 'Family Inclusion'], processing: '9-15 Months' }
  ];

  const jobListings = [
    { title: "Senior Software Engineer", dept: "Technology", loc: "Singapore", type: "Full-Time", salary: "$120k-$180k", posted: "2 days ago" },
    { title: "Registered Nurse", dept: "Healthcare", loc: "UK", type: "Full-Time", salary: "£45k-£60k", posted: "5 days ago" },
    { title: "Financial Analyst", dept: "Finance", loc: "Dubai", type: "Full-Time", salary: "$80k-$120k", posted: "1 week ago" },
    { title: "Civil Engineer", dept: "Construction", loc: "UAE", type: "Full-Time", salary: "$60k-$90k", posted: "2 weeks ago" }
  ];

  const services = [
    { icon: Users, title: 'Manpower Acquisition', desc: 'We execute targeted searches, rigorous screening, and strategic deployment of highly specialized professionals.' },
    { icon: Plane, title: 'Immigration Compliance', desc: 'Our legal processing divisions manage complex visa portfolios end-to-end.' },
    { icon: Briefcase, title: 'Corporate Consulting', desc: 'Strategic advisory for international workforce mobility and expansion planning.' },
    { icon: Shield, title: 'Regulatory Compliance', desc: 'Comprehensive legal support ensuring absolute regulatory adherence.' }
  ];

  const testimonials = [
    { text: "VisaHOBe streamlined our entire corporate relocation process. Absolute professionals with unmatched global reach.", author: "James Wilson", role: "HR Director, TechCorp Global" },
    { text: "The fastest, most transparent visa processing we have ever experienced. Highly recommended for enterprises.", author: "Sarah Jenkins", role: "Operations Lead, Nexus Industries" },
    { text: "Their global manpower sourcing provided us with top-tier engineering talent in a matter of weeks.", author: "Ali Rahman", role: "CEO, BuildRight Const." },
    { text: "Outstanding support for our healthcare staff deployment. They handled everything seamlessly.", author: "Dr. Michael Chen", role: "Director, MediHealth Group" }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. Hero Slider */}
      <HeroSlider navigate={navigate} />

      {/* 2. Partners Marquee */}
      <PartnersMarquee />

      {/* 3. Stats Counter */}
      <div className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Track Record</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Numbers That Speak</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center divide-x divide-y md:divide-y-0 divide-gray-200 border-y md:border border-gray-200">
              <div className="p-12 hover:bg-gray-50 transition-colors"><div className="text-6xl font-black text-[#6C5CE7] mb-4 tracking-tighter"><CounterAnimation end={15} suffix="+" /></div><div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Years Experience</div></div>
              <div className="p-12 hover:bg-gray-50 transition-colors"><div className="text-6xl font-black text-[#6C5CE7] mb-4 tracking-tighter"><CounterAnimation end={50} suffix="k+" /></div><div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Visas Processed</div></div>
              <div className="p-12 hover:bg-gray-50 transition-colors"><div className="text-6xl font-black text-[#6C5CE7] mb-4 tracking-tighter"><CounterAnimation end={120} suffix="+" /></div><div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Corporate Partners</div></div>
              <div className="p-12 hover:bg-gray-50 transition-colors"><div className="text-6xl font-black text-[#6C5CE7] mb-4 tracking-tighter"><CounterAnimation end={25} /></div><div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Global Offices</div></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 4. Featured Countries Slider */}
      <div className="bg-[#2D1B69] py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Featured Destinations</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Top Countries</h2>
          </AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeFeat * 100}%)` }}>
              {featuredCountries.map((country, idx) => (
                <div key={idx} className="w-full flex-shrink-0 h-[500px] relative">
                  <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69] via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-12 text-white">
                    <h3 className="text-5xl font-black mb-4">{country.name}</h3>
                    <p className="text-lg text-gray-300 font-light max-w-lg">{country.desc}</p>
                    <button onClick={() => {
                      if (country.hasVisaData && COUNTRY_VISA_DATA[country.name]) {
                        navigate(`/country/${country.name}`);
                      } else {
                        navigate('/countries');
                      }
                    }} className="mt-6 text-[#A29BFE] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">Explore Visas <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {featuredCountries.map((_, idx) => (
                <button key={idx} onClick={() => setActiveFeat(idx)} className={`h-1 rounded-full transition-all duration-300 ${idx === activeFeat ? 'w-12 bg-[#A29BFE]' : 'w-6 bg-white/30 hover:bg-white/60'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. About Brief */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>About Us</h4>
              <h2 className="text-5xl font-black text-[#6C5CE7] mb-8 tracking-tight leading-tight">Connecting Talent<br/>With Opportunity</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">Founded in 2010, VisaHOBe Pte. Ltd. has established itself as a premier institutional manpower recruitment and visa agency. We bridge the gap between global talent and industry-leading organizations across 25+ countries.</p>
              <div className="flex flex-wrap gap-6 mb-8">
                {['Integrity First', 'Global Reach', 'Expert Team', 'Fast Processing'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-bold text-[#6C5CE7]">
                    <CheckCircle2 className="h-4 w-4 text-[#A29BFE]" />{item}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/about')} className="bg-[#6C5CE7] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center gap-3">Learn More <ArrowRight className="h-4 w-4" /></button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" className="w-full h-[600px] object-cover rounded-3xl" alt="Team" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#A29BFE]/20 to-[#FD79A8]/20 border-4 border-[#A29BFE] rounded-2xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 6. Services Overview */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What We Offer</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Our Services</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#6C5CE7] hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6C5CE7]/10 to-[#6C5CE7]/5 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#A29BFE] group-hover:to-[#FD79A8] transition-all duration-300">
                  <service.icon className="h-7 w-7 text-[#6C5CE7] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Visa Categories */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Visa Solutions</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Visa Categories</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaCategories.map((visa, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#6C5CE7] hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6C5CE7]/10 to-[#6C5CE7]/5 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#A29BFE] group-hover:to-[#FD79A8] transition-colors duration-300">
                  <visa.icon className="h-7 w-7 text-[#6C5CE7] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-3">{visa.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 font-light">{visa.desc}</p>
                <p className="text-[#A29BFE] text-xs font-bold uppercase tracking-widest">{visa.count}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 8. How We Work */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Methodology</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">How We Work</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howWeWork.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-[#6C5CE7] transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-6xl font-black text-gray-100">0{idx + 1}</div>
                <step.icon className="h-10 w-10 text-[#A29BFE] mb-6" />
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Global Talent Pool */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Network</h4>
              <h2 className="text-5xl font-black text-[#6C5CE7] mb-8 tracking-tight">Global Talent Pool</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">Access to a vast network of pre-qualified professionals across multiple sectors, ready for international deployment.</p>
              <div className="grid grid-cols-2 gap-6">
                {talentStats.map((stat, idx) => (
                  <div key={idx} className="p-6 border border-gray-200 rounded-xl">
                    <stat.icon className="h-8 w-8 text-[#A29BFE] mb-3" />
                    <div className="text-2xl font-black text-[#6C5CE7] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" className="w-full h-[600px] object-cover rounded-3xl" alt="Talent" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#A29BFE]/20 to-[#FD79A8]/20 border-4 border-[#A29BFE] rounded-2xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 10. Success Stories */}
      <div className="bg-[#2D1B69] py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Impact</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Success Stories</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-10 border border-white/10 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
              <div className="text-6xl font-black text-[#A29BFE] mb-4"><CounterAnimation end={50000} suffix="+" /></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Visas Issued</div>
            </div>
            <div className="p-10 border border-white/10 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
              <div className="text-6xl font-black text-[#A29BFE] mb-4"><CounterAnimation end={15} suffix="+" /></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Countries</div>
            </div>
            <div className="p-10 border border-white/10 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
              <div className="text-6xl font-black text-[#A29BFE] mb-4"><CounterAnimation end={99} suffix="%" /></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Approval Rate</div>
            </div>
            <div className="p-10 border border-white/10 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
              <div className="text-6xl font-black text-[#A29BFE] mb-4"><CounterAnimation end={4} suffix="k+" /></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* 11. Testimonials */}
      <TestimonialsCarousel />

      {/* 12. Live Dashboard Preview */}
      <div className="py-24 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Real-Time Insights</h4>
            <h2 className="text-5xl font-black text-white tracking-tight mb-4">Live Dashboard Preview</h2>
            <p className="text-gray-300 font-light max-w-2xl mx-auto text-lg">Track your application status, view processing metrics, and access real-time updates through our secure client dashboard.</p>
          </AnimatedSection>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gray-100 p-4 flex items-center gap-2 border-b">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500">VisaHOBe Client Dashboard</div>
            </div>
            <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Applications Active', value: '2,450', color: 'bg-blue-100' },
                { label: 'Pending Review', value: '189', color: 'bg-yellow-100' },
                { label: 'Approved Today', value: '67', color: 'bg-green-100' },
                { label: 'Avg Processing', value: '14 days', color: 'bg-purple-100' }
              ].map((stat, idx) => (
                <div key={idx} className={`${stat.color} p-6 rounded-xl`}>
                  <div className="text-3xl font-black text-[#6C5CE7] mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="p-8 border-t">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#6C5CE7]">Recent Activity</h3>
                <button onClick={() => navigate('/dashboard')} className="text-[#A29BFE] text-xs font-bold uppercase tracking-widest flex items-center gap-2">View All <ArrowRight className="h-3 w-3" /></button>
              </div>
              <div className="space-y-4">
                {[
                  { type: 'Approved', name: 'Work Permit - Singapore', time: '2 hours ago' },
                  { type: 'In Review', name: 'Student Visa - UK', time: '5 hours ago' },
                  { type: 'Submitted', name: 'PR Application - Canada', time: '1 day ago' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.type === 'Approved' ? 'bg-green-500' : item.type === 'In Review' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-bold uppercase ${item.type === 'Approved' ? 'text-green-600' : item.type === 'In Review' ? 'text-yellow-600' : 'text-blue-600'}`}>{item.type}</span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 13. Document Hub Preview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Resources</h4>
              <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Document Hub</h2>
            </div>
            <button onClick={() => navigate('/documents')} className="border border-gray-300 text-[#6C5CE7] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6C5CE7] hover:text-white transition-colors flex items-center gap-3">View All <ArrowRight className="h-4 w-4" /></button>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: 'Visa Application Guide', type: 'PDF', size: '2.4 MB' },
              { icon: FolderOpen, title: 'Required Documents Checklist', type: 'Checklist', size: '1.1 MB' },
              { icon: Shield, title: 'Compliance Handbook', type: 'Guide', size: '3.8 MB' }
            ].map((doc, idx) => (
              <div key={idx} className="bg-gray-50 p-8 border border-gray-200 hover:border-[#6C5CE7] transition-all duration-300 rounded-2xl group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <doc.icon className="h-10 w-10 text-[#A29BFE]" />
                  <Download className="h-5 w-5 text-gray-400 group-hover:text-[#6C5CE7] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#6C5CE7] mb-2">{doc.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="bg-gray-200 px-2 py-1 rounded">{doc.type}</span>
                  <span>{doc.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 14. News/Blog Preview */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Latest Updates</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">News & Insights</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsItems.map((post, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-[#6C5CE7] hover:shadow-xl">
                <div className="h-48 overflow-hidden relative"><img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /><div className="absolute top-4 left-4"><span className="text-[#A29BFE] text-[10px] font-bold tracking-[0.2em] uppercase bg-white/90 px-3 py-1 rounded-full">{post.category}</span></div></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3"><span className="text-[#A29BFE] text-[10px] font-bold tracking-[0.2em] uppercase">{post.date}</span><span className="text-gray-400 text-xs font-medium flex items-center gap-1"><Clock className="h-3 w-3"/>{post.readTime}</span></div>
                  <h3 className="text-sm font-black text-[#6C5CE7] leading-snug tracking-tight mb-4 group-hover:text-[#A29BFE] transition-colors">{post.title}</h3>
                  <div className="mt-4 h-px w-8 bg-[#6C5CE7] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('/news')} className="bg-[#6C5CE7] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center justify-center gap-3 mx-auto">View All Articles <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      {/* 15. Study Programs Preview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Education</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Study Abroad</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyPrograms.map((prog, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-[#6C5CE7] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="h-48 overflow-hidden"><img src={prog.image} alt={prog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#A29BFE] text-xs font-bold uppercase tracking-wider">{prog.university}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500 text-xs">{prog.country}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#6C5CE7] mb-3">{prog.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3"/>{prog.duration}</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-3 w-3"/>{prog.tuition}</span>
                  </div>
                  <button onClick={() => navigate('/study')} className="w-full bg-gray-200 text-[#6C5CE7] py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#6C5CE7] hover:text-white transition-colors rounded-lg">Apply Now</button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('/study')} className="border border-gray-300 text-[#6C5CE7] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6C5CE7] hover:text-white transition-colors flex items-center justify-center gap-3 mx-auto">Explore All Programs <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      {/* 16. Investment Programs Preview */}
      <div className="py-24 bg-[#2D1B69]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Wealth Management</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Investor Programs</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investPrograms.map((prog, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#A29BFE] hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{prog.title}</h3>
                    <div className="text-[#A29BFE] text-sm font-bold">{prog.investment}</div>
                  </div>
                  <Wallet className="h-8 w-8 text-gray-400 group-hover:text-[#A29BFE] transition-colors" />
                </div>
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">{prog.benefits.map((benefit, bIdx) => <span key={bIdx} className="bg-white/10 text-white px-2 py-1 text-[10px] font-medium rounded">{benefit}</span>)}</div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3"/>{prog.processing}</span>
                </div>
                <button onClick={() => navigate('/invest')} className="w-full border border-white/20 text-white py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A29BFE] hover:border-[#A29BFE] transition-colors rounded-lg">Learn More</button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 17. Job Opportunities Preview */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Career Opportunities</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Latest Jobs</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {jobListings.map((job, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg rounded-xl">
                <div className="mb-4 md:mb-0 w-full">
                  <h3 className="text-lg font-bold text-[#6C5CE7] mb-3 tracking-tight">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3 text-[#A29BFE]"/>{job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#A29BFE]"/>{job.loc}</span>
                    <span className="text-[#6C5CE7] border border-[#6C5CE7] px-2 py-0.5 rounded">{job.type}</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-3 w-3 text-[#A29BFE]"/>{job.salary}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-gray-400"/>{job.posted}</span>
                  </div>
                </div>
                <button onClick={() => navigate('/jobs')} className="w-full md:w-auto bg-[#6C5CE7] text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center justify-center gap-2 rounded-lg">Apply Now <ArrowRight className="h-3 w-3" /></button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('/jobs')} className="bg-[#6C5CE7] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center justify-center gap-3 mx-auto">View All Positions <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      {/* 18. FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Common Questions</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">FAQ</h2>
          </AnimatedSection>
          <AnimatedSection className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
            <FAQItem question="What industries do you specialize in?" answer="Technology, healthcare, construction, engineering, finance, and hospitality across 25+ countries." />
            <FAQItem question="How long does visa processing take?" answer="Processing times vary from 2 weeks to 4 months depending on the country and visa type." />
            <FAQItem question="Do you provide post-placement support?" answer="Yes, including relocation assistance, cultural integration programs, and ongoing support." />
            <FAQItem question="What is your success rate?" answer="We maintain a 99.7% approval rate across all visa categories and countries we serve." />
            <FAQItem question="Can I track my application status?" answer="Yes, our client dashboard provides real-time updates on your application progress." />
          </AnimatedSection>
        </div>
      </div>

      {/* 19. Newsletter Signup */}
      <div className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Stay Informed</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">Get the latest visa updates, immigration news, and exclusive opportunities delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-[#A29BFE] transition-colors rounded-xl" />
              <button className="bg-[#A29BFE] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 rounded-xl flex items-center justify-center gap-2">Subscribe <ArrowRight className="h-4 w-4" /></button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 20. Final CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Start Your Journey</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Ready to Expand Your Global Horizons?</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto font-light">Connect with our specialists today and discover how VisaHOBe can streamline your international recruitment and visa processing needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/book')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">Book Consultation <ArrowRight className="h-4 w-4" /></button>
              <button onClick={() => navigate('/contact')} className="border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 rounded-xl">Contact Us</button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- COUNTRIES PAGE (6 Sections) ---
// ====================================================================
const Countries = ({ navigate }) => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [query, setQuery] = useState('');
  const regions = [{ id: 'all', label: 'All Regions' }, { id: 'asia', label: 'Asia Pacific' }, { id: 'middle-east', label: 'Middle East' }, { id: 'europe', label: 'Europe' }, { id: 'americas', label: 'Americas' }];
  const destinations = [
    { name: 'Singapore', region: 'asia', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', desc: 'Prime hub for corporate careers, finance, and biotech across Asia.', sectors: ['Finance', 'Tech', 'Healthcare'], hasVisaData: true },
    { name: 'Japan', region: 'asia', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', desc: 'World-leading engineering, robotics, and specified-skilled-worker pathways.', sectors: ['Engineering', 'IT', 'Manufacturing'], hasVisaData: true },
    { name: 'Australia', region: 'asia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800', desc: 'Skilled migration, mining boom, and a strong healthcare workforce gap.', sectors: ['Mining', 'Healthcare', 'IT'], hasVisaData: false },
    { name: 'Singapore', region: 'asia', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800', desc: 'Employment Pass and Tech.Pass for global professionals.', sectors: ['Finance', 'AI'], hasVisaData: true },
    { name: 'UAE', region: 'middle-east', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', desc: 'Tax-free salaries, Golden Visa programme, and Dubai/Abu Dhabi growth.', sectors: ['Construction', 'Hospitality', 'Finance'], hasVisaData: true },
    { name: 'Saudi Arabia', region: 'middle-east', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800', desc: 'NEOM, Red Sea, and Vision 2030 megaprojects hiring globally.', sectors: ['Construction', 'Energy', 'Tech'], hasVisaData: true },
    { name: 'Kuwait', region: 'middle-east', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800', desc: 'Oil & gas, healthcare and education roles with tax-free pay.', sectors: ['Energy', 'Healthcare'], hasVisaData: false },
    { name: 'Schengen', region: 'europe', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800', desc: 'Single visa across 27 European countries for tourism and business.', sectors: ['Tourism', 'Business'], hasVisaData: false },
    { name: 'Serbia', region: 'europe', image: 'https://images.unsplash.com/photo-1574236170880-faaf960c9c7a?w=800', desc: 'Easy work permits, growing IT outsourcing and Balkans gateway.', sectors: ['IT', 'Manufacturing'], hasVisaData: false },
    { name: 'Moldova', region: 'europe', image: 'https://images.unsplash.com/photo-1601731223237-c1f1f37c6f5d?w=800', desc: 'Affordable European base with EU candidate status and IT growth.', sectors: ['IT', 'Agriculture'], hasVisaData: false },
    { name: 'Belarus', region: 'europe', image: 'https://images.unsplash.com/photo-1597055181300-e3633a917a1b?w=800', desc: 'Hi-Tech Park residency for IT specialists and entrepreneurs.', sectors: ['IT', 'Engineering'], hasVisaData: false },
    { name: 'Cambodia', region: 'asia', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800', desc: 'Easy E-class business visa, fast company setup, low cost of living.', sectors: ['Tourism', 'Business', 'NGO'], hasVisaData: false },
    { name: 'USA', region: 'americas', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800', desc: 'H-1B, O-1 and EB programmes — the worlds largest opportunity market.', sectors: ['Tech', 'Finance', 'Research'], hasVisaData: false },
  ];
  const q = query.trim().toLowerCase();
  const filtered = destinations.filter(d => {
    const regionOk = activeRegion === 'all' || d.region === activeRegion;
    if (!regionOk) return false;
    if (!q) return true;
    return d.name.toLowerCase().includes(q) || d.sectors.some(s => s.toLowerCase().includes(q)) || d.desc.toLowerCase().includes(q);
  });

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600" title="Global Sectors" subtitle="Operational Reach" subtitleBelow="Countries" />

      {/* 2. Region Filter & Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <div className="mb-6 relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search countries, sectors, or keywords…"
            aria-label="Search countries"
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium outline-none focus:border-[#6C5CE7] transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-12">
          {regions.map(region => <button key={region.id} onClick={() => setActiveRegion(region.id)} className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${activeRegion === region.id ? 'bg-[#6C5CE7] text-white' : 'bg-white text-gray-500 hover:text-[#6C5CE7] hover:bg-gray-50 border border-gray-200'}`}>{region.label}</button>)}
        </div>
        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center">
            <Globe className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-black text-[#6C5CE7] mb-2">No countries match your search</h3>
            <p className="text-sm text-gray-500 mb-6">Try a different keyword or clear the region filter.</p>
            <button onClick={() => { setQuery(''); setActiveRegion('all'); }} className="bg-[#6C5CE7] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#A29BFE] transition-colors">Reset filters</button>
          </div>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {filtered.map((dest, i) => (
            <div key={i} className="group relative cursor-pointer h-[320px] sm:h-[500px] overflow-hidden bg-gray-100 border-b border-r border-gray-200"
              onClick={() => {
                if (dest.hasVisaData && COUNTRY_VISA_DATA[dest.name]) {
                  navigate(`/country/${dest.name}`);
                } else {
                  navigate('/countries');
                }
              }}>
              <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-10 text-white flex flex-col justify-end">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">{dest.sectors.map((sector, sIdx) => <span key={sIdx} className="text-[10px] sm:text-xs bg-white/20 px-2 sm:px-3 py-1 rounded-full font-medium">{sector}</span>)}</div>
                <p className="hidden sm:block text-sm text-gray-300 font-light leading-relaxed mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{dest.desc}</p>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-3xl font-bold tracking-tight">{dest.name}</h3>
                  <button className="bg-[#A29BFE] text-white px-3 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 rounded-lg">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* 3. Regional Stats */}
      <div className="bg-gray-50 py-24 mt-32">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Performance</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Regional Placements</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { region: 'Asia Pacific', placements: '18,500+', growth: '+12%' },
              { region: 'Middle East', placements: '12,200+', growth: '+8%' },
              { region: 'Europe', placements: '9,800+', growth: '+15%' },
              { region: 'Americas', placements: '7,500+', growth: '+10%' }
            ].map((stat, idx) => <div key={idx} className="bg-white p-8 border border-gray-200 hover:border-[#6C5CE7] transition-all duration-300 rounded-2xl"><h3 className="text-lg font-bold text-[#6C5CE7] mb-4">{stat.region}</h3><div className="text-4xl font-black text-[#6C5CE7] mb-2">{stat.placements}</div><div className="flex items-center gap-2 text-[#A29BFE] font-bold text-sm"><TrendingUp className="h-4 w-4" />{stat.growth} YoY Growth</div></div>)}
          </div>
        </div>
      </div>

      {/* 4. Visa Requirements Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Requirements</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Visa Categories</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: PlaneTakeoff, title: 'Visitor Visas', desc: 'Tourist, business, and transit visas for short-term stays across multiple countries.' },
              { icon: Briefcase, title: 'Work Visas', desc: 'Employment passes, skilled worker visas, and work permits for professionals.' },
              { icon: GraduationCap, title: 'Study Visas', desc: 'Student visas for universities, colleges, and language schools worldwide.' },
              { icon: HomeIcon, title: 'Residency Visas', desc: 'Permanent residence, PR applications, and long-term settlement programs.' },
              { icon: Landmark, title: 'Investor Visas', desc: 'Business investment, entrepreneur, and high-net-worth individual programs.' },
              { icon: UsersRound, title: 'Family Visas', desc: 'Spouse, dependent, and family reunification visas with full support.' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-gray-50 p-8 border border-gray-200 hover:border-[#6C5CE7] transition-all duration-300 rounded-2xl group">
                <item.icon className="h-10 w-10 text-[#A29BFE] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Why Choose Us */}
      <div className="py-24 bg-[#2D1B69]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Advantages</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Why Choose Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: ShieldCheck, title: '100% Compliance', desc: 'We maintain rigorous standards to ensure full regulatory compliance across all jurisdictions.' },
              { icon: Clock4, title: 'Fast Processing', desc: 'Streamlined processes and expert knowledge ensure the fastest possible visa processing times.' },
              { icon: Users, title: 'Expert Team', desc: 'Our team of immigration specialists has decades of combined experience in global mobility.' },
              { icon: Globe, title: 'Global Network', desc: 'Offices in 25+ countries provide localized support and deep understanding of regional requirements.' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
                <item.icon className="h-10 w-10 text-[#A29BFE] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ready to Explore Your Options?</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Book a free consultation with our visa specialists today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/book')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">Book Consultation <ArrowRight className="h-4 w-4" /></button>
            <button onClick={() => navigate('/contact')} className="border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 rounded-xl">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- JOBS PAGE (6 Sections) ---
// ====================================================================
const Jobs = ({ navigate }) => {
  const [filter, setFilter] = useState('all');
  const departments = ['all', 'Engineering', 'Healthcare', 'Finance', 'Technology', 'Construction'];
  const jobs = [
    { title: "Senior Software Engineer", dept: "Technology", loc: "Singapore", type: "Full-Time", salary: "$120k-$180k", posted: "2 days ago", icon: Monitor },
    { title: "Registered Nurse", dept: "Healthcare", loc: "UK", type: "Full-Time", salary: "£45k-£60k", posted: "5 days ago", icon: BriefcaseMedical },
    { title: "Financial Analyst", dept: "Finance", loc: "Dubai", type: "Full-Time", salary: "$80k-$120k", posted: "1 week ago", icon: DollarSign },
    { title: "Civil Engineer", dept: "Construction", loc: "UAE", type: "Full-Time", salary: "$60k-$90k", posted: "2 weeks ago", icon: Building2 },
    { title: "Data Scientist", dept: "Technology", loc: "Canada", type: "Full-Time", salary: "$100k-$150k", posted: "3 days ago", icon: Monitor },
    { title: "Project Manager", dept: "Engineering", loc: "Australia", type: "Full-Time", salary: "$90k-$130k", posted: "1 week ago", icon: Briefcase },
    { title: "Accountant", dept: "Finance", loc: "Singapore", type: "Full-Time", salary: "$50k-$80k", posted: "4 days ago", icon: DollarSign },
    { title: "Mechanical Engineer", dept: "Engineering", loc: "Germany", type: "Full-Time", salary: "€60k-€90k", posted: "6 days ago", icon: Building2 }
  ];
  const filteredJobs = filter === 'all' ? jobs : jobs.filter(j => j.dept === filter);

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600" title="Career Opportunities" subtitle="Open Positions" subtitleBelow="Jobs" />

      {/* 2. Job Listings */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl font-black text-[#6C5CE7]" style={{ fontFamily: 'Playfair Display, serif' }}>Available Positions</h2>
          <div className="flex flex-wrap gap-3">
            {departments.map(dept => <button key={dept} onClick={() => setFilter(dept)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${filter === dept ? 'bg-[#6C5CE7] text-white' : 'bg-white text-gray-500 hover:text-[#6C5CE7] hover:bg-gray-100 border border-gray-200'}`}>{dept === 'all' ? 'All' : dept}</button>)}
          </div>
        </div>
        <div className="space-y-4">
          {filteredJobs.map((job, i) => (
            <div key={i} className="bg-white border border-gray-200 p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg rounded-xl">
              <div className="mb-6 md:mb-0 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <job.icon className="h-8 w-8 text-[#A29BFE]" />
                  <h3 className="text-xl font-bold text-[#6C5CE7] tracking-tight">{job.title}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Briefcase className="h-3 w-3 text-[#A29BFE]"/>{job.dept}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#A29BFE]"/>{job.loc}</span>
                  <span className="text-[#6C5CE7] border border-[#6C5CE7] px-2 py-0.5 rounded">{job.type}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3 w-3 text-[#A29BFE]"/>{job.salary}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-gray-400"/>{job.posted}</span>
                </div>
              </div>
              <button onClick={() => navigate('/book')} className="w-full md:w-auto bg-[#6C5CE7] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center justify-center gap-2 rounded-lg">Apply Now <ArrowRight className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Stats */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Open Positions', value: '250+' },
              { label: 'Companies Hiring', value: '180+' },
              { label: 'Countries', value: '25+' },
              { label: 'Placements/Month', value: '50+' }
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl font-black text-[#6C5CE7] mb-2">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. How to Apply */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Process</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">How to Apply</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit CV', desc: 'Upload your resume and complete the application form online.' },
              { step: '02', title: 'Screening', desc: 'Our team reviews your qualifications and matches you with opportunities.' },
              { step: '03', title: 'Interview', desc: 'Prepare for interviews with our coaching and guidance support.' },
              { step: '04', title: 'Placement', desc: 'Successful placement with visa processing and relocation support.' }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#6C5CE7] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Testimonials */}
      <div className="py-20 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-[#A29BFE] mx-auto mb-8 opacity-30" />
          <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>"VisaHOBe found me the perfect engineering role in Australia within 3 weeks. The entire process was seamless."</h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#A29BFE] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MK</span>
            </div>
            <div className="text-left">
              <p className="text-white font-bold">Michael Kim</p>
              <p className="text-gray-400 text-sm">Senior Engineer, Sydney</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Can't Find Your Role?</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Submit your CV and let us find the perfect opportunity for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="bg-[#A29BFE] text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">Submit Your CV <ArrowRight className="h-4 w-4" /></button>
            <button onClick={() => navigate('/book')} className="border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 rounded-xl">Book Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- DOCUMENTS PAGE (6 Sections) ---
// ====================================================================
const Documents = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const tabs = [{ id: 'templates', label: 'Templates' }, { id: 'checklists', label: 'Checklists' }, { id: 'guides', label: 'Guides' }, { id: 'forms', label: 'Forms' }];
  const docs = {
    templates: [
      { icon: FileText, title: 'Cover Letter Template', type: 'DOCX', size: '450 KB' },
      { icon: FileText, title: 'CV/Resume Format', type: 'DOCX', size: '320 KB' },
      { icon: FileText, title: 'Employment Contract', type: 'DOCX', size: '180 KB' },
      { icon: FileText, title: 'Reference Letter Format', type: 'DOCX', size: '120 KB' }
    ],
    checklists: [
      { icon: CheckCircle2, title: 'Work Visa Requirements', items: '12 Items' },
      { icon: CheckCircle2, title: 'Student Visa Checklist', items: '15 Items' },
      { icon: CheckCircle2, title: 'PR Application Checklist', items: '20 Items' },
      { icon: CheckCircle2, title: 'Business Visa Requirements', items: '8 Items' }
    ],
    guides: [
      { icon: BookOpen, title: 'Complete Visa Guide 2025', type: 'PDF', size: '4.2 MB' },
      { icon: BookOpen, title: 'Country-Specific Requirements', type: 'PDF', size: '2.8 MB' },
      { icon: BookOpen, title: 'Interview Preparation Guide', type: 'PDF', size: '1.5 MB' },
      { icon: BookOpen, title: 'Relocation Handbook', type: 'PDF', size: '3.1 MB' }
    ],
    forms: [
      { icon: FileTextIcon, title: 'Application Form', type: 'Form', size: '250 KB' },
      { icon: FileTextIcon, title: 'Declaration Form', type: 'Form', size: '180 KB' },
      { icon: FileTextIcon, title: 'Sponsor Letter Template', type: 'Form', size: '120 KB' },
      { icon: FileTextIcon, title: 'Consent Form', type: 'Form', size: '95 KB' }
    ]
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600" title="Document Center" subtitle="Resources" subtitleBelow="Documents" />

      {/* 2. Tabs & Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-4">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${activeTab === tab.id ? 'bg-[#6C5CE7] text-white' : 'bg-white text-gray-500 hover:text-[#6C5CE7] hover:bg-gray-50 border border-gray-200'}`}>{tab.label}</button>)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs[activeTab].map((doc, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="bg-white p-8 border border-gray-200 hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-lg group cursor-pointer rounded-2xl">
              <div className="flex items-start justify-between mb-4">
                <doc.icon className="h-10 w-10 text-[#A29BFE]" />
                <Download className="h-5 w-5 text-gray-400 group-hover:text-[#6C5CE7] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#6C5CE7] mb-2">{doc.title}</h3>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="bg-gray-200 px-2 py-1 rounded">{doc.type}</span>
                <span>{doc.size || doc.items}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* 3. Upload Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Upload className="h-16 w-16 text-[#A29BFE] mx-auto mb-6" />
          <h3 className="text-3xl font-black text-[#6C5CE7] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Upload Your Documents</h3>
          <p className="text-gray-500 font-light mb-8">Securely upload your documents for review by our visa specialists.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 hover:border-[#6C5CE7] transition-colors cursor-pointer">
            <p className="text-gray-400 mb-4">Drag and drop files here, or click to browse</p>
            <button className="bg-[#6C5CE7] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors rounded-lg">Select Files</button>
          </div>
        </div>
      </div>

      {/* 4. Popular Documents */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Downloads</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Most Downloaded</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { title: 'Complete Visa Guide 2025', downloads: '12,500+', type: 'PDF' },
              { title: 'Work Visa Requirements Checklist', downloads: '8,200+', type: 'PDF' },
              { title: 'CV/Resume Template', downloads: '6,800+', type: 'DOCX' },
              { title: 'Interview Preparation Guide', downloads: '5,400+', type: 'PDF' }
            ].map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6C5CE7] transition-colors">
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-[#A29BFE]" />
                  <div>
                    <h4 className="font-bold text-[#6C5CE7]">{doc.title}</h4>
                    <p className="text-xs text-gray-400">{doc.downloads} downloads • {doc.type}</p>
                  </div>
                </div>
                <button className="text-[#6C5CE7] text-xs font-bold uppercase tracking-widest hover:text-[#A29BFE] transition-colors flex items-center gap-2">Download <Download className="h-3 w-3" /></button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Tips */}
      <div className="py-20 bg-[#2D1B69]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Guidance</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Document Tips</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: 'Accuracy Matters', desc: 'Ensure all information matches your official documents exactly.' },
              { icon: Clock4, title: 'Validity Period', desc: 'Check expiration dates - most documents must be valid for 6+ months.' },
              { icon: ShieldCheck, title: 'Attestation', desc: 'Some countries require notarized or apostilled documents.' }
            ].map((tip, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
                <tip.icon className="h-10 w-10 text-[#A29BFE] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tip.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Need Help With Documents?</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Our specialists can review and prepare all your documents.</p>
          <button onClick={() => navigate('/book')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto rounded-xl">Book Document Review <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- PROFILE PAGE (6 Sections) ---
// ====================================================================
const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = ['overview', 'applications', 'documents', 'settings'];

  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+65 9123 4567',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    applications: [
      { title: 'Work Permit - Singapore', status: 'Approved', date: 'Oct 15, 2025' },
      { title: 'Student Visa - UK', status: 'In Review', date: 'Oct 20, 2025' },
      { title: 'PR Application - Canada', status: 'Submitted', date: 'Oct 25, 2025' }
    ]
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20 bg-gray-50 min-h-screen">
      {/* 1. Profile Header */}
      <div className="bg-[#6C5CE7] pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-white/20" />
            <div>
              <h2 className="text-3xl font-black text-white">{user.name}</h2>
              <p className="text-gray-300 font-light">{user.location}</p>
              <p className="text-gray-400 text-sm mt-1">{user.email} | {user.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Tab Navigation & Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
          <div className="flex border-b border-gray-200">
            {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-[#6C5CE7] text-white' : 'text-gray-500 hover:text-[#6C5CE7]'}`}>{tab}</button>)}
          </div>
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl"><div className="text-3xl font-black text-[#6C5CE7] mb-1">3</div><div className="text-xs text-gray-500 uppercase tracking-wider">Active Applications</div></div>
                  <div className="bg-green-50 p-6 rounded-xl"><div className="text-3xl font-black text-green-600 mb-1">1</div><div className="text-xs text-gray-500 uppercase tracking-wider">Approved</div></div>
                  <div className="bg-yellow-50 p-6 rounded-xl"><div className="text-3xl font-black text-yellow-600 mb-1">2</div><div className="text-xs text-gray-500 uppercase tracking-wider">Pending</div></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#6C5CE7] mb-4">Recent Applications</h3>
                  <div className="space-y-4">
                    {user.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">{app.title}</h4>
                          <p className="text-xs text-gray-400">{app.date}</p>
                        </div>
                        <span className={`text-xs font-bold uppercase px-3 py-1 rounded ${app.status === 'Approved' ? 'bg-green-100 text-green-700' : app.status === 'In Review' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>{app.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'applications' && (
              <div className="space-y-4">
                {user.applications.map((app, idx) => (
                  <div key={idx} className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-[#6C5CE7]">{app.title}</h4>
                      <span className={`text-xs font-bold uppercase px-3 py-1 rounded ${app.status === 'Approved' ? 'bg-green-100 text-green-700' : app.status === 'In Review' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>{app.status}</span>
                    </div>
                    <p className="text-sm text-gray-500">{app.date}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'documents' && (
              <div className="space-y-4">
                {['Passport Copy', 'Academic Certificates', 'Employment Letters', 'Medical Reports'].map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#A29BFE]" />
                      <span className="font-medium text-gray-700">{doc}</span>
                    </div>
                    <button className="text-[#6C5CE7] text-xs font-bold uppercase tracking-widest hover:text-[#A29BFE] transition-colors">Upload</button>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" defaultValue={user.name} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-[#6C5CE7] transition-colors font-medium text-sm rounded-lg" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" defaultValue={user.email} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-[#6C5CE7] transition-colors font-medium text-sm rounded-lg" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" defaultValue={user.phone} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-[#6C5CE7] transition-colors font-medium text-sm rounded-lg" />
                </div>
                <button className="w-full bg-[#6C5CE7] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors rounded-lg">Save Changes</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Quick Actions */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Calendar, title: 'Book Consultation', desc: 'Schedule a free consultation with our specialists.' },
            { icon: FileText, title: 'Upload Documents', desc: 'Submit required documents securely.' },
            { icon: MessageCircle, title: 'Contact Support', desc: 'Get help with your applications.' }
          ].map((action, idx) => (
            <div key={idx} className="bg-white p-6 border border-gray-200 rounded-xl hover:border-[#6C5CE7] transition-colors cursor-pointer">
              <action.icon className="h-8 w-8 text-[#A29BFE] mb-4" />
              <h4 className="font-bold text-[#6C5CE7] mb-2">{action.title}</h4>
              <p className="text-xs text-gray-500">{action.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Activity Feed */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-8">
        <div className="bg-white p-8 border border-gray-200 rounded-2xl">
          <h3 className="text-lg font-bold text-[#6C5CE7] mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Application Submitted', detail: 'Work Permit - Singapore', time: '2 days ago' },
              { action: 'Document Uploaded', detail: 'Passport Copy', time: '3 days ago' },
              { action: 'Profile Updated', detail: 'Phone number changed', time: '1 week ago' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-[#6C5CE7]"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{item.action}</p>
                  <p className="text-xs text-gray-400">{item.detail}</p>
                </div>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Notifications */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-8">
        <div className="bg-white p-8 border border-gray-200 rounded-2xl">
          <h3 className="text-lg font-bold text-[#6C5CE7] mb-6">Notifications</h3>
          <div className="space-y-4">
            {[
              { msg: 'Your Work Permit application has been approved!', type: 'success' },
              { msg: 'Please upload additional documents for Student Visa.', type: 'warning' },
              { msg: 'Your profile has been updated successfully.', type: 'info' }
            ].map((notif, idx) => (
              <div key={idx} className={`p-4 rounded-lg ${notif.type === 'success' ? 'bg-green-50 border border-green-200' : notif.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'}`}>
                <p className="text-sm font-medium text-gray-800">{notif.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Account Security */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-8">
        <div className="bg-white p-8 border border-gray-200 rounded-2xl">
          <h3 className="text-lg font-bold text-[#6C5CE7] mb-6">Account Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-[#A29BFE]" />
                <span className="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
              </div>
              <button className="text-xs font-bold text-[#6C5CE7] uppercase">Enable</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-[#A29BFE]" />
                <span className="text-sm font-medium text-gray-700">Change Password</span>
              </div>
              <button className="text-xs font-bold text-[#6C5CE7] uppercase">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- NEWS PAGE (6 Sections) ---
// ====================================================================
const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'Immigration', 'Industry', 'Technology', 'Policy'];
  const posts = [
    { date: "Oct 12, 2025", category: "Immigration", title: "Navigating EU Blue Card Regulatory Updates", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", readTime: "5 min" },
    { date: "Sep 28, 2025", category: "Industry", title: "Strategic Analysis: Asian Tech Hubs in 2026", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600", readTime: "8 min" },
    { date: "Sep 15, 2025", category: "Technology", title: "AI Integration in Institutional Recruitment", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600", readTime: "6 min" },
    { date: "Sep 05, 2025", category: "Policy", title: "Singapore EP Framework Changes 2025", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600", readTime: "7 min" },
    { date: "Aug 22, 2025", category: "Immigration", title: "Canada Express Entry Updates", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600", readTime: "4 min" },
    { date: "Aug 10, 2025", category: "Industry", title: "Healthcare Talent Shortage Report", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600", readTime: "9 min" }
  ];
  const filtered = activeCategory === 'all' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600" title="Intelligence" subtitle="News & Briefings" subtitleBelow="News" />

      {/* 2. Featured Article & Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-wrap gap-4 mb-12">{categories.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${activeCategory === cat ? 'bg-[#6C5CE7] text-white' : 'bg-white text-gray-500 hover:text-[#6C5CE7] hover:bg-gray-50 border border-gray-200'}`}>{cat}</button>)}</div>
        {filtered.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
              <div className="h-[400px] lg:h-auto"><img src={filtered[0].img} alt={filtered[0].title} className="w-full h-full object-cover" /></div>
              <div className="p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#A29BFE] text-[10px] font-bold tracking-[0.2em] uppercase bg-[#A29BFE]/10 px-3 py-1 rounded-full">{filtered[0].category}</span>
                  <span className="text-gray-400 text-xs font-medium">{filtered[0].date}</span>
                  <span className="text-gray-400 text-xs font-medium flex items-center gap-1"><Clock className="h-3 w-3"/>{filtered[0].readTime} read</span>
                </div>
                <h3 className="text-3xl font-black text-[#6C5CE7] leading-snug tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{filtered[0].title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">Stay informed with the latest regulatory changes, industry trends, and strategic insights.</p>
                <button className="text-[#6C5CE7] font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:text-[#A29BFE] transition-colors">Read Article <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.slice(1).map((post, i) => (
            <div key={i} className="bg-white border border-gray-200 cursor-pointer group transition-all duration-300 hover:border-[#6C5CE7] hover:shadow-xl rounded-2xl overflow-hidden">
              <div className="h-56 overflow-hidden relative"><img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /><div className="absolute top-4 left-4"><span className="text-[#A29BFE] text-[10px] font-bold tracking-[0.2em] uppercase bg-white/90 px-3 py-1 rounded-full">{post.category}</span></div></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4"><span className="text-[#A29BFE] text-[10px] font-bold tracking-[0.2em] uppercase">{post.date}</span><span className="text-gray-400 text-xs font-medium flex items-center gap-1"><Clock className="h-3 w-3"/>{post.readTime}</span></div>
                <h3 className="text-xl font-black text-[#6C5CE7] leading-snug tracking-tight mb-4 group-hover:text-[#A29BFE] transition-colors">{post.title}</h3>
                <div className="mt-6 h-px w-12 bg-[#6C5CE7] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Subscribe Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Bell className="h-16 w-16 text-[#A29BFE] mx-auto mb-6" />
          <h3 className="text-3xl font-black text-[#6C5CE7] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Stay Updated</h3>
          <p className="text-gray-500 font-light mb-8">Subscribe to receive the latest news and updates directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 bg-white border border-gray-200 outline-none focus:border-[#6C5CE7] transition-colors rounded-xl" />
            <button className="bg-[#6C5CE7] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors rounded-xl">Subscribe</button>
          </div>
        </div>
      </div>

      {/* 4. Categories Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: 'Immigration', count: '24', icon: Globe },
              { category: 'Industry', count: '18', icon: Building },
              { category: 'Technology', count: '15', icon: Monitor },
              { category: 'Policy', count: '21', icon: Shield }
            ].map((cat, idx) => (
              <div key={idx} className="text-center p-6 border border-gray-200 rounded-2xl hover:border-[#6C5CE7] transition-colors">
                <cat.icon className="h-10 w-10 text-[#A29BFE] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-[#6C5CE7] mb-2">{cat.category}</h4>
                <p className="text-3xl font-black text-[#6C5CE7]">{cat.count}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Articles</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Editorial Team */}
      <div className="py-20 bg-[#2D1B69]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Editorial Team</h3>
          <p className="text-gray-400 font-light mb-12 max-w-2xl mx-auto">Expert journalists and industry analysts delivering accurate, timely immigration news.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Mitchell', role: 'Senior Editor', specialty: 'Immigration Policy' },
              { name: 'David Chen', role: 'Industry Analyst', specialty: 'Global Markets' },
              { name: 'Emily Roberts', role: 'Tech Correspondent', specialty: 'AI & Recruitment' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#A29BFE]/50 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A29BFE] to-[#FD79A8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-[#A29BFE] text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Need Expert Guidance?</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Connect with our immigration specialists for personalized advice.</p>
          <button onClick={() => navigate('/contact')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto rounded-xl">Contact Our Team <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- SERVICES PAGE (6 Sections) ---
// ====================================================================
const Services = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Recruitment', 'Visa Processing', 'Consulting', 'Compliance'];
  const content = [
    { icon: Users, title: 'Manpower Acquisition', subtitle: 'Strategic Talent Sourcing', desc: 'We execute targeted searches, rigorous screening, and strategic deployment of highly specialized professionals.', features: ['Executive Search & Headhunting', 'Volume Recruitment Solutions', 'Technical Skill Assessment', 'Background Verification', 'Onboarding Support'], image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800' },
    { icon: Plane, title: 'Immigration Compliance', subtitle: 'Visa & Documentation', desc: 'Our legal processing divisions manage complex visa portfolios end-to-end.', features: ['Work Permit Processing', 'Employment Pass Applications', 'Dependent & Family Visas', 'Visa Renewals & Extensions', 'Appeal Handling'], image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800' },
    { icon: Briefcase, title: 'Corporate Consulting', subtitle: 'Strategic Advisory', desc: 'Strategic advisory for international workforce mobility and expansion planning.', features: ['Market Entry Strategy', 'Labor Law Compliance Audit', 'Workforce Planning', 'Expatriate Policy Design', 'Risk Assessment'], image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800' },
    { icon: Shield, title: 'Regulatory Compliance', subtitle: 'Legal Framework', desc: 'Comprehensive legal support ensuring absolute regulatory adherence.', features: ['Policy Monitoring & Alerts', 'Compliance Documentation', 'Audit Preparation', 'Legal Representation', 'Training & Workshops'], image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800' }
  ];
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600" title="Service Protocols" subtitle="Our Expertise" subtitleBelow="Services" />

      {/* 2. Tabs & Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-4">{tabs.map((tab, idx) => <button key={idx} onClick={() => setActiveTab(idx)} className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${activeTab === idx ? 'bg-[#6C5CE7] text-white' : 'bg-white text-gray-500 hover:text-[#6C5CE7] hover:bg-gray-50 border border-gray-200'}`}>{tab}</button>)}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="border-l-4 border-[#A29BFE] pl-6 mb-8">
              {React.createElement(content[activeTab].icon, { className: 'h-8 w-8 text-[#6C5CE7] mb-6' })}
              <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{content[activeTab].subtitle}</h4>
              <h2 className="text-4xl font-black text-[#6C5CE7] tracking-tight">{content[activeTab].title}</h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">{content[activeTab].desc}</p>
            <ul className="space-y-4 mb-12">{content[activeTab].features.map((feature, fIdx) => <li key={fIdx} className="flex items-center gap-3 text-gray-600"><CheckCircle2 className="h-5 w-5 text-[#A29BFE] shrink-0" /><span className="font-medium">{feature}</span></li>)}</ul>
            <button onClick={() => navigate('/book')} className="bg-[#6C5CE7] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center gap-3 rounded-xl">Request Consultation <ArrowRight className="h-4 w-4" /></button>
          </div>
          <img src={content[activeTab].image} className="w-full h-[500px] object-cover rounded-2xl border border-gray-200" alt={content[activeTab].title} />
        </div>
      </div>

      {/* 3. Service Stats */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Services Offered', value: '50+' },
              { label: 'Countries Covered', value: '25+' },
              { label: 'Success Rate', value: '99.7%' },
              { label: 'Client Satisfaction', value: '4.9/5' }
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl font-black text-[#6C5CE7] mb-2">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Workflow</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Our Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Consultation', 'Assessment', 'Application', 'Processing', 'Delivery'].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 100} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-[#6C5CE7]">{step}</h4>
                {idx < 4 && <div className="hidden md:block h-px w-full bg-gray-200 mt-8 absolute"></div>}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Pricing */}
      <div className="py-20 bg-[#2D1B69]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Pricing</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Service Packages</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$500', features: ['Single visa application', 'Document review', 'Email support', 'Standard processing'], popular: false },
              { name: 'Professional', price: '$1,200', features: ['Multiple visa applications', 'Full document preparation', 'Priority support', 'Expedited processing', 'Interview coaching'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited applications', 'Dedicated account manager', '24/7 support', 'Fastest processing', 'Compliance audit', 'Training programs'], popular: false }
            ].map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-[#A29BFE] to-[#FD79A8] text-white' : 'bg-white/5 border border-white/10 text-white'}`}>
                {plan.popular && <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-black mb-2 mt-4">{plan.name}</h3>
                <div className="text-4xl font-black mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('/book')} className={`w-full py-3 text-xs font-bold uppercase tracking-widest rounded-lg ${plan.popular ? 'bg-white text-[#6C5CE7] hover:bg-gray-100' : 'bg-[#6C5CE7] text-white hover:bg-[#A29BFE]'} transition-colors`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Book a consultation and let us handle the rest.</p>
          <button onClick={() => navigate('/book')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto rounded-xl">Book Consultation <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- STUDY PAGE (6 Sections) ---
// ====================================================================
const Study = ({ navigate }) => {
  const programs = [
    { title: 'Bachelor in Computer Science', country: 'Singapore', duration: '4 Years', tuition: '$30,000/yr', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', university: 'NUS' },
    { title: 'MBA Program', country: 'UK', duration: '2 Years', tuition: '£45,000/yr', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600', university: 'Oxford' },
    { title: 'Engineering PhD', country: 'Germany', duration: '3-4 Years', tuition: '€15,000/yr', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600', university: 'TU Munich' },
    { title: 'Medical Degree', country: 'Australia', duration: '6 Years', tuition: 'AUD 60,000/yr', image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600', university: 'UNSW' },
    { title: 'Business Analytics', country: 'Canada', duration: '2 Years', tuition: 'CAD 35,000/yr', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', university: 'UofT' },
    { title: 'Fine Arts Master', country: 'Japan', duration: '2 Years', tuition: '¥1,500,000/yr', image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600', university: 'Tokyo Univ. of Arts' }
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600" title="Study Abroad" subtitle="Education Programs" subtitleBelow="Study" />

      {/* 2. Programs Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection className="text-center mb-16">
          <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Programs</h4>
          <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Featured Programs</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="bg-white border border-gray-200 overflow-hidden hover:border-[#6C5CE7] hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl">
              <div className="h-56 overflow-hidden"><img src={prog.image} alt={prog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" /></div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#A29BFE] text-xs font-bold uppercase tracking-wider">{prog.university}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500 text-xs">{prog.country}</span>
                </div>
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-4">{prog.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4"/>{prog.duration}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-4 w-4"/>{prog.tuition}</span>
                </div>
                <button onClick={() => navigate('/book')} className="w-full bg-gray-100 text-[#6C5CE7] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6C5CE7] hover:text-white transition-colors rounded-lg">Apply Now</button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* 3. Benefits */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: 'Top Universities', desc: 'Access to world-ranked universities and educational institutions globally.' },
              { icon: DollarSign, title: 'Scholarships', desc: 'Guidance on scholarship applications and financial aid opportunities.' },
              { icon: Globe, title: 'Global Network', desc: 'Connect with alumni and students from around the world.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 rounded-2xl hover:border-[#6C5CE7] transition-colors">
                <item.icon className="h-10 w-10 text-[#A29BFE] mb-4" />
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Steps</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Application Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Choose Program', 'Submit Application', 'Get Acceptance', 'Apply for Visa'].map((step, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-[#6C5CE7]">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Student Testimonials */}
      <div className="py-20 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-[#A29BFE] mx-auto mb-8 opacity-30" />
          <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>"VisaHOBe made my dream of studying at Oxford a reality. They handled everything from application to visa."</h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#A29BFE] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">LS</span>
            </div>
            <div className="text-left">
              <p className="text-white font-bold">Lisa Wang</p>
              <p className="text-gray-400 text-sm">MBA Student, Oxford</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Start Your Academic Journey</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Book a free consultation with our education advisors.</p>
          <button onClick={() => navigate('/book')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto rounded-xl">Book Consultation <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- INVEST PAGE (6 Sections) ---
// ====================================================================
const Invest = ({ navigate }) => {
  const programs = [
    { title: 'Singapore Global Investor', investment: '$2.5M+', benefits: ['PR Eligibility', 'Tax Benefits', 'Business Setup'], processing: '6-12 Months' },
    { title: 'UK Innovator Visa', investment: '£50K+', benefits: ['Startup Funding', 'Residency Path', 'Networking'], processing: '3-6 Months' },
    { title: 'Canada Start-Up', investment: 'CAD 200K+', benefits: ['PR Track', 'Innovation Hub', 'Support Network'], processing: '12-16 Months' },
    { title: 'Australia Business Innovation', investment: 'AUD 800K+', benefits: ['Residency', 'Business Growth', 'Family Inclusion'], processing: '9-15 Months' }
  ];
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* 1. Parallax Hero */}
      <ParallaxSection image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600" title="Investment Immigration" subtitle="Investor Programs" subtitleBelow="Invest" />

      {/* 2. Programs Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection className="text-center mb-16">
          <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Opportunities</h4>
          <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Investor Visa Programs</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <AnimatedSection key={idx} delay={idx * 100} className="bg-white p-10 border border-gray-200 hover:border-[#6C5CE7] hover:shadow-xl transition-all duration-300 group rounded-2xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-[#6C5CE7] mb-2">{prog.title}</h3>
                  <div className="text-[#A29BFE] text-lg font-bold">{prog.investment}</div>
                </div>
                <Wallet className="h-10 w-10 text-gray-300 group-hover:text-[#A29BFE] transition-colors" />
              </div>
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Key Benefits</h4>
                <div className="flex flex-wrap gap-2">{prog.benefits.map((benefit, bIdx) => <span key={bIdx} className="bg-blue-50 text-[#6C5CE7] px-3 py-1 text-xs font-medium rounded-lg">{benefit}</span>)}</div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4"/>{prog.processing}</span>
              </div>
              <button onClick={() => navigate('/book')} className="w-full bg-[#6C5CE7] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#A29BFE] transition-colors flex items-center justify-center gap-2 rounded-lg">Learn More <ArrowRight className="h-4 w-4" /></button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* 3. Why Invest */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'High ROI', desc: 'Strong returns on investment with favorable economic conditions.' },
              { icon: ShieldCheck, title: 'Secure', desc: 'Government-backed programs with legal protections.' },
              { icon: Globe, title: 'Global Access', desc: 'Residency in top-tier countries with global mobility.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 rounded-2xl hover:border-[#6C5CE7] transition-colors">
                <item.icon className="h-10 w-10 text-[#A29BFE] mb-4" />
                <h3 className="text-xl font-bold text-[#6C5CE7] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Steps</h4>
            <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Investment Process</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Initial Consultation', 'Due Diligence', 'Investment', 'Residency Approval'].map((step, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-[#6C5CE7]">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FAQ */}
      <div className="py-20 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>FAQ</h4>
            <h2 className="text-5xl font-black text-white tracking-tight">Common Questions</h2>
          </AnimatedSection>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <FAQItem question="What is the minimum investment amount?" answer="Investment requirements vary by program, starting from £50K for the UK Innovator Visa to $2.5M for Singapore GIP." />
            <FAQItem question="Can I bring my family?" answer="Most investor programs allow you to include your spouse and dependent children in your application." />
            <FAQItem question="How long does processing take?" answer="Processing times range from 3-16 months depending on the program and country." />
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Explore Investment Options</h2>
          <p className="text-gray-300 text-lg mb-8 font-light">Schedule a consultation with our investment immigration specialists.</p>
          <button onClick={() => navigate('/book')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mx-auto rounded-xl">Book Consultation <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
};

// ====================================================================
// --- ABOUT PAGE (6 Sections) ---
// ====================================================================
const About = () => (
  <div className="animate-in fade-in duration-500 pb-20">
    {/* 1. Parallax Hero */}
    <ParallaxSection image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600" title="Firm Profile" subtitle="About Us" subtitleBelow="About" />

    {/* 2. Executive Summary */}
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
      <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Corporate History</h4>
          <h2 className="text-5xl font-black text-[#6C5CE7] mb-8 tracking-tight">Executive Summary</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">Founded with a vision to bridge the gap between global talent and industry-leading organizations, VisaHOBe Pte. Ltd. has established itself as a premier institutional manpower recruitment and visa agency.</p>
          <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-white p-8"><h4 className="font-black text-xl text-[#6C5CE7] mb-2 uppercase tracking-wide">Integrity</h4><p className="text-sm text-gray-500 font-light">Transparent, auditable processes.</p></div>
            <div className="bg-white p-8"><h4 className="font-black text-xl text-[#6C5CE7] mb-2 uppercase tracking-wide">Excellence</h4><p className="text-sm text-gray-500 font-light">Uncompromising institutional standards.</p></div>
          </div>
        </div>
        <div className="relative"><div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] translate-x-4 translate-y-4 rounded-2xl"></div><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" className="relative z-10 w-full h-[600px] object-cover rounded-2xl" alt="Team" /></div>
      </AnimatedSection>
    </div>

    {/* 3. Core Values */}
    <div className="bg-gray-50 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16"><h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What Drives Us</h4><h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Core Values</h2></AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[{ icon: Shield, title: 'Compliance First', desc: 'We maintain rigorous standards to ensure 100% regulatory compliance.' }, { icon: Target, title: 'Precision Matching', desc: 'Our proprietary screening methodology ensures optimal talent-to-role alignment.' }, { icon: Heart, title: 'People Centric', desc: 'We treat every candidate and client with personalized care.' }].map((value, idx) => (
            <AnimatedSection key={idx} delay={idx * 150} className="bg-white p-10 border border-gray-200 hover:border-[#6C5CE7] transition-all duration-300 hover:shadow-xl rounded-2xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#6C5CE7]/10 to-[#6C5CE7]/5 rounded-xl flex items-center justify-center mb-6"><value.icon className="h-7 w-7 text-[#6C5CE7]" /></div>
              <h3 className="text-xl font-bold text-[#6C5CE7] mb-4 tracking-tight">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">{value.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>

    {/* 4. Team */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Leadership</h4>
          <h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">Our Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'James Lee', role: 'CEO & Founder', specialty: 'Global Strategy' },
            { name: 'Sarah Chen', role: 'COO', specialty: 'Operations' },
            { name: 'Michael Wong', role: 'Head of Legal', specialty: 'Immigration Law' },
            { name: 'Emily Tan', role: 'Head of Recruitment', specialty: 'Talent Acquisition' }
          ].map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#6C5CE7] to-[#8B7FE8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-3xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h4 className="text-lg font-bold text-[#6C5CE7]">{member.name}</h4>
              <p className="text-[#A29BFE] text-sm mb-1">{member.role}</p>
              <p className="text-gray-400 text-xs">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 5. FAQ */}
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16"><h4 className="text-[#A29BFE] font-bold tracking-[0.3em] uppercase text-xs mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Common Questions</h4><h2 className="text-5xl font-black text-[#6C5CE7] tracking-tight">FAQ</h2></AnimatedSection>
        <AnimatedSection className="bg-white border border-gray-200 p-8 md:p-12 rounded-2xl">
          <FAQItem question="What industries do you specialize in?" answer="Technology, healthcare, construction, engineering, finance, and hospitality." />
          <FAQItem question="How long does visa processing take?" answer="2 weeks to 4 months depending on country and visa type." />
          <FAQItem question="Do you provide post-placement support?" answer="Yes, including relocation assistance and cultural integration programs." />
          <FAQItem question="What is your success rate?" answer="We maintain a 99.7% approval rate across all visa categories." />
        </AnimatedSection>
      </div>
    </div>

    {/* 6. CTA */}
    <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8B7FE8] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center"></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Learn More About Us</h2>
        <p className="text-gray-300 text-lg mb-8 font-light">Get in touch to discover how we can help you achieve your global goals.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('/contact')} className="bg-white text-[#6C5CE7] px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#A29BFE] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 rounded-xl">Contact Us <ArrowRight className="h-4 w-4" /></button>
          <button onClick={() => navigate('/services')} className="border border-white/30 text-white px-10 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#6C5CE7] transition-all duration-300 rounded-xl">Our Services</button>
        </div>
      </div>
    </div>
  </div>
);

// ====================================================================
// --- BOOK PAGE (6 Sections) ---
// ====================================================================

const Book = ({ navigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', service: 'consultation', message: '' });
  const [errors, setErrors] = useState({});
  const validate = (d) => {
    const e = {};
    if (!d.name.trim()) e.name = 'Please enter your full name';
    else if (d.name.trim().length > 100) e.name = 'Name must be under 100 characters';
    if (!d.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email address';
    if (d.phone && !/^[+\d\s()-]{6,20}$/.test(d.phone)) e.phone = 'Enter a valid phone number';
    if (!d.date) e.date = 'Choose a preferred date';
    else if (new Date(d.date) < new Date(new Date().toDateString())) e.date = 'Date cannot be in the past';
    if (!d.time) e.time = 'Choose a preferred time';
    if (d.message.length > 1000) e.message = 'Message must be under 1000 characters';
    return e;
  };
  const handleChange = (e) => {
    const next = { ...formData, [e.target.name]: e.target.value };
    setFormData(next);
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const eMap = validate(formData);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) {
      toast.error('Please fix the highlighted fields');
      return;
    }
    setSubmitted(true);
    toast.success("Booking confirmed! We'll be in touch shortly.");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', date: '', time: '', service: 'consultation', message: '' });
      if (navigate) navigate('/');
    }, 1800);
  };
  const inputCls = (key) => `w-full px-4 py-3 bg-gray-50 border outline-none transition-colors font-medium text-sm rounded-lg ${errors[key] ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-[#6C5CE7]'}`;
  const errMsg = (key) => errors[key] ? <p id={`${key}-error`} className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors[key]}</p> : null;
  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <ParallaxSection image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600" title="Book Consultation" subtitle="Schedule" subtitleBelow="Book" />
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection className="bg-white p-6 sm:p-8 lg:p-12 border border-gray-200 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-black text-[#6C5CE7] mb-8 tracking-tight uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>Secure Your Slot</h3>
          {submitted && <div className="mb-8 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 text-sm font-bold tracking-wide uppercase flex items-center gap-3"><CheckCircle2 className="h-5 w-5"/> Booking Confirmed Successfully</div>}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={inputCls('name')} placeholder="John Doe" />{errMsg('name')}</div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} maxLength={255} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={inputCls('email')} placeholder="email@company.com" />{errMsg('email')}</div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} maxLength={20} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} className={inputCls('phone')} placeholder="+65 XXXX XXXX" />{errMsg('phone')}</div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Service</label><select name="service" value={formData.service} onChange={handleChange} className={inputCls('service')}><option value="consultation">Consultation</option><option value="visa">Visa Processing</option><option value="recruitment">Recruitment</option><option value="study">Study Abroad</option><option value="invest">Investor Visa</option></select></div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Preferred Date *</label><input type="date" name="date" value={formData.date} onChange={handleChange} aria-invalid={!!errors.date} aria-describedby={errors.date ? 'date-error' : undefined} className={inputCls('date')} />{errMsg('date')}</div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Preferred Time *</label><input type="time" name="time" value={formData.time} onChange={handleChange} aria-invalid={!!errors.time} aria-describedby={errors.time ? 'time-error' : undefined} className={inputCls('time')} />{errMsg('time')}</div>
            </div>
            <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Message <span className="text-gray-400 normal-case font-normal">({formData.message.length}/1000)</span></label><textarea name="message" value={formData.message} onChange={handleChange} maxLength={1000} rows={4} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={inputCls('message')} placeholder="Tell us about your needs..."></textarea>{errMsg('message')}</div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:shadow-2xl transition-all rounded-xl flex items-center justify-center gap-3">Confirm Booking <ArrowRight className="h-4 w-4"/></button>
          </form>
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-24 grid grid-cols-2 md:grid-cols-3 gap-6">
        {[{i:Phone,t:'Call Us',d:'+65 6123 4567'},{i:Mail,t:'Email',d:'hello@visahobe.sg'},{i:MapPin,t:'Visit',d:'10 Anson Rd, Singapore'}].map((c,idx)=>(
          <AnimatedSection key={idx} delay={idx*100} className="bg-white p-8 border border-gray-200 rounded-2xl text-center hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 mx-auto mb-4 bg-[#6C5CE7] rounded-xl flex items-center justify-center"><c.i className="h-6 w-6 text-[#A29BFE]"/></div>
            <h4 className="text-sm font-black text-[#6C5CE7] uppercase tracking-widest mb-2">{c.t}</h4>
            <p className="text-sm text-gray-600 font-medium">{c.d}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

const Contact = ({ navigate }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = (f) => {
    const e = {};
    if (!f.name.trim()) e.name = 'Please enter your full name';
    else if (f.name.trim().length > 100) e.name = 'Name must be under 100 characters';
    if (!f.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address';
    if (f.subject && f.subject.length > 150) e.subject = 'Subject must be under 150 characters';
    if (!f.message.trim()) e.message = 'Please write a message';
    else if (f.message.length > 1000) e.message = 'Message must be under 1000 characters';
    return e;
  };
  const onChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const eMap = validate(form);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) { toast.error('Please fix the highlighted fields'); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent. We\'ll reply within 1 business day.');
      setForm({ name: '', email: '', subject: '', message: '' });
      if (navigate) navigate('/');
    }, 900);
  };
  const inputCls = (key, extra = '') => `w-full px-4 py-3 bg-gray-50 border outline-none transition-colors font-medium text-sm rounded-lg ${extra} ${errors[key] ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-[#6C5CE7]'}`;
  const errMsg = (key) => errors[key] ? <p id={`c-${key}-error`} className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors[key]}</p> : null;
  return (
    <div className="animate-in fade-in duration-500 pb-24">
      <ParallaxSection image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600" title="Contact Us" subtitle="Get in Touch" subtitleBelow="Contact" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnimatedSection className="bg-white p-6 sm:p-8 lg:p-12 border border-gray-200 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-black text-[#6C5CE7] mb-2 tracking-tight uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>Send a Message</h3>
            <p className="text-sm text-gray-500 mb-8">We'll respond within one business day.</p>
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label><input type="text" name="name" value={form.name} onChange={onChange} maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-error' : undefined} className={inputCls('name')} placeholder="John Doe" />{errMsg('name')}</div>
                <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email *</label><input type="email" name="email" value={form.email} onChange={onChange} maxLength={255} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-error' : undefined} className={inputCls('email')} placeholder="email@company.com" />{errMsg('email')}</div>
              </div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label><input type="text" name="subject" value={form.subject} onChange={onChange} maxLength={150} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'c-subject-error' : undefined} className={inputCls('subject')} placeholder="How can we help?" />{errMsg('subject')}</div>
              <div><label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Message * <span className="text-gray-400 normal-case font-normal">({form.message.length}/1000)</span></label><textarea name="message" value={form.message} onChange={onChange} maxLength={1000} rows={6} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-message-error' : undefined} className={inputCls('message', 'resize-none')} placeholder="Tell us about your needs..."></textarea>{errMsg('message')}</div>
              <button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:shadow-2xl transition-all rounded-xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed">{sending ? 'Sending…' : <>Send Message <ArrowRight className="h-4 w-4"/></>}</button>
            </form>
          </AnimatedSection>
        </div>
        <div className="space-y-6">
          {[{i:Phone,t:'Call',d:'+65 6123 4567',sub:'Mon–Fri 9am–6pm'},{i:Mail,t:'Email',d:'hello@visahobe.sg',sub:'24h response'},{i:MapPin,t:'Office',d:'10 Anson Road, #22-02',sub:'International Plaza, Singapore 079903'}].map((c,idx)=>(
            <AnimatedSection key={idx} delay={idx*100} className="bg-white p-6 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#6C5CE7] rounded-xl flex items-center justify-center"><c.i className="h-5 w-5 text-[#A29BFE]"/></div>
              <div>
                <h4 className="text-xs font-black text-[#6C5CE7] uppercase tracking-widest mb-1">{c.t}</h4>
                <p className="text-sm text-gray-800 font-semibold">{c.d}</p>
                <p className="text-xs text-gray-500 mt-1">{c.sub}</p>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={400} className="bg-gradient-to-br from-[#6C5CE7] to-[#2D1B69] text-white p-6 rounded-2xl">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#A29BFE] mb-2">Need it faster?</h4>
            <p className="text-sm text-white/80 mb-4">Book a 30-min consultation directly.</p>
            <button onClick={() => navigate && navigate('/book')} className="w-full bg-white text-[#6C5CE7] py-3 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#A29BFE] hover:text-white transition-colors flex items-center justify-center gap-2">Book Now <ArrowRight className="h-3 w-3"/></button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export { Home, About, Services, Countries, CountryDetail, Jobs, Documents, Profile, News, Study, Invest, Book, Contact, Navbar, MobileBottomNav, Footer };
