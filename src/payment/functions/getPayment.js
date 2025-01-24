import axios from 'axios';
import puppeteer from 'puppeteer';
import QRCode from 'qrcode';

export async function getUrlPayment(price, token) {
  try {
    const amountCents = Math.round(price * 100);
    const paymentResponse = await axios.post('https://api.livepix.gg/v2/payments', {
      amount: amountCents,
      currency: 'BRL',
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return paymentResponse.data.data.redirectUrl;

  } catch (error) {
    console.error('Erro ao gerar o link de pagamento:', error.response ? error.response.data : error.message);
  }
}


export async function getDataPayment(price, token) {

  try {
    const amountCents = Math.round(price * 100);

    const paymentResponse = await axios.post('https://api.livepix.gg/v2/payments', {
      amount: amountCents,
      currency: 'BRL',
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const paymentUrl = paymentResponse.data.data.redirectUrl;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(paymentUrl);

    await page.waitForSelector('button.MuiButton-contained');
    await page.click('button.MuiButton-contained');

    await page.waitForSelector('input.MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq');
    const pixCode = await page.$eval('input.MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq', el => el.value);

    await browser.close();

    const qrCodeBuffer = await QRCode.toBuffer(pixCode.trim(), {
      errorCorrectionLevel: 'H',
      width: 300
    });

    return {
      urlPayment: paymentUrl,
      paymentValue: price,
      qrCode: qrCodeBuffer,
      pixCode: pixCode.trim()
    };

  } catch (error) {
    console.error('Erro ao gerar o link de pagamento:', error.response ? error.response.data : error.message);
    return null;
  } finally {
    await browser.close();
  }
}

