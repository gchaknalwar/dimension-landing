"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Cloud,
  MessageSquare,
  Users,
  Zap,
  Github,
  Play,
  Star,
  Check,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import "../styles/DimensionLanding.css";

const DimensionLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [currentFeature, setCurrentFeature] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
  }

  interface Stat {
    number: string;
    label: string;
  }

  interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
  }

  interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
  }

  interface DetailedFeature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    features: string[];
  }

  const features: Feature[] = [
    { icon: Code, title: "Smart Code Editor", desc: "AI-powered development" },
    { icon: Cloud, title: "Cloud Deploy", desc: "One-click deployments" },
    {
      icon: MessageSquare,
      title: "Team Chat",
      desc: "Contextual conversations",
    },
    { icon: Users, title: "Collaboration", desc: "Real-time teamwork" },
  ];

  const stats: Stat[] = [
    { number: "10M+", label: "Developers" },
    { number: "500K+", label: "Projects" },
    { number: "99.9%", label: "Uptime" },
    { number: "50ms", label: "Response Time" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Lead Developer at Stripe",
      content:
        "Dimension revolutionized how our team collaborates. The AI assistance is incredibly intuitive.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "CTO at Vercel",
      content:
        "The deployment pipeline integration saved us countless hours. Game-changing platform.",
      avatar: "MJ",
    },
    {
      name: "Elena Rodriguez",
      role: "Senior Engineer at GitHub",
      content:
        "Finally, a collaboration tool built by developers for developers. Love the attention to detail.",
      avatar: "ER",
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for individual developers",
      features: [
        "5 projects",
        "Basic AI assistance",
        "Community support",
        "1GB storage",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For growing teams",
      features: [
        "Unlimited projects",
        "Advanced AI features",
        "Priority support",
        "50GB storage",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Unlimited storage",
        "SLA guarantee",
      ],
    },
  ];

  const detailedFeatures: DetailedFeature[] = [
    {
      icon: Code,
      title: "Smart Code Editor",
      description:
        "AI-powered code completion, refactoring, and debugging that understands your codebase context.",
      features: [
        "Intelligent autocomplete",
        "Real-time error detection",
        "Context-aware suggestions",
      ],
    },
    {
      icon: Cloud,
      title: "One-Click Deployments",
      description:
        "Deploy to any cloud provider with zero configuration. Scale automatically based on demand.",
      features: [
        "Multi-cloud support",
        "Auto-scaling",
        "Zero downtime deploys",
      ],
    },
    {
      icon: MessageSquare,
      title: "Contextual Chat",
      description:
        "Team communication that understands your code, issues, and project context.",
      features: [
        "Code-aware discussions",
        "Thread organization",
        "Smart notifications",
      ],
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description:
        "Work together seamlessly with live cursors, shared sessions, and instant sync.",
      features: [
        "Live editing",
        "Shared debugging",
        "Conflict resolution",
      ],
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description:
        "Get intelligent recommendations for code quality, performance, and best practices.",
      features: [
        "Performance analysis",
        "Security scanning",
        "Code quality metrics",
      ],
    },
    {
      icon: Github,
      title: "Git Integration",
      description:
        "Seamless version control with advanced branching, merging, and review workflows.",
      features: [
        "Visual branch management",
        "Smart conflict resolution",
        "Review automation",
      ],
    },
  ];

  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={`star-${i}`}
        className="star"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }}
      />
    ));
  }, []);

  return (
    <div className="dimension-landing">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-overlay"></div>
        <div className="star" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        <div className="star" style={{ left: '30%', top: '40%', animationDelay: '0.5s' }}></div>
        <div className="star" style={{ left: '50%', top: '60%', animationDelay: '1s' }}></div>
        <div className="star" style={{ left: '70%', top: '80%', animationDelay: '1.5s' }}></div>
        <div className="star" style={{ left: '90%', top: '30%', animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrollY > 100 ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">Dimension</div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <a href="#docs" className="nav-link">
                Docs
              </a>
              <a href="#company" className="nav-link">
                Company
              </a>
              <button className="cta-button">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <a href="#features" className="mobile-nav-link">
                  Features
                </a>
                <a href="#pricing" className="mobile-nav-link">
                  Pricing
                </a>
                <a href="#docs" className="mobile-nav-link">
                  Docs
                </a>
                <a href="#company" className="mobile-nav-link">
                  Company
                </a>
                <button className="mobile-cta-button">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Dimension is the{" "}
              <span className="highlight">
                <span className="gradient-text">new standard</span>
                <div className="underline"></div>
              </span>{" "}
              for collaboration
            </h1>

            <p className="hero-description">
              The most complete developer experience. Chat, code, deploy, and
              scale—all powered by delightfully smart AI interactions.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Get Started - for free
                <ArrowRight className="button-icon" />
              </button>

              <button className="secondary-button">
                <Play className="play-icon" />
                Watch Demo
              </button>
            </div>

            {/* Floating Feature Cards */}
            <div className="feature-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card ${
                    currentFeature === index ? "active" : ""
                  }`}
                >
                  <feature.icon
                    className={`feature-icon ${
                      currentFeature === index ? "active" : ""
                    }`}
                  />
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">
              Precision. Elegance.{" "}
              <span className="gradient-text">Performance</span>
            </h2>
            <p className="section-description">
              Driven by delightfully smart interactions that make complex
              workflows feel effortless.
            </p>
          </div>

          <div className="detailed-features-grid">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="detailed-feature-card">
                <feature.icon className="detailed-feature-icon" />
                <h3 className="detailed-feature-title">{feature.title}</h3>
                <p className="detailed-feature-description">
                  {feature.description}
                </p>
                <ul className="feature-list">
                  {feature.features.map((item, i) => (
                    <li key={i} className="feature-list-item">
                      <Check className="check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <h2 className="section-title">
              Loved by developers{" "}
              <span className="gradient-text">worldwide</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="star-icon filled" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="avatar">{testimonial.avatar}</div>
                    <div>
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <div className="section-header">
            <h2 className="section-title">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h2>
            <p className="section-description">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price}
                  <span className="price-period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="plan-feature">
                      <Check className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`plan-button ${
                    plan.popular ? "primary" : "secondary"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to transform your development workflow?
          </h2>
          <p className="cta-description">
            Join thousands of developers who've already made the switch to
            smarter collaboration.
          </p>
          <button className="cta-button-large">
            Start Your Free Trial
            <ArrowRight className="button-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">Dimension</div>
              <p className="footer-tagline">
                The delightfully smart collaboration platform for modern
                development teams.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Product</h4>
                <a href="#" className="footer-link">
                  Features
                </a>
                <a href="#" className="footer-link">
                  Pricing
                </a>
                <a href="#" className="footer-link">
                  Enterprise
                </a>
                <a href="#" className="footer-link">
                  Security
                </a>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Resources</h4>
                <a href="#" className="footer-link">
                  Documentation
                </a>
                <a href="#" className="footer-link">
                  API Reference
                </a>
                <a href="#" className="footer-link">
                  Tutorials
                </a>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Company</h4>
                <a href="#" className="footer-link">
                  About
                </a>
                <a href="#" className="footer-link">
                  Careers
                </a>
                <a href="#" className="footer-link">
                  Press
                </a>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2025 Dimension. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DimensionLanding;