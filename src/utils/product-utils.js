export const transformProducts = (allData, { category, priceRange, selectedSort }) => {
  if (!allData) return [];

  let result =
    category === "All Items"
      ? allData
      : allData.filter((p) => p.category === category);

  // מחיר – רק אם יש טווח תקין של 2 מספרים
  if (Array.isArray(priceRange) && priceRange.length === 2) {
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
  }

  const sortMap = {
    "Alphabetically, A-Z": (a, b) => a.title.localeCompare(b.title, "en"),
    "Alphabetically, Z-A": (a, b) => b.title.localeCompare(a.title, "en"),
    "Price, low to high": (a, b) => a.price - b.price,
    "Price, high to low": (a, b) => b.price - a.price,
    "No sort": () => 0,
  };

  const sortFunc = sortMap[selectedSort];
  if (sortFunc){
    return [...result].sort(sortFunc);
  } 
  return [...result];
};
