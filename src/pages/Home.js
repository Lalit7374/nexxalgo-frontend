import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Bot,
  Smartphone,
  LineChart,
  Boxes,
  Database,
  ArrowUpRight,
} from "lucide-react";
import VantaBackground from "../components/VantaBackground";
import CountUp from "../components/CountUp";
import TechStackShowcase from "../components/TechStackShowcase";

const services = [
  {
    n: "01",
    icon: Code2,
    title: "Full-Stack Web Apps",
    desc: "Production-grade MERN applications with clean architecture, auth, payments, and dashboards. Built to scale.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    n: "02",
    icon: Bot,
    title: "AI Agents & Automation",
    desc: "Custom GPT-powered agents, RAG chatbots, and workflow automation that genuinely save time.",
    tags: ["OpenAI", "LangChain", "RAG", "n8n"],
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps with React Native — single codebase, native performance.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    n: "04",
    icon: LineChart,
    title: "Algo Trading Systems",
    desc: "Strategy automation, backtesting engines, and broker API integrations. Built by traders, for traders.",
    tags: ["Python", "Broker APIs", "Backtesting"],
  },
  {
    n: "05",
    icon: Boxes,
    title: "SaaS Products",
    desc: "From zero to launched product — auth, billing, admin panels, and a roadmap that ships.",
    tags: ["Stripe", "Auth", "Multi-tenant"],
  },
  {
    n: "06",
    icon: Database,
    title: "Data & Analytics",
    desc: "Dashboards, ETL pipelines, and data products that turn numbers into decisions.",
    tags: ["Dashboards", "ETL", "Reports"],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Discovery & Scope",
    desc: "A 30-minute call to understand your goal, audience, and constraints. We send you a written scope and fixed quote within 24 hours — no surprises later.",
  },
  {
    step: "Step 02",
    title: "Design & Architecture",
    desc: "We design the user flow, data models, and tech stack. You approve before a single line of production code is written.",
  },
  {
    step: "Step 03",
    title: "Build & Iterate",
    desc: "Weekly demos, weekly updates, daily Git commits. You see progress in real time — no black boxes.",
  },
  {
    step: "Step 04",
    title: "Launch & Support",
    desc: "We deploy, monitor, and stay around for 30 days post-launch to fix anything you find. After that, optional retainers.",
  },
];

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* HERO with Vanta NET interactive background */}
      <section className="hero">
        <VantaBackground intensity="normal" />
        <div className="container hero-content">
          {/* <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Software Studio · Est. 2024
          </motion.span> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            We build software <em>founders</em> are proud&nbsp;to&nbsp;ship.
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Nexx Algo is a focused team building MERN apps, AI agents, mobile
            apps, SaaS products, and algo trading systems. Quality over volume —
            we take a small number of projects each quarter.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Start a project <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="hero-meta-item">
              <span className="num">
                <CountUp end={12} suffix="+" duration={1800} />
              </span>
              <span className="label">Projects shipped</span>
            </div>
            <div className="hero-meta-item">
              <span className="num">
                <CountUp end={7} duration={1800} />
              </span>
              <span className="label">Service lines</span>
            </div>
            <div className="hero-meta-item">
              <span className="num">
                <CountUp end={24} suffix="h" duration={1800} />
              </span>
              <span className="label">Avg. response time</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="ticker-item">MERN Stack Development</span>
              <span className="ticker-item">AI Agents</span>
              <span className="ticker-item">SaaS MVPs</span>
              <span className="ticker-item">React Native Apps</span>
              <span className="ticker-item">Algo Trading</span>
              <span className="ticker-item">Data Dashboards</span>
              <span className="ticker-item">Internships</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>
                Six things,{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--accent)",
                    fontWeight: 300,
                  }}
                >
                  done well.
                </em>
              </h2>
            </div>
            <p>
              Every project gets the same attention — clean architecture, honest
              timelines, and code we'd be proud to show another senior engineer.
            </p>
          </div>

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {services.map(({ n, icon: Icon, title, desc, tags }) => (
              <motion.div
                key={n}
                className="service-card"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <span className="num">{n}</span>
                <h3>
                  <Icon className="icon" /> {title}
                </h3>
                <p>{desc}</p>
                <div className="tags">
                  {tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>
                A process,{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--accent)",
                    fontWeight: 300,
                  }}
                >
                  not&nbsp;a&nbsp;pitch.
                </em>
              </h2>
            </div>
            <p>
              No long sales cycles. No vague proposals. We move from "hello" to
              a working prototype in under two weeks.
            </p>
          </div>

          <div className="process-list">
            {processSteps.map((p, i) => (
              <motion.div
                key={i}
                className="process-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="step">{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — animated counters */}
      <section className="stats" style={{ padding: 0 }}>
        <div className="stats-grid">
          <div className="stat">
            <span className="num">
              <em>
                <CountUp end={12} suffix="+" />
              </em>
            </span>
            <span className="label">Projects delivered</span>
          </div>
          <div className="stat">
            <span className="num">
              <em>
                <CountUp end={100} suffix="%" />
              </em>
            </span>
            <span className="label">On-time delivery</span>
          </div>
          <div className="stat">
            <span className="num">
              <em>
                <CountUp end={24} suffix="h" />
              </em>
            </span>
            <span className="label">Quote turnaround</span>
          </div>
          <div className="stat">
            <span className="num">
              <em>
                <CountUp end={30} suffix="d" />
              </em>
            </span>
            <span className="label">Free post-launch support</span>
          </div>
        </div>
      </section>

      {/* TECH STACK SHOWCASE — replaces testimonials */}
      <TechStackShowcase />

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Let's build</span>
            <h2>
              Have an idea? <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--accent)",
                  fontWeight: 300,
                }}
              >
                Let's make it real.
              </em>
            </h2>
            <p>
              Tell us what you're building. We'll send a written scope and fixed
              quote within 24 hours.
            </p>
            <div
              style={{
                display: "inline-flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link to="/contact" className="btn btn-primary">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
