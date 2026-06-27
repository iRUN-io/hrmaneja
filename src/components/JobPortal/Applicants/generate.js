
import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import nlp from "compromise";

const MyPdfReader = () => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    async function fetchPdf() {
      const response = await fetch("https://res.cloudinary.com/archer/image/upload/v1674540710/hrmaneja-candidates/sbrnhryojjijmdmpfcjx.pdf");
      const data = await response.arrayBuffer();
      setPdfData(new Uint8Array(data));
    }
    fetchPdf();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const extractKeywords = text => {
    const doc = nlp(text);
    const keywords = doc
      .topics()
      .out("array")
      .map(topic => topic.text);
    setKeywords(keywords);
  };

  const compareWithJobDescription = jobDescription => {
    // Code to compare keywords with job description and calculate a score
  };

  return (
    <div>
      <Document
        file={pdfData}
        onLoadSuccess={onDocumentLoadSuccess}
        onContentRendered={({ textContent }) => extractKeywords(textContent)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <div>
        Keywords:
        <ul>
          {keywords.map(keyword => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyPdfReader;
