import type { NextApiRequest, NextApiResponse } from 'next'
import GetPhrases from '../../utils/phrases'

type Data = {
  phrases: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const dataPhrasse = GetPhrases();
    res.status(200).json({ phrases: JSON.stringify(dataPhrasse) })
  } catch (error) {
    return false;   
  }
 
}
