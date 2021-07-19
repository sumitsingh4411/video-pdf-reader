import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

export const Pdfstyle = () => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [])
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('');
  const [page, setpage] = useState(1);
  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // onchange event
  const fileType = ['application/pdf'];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError('');
        }
      }
      else {
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else {
      console.log('select your file');
    }
  }

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    }
    else {
      setViewPdf(null);
    }
  }

  return (
    <div className='container'>

      <br></br>

      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input type="file" className='form-control'
          required onChange={handlePdfFileChange}
        />
        {pdfFileError && <div style={
          {
            width: '100%',
            color: 'red',
            fontSize: 14,
            fontWeight: 600,
          }}>{pdfFileError}</div>}
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
          UPLOAD
        </button>
      </form>
      <br></br>
      <h4>View PDF</h4>
      <div className='pdf-container' style={{
        width: '60%',
        height: 800,
        backgroundColor: '#e4e4e4',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {viewPdf && <>
          <Document
            file={viewPdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={page} />
          </Document>
          <div style={{ marginLeft: 10 }}>
            <p>Page {page} of {numPages}</p>
            {
              page < numPages ? <button className='btn btn-success btn' onClick={() => {
                if (page > numPages) { setpage(1) } setpage(page + 1)
              }}>next page</button> : <button className='btn btn-success btn' onClick={() => { setpage(1) }}>Go to page 1</button>
            }
          </div>
        </>}
        {!viewPdf && <>No pdf file selected</>}
      </div>

    </div >
  )
}

export default Pdfstyle;