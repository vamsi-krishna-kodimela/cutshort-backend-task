import { sign, decode, JwtPayload } from "jsonwebtoken";

const secret: string = process.env.JWT_SECRET ?? "cutshorts";

const generateToken = (id: string): string => sign({ id }, secret);

const decodeToken = (token: string): string | null | JwtPayload =>
  decode(token);

export = { generateToken, decodeToken };