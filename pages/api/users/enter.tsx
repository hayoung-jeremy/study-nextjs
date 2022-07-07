import { NextApiRequest, NextApiResponse } from "next"
import withHandler from "@libs/server/withHandler"
import prismaClient from "@libs/server/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, phone } = req.body
  let user

  if (email) {
    user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    })
    if (user) console.log("Already exist, please log in")
    if (!user) {
      console.log("Did not find any user, will create one")
      // create User
      user = await prismaClient.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      })
    }
    // console.log("user : ", user)
  }

  if (phone) {
    user = await prismaClient.user.findUnique({
      where: {
        phone: +phone,
      },
    })
    if (user) console.log("Already exist, please log in")
    if (!user) {
      console.log("Did not find any user, will create one")
      // create User
      user = await prismaClient.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      })
    }
    // console.log("user : ", user)
  }
  // console.log(req.body)
  return res.status(200).end()
}

export default withHandler("POST", handler)
