import { WHATSAPP_NUMBER } from '@/config/business';
import { CartItem, CustomerDetails } from '@/types';

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    frozen: 'Frozen Item',
    cooked: 'Cooked Dish',
    italian: 'Italian Favourite',
    'weekly-lunch': 'Weekly Lunch',
    'weekly-dinner': 'Weekly Dinner',
    'weekly-package': 'Weekly Menu Package',
  };
  return labels[category] || category;
};

const formatPrice = (amount: number): string => `Rs. ${amount}`;

const hasCustomerDetails = (customerDetails?: CustomerDetails): customerDetails is CustomerDetails =>
  Boolean(
    customerDetails &&
      Object.values(customerDetails).some((value) => value.trim().length > 0)
  );

export const getCartTotal = (cartItems: CartItem[]): number =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getCartItemCount = (cartItems: CartItem[]): number =>
  cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const formatOrderText = (
  cartItems: CartItem[],
  customerDetails?: CustomerDetails
): string => {
  let text = 'M&M Cooking Order\n\n';

  cartItems.forEach((item, index) => {
    const categoryLabel = getCategoryLabel(item.category);
    const dayPart = item.day ? `${item.day} ` : '';
    const subtotal = item.price * item.quantity;

    if (item.packageItems?.length) {
      text += `${index + 1}. ${categoryLabel}: ${item.name}\n`;
      text += `   Weekly menu name: ${item.menuName || item.name}\n`;
      text += '   Included meals:\n';
      item.packageItems.forEach((packageItem) => {
        const packageDay = packageItem.day ? `${packageItem.day}: ` : '';
        text += `   - ${packageDay}${packageItem.name} (${formatPrice(packageItem.price)})\n`;
      });
      text += `   Package total: ${formatPrice(item.price)}\n`;
      text += `   Quantity: ${item.quantity}\n`;
      text += `   Subtotal: ${formatPrice(subtotal)}\n`;
      return;
    }

    text += `${index + 1}. ${dayPart}${categoryLabel}: ${item.name}\n`;
    if (item.menuName) {
      text += `   Menu: ${item.menuName}\n`;
    }
    text += `   Quantity: ${item.quantity}\n`;
    text += `   Price: ${formatPrice(item.price)}\n`;
    text += `   Subtotal: ${formatPrice(subtotal)}\n`;
  });

  text += `\nTotal: ${formatPrice(getCartTotal(cartItems))}`;

  if (hasCustomerDetails(customerDetails)) {
    text += '\n\nCustomer Details';
    if (customerDetails.name.trim()) {
      text += `\nName: ${customerDetails.name.trim()}`;
    }
    if (customerDetails.phone.trim()) {
      text += `\nPhone: ${customerDetails.phone.trim()}`;
    }
    if (customerDetails.address.trim()) {
      text += `\nAddress: ${customerDetails.address.trim()}`;
    }
    if (customerDetails.notes.trim()) {
      text += `\nNotes: ${customerDetails.notes.trim()}`;
    }
  }

  return text;
};

export const getWhatsAppOrderUrl = (
  cartItems: CartItem[],
  customerDetails?: CustomerDetails
): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    formatOrderText(cartItems, customerDetails)
  )}`;

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
