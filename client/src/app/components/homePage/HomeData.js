export const sortedTabs = dataArray =>
  Array.from(new Set(dataArray.tabs.map(tab => tab.category)))
    .map(catID => dataArray.tabs.filter(tab => catID === tab.category))
    .map(array => {
      const categoryName = array[0].category
      return { catName: categoryName, catTabs: array }
    })
