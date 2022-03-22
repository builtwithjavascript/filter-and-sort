import { useFilter } from './useFilter'
import { useSort } from './useSort'

export const useCombined = <T = void>() => {
  const filter = useFilter<T>()
  const sort = useSort<T>()

  return (args: {
    items: T[]
    filterText: string
    propertiesToFilter: string[]
    propertyToSortBy: string
    direction: number
  }): T[] => {
    const items = args.items || []
    const filterText = (args.filterText || '').trim()
    const propertiesToFilter = args.propertiesToFilter || []
    const propertyToSortBy = (args.propertyToSortBy || '').trim()

    let filtered = items
    if (filterText.length > 0) {
      filtered = filter({
        items,
        filterText,
        properties: propertiesToFilter
      })
    }

    return sort({
      items: filtered,
      propertyToSortBy,
      direction: args.direction
    })
  }
}
