/**
 * FAQ Section Component
 * Frequently Asked Questions with accordion functionality
 */

function FAQSection() {
	const faqs = [
		{
			question: 'Preciso de desenvolvedores para usar o InterHealth?',
			answer: 'Não. A InterHealth foi projetada para ser utilizada por analistas de TI e profissionais da saúde, sem necessidade de programação. A plataforma oferece recursos de arrastar e soltar, assistentes guiados e configuração orientada por processos. Embora haja a necessidade de entender a instituição — como regras próprias, particularidades de sistemas ou cenários mais complexos — nossa equipe apoia na modelagem técnica e nos ajustes necessários, garantindo que cada cliente seja atendido de acordo com suas necessidades. Em resumo: não é preciso desenvolver, mas, quando for preciso ir além, nós estamos juntos.'
		},
		{
			question: 'Os dados do Paciente podem ser apresentados no APP padrão da Instituição?',
			answer: 'Sim. O aplicativo do paciente pode apresentar os dados interoperados, desde que atenda aos requisitos de segurança, autenticação e controle de permissões definidas pela instituição. É comum que, por estratégia de relacionamento e fidelização, as instituições desejam exibir no app ou portal do paciente as mesmas informações disponíveis em outras plataformas clínicas. A InterHealth apoia esse processo, garantindo disponibilidade, segurança e conformidade na apresentação desses dados. Em resumo: sim, os dados podem ser exibidos no app institucional, desde que respeitados os critérios de segurança e governança.'
		},
		{
			question: 'Sistemas como MV e Tasy possuem formulários customizados para atender o corpo clínico. Esses dados também são interoperados?',
			answer: 'Sim. Formulários clínicos personalizados — como evoluções, anamnese, questionários de protocolos, registros cirúrgicos e outros — geralmente necessitam ser convertidos em informação estruturada e relevante para o histórico do paciente, e nós fazemos isso. Quando se investiu em adaptações de cenários (especialmente nativo do sistema) e foram customizados pelo analista, conseguimos extrair a informação realiza o mapeamento dessa informação e desenvolve mecanismos para que esses dados captados, podemos realizá-los e interoperá-los conforme a necessidade do cliente. Em resumo: mesmo parceiros sem FHIR podem interoperar, desde que haja disponibilidade técnica mínima para troca de dados.'
		},
		{
			question: 'Quais versões do FHIR são suportadas?',
			answer: 'Atualmente suportamos FHIR R4 e R5, que são as versões mais utilizadas e maduras do mercado, garantindo maior segurança, confiabilidade e aderência às bases mais intervencionais. Caso exista a necessidade de utilização de cenários anteriores, a InterHealth avalia tecnicamente cada cenário e pode oferecer estratégias de adaptação e compatibilidade, conforme o contexto e a necessidade da instituição.'
		},
		{
			question: 'Minha instituições tem parceiros como laboratório e diagnóstico por imagens que não tem protocolo FHIR aplicado. É possível enviar esses dados?',
			answer: 'Sim. O barramento entregue pela InterHealth, que passa a ser um ativo da instituição, o agnóstico, ou seja, consegue se integrar com diferentes padrões e protocolos. Se um parceiro não utiliza FHIR, Trabalhamos com diferentes padrões e protocolos. Se um parceiro não utiliza FHIR. Trabalhamos com diferentes padrões de integração, sempre respeitando terminologias semânticas, segurança e regras de interoperabilidade. Após o entendimento do tipo de dados que serão trocados, da plataforma e configurada para mediar essas informações e interoperá-las conforme o plano definido com a instituição. Em resumo: mesmo parceiros sem FHIR podem interoperar, desde que haja disponibilidade técnica mínima para troca de dados.'
		},
		{
			question: 'Interoperabilidade e integração são fatores iguais?',
			answer: 'Não. Embora parecidos, interoperabilidade e integração criada para fazer dois sistemas conversarem entre si, muitas vezes com regras limitadas, pouca reaproveitamento e menor controle. Já a interoperabilidade é pensada para um ecossistema ampliado, permitindo que dados produzidos dentro e fora da instituição sejam reutilizados de forma mais estruturada e padronizada para a troca de informações. Ela preserva governança, rastreabilidade de dado, segurança, padronização e significado clínico, fazendo uso de padrões reconhecidos como FHIR, TISS, DICOM, HL7, entre outros. Além disso, a interoperabilidade é pensada para um ecossistema ampliado, permitindo que dados produzidos dentro e fora da instituição sejam reutilizados de forma mais estruturada e padronizada e tomada de decisões mais embasadas. Em resumo: integração apenas conecta sistemas e interoperabilidade conecta sistemas, dados e significado, com governança, padronização e inteligência.'
		},
		{
			question: 'A InterHealth se adequa as normativas da LGPD (Lei Geral da Proteção de Dados)?',
			answer: 'Sim. A InterHealth está alinhada à LGPD. No contexto da solução, a instituição contratante atua como Controladora dos dados e a InterHealth como Operadora, seguindo os requisitos legais. Aplicamos camadas avançadas de segurança e privacidade, como pseudonimização, criptografia de dados sensíveis, controle de acesso, manutenção de rastreabilidade e registros para apoiar requisições de titulares e auxiliar as instituições. Em outras palavras: sua instituição mantém o controle dos dados, enquanto a InterHealth garante segurança, privacidade e boas práticas de proteção de dados.'
		},
		{
			question: 'O Que é a RNDS e como a InterHealth pode ajudar minha instituição?',
			answer: 'A RNDS é a Rede Nacional de Dados em Saúde, instituída pela Portaria GM/MS nº 1.434, de 28 de maio de 2020, e é regulamentado pelo Decreto nº 12.560, de 23 de julho de 2025. Trata-se da plataforma do Ministério da Saúde responsável por padronizar e permitir a troca segura de informações em saúde no Brasil, possibilitando que dados clínicos e administrativos circulem entre instituições públicas e privadas, com segurança, rastreabilidade, padronização e apoio às políticas públicas. Embora não exista uma lei única determinando que "todos os sistemas devem utilizar FHIR", a própria estrutura técnica do RNDS exige que as integrações utilizem HL7 FHIR com padrão oficial para envio e consumo de dados. Na prática, isso significa que qualquer integração com a RNDS precisa estar compatível com FHIR.'
		}
	];

	return `
        <section id="faq" class="section-padding bg-white  mb-20">
            <div class="container-custom">
                <div class="mt-20 max-w-6xl mx-auto">
                    <!-- Section Header -->
                    <div class="text-center mb-12">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            </svg>
                            Perguntas Frequentes
                        </div>
                        
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ainda tem dúvidas?</h2>
                        <p class="text-base text-slate-600">Encontre respostas para as perguntas mais comuns</p>
                    </div>
                    
                    <!-- FAQ Accordion -->
                    <div class="space-y-4">
                        ${faqs.map((faq, index) => `
                            <div class="faq-item rounded-xl border shadow overflow-hidden transition-all cursor-pointer hover:shadow-md" onclick="toggleFAQ(${index})">
                                <div class="p-6">
                                    <div class="flex justify-between items-start gap-4">
                                        <h3 class="text-lg font-semibold text-slate-900 flex-1">${faq.question}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon w-5 h-5 text-slate-400 flex-shrink-0 transition-transform">
                                            <path d="m6 9 6 6 6-6"></path>
                                        </svg>
                                    </div>
                                    <p class="faq-answer hidden text-slate-600 mt-4 leading-relaxed">
                                        ${faq.answer}
                                    </p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        		</section>
	`;
}
