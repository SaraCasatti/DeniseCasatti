import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Book.css";

// Configura worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Book({ file, titulo, previewPages = [1, 2, 3, 4, 5] }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{titulo}</h3>

      <div className="book-preview">
        <Document file={file} loading="Carregando PDF...">
          {previewPages.map((pageNumber) => (
            <Page key={pageNumber} pageNumber={pageNumber} width={250} />
          ))}
        </Document>
      </div>

      <a href={file} target="_blank" rel="noopener noreferrer" className="download-btn">
        Baixar e-book completo
      </a>
    </div>
  );
}

export default Book;
