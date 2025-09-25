import React, { useEffect, useState } from "react";
import "../css/DataScanner.css"

function DataScanner() {
  const [scanResults, setScanResults] = useState([]);
  const [scanActive, setScanActive] = useState(true);



  useEffect(() => {
    const results = [
      "Found: user_credentials.txt",
      "Found: secret_key.pem",
      "Found: database_backup.sql",
      "Found: encrypted_wallet.dat",
      "Scan complete: 4 files detected",
    ];

    let i = 0;
    const scanInterval = setInterval(() => {
      if (i < results.length) {
        setScanResults((prev) => [...prev, results[i]]);
        i++;
      } else {
        setScanActive(false);
        clearInterval(scanInterval);
      }
    }, 1500);

    return () => clearInterval(scanInterval);
  }, []);

  return (
    <div className="scanner-root">
      <div className="scanner-header">Data Scanner v2.1</div>
      <div className="radar">
        <div className={scanActive ? "radar-pulse active" : "radar-pulse"}></div>
      </div>
      <div className="scanner-results">
        {scanResults.map((result, index) => (
          <div key={index} className="result-line">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataScanner;