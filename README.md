# Landing page ESSE

Página estática independente do Streamlit, responsiva e sem bibliotecas externas. Todo o conteúdo visual está nesta pasta. Não lê cronogramas de clientes; as curvas de demonstração usam dados fictícios.

## Executar localmente

Na raiz do repositório:

```powershell
.\.venv\Scripts\python.exe -m http.server 8502 --bind 127.0.0.1 --directory landing
```

Abra http://127.0.0.1:8502/. Para publicar, sirva o conteúdo de `landing/` como arquivos estáticos em uma hospedagem com HTTPS.

## Configurar acesso e planos

Em `config.js`, `checkoutUrl` receberá a URL HTTPS do futuro serviço de compra. O plano selecionado será enviado por ID, nunca com preço ou prova de pagamento. `customerAreaUrl` receberá a URL da área autenticada do cliente. Enquanto forem `null`, a página informa que a contratação está em preparação.

O endereço direto do aplicativo não deve ser colocado no site público. A política e o destino de servidor ficam em `../commerce/`, fora da raiz servida. Consulte `../commerce/README.md` para o contrato da próxima etapa: autenticação, pagamento verificado e autorização também no próprio aplicativo. Esta página não cobra nem protege a implantação atual por si só.

Os planos são uma proposta editorial, com preços ainda não divulgados. Edite `plans` no mesmo arquivo para definir nomes, descrições, recursos e preços aprovados. `price: null` mostra “Em breve”. Defina também as condições comerciais e ajuste o aviso de planos em preparação no HTML antes de publicar uma oferta definitiva. Nenhum limite de uso, desconto ou condição contratual foi inventado.

## Estrutura

- `index.html`: textos, seções, perguntas frequentes e ilustrações SVG.
- `styles.css`: layout responsivo e estilos da página.
- `site.js`: navegação móvel, escolha de plano, memória de cálculo interativa, curva demonstrativa e paletas do relatório.
- `assets/`: logos oficiais locais, favicon e tokens do kit ESSE.

A página usa marcação semântica, navegação por teclado, foco visível, descrições acessíveis para os gráficos e respeita a preferência de redução de movimento. Não carrega fontes, rastreadores ou serviços de terceiros.

## Referências de direção visual

Consultadas em 30/09/2026: [Linear](https://linear.app/) (produto como demonstração), [Stripe](https://stripe.com/br) (hierarquia e narrativa de valor) e [Asana](https://asana.com/uses/project-management) (contexto de uso e benefícios). Textos, componentes e ilustrações próprios, adaptados à identidade ESSE. Não são parceiros ou clientes da ESSE.
