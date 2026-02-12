import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

/**
 * Hash plain text password using scrypt
 * @param password string
 * @returns hash and salted password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${salt}:${derivedKey.toString("hex")}`;
}

/**
 * Validate Password
 * @param password string
 * @param hash hashed password
 * @returns boolean indicating if the password matches the hash
 */
export const validatePassword = async (password: string, hash: string): Promise<boolean> => {
  const [salt, storedKeyHex] = hash.split(":");
  if (!salt || !storedKeyHex) {
    return false;
  }

  const storedKey = Buffer.from(storedKeyHex, "hex");
  const derivedKey = (await scryptAsync(password, salt, storedKey.length)) as Buffer;
  return timingSafeEqual(storedKey, derivedKey);
}