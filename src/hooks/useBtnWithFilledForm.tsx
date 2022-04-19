import {useMemo} from 'react';

interface IForm {
  [key: string]: string
}

export const useBtnWithFilledForm  = (form: IForm): boolean => {
  const isFormFilled = useMemo(() => {
    return Object.values(form).every(inputVal => inputVal !== '')
  }, [form])

  return isFormFilled;
}