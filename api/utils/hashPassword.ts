import bcrypt from 'bcrypt';

function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}
