# Livepix@Payments

## Pré-requisitos

Antes de começar, você precisará:

- Node.js instalado na versão 16 ou superior.
- Uma conta válida no Livepix com as credenciais de cliente (clientId e clientSecret).
- Um editor de código, como Visual Studio Code.

## Passo a Passo para Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/livepix-payments.git
```

### 2. Instalar as Dependências

Acesse o diretório do projeto e instale as dependências:

```bash
cd livepix-payments
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e configure as credenciais:

```
CLIENT_ID=seuClientId
CLIENT_SECRET=seuClientSecret
```

### 4. Executar o Projeto

Para iniciar o projeto, execute o comando:

```bash
node .
```
---

## Como Usar?

### Obtendo o Token
Para autenticar na API, obtenha o token utilizando as credenciais do cliente:

```js
import { getToken } from "#payment";

const token = await getToken(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
```

### Gerando um Pagamento

#### Obter o link de pagamento

```js
import { getUrlPayment } from "#payment";

const urlPayment = await getUrlPayment(price, token);

console.log(urlPayment)
```

#### Obter dados completos do pagamento

```js
import { getDataPayment } from "#payment";

const dataPayment = await getDataPayment(price, token);

console.log(dataPayment.urlPayment); // Link para o pagamento
console.log(dataPayment.qrCode);     // QR Code do pagamento
console.log(dataPayment.pixCode);    // Código Pix Copia e Cola
```

### Acesse a documentação oficial da API do Livepix em:
[Documentação Oficial Livepix API](https://docs.livepix.gg/api)



## Estrutura do Projeto

- **src/**: Contém o código-fonte principal.
  - **#payment/**: Módulo com funções para autenticação e geração de pagamentos.
- **.env**: Arquivo para configuração de variáveis de ambiente.
- **package.json**: Arquivo de configuração do projeto Node.js.

---

## Informações Importantes

- **Renovação do Token**: O token deve ser renovado a cada 1 hora.
- **Evitar Requisições Excessivas**: Não solicite novos tokens desnecessariamente.
  - Muitas requisições podem colocar sua conta em risco de bloqueio.

## Funcionalidades Principais

1. **Autenticação**
   - Obtenha um token de acesso para autenticação segura na API do Livepix.

2. **Geração de Pagamentos**
   - **Link de Pagamento**: Gere um link direto para o pagamento via Pix.
   - **QR Code**: Crie QR Codes para pagamento, disponíveis em formatos de imagem e texto para o modelo "Pix Copia e Cola".

---

**Nota:** Mantenha as credenciais do cliente seguras e evite expô-las no código público.
