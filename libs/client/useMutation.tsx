import { useState } from "react"

interface UseMutationState {
  loading: boolean
  data: undefined | any
  error: undefined | any
}
type UseMutationResult = [(data: any) => void, UseMutationState]

const useMutation = (url: string): UseMutationResult => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<undefined | any>(undefined)
  const [error, setError] = useState<undefined | any>(undefined)

  const mutation = (data: any) => {
    setLoading(true)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }

  return [mutation, { loading, data, error }]
}

export default useMutation
