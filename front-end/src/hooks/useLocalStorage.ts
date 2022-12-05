import { Title } from '../client'

const titleKey = process.env.REACT_APP_CURRENT_TITLE_KEY ?? ''

export const useLocalStorage: () => {
  setTitle: unknown
  getCurrentTitle: () => Title | undefined
} = () => {
  const setTitle: unknown = (title: Title) => localStorage.setItem(titleKey, JSON.stringify(title))

  const getCurrentTitle: () => (Title | undefined) = () => {
    const titleItem = localStorage.getItem(titleKey)
    if (titleItem != null) {
      return JSON.parse(titleItem) as Title
    }
  }

  return {
    setTitle,
    getCurrentTitle
  }
}
