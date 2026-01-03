/**
 * Contact Section Component
 * Contact form and information
 */

function ContactSection() {
	return `
        <section id="contact" class="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <!-- Section Header -->
                <div class="text-center mb-16">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-sm font-medium mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        Entre em Contato
                    </div>
                    
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Vamos conversar sobre sua<br>
                        <span class="text-primary-500">integração FHIR</span>
                    </h2>
                    
                    <p class="text-lg text-slate-600 max-w-3xl mx-auto">
                        Preencha o formulário e fale conosco diretamente pelo WhatsApp
                    </p>
                </div>
                
                <!-- Contact Grid -->
                <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                    <!-- Info Cards -->
                    <div class="space-y-8">
                        <!-- Why Contact Card -->
                        <div class="rounded-xl border shadow p-6 bg-slate-50 border-slate-200">
                            <h3 class="text-2xl font-bold text-slate-900 mb-6">Por que falar conosco?</h3>
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <div class="w-12 h-12 rounded-lg bg-primary-100 border border-primary-200 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary-500">
                                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                            <path d="M10 6h4"></path>
                                            <path d="M10 10h4"></path>
                                            <path d="M10 14h4"></path>
                                            <path d="M10 18h4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-slate-900 mb-1">Consultoria Especializada</h4>
                                        <p class="text-slate-600 text-sm">Expertise em sistemas MV, TASY e padrões FHIR</p>
                                    </div>
                                </div>
                                
                                <div class="flex gap-4">
                                    <div class="w-12 h-12 rounded-lg bg-primary-100 border border-primary-200 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary-500">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-slate-900 mb-1">Resposta Rápida</h4>
                                        <p class="text-slate-600 text-sm">Retornamos em até 24 horas úteis</p>
                                    </div>
                                </div>
                                
                                <div class="flex gap-4">
                                    <div class="w-12 h-12 rounded-lg bg-primary-100 border border-primary-200 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary-500">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-slate-900 mb-1">Atendimento Personalizado</h4>
                                        <p class="text-slate-600 text-sm">Soluções customizadas para sua instituição</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Contact Info -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 text-slate-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary-500">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                <a href="mailto:contato@interhealth.com" class="hover:text-primary-500 transition-colors">
                                    contato@interhealth.com
                                </a>
                            </div>
                            <div class="flex items-center gap-3 text-slate-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary-500">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>+55 (11) 9999-9999</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Form -->
                    <div class="rounded-xl border p-8 shadow-xl border-slate-200">
                        <form id="contact-form" class="space-y-6" onsubmit="handleFormSubmit(event)">
                            <div>
                                <label for="name" class="block text-sm font-medium text-slate-700 mb-2">Nome Completo *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="João Silva"
                                    class="w-full h-9 px-3 py-1 border rounded-md bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
                                >
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-medium text-slate-700 mb-2">E-mail Corporativo *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="joao.silva@hospital.com.br"
                                    class="w-full h-9 px-3 py-1 border rounded-md bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
                                >
                            </div>
                            
                            <div>
                                <label for="phone" class="block text-sm font-medium text-slate-700 mb-2">Telefone *</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    required 
                                    placeholder="(11) 99999-9999"
                                    class="w-full h-9 px-3 py-1 border rounded-md bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
                                >
                            </div>
                            
                            <div>
                                <label for="company" class="block text-sm font-medium text-slate-700 mb-2">Instituição</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    placeholder="Hospital XYZ"
                                    class="w-full h-9 px-3 py-1 border rounded-md bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
                                >
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium text-slate-700 mb-2">Mensagem *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    placeholder="Conte-nos sobre seu projeto de integração..."
                                    class="w-full min-h-[60px] h-32 px-3 py-2 border rounded-md bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors resize-none"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full bg-primary-500 hover:bg-primary-600 text-white px-7 py-3 text-base rounded-lg shadow-md transition-all hover:shadow-lg group flex items-center justify-center gap-2 font-medium"
                            >
                                Enviar via WhatsApp
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        		</section>
	`;
}
