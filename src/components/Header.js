/**
 * Header Component
 * Navigation header with logo, menu links and CTA button
 */

function Header() {
	return `
        <header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex items-center justify-between h-20">
                    <!-- Logo -->
                    <a href="/" class="flex items-center group">
                        <img src="./public/images/logo/full_logo.jpeg" alt="InterHealth" class="h-12 transition-opacity group-hover:opacity-80">
                    </a>
                    
                    <!-- Desktop Navigation -->
                    <nav class="hidden lg:flex items-center gap-6">
                        <a href="/#hero" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 hover:border-b-2 hover:border-primary-500">Início</a>
                        <a href="/#problem-solution" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 hover:border-b-2 hover:border-primary-500">Problema & Solução</a>
                        <a href="/#features" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 hover:border-b-2 hover:border-primary-500">Funcionalidades</a>
                        <a href="/#differentials" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 hover:border-b-2 hover:border-primary-500">Diferenciais</a>
                        <a href="/#benefits" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 hover:border-b-2 hover:border-primary-500">Benefícios</a>
                        <a href="/form.html" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500 hover:border-b-2 hover:border-primary-500">Contato</a>
                    </nav>
                    
                    <!-- CTA Button -->
                    <div class="hidden lg:flex items-center gap-4">
                        <a href="/form.html" class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                            Agende uma Demo
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                        <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-slate-900 hidden">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-slate-200 shadow-xl">
                <nav class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
                    <a href="/#hero" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500">Início</a>
                    <a href="/#problem-solution" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500">Problema & Solução</a>
                    <a href="/#features" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500">Funcionalidades</a>
                    <a href="/#differentials" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500">Diferenciais</a>
                    <a href="/#benefits" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500">Benefícios</a>
                    <a href="/form.html" class="text-sm font-medium text-slate-700 transition-colors hover:text-primary-500">Contato</a>
                    <a href="/form.html" class="btn-primary w-full mt-2 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                        Agende uma Demo
                    </a>
                </nav>
            </div>
        </header>
        
    `;
}
