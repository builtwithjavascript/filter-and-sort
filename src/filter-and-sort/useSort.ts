export const useSort = <T = void>() => {
  return (args: { items: T[]; propertyToSortBy: string; direction: number }): T[] => {
    const { direction, propertyToSortBy } = args
    const items = args.items || []
    if (items.length === 0) {
      return []
    }

    // first time this might be unsorted, so default to ascending
    const sortDirection = Number(direction !== 0 ? direction : 1)

    return items.sort((itemA: T, itemB: T) => {
      const key = propertyToSortBy as keyof T
      const a: any = typeof itemA[key] !== 'undefined' ? itemA[key] : false
      const b: any = typeof itemB[key] !== 'undefined' ? itemB[key] : false
      if (a > b) {
        return 1 * sortDirection
      } else if (a < b) {
        return -1 * sortDirection
      }
      return 0
    })
  }
}
