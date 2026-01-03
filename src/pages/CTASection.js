/**
 * CTA (Call to Action) Section Component
 * Main conversion section with prominent CTAs
 */

function CTASection() {
	return `
        <section id="cta" class="section-padding pt-40 bg-gradient-to-b from-slate-50 to-white mb-40">
            <div class="container-custom px-4 sm:px-8  lg:px-16">
                <div class="relative overflow-hidden rounded-3xl max-w-6xl mx-auto">
                    <!-- Background Gradient -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-slate-50"></div>
                    
                    <!-- Decorative Blobs -->
                    <div class="absolute inset-0 overflow-hidden opacity-20">
                        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
                        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
                    </div>
                    
                    <!-- Content -->
                    <div class="relative z-10 px-8 md:px-16 py-20 text-center">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Pronto para transformar sua<br>
                            <span class="text-gradient">interoperabilidade em saúde?</span>
                        </h2>
                        
                        <p class="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Junte-se a hospitais e instituições que já implementaram integração FHIR em dias, não em meses
                        </p>
                        
                        <!-- CTAs -->
                        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <button onclick="scrollToSection('contact')" class="bg-primary-500 hover:bg-primary-600 text-white px-7 py-3 text-base rounded-lg shadow-md transition-all hover:shadow-lg group font-medium">
                                Inicie Sua Integração FHIR Agora
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>
                            
                            <button onclick="scrollToSection('contact')" class="border-2 border-primary-400 bg-white text-primary-700 hover:bg-primary-50 px-7 py-3 text-base rounded-lg transition-all hover:border-primary-500 group font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                                Agende uma Demo
                            </button>
                        </div>
                        
                        <!-- Trust Indicators -->
                        <div class="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-slate-600 text-sm sm:text-base">
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-primary-500"></div>
                                <span>Sem alta complexidade</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span>Implantação em dias</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span>Suporte especializado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        		</section>
	`;
}
