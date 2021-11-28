import jwt from "jsonwebtoken";

export const validateToken = (token) => {
  if (token) {
    const verification = jwt.verify(token, "secret", (err, data) => {
      if (data) {
        return {
          data: data,
        };
      }
      if (err) {
        return {
          error: err,
        };
      }
      console.log("error", err,"verificacion", data)
    });
    console.log(verification, token);
    return verification;
  }
};

export const generateToken = (payload) => {
  return jwt.sign(payload, "secret", {
    expiresIn: "24h",
  });
};
