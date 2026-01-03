# InterHealth Landing Page

Landing page moderna e profissional para a plataforma InterHealth - SaaS de Interoperabilidade em Saúde Digital.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS utilitário via CDN
- **JavaScript (ES6+)** - Interatividade e componentes modulares
- **Clean Code** - Código limpo e manutenível

## 📁 Estrutura do Projeto

```
interhealth-landing-page/
├── index.html                  # Página principal
├── public/
│   ├── images/                 # Imagens organizadas por seção
│   │   ├── hero/
│   │   ├── features/
│   │   ├── differentials/
│   │   └── benefits/
│   └── favicon/                # Favicons
│       └── favicon.png
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/                  # Seções da landing page
│   │   ├── HeroSection.js
│   │   ├── ProblemSolutionSection.js
│   │   ├── FeaturesSection.js
│   │   ├── DifferentialsSection.js
│   │   ├── BenefitsSection.js
│   │   ├── CTASection.js
│   │   ├── FAQSection.js
│   │   └── ContactSection.js
│   ├── styles/                 # Estilos globais
│   │   └── main.css
│   └── utils/                  # Scripts utilitários
│       └── app.js
└── README.md
```

## 🎨 Características

### Design

- ✅ Design moderno e responsivo
- ✅ Gradientes e animações sutis
- ✅ Ícones SVG inline
- ✅ Paleta de cores profissional (Teal/Slate)
- ✅ Tipografia otimizada (Inter)

### Funcionalidades

- ✅ Navegação smooth scroll
- ✅ Menu mobile responsivo
- ✅ Accordion FAQ
- ✅ Tabs para benefícios
- ✅ Formulário de contato
- ✅ Animações on scroll
- ✅ Header fixo com efeito de scroll

### Performance

- ✅ Código modular e reutilizável
- ✅ Lazy loading de componentes
- ✅ CSS otimizado com Tailwind
- ✅ Sem dependências pesadas

## 🚦 Como Executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/interhealth-landing-page.git
   cd interhealth-landing-page
   ```

2. **Abra o arquivo index.html**

   Você pode abrir diretamente no navegador ou usar um servidor local:

   **Com Live Server (VS Code)**

   - Instale a extensão Live Server
   - Clique com botão direito no `index.html`
   - Selecione "Open with Live Server"

   **Com Python**

   ```bash
   python -m http.server 8000
   ```

   Acesse: `http://localhost:8000`

   **Com Node.js**

   ```bash
   npx serve .
   ```

## 📱 Seções da Landing Page

1. **Hero** - Banner principal com CTA
2. **Problema & Solução** - Desafios e a solução oferecida
3. **Funcionalidades** - Features principais do produto
4. **Diferenciais** - O que torna o produto único
5. **Benefícios** - Valor para cada stakeholder (tabs)
6. **CTA** - Chamada para ação principal
7. **FAQ** - Perguntas frequentes (accordion)
8. **Contato** - Formulário e informações
9. **Footer** - Links e informações adicionais

## 🎯 Clean Code Practices

- **Componentização**: Cada seção é um componente modular
- **Separação de Responsabilidades**: HTML, CSS e JS separados
- **Nomenclatura Descritiva**: Funções e variáveis com nomes claros
- **Comentários**: Documentação em código
- **DRY**: Código reutilizável e sem repetição
- **Organização**: Estrutura de pastas lógica

## 🔧 Customização

### Cores

As cores principais podem ser alteradas no `tailwind.config` dentro do `index.html`:

```javascript
colors: {
    primary: {
        500: '#14b8a6', // Teal
        600: '#0d9488',
        // ...
    }
}
```

### Conteúdo

Cada seção tem seu próprio arquivo em `src/pages/`. Edite o conteúdo diretamente nos componentes.

### Estilos Globais

Adicione estilos customizados em `src/styles/main.css`.

## 📧 Contato

Para dúvidas ou sugestões:

- Email: contato@interhealth.com
- LinkedIn: [InterHealth](https://linkedin.com)

## 📄 Licença

© 2025 InterHealth. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Healthcare**
