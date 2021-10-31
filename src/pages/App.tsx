import React from "react";
import { fetchCryptoData } from "../apis";
import { CryptoTable } from "../components/CryptoTable/CryptoTable";
import { Crypto } from "../types";

const cryptos = ["dogelon-mars", "saitama-inu"];

const App = () => {
  const [cryptoData, setCryptoData] = React.useState<Record<string, Crypto>>();

  React.useEffect(() => {
    const fetchCryptos = async () => {
      const data = await fetchCryptoData(cryptos);
      if (data) {
        setCryptoData(data);
      }
    };

    fetchCryptos();
  }, []);

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return <CryptoTable cryptos={cryptoData} />;
};

export default App;
