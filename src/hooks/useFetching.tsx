import { useState } from "react";


interface ICbParams {
  username: string,
  password: string
}

export const useFetching = (callback: (form: ICbParams) => void) => {
  const [message, setMessage] = useState<string>('')

  const fetching = async (form: ICbParams): Promise<string> => {
    try {
      await callback(form);
    } catch (e: any) {
      setMessage(e.message)
    }
    return message;
  }
  return fetching;
}
