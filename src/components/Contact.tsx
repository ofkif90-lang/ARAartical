import { useState } from 'react';
import { Mail, Send, Phone, MapPin, Shield, Check, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ofkif50@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-900" />

      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal animation="reveal">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <Mail className="w-4 h-4 text-accent-300" />
              <span className="text-sm font-medium text-white/90">Get in Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-display text-white">
              Contact <span className="animated-gradient-text">Us</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have questions about insurance? Need help choosing the right coverage?
              We are here to help. Reach out and we will get back to you as soon as possible.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <Reveal animation="reveal-left">
            <div className="space-y-4">
              {/* Email card */}
              <a
                href="mailto:ofkif50@gmail.com"
                className="block group"
              >
                <div className="glass rounded-2xl p-6 hover-lift transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Email Us</h3>
                      <p className="text-primary-700 font-medium">ofkif50@gmail.com</p>
                      <p className="text-xs text-slate-500 mt-1">Click to send an email directly</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Response time card */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Quick Response</h3>
                    <p className="text-sm text-slate-600">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Coverage Area</h3>
                    <p className="text-sm text-slate-600">United States — Nationwide insurance guide</p>
                  </div>
                </div>
              </div>

              {/* Security badge */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Secure & Protected</h3>
                    <p className="text-sm text-slate-600">
                      This site uses security headers and content protection policies to guard against common web vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal animation="reveal-right" delay="delay-200">
            <div className="glass rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6 font-display">
                Send Us a Message
              </h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Message Ready!</h4>
                  <p className="text-sm text-slate-600">
                    Your email client should have opened. If not, email us directly at{' '}
                    <a href="mailto:ofkif50@gmail.com" className="text-primary-600 font-medium">
                      ofkif50@gmail.com
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder="Insurance inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    Your message will be sent to{' '}
                    <span className="font-medium text-primary-600">ofkif50@gmail.com</span>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
