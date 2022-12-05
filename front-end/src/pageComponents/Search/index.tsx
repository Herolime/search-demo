import React, { FC } from 'react'
import { AppShell } from '../../components/AppShell'
import { Results } from '../../components/Results'
import { SearchBar } from '../../components/SearchBar'
import { useSearch } from '../../hooks/useSearch'

export const Search: FC = () => {
  const fromSearch = useSearch()
  return (
        <AppShell>
            <SearchBar onSubmit={fromSearch.searchTitles} />
            {(fromSearch.searchedTitles.length > 0) && (<Results titles={fromSearch.searchedTitles}/>)}
        </AppShell>
  )
}
