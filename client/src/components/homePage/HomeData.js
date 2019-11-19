export const sortedTabs = dataArray => Array.from(
  new Set(dataArray.tabs.map(tab => tab.category_id))
)
  .map(catID => dataArray.tabs.filter(tab => catID === tab.category_id))
  .map(array => {
    const categoryName = array[0].category
    const tabNameArray = array.map(tab => tab.name)
    return {
      catName: categoryName,
      tabName: tabNameArray,
    }
  })
