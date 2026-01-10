import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export async function login(req: any, res: any) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ error: "Inválido" });

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.status(401).json({ error: "Inválido" });

  const token = jwt.sign(
    { id: user._id, plan: user.plan },
    process.env.JWT_SECRET as string
  );

  res.json({ token });
}
