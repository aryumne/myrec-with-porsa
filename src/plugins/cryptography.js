import { SECRETS } from "@/configs";
import CryptoJS from "crypto-js";

const Encode = (data, key = SECRETS.SALT_CODE) => {
  if (data === null || data === undefined) return;

  return CryptoJS.AES.encrypt(data, key).toString();
};

const Decode = (ciphertext, key = SECRETS.SALT_CODE) => {
  if (ciphertext === null || ciphertext === undefined) return;
  let bytes = CryptoJS.AES.decrypt(ciphertext, key);

  return bytes.toString(CryptoJS.enc.Utf8);
};

export { Decode, Encode };
