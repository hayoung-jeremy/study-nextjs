import { NextApiRequest, NextApiResponse } from "next"
import twilio from "twilio"
import nodemailer from "nodemailer"

import prismaClient from "@libs/server/client"
import { withHandler, ResponseType } from "@libs/server/withHandler"

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)
const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASS,
  },
})

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { email, phone } = req.body

  const user = phone ? { phone: +phone } : email ? { email } : null
  const payload = Math.floor(10000 + Math.random() * 900000) + ""

  if (!user) return res.status(400).json({ ok: false })

  const token = await prismaClient.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  })

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
    //   to: process.env.TEST_PHONE_NUM!,
    //   body: `Your login token is ${payload}`,
    // })
    // console.log("message : ", message)
    // console.log("token : ", token)
  } else if (email) {
    // const emailMessage = await emailTransporter.sendMail({
    //   from: "hyk@altava.com",
    //   to: email,
    //   subject: "Carrot Market Verification Email",
    //   text: `Your token number is ${payload}`,
    //   html: `<strong>Your token number is ${payload}</strong>`,
    // })
    // console.log("emailMessage : ", emailMessage)
  }

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
  return res.json({
    ok: true,
  })
}

export default withHandler("POST", handler)
