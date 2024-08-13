// components/PDFViewer.js
import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeProvider';
import { Document, Page, pdfjs } from "react-pdf";

async function createPDFViewer() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
}

const PDFViewer = () => {
  const { isDarkMode } = useDarkMode();
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPage);
    setPageNumber(1);
  }

  return (
    <div>
      <Document file="./public/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default PDFViewer;