import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Zap, 
  Shield, 
  Layers, 
  Globe, 
  Users, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Brain,
  Lock,
  Code,
  Database,
  Coins,
  Award,
  Target,
  Lightbulb,
  Network,
  Smartphone,
  BarChart3,
  Clock,
  CheckSquare,
  ArrowUpRight
} from 'lucide-react';

// X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const App = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and multi-layer security protocols protect your digital assets with bank-level security standards."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Built on Layer 2 technology with sub-second transaction confirmations and minimal gas fees for optimal performance."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Chain Support",
      description: "Seamlessly interact with Ethereum, Polygon, Binance Smart Chain, Avalanche, and 20+ other blockchain networks."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Available in 200+ countries with support for 50+ fiat currencies and comprehensive regulatory compliance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Powered by a vibrant community of 50,000+ developers and governed by decentralized autonomous organization principles."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms provide real-time market insights, risk assessment, and automated trading strategies."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer Friendly",
      description: "Comprehensive APIs, SDKs, and developer tools with extensive documentation and 24/7 technical support."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Built to handle millions of transactions per second with 99.99% uptime and automatic scaling capabilities."
    }
  ];

  const services = [
    {
      title: "DeFi Ecosystem",
      description: "Complete decentralized finance solutions for the modern digital economy",
      items: [
        "Automated Market Making (AMM)",
        "Yield Farming & Liquidity Mining", 
        "Lending & Borrowing Protocols",
        "Derivatives & Perpetual Futures",
        "Cross-chain Bridge Technology",
        "Governance Token Staking"
      ],
      icon: <Coins className="w-12 h-12" />
    },
    {
      title: "NFT Marketplace",
      description: "Create, trade, and showcase unique digital assets with advanced features",
      items: [
        "Zero-Gas Minting Platform",
        "Fractional NFT Ownership",
        "Royalty Management System",
        "Virtual Gallery Spaces",
        "AI-Generated Collections",
        "Social Trading Features"
      ],
      icon: <Award className="w-12 h-12" />
    },
    {
      title: "DAO Governance",
      description: "Participate in decentralized decision-making with transparent voting mechanisms",
      items: [
        "Proposal Creation & Voting",
        "Multi-signature Treasury",
        "Reputation-based Governance",
        "Quadratic Voting System",
        "Delegation & Proxy Voting",
        "On-chain Execution"
      ],
      icon: <Target className="w-12 h-12" />
    },
    {
      title: "Developer Tools",
      description: "Comprehensive toolkit for building next-generation blockchain applications",
      items: [
        "Smart Contract Templates",
        "No-Code dApp Builder",
        "Testing & Deployment Suite",
        "Analytics Dashboard",
        "Integration Plugins",
        "Security Audit Tools"
      ],
      icon: <Code className="w-12 h-12" />
    }
  ];

  const stats = [
    { number: "$2.5B+", label: "Total Value Locked", description: "Across all protocols" },
    { number: "5M+", label: "Active Users", description: "Monthly active wallets" },
    { number: "150+", label: "Partner Integrations", description: "Ecosystem partners" },
    { number: "99.99%", label: "Uptime Guarantee", description: "System reliability" }
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Foundation Launch",
      status: "Completed",
      items: [
        "Mainnet deployment with full security audit",
        "Core DeFi protocols and yield farming",
        "Mobile app launch (iOS & Android)",
        "Multi-language support (12 languages)"
      ]
    },
    {
      quarter: "Q2 2024", 
      title: "Ecosystem Expansion",
      status: "In Progress",
      items: [
        "NFT marketplace with advanced features",
        "Cross-chain bridge for 10+ networks",
        "DAO governance portal launch",
        "Institutional custody solutions"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "AI Integration",
      status: "Upcoming",
      items: [
        "AI-powered trading algorithms",
        "Automated risk management system",
        "Predictive analytics dashboard",
        "Smart contract optimization tools"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Global Scaling",
      status: "Planned",
      items: [
        "Regulatory compliance in 50+ countries",
        "Enterprise blockchain solutions",
        "Layer 3 scaling implementation",
        "Quantum-resistant security upgrade"
      ]
    }
  ];

  const teamMembers = [
    { 
      name: "Alexandra Chen", 
      role: "Founder & CEO", 
      experience: "Former Google Principal Engineer, 12 years in blockchain technology",
      expertise: "Distributed Systems, Cryptography"
    },
    { 
      name: "Marcus Rodriguez", 
      role: "Chief Technology Officer", 
      experience: "Ex-Ethereum Core Developer, PhD in Computer Science from MIT",
      expertise: "Smart Contracts, Protocol Design"
    },
    { 
      name: "Sarah Kim", 
      role: "Head of Product", 
      experience: "Former Coinbase Product Director, Stanford MBA",
      expertise: "DeFi Products, User Experience"
    },
    { 
      name: "David Thompson", 
      role: "Chief Security Officer", 
      experience: "Ex-NSA Cybersecurity Expert, 15 years in fintech security",
      expertise: "Blockchain Security, Risk Management"
    },
    { 
      name: "Elena Volkov", 
      role: "VP of Engineering", 
      experience: "Former Microsoft Senior Architect, distributed systems expert",
      expertise: "Scalability, Infrastructure"
    },
    { 
      name: "James Wilson", 
      role: "Head of Business Development", 
      experience: "Ex-Goldman Sachs VP, Harvard Business School",
      expertise: "Strategic Partnerships, Finance"
    }
  ];

  const useCases = [
    {
      title: "Decentralized Trading",
      description: "Trade digital assets with zero intermediaries and maximum security",
      features: ["Automated Market Making", "Limit Orders", "Flash Loans"],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Yield Optimization",
      description: "Maximize returns through intelligent yield farming strategies",
      features: ["Auto-compounding", "Risk Assessment", "Portfolio Balancing"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Digital Identity",
      description: "Secure, verifiable identity management for the Web3 era",
      features: ["Self-Sovereign ID", "Zero-Knowledge Proofs", "Reputation System"],
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Supply Chain",
      description: "Transparent, traceable supply chain management solutions",
      features: ["Product Tracking", "Authenticity Verification", "Compliance Monitoring"],
      icon: <Network className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Flowise</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Features', 'Services', 'Use Cases', 'Roadmap', 'Team', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item === 'Home' ? 'hero' : item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center animated-bg">
        <motion.div style={{ y: y1 }} className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Flowise</span>
              <br />
              <span className="text-gray-800">The Future of Web3</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Revolutionary blockchain platform providing secure, efficient, and innovative Web3 experiences. 
              Build, trade, and govern in the decentralized economy with enterprise-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg glow hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Launch App</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Read Whitepaper
              </motion.button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-green-500" />
                <span>Audited by CertiK</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>SOC 2 Type II Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-purple-500" />
                <span>Best DeFi Platform 2024</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary-500" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flowise provides comprehensive Web3 solutions with enterprise-grade security, 
              lightning-fast performance, and seamless user experience across all blockchain networks.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl card-hover border border-gray-200 hover:border-primary-300 transition-all duration-300 group"
              >
                <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Service Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a complete Web3 ecosystem with our comprehensive suite of services, 
              designed to power the next generation of decentralized applications and financial products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="text-primary-500 mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Real-World Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Flowise is transforming industries with practical Web3 solutions 
              that deliver real value to businesses and individuals worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 group"
              >
                <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Development Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision is to build the most comprehensive Web3 ecosystem. 
              Here's our strategic development plan to revolutionize decentralized technology.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-700"></div>
            
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-primary-500 font-semibold">{item.quarter}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                    <div className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{subItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our world-class team brings together decades of experience from leading technology companies, 
              financial institutions, and blockchain organizations to drive Web3 innovation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl text-center card-hover border border-gray-200 hover:border-primary-300 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-primary-600 mb-3 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-500 text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your Web3 journey? Contact our team to learn more about 
              Flowise solutions and how we can help transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@flowise.io</p>
                    <p className="text-gray-500 text-sm">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Headquarters</h3>
                    <p className="text-gray-600">San Francisco, California</p>
                    <p className="text-gray-500 text-sm">Global offices worldwide</p>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    >
                      <XIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-gray-200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-3 rounded-lg font-semibold glow hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Flowise</span>
            </div>
            <p className="text-gray-600 mb-4">Building the future of Web3, making blockchain technology accessible to everyone.</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">Documentation</a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">Support</a>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Flowise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
