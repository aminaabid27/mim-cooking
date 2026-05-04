import { MenuItem } from '@/types';

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    lunch: 'Lunch',
    dinner: 'Dinner',
    frozen: 'Frozen Item',
    cooked: 'Cooked Dish',
    italian: 'Italian Favourite',
  };
  return labels[category] || category;
};

export const formatOrderText = (selectedItems: MenuItem[]): string => {
  let text = 'M&M Cooking Order\n\n';

  selectedItems.forEach((item, index) => {
    const categoryLabel = getCategoryLabel(item.category);
    const dayPart = item.day ? `${item.day} ` : '';
    text += `${index + 1}. ${dayPart}${categoryLabel}: ${item.name} — Rs. ${item.price}\n`;
  });

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  text += `\nTotal: Rs. ${total}`;

  return text;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
