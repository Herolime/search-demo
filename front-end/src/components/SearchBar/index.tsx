import { FC, FormEvent, useState } from "react"

interface SearchBarProps {
    onSubmit: (val: string) => unknown
}

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('')
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (searchValue) {
            onSubmit(searchValue)
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <input type="text" placeholder="Search for sonic titles here..." onChange={e => setSearchValue(e.target.value)} value={searchValue} />
            <button onClick={() => onSubmit(searchValue)}> Search </button>
        </form>
    )
}