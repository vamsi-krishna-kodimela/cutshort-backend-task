import bcrypt from "bcrypt";

const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password: string, hashedPassword: string): boolean =>
  bcrypt.compareSync(password, hashedPassword);

export = { encryptPassword, comparePassword };
