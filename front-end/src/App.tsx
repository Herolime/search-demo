import React, { FC } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import { Record } from './pageComponents/Record'
import { Search } from './pageComponents/Search'

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/record" element={<Record/>}>
        </Route>
        <Route path="/" element={<Search/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
