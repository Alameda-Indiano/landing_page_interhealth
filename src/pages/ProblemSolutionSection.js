/**
 * Problem & Solution Section Component
 * Displays the challenges and the solution offered
 */

function ProblemSolutionSection() {
	const problems = [
		{
			title: 'Fragmentação de Dados',
			description: 'Sistemas hospitalares armazenam dados em formatos proprietários incompatíveis'
		},
		{
			title: 'Custo Elevado',
			description: 'Integrações customizadas consomem meses e orçamentos significativos'
		},
		{
			title: 'Falta de Padrão',
			description: 'Ausência de interoperabilidade impede compartilhamento entre instituições'
		},
		{
			title: 'Barreiras Técnicas',
			description: 'Equipes de TI gastam recursos preciosos em projetos de integração'
		}
	];

	const stats = [
		{ value: '80%', label: 'Redução no tempo de implementação' },
		{ value: '70%', label: 'Economia em custos de desenvolvimento' },
		{ value: '100%', label: 'Conformidade com padrões FHIR' }
	];

	return `
        <section id="problem-solution" class="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Problem Section -->
                <div class="text-center mb-20">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                        Saúde Digital é uma realidade. Interoperabilidade não.
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Interoperabilidade não é uma simples <span class="text-primary-500">integração</span>
                    </h2>
                    
                    <p class="text-lg text-slate-600 max-w-4xl mx-auto">
                        Interoperabilidade não se limita à integração ponto a ponto. Trata-se de uma solução agnóstica que unifica conexões, padroniza dados e opera múltiplas plataformas por meio de uma saída única e inteligente.
                    </p>
                </div>
                
                <!-- Problems Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-24">
                    ${problems.map(problem => `
                        <div>
                            <div class="rounded-xl border text-card-foreground shadow p-6 h-full border-primary-100 bg-white hover:shadow-lg transition-all hover:scale-105">
                                <div class="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary-500">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" x2="12" y1="8" y2="12"></line>
                                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                    </svg>
                                </div>
                                <h3 class="text-lg font-semibold text-slate-900 mb-2">${problem.title}</h3>
                                <p class="text-slate-600 text-sm leading-relaxed">${problem.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Additional Context -->
                <div class="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24">
                    <p class="text-base text-slate-700 leading-relaxed">
                        As instituições de saúde enfrentam desafios únicos na gestão do negócio, e a complexidade de integrar diferentes tecnologias cria barreiras para interpretar dados com qualidade.
                    </p>
                </div>

                <!-- Solution Section -->
                <div class="text-center mb-20">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        Nossa Solução
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Transforme integração em <span class="text-primary-500">simplicidade</span>
                    </h2>
                    
                    <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                        InterHealth conecta seus sistemas (MV, TASY) ao padrão FHIR de forma visual, rápida e sem código
                    </p>
                </div>
                
                <!-- Stats Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
                    ${stats.map((stat, index) => `
                        <div>
                            <div class="rounded-xl border text-card-foreground shadow ${index === 1 ? 'p-3 h-52' : 'p-4 h-44'} text-center border-primary-100 bg-gradient-to-br from-white to-primary-50 hover:shadow-xl transition-all hover:scale-105 flex flex-col items-center justify-center">
                                <div class="text-5xl font-bold text-primary-500 mb-3">
                                    ${stat.value}
                                </div>
                                <p class="text-slate-700 font-medium text-xl">${stat.label}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        		</section>
	`;
}
