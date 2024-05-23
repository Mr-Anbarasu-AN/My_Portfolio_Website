import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import ProfileGirl from "./Images/girl.png";
import ProfileMan from "./Images/man.png";
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isValidEmail) {
      setMessageText('Please enter a valid email address.');
      return;
    }
  
    const formData = new FormData();
    formData.append('to', recipient);
    formData.append('subject', subject);
    formData.append('text', message);

    try {
      setLoading(true);
      const response = await axios.post('/.netlify/functions/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log(response.data);
      setMessageText('Email sent successfully!');
      setFullname('');
      setRecipient('');
      setSubject('');
      setMessage('');
      setIsValidEmail(true);
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body1">
        <div className='contact-first'>
          <center>
            <img src={ProfileGirl} alt="ProfileGirl" style={{ width: '145px', height: '475px', paddingTop: '20px' }} />
          </center>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="email"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <h6>(Note): This Email is sent to your Email ID by using My Gmail ID.</h6>
          </form>
        </div>
        <div className='contact-end'>
          <center>
            <img src={ProfileMan} alt="Profile1" style={{ width: '155px', height: '500px' }} />
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;


/*


import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import ProfileGirl from "./Images/girl.png";
import ProfileMan from "./Images/man.png";
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [includeAttachment, setIncludeAttachment] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleIncludeAttachmentChange = () => {
    setIncludeAttachment(!includeAttachment);
    if (!includeAttachment) {
      setAttachment(null);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    } else {
      setAttachment(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail) {
      setMessageText('Please enter a valid email address.');
      return;
    }
    
    const formData = new FormData();
    formData.append('to', recipient);
    formData.append('subject', subject);
    formData.append('text', message);
    
    if (includeAttachment && attachment) {
      formData.append('attachment', attachment, attachment.name); // Append the file with its name
    }
    
    try {
      setLoading(true);
      const headers = {};
      if (includeAttachment && attachment) {
        headers['Content-Type'] = 'multipart/form-data';
      } else {
        headers['Content-Type'] = 'application/json';
      }
      const response = await axios.post('/.netlify/functions/sendEmail', formData, {
        headers,
      });
      
      console.log(response.data);
      if (response.data.success) {
        setMessageText('Email sent successfully!');
        setFullname('');
        setRecipient('');
        setSubject('');
        setMessage('');
        setIncludeAttachment(false);
        setAttachment(null);
        setIsValidEmail(true);
      } else {
        setMessageText('Error while sending email.');
      }
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };
  
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (!isValidEmail) {
  //     setMessageText('Please enter a valid email address.');
  //     return;
  //   }
    
  //   const formData = new FormData();
  //   formData.append('to', recipient);
  //   formData.append('subject', subject);
  //   formData.append('text', message);
    
  //   if (includeAttachment && attachment) {
  //     formData.append('attachment', attachment); 
  //   }
    
  //   try {
  //     setLoading(true);
  //     const headers = {};
  //     if (includeAttachment && attachment) {
  //       headers['Content-Type'] = 'multipart/form-data';
  //     } else {
  //       headers['Content-Type'] = 'application/json';
  //     }
  //     const response = await axios.post('/.netlify/functions/sendEmail', formData, {
  //       headers,
  //     });
      
  //     console.log(response.data);
  //     setMessageText('Email sent successfully!');
  //     setFullname('');
  //     setRecipient('');
  //     setSubject('');
  //     setMessage('');
  //     setIncludeAttachment(false);
  //     setAttachment(null);
  //     setIsValidEmail(true);
  //   } catch (error) {
  //     console.error(error);
  //     setMessageText('Error while sending email.');
  //   } finally {
  //     setLoading(false);
  //     setTimeout(() => {
  //       setMessageText('');
  //     }, 5000);
  //   }
  // };
  
  
  

  return (
    <>
      <Navbar />
      <div className="body1">
        <div className='contact-first'>
          <center>
            <img src={ProfileGirl} alt="ProfileGirl" style={{ width: '145px', height: '475px', paddingTop: '20px' }} />
          </center>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="email"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="includeAttachment">Include Attachment:</label>
              <input
                type="checkbox"
                id="includeAttachment"
                checked={includeAttachment}
                onChange={handleIncludeAttachmentChange}
              />
            </div>
            {includeAttachment && (
              <div className="form-group">
                <label htmlFor="attachment">Attachment (optional):</label>
                <input
                  type="file"
                  id="attachment"
                  onChange={handleAttachmentChange}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
              </div>
            )}
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <h6>(Note): This Email is sent to your Email ID by using My Gmail ID.</h6>
          </form>
        </div>
        <div className='contact-end'>
          <center>
            <img src={ProfileMan} alt="Profile1" style={{ width: '155px', height: '500px' }} />
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;



/*

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import ProfileGirl from "./Images/girl.png";
import ProfileMan from "./Images/man.png";
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [includeAttachment, setIncludeAttachment] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleIncludeAttachmentChange = () => {
    setIncludeAttachment(!includeAttachment);
    if (!includeAttachment) {
      setAttachment(null);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    } else {
      setAttachment(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isValidEmail) {
      setMessageText('Please enter a valid email address.');
      return;
    }
  
    const formData = new FormData();
    formData.append('to', recipient);
    formData.append('subject', subject);
    formData.append('text', message);

    if (includeAttachment && attachment) {
      formData.append('attachment', attachment); 
    }

    try {
      setLoading(true);
      const response = await axios.post('/.netlify/functions/sendEmail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' && 'application/json',
        },
      });
  
      console.log(response.data);
      setMessageText('Email sent successfully!');
      setFullname('');
      setRecipient('');
      setSubject('');
      setMessage('');
      setIncludeAttachment(false);
      setAttachment(null);
      setIsValidEmail(true);
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body1">
        <div className='contact-first'>
          <center>
            <img src={ProfileGirl} alt="ProfileGirl" style={{ width: '145px', height: '475px', paddingTop: '20px' }} />
          </center>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="email"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="includeAttachment">Include Attachment:</label>
              <input
                type="checkbox"
                id="includeAttachment"
                checked={includeAttachment}
                onChange={handleIncludeAttachmentChange}
              />
            </div>
            {includeAttachment && (
              <div className="form-group">
                <label htmlFor="attachment">Attachment (optional):</label>
                <input
                  type="file"
                  id="attachment"
                  onChange={handleAttachmentChange}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
              </div>
            )}
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <h6>(Note): This Email is sent to your Email ID by using My Gmail ID.</h6>
          </form>
        </div>
        <div className='contact-end'>
          <center>
            <img src={ProfileMan} alt="Profile1" style={{ width: '155px', height: '500px' }} />
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;



/*

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import ProfileGirl from "./Images/girl.png";
import ProfileMan from "./Images/man.png";
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [includeAttachment, setIncludeAttachment] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleIncludeAttachmentChange = () => {
    setIncludeAttachment(!includeAttachment);
    if (!includeAttachment) {
      setAttachment(null);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    } else {
      setAttachment(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      setMessageText('Please enter a valid email address.');
      return;
    }

    const formData = new FormData();
    formData.append('to', recipient);
    formData.append('fullname', fullname);
    formData.append('subject', subject);
    formData.append('text', message);

    if (includeAttachment && attachment) {
      formData.append('attachment', attachment);
    }

    setLoading(true);

    try {
      const response = await axios.post('/.netlify/functions/sendEmail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' && 'application/json',
        },
      });

      console.log(response.data);
      setMessageText('Email sent successfully!');
      setFullname('');
      setRecipient('');
      setSubject('');
      setMessage('');
      setIncludeAttachment(false);
      setAttachment(null);
      setIsValidEmail(true);
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body1">
        <div className='contact-first'>
          <center>
            <img src={ProfileGirl} alt="ProfileGirl" style={{ width: '145px', height: '475px', paddingTop: '20px' }} />
          </center>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="email"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="includeAttachment">Include Attachment:</label>
              <input
                type="checkbox"
                id="includeAttachment"
                checked={includeAttachment}
                onChange={handleIncludeAttachmentChange}
              />
            </div>
            {includeAttachment && (
              <div className="form-group">
                <label htmlFor="attachment">Attachment (optional):</label>
                <input
                  type="file"
                  id="attachment"
                  onChange={handleAttachmentChange}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
              </div>
            )}
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <h6>(Note): This Email is sent to your Email ID by using My Gmail ID.</h6>
          </form>
        </div>
        <div className='contact-end'>
          <center>
            <img src={ProfileMan} alt="Profile1" style={{ width: '155px', height: '500px' }} />
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;


/*

*/