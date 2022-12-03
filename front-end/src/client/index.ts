export interface title {
    title: string
    photo: string
    description: string
    shortDescription: string
}

const API_URL = process.env.REACT_APP_API_URL ?? ''

export const apiClient = {
    search: async (searchQuery: string) => {
        const search = await fetch(`${API_URL}/search?searchQuery=${searchQuery}`)
        if (search.ok) {
            const searchResponse = await search.json()
            return searchResponse as title[]
        }
        else {
            // do error handling here
        }
    }
}
