import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import VantaBackground from '../components/VantaBackground';
import { sendEmailJS, getISTTimestamp } from '../utils/emailService';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  serviceInterested: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Fallback: submit to backend if EmailJS fails or isn't configured
  const sendViaBackend = async () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    const res = await fetch(`${apiUrl}/api/projects/inquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        company: form.company,
        serviceType: form.serviceInterested || 'other',
        budget: 'discuss',
        timeline: 'flexible',
        description: form.message,
      }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || 'Backend submission failed');
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    const formattedTime = getISTTimestamp();

    // Bundle ALL form details into the message body so even a default
    // EmailJS template (only {{name}} + {{message}}) shows everything.
    const fullMessageBody =
      `${form.message}\n\n` +
      `─────────────────────\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Phone: ${form.phone}\n` +
      `🏢 Company: ${form.company || 'Not provided'}\n` +
      `🎯 Service: ${form.serviceInterested || 'Not specified'}\n` +
      `─────────────────────\n` +
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
      company: form.company || 'Not provided',
      service_interested: form.serviceInterested || 'Not specified',
      to_email: 'alphadeveloper.tech@gmail.com',
      reply_to: form.email,
      submission_type: 'Project Inquiry',
    };

    try {
      await sendEmailJS(templateParams);
      setStatus({
        type: 'success',
        msg: "✓ Message delivered — we'll respond within 24 hours.",
      });
      setForm(initialForm);
    } catch (emailErr) {
      console.warn('EmailJS failed, falling back to backend:', emailErr);
      try {
        await sendViaBackend();
        setStatus({
          type: 'success',
          msg: "✓ Inquiry received — we'll respond within 24 hours.",
        });
        setForm(initialForm);
      } catch (backendErr) {
        setStatus({
          type: 'error',
          msg: `Failed to send. ${emailErr.message}. Please email us directly at alphadeveloper.tech@gmail.com.`,
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
          <span className="eyebrow">Contact</span>
          <h1>
            Let's talk about{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--lime)', fontWeight: 300 }}>
              your project.
            </em>
          </h1>
          <p>
            Tell us a bit about what you're building. We respond within 24 hours
            with a written scope, fixed quote, and a realistic timeline.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-layout">
            {/* LEFT: contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="contact-info"
            >
              <div>
                <Mail size={20} color="var(--lime)" strokeWidth={1.5} />
                <h5 className="contact-info-label">Email</h5>
                <a
                  href="mailto:info@nexxalgo.com"
                  className="contact-info-value"
                >
                  info@nexxalgo.com
                </a>
              </div>

              <div>
                <MapPin size={20} color="var(--lime)" strokeWidth={1.5} />
                <h5 className="contact-info-label">Studio</h5>
                <p className="contact-info-value">India · Working worldwide</p>
              </div>

              <div>
                <Clock size={20} color="var(--lime)" strokeWidth={1.5} />
                <h5 className="contact-info-label">Response time</h5>
                <p className="contact-info-value">Within 24 hours</p>
                <p
                  style={{
                    color: 'var(--white-60)',
                    fontSize: '0.9rem',
                    marginTop: '0.4rem',
                  }}
                >
                  Most emails answered in under 4 hours.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="form-card"
              style={{ margin: 0 }}
            >
              <div className="form-row">
                <div className="field">
                  <label>Full name *</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                  />
                </div>
                <div className="field">
                  <label>Email address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label>Phone number *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 ..."
                  />
                </div>
                <div className="field">
                  <label>Company name</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="field">
                <label>Service interested in *</label>
                <select
                  name="serviceInterested"
                  value={form.serviceInterested}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="website">Website / Landing Page</option>
                  <option value="web-app">Web Application (MERN)</option>
                  <option value="mobile-app">Mobile App (React Native)</option>
                  <option value="ai-agent">AI Agent / Chatbot</option>
                  <option value="saas">SaaS Product Development</option>
                  <option value="algo-trading">Algo Trading Platform</option>
                  <option value="data-analytics">Data Analytics Dashboard</option>
                  <option value="ecommerce">E-Commerce Platform</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="field">
                <label>Project requirements *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your project — what you're building, who it's for, and any specific features. Even a rough description helps."
                />
              </div>

              <div className="form-actions">
                <span className="meta">Your information stays private.</span>
                <button type="submit" className="nav-cta" disabled={loading}>
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send inquiry <span className="nav-cta-arrow">→</span>
                    </>
                  )}
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
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
