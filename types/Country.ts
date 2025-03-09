export interface NativeName {
  official: string;
  common: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: NativeName;
  };
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Demonyms {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [key: string]: Demonyms;
  };
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: { svg: string; png: string };
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
