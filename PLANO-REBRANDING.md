# Plano de Ação — Rebranding Face Doctor Perdizes

> Documento de aprovação. Versão 1.0 · 2026-05-22 · Status: aguardando aprovação do cliente.
>
> Este plano define o escopo, fases, entregas, investimento estimado e gates de aprovação para refazer o site da unidade Perdizes do zero, em padrão de agência premium, conforme o brief em `DESIGN.md` v2.

---

## 0. Resumo executivo

| Item | Valor |
|---|---|
| Escopo | 4 páginas (home, Ultraformer MPT, Bioestimulador, Botox) + sistema de marca digital |
| Visão | Editorial luxury — referência Lemaire / Aesop / Byredo (não copiar, destilar) |
| Stack alvo | Astro + Tailwind/vanilla CSS com tokens + GSAP/Lenis + Mapbox |
| Prazo total | 7 a 8 semanas (corridas, com sobreposições) |
| Investimento estimado | R$ 38–69k (faixa de mercado: R$ 35–60k) |
| Gates de aprovação | 5 marcos formais (ver §6) |
| Pré-requisitos críticos | Headlines aprovadas · fotógrafo contratado · wordmark validado pela rede |

---

## 1. Diagnóstico de partida

- **v1 (em `index.v1.bak.html` etc.):** MVP com template SaaS genérico, fontes Roboto/Roboto Slab, cards arredondados com sombra, imagens do CDN da franquia. Padrão WordPress amador. Veredito DESIGN.md §1: descartar.
- **v2 atual (HTML+Tailwind CDN):** prova de conceito visual gerada via AIDesigner + ajustes manuais. Valida a direção estética, mas:
  - Usa Tailwind CDN (não otimizável para produção, Lighthouse ≤90)
  - Imagens Unsplash placeholder
  - Depoimentos e antes/depois fabricados
  - Copy ainda em rascunho
  - Sem wordmark customizado
- **Decisão:** v2 atual vira POC de referência visual. Build de produção é refeito do zero em Astro, com assets próprios.

---

## 2. North Star (do DESIGN.md §2, reafirmado)

> "Uma editorial digital que vende confiança médica e desejo estético antes de mostrar qualquer botão."

Indistinguível em qualidade de design de: lemaireparis.com, aesop.com, byredo.com, equipeaugusto.com.br, clinicalara.com.br.

Não pode parecer: SaaS landing, template Elementor/WordPress, site de estética com antes/depois gritando na home, carrossel azul com avatar circular.

---

## 3. Decisões pendentes (bloqueadores para iniciar)

Resolver antes do início da Fase 1. Cada item precisa de OK explícito.

- [ ] **Stack: Astro vs Next.js.** Recomendação: **Astro** (Lighthouse 100, simples, sem CMS no primeiro ciclo). Decisão: ___________________________
- [ ] **Orçamento total liberado.** Faixa proposta R$ 38–69k. Teto aprovado: R$ _____________
- [ ] **Headlines v2 (DESIGN.md §7.2) — aprovar 4 headlines principais.** OK ☐ / Revisar ☐ / Refazer ☐
- [ ] **CMS no primeiro ciclo? Recomendação: NÃO** (overhead desnecessário). Decisão: Sim ☐ / Não ☐
- [ ] **Autorização da rede Face Doctor para wordmark customizado.** Confirmado com: ___________________________
- [ ] **Autorização de uso de imagens próprias da unidade** (pacientes para antes/depois, equipe, ambiente). Confirmado por: ___________________________
- [ ] **Responsáveis aprovadores nomeados:**
  - Aprovação criativa/marca: ___________________________
  - Aprovação técnica/produto: ___________________________
  - Aprovação de orçamento: ___________________________

---

## 4. Fases de execução

### Fase 0 — Aprovação estratégica (3–5 dias)
| # | Entrega | Responsável | Dias |
|---|---|---|---|
| 0.1 | Aprovação deste plano | Cliente | 1–2 |
| 0.2 | Resolução das 7 decisões pendentes do §3 | Cliente + agência | 2–3 |
| 0.3 | Contratos / NDA / autorizações de imagem | Cliente + agência | 1–2 |

**Saída:** plano assinado, orçamento liberado, decisões registradas.

---

### Fase 1 — Foundation: identidade + assets brief (semanas 1–2)
| # | Entrega | Responsável |
|---|---|---|
| 1.1 | Wordmark customizado (3 conceitos → 1 finalizado, versões horizontal/empilhada, mono ink/paper, possível seal "FD" brass) | Designer de marca |
| 1.2 | Aprovação do wordmark pela rede Face Doctor (não-bloqueador para o site se aplicarmos apenas em "Perdizes") | Cliente |
| 1.3 | Mood board final consolidado (paleta validada na tela, referências fotográficas curadas, tipografia confirmada) | Direção criativa |
| 1.4 | **Briefing e contratação do fotógrafo** + agendamento do book | Cliente + DA |
| 1.5 | **Briefing e contratação do vídeo institucional** | Cliente + DA |
| 1.6 | Copy final — refinar headlines §7.2, escrever microcopy (CTAs, eyebrows, captions, FAQ), tom de voz aplicado | Copywriter |
| 1.7 | Wireframes hi-fi Figma das 4 páginas (desktop + mobile, com hierarquia de motion descrita) | UI designer |

**Saída:** sistema de marca aprovado, fotógrafo agendado, wireframes prontos.

---

### Fase 2 — Design hi-fi + protótipo Figma (semanas 3–4)
| # | Entrega | Responsável |
|---|---|---|
| 2.1 | Mockups Figma completos: home + 3 subpáginas, desktop + mobile, com estados (hover, scroll, FAQ aberto, slider drag, diagrama anatômico interativo) | UI designer |
| 2.2 | Protótipo navegável Figma com transições principais | UI designer |
| 2.3 | Spec de motion documentado em Loom (5–7 screen recordings de 30s cada explicando cada transição) | Motion designer |
| 2.4 | Aprovação visual cliente (Gate 3 — ver §6) | Cliente |

**Saída:** design hi-fi aprovado, motion documentado.

---

### Fase 3 — Produção fotográfica + vídeo (semanas 3–5, paralela à Fase 2)
| # | Entrega | Responsável |
|---|---|---|
| 3.1 | Sessão de fotografia: hero principal + 3 sub-hero por procedimento + 8–12 shots da unidade + equipe (retratos individuais) + macros/detalhes | Fotógrafo |
| 3.2 | Casos antes/depois reais autorizados (mínimo 6, mesmo enquadramento/luz pré e pós) | Cliente + fotógrafo |
| 3.3 | Vídeo institucional 30–45s | Diretor de vídeo |
| 3.4 | Vídeos curtos 8–12s para sub-hero × 4 (loops mudos) | Diretor de vídeo |
| 3.5 | Pós-produção: color grading, recorte AVIF/WebP, srcset, dimensões otimizadas | Editor + dev |
| 3.6 | Banco de assets entregue ao dev em estrutura organizada | Cliente |

**Saída:** todos os assets de fotografia e vídeo prontos para integração.

---

### Fase 4 — Build em Astro (semanas 5–6)
| # | Entrega | Responsável |
|---|---|---|
| 4.1 | Setup Astro + Lenis + GSAP + ScrollTrigger | Dev frontend |
| 4.2 | `tokens.css` com todos os tokens do DESIGN.md §3 | Dev frontend |
| 4.3 | Componentes base: header (estado scrolled), footer, button, eyebrow, link, FAQ accordion, form, WhatsApp float | Dev frontend |
| 4.4 | Home estática (sem motion ainda) | Dev frontend |
| 4.5 | Subpágina Ultraformer (sub-hero, diagrama de camadas SVG, indicações editorial, protocolo scroll-jacked horizontal, slider antes/depois drag-to-reveal) | Dev frontend |
| 4.6 | Subpágina Bioestimulador (tabela editorial comparativa Sculptra/Radiesse/Ellansé) | Dev frontend |
| 4.7 | Subpágina Botox (diagrama anatômico SVG interativo com 12 áreas clicáveis) | Dev frontend |
| 4.8 | Form serverless (Resend ou Plunk via Astro endpoint) | Dev frontend |
| 4.9 | Mapbox GL JS com style dark customizado | Dev frontend |

**Saída:** site estático completo funcionando em staging, sem motion final.

---

### Fase 5 — Motion + polish (semana 6–7)
| # | Entrega | Responsável |
|---|---|---|
| 5.1 | Implementação de motion conforme DESIGN.md §4: reveals com `expo.out`, parallax de imagens hero, ticker marquee, scroll-jacked protocolo Ultraformer, hover de links/cards | Dev frontend + motion |
| 5.2 | Cursor custom (opcional, desktop only) — preto 12px com label sobre clicáveis | Dev frontend |
| 5.3 | Loading sequence inicial (1.5s) | Dev frontend |
| 5.4 | Respeitar `prefers-reduced-motion` em todos os efeitos | Dev frontend |
| 5.5 | QA cross-browser: Safari, Chrome, Firefox, mobile iOS/Android | QA |
| 5.6 | Otimização: AVIF/WebP, srcset, lazy loading, bundle <80kb gzip, LCP <1.8s mobile, Lighthouse ≥95 todas as métricas | Dev frontend |

**Saída:** site polido com motion completo, performance dentro do budget.

---

### Fase 6 — Pré-launch + launch (semana 7–8)
| # | Entrega | Responsável |
|---|---|---|
| 6.1 | Deploy em staging (Vercel/Netlify) | Dev |
| 6.2 | SEO: Schema.org `MedicalBusiness` + `LocalBusiness`, sitemap.xml, robots.txt, OG customizado | Dev |
| 6.3 | Analytics: GA4 + Meta Pixel com eventos `click_whatsapp`, `submit_form`, `scroll_75pct`, `agendamento_intent` | Dev |
| 6.4 | Revisão final com cliente (Gate 4) | Cliente + agência |
| 6.5 | Ajustes finais | Dev |
| 6.6 | Deploy produção + DNS cutover | Dev |
| 6.7 | Handover documentado (README, como editar copy, como trocar fotos, como ver analytics) | Agência |
| 6.8 | Monitoramento 30 dias pós-launch (uptime, Core Web Vitals, eventos GA4) | Agência |

**Saída:** site no ar, monitorado, com handover técnico completo.

---

## 5. Investimento estimado (faixas de mercado, Brasil 2026)

| Item | Faixa (R$) |
|---|---|
| Wordmark + sistema de marca digital | 3.000 – 6.000 |
| Fotografia profissional (book completo) | 6.000 – 10.000 |
| Vídeo institucional + 4 curtos | 4.000 – 8.000 |
| Copy + tom de voz | 2.000 – 4.000 |
| Design hi-fi Figma (4 páginas × 2 breakpoints + protótipo + spec motion) | 8.000 – 15.000 |
| Frontend Astro + motion + componentes custom (diagramas SVG, sliders, Mapbox) | 15.000 – 25.000 |
| QA, deploy, SEO, analytics, handover | 0 – 1.000 |
| **Total** | **38.000 – 69.000** |

**Custos recorrentes pós-launch (mensais):**
- Hosting Vercel/Netlify free tier: R$ 0
- Domínio (anual): R$ 50/ano
- Resend/Plunk para form: R$ 0 (free tier até 100/mês)
- Mapbox: R$ 0 (free tier até 50k loads/mês)
- GA4 + Meta Pixel: R$ 0
- **Total recorrente: ~R$ 5/mês**

---

## 6. Gates de aprovação formais

5 marcos. Sem OK explícito, a fase seguinte não inicia.

| Gate | Quando | Aprova | O que aprova |
|---|---|---|---|
| **G1 — Estratégia** | Final Fase 0 | Cliente | Este plano, orçamento, decisões §3 |
| **G2 — Identidade** | Final Fase 1 | Cliente | Wordmark, mood board, copy final, wireframes |
| **G3 — Visual hi-fi** | Final Fase 2 | Cliente | Mockups Figma de todas as páginas + motion spec |
| **G4 — Staging** | Final Fase 5 | Cliente | Site funcional em staging com motion e assets reais |
| **G5 — Produção** | Final Fase 6 | Cliente | Site no ar |

---

## 7. Critérios de "pronto" (DESIGN.md §11)

Não vai ao ar sem cumprir todos:

- [ ] Mobile-first em 375 / 768 / 1024 / 1440 / 1920
- [ ] Lighthouse mobile ≥90 em todas as métricas (Performance, Accessibility, Best Practices, SEO)
- [ ] LCP <1.8s mobile · CLS <0.05 · Bundle JS inicial ≤80kb gzip
- [ ] `prefers-reduced-motion` respeitado
- [ ] Foco visível em todos os interativos (sem `outline: none` sem substituto)
- [ ] Contraste WCAG AA (mínimo 4.5:1)
- [ ] Form com validação client + server, mensagens de erro acessíveis
- [ ] Todas as imagens com `alt` descritivo
- [ ] Schema.org validado no Google Rich Results Test
- [ ] Zero fontes default Google (Roboto/Roboto Slab proibidos)
- [ ] Zero cards arredondados com sombra cinza padrão
- [ ] Pelo menos uma seção que faz o visitante parar (vídeo, ticker, diagrama interativo)
- [ ] WhatsApp não é verde brilhante

---

## 8. Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| Rede Face Doctor veta wordmark customizado | Médio | Fallback: aplicar customização apenas no "Perdizes", manter "Face Doctor" institucional |
| Atraso na agenda do fotógrafo | Alto | Contratar na Fase 0, não na Fase 1. Bloquear data antes de iniciar mockups |
| Casos antes/depois sem autorização válida | Alto | Validar compliance ANVISA/CFM. Plano B: usar diagrama + descrição, sem fotos pareadas |
| Performance budget estourado por fotos pesadas | Médio | AVIF + srcset + lazy loading. Auditar cada asset antes de integrar |
| Aprovação visual demorada (loops infinitos) | Alto | Limitar a 2 rodadas de revisão por gate. Mudanças além disso geram aditivo |
| Tailwind CDN persiste por preguiça | Baixo (mas embaraçoso) | Build Astro com Tailwind compilado ou vanilla CSS é não-negociável |

---

## 9. O que NÃO está neste escopo

Para evitar scope creep, registrar o que fica de fora deste rebrand:

- Painel administrativo / CMS (decisão §3)
- E-commerce / pagamento online
- Agenda online integrada (continua via WhatsApp)
- Multi-idioma (PT-BR apenas)
- Multi-unidade (só Perdizes — se outras unidades quiserem, é projeto novo)
- Blog / conteúdo editorial recorrente
- Aplicativo mobile

---

## 10. Próximos passos imediatos

Se este plano for aprovado hoje (2026-05-22):

1. **Esta semana:** Cliente resolve as 7 decisões pendentes do §3
2. **Próxima semana:** Contratos assinados, fotógrafo agendado, briefings emitidos
3. **Semana 1–2:** Fase 1 inicia (wordmark + wireframes + book fotográfico em paralelo)
4. **Launch target:** 6–8 semanas a partir da aprovação

---

**Aprovação:**

| Função | Nome | Data | Assinatura |
|---|---|---|---|
| Cliente | | | |
| Direção criativa | | | |
| Lead técnico | | | |

---

*Documento vivo. Mudanças geram nova versão registrada no Git.*
