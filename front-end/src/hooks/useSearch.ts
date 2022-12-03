import { useState } from "react"
import { apiClient, title } from "../client"

export const useSearch = () => {
    const [searchedTitles, setSearchedTitles] = useState<title[]>([])

    const searchTitles = async (searchQuery: string) => {
        if (searchQuery) {
            const results = await apiClient.search(searchQuery)
            if (results) {
                setSearchedTitles(results) 
            }
        }
    }

    return {
        searchedTitles,
        searchTitles
    }
}