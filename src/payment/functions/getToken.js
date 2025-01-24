export async function getToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', 'ebdee4d1-d483-4bab-9f2f-bca265bf902c');
  params.append('client_secret', 'NGd+6D4RIYPRp0KVgLvhI9ZiPdc+U2i1oiqyxrDsE01N1POwmBrCGmiCBNay50oRs1LIuRaBesL+zQyuwa3OetPk176vgdS6DPNxgr6CVS7Jj2XwvvnpykmAKAZ6EdNX2yTKyBTl0/GAQwKATj7lhuex2B5SpZesWzRaXbAgUb0');
  params.append('scope', 'wallet:read payments:write');

  const response = await axios.post('https://oauth.livepix.gg/oauth2/token', params.toString(), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
}