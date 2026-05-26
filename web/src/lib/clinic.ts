/**
 * Constantes da unidade Face Doctor Perdizes.
 * Fonte única - não duplicar em components.
 */

export const CLINIC = {
  name: 'Face Doctor Perdizes',
  shortName: 'Perdizes',
  network: 'Face Doctor',
  phone: '(11) 94062-5771',
  phoneE164: '+5511940625771',
  whatsappNumber: '5511940625771',
  email: 'contato@facedoctorperdizes.com.br', // TODO: confirmar e-mail oficial
  address: {
    street: 'R. Piracuama, 138',
    neighborhood: 'Perdizes',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '05017-040',
    fullLine: 'R. Piracuama, 138 - Perdizes, São Paulo · SP · 05017-040',
  },
  hours: {
    weekdays: 'Segunda a sábado',
    closing: '20:00',
    fullLine: 'Segunda a sábado - fecha às 20:00',
  },
  social: {
    instagram: 'https://www.instagram.com/facedoctor.perdizes',
    network: 'https://facedoctor.com.br',
  },
  mapLink:
    'https://www.google.com/maps?q=R.+Piracuama,+138+-+Perdizes,+S%C3%A3o+Paulo+-+SP,+05017-040',
} as const;

/**
 * Constrói uma URL wa.me com mensagem pré-preenchida.
 */
export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encoded}`;
}

/**
 * Mensagens padronizadas para cada CTA.
 */
export const WA_MESSAGES = {
  general: 'Olá, gostaria de agendar uma avaliação na Face Doctor Perdizes.',
  ultraformer: 'Olá! Quero agendar uma avaliação de Ultraformer MPT.',
  bioestimulador: 'Olá! Quero agendar avaliação de bioestimulador.',
  botox: 'Olá! Quero agendar aplicação de Botox.',
} as const;
