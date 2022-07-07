import { NextApiRequest, NextApiResponse } from "next"
import withHandler from "@libs/server/withHandler"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  return res.status(200).end()
}

export default withHandler("POST", handler)
