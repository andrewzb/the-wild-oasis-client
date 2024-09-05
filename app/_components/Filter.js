'use client'
import { useSearchParams, useRouter, usePathname } from "next/navigation"

const filterOptions = [
    {
        key: 'all',
        title: 'All cabins'
    },
    {
        key: 'small',
        title: <>1&mdash;3</>
    },
    {
        key: 'medium',
        title: <>4&mdash;7</>
    },
    {
        key: 'large',
        title: <>8&mdash;12</>
    }
]

function Filter() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeFilter = searchParams.get('capacity') ?? 'all'

    function handleFilter(filter) {
        const params = new URLSearchParams(searchParams)
        params.set('capacity', filter)
        router.replace(`${pathname}?${params.toString()}`, {scroll: false })
    }

    return (
        <div className="border border-primary-800 flex">
            {filterOptions.map((option) => (
                <button
                    key={option.key}
                    onClick={() => handleFilter(option.key)}
                    className={`px-5 py-2 hover:bg-primary-700 
                    ${option.key === activeFilter && 'bg-primary-700 text-primary-50'}`}>
                    {option.title}
                </button>
            ))}

        </div>
    )
}

export default Filter
