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
  const [showContactOptions, setShowContactOptions] = useState(false);

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
      
      // Show contact options
      setShowContactOptions(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:info@faithnexus.world?subject=Faith Nexus 2025 Registration&body=Hi, I have registered for Faith Nexus 2025. Please contact me for further details.';
    setShowContactOptions(false);
  };

  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/27689313745?text=Hi,%20I%20have%20registered%20for%20Faith%20Nexus%202025.%20Please%20contact%20me%20for%20further%20details.`;
    window.open(whatsappUrl, '_blank');
    setShowContactOptions(false);
  };

  return (
    <div id="registration-form" className="max-w-3xl mx-auto bg-gradient-to-br from-white/80 to-white p-1 rounded-2xl shadow-lg my-8">
      <div className="bg-white rounded-2xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Register for Faith Nexus 2025</h1>
          <p className="text-sm text-gray-500">November 27–29, 2025 · Pretoria, South Africa</p>
        </div>

        {!showContactOptions ? (
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
        ) : (
          <div className="text-center space-y-6">
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Registration Submitted Successfully! 🎉</h2>
              <p className="text-green-700 mb-4">Thank you for registering for Faith Nexus 2025. Choose how you'd like us to contact you:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <button
                onClick={handleEmailContact}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-lg text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:scale-[1.02] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Us
              </button>
              
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-lg text-lg font-semibold text-white bg-green-600 hover:bg-green-700 shadow-lg hover:scale-[1.02] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                WhatsApp
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              WhatsApp: <span className="font-semibold">+27 68 931 3745</span><br />
              Email: <span className="font-semibold">info@faithnexus.world</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
