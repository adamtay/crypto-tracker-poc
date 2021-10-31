import { Crypto } from "../types";

export const fetchCryptoData = async (
  ids: string[]
): Promise<Record<string, Crypto>> => {
  const response = await window.fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
      ","
    )}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
  );

  const data = await response.json();
  if (response.ok) {
    return data as Record<string, Crypto>;
  }

  return Promise.reject(`Failed to fetch data for: ${ids}`);
};
