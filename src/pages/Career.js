import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VantaBackground from '../components/VantaBackground';
import { MapPin, Clock, Briefcase, GraduationCap, IndianRupee, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendEmailJS, getISTTimestamp } from '../utils/emailService';

/* ============================================================
   ROLES — Internships + Full-time positions
   ============================================================ */
const internships = [
  {
    id: 'frontend-intern',
    title: 'Frontend Developer Intern',
    type: 'internship',
    level: 'Fresher',
    duration: '2-3 months',
    location: 'Remote / Hybrid',
    stipend: '₹8,000 – ₹15,000/month',
    description:
      'Help us build user interfaces with React. You\'ll work alongside senior devs on real client projects, ship code daily, and learn modern frontend patterns.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Git basics', 'Eagerness to learn'],
    responsibilities: [
      'Build UI components from Figma designs',
      'Integrate REST APIs with the frontend',
      'Fix bugs and improve UX based on QA feedback',
      'Pair-program with senior developers',
    ],
  },
  {
    id: 'backend-intern',
    title: 'Backend Developer Intern',
    type: 'internship',
    level: 'Fresher',
    duration: '2-3 months',
    location: 'Remote / Hybrid',
    stipend: '₹8,000 – ₹15,000/month',
    description:
      'Work on real backend systems — REST APIs, databases, authentication, and integrations. Best for someone with basic Node.js/Python knowledge ready to ship production code.',
    skills: ['Node.js OR Python', 'MongoDB / PostgreSQL', 'REST APIs', 'Git basics'],
    responsibilities: [
      'Design and build REST API endpoints',
      'Write database queries (MongoDB / PostgreSQL)',
      'Integrate third-party APIs (Razorpay, Twilio, etc.)',
      'Write unit tests and documentation',
    ],
  },
  {
    id: 'fullstack-intern',
    title: 'Full-Stack Developer Intern',
    type: 'internship',
    level: 'Fresher',
    duration: '3 months',
    location: 'Remote / Hybrid',
    stipend: '₹10,000 – ₹18,000/month',
    description:
      'For interns who want to work across the stack. You\'ll touch React, Node.js, MongoDB, and deployment — getting end-to-end exposure to how products ship.',
    skills: ['JavaScript', 'Basic React', 'Basic Node.js', 'MongoDB', 'Git'],
    responsibilities: [
      'Build features end-to-end (UI + API + DB)',
      'Deploy to staging & production environments',
      'Participate in code reviews',
      'Help with client demos',
    ],
  },
];

const jobs = [
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Software Developer',
    type: 'job',
    level: '1-2 years experience',
    duration: 'Full-time',
    location: 'Remote / Hybrid',
    stipend: '₹4 – 8 LPA',
    description:
      'Take ownership of features from concept to production. You\'ll work directly with the founder on client projects across MERN, AI integrations, and SaaS.',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS basics', '1-2 yrs production experience'],
    responsibilities: [
      'Lead feature development for client projects',
      'Architect and review code with junior devs',
      'Communicate directly with clients in standups',
      'Own deployments and post-launch monitoring',
    ],
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    type: 'job',
    level: '1-2 years experience',
    duration: 'Full-time',
    location: 'Remote / Hybrid',
    stipend: '₹3.5 – 6.5 LPA',
    description:
      'Build polished user interfaces for client products. We care about clean code, good UX intuition, and shipping reliably.',
    skills: ['React', 'TypeScript', 'CSS / Tailwind', 'REST APIs', '1+ yrs experience', 'Figma fluency'],
    responsibilities: [
      'Build reusable React components from designs',
      'Optimize for performance and accessibility',
      'Implement responsive layouts (mobile-first)',
      'Collaborate with backend devs on API contracts',
    ],
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    type: 'job',
    level: '1-2 years experience',
    duration: 'Full-time',
    location: 'Remote / Hybrid',
    stipend: '₹4 – 7 LPA',
    description:
      'Design and ship scalable backend services. Database design, API architecture, third-party integrations, and DevOps basics.',
    skills: ['Node.js / Python', 'PostgreSQL / MongoDB', 'REST + WebSockets', 'AWS / Render', '1+ yrs production experience'],
    responsibilities: [
      'Design REST APIs and database schemas',
      'Build payment integrations (Stripe, Razorpay)',
      'Optimize queries and database performance',
      'Set up CI/CD and monitoring',
    ],
  },
];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  roleAppliedFor: '',
  experience: '',
  portfolioUrl: '',
  githubUrl: '',
  motivation: '',
};

const RoleCard = ({ role, onApply }) => (
  <motion.div
    className="role-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="role-card-header">
      <div>
        <span className={`role-badge ${role.type}`}>
          {role.type === 'internship' ? 'Internship' : 'Full-time'}
        </span>
        <h3 style={{ marginTop: '0.6rem' }}>{role.title}</h3>
        <div className="role-meta">
          <span><MapPin size={14} /> {role.location}</span>
          <span><Clock size={14} /> {role.duration}</span>
          <span><IndianRupee size={14} /> {role.stipend}</span>
          <span>{role.type === 'internship' ? <GraduationCap size={14} /> : <Briefcase size={14} />} {role.level}</span>
        </div>
      </div>
    </div>

    <p style={{ color: 'var(--white-80)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1rem' }}>
      {role.description}
    </p>

    <h5 style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: '0.6rem' }}>
      What you'll do
    </h5>
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.2rem' }}>
      {role.responsibilities.map((r) => (
        <li key={r} style={{ color: 'var(--white-80)', fontSize: '0.9rem', display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
          <span style={{ color: 'var(--lime)', fontFamily: 'var(--mono)', flexShrink: 0 }}>→</span> {r}
        </li>
      ))}
    </ul>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
      {role.skills.map((s) => (
        <span key={s} style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.68rem',
          padding: '0.3rem 0.6rem',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '999px',
          color: 'var(--white-80)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>{s}</span>
      ))}
    </div>

    <button onClick={() => onApply(role)} className="nav-cta">
      {role.type === 'internship' ? 'Apply for internship' : 'Apply for job'} <span className="nav-cta-arrow">→</span>
    </button>
  </motion.div>
);

const Career = () => {
  const [tab, setTab] = useState('internship');
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const visibleRoles = tab === 'internship' ? internships : jobs;

  const handleApply = (role) => {
    setForm({ ...form, roleAppliedFor: role.title });
    document.getElementById('career-apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    const formattedTime = getISTTimestamp();

    // Bundle ALL form details into the message body so even a default
    // EmailJS template (only {{name}} + {{message}}) shows everything.
    const fullMessageBody =
      `🎯 Applied for: ${form.roleAppliedFor || 'Not specified'}\n` +
      `💼 Experience: ${form.experience || 'Not specified'}\n\n` +
      `─────────────────────\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Phone: ${form.phone}\n` +
      `🔗 Portfolio: ${form.portfolioUrl || 'Not provided'}\n` +
      `💻 GitHub: ${form.githubUrl || 'Not provided'}\n` +
      `─────────────────────\n\n` +
      `Why they want to join:\n${form.motivation}\n\n` +
      `Submitted: ${formattedTime} IST`;

    const templateParams = {
      // Default-template names
      name: form.fullName,
      email: form.email,
      message: fullMessageBody,
      time: formattedTime,
      // Custom-template names
      from_name: form.fullName,
      from_email: form.email,
      phone: form.phone,
      company: form.experience || 'Career applicant',
      service_interested: `${form.roleAppliedFor} (Career Application)`,
      to_email: 'alphadeveloper.tech@gmail.com',
      reply_to: form.email,
      submission_type: 'Career Application',
    };

    // Fallback: backend API
    const sendViaBackend = async () => {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/internships/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          program: 'mern-stack',
          motivation: `Applied for: ${form.roleAppliedFor}\n\nExperience: ${form.experience}\nPortfolio: ${form.portfolioUrl}\nGitHub: ${form.githubUrl}\n\n${form.motivation}`,
          portfolioUrl: form.portfolioUrl,
          githubUrl: form.githubUrl,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Backend submission failed');
      return data;
    };

    try {
      // Try EmailJS first
      await sendEmailJS(templateParams);
      setStatus({
        type: 'success',
        msg: "✓ Application received! We'll email you within 5 working days.",
      });
      setForm(initialForm);
    } catch (emailErr) {
      console.warn('EmailJS failed for career application, falling back to backend:', emailErr);
      try {
        await sendViaBackend();
        setStatus({
          type: 'success',
          msg: "✓ Application received! We'll email you within 5 working days.",
        });
        setForm(initialForm);
      } catch (backendErr) {
        setStatus({
          type: 'error',
          msg: `Failed to submit. ${emailErr.message}. Please email your application directly to alphadeveloper.tech@gmail.com.`,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-intro">
        <VantaBackground intensity="light" />
        <div className="container">
          <span className="eyebrow">Career</span>
          <h1>
            Build with us. <em style={{ fontStyle: 'italic', color: 'var(--lime)', fontWeight: 300 }}>Grow with us.</em>
          </h1>
          <p>
            We're hiring engineers who care about quality and want to work on real,
            shipping projects — not bureaucracy. Internships open for freshers,
            full-time roles for 1-2 year experience.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="career-tabs">
              <button
                className={`career-tab ${tab === 'internship' ? 'active' : ''}`}
                onClick={() => setTab('internship')}
              >
                Internships ({internships.length})
              </button>
              <button
                className={`career-tab ${tab === 'job' ? 'active' : ''}`}
                onClick={() => setTab('job')}
              >
                Full-time roles ({jobs.length})
              </button>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '1.5rem',
          }}>
            {visibleRoles.map((role) => (
              <RoleCard key={role.id} role={role} onApply={handleApply} />
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="career-apply" style={{ background: 'rgba(10, 10, 12, 0.5)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'block', textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Apply</span>
            <h2 style={{ marginTop: '1rem' }}>Tell us about <em style={{ fontStyle: 'italic', color: 'var(--lime)', fontWeight: 300 }}>yourself.</em></h2>
            <p style={{ color: 'var(--white-60)', marginTop: '1rem', maxWidth: 540, marginInline: 'auto' }}>
              We review applications every Friday. No fee. No formal-but-pointless rounds.
            </p>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label>Full name *</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" />
              </div>
              <div className="field">
                <label>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 ..." />
              </div>
              <div className="field">
                <label>Role applying for *</label>
                <select name="roleAppliedFor" value={form.roleAppliedFor} onChange={handleChange} required>
                  <option value="">Select a role</option>
                  <optgroup label="Internships">
                    {internships.map((r) => <option key={r.id} value={r.title}>{r.title}</option>)}
                  </optgroup>
                  <optgroup label="Full-time">
                    {jobs.map((r) => <option key={r.id} value={r.title}>{r.title}</option>)}
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Years of experience</label>
              <input name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. Fresher, 6 months, 1.5 years..." />
            </div>

            <div className="form-row">
              <div className="field">
                <label>Portfolio URL</label>
                <input name="portfolioUrl" value={form.portfolioUrl} onChange={handleChange} placeholder="https://..." />
              </div>
              <div className="field">
                <label>GitHub profile</label>
                <input name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="https://github.com/..." />
              </div>
            </div>

            <div className="field">
              <label>Why do you want to join? *</label>
              <textarea name="motivation" value={form.motivation} onChange={handleChange} required rows={4} placeholder="Tell us about a project you're proud of, or what you want to build..." />
            </div>

            <div className="form-actions">
              <span className="meta">Applications reviewed every Friday.</span>
              <button type="submit" className="nav-cta" disabled={loading}>
                {loading ? 'Submitting...' : <>Submit application <span className="nav-cta-arrow">→</span></>}
              </button>
            </div>

            {status.msg && (
              <div className={`form-msg ${status.type}`}>
                {status.type === 'success' ? (
                  <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                ) : (
                  <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                )}
                <span>{status.msg}</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Career;