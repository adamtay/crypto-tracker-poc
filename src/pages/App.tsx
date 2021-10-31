import React from "react";
import { fetchCryptoData } from "../apis";
import { AddCryptoInput, CryptoTable } from "../components";
import { Crypto } from "../types";

const App = () => {
  const [cryptos, setCryptos] = React.useState<string[]>([
    "dogelon-mars",
    "saitama-inu",
  ]);
  const [cryptoData, setCryptoData] = React.useState<Record<string, Crypto>>();

  React.useEffect(() => {
    const fetchCryptos = async () => {
      const data = await fetchCryptoData(cryptos);
      if (data) {
        setCryptoData(data);
      }
    };

    fetchCryptos();
  }, [cryptos]);

  const onAddCrypto = (value: string) => {
    setCryptos([...cryptos, value]);
  };

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AddCryptoInput onSubmit={onAddCrypto} />
      <CryptoTable cryptos={cryptoData} />
    </div>
  );
};

export default App;
