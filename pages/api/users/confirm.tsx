import { NextApiRequest, NextApiResponse } from "next"
import { withIronSessionApiRoute } from "iron-session/next"

import prismaClient from "@libs/server/client"
import { withHandler, ResponseType } from "@libs/server/withHandler"

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number
    }
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  // console.log("req.session : ", req.session)
  const { token } = req.body
  // console.log("token : ", token)
  const exists = await prismaClient.token.findUnique({
    where: {
      payload: token,
    },
  })
  if (!exists) return res.status(404).end()
  // console.log("exists token : ", exists)
  req.session.user = {
    id: exists?.userId,
  }
  await req.session.save()
  res.status(200).end()
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrot-session",
  password:
    "das0das98das0980921jd120912j1209d1j290e712903das0das98das0980921jd120912j1209d1j290e712903",
})
