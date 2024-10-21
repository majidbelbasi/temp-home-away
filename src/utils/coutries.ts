import coutries from "world-countries";

export const formattedCountries = coutries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag,
    location: item.latlng,
    region: item.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
