import { Module } from "../models/Module";
import { Video } from "../models/Video";

export async function listModules(req: any, res: any) {
  const modules = await Module.find().sort({ order: 1 });

  const videos =
    req.userPlan === "premium"
      ? await Video.find()
      : await Video.find({ premium: false });

  res.json({ modules, videos, plan: req.userPlan });
}
