import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../client'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const Record: FC = () => {
  const [currentRecord, setCurrentRecord] = useState<Title | null>(null)
  const nav = useNavigate()
  const { getCurrentTitle } = useLocalStorage()

  useEffect(() => {
    const currentTitle = getCurrentTitle()
    if (currentTitle != null) {
      setCurrentRecord(currentTitle)
    } else {
      // go back
      nav(-1)
    }
  }, [])
  return (<div>
        <img src={currentRecord?.photo}/>
        <div>
            <span>
                {currentRecord?.description}
            </span>
        </div>
    </div>)
}
