import { useState } from 'react'
import { apiClient, Title } from '../client'

export const useSearch: () => {
  searchedTitles: Title[]
  searchTitles: (arg: string) => unknown
} = () => {
  const [searchedTitles, setSearchedTitles] = useState<Title[]>([])

  const searchTitles: (arg: string) => unknown = async (searchQuery: string) => {
    if (searchQuery != null) {
      const results = await apiClient.search(searchQuery)
      if (results != null) {
        setSearchedTitles(results)
      }
    }
  }

  return {
    searchedTitles,
    searchTitles
  }
}
