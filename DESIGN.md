# Face Doctor Perdizes — DESIGN.md

> **Documento-mestre de design.** Brief para reconstrução completa da experiência digital da unidade Perdizes, em nível de entrega de agência premium (referência de mercado: R$ 35-60k). Este documento é a fonte da verdade — qualquer próxima sessão de design/dev deve começar lendo este arquivo.

**Versão:** 2.0 · **Data:** 2026-05-21 · **Status:** brief aprovado · build 1.0 a descartar

---

## 1. Diagnóstico da v1 (o que descartar)

A primeira iteração foi um MVP funcional mas estética de template SaaS genérico de 2019. Problemas identificados:

| Problema | Origem |
|---|---|
| Cards de procedimento parecem cards de produto SaaS | Border-radius arredondado demais, sombra padrão, imagens horizontais 4:3 |
| Tipografia "Roboto Slab" puxa para WordPress amador | Fonte default Elementor — não é tipografia premium |
| Paleta marsala fica chapada sem texturas/contraste | Falta variação tonal, sem uso de cor escura como base |
| Hero competente mas previsível (grid 50/50 + foto) | Composição usada por 80% das clínicas — não diferencia |
| Sem hierarquia tipográfica editorial | Headings pequenos, espaçamento tímido |
| Sem motion — site estático | Em 2026 isso entrega aspecto datado |
| Imagens placeholder do CDN da franquia | Sem ativos próprios → sem identidade local |
| Footer e seções repetem estrutura cabide-de-link | Sem narrativa, sem desejo |
| FAQ com `<details>` nativo sem estilização forte | Aspecto "tutorial dev" |
| WhatsApp flutuante verde gritando | Quebra a paleta da marca |

**Veredito:** ponto de partida ok, ponto de chegada inaceitável para uma franquia premium que cobra ticket médio acima de R$ 3.500.

---

## 2. North Star — visão de design

> "Uma editorial digital que vende confiança médica e desejo estético antes de mostrar qualquer botão."

A nova versão deve ser indistinguível, em qualidade de design, de:

**Referências de agências/marcas de luxo (não copiar — destilar):**
- `lemaireparis.com` — editorial fashion, tipografia serif gigante, asymmetric
- `aesop.com` — restraint, espaço, micro-tipografia
- `byredo.com` — escuro, dourado, fotografia cinematográfica
- `equipeaugusto.com.br` — clínica brasileira de alto padrão
- `clinicalara.com.br` — referência nacional do segmento
- `theline.com` — editorial commerce
- `omsom.com` — bold premium consumer

**O que NÃO ser:**
- SaaS landing (Stripe, Linear) — esses são para tech, não para clínica
- WordPress/Elementor look (gradientes circulares, cards arredondados, ícones genéricos)
- Site de estética com "antes/depois" gritando na home
- Carrossel de depoimentos com avatar circular azul

---

## 3. Sistema de marca v2

### 3.1 Paleta refinada

Mantém o DNA marsala da rede, mas adiciona profundidade e contraste com tons quentes de luxo.

```
/* Base — escuro premium */
--ink:            #1A1614   /* preto morno, quase chocolate — base de texto e fundos hero */
--ink-2:          #2B2421   /* secundário escuro */
--ink-soft:       #4A4039   /* texto sobre claro */

/* Cremes — papel editorial */
--paper:          #F5F0EA   /* off-white quente principal */
--paper-2:        #EAE2D8   /* creme acentuado */
--paper-warm:     #E8DCCB   /* areia */

/* Marsala (mantido da rede, refinado) */
--rose:           #A86469   /* marsala primário */
--rose-deep:      #7A3F44   /* marsala profundo — para fundos */
--rose-soft:      #D4A8AC   /* rose claro */
--rose-veil:      #F1CACD   /* veil (mantido da rede) */

/* Metálico — pontuações de luxo */
--brass:          #B89968   /* dourado quente, antiqued */
--brass-light:    #D4B98A

/* Sistema */
--success:        #4A6B3A   /* verde oliva, NÃO verde brilhante */
--border:         rgba(74, 64, 57, 0.12)
```

**Regra de combinação:**
- Fundos predominantes: `paper` (claro) ou `ink` (escuro), nunca branco puro
- Texto: `ink` sobre `paper`, `paper` sobre `ink`
- Acentos `rose` em pequenas doses (links, eyebrow, citações)
- `brass` é assinatura visual — usar com escassez (linha decorativa, número de seção, ícone)

### 3.2 Tipografia — sistema editorial

Banimento de Roboto e Roboto Slab. Combinação nova:

```
/* Display (headlines hero, números grandes) */
--font-display: 'PP Editorial New', 'Söhne Breit', 'Tiempos Headline', Georgia, serif;
/* Fallback gratuito aceitável: 'Fraunces' (Google Fonts) com configuração: 
   font-variation-settings: "SOFT" 30, "WONK" 1; */

/* Sans-serif corpo (substitui Nunito Sans) */
--font-text: 'Söhne', 'Inter', system-ui, sans-serif;
/* Fallback gratuito: 'Inter' com tracking ajustado, ou 'Geist' */

/* Mono — labels técnicos, eyebrows, numeração */
--font-mono: 'JetBrains Mono', 'IBM Plex Mono', monospace;
```

**Escala tipográfica (mobile-first, fluida):**

```
--text-xs:    clamp(0.72rem, 0.7rem + 0.1vw, 0.78rem);   /* micro labels */
--text-sm:    clamp(0.85rem, 0.83rem + 0.1vw, 0.92rem);
--text-base:  clamp(1rem, 0.97rem + 0.15vw, 1.07rem);
--text-lg:    clamp(1.15rem, 1.1rem + 0.25vw, 1.3rem);    /* lead */
--text-xl:    clamp(1.5rem, 1.3rem + 1vw, 2rem);
--text-2xl:   clamp(2rem, 1.6rem + 2vw, 3rem);            /* h2 */
--text-3xl:   clamp(2.8rem, 2rem + 4vw, 4.5rem);          /* h1 */
--text-4xl:   clamp(4rem, 2.5rem + 7.5vw, 8rem);          /* hero display */
```

**Regras de uso:**
- Hero display: `--font-display`, peso 400 (não 700), letter-spacing -0.04em, line-height 0.95
- H2: `--font-display`, peso 400, letter-spacing -0.02em
- Body: `--font-text`, peso 400, line-height 1.55, max-width 62ch (não passar)
- Eyebrow: `--font-mono` UPPERCASE, letter-spacing 0.18em, font-size 11px
- Botões: `--font-text` peso 500, letter-spacing 0.04em

### 3.3 Grid & spacing

Sistema 12-col com margens generosas. Container muito mais estreito que v1.

```
--container-narrow:  840px    /* texto editorial */
--container-default: 1240px   /* layout principal */
--container-wide:    1480px   /* hero, imagens cinematic */
--container-bleed:   100vw    /* full-bleed quando necessário */

/* Gutters */
--gutter-y-sm:  6rem
--gutter-y-md:  10rem    /* default entre seções */
--gutter-y-lg:  14rem
--gutter-y-xl:  18rem    /* respirar para hero/cta */

/* Scale base 4px */
--space-1: 4px;  --space-2: 8px;   --space-3: 12px;
--space-4: 16px; --space-5: 24px;  --space-6: 32px;
--space-7: 48px; --space-8: 64px;  --space-9: 96px;
--space-10: 128px; --space-11: 192px; --space-12: 256px;
```

**Regra do whitespace:** quando em dúvida, dobre. Seções abaixo de 96px (vertical padding) são proibidas em desktop.

### 3.4 Border radius, shadows, traços

```
--radius-none: 0;
--radius-xs:   2px;     /* inputs, tags */
--radius-sm:   4px;
--radius-md:   8px;     /* cards quando necessário (raro) */
--radius-lg:   16px;
--radius-pill: 999px;   /* botões pill */
--radius-full: 50%;
```

**Filosofia:** preferir arestas vivas (`radius-xs` ou `radius-sm`) ou totalmente arredondado (`pill`). O meio-termo (`radius-md`/`lg`) é o que dava aspecto SaaS — usar com parcimônia.

**Shadows — quase inexistentes.** Editorial não usa sombra dropzada.
```
--shadow-soft:    0 1px 2px rgba(26, 22, 20, 0.04);     /* só para inputs ativos */
--shadow-lift:    0 30px 60px -20px rgba(26, 22, 20, 0.15);  /* só para imagens hero */
```

**Bordas finas, frias.** `1px solid var(--border)` é o default. Nunca usar borda colorida em card.

---

## 4. Princípios de motion

Site v1 era estático. v2 tem motion como linguagem visual, não enfeite.

**Stack sugerida:** GSAP + ScrollTrigger + Lenis (smooth scroll) OU Motion One + Intersection Observer nativo se quiser leveza.

### 4.1 Princípios

1. **Tudo entra de baixo, devagar.** Headings com `y: 40px → 0`, opacity 0→1, duração 1.2s, ease `expo.out`. Stagger 0.08s entre elementos.
2. **Scroll-linked, não scroll-triggered.** Imagens hero têm leve parallax (`y: -15%` no scroll). Headings grandes fazem clip-path reveal linha a linha.
3. **Hover é informação.** Links têm underline animado (left→right ou drawn). Botões respondem com scale `1 → 0.98` no press (não no hover). Cards de procedimento: imagem com `scale(1.04)` em 800ms `power3.out`.
4. **Cursor custom (opcional, desktop only).** Cursor preto pequeno (12px) que cresce e ganha label sobre elementos clicáveis ("Agendar", "Ver procedimento"). Padrão de agências.
5. **Loading sequence.** Primeira visita: nome da clínica entra em palavra única ("Face Doctor Perdizes") em ~1.5s, depois divide-se em logo + cidade. Sem loader percentual de "site lento".
6. **Reduced motion.** Respeitar `prefers-reduced-motion: reduce` desativando parallax e revealing, mantendo transições básicas.

### 4.2 Timing tokens

```
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1)    /* expo out — entradas */
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1)   /* navegação */
--ease-snap:     cubic-bezier(0.32, 0.72, 0, 1)   /* botões */

--dur-instant: 100ms;
--dur-fast:    240ms;
--dur-base:    480ms;
--dur-slow:    900ms;
--dur-cine:    1400ms;   /* reveals editoriais */
```

---

## 5. Componentes — biblioteca

### 5.1 Header (nav)

- **Default state:** transparente sobre o hero, texto `paper`, com hairline `border-bottom: 1px solid rgba(255,255,255,0.15)`.
- **Scrolled state (após 60px):** background `var(--paper)` com `backdrop-filter: blur(20px)`, texto `var(--ink)`.
- **Estrutura:** logo à esquerda, nav central, CTA pill à direita.
- **Logo:** wordmark customizado — *não usar texto puro*. Especificação na seção 9.
- **Tipo nav:** `--font-mono` 11px UPPERCASE, letter-spacing 0.16em.
- **Mobile:** menu fullscreen `position: fixed` com transição `clip-path: circle(0 → 150%)` de 800ms, links em `--font-display` enormes (60px+).

### 5.2 Botão

**Variantes:**
1. `btn-primary` — fundo `ink`, texto `paper`, pill, padding `18px 36px`, font-mono UPPERCASE 12px. Hover: fundo `rose-deep`.
2. `btn-link` — sem fundo, underline animado, font-mono UPPERCASE.
3. `btn-ghost` — borda 1px `ink`, fundo transparente.

**Proibido:** botão com `border-radius: 8px`, drop shadow, gradiente, ícone à esquerda do texto (só à direita, e só seta).

### 5.3 Eyebrow / labels

```html
<span class="eyebrow">
  <span class="eyebrow-dash"></span>  <!-- traço de 24px brass -->
  <span>Ultraformer MPT</span>
</span>
```
Sempre acompanhado de traço (`--brass`) de 1px x 24px à esquerda. Padrão editorial.

### 5.4 Card de procedimento (novo)

**Abandonar o card SaaS.** Substituir por **composição editorial**:

```
┌────────────────────────────────────────────┐
│  01 — Ultraformer MPT                      │  ← número grande brass, font-display
│                                            │
│  ┌──────────────┐                          │
│  │              │  Lifting facial sem      │  ← title display sm
│  │   IMAGE      │  cirurgia. Ultrassom     │
│  │   (3:4)      │  microfocado nas três    │
│  │              │  camadas profundas.      │
│  └──────────────┘                          │
│                                            │
│              [Conhecer protocolo →]        │
└────────────────────────────────────────────┘
```

- Sem border. Sem background. Sem shadow.
- Número de seção em font-display 72px, opacity 0.4, cor `brass`.
- Imagem proporção **3:4 retrato** (cinematic), não 4:3 horizontal.
- Texto em coluna estreita ao lado da imagem.
- Hover: imagem com leve parallax + linha que cresce sob "Conhecer protocolo".

### 5.5 Quote / testimonial

Editorial. Sem card, sem avatar circular.

```
"
[texto em display serif, 32-44px, line-height 1.25]
"

— Mariana A., Paciente Ultraformer MPT
```

Aspas tipográficas curly (`"` e `"`) gigantes em `--brass`, posição absoluta no canto superior esquerdo. Layout em 3 colunas no desktop, 1 no mobile, com linhas finas verticais separando.

### 5.6 FAQ — accordion editorial

`<details>` ainda ok, mas estilizado:
- Sem background, sem border-radius
- Apenas hairline 1px superior em cada item
- Pergunta em `--font-display` 22px, peso 400
- Sinal de "+" → "−" no canto direito, 32px, cor brass
- Animação de altura suave (`transition: max-height 600ms var(--ease-out)`) — não snap
- Resposta entra com fade-up 200ms após abrir

### 5.7 Form

- Inputs sem border-radius, apenas `border-bottom: 1px solid var(--border)`
- Label fica acima do input em `--font-mono` 11px UPPERCASE
- Estado focused: `border-bottom-color: var(--ink)`, transição 300ms
- Submit em `btn-primary` ocupando largura total da coluna do form
- Form em si fica em coluna estreita (max 480px) centralizada, NÃO em card flutuante

### 5.8 WhatsApp float — refazer

Versão v1 era verde gritando. Nova proposta:
- Botão preto `--ink`, círculo 56px, ícone `paper`
- Aparece após scroll de 400px com fade + slide-in da direita
- Label "Falar agora" aparece em pill horizontal ao hover
- Em mobile: continua flutuante, mas com label sempre visível na pill expandida

---

## 6. Especificação página por página

### 6.1 Home (`index.html`)

**Objetivo principal:** levar o visitante a *desejar* a clínica antes de pedir agendamento. Conversão é consequência.

**Estrutura proposta (10 seções, scroll de ~9 mil pixels):**

| # | Seção | Notas |
|---|---|---|
| 1 | **Hero editorial** | Headline display GIGANTE em 2 linhas. Imagem full-bleed à direita (4:5 retrato). Sem CTA enorme — apenas link sublinhado "Agende sua avaliação →". Sem hero-meta com números (descartar). |
| 2 | **Manifesto** | Bloco de texto em coluna estreita centralizada, 3 parágrafos curtos sobre filosofia da clínica. Tipografia display em 28px. Sem CTA. Apenas respiração. |
| 3 | **Ticker horizontal** | Faixa cor `ink` com ticker rolando: "ULTRAFORMER MPT · BIOESTIMULADORES · TOXINA BOTULÍNICA · LAVIEEN · FIOS DE PDO ·" em font-display 80px. Anima horizontalmente lento. Cinemático. |
| 4 | **3 procedimentos-bandeira** | Em vez de cards lado a lado: layout vertical, cada um ocupando ~80vh, com imagem retrato à esquerda alternando direita, número grande, descrição, link. Stagger reveal. |
| 5 | **Galeria visual da unidade** | Bento grid 4 imagens reais da unidade (recepção, sala de aplicação, equipe, detalhe) em proporções variadas. Sem texto sobreposto. Apenas legenda micro à direita. |
| 6 | **Vídeo da clínica** | Player full-width (16:9), autoplay muted loop curto (30s) com take cinematográfico da unidade. CTA discreto sobreposto. |
| 7 | **Tabela completa de tratamentos** | Em vez de pills, lista tipográfica em 2 colunas. Cada tratamento com nome (display 24px) + tagline 1 linha (text-sm). Hover: linha entera ganha background `paper-warm`. |
| 8 | **Depoimentos editoriais** | 3 quotes em layout descrito em 5.5, sem foto, com nome + procedimento em font-mono. |
| 9 | **Localização** | Mapa em modo escuro (Mapbox styled, não Google embed padrão). Texto sobreposto à esquerda em coluna. Endereço em display 36px. Horário, telefone, agendar — em hierarquia clara. |
| 10 | **Footer cinemático** | Antes do footer técnico, uma seção full-bleed escura com headline "Sua avaliação inicial é gratuita." em display 96px+. Único CTA em pill. |

**Footer técnico:**
- Background `ink`, texto `paper`
- 4 colunas, tipografia mono pequena
- Logo wordmark reaparece em escala grande no topo do footer
- CNPJ, links institucionais, redes sociais

**O que NÃO vai na home v2:**
- Stats "+140 unidades / +80% território" (genérico, copiado da rede)
- Trust strip preta (parece banner WordPress)
- Form de contato inline (form vai em página /contato dedicada ou no #anchor, não na home)
- CTA banner gradiente rosa (descartado por completo)

### 6.2 Subpágina Ultraformer MPT (`ultraformer-mpt.html`)

**Estrutura:**

| # | Seção | Notas |
|---|---|---|
| 1 | **Sub-hero asymmetric** | Headline ocupa 60% da largura à esquerda em display 96px. Imagem à direita em 4:5. Breadcrumb micro acima. |
| 2 | **Definição editorial** | "O QUE É" em eyebrow + headline + parágrafo único em coluna estreita central. Sem two-col. |
| 3 | **Tecnologia em camadas** | Ilustração customizada (vetor) mostrando as 3 camadas da pele com pontos de aplicação a 1.5mm/3mm/4.5mm. Anotações tipográficas como diagrama médico antigo. |
| 4 | **Indicações** | Lista numerada (`01 → 04`) em layout editorial, cada item em linha completa com display 28px. |
| 5 | **Protocolo Face Doctor** | Os 4 passos, mas em formato horizontal scroll-jacked: cada passo ocupa 100vw e o usuário scrolla para mudar. Cinematic. |
| 6 | **Antes & Depois** | Comparativo slider drag-to-reveal. UMA imagem hero apenas. Sem grade de casos. |
| 7 | **FAQ editorial** | Conforme 5.6. |
| 8 | **CTA full-bleed escuro** | Sub-cta finalíssimo. |

### 6.3 Subpágina Bioestimulador (`bioestimulador.html`)

Estrutura similar, mas com seção dedicada aos **3 produtos comparados em tabela editorial** (não em cards). Tabela tipográfica:

```
                Sculptra        Radiesse         Ellansé
Tecnologia      Poli-L-láctico  Hidroxiapatita   Policaprolactona
Duração         24 meses        12-18 meses      1-4 anos
Indicação       Pele/volume     Contorno         Definição
Sessões         2-3             1                1 + retoque
```

Sem cards coloridos. Tipografia faz o trabalho.

### 6.4 Subpágina Botox (`botox.html`)

Diferencial: substituir grid de áreas tratadas (12 pills) por **diagrama anatômico interativo** — silhueta de rosto vetorial com pontos clicáveis nas 12 áreas. Clique abre overlay com explicação. Componente custom em SVG + JS.

---

## 7. Conteúdo & copy

### 7.1 Voz da marca

**Tom:** confiante, técnico, sem hipérbole. *Editor de revista de luxo, não vendedor.*

**Banidos:**
- "Transforme sua autoestima!"
- "Você merece se sentir bem"
- "Resultados incríveis"
- "A melhor clínica de SP"
- Qualquer frase exclamativa

**Preferidos:**
- "Resultado em camadas, não em camadas de filtro."
- "A precisão de um lifting cirúrgico, sem o lifting."
- "Pele que volta a produzir colágeno — não que ganha volume emprestado."

### 7.2 Headlines da v2 (rascunho)

| Página | Headline atual (v1) | Headline v2 (proposta) |
|---|---|---|
| Home | "Explore, revele e transforme sua nova versão." | "A pele certa para você — é a que você já tem, em outra década." |
| Ultraformer | "Ultraformer MPT: o lifting sem cirurgia." | "Lifting acontece sob a pele. Nós tratamos exatamente lá." |
| Bioestimulador | "Bioestimuladores: colágeno que volta a nascer." | "Não preenchemos seu rosto. Reativamos o que ele produzia." |
| Botox | "Botox: o clássico que segue insubstituível." | "Sutil quando a gente quer. Visível só quando você quer." |

Aprovação dessas headlines fica para conversa com a unidade.

---

## 8. Imagens & assets — requirements

A v1 puxou imagens do CDN da rede. Inaceitável para v2. Lista de ativos próprios necessários:

### 8.1 Fotografia profissional (book obrigatório)

Briefing para fotógrafo (R$ 6-10k para um book completo neste padrão):

| Asset | Especificação |
|---|---|
| Hero home | Mulher (40+), foto editorial, luz natural lateral, pele real (sem photoshop excessivo), proporção 4:5, fundo neutro `paper` |
| Sub-hero × 3 | Mesmo padrão, uma para cada procedimento |
| Galeria unidade | 8-12 shots da unidade: recepção wide, detalhe maquinário Ultraformer, mãos da equipe aplicando, vidro/luz/textura |
| Equipe | Retratos individuais 4:5, fundo `ink` ou `paper-warm`, mesma direção de luz para todos |
| Antes & Depois | Mínimo 6 casos reais, com autorização. Mesmo enquadramento/luz pré e pós. |
| Detalhes | Macros: textura de pele, gota de produto, agulha estéril, microscópio. Storytelling visual. |

**Direção de arte:** referência de mood board em Pinterest curado — paleta quente, luz de janela, foco em mãos e detalhes. NÃO usar stock photo, NÃO usar fotos de equipamento em fundo branco clínico.

### 8.2 Vídeo

- 1 vídeo institucional 30-45s para home (R$ 4-8k de produção)
- 4 vídeos curtos 8-12s para sub-hero de cada página (loops mudos)

### 8.3 Ilustração / Diagrama

- Diagrama de camadas da pele para Ultraformer (vetor custom, estilo médico vintage)
- Diagrama anatômico interativo para Botox (SVG + JS)
- Ícone-system custom 12 ícones (linha 1.5px, estilo Aesop/Lemaire) — substituir emojis usados em v1

### 8.4 Logo / wordmark

A v1 usa texto puro "Face Doctor **Perdizes**". v2 precisa de:
- Wordmark customizado em font-display modificada (kerning ajustado, ligatures sutis)
- Versão horizontal e versão empilhada
- Versão monocromática `ink` + monocromática `paper`
- Possível símbolo/seal — um "FD" em circle stamp brass para usar como elemento de assinatura

---

## 9. Stack técnico recomendado

A v1 é HTML/CSS puro — bom para o início, mas insuficiente para a v2 com motion e interatividade.

### 9.1 Opção A — **Astro + Vanilla CSS + GSAP** (recomendada)
- Astro para SSG performático (Lighthouse 100)
- Vanilla CSS com tokens definidos neste doc
- GSAP + ScrollTrigger + Lenis para motion
- Mapbox GL JS (modo dark customizado)
- Form serverless: Resend ou Plunk via Astro endpoint
- Deploy: Vercel ou Netlify (gratuito)

### 9.2 Opção B — **Next.js 16 App Router + Tailwind + Framer Motion**
- Para se a unidade quiser CMS no futuro (Sanity, Payload)
- Custo: complexidade maior e bundle maior. Só se houver intenção de evoluir para multi-unidade

### 9.3 Componentes a considerar
- **shadcn/ui** — apenas para form e accordion base; estética padrão NÃO casa, então só usar como esqueleto e estilizar do zero
- **Lenis** — smooth scroll
- **GSAP** — sequências e ScrollTrigger
- **Tippy.js** ou Floating UI — para tooltips no diagrama de Botox

### 9.4 Performance budget
- LCP < 1.8s mobile
- CLS < 0.05
- Lighthouse Performance ≥ 95
- Bundle JS inicial ≤ 80kb gzip
- Imagens via `next/image` ou Astro `<Image>` — AVIF/WebP, srcset

---

## 10. SEO & analytics (continua leve)

- Schema.org `LocalBusiness` + `MedicalBusiness` no `<head>` da home (endereço, horário, telefone, sameAs Instagram)
- Open Graph customizado com imagem de hero
- Sitemap.xml + robots.txt
- GA4 + Meta Pixel (eventos: `click_whatsapp`, `submit_form`, `scroll_75pct`)
- Goal de conversão: `agendamento_intent` (qualquer clique em CTA WhatsApp ou submit form)

---

## 11. Acceptance criteria (definition of done)

Site só está pronto quando passar nestes critérios:

- [ ] Mobile-first em todos os breakpoints (375 / 768 / 1024 / 1440 / 1920)
- [ ] Lighthouse mobile ≥ 90 em todas as métricas
- [ ] Tem `prefers-reduced-motion` respeitado
- [ ] Tem foco visível em todos os elementos interativos (sem `outline: none`)
- [ ] Cor de texto sobre fundo passa WCAG AA (mínimo 4.5:1)
- [ ] Form com validação client + server, mensagens de erro acessíveis
- [ ] Todas as imagens com `alt` descritivo
- [ ] Schema.org validado no Google Rich Results Test
- [ ] Site não usa fontes default do Google (Roboto/Roboto Slab proibidos)
- [ ] Site não usa cards arredondados com sombra cinza padrão
- [ ] Site tem ao menos uma seção que faz o visitante parar e observar (vídeo, ticker, animação)
- [ ] WhatsApp não é verde brilhante
- [ ] Footer não é "mar de links" — tem hierarquia editorial

---

## 12. Roadmap de execução

### Sprint 1 (semana 1) — design & assets
- [ ] Aprovar headlines v2 com cliente
- [ ] Briefing do fotógrafo + agendamento do book
- [ ] Mood board final + paleta validada na tela
- [ ] Desenho do wordmark customizado
- [ ] Wireframe Figma das 4 páginas (high-fidelity)

### Sprint 2 (semana 2) — design Figma high-fi
- [ ] Mockups completos 4 páginas em desktop + mobile
- [ ] Protótipo navegável Figma com transições
- [ ] Spec de motion documentado (Loom screen recordings)

### Sprint 3 (semana 3) — frontend foundation
- [ ] Setup Astro + Lenis + GSAP
- [ ] Implementação de tokens (`tokens.css`)
- [ ] Header, footer, botão, eyebrow, form, FAQ
- [ ] Página Home estática (sem motion ainda)

### Sprint 4 (semana 4) — motion & polish
- [ ] Implementação completa de motion
- [ ] Subpáginas Ultraformer / Bioestimulador / Botox
- [ ] Diagrama interativo de Botox
- [ ] QA cross-browser (Safari, Chrome, Firefox, mobile)
- [ ] Otimização performance final

### Sprint 5 — entrega
- [ ] Deploy em staging
- [ ] Revisão final com cliente
- [ ] Ajustes
- [ ] Deploy produção
- [ ] Setup analytics + monitoramento
- [ ] Handover documentado

---

## 13. Anexos / referências

### 13.1 Sites para auditar em conjunto antes de iniciar v2
- https://lemaireparis.com — tipografia editorial
- https://aesop.com — espaço, restraint
- https://byredo.com — escuro premium
- https://www.equipeaugusto.com.br — clínica brasileira benchmark
- https://www.clinicalara.com.br — outro benchmark BR
- https://www.theline.com — editorial commerce
- https://omsom.com — bold premium

### 13.2 Arquivos relacionados nesta pasta
- `index.html`, `ultraformer-mpt.html`, `bioestimulador.html`, `botox.html` — v1 (descartar mas manter referência de conteúdo/copy base)
- `assets/css/styles.css` — v1 (descartar)
- `DESIGN.md` — este documento (fonte da verdade da v2)

### 13.3 Decisões pendentes
- [ ] Decidir entre Astro vs Next.js (custo de manutenção × futuro)
- [ ] Definir orçamento de fotografia & vídeo (R$ 10-20k estimado)
- [ ] Definir se haverá CMS (recomendo NÃO no primeiro ciclo — overhead desnecessário)
- [ ] Confirmar autorização de uso de imagens próprias da unidade
- [ ] Validar wordmark customizado com a rede Face Doctor (pode haver guideline da franquia)

---

**Fim do documento.** Próxima sessão de design/dev deve abrir este arquivo primeiro.
