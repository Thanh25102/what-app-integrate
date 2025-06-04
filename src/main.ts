import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const sendMessageWhatsapp = async () => {
  console.log("WHATSAPP_TOKEN", process.env.WHATSAPP_TOKEN);
  const response = await axios({
    url: 'https://graph.facebook.com/v22.0/597555213451831/messages',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      messaging_product: 'whatsapp',
      to: '84328735659',
      type: 'text',
      text: {
        body: "Sinh Vat"
      }
    }),
  });
  console.log('response', response);
};
console.log('response', "hello");
sendMessageWhatsapp()
