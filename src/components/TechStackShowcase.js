import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Zap,
  Shield,
  GitBranch,
  Layers,
  Boxes,
  Workflow,
  Sparkles,
  Server,
} from 'lucide-react';

/* ============================================================
   TECH STACK SHOWCASE — Replaces testimonials
   Animated floating tech badges + value-prop highlights
   No fake quotes, all professional and verifiable.
   ============================================================ */

const techCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: '#4a9eff',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#7c3aed',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL'],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#2c6ed1',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Pinecone', 'Supabase'],
  },
  {
    title: 'AI / ML',
    icon: Sparkles,
    color: '#a855f7',
    items: ['OpenAI', 'LangChain', 'RAG', 'Anthropic', 'Embeddings'],
  },
  {
    title: 'Cloud / DevOps',
    icon: Cloud,
    color: '#4a9eff',
    items: ['AWS', 'Vercel', 'Render', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Mobile',
    icon: Cpu,
    color: '#7c3aed',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
  },
];

const valueProps = [
  {
    icon: Zap,
    title: 'Fast delivery',
    desc: 'MVPs shipped in 4–8 weeks. We move quickly without cutting corners.',
  },
  {
    icon: Shield,
    title: 'Production-grade',
    desc: 'Code that scales, with auth, security, and monitoring built in from day one.',
  },
  {
    icon: Workflow,
    title: 'Direct communication',
    desc: 'You talk to the founder writing your code — no account managers or middlemen.',
  },
  {
    icon: GitBranch,
    title: 'Clean handover',
    desc: 'Every project comes with documentation, repos, and your in-house team can take over anytime.',
  },
];

const TechStackShowcase = () => {
  return (
    <section className="tech-showcase">
      <div className="tech-showcase-bg" aria-hidden="true">
        <div className="tech-orb tech-orb-1" />
        <div className="tech-orb tech-orb-2" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2>
              The stack we{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(120deg, var(--brand-blue-light), var(--brand-purple-light))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 300,
                }}
              >
                ship with.
              </em>
            </h2>
          </div>
          <p>
            Modern, battle-tested tools. We pick the right tech for each project's needs —
            not whatever's trending on Twitter.
          </p>
        </div>

        <div className="tech-grid">
          {techCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                style={{ '--cat-color': cat.color }}
              >
                <div className="tech-card-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h4>{cat.title}</h4>
                <div className="tech-pills">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="value-strip">
          {valueProps.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="value-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="value-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h5>{v.title}</h5>
                  <p>{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
