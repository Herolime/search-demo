import React, { FC } from 'react'
import { Title } from '../../client'

interface ResultsProps {
  titles: Title[]
}

export const Results: FC<ResultsProps> = ({ titles }) => {
  return (
        <>
        {titles.length > 0 && titles.map(t => (
                <div key={t.title}>
                <img src={t.photo}/>
                <div>
                    <span>{t.title}</span>
                    <span>{t.shortDescription}</span>
                </div>
                </div>
        ))}
        </>
  )
}
