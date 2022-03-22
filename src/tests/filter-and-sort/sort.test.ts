import { useFilterAndSort } from '@/filter-and-sort'
import { ITestDataItem, getTestData } from '../test-data'

describe('id', () => {
  const { sort } = useFilterAndSort<ITestDataItem>()

  it('should sort by name descending', () => {
    const propertyToSortBy = 'name'
    const direction = -1
    const items = getTestData()

    const sorted = sort({
      items,
      propertyToSortBy,
      direction
    })

    expect(sorted[0].id).toEqual(3)
    expect(sorted[1].id).toEqual(2)
    expect(sorted[2].id).toEqual(1)
  })

  it('should sort by name ascending', () => {
    const propertyToSortBy = 'name'
    const direction = 1
    const items = getTestData()

    const sorted = sort({
      items,
      propertyToSortBy,
      direction
    })

    expect(sorted[0].id).toEqual(1)
    expect(sorted[1].id).toEqual(2)
    expect(sorted[2].id).toEqual(3)
  })
})
