import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  X,
  Users,
  Stethoscope,
  Bot,
  TrendingUp,
  ShoppingBag,
  Receipt,
  CheckSquare,
  BarChart3,
  UtensilsCrossed,
  GraduationCap,
  Building2,
  Smile,
  ExternalLink,
  Code2,
} from 'lucide-react';
import VantaBackground from '../components/VantaBackground';
import ProjectMockup from '../components/ProjectMockup';

/* ============================================================
   PROJECTS — 12 case studies for Nexx Algo portfolio
   Each project uses an icon-based "thumbnail" generated from
   the project's identity (no copyrighted stock photos).
   ============================================================ */

const projects = [
  {
    id: 'smartcrm-pro',
    name: 'SmartCRM Pro',
    icon: Users,
    category: 'CRM / Sales',
    accent: '#d4ff3a',
    description:
      'Complete sales pipeline & customer relationship platform with lead scoring, email automation, and team analytics dashboards.',
    longDescription:
      'A full-featured CRM built from scratch for a B2B sales agency. Handles 5,000+ contacts, automates follow-up sequences, scores leads using configurable rules, and gives sales managers a live dashboard of every rep\'s pipeline.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    features: ['Lead pipeline', 'Email automation', 'Sales analytics', 'Role-based access', 'Mobile-responsive'],
  },
  {
    id: 'medcare-hospital',
    name: 'MedCare Hospital Management',
    icon: Stethoscope,
    category: 'Healthcare',
    accent: '#5dcaa5',
    description:
      'Hospital management system for OPD scheduling, patient records, billing, prescriptions, and inventory across multiple departments.',
    longDescription:
      'Designed for mid-sized clinics & hospitals. Doctors can manage appointments, write digital prescriptions, view patient history. Pharmacy & billing modules integrated. HIPAA-considered architecture.',
    tech: ['MERN Stack', 'JWT Auth', 'PDF generation', 'Cloudinary'],
    features: ['Patient records', 'OPD scheduling', 'Prescriptions', 'Pharmacy inventory', 'Billing'],
  },
  {
    id: 'ai-support-chatbot',
    name: 'AI Support Chatbot (RAG)',
    icon: Bot,
    category: 'AI / Automation',
    accent: '#85b7eb',
    description:
      'RAG-based AI chatbot that answers customer queries from a company\'s own documentation. Reduces tier-1 support tickets by 60%.',
    longDescription:
      'Trained on 200+ pages of internal product docs. Uses vector embeddings (Pinecone) and OpenAI GPT to give accurate, source-cited answers. Slack & Web Widget integrations.',
    tech: ['LangChain', 'OpenAI API', 'Pinecone', 'Node.js', 'React'],
    features: ['RAG over private docs', 'Source citations', 'Slack integration', 'Multi-channel', 'Analytics'],
  },
  {
    id: 'tradeflow-algo',
    name: 'TradeFlow Algo Trading',
    icon: TrendingUp,
    category: 'Fintech',
    accent: '#ef9f27',
    description:
      'Algorithmic trading platform with strategy backtesting, live order routing, broker API integration, and real-time PnL tracking.',
    longDescription:
      'Connects to Zerodha & Upstox via APIs. Lets traders backtest strategies on 5+ years of historical data, then deploy live with risk controls. Real-time PnL dashboard, alerts, and trade journaling.',
    tech: ['Python', 'FastAPI', 'React', 'WebSockets', 'PostgreSQL'],
    features: ['Strategy backtesting', 'Live order routing', 'Risk management', 'PnL dashboard', 'Trade journal'],
  },
  {
    id: 'shopsphere',
    name: 'ShopSphere E-Commerce',
    icon: ShoppingBag,
    category: 'E-Commerce',
    accent: '#d4537e',
    description:
      'Custom e-commerce platform with product catalog, multi-payment gateway, inventory sync, and admin dashboard for D2C brands.',
    longDescription:
      'Built for a fashion D2C brand replacing Shopify due to high transaction fees. Razorpay + Stripe integrated. Inventory syncs with their warehouse system. Saved them ₹2L/year in platform fees.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'Stripe'],
    features: ['Product catalog', 'Cart & checkout', 'Multi-payment', 'Inventory sync', 'Admin panel'],
  },
  {
    id: 'invoicepro-saas',
    name: 'SaaS InvoicePro',
    icon: Receipt,
    category: 'SaaS',
    accent: '#7f77dd',
    description:
      'Multi-tenant SaaS for freelancers & small businesses. Handles invoicing, GST calculation, recurring billing, and payment tracking.',
    longDescription:
      'Subscription-based SaaS launched with 3 pricing tiers. Auto-generates GST-compliant invoices for India. Stripe + Razorpay billing. Currently serving 80+ paying customers.',
    tech: ['MERN', 'Stripe', 'Razorpay', 'PDF generation', 'Multi-tenant'],
    features: ['GST invoicing', 'Recurring billing', 'Multi-tenant', 'Stripe + Razorpay', 'Reports'],
  },
  {
    id: 'taskpilot',
    name: 'TaskPilot Project Manager',
    icon: CheckSquare,
    category: 'Productivity',
    accent: '#1d9e75',
    description:
      'Kanban-based project management tool with team collaboration, time tracking, file uploads, and Gantt chart views.',
    longDescription:
      'Built for an agency replacing Asana. Lets teams plan sprints, track time, attach files, comment on tasks. Real-time updates via WebSockets. Mobile app version using React Native.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    features: ['Kanban boards', 'Gantt charts', 'Time tracking', 'File uploads', 'Real-time sync'],
  },
  {
    id: 'finsight-analytics',
    name: 'FinSight Analytics',
    icon: BarChart3,
    category: 'Data Analytics',
    accent: '#85b7eb',
    description:
      'Financial analytics dashboard for SMBs. Pulls data from Tally, bank statements, and GST portal — surfaces cashflow insights.',
    longDescription:
      'B2B dashboard built for CA firms. Aggregates client financial data, runs AR/AP analysis, flags anomalies. Saves 10+ hours/week per accountant.',
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Pandas'],
    features: ['Multi-source ingestion', 'Cashflow analysis', 'Anomaly detection', 'Custom reports'],
  },
  {
    id: 'quickserve-restaurant',
    name: 'QuickServe Restaurant',
    icon: UtensilsCrossed,
    category: 'Hospitality',
    accent: '#d85a30',
    description:
      'Restaurant management app with table ordering, kitchen display system, billing, and daily sales reports.',
    longDescription:
      'Replaces traditional POS for small/mid restaurants. Waiters take orders on tablets, kitchen sees them on a display, customers get GST bills. Daily/weekly sales analytics included.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    features: ['Table ordering', 'KDS', 'GST billing', 'Sales reports', 'Inventory'],
  },
  {
    id: 'edutrack-lms',
    name: 'EduTrack LMS',
    icon: GraduationCap,
    category: 'EdTech',
    accent: '#534ab7',
    description:
      'Learning management system with video courses, quizzes, progress tracking, certificates, and student-instructor messaging.',
    longDescription:
      'White-label LMS for coaching institutes. Hosts video lessons (HLS streaming), auto-grades quizzes, generates completion certificates. 500+ active students.',
    tech: ['MERN', 'Cloudflare Stream', 'PDF generation'],
    features: ['Video courses', 'Quizzes', 'Progress tracking', 'Certificates', 'Discussion forums'],
  },
  {
    id: 'propertyhub',
    name: 'PropertyHub Real Estate',
    icon: Building2,
    category: 'Real Estate',
    accent: '#0f6e56',
    description:
      'Real estate marketplace with property listings, virtual tours, mortgage calculators, and lead capture for agents.',
    longDescription:
      'Two-sided marketplace connecting agents with buyers. Geo-search, image galleries, embedded virtual tours. SEO-optimized listings drove 12K+ organic visits/month.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
    features: ['Property listings', 'Geo-search', 'Virtual tours', 'Mortgage calculator', 'Agent dashboard'],
  },
  {
    id: 'dentalcare-clinic',
    name: 'DentalCare Clinic',
    icon: Smile,
    category: 'Healthcare',
    accent: '#3ffffc',
    description:
      'Dental clinic management with appointment scheduling, treatment history, X-ray uploads, and patient reminders via WhatsApp.',
    longDescription:
      'Designed for solo & multi-doctor dental practices. Automated WhatsApp appointment reminders cut no-shows by 40%. Treatment plans, billing, and digital records.',
    tech: ['MERN', 'Twilio', 'WhatsApp API', 'AWS S3'],
    features: ['Scheduling', 'Treatment history', 'X-ray uploads', 'WhatsApp reminders', 'Billing'],
  },
];

/* ============================================================
   PROJECT THUMBNAIL — Pure CSS/SVG illustration
   No external images or copyrighted assets
   ============================================================ */
const ProjectThumb = ({ project }) => {
  const Icon = project.icon;
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        borderRadius: '14px',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${project.accent}22 0%, transparent 60%), radial-gradient(circle at 70% 30%, ${project.accent}33 0%, transparent 50%), #0a0a0c`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.6,
        }}
      />
      {/* Glow orb */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.accent}66, transparent 70%)`,
          filter: 'blur(40px)',
          top: '20%',
          right: '20%',
        }}
      />
      {/* Icon centered */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '72px',
          height: '72px',
          borderRadius: '18px',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${project.accent}66`,
          boxShadow: `0 0 24px ${project.accent}33`,
        }}
      >
        <Icon size={32} color={project.accent} strokeWidth={1.5} />
      </div>

      {/* Category tag */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: project.accent,
          padding: '4px 10px',
          border: `1px solid ${project.accent}66`,
          borderRadius: '999px',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {project.category}
      </div>
    </div>
  );
};

/* ============================================================
   PROJECT MODAL — Detailed view when clicking "View Details"
   ============================================================ */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        overflow: 'auto',
      }}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0a0a0c',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '24px',
          maxWidth: '720px',
          width: '100%',
          padding: '2rem',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        <ProjectMockup projectId={project.id} />

        <div style={{ marginTop: '1.5rem' }}>
          <span className="eyebrow">{project.category}</span>
          <h2 style={{ fontSize: '2rem', marginTop: '1rem', color: 'var(--white)' }}>
            {project.name}
          </h2>
          <p style={{ color: 'var(--white-80)', marginTop: '1rem', lineHeight: 1.7 }}>
            {project.longDescription}
          </p>

          <h4 style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lime)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>
            Key Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {project.features.map((f) => (
              <li key={f} style={{ color: 'var(--white-80)', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--lime)', fontFamily: 'var(--mono)' }}>→</span> {f}
              </li>
            ))}
          </ul>

          <h4 style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lime)', marginTop: '1.5rem', marginBottom: '0.8rem' }}>
            Tech Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.72rem',
                padding: '0.4rem 0.8rem',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                color: 'var(--white-80)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>{t}</span>
            ))}
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="nav-cta"
            style={{ marginTop: '2rem', display: 'inline-flex' }}
          >
            Want something similar? <span className="nav-cta-arrow">→</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section className="page-intro">
        <VantaBackground intensity="light" />
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1>
            Real projects, <em style={{ fontStyle: 'italic', color: 'var(--lime)', fontWeight: 300 }}>real outcomes.</em>
          </h1>
          <p>
            A selection of platforms we've built across fintech, healthcare, e-commerce,
            SaaS, AI, and more. Click any card to see the full case study.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="portfolio-card"
              >
                <ProjectMockup projectId={p.id} />
                <div style={{ padding: '1.4rem 0.2rem 0.4rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '0.6rem' }}>
                    {p.name}
                  </h3>
                  <p style={{ color: 'var(--white-60)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {p.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.2rem' }}>
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '0.68rem',
                          padding: '0.25rem 0.55rem',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '999px',
                          color: 'var(--white-60)',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveProject(p)}
                    className="portfolio-view-btn"
                  >
                    View details <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">Build with us</span>
          <h2>Have a similar project <em style={{ fontStyle: 'italic', color: 'var(--lime)', fontWeight: 300 }}>in mind?</em></h2>
          <p>Tell us what you want to build. We'll send a written scope and quote within 24 hours.</p>
          <Link to="/contact" className="nav-cta">
            Start a project <span className="nav-cta-arrow">→</span>
          </Link>
        </div>
      </section>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
};

export default Portfolio;
