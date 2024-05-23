// good performance
const { createTransport } = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST', 
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight response' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: process.env.SMTP_CIPHERS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error sending email', error: error.message, success: false }),
    };
  }
};


/*

// good performance
const { createTransport } = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST', 
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight response' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: process.env.SMTP_CIPHERS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
      attachments: [],
    };

    // Check if there are any attachments
    if (event.isBase64Encoded && event.multiValueHeaders['content-type']) {
      const attachmentHeaders = event.multiValueHeaders['content-type'];
      const attachmentBodies = event.multiValueHeaders['content-body'];

      // Other code remains unchanged

      if (attachmentHeaders && attachmentBodies) {
        attachmentHeaders.forEach((contentType, index) => {
          const fileSize = Buffer.byteLength(attachmentBodies[index], 'base64');
          if (fileSize <= 10 * 1024 * 1024) {
            const attachmentData = Buffer.from(attachmentBodies[index], 'base64');
            mailOptions.attachments.push({ 
              content: attachmentData, 
              filename: `attachment_${index}`, 
              contentType 
            });
          } else {
            throw new Error(`File size exceeds the limit for attachment_${index}`);
          }
        });
      }

    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error sending email', error: error.message, success: false }),
    };
  }
};



/*

// good performance
const { createTransport } = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST', 
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight response' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: process.env.SMTP_CIPHERS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
      attachments: [],
    };

    // Check if there are any attachments
    if (event.isBase64Encoded && event.multiValueHeaders['content-type']) {
      const attachmentHeaders = event.multiValueHeaders['content-type'];
      const attachmentBodies = event.multiValueHeaders['content-body'];

      if (attachmentHeaders && attachmentBodies) {
        attachmentHeaders.forEach((contentType, index) => {
          const fileSize = Buffer.byteLength(attachmentBodies[index], 'base64');
          if (fileSize <= 10 * 1024 * 1024) {
            const attachmentData = Buffer.from(attachmentBodies[index], 'base64');
            mailOptions.attachments.push({ 
              content: attachmentData, 
              filename: `attachment_${index}`, 
              contentType 
            });
          } else {
            throw new Error(`File size exceeds the limit for attachment_${index}`);
          }
        });
      }
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
    };
  }
};




/*

const { createTransport } = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight response' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: process.env.SMTP_CIPHERS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
      attachments: event.bodyAttachments ? event.bodyAttachments.map(attachment => ({ 
        filename: attachment.name,
        content: Buffer.from(attachment.data, 'base64'),
        contentType: attachment.type
      })) : [],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
    };
  }
};


/*

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow all origins
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST', // Only allow POST requests
  };

  // Handle preflight requests (OPTIONS method)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight response' }),
    };
  }

  // Ensure the request is a POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);
    const attachments = [];

    // Check if there are any attachments
    if (event.isBase64Encoded && event.multiValueHeaders['content-type']) {
      const attachmentHeaders = event.multiValueHeaders['content-type'];

      attachmentHeaders.forEach((contentType, index) => {
        const attachmentData = Buffer.from(event.bodyAttachments[index], 'base64');
        attachments.push({ content: attachmentData, contentType });
      });
    }

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: process.env.SMTP_CIPHERS,
      },
    });

    let mailOptions = {
      from: process.env.SMTP_FROM,
      to: to,
      subject: subject,
      text: text,
      attachments: attachments,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
    };
  }
};


/*

*/