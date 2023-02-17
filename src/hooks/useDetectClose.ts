import { useEffect, useState, useRef } from 'react'

const useDetectClose = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState)
  const ref = useRef(null)

  const removeHandler = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current !== null && ref.current.contains(e.target)) {
        setIsOpen(!isOpen)
      }
    }
    if (isOpen) {
      window.addEventListener('click', onClick)
    }
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isOpen])

  return { ref, isOpen, removeHandler }
}

export default useDetectClose
