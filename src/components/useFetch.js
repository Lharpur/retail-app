import { useState, useEffect } from "react";

function UseFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`Error: ${err}`));
  }, [url]);
  console.log(data);

  return { data };
}

export default UseFetchData;
