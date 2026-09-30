// URLs de serviços de compra/conta; nunca incluir a URL direta do app aqui.
// A autorização é feita no servidor, com identidade e compra verificadas.
// price: null mantém "Em breve". Pode receber, por exemplo, um texto de preço aprovado.
window.ESSE_SITE = {
  checkoutUrl: null,
  customerAreaUrl: null,
  plans: [
    {id: 'essencial', name: 'Essencial', description: 'Clareza para acompanhar o avanço de cada projeto.', price: null,
     focus: 'FOCO PROPOSTO: ANÁLISE INDIVIDUAL',
     features: ['Curva S do cronograma', 'Planejado, realizado e desvio', 'Diagnóstico e memória de cálculo']},
    {id: 'profissional', name: 'Profissional', description: 'Contexto para comparar revisões e apresentar resultados.', price: null, featured: true,
     focus: 'FOCO PROPOSTO: ACOMPANHAMENTO',
     features: ['Comparação entre revisões', 'Tendência de término', 'Relatórios PDF personalizados']},
    {id: 'empresa', name: 'Empresa', description: 'Uma apresentação consistente para a rotina da sua empresa.', price: null,
     focus: 'FOCO PROPOSTO: APRESENTAÇÃO',
     features: ['Relatórios com a sua identidade', 'Análises de diferentes revisões', 'Condições comerciais a definir']}
  ]
};
