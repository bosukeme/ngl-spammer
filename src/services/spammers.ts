import axios from 'axios';
import crypto from 'crypto';

async function sendNGLMessage(
  spamNumber: number,
  username: string,
  message: string,
) {
  const url = 'https://ngl.link/api/submit';

  for (let i = 0; i < spamNumber; i++) {
    const uuid = crypto.randomUUID();
    await spamMessageNTimes(username, message, uuid, url);
  }
}

async function spamMessageNTimes(
  username: string,
  message: string,
  uuid: string,
  url: string,
) {
  const payload = new URLSearchParams({
    username: username,
    question: message,
    deviceId: uuid,
  });

  try {
    const response = await axios.post(url, payload.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (
      response.data?.error ||
      response.data?.includes?.('Could not find user')
    ) {
      throw new Error(response.data?.error || 'Could not find user');
    }
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export default sendNGLMessage;
