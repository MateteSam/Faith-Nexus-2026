/**
 * FAITH NEXUS 2027 - REGISTRATION CONTROLLER
 * 14–16 April 2027 · Rosebank, Johannesburg, South Africa
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Delegate Registration Form Handler
    const delegateForm = document.getElementById('delegateRegForm');
    if (delegateForm) {
        delegateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('dName')?.value || 'Delegate';
            const email = document.getElementById('dEmail')?.value || '';
            const pass = document.getElementById('dPass')?.value || 'Summit Pass';
            
            // Simulating API registration endpoint
            console.log(`[Faith Nexus 2027] Registration submitted for: ${name} (${email}) - Pass: ${pass}`);
            
            // Redirect to success page
            window.location.href = `/success.html?name=${encodeURIComponent(name)}`;
        });
    }

    // 2. Smooth Scroll to Registration Form
    document.querySelectorAll('.open-register-form').forEach(btn => {
        btn.addEventListener('click', () => {
            const formSection = document.getElementById('register-form-section');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Conditional Logic for Visa / International Delegations
    const travelRadios = document.querySelectorAll('input[name="travel_intl"]');
    const visaLogic = document.getElementById('visa-conditional');
    if (travelRadios && visaLogic) {
        travelRadios.forEach(radio => radio.addEventListener('change', (e) => {
            visaLogic.style.display = e.target.value === 'yes' ? 'block' : 'none';
        }));
    }
});
