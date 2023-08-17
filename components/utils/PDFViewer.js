// components/PDFViewer.js
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useDarkMode } from '../context/DarkModeProvider';

const PDFViewer = ({ pdfUrl }) => {
  const [error, setError] = useState(null);
  const { isDarkMode } = useDarkMode();

  const handlePdfError = (error) => {
    setError('An error occurred while loading the PDF.');
    console.error('PDF error:', error);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {error ? (
        <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{error}</div>
      ) : (
        <Document file={pdfUrl} onError={handlePdfError}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default PDFViewer;
