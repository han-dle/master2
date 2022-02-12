import { useState } from 'react'

const PREFIX = 'handle-master-2-'

export const useLocalStorage = <Type,>(key: string, initialValue: Type): [Type, any] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(PREFIX + key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(PREFIX + key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  window.localStorage.setItem(PREFIX + key, JSON.stringify(storedValue))

  return [storedValue, setValue]
}
