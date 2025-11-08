import { db } from "../data/connection.js";

export const SingIn = async ( req, res ) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = $1', [email], async (error, results) => {
    if (error) {
      throw error 
    }

    const resultFind = results.rows;
    if(resultFind.length < 1)
      return res.status(400).json({ message: "Invalid user find" });

    res.status(200).json(resultFind[0]);
  })
}