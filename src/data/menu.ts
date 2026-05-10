import { MenuItem } from '@/types';

export const frozenItems: MenuItem[] = [
  { id: 'frozen-1', name: 'Chicken Spring Veg Rolls (12 pcs)', price: 600, category: 'frozen' },
  { id: 'frozen-2', name: 'Chicken Keema Samosa (12 pcs)', price: 710, category: 'frozen' },
  { id: 'frozen-3', name: 'Chicken Shami Kabab (12 pcs)', price: 650, category: 'frozen' },
  { id: 'frozen-4', name: 'Chicken Seekh Kabab (12 pcs)', price: 790, category: 'frozen' },
  { id: 'frozen-5', name: 'Chicken Chapli Kabab (12 pcs)', price: 820, category: 'frozen' },
  { id: 'frozen-6', name: 'Chicken Kofta (12 pcs)', price: 600, category: 'frozen' },
  { id: 'frozen-10', name: 'Beef Kofta (12 pcs)', price: 900, category: 'frozen' },
  { id: 'frozen-7', name: 'Beef Keema Samosa (12 pcs)', price: 780, category: 'frozen' },
  { id: 'frozen-8', name: 'Beef Shami Kabab (12 pcs)', price: 800, category: 'frozen' },
  { id: 'frozen-9', name: 'Aloo Samosa (12 pcs)', price: 450, category: 'frozen' },
];

export const cookedDishes: MenuItem[] = [
  { id: 'cooked-1', name: 'Biryani (1 kg)', price: 1720, category: 'cooked' },
  { id: 'cooked-2', name: 'Daal Chawal', price: 470, category: 'cooked' },
  { id: 'cooked-3', name: 'Chicken Karahi (Half)', price: 1419, category: 'cooked' },
  { id: 'cooked-4', name: 'Chicken Karahi (Full)', price: 2019, category: 'cooked' },
  { id: 'cooked-5', name: 'Mutton Karahi (Full)', price: 3219, category: 'cooked' },
];

export const italianFavourites: MenuItem[] = [
  { id: 'italian-1', name: 'Spaghetti (Small)', price: 440, category: 'italian' },
  { id: 'italian-2', name: 'Spaghetti (Large)', price: 600, category: 'italian' },
  { id: 'italian-3', name: 'Macaroni (Small)', price: 450, category: 'italian' },
  { id: 'italian-4', name: 'Macaroni (Large)', price: 610, category: 'italian' },
  { id: 'italian-5', name: 'Lasagna (Small)', price: 670, category: 'italian' },
  { id: 'italian-6', name: 'Lasagna (Large)', price: 900, category: 'italian' },
  { id: 'italian-7', name: 'White Sauce Pasta (Small)', price: 600, category: 'italian' },
  { id: 'italian-8', name: 'White Sauce Pasta (Large)', price: 880, category: 'italian' },
  { id: 'italian-9', name: 'Red Sauce Pasta (Small)', price: 570, category: 'italian' },
  { id: 'italian-10', name: 'Red Sauce Pasta (Large)', price: 880, category: 'italian' },
  { id: 'italian-11', name: 'Loaded Fries (Small)', price: 580, category: 'italian' },
  { id: 'italian-12', name: 'Loaded Fries (Large)', price: 850, category: 'italian' },
  { id: 'italian-13', name: 'Chicken Bread (Small)', price: 950, category: 'italian' },
  { id: 'italian-14', name: 'Chicken Bread (Large)', price: 1550, category: 'italian' },
];

export const lunchMenu: MenuItem[] = [
  { id: 'lunch-1', name: 'Chicken Pulao + Raita', price: 350, day: 'Monday', category: 'lunch' },
  { id: 'lunch-2', name: 'Daal Chana + 2 Roti + Salad', price: 250, day: 'Tuesday', category: 'lunch' },
  { id: 'lunch-3', name: 'Mix Sabzi + 2 Roti', price: 280, day: 'Wednesday', category: 'lunch' },
  { id: 'lunch-4', name: 'Chicken Curry + 2 Roti', price: 320, day: 'Thursday', category: 'lunch' },
  { id: 'lunch-5', name: 'Sabzi Pulao / Veg Rice + Raita', price: 290, day: 'Friday', category: 'lunch' },
  { id: 'lunch-6', name: 'Daal Makhni + 2 Roti', price: 280, day: 'Saturday', category: 'lunch' },
  { id: 'lunch-7', name: 'Chicken Karahi + 2 Roti', price: 390, day: 'Sunday', category: 'lunch' },
];

export const dinnerMenu: MenuItem[] = [
  { id: 'dinner-1', name: 'Daal Chawal + Salad', price: 450, day: 'Monday', category: 'dinner' },
  { id: 'dinner-2', name: 'Aloo Qeema + 2 Roti', price: 350, day: 'Tuesday', category: 'dinner' },
  { id: 'dinner-3', name: 'Sabzi (Loki/Tori) + 2 Roti', price: 220, day: 'Wednesday', category: 'dinner' },
  { id: 'dinner-4', name: 'Chicken Jalfrezi + 2 Roti', price: 320, day: 'Thursday', category: 'dinner' },
  { id: 'dinner-5', name: 'Veg Pulao + Raita', price: 300, day: 'Friday', category: 'dinner' },
  { id: 'dinner-6', name: 'Seekh Kabab + Salan + 2 Roti', price: 350, day: 'Saturday', category: 'dinner' },
  { id: 'dinner-7', name: 'Egg Curry + 2 Roti', price: 240, day: 'Sunday', category: 'dinner' },
];
