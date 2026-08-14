# 🚀 G11 - ONE AI FOR BUSINESS (LATAM)

<div align="center">

  ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

  <p align="center">
    <strong>Landing Page interativa de orientação educacional para o programa Oracle Next Education (ONE) & Alura na América Latina.</strong>
  </p>

  <p align="center">
    🌐 <strong><a href="https://ericmonne.github.io/G11---LP-LATAM/">Acessar o Projeto Online</a></strong>
  </p>

</div>

---

## 📖 Sobre o Projeto

O **G11 - ONE AI FOR BUSINESS** é uma plataforma/landing page desenvolvida para guiar estudantes do programa **Oracle Next Education (ONE)** na América Latina na escolha de suas trilhas de especialização em Inteligência Artificial aplicada aos negócios.

O site apresenta os conjuntos de cursos sugeridos para apoiar os alunos na preparação para o **Challenge Individual**, permitindo que cada estudante trace um caminho alinhado ao seu perfil profissional (Estratégia & Liderança, Vendas, Marketing, Recursos Humanos ou Finanças & Operações).

---

## ✨ Principais Funcionalidades

- 🧭 **Orientação por Perfil (Rutas de Aprendizaje):** Guias recomendados de acordo com o nível, objetivo e tempo disponível do estudante (incluindo cálculo de carga horária semanal e duração sugerida).
- 📚 **Catálogo Completo de Formações:** Visão detalhada de 7 formações e mais de 20 cursos com ementas, tags temáticas, nível de dificuldade e ferramentas utilizadas (ChatGPT, Gemini, Claude, Make, etc.).
- 📂 **Accordions de Cursos com Animação Fluida:** Expansão e recolhimento dinâmico de detalhes do conteúdo programático com transições suaves via *Framer Motion*.
- 🔍 **Filtros Dinâmicos:** Filtragem instantânea por *Formaciones Generales*, *Formaciones Electivas*, *Estrategia & Liderazgo*, *Ventas & Marketing* e *RR.HH. & Operaciones*.
- 🌓 **Alternância de Tema (Dark / Light Mode):** Interface elegante com modo escuro nativo (estilo moderno em tons Slate/Indigo) e modo claro com contraste calibrado.
- 🎯 **Destaque para o Challenge Individual:** Seção explicativa sobre o projeto obrigatório que consolida o aprendizado prático do programa.
- 📱 **Design 100% Responsivo:** Experiência consistente e refinada em smartphones, tablets e telas widescreen.
- 🌐 **100% Localizado em Espanhol:** Conteúdo e interface adaptados com terminologia corporativa e educacional para a comunidade hispanohablante da América Latina.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia | Finalidade |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Biblioteca principal para interface declarativa e componentização |
| **[Vite 8](https://vitejs.dev/)** | Build tool ultrarrápido com Hot Module Replacement (HMR) |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Estilização utilitária de alta performance e suporte nativo a temas |
| **[Framer Motion](https://www.framer.com/motion/)** | Animações e transições fluidas de elementos de interface |
| **[Lucide React](https://lucide.dev/)** | Conjunto moderno e consistente de ícones vetoriais |
| **[GitHub Actions](https://github.com/features/actions)** | Pipeline de CI/CD para automação de build e deploy no GitHub Pages |

---

## 📁 Estrutura do Projeto

```plaintext
G11---LP-LATAM/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD do GitHub Actions para Pages
├── src/
│   ├── assets/                 # Imagens e logotipos oficiais (ONE & Alura)
│   ├── components/
│   │   ├── ui/                 # Componentes reutilizáveis de UI (Button, Card)
│   │   └── sitio_formaciones_g_11_es.jsx # Componente principal da aplicação
│   ├── data/
│   │   └── g11ContentES.js     # Base de dados estruturada das formações e rotas
│   ├── App.jsx                 # Componente raiz
│   ├── index.css               # Estilos globais e diretivas do Tailwind CSS v4
│   └── main.jsx                # Ponto de entrada do React
├── index.html                  # Template HTML base
├── vite.config.js              # Configuração do Vite com base path relativo
└── package.json                # Dependências e scripts do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ericmonne/G11---LP-LATAM.git
   cd G11---LP-LATAM
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

4. **Gerar a build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 🌐 Deploy e CI/CD

O projeto conta com integração e entrega contínuas (**CI/CD**) configuradas via **GitHub Actions** (`.github/workflows/deploy.yml`). 

A cada push na branch `master`:
1. Um ambiente Linux é inicializado.
2. As dependências são instaladas de forma limpa (`npm ci`).
3. O build de produção é gerado pelo Vite (`npm run build`).
4. O artefato estático gerado em `dist/` é publicado automaticamente no **GitHub Pages**.

---

## 🤝 Parceria e Realização

<div align="center">
  <p><strong>Oracle Next Education (ONE)</strong> & <strong>Alura</strong></p>
  <p><em>Transformando a educação em tecnologia e inteligência artificial na América Latina.</em></p>
</div>
