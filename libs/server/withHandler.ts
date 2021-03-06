import { NextApiRequest, NextApiResponse } from "next"

type methods = "GET" | "POST" | "DELETE"

export interface ResponseType {
  ok: boolean
  [key: string]: any
}

export const withHandler = (
  method: methods,
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) => {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end()
    }
    try {
      await fn(req, res)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }
}
