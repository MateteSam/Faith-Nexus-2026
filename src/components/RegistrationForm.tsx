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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);

      // Show success message and redirect options
      const contactMethod = window.confirm(
        'Registration submitted successfully!\n\nChoose how to proceed:\n\nOK = Contact via Email (info@faithnexus.world)\nCancel = Contact via WhatsApp (+27689313745)'
      );

      if (contactMethod) {
        // Redirect to email
        window.location.href = 'mailto:info@faithnexus.world?subject=Faith Nexus 2025 Registration&body=Hi, I have registered for Faith Nexus 2025. Please contact me for further details.';
      } else {
        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/27689313745?text=Hi, I have registered for Faith Nexus 2025. Please contact me for further details.`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="registration-form" className="max-w-3xl mx-auto bg-gradient-to-br from-white/80 to-white p-1 rounded-2xl shadow-lg my-8">
      <div className="bg-white rounded-2xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Register for Faith Nexus 2025</h1>
          <p className="text-sm text-gray-500">November 27–29, 2025 · Pretoria, South Africa</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
                  required
                />
              </div>
            </div>
          </section>

          <section className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+27 68 931 3745"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
                  required
                />
              </div>
            </div>
          </section>

          <section className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Professional Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization/Ministry (Optional)</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Your church, ministry, or organization"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role/Profession *</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g., Pastor, Filmmaker, Author"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
                  required
                />
              </div>
            </div>
          </section>

          <section className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Interests & Contribution</h2>
            <textarea
              id="contribution"
              name="contribution"
              value={formData.contribution}
              onChange={handleInputChange}
              rows={5}
              placeholder="Tell us how you plan to contribute to the Faith Nexus movement..."
              className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40 focus:border-primary sm:text-sm"
              required
            ></textarea>
          </section>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-3 py-3 px-6 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary-foreground shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
