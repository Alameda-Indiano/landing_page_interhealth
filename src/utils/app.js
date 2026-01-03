/**
 * Main Application Script
 * Handles component rendering and interactions
 * Agora funcionando como script global (sem ES modules)
 */

/**
 * Render all components on page load
 */
document.addEventListener('DOMContentLoaded', () => {
	// Render Header
	const headerContainer = document.getElementById('header-component');
	if (headerContainer) {
		headerContainer.innerHTML = Header();
	}

	// Render Sections
	const heroContainer = document.getElementById('hero-section');
	if (heroContainer) {
		heroContainer.innerHTML = HeroSection();
	}

	const problemContainer = document.getElementById('problem-section');
	if (problemContainer) {
		problemContainer.innerHTML = ProblemSolutionSection();
	}

	const featuresContainer = document.getElementById('features-section');
	if (featuresContainer) {
		featuresContainer.innerHTML = FeaturesSection();
	}

	const differentialsContainer = document.getElementById('differentials-section');
	if (differentialsContainer) {
		differentialsContainer.innerHTML = DifferentialsSection();
	}

	const benefitsContainer = document.getElementById('benefits-section');
	if (benefitsContainer) {
		benefitsContainer.innerHTML = BenefitsSection();
	}

	const ctaContainer = document.getElementById('cta-section');
	if (ctaContainer) {
		ctaContainer.innerHTML = CTASection();
	}

	const faqContainer = document.getElementById('faq-section');
	if (faqContainer) {
		faqContainer.innerHTML = FAQSection();
	}

	const contactContainer = document.getElementById('contact-section');
	if (contactContainer) {
		contactContainer.innerHTML = ContactSection();
	}

	// Render Footer
	const footerContainer = document.getElementById('footer-component');
	if (footerContainer) {
		footerContainer.innerHTML = Footer();
	}

	// Initialize interactions
	initializeMobileMenu();
	initializeScrollEffects();
	addObserverAnimations();
});

/**
 * Initialize mobile menu toggle
 */
function initializeMobileMenu() {
	const mobileMenuBtn = document.getElementById('mobile-menu-btn');
	const mobileMenu = document.getElementById('mobile-menu');
	const menuIcon = document.getElementById('menu-icon');
	const closeIcon = document.getElementById('close-icon');

	if (mobileMenuBtn && mobileMenu) {
		mobileMenuBtn.addEventListener('click', () => {
			const isHidden = mobileMenu.classList.contains('hidden');

			if (isHidden) {
				mobileMenu.classList.remove('hidden');
				menuIcon?.classList.add('hidden');
				closeIcon?.classList.remove('hidden');
			} else {
				mobileMenu.classList.add('hidden');
				menuIcon?.classList.remove('hidden');
				closeIcon?.classList.add('hidden');
			}
		});

		// Close menu when clicking on links
		const mobileLinks = mobileMenu.querySelectorAll('a');
		mobileLinks.forEach(link => {
			link.addEventListener('click', () => {
				mobileMenu.classList.add('hidden');
				menuIcon?.classList.remove('hidden');
				closeIcon?.classList.add('hidden');
			});
		});
	}
}

/**
 * Initialize scroll effects for header
 */
function initializeScrollEffects() {
	const header = document.getElementById('header');

	if (header) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				header.classList.add('shadow-xl');
			} else {
				header.classList.remove('shadow-xl');
			}
		});
	}
}

/**
 * Add intersection observer for scroll animations
 */
function addObserverAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	// Observe all cards
	const cards = document.querySelectorAll('.card');
	cards.forEach(card => {
		card.style.opacity = '0';
		card.style.transform = 'translateY(20px)';
		card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		observer.observe(card);
	});
}

/**
 * Scroll to section smoothly
 * @param {string} sectionId - ID of the section to scroll to
 */
window.scrollToSection = function (sectionId) {
	const section = document.getElementById(sectionId);
	if (section) {
		const headerHeight = 80;
		const sectionTop = section.offsetTop - headerHeight;

		window.scrollTo({
			top: sectionTop,
			behavior: 'smooth'
		});
	}
};

/**
 * Toggle FAQ item
 * @param {number} index - Index of FAQ item
 */
window.toggleFAQ = function (index) {
	const faqItems = document.querySelectorAll('.faq-item');
	const currentItem = faqItems[index];

	if (currentItem) {
		const answer = currentItem.querySelector('.faq-answer');
		const icon = currentItem.querySelector('.faq-icon');
		const itemContent = currentItem.querySelector('.p-6');

		const isHidden = answer.classList.contains('hidden');

		// Close all FAQ items and remove background
		faqItems.forEach(item => {
			item.querySelector('.faq-answer')?.classList.add('hidden');
			item.querySelector('.faq-icon')?.classList.remove('rotate-180');
			item.querySelector('.p-6')?.classList.remove('bg-primary-50');
		});

		// Toggle current item
		if (isHidden) {
			answer.classList.remove('hidden');
			icon.classList.add('rotate-180');
			itemContent.classList.add('bg-primary-50');
		}
	}
};

/**
 * Switch benefit tabs
 * @param {string} tabId - ID of the tab to show
 */
window.switchTab = function (tabId) {
	// Hide all tab contents
	const tabContents = document.querySelectorAll('.tab-content');
	tabContents.forEach(content => {
		content.classList.add('hidden');
	});

	// Remove active state from all buttons
	const tabButtons = document.querySelectorAll('.tab-button');
	tabButtons.forEach(btn => {
		btn.classList.remove('bg-white', 'shadow-md', 'text-slate-900');
		btn.classList.add('text-slate-600');
	});

	// Show selected tab content
	const selectedContent = document.getElementById(`tab-${tabId}`);
	if (selectedContent) {
		selectedContent.classList.remove('hidden');
	}

	// Add active state to selected button
	const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
	if (selectedButton) {
		selectedButton.classList.add('bg-white', 'shadow-md', 'text-slate-900');
		selectedButton.classList.remove('text-slate-600');
	}
};

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
window.handleFormSubmit = function (event) {
	event.preventDefault();

	const form = event.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());

	// Show success message (you can replace with actual API call)
	console.log('Form submitted:', data);

	alert('Obrigado! Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.');

	// Reset form
	form.reset();
};
