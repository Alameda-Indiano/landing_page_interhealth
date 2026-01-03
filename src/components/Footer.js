/**
 * Footer Component
 * Site footer with links and information
 */

function Footer() {
	return `
        <footer class="bg-slate-900 text-slate-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <!-- Footer Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
                    <!-- Brand Column -->
                    <div class="lg:col-span-2">
                        <div class="mb-6">
                            <h3 class="text-3xl font-bold text-primary-400">InterHealth</h3>
                            <p class="text-sm text-slate-400 mt-2">Plataforma SaaS de Interoperabilidade em Saúde</p>
                        </div>
                        <p class="text-slate-400 leading-relaxed mb-6">
                            Conectando sistemas hospitalares ao padrão FHIR de forma simples, rápida e segura.
                        </p>
                        <!-- Social Links -->
                        <div class="flex gap-4">
                            <a 
                                href="#" 
                                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors" 
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a 
                                href="mailto:contato@interhealth.com" 
                                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors" 
                                aria-label="Email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Navigation Column -->
                    <div>
                        <h4 class="text-white font-semibold mb-4">Navegação</h4>
                        <ul class="space-y-3">
                            <li><a href="#hero" class="text-slate-400 hover:text-white transition-colors">Início</a></li>
                            <li><a href="#problem-solution" class="text-slate-400 hover:text-white transition-colors">Problema & Solução</a></li>
                            <li><a href="#features" class="text-slate-400 hover:text-white transition-colors">Funcionalidades</a></li>
                            <li><a href="#differentials" class="text-slate-400 hover:text-white transition-colors">Diferenciais</a></li>
                        </ul>
                    </div>
                    
                    <!-- Resources Column -->
                    <div>
                        <h4 class="text-white font-semibold mb-4">Recursos</h4>
                        <ul class="space-y-3">
                            <li><a href="#benefits" class="text-slate-400 hover:text-white transition-colors">Benefícios</a></li>
                            <li><a href="#blog" class="text-slate-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#contact" class="text-slate-400 hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>
                    
                    <!-- Legal Column -->
                    <div>
                        <h4 class="text-white font-semibold mb-4">Legal</h4>
                        <ul class="space-y-3">
                            <li><a href="#privacy" class="text-slate-400 hover:text-white transition-colors">Privacidade</a></li>
                            <li><a href="#terms" class="text-slate-400 hover:text-white transition-colors">Termos de Uso</a></li>
                            <li><a href="#lgpd" class="text-slate-400 hover:text-white transition-colors">LGPD</a></li>
                            <li><a href="#compliance" class="text-slate-400 hover:text-white transition-colors">Compliance</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Footer Bottom -->
                <div class="pt-6 sm:pt-8 border-t border-slate-800">
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
                        <p class="text-slate-500 text-sm">© 2025 InterHealth. Todos os direitos reservados.</p>
                        <div class="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 text-xs sm:text-sm">
                            <span class="text-slate-500">Made with ❤️ for Healthcare</span>
                            <span class="text-slate-700 hidden sm:inline">|</span>
                            <span class="text-slate-500">FHIR R4 & R5 Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}
