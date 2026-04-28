import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VantaBackground from '../components/VantaBackground';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <>
      <section className="page-intro">
        <VantaBackground intensity="light" />
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>
            A small studio with <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>big standards.</em>
          </h1>
          <p>
            Nexx Algo was founded on a simple idea: software should be built
            with the same care a craftsperson gives a piece of furniture.
            We focus on a small number of projects each quarter so every
            client gets founder-level attention.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="about-grid">
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              "We started Nexx Algo because too many founders end up with software
              that's slow, brittle, and impossible to maintain. We believe quality
              and speed aren't opposites — when the team is small and senior,
              you get both."
            </motion.p>

            <motion.div
              className="body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p>
                Nexx Algo is a focused team of developers and designers building
                production-grade software for founders, startups, and SMBs. We've
                shipped MERN web apps, AI agents, SaaS products, mobile apps, and
                algo trading systems for clients across industries.
              </p>
              <p>
                Beyond client work, we run structured internship programs in
                MERN, Java, Python, AI/ML, Data Science, and Mobile Development —
                because we believe in growing the next generation of engineers
                the same way we'd want to be taught.
              </p>
 <p>
  Founded by <span style={{ color: "white", fontWeight: "bold" }}>Shivraj Chourasia</span>, we operate out of India and serve
  clients worldwide. Direct communication, fixed timelines, and
  code we'd be proud to show another senior engineer — that's the
  whole pitch.
</p>

              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Work with us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ background: 'rgba(27, 27, 29, 0.6)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Principles</span>
              <h2>How we <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>operate.</em></h2>
            </div>
            <p>
              Six rules we hold ourselves to on every project. They're boring on
              paper — they make all the difference in practice.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }} className="principles">
            {[
              { n: '01', title: 'Honest scope.', desc: 'If we don\'t know how long it will take, we say so. We don\'t pad estimates and we don\'t pretend the unknown isn\'t there.' },
              { n: '02', title: 'Founder-first.', desc: 'You talk directly to the person writing your code. No account managers, no game of telephone.' },
              { n: '03', title: 'Show, don\'t tell.', desc: 'Weekly demos. Daily commits. You see progress in real time, not at the end of the project.' },
              { n: '04', title: 'Code we\'re proud of.', desc: 'We write code another senior engineer can pick up and continue. No spaghetti, no shortcuts that hurt you later.' },
              { n: '05', title: 'Ship to learn.', desc: 'We launch lean and iterate. Real users teach you more in two weeks than two months of internal debate.' },
              { n: '06', title: 'Stay around.', desc: '30 days of free post-launch support on every project. Bugs we missed are bugs we fix.' },
            ].map((p) => (
              <div key={p.n} style={{
                padding: '2.5rem 2rem',
                borderTop: '1px solid var(--line)',
                borderRight: '1px solid var(--line)',
              }}>
                <span className="mono" style={{ marginBottom: '0.8rem', display: 'block' }}>{p.n}</span>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{p.title}</h4>
                <p style={{ color: 'var(--white-60)', fontSize: '0.95rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .principles { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default About;
