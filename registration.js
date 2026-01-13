const pricing = {
    plenary: {
        early: { label: 'Early-Bird Plenary Access – R300', price: 300 },
        standard: { label: 'Standard Plenary Access – R350', price: 350 }
    },
    full: {
        early: { label: 'Early-Bird Full Access – R500', price: 500 },
        standard: { label: 'Standard Full Access – R550', price: 550 }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const ticketCategory = document.getElementById('ticket-category');
    const ticketPriceSelect = document.getElementById('ticket-price-option');
    const addonCheckboxes = document.querySelectorAll('input[name="addon"]');
    const grandTotalEl = document.getElementById('grand-total');
    const summaryItemsEl = document.getElementById('summary-items');

    // Conditional Fields
    const travelRadios = document.querySelectorAll('input[name="travel_intl"]');
    const visaLogic = document.getElementById('visa-conditional');
    const creatorRadios = document.querySelectorAll('input[name="is_creator"]');
    const creatorLogic = document.getElementById('creator-conditional');

    function updatePricingOptions() {
        if (!ticketCategory || !ticketPriceSelect) return;

        const category = ticketCategory.value; // 'plenary' or 'full'
        const options = pricing[category];

        ticketPriceSelect.innerHTML = `
            <option value="early" data-price="${options.early.price}">${options.early.label}</option>
            <option value="standard" data-price="${options.standard.price}" selected>${options.standard.label}</option>
        `;
        updateSummary();
    }

    function updateSummary() {
        if (!grandTotalEl || !summaryItemsEl) return;

        let total = 0;
        let html = '';

        // 1. Ticket Calculation
        const selectedOption = ticketPriceSelect.options[ticketPriceSelect.selectedIndex];
        if (selectedOption) {
            const price = parseInt(selectedOption.getAttribute('data-price'));
            total += price;
            html += `<div class="summary-item">
                        <span style="opacity: 0.6;">Delegate: ${ticketCategory.value === 'plenary' ? 'Plenary' : 'Full Access'}</span>
                        <span style="color: #c5a059;">R${price}</span>
                    </div>`;
        }

        // 2. Add-ons Calculation
        addonCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const price = parseInt(checkbox.dataset.price);
                const label = checkbox.dataset.label;
                total += price;
                if (price > 0) {
                    html += `<div class="summary-item">
                                <span style="opacity: 0.6;">${label}</span>
                                <span style="color: #c5a059;">R${price}</span>
                            </div>`;
                } else {
                    html += `<div class="summary-item">
                                <span style="opacity: 0.6;">${label}</span>
                                <span style="color: #c5a059;">Included</span>
                            </div>`;
                }
            }
        });

        summaryItemsEl.innerHTML = html;
        grandTotalEl.innerText = `R${total}`;
    }

    // Event Listeners
    if (ticketCategory) ticketCategory.addEventListener('change', updatePricingOptions);
    if (ticketPriceSelect) ticketPriceSelect.addEventListener('change', updateSummary);
    addonCheckboxes.forEach(box => box.addEventListener('change', updateSummary));

    // Visibility Logic
    travelRadios.forEach(radio => radio.addEventListener('change', (e) => {
        visaLogic.style.display = e.target.value === 'yes' ? 'block' : 'none';
        if (e.target.value === 'yes') visaLogic.classList.add('reveal', 'active');
    }));

    creatorRadios.forEach(radio => radio.addEventListener('change', (e) => {
        creatorLogic.style.display = e.target.value === 'yes' ? 'block' : 'none';
        if (e.target.value === 'yes') creatorLogic.classList.add('reveal', 'active');
    }));

    // Form Submissions
    const individualForm = document.getElementById('individual-form');
    const groupForm = document.getElementById('group-form');

    if (individualForm) {
        individualForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, this would be an async fetch/post
            window.location.href = '/success.html';
        });
    }

    if (groupForm) {
        groupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Group enquiry flow
            window.location.href = '/success.html?type=group';
        });
    }

    // Init
    updatePricingOptions();
});
