import { NextApiRequest, NextApiResponse } from "next"

import prismaClient from "@libs/server/client"
import { withHandler, ResponseType } from "@libs/server/withHandler"

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { token } = req.body
  console.log("token : ", token)

  return res.json({
    ok: true,
  })
}

export default withHandler("POST", handler)
