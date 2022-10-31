import './style.css';
import Papa from "papaparse";


function App() {

  //CSV Parsing below (shows data in console)
  const chandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data)
      },
    });
  };

  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={chandler}
        style={{ display: "block", margin: "10px auto" }}
      />
    </div>
  );
}

export default App;
 