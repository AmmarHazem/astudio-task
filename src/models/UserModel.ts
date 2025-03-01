export interface UserModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image?: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  eyeColor?: string;
  hair?: HairModel;
  ip?: string;
  address?: AddressModel;
  macAddress?: string;
  university?: string;
  bank?: BankModel;
  company?: CompanyModel;
  ein?: string;
  ssn?: string;
  userAgent?: string;
  crypto?: CryptoModel;
  role?: string;
}

export interface AddressModel {
  address?: string;
  city?: string;
  state?: string;
  stateCode?: string;
  postalCode?: string;
  coordinates?: CoordinatesModel;
  country?: string;
}

export interface CoordinatesModel {
  lat?: number;
  lng?: number;
}

export interface BankModel {
  cardExpire?: string;
  cardNumber?: string;
  cardType?: string;
  currency?: string;
  iban?: string;
}

export interface CompanyModel {
  department?: string;
  name?: string;
  title?: string;
  address?: AddressModel;
}

export interface CryptoModel {
  coin?: string;
  wallet?: string;
  network?: string;
}

export interface HairModel {
  color?: string;
  type?: string;
}
