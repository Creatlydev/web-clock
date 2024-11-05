export async function getPublicIP() {
  const URL = 'https://api.ipify.org?format=json';

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Failed to fetch PUBLIC_IP');

    const { ip }: {ip: string} = await response.json();
    return ip;
  } catch (error) {
    console.error('Error fetching public IP:', error);
    throw error
  }
}
