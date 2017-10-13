const hasUnit = (unit: string): boolean => /^px|em|rem|%|vh|vmin/.test(unit)

export default hasUnit
