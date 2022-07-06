import { NextApiRequest, NextApiResponse } from "next"
import prismaClient from "../../../libs/server/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  if (req.method !== "POST") res.status(401).end()
  res.status(200).end()
}

export default handler
