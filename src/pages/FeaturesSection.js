/**
 * Features Section Component
 * Showcases main product features
 */

function FeaturesSection() {
	const features = [
		{
			title: 'Barramento Universal',
			description: 'Barramento agnóstico para entrada e saída de dados, preservando o padrão semântico entre diferentes sistemas e plataformas. Você define quem acessa, o que transita e controla tudo em um gerenciamento unificado.',
			icon: 'zap',
			color: 'blue'
		},
		{
			title: 'Visualizador Clínico',
			description: 'Apresente dados de pacientes provenientes de outros sistemas e organizações em um visualizador clínico whitelabel, acessível diretamente a partir do seu Tasy ou MV.',
			icon: 'eye',
			color: 'blue'
		},
		{
			title: 'Volumetria de transação de Dados',
			description: 'Monitore o volume e os tipos de dados trafegados entre sistemas. Dashboards e relatórios prontos ajudam na tomada de decisão, negociação entre organizações e definição de estratégias operacionais.',
			icon: 'chart',
			color: 'blue'
		},
		{
			title: 'Análise de Dados por Apoio de IA',
			description: 'Com apoio da nossa IA, você analisa milhões de dados em períodos específicos, com relatórios completos e dashboards dinâmicos. Nossa IA não decide por você — ela aponta caminhos estratégicos para decisões mais seguras e inteligentes.',
			icon: 'shuffle',
			color: 'blue'
		},
		{
			title: 'Painel de controle e governança',
			description: 'Veja em um único lugar todas as suas operações ativas, logs de eventos, alertas, alterações no sistema, de usuários e monitoramento de conexões operacionais.',
			icon: 'refresh',
			color: 'blue'
		},
		{
			title: 'RNDS - Rede Nacional de Dados em Saúde',
			description: 'Esteja preparado para o futuro da RNDS. À medida que a regulamentação avança e a obrigatoriedade se consolida, sua instituição estará pronta: Cabe a nós adequar os componentes FHIR para entregar seus dados ao Ministério da Saúde.',
			icon: 'lock',
			color: 'blue'
		}
	];

	const getIcon = (iconName) => {
		const icons = {
			zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>',
			shuffle: '<path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path>',
			refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path>',
			eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>',
			chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>',
			lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
		};
		return icons[iconName] || '';
	};

	const getColorClasses = (color) => {
		const colors = {
			blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
			primary: { bg: 'bg-primary-100', icon: 'text-primary-500' }
		};
		return colors[color] || colors.blue;
	};

	return `
        <section id="features" class="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                        Soluções sob Medida
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Soluções sob medida para a <br>
                        <span class="text-primary-500">Interoperabilidade da sua Organização</span>
                    </h2>
                    
                    <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                        Um ecossistema enxuto, de fácil aplicação e controle
                    </p>
                </div>
                
                <!-- Features Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    ${features.map(feature => {
		const colors = getColorClasses(feature.color);
		return `
                        <div>
                            <div class="rounded-xl border text-card-foreground shadow p-8 h-full bg-white border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                                <div class="w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${feature.icon} w-8 h-8 ${colors.icon}">
                                        ${getIcon(feature.icon)}
                                    </svg>
                                </div>
                                <h3 class="text-xl font-bold text-slate-900 mb-3">${feature.title}</h3>
                                <p class="text-slate-600 leading-relaxed">${feature.description}</p>
                            </div>
                        </div>
                        `;
	}).join('')}
                </div>
                
                <!-- Team Info -->
                <div class="mt-20 text-center">
                    <div class="rounded-xl border text-card-foreground shadow p-10 bg-slate-50 border-slate-200">
                        <h3 class="text-2xl font-bold text-slate-900 mb-4">Nosso Time</h3>
                        <p class="text-base text-slate-700 max-w-4xl mx-auto leading-relaxed">
                            A InterHealth reúne um time especializado em tecnologia e gestão em saúde. Engenheiros, administradores hospitalares, profissionais de assistências e especialistas em HL7® FHIR® direcionam continuamente a solução, garantindo aderência real às necessidades do mercado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
}
