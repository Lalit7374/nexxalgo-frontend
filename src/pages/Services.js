import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VantaBackground from '../components/VantaBackground';
import { ArrowRight, Code2, Bot, Smartphone, LineChart, Boxes, Database, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Websites & Web Apps',
    desc: 'Marketing sites, dashboards, internal tools, and full SaaS products. We use React, Next.js, Node.js, and MongoDB to ship clean, fast, scalable software.',
    deliverables: ['Pixel-perfect UI', 'Responsive design', 'SEO-ready', 'Analytics integrated', 'Deployment included'],
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    desc: 'Custom AI assistants, RAG-powered chatbots, document Q&A systems, and workflow automation that actually works in production.',
    deliverables: ['OpenAI / Claude integration', 'Vector DB setup (Pinecone, Weaviate)', 'Workflow automation (n8n, Zapier)', 'Custom training on your data'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Cross-platform iOS + Android apps with React Native. Single codebase, native performance, faster time-to-market than building separate apps.',
    deliverables: ['iOS + Android in one codebase', 'Push notifications', 'Offline support', 'App Store / Play Store submission'],
  },
  {
    icon: Boxes,
    title: 'SaaS MVP Development',
    desc: 'Idea to launched SaaS in 4–8 weeks. Auth, payments, admin, multi-tenant — all the boring stuff so you can focus on your unique value.',
    deliverables: ['User auth & roles', 'Stripe billing', 'Admin dashboard', 'Multi-tenant ready', 'Email notifications'],
  },
  {
    icon: LineChart,
    title: 'Algo Trading & Fintech',
    desc: 'Strategy automation, backtesting, broker API integrations, and trading dashboards. Whether you trade crypto, forex, or equities — we build the infrastructure.',
    deliverables: ['Strategy backtesting', 'Live order routing', 'Risk management', 'Real-time dashboards'],
  },
  {
    icon: Database,
    title: 'Data Analytics & Dashboards',
    desc: 'Turn raw data into decisions. We build ETL pipelines, BI dashboards, and data products that surface insights in real time.',
    deliverables: ['Custom dashboards', 'ETL pipelines', 'Automated reports', 'API integrations'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    desc: 'Custom storefronts (Shopify, MERN, or headless commerce) — designed for conversion, performance, and scale.',
    deliverables: ['Custom checkout flow', 'Payment gateway setup', 'Inventory management', 'Mobile-optimized'],
  },
];

const Services = () => {
  return (
    <>
      <section className="page-intro">
        <VantaBackground intensity="light" />
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>
            Software, <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>built right.</em>
          </h1>
          <p>
            Seven service lines. One standard: production-grade code,
            honest timelines, and direct communication with the founder.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {services.map(({ icon: Icon, title, desc, deliverables }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 'clamp(2rem, 5vw, 4rem)',
                  padding: '3rem 0',
                  borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'start',
                }}
                className="service-detail"
              >
                <div style={{
                  width: 64,
                  height: 64,
                  border: '1px solid var(--line-strong)',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(27, 27, 29, 0.6)',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>{title}</h3>
                  <p style={{ color: 'var(--white-60)', maxWidth: 720, marginBottom: '1.5rem', fontSize: '1.05rem' }}>{desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {deliverables.map((d) => (
                      <span key={d} className="tag" style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.72rem',
                        padding: '0.4rem 0.8rem',
                        border: '1px solid var(--line-strong)',
                        borderRadius: 999,
                        color: 'var(--white-60)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">Ready to ship?</span>
          <h2>Tell us what you're <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>building.</em></h2>
          <p>We'll respond with a scope and fixed quote within 24 hours.</p>
          <Link to="/contact" className="btn btn-primary">
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
