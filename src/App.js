import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&apiKey=fa70351bae8948279923fab34d45d5aa"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </>
  );
}

export default App;
