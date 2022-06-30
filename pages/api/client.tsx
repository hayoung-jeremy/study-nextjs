import { NextApiRequest, NextApiResponse } from "next"
import prismaClient from "../../libs/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await prismaClient.user.create({
    data: {
      name: "user",
      email: undefined,
    },
  })
  res.json({
    ok: true,
  })
}

export default handler
