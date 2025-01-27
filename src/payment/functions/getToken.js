import axios from 'axios';

export async function getToken(client, secret) {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', client);
    params.append('client_secret', secret);
    params.append('scope', 'wallet:read payments:write');

    const response = await axios.post('https://oauth.livepix.gg/oauth2/token', params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.status === 200 && response.data.access_token) {
      return response.data.access_token;
    } else {
      throw new Error(`Erro na autenticação: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao obter o token:', error.message);
    throw error;
  }
}
