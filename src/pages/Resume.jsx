// pages/Resume.jsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumeFile from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <div style={{ height: '100%', border: '1px solid rgba(0, 0, 0, 0.3)' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumeFile} />
        </Worker>
      </div>
    </div>
  );
};

export default Resume;
