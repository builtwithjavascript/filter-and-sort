# filter-and-sort
Filter and sort utils

[![npm version](https://badge.fury.io/js/@builtwithjavascript%2Ffilter-and-sort.svg)](https://badge.fury.io/js/@builtwithjavascript%2Ffilter-and-sort)



## code base

TypeScript



## Description

Contains utils like:
- orderBy
- filter
- filterAndOrder



## Usage



### filter example

```typescript
import { useFilterAndSort } from '@/filter-and-sort'
const { filter } = useFilterAndSort<ITestDataItem>()

const filteredData = filter({
  items: data, // an array to filter
  filterText: 'text to search',
  properties: ['name', 'address']
})
```



### orderBy example

```typescript
import { useFilterAndSort } from '@/filter-and-sort'
const { orderBy } = useFilterAndSort<ITestDataItem>()

const propertyToSortBy = 'name'
const direction = -1
const items = data // your array with the data

const sortedData = orderBy(items, propertyToSortBy, direction)
```



### filterAndOrder example

```typescript
import { useFilterAndSort } from '@/filter-and-sort'
const { filterAndOrder } = useFilterAndSort<ITestDataItem>()

const propertyToSortBy = 'name'
const direction = -1 // 1 is Ascending, -1 is Descending
const filterText = 'text to search'
const items = data // your array with the data

const filteredAndOrderedData = filterAndOrder({
  items,
  filterText,
  propertiesToFilter: ['name', 'address'],
  propertyToSortBy,
  direction
})
```
