/**
 * Differentials Section Component
 * Highlights what makes the product unique
 */

function DifferentialsSection() {
	const differentials = [
		{
			title: 'Integração No-code',
			description: 'Aumente o engajamento do time de negócios e analistas de TI com uma solução no-code na sua idealização de interoperabilidade',
			color: 'blue'
		},
		{
			title: 'Construtor Visual',
			description: 'Configure integrações visualmente, sem complicação. Arraste os dados e a InterHealth transforma tudo em JSON FHIR com Inteligência Artificial.',
			color: 'blue'
		},
		{
			title: 'Forma de Instalação Flexível',
			description: 'Você decide a forma de instalação, podendo ser instalavel (On-Premise) ou SAAS (Software as a Service). Você junto com nossos especialistas de infraestrutura define o melhor modelo para seu negócio.',
			color: 'blue'
		},
		{
			title: 'Microserviços Prontos',
			description: 'Integração rápida, segura e sem programação. Microserviços prontos que entregam dados estruturados de Tasy, MV, TOTVS RM e mais, em minutos. Veja suas informações de governança de atendimento, medicamentos, prescrições, observações clínicas e exames em poucas ações sem programação do seu time.',
			color: 'blue'
		},
		{
			title: 'Interoperabilidade Semântica',
			description: 'No ecossistema brasileiro de saúde, domínios como SUS, TUSS, Unimed, ANVISA, CID, CIAR, NANDA, BRASINDICE, SIMPRO e TISS são essenciais. Interoperabilidade vai além da sintaxe: conecta organizações com semântica preservada e garante problemas. Atue com interoperabilidade com semântica organizacional preservada.',
			color: 'blue'
		},
		{
			title: 'Compliance Nativo',
			description: 'Preparado para RNDS, LGPD e padrões internacionais de saúde',
			color: 'blue'
		}
	];

	const getIcon = (title) => {
		const icons = {
			'Integração No-code': '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
			'Construtor Visual': '<path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path>',
			'Forma de Instalação Flexível': '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>',
			'Microserviços Prontos': '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>',
			'Interoperabilidade Semântica': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>',
			'Compliance Nativo': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>'
		};
		return icons[title] || '';
	};

	const getColorClasses = (color) => {
		const colors = {
			blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-100', iconColor: 'text-blue-600', title: 'text-blue-600' },
			primary: { bg: 'bg-primary-50', border: 'border-primary-200', icon: 'bg-primary-100', iconColor: 'text-primary-500', title: 'text-primary-500' }
		};
		return colors[color] || colors.blue;
	};

	return `
        <section id="differentials" class="section-padding bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        Por Que InterHealth?
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Diferenciais que <br>
                        <span class="text-primary-500">transformam resultados</span>
                    </h2>
                    
                    <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                        O que torna InterHealth único no mercado de interoperabilidade em saúde digital
                    </p>
                </div>
                
                <!-- Differentials Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
                    ${differentials.map(diff => {
		const colors = getColorClasses(diff.color);
		return `
                            <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full ${colors.bg} border ${colors.border} hover:shadow-lg transition-all hover:-translate-y-1">
                                <div class="w-12 h-12 rounded-lg ${colors.icon} flex items-center justify-center mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${colors.iconColor}">
                                        ${getIcon(diff.title)}
                                    </svg>
                                </div>
                                <h3 class="text-lg font-bold ${colors.title} mb-3">${diff.title}</h3>
                                <p class="text-slate-600 text-sm leading-relaxed">${diff.description}</p>
                            </div>
                        `;
	}).join('')}
                </div>
                
                <!-- Additional Differentials -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    <!-- Implantação Ágil -->
                    <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full bg-white border border-slate-200 hover:shadow-lg transition-all">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Implantação Ágil</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Nosso time especializado em implantação Ágil e FHIR atua de forma remota, garantindo eficiência no processo e sempre buscando reduzir ao máximo o tempo e o esforço do cliente nas entregas.
                        </p>
                    </div>
                    
                    <!-- Ganhos Rápidos -->
                    <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full bg-white border border-slate-200 hover:shadow-lg transition-all">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Ganhos Rápidos</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Com a abordagem Legado + D1, enquanto a migração do legado interoperável é realizada, habilitamos a ingestão diária, permitindo a análise imediata de dados históricos e atuais.
                        </p>
                    </div>
                    
                    <!-- Flexibilidade -->
                    <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full bg-white border border-slate-200 hover:shadow-lg transition-all">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Flexibilidade</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Para nós não existe versão de sistema e sim banco de dados. Não importa a modalidade da informação e sim que ela exista em algum lugar.
                        </p>
                    </div>
                    
                    <!-- Consultoria Especializada -->
                    <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full bg-white border border-slate-200 hover:shadow-lg transition-all">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Consultoria Especializada</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Não trabalhamos com limitação de versão de sistema, e sim com dados. Independentemente do formato ou origem, se a informação existe, conseguimos interoperar.
                        </p>
                    </div>
                    
                    <!-- Regras Normativas e de Mercados -->
                    <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full bg-white border border-slate-200 hover:shadow-lg transition-all">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Regras Normativas e de Mercados</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Nossos especialistas orientam sua instituição em aspectos legais, regulatórios e de compliance da interoperabilidade, garantindo segurança jurídica e redução de riscos.
                        </p>
                    </div>
                    
                    <!-- Organizações Diferentes, abordagens distintas -->
                    <div class="rounded-2xl shadow-sm p-6 sm:p-8 h-full bg-white border border-slate-200 hover:shadow-lg transition-all">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Organizações Diferentes, abordagens distintas</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Cada instituição possui sua própria cultura, normas e diretrizes. Por isso, nosso time atua com flexibilidade, adaptando a abordagem para atender às necessidades específicas de cada organização.
                        </p>
                    </div>
                </div>

            </div>
        		</section>
	`;
}

DifferentialsSection();
