import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    contribution: ''
  });
  const [submissionMethods, setSubmissionMethods] = useState({
    email: true,
    whatsapp: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmissionMethodChange = (method: 'email' | 'whatsapp') => {
    setSubmissionMethods(prev => ({
      ...prev,
      [method]: !prev[method],
      // Email is always required, so prevent unchecking if it's the only method
      email: method === 'email' && prev.email && !prev.whatsapp ? true : prev.email
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create registration message
      const registrationData = `
🎉 Faith Nexus 2026 Registration

👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏢 Organization: ${formData.organization || 'Not specified'}
💼 Role: ${formData.role}
📝 Contribution: ${formData.contribution}

Thank you for registering for Faith Nexus 2026!
      `.trim();

      // Submit via email (always required)
      if (submissionMethods.email) {
  const emailSubject = encodeURIComponent('Faith Nexus 2026 Registration');
        const emailBody = encodeURIComponent(registrationData);
        window.location.href = `mailto:info@faithnexus.world?subject=${emailSubject}&body=${emailBody}`;
      }

      // Submit via WhatsApp (if selected)
      if (submissionMethods.whatsapp) {
        const whatsappMessage = encodeURIComponent(registrationData);
        setTimeout(() => {
          window.open(`https://wa.me/27689313745?text=${whatsappMessage}`, '_blank');
        }, 1000);
      }

      // Show success message
      alert('Registration submitted successfully! Your default email client will open to send the registration details.');
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="registration-form" className="max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-1 rounded-3xl shadow-2xl">
        <div className="bg-background rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Register for Faith Nexus 2026
            </h1>
            <p className="text-muted-foreground text-lg">March 18–21, 2026 · Pretoria, South Africa</p>
            <p className="text-sm text-muted-foreground mt-2">Reserve your spot — no payment required at this stage</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Submission Method Selection */}
            <section className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                How would you like to submit your registration?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <input
                    type="checkbox"
                    id="emailSubmission"
                    checked={submissionMethods.email}
                    onChange={() => handleSubmissionMethodChange('email')}
                    className="w-5 h-5 text-primary rounded focus:ring-primary"
                  />
                  <label htmlFor="emailSubmission" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="font-semibold text-foreground">Email Submission</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Submit via email (Required)</p>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-background rounded-xl border border-border hover:border-green-500/50 transition-colors">
                  <input
                    type="checkbox"
                    id="whatsappSubmission"
                    checked={submissionMethods.whatsapp}
                    onChange={() => handleSubmissionMethodChange('whatsapp')}
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <label htmlFor="whatsappSubmission" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                      <span className="font-semibold text-foreground">WhatsApp Submission</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Also submit via WhatsApp (Optional)</p>
                  </label>
                </div>
              </div>
            </section>

            <section className="p-6 bg-card rounded-2xl border border-border shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-foreground">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="p-6 bg-card rounded-2xl border border-border shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+27 68 931 3745"
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="p-6 bg-card rounded-2xl border border-border shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6l-3-2-3 2V6" />
                </svg>
                Professional Information
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="organization" className="block text-sm font-semibold text-foreground">Organization/Ministry (Optional)</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Your church, ministry, or organization"
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-semibold text-foreground">Role/Profession *</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="e.g., Pastor, Filmmaker, Author"
                    className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="p-6 bg-card rounded-2xl border border-border shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Interests & Contribution
              </h2>
              <div className="space-y-2">
                <label htmlFor="contribution" className="block text-sm font-semibold text-foreground">How do you plan to contribute to the Faith Nexus movement? *</label>
                <textarea
                  id="contribution"
                  name="contribution"
                  value={formData.contribution}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your vision, skills, or resources you'd like to contribute to advancing Kingdom content creation..."
                  className="w-full px-4 py-3 border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                  required
                ></textarea>
              </div>
            </section>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting || (!submissionMethods.email && !submissionMethods.whatsapp)}
                className="inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-primary via-primary to-secondary shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Submit Registration
                  </>
                )}
              </button>
              
              <p className="text-sm text-muted-foreground mt-3">
                Your registration will be sent via your selected method(s)
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
