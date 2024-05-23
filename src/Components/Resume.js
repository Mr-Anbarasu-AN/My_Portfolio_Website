


import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import ResumePDF from './Resume.pdf'; // Import the PDF file
import './Resume.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const Form = () => {
  const [showPdf, setShowPdf] = useState(false);
  

  const onDocumentLoadSuccess = ({ numPages }) => {
    // You can use numPages if needed in the future
    console.log(`Document loaded with ${numPages} pages`);
    setShowPdf(true); // Show the PDF once it's loaded
  };

  const handleDownload = () => {
    // You can customize the filename here
    const fileName = 'Resume.pdf';
    const pdfPath = '/' + fileName; // Replace with "/" placeholder
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <>
    <Navbar/>
      <div className='formbgcolor'>
      <div className="form">
        <div className='formfirst'>

        <h1 className="resume" id='resume' style={{ padding: 0, fontFamily: 'Times New Roman' , textAlign: 'center'}}>
          RESUME PDF
        </h1>
        <div className='pdf-default-container'>
        <div className="pdf-container-wrapper">
          <div className={`pdf-container ${showPdf ? 'visible' : 'hidden'}`}>
            <div className="pdf-viewer">
              {showPdf && (
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
                >
                  <Viewer fileUrl={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} />
                </Worker>
              )}
            </div>
          </div>
          
        </div>
        <div className="pdf-controls">
            <button className="form-button" id="form-button" onClick={() => setShowPdf(!showPdf)}>
              {showPdf ? 'Hide PDF' : 'View PDF'}
            </button>
            <button className="form-button" id="form-button" onClick={handleDownload}>
              Download PDF
            </button>
          </div>
        </div>
        </div>
        <div className='formsecond'>
        

        </div>

      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Form;

/*

// PdfViewer.js

import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import ResumePDF from './Resume.pdf'; // Import the PDF file

import './Resume.css'; // Import the CSS file

const PdfViewer = () => {
  const [showPdf, setShowPdf] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    // You can use numPages if needed in the future
    console.log(`Document loaded with ${numPages} pages`);
    setShowPdf(true); // Show the PDF once it's loaded
  };

  const handleDownload = () => {
    // You can customize the filename here
    const fileName = 'Resume.pdf';
    const pdfPath = process.env.PUBLIC_URL + '/' + fileName;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="body">
        <h1 className="Hi" style={{padding: 5 , fontFamily: 'Times New Roman'}}>My Resume</h1>
    <div className="pdf-container-wrapper">
      <div className={`pdf-container ${showPdf ? 'visible' : 'hidden'}`}>
        <div className="pdf-viewer">
          {showPdf && (
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
              <Viewer fileUrl={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} />
            </Worker>
          )}
        </div>
      </div>
      <div className="pdf-controls">
        <button onClick={() => setShowPdf(!showPdf)}>
          {showPdf ? 'Hide PDF' : 'View PDF'}
        </button>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
    </div>
    </div>
  );
};

export default PdfViewer;


/*
*/