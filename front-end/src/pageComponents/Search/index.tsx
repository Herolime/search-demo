import { AppShell } from "../../components/AppShell"
import { Results } from "../../components/Results"
import { SearchBar } from "../../components/SearchBar"
import { useSearch } from "../../hooks/useSearch"

export const Search = () => {
    const fromSearch = useSearch()
    return (
        <AppShell>
            <SearchBar onSubmit={fromSearch.searchTitles} />
            {fromSearch.searchTitles.length && (<Results/>)}
        </AppShell>
    )
}