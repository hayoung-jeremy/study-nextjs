import { NextApiRequest, NextApiResponse } from "next"
import withHandler from "@libs/server/withHandler"
import prismaClient from "@libs/server/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, phone } = req.body
  const payload = phone ? { phone: +phone } : email ? { email } : null
  const user = await prismaClient.user.upsert({
    where: {
      // ... the filter for the User we want to update
      ...payload,
    },
    create: {
      // ... data to create a User
      name: "Anonymous",
      ...payload,
    },
    update: {
      // ... in case it already exists, update
    },
  })
  console.log(user)

  // if (email) {
  //   user = await prismaClient.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   })
  //   if (user) console.log("Already exist, please log in")
  //   if (!user) {
  //     console.log("Did not find any user, will create one")
  //     // create User
  //     user = await prismaClient.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email,
  //       },
  //     })
  //   }
  //   // console.log("user : ", user)
  // }

  // if (phone) {
  //   user = await prismaClient.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   })
  //   if (user) console.log("Already exist, please log in")
  //   if (!user) {
  //     console.log("Did not find any user, will create one")
  //     // create User
  //     user = await prismaClient.user.create({
  //       data: {
  //         name: "Anonymous",
  //         phone: +phone,
  //       },
  //     })
  //   }
  //   // console.log("user : ", user)
  // }
  // console.log(req.body)
  return res.status(200).end()
}

export default withHandler("POST", handler)
