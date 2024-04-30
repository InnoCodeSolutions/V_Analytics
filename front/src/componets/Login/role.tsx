import jwt from 'jsonwebtoken';



export const generateToken = (username: string, role: string) => {
  const token = jwt.sign({ username, role }, 'your-secret-key'); // Substitua 'your-secret-key' pela sua chave secreta real
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Substitua 'your-secret-key' pela sua chave secreta real
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const checkRole = (token: string, role: string) => {
  const decoded = verifyToken(token);
  if (decoded && typeof decoded === 'object' && 'role' in decoded && decoded.role === role) {
    return true;
  } else {
    return false;
  }
  
  
};
