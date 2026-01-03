/**
 * Hero Section Component
 * Main hero section with headline, description and CTAs
 */

function HeroSection() {
	return `
        <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-primary-50 to-slate-50 pt-20">
            <!-- Decorative Background -->
            <div class="absolute inset-0 overflow-hidden opacity-20">
                <!-- Medical Icons -->
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-[10%] left-[15%] w-16 h-16 text-primary-300 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"></path>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-[70%] right-[10%] w-20 h-20 text-blue-200 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"></path>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-[20%] left-[25%] w-12 h-12 text-primary-200 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-[30%] right-[20%] w-14 h-14 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
                
                <!-- Gradient Blobs -->
                <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
                <div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            </div>
            
            <!-- Content -->
            <div class="relative z-10 container-custom py-12 sm:py-16 lg:py-20 text-center">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-8" style="opacity: 1; transform: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    Plataforma de Interoperabilidade em Saúde para Dados Clínicos e Não Clínicos
                </div>
                
                <!-- Headline -->
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight px-2 animate-fadeIn">
                    Dados no padrão FHIR para uma<br>
                    <span class="text-gradient">interoperabilidade que gera resultados</span>
                </h1>
                
                <!-- Description -->
                <p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 animate-fadeIn">
                    A ponte tecnológica inteligente e no-code para interoperabilidade com sistemas de gestão em saúde como MV, Tasy, TOTVS RM e demais ERPs, LIS, RIS, PACS, PEP e aFS.
                </p>
                
                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 sm:mb-16 px-4 animate-fadeIn">
                    <a href="/form.html" class="bg-primary-500 hover:bg-primary-600 text-white px-7 py-3 text-base rounded-lg shadow-md transition-all hover:shadow-lg group font-medium inline-flex items-center">
                        Inicie Sua Integração FHIR Agora
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                    
                    <a href="/form.html" class="border-2 border-primary-400 bg-white text-primary-700 hover:bg-primary-50 px-7 py-3 text-base rounded-lg transition-all hover:border-primary-500 group font-medium inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                        Agende uma Demo
                    </a>
                </div>
                
                <!-- Features Pills -->
                <div class="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-600 text-sm sm:text-base px-4 animate-fadeIn">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary-500">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                        <span>Conformidade com a LGPD</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        <span>Saída no Padrão FHIR R4 e R5</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary-500">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Criptografia Ponta a Ponta</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-blue-400">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                        </svg>
                        <span>Gestão de Volumetria</span>
                    </div>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div class="w-6 h-10 border-2 border-slate-400 rounded-full p-1 relative">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full mx-auto animate-scroll-dot"></div>
                </div>
            </div>
        </section>
    `;
}
