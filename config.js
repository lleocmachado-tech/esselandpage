// URLs de serviços de compra/conta; nunca incluir a URL direta do app aqui.
// A autorização é feita no servidor, com identidade e compra verificadas.
// price: null mantém "Em breve". Pode receber, por exemplo, um texto de preço aprovado.
window.ESSE_SITE = {
  checkoutUrl: null,
  customerAreaUrl: null,
  // Todos os planos têm os mesmos recursos; muda só a validade da chave de acesso.
  plans: [
    {id: 'teste', name: 'Teste grátis', description: 'Experimente com o seu cronograma, sem compromisso.', price: 'Grátis',
     note: 'Sem cartão de crédito.', focus: '7 DIAS DE ACESSO', features: ['Curva S: planejado, realizado e desvio', 'Tendência com data estimada de término', 'Histórico e comparação de revisões', 'PDF editável com a sua identidade', 'Diagnóstico e memória de cálculo']},
    {id: 'mensal', name: 'Mensal', description: 'Flexibilidade para acompanhar mês a mês.', price: 'R$ 97',
     note: 'R$ 97 por mês.', focus: '30 DIAS DE ACESSO', features: ['Curva S: planejado, realizado e desvio', 'Tendência com data estimada de término', 'Histórico e comparação de revisões', 'PDF editável com a sua identidade', 'Diagnóstico e memória de cálculo']},
    {id: 'trimestral', name: 'Trimestral', description: 'Um trimestre inteiro de acompanhamento.', price: 'R$ 261',
     note: 'Equivale a R$ 87/mês · 10% de desconto.', focus: '90 DIAS DE ACESSO', features: ['Curva S: planejado, realizado e desvio', 'Tendência com data estimada de término', 'Histórico e comparação de revisões', 'PDF editável com a sua identidade', 'Diagnóstico e memória de cálculo']},
    {id: 'semestral', name: 'Semestral', description: 'O melhor valor para quem acompanha a obra toda.', price: 'R$ 468', featured: true,
     note: 'Equivale a R$ 78/mês · 20% de desconto.', focus: '180 DIAS DE ACESSO', features: ['Curva S: planejado, realizado e desvio', 'Tendência com data estimada de término', 'Histórico e comparação de revisões', 'PDF editável com a sua identidade', 'Diagnóstico e memória de cálculo']}
  ]
};
