# Política de Privacidade do ESSE

> Trechos entre [COLCHETES] são dados a preencher antes de publicar. Veja `notas-internas.md`.

**Versão:** 0.1 · **Vigência a partir de:** [DATA]
**Responsável:** [RAZÃO SOCIAL], CNPJ [CNPJ], [ENDEREÇO] ("**ESSE**", "nós")
**Contato sobre privacidade:** [E-MAIL DE PRIVACIDADE] · **Encarregado (DPO):** [NOME OU "a definir"]

Esta Política explica quais dados tratamos ao vender e operar o ESSE, para quê, por quanto tempo e quais são seus direitos, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, "LGPD").

---

## Resumo em linguagem simples

- **Seus cronogramas não ficam guardados.** Lemos o arquivo, geramos o resultado e o esquecemos. Não temos histórico, banco ou biblioteca de cronogramas.
- **Não compartilhamos, não vendemos e não expomos cronogramas.** Nem para outros clientes, nem para terceiros, nem para treinar inteligência artificial.
- **Os únicos dados que guardamos** são os necessários para vender e dar acesso: seu nome, e-mail, dados de cobrança e uma chave de acesso (guardada de forma que nem nós a vemos depois de enviada).
- **Você pode pedir informações e a exclusão** dos seus dados cadastrais quando quiser.

---

## 1. Quem é quem

1.1. **Dados cadastrais e de cobrança** (nome, e-mail, empresa, CNPJ/CPF, dados de pagamento): nós somos o **controlador**, isto é, decidimos como são tratados.

1.2. **Conteúdo dos cronogramas que você envia:** você (ou a empresa que você representa) é o **controlador**; nós atuamos como **operador**, tratando o conteúdo apenas para gerar o resultado que você pediu, seguindo suas instruções.

## 2. Compromisso sobre cronogramas

2.1. **O que fazemos com o arquivo do cronograma:**

| Etapa | O que acontece |
|---|---|
| Envio | O arquivo chega ao servidor durante a sua sessão. |
| Leitura | É lido em memória ou em arquivo temporário exclusivo, **apagado logo após a leitura**. |
| Resultado | A curva, o diagnóstico e os relatórios são calculados e exibidos a você. |
| Entrega | Você baixa PDF, PNG ou Excel. Nós **não arquivamos** esses arquivos. |
| Encerramento | Os dados somem da memória ao usar RESET, ao encerrar a sessão ou, no máximo, em 30 minutos. |

2.2. **O que não fazemos:**

- não gravamos cronogramas, medições ou resultados em banco de dados, disco permanente ou histórico;
- não mantemos cópia, backup ou arquivo dos cronogramas;
- não publicamos, compartilhamos, vendemos ou cedemos cronogramas a ninguém;
- não os usamos para treinar ou aprimorar modelos de inteligência artificial, nem para estatísticas ou comparações entre clientes;
- não os enviamos a serviços de inteligência artificial ou a outros terceiros para análise. Todo o processamento acontece no próprio servidor do ESSE.

2.3. **Cliente nenhum vê dados de outro.** O ESSE não tem área pública, galeria ou função de comparação entre clientes. Cada sessão acessa apenas os arquivos enviados por ela.

2.4. **Nossa equipe não consulta seus cronogramas.** O ESSE não tem função que permita a quem o administra visualizá-los.

2.5. **Suporte:** se você nos enviar um cronograma para diagnóstico de um problema, usaremos apenas para esse fim e o apagaremos ao final do atendimento.

## 3. Dados que coletamos e guardamos

| Dado | Para quê | Base legal (LGPD) | Por quanto tempo |
|---|---|---|---|
| Nome, e-mail, empresa | Contratar, enviar a chave, dar suporte e avisos | Execução de contrato (art. 7º, V) | Enquanto durar o acesso + [5 anos] para obrigações legais e defesa de direitos |
| CNPJ/CPF e endereço de cobrança | Emitir nota fiscal e cumprir obrigações fiscais | Obrigação legal (art. 7º, II) | Prazo fiscal aplicável [confirmar com o contador] |
| Dados de pagamento | Cobrança | Execução de contrato | Tratados pelo provedor de pagamentos; nós não armazenamos número de cartão [confirmar conforme o provedor escolhido] |
| Chave de acesso (apenas o "hash", nunca a chave em si) e data de validade | Autenticar o acesso | Execução de contrato; legítimo interesse em segurança (art. 7º, IX) | Enquanto o acesso estiver ativo |
| Registros técnicos do provedor de hospedagem (por exemplo, horários e erros) | Segurança e funcionamento | Legítimo interesse | Conforme a política do provedor [confirmar] |
| Mensagens de suporte | Atender você | Execução de contrato | [12 meses] após o atendimento |

3.1. **Dados pessoais dentro dos cronogramas.** Um arquivo do Microsoft Project pode conter nomes de pessoas (recursos, responsáveis). Tratamos esses dados só para gerar o resultado pedido, conforme o item 2, e não os guardamos.

3.2. Não coletamos dados sensíveis (art. 5º, II da LGPD) e o ESSE não é destinado a menores de 18 anos.

## 4. Com quem compartilhamos

Compartilhamos apenas o necessário, com prestadores que nos ajudam a operar o ESSE. **Nenhum deles recebe seus cronogramas para guardar ou usar** além do tráfego e processamento técnico do serviço.

| Prestador | Função | Dados |
|---|---|---|
| [PROVEDOR DE HOSPEDAGEM: ex. Streamlit Community Cloud / outro] | Executa o aplicativo | O arquivo trafega e é processado durante a sessão; registros técnicos |
| [PROVEDOR DE PAGAMENTOS] | Cobrança e recebimento | Dados de cobrança |
| [SERVIÇO DE E-MAIL] | Envio da chave e comunicações | Nome e e-mail |
| [CONTADOR / EMISSOR DE NOTAS] | Obrigações fiscais | Dados de cobrança |

4.1. Também podemos divulgar dados se houver **ordem legal ou judicial**, como descrito nos Termos de Uso.

4.2. Não vendemos dados pessoais.

## 5. Transferência internacional

5.1. Os servidores do provedor de hospedagem podem estar **fora do Brasil** [informar países quando confirmados]. Quando isso ocorrer, a transferência se dará nas hipóteses e com as garantias previstas na LGPD (art. 33).

## 6. Segurança

6.1. Adotamos medidas técnicas e organizacionais proporcionais, entre elas:

- acesso por **chave individual**; guardamos apenas o hash da chave;
- limite de tentativas de acesso inválidas;
- conexão criptografada (HTTPS) [confirmar com o provedor];
- **arquivos temporários exclusivos por operação e apagados em seguida**, evitando qualquer compartilhamento entre clientes;
- **ausência de armazenamento** de cronogramas, o que reduz o risco de exposição;
- expiração automática dos dados em memória.

6.2. Nenhum sistema é totalmente imune a falhas. Em caso de incidente de segurança que possa causar risco ou dano relevante, comunicaremos você e a Autoridade Nacional de Proteção de Dados (ANPD) nos termos da LGPD.

## 7. Seus direitos

7.1. Você pode, a qualquer momento, pedir: confirmação de que tratamos seus dados; acesso; correção; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; informação sobre compartilhamento; revogação de consentimento (quando for a base); e a eliminação dos dados tratados com consentimento.

7.2. Como fazer: escreva para [E-MAIL DE PRIVACIDADE]. Responderemos em até [15] dias.

7.3. **Sobre cronogramas:** como não os guardamos, não há cronogramas seus para acessar, corrigir ou eliminar depois do encerramento da sessão.

7.4. Alguns dados (por exemplo, fiscais) precisam ser mantidos por prazo legal, mesmo após pedido de eliminação. Explicaremos quando isso ocorrer.

7.5. Você também pode reclamar à ANPD (www.gov.br/anpd).

## 8. Cookies e tecnologias semelhantes

8.1. **Site institucional (landing page):** não usa cookies de rastreamento, publicidade ou análise, e não carrega serviços de terceiros.

8.2. **Aplicativo:** usa apenas o identificador de sessão técnico necessário para manter você conectado durante o uso. Não usamos cookies de publicidade.

## 9. Alterações desta Política

9.1. Podemos atualizar esta Política. Mudanças relevantes serão comunicadas por e-mail. **Qualquer mudança que reduza as garantias do item 2 exigirá aviso prévio destacado e concordância expressa do Cliente.**

## 10. Contato

Dúvidas, pedidos e reclamações: [E-MAIL DE PRIVACIDADE] · [ENDEREÇO].
