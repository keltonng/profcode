import jwt from "jsonwebtoken";

export function authMiddleware(req: any, res: any, next: any) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Sem token" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
  req.userId = decoded.id;
  req.userPlan = decoded.plan;
  next();
}
