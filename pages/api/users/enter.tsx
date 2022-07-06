import { NextApiRequest, NextApiResponse } from "next"
import prismaClient from "../../../libs/server/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(401).end()
  }
  console.log(req.body)
  res.json({ ok: true })
}

export default handler
