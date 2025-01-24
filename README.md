# Livepix@Payments

1. **Autenticação e Gestão de Tokens**
   - Obter um token de acesso para autenticação na API do Livepix.
   - Verificar a validade do token a cada 1 hora.
   - Gerar um novo token automaticamente caso o token atual expire ou esteja prestes a expirar.

2. **Geração de Pagamentos**
   - **Obter o link de pagamento**: Gerar e fornecer um link direto para o pagamento via Pix.
   - **Gerar QR Code**: Criar o QR Code para pagamento, disponível tanto em formato de imagem quanto em texto para o modelo "Pix Copia e Cola".

3. **Webhooks e Logs**
   - Implementação de webhooks para notificar a aplicação sobre status de pagamentos.
   - **Logs para Webhooks**: Registrar as informações dos webhooks recebidos, como status da transação e erros, para facilitar o monitoramento e a depuração.
   - Logs estruturados para facilitar a análise de eventos de pagamento, incluindo falhas, confirmações, e atualizações.

