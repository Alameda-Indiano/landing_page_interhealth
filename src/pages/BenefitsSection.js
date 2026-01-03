/**
 * Benefits Section Component
 * Shows benefits for different stakeholders with tabs
 */

function BenefitsSection() {
	const tabs = [
		{
			id: 'hospitais',
			label: 'Hospitais',
			icon: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>',
			benefits: [
				'Redução considerável no tempo de implementação de integrações',
				'Conformidade automática com padrões nacionais e internacionais',
				'Auditoria completa de todas as transformações realizadas',
				'Economia de até 70% em custos de desenvolvimento customizados'
			]
		},
		{
			id: 'desenvolvedores',
			label: 'Desenvolvedores',
			icon: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
			benefits: [
				'Interface visual elimina complexidade de mapeamento FHIR',
				'Documentação automática de todas as transformações',
				'Testes e validações integrados na plataforma',
				'Versionamento de configurações e rollback facilitado',
				'APIs RESTful para extensibilidade quando necessário',
				'Redução drástica do tempo de desenvolvimento'
			]
		},
		{
			id: 'gestores',
			label: 'Gestores',
			icon: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>',
			benefits: [
				'ROI mensurável em menos de 6 meses',
				'Redução de dependência de fornecedores externos',
				'Controle total sobre governança de dados',
				'Preparação para futuras regulamentações',
				'Dashboards executivos com métricas em tempo real',
				'Suporte técnico especializado e onboarding guiado'
			]
		}
	];

	const useCases = [
		{
			title: 'Redes Hospitalares',
			description: 'Unificação de dados clínicos entre múltiplas unidades com sistemas diferentes',
			icon: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>',
			color: 'blue'
		},
		{
			title: 'Startups HealthTech',
			description: 'Acesso rápido a dados hospitalares para soluções inovadoras de saúde digital',
			icon: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
			color: 'blue'
		},
		{
			title: 'Operadoras de Saúde',
			description: 'Integração com prestadores de serviço para auditoria e análise de sinistralidade',
			icon: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>',
			color: 'purple'
		}
	];

	return `
        <section id="benefits" class="section-padding bg-gradient-to-b from-white to-slate-50 mt-32">
            <div class="container-custom">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                        </svg>
                        Organizações de Saúde
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Benefícios para <br>
                        <span class="text-primary-500">Organizações de Saúde</span>
                    </h2>
                    
                    <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                        Resultados tangíveis para sua operação
                    </p>
                </div>
                
                <!-- Tabs Component -->
                <div class="max-w-6xl mx-auto mb-20 ">
                    <!-- Tab Buttons -->
                    <div class="grid grid-cols-3 gap-2 bg-slate-100 p-1 mb-8 sm:mb-12 max-w-2xl mx-auto">
                        ${tabs.map((tab, index) => `
                            <button 
                                onclick="switchTab('${tab.id}')" 
                                data-tab="${tab.id}"
                                class="tab-button flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-3 text-xs sm:text-sm font-medium rounded-md transition-all ${index === 0 ? 'bg-white shadow-md text-slate-900' : 'text-slate-600 hover:text-slate-900'}"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                                    ${tab.icon}
                                </svg>
                                <span>${tab.label}</span>
                            </button>
                        `).join('')}
                    </div>
                    
                    <!-- Tab Content -->
                    ${tabs.map((tab, index) => `
                        <div id="tab-${tab.id}" class="tab-content ${index !== 0 ? 'hidden' : ''}">
                            <div class="card bg-primary-50 border-primary-200 border-2 rounded-xl p-6 sm:p-8 lg:p-10">
                                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    ${tab.benefits.map(benefit => `
                                        <div class="flex gap-3">
                                            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-primary-500">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="m9 12 2 2 4-4"></path>
                                                </svg>
                                            </div>
                                            <p class="text-slate-700 leading-relaxed">${benefit}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Use Cases -->
                <div class="mt-20  max-w-6xl mx-auto">
                    <div class="rounded-xl border shadow px-8 py-10 sm:px-12 lg:px-16 bg-slate-50 border-slate-200">
                        <h3 class="text-3xl font-bold text-slate-900 mb-8 text-center">Casos de Uso Reais</h3>
                        <div class="grid md:grid-cols-3 gap-8">
                            ${useCases.map(useCase => {
		const colorClasses = {
			teal: { bg: 'bg-primary-100', border: 'border-primary-200', text: 'text-primary-500' },
			blue: { bg: 'bg-primary-100', border: 'border-primary-200', text: 'text-primary-500' },
			purple: { bg: 'bg-primary-100', border: 'border-primary-200', text: 'text-primary-500' }
		};
		const colors = colorClasses[useCase.color];
		return `
                                    <div class="text-center">
                                        <div class="w-16 h-16 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 ${colors.text}">
                                                ${useCase.icon}
                                            </svg>
                                        </div>
                                        <h4 class="text-xl font-semibold text-slate-900 mb-3">${useCase.title}</h4>
                                        <p class="text-slate-600 leading-relaxed">${useCase.description}</p>
                                    </div>
                                `;
	}).join('')}
                        </div>
                    </div>
                </div>
            </div>
        		</section>
	`;
}

BenefitsSection();
