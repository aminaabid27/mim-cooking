import { MenuItem, WeeklyMenu } from '@/types';

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

const weeklyItem = (
  menuId: string,
  menuName: string,
  day: string,
  name: string,
  price: number,
  category: 'weekly-lunch' | 'weekly-dinner'
): MenuItem => ({
  id: `${menuId}-${day.toLowerCase()}`,
  name,
  price,
  day,
  category,
  menuName,
});

export const weeklyMenus: WeeklyMenu[] = [
  {
    id: 'weekly-lunch-menu-1',
    title: 'Weekly Lunch Menu 1',
    description: 'Five day lunch plan from WEEKLY LUNCH MENU 1',
    sourceImage: 'WEEKLY LUNCH MENU 1.png',
    total: 1690,
    items: [
      weeklyItem('weekly-lunch-menu-1', 'Weekly Lunch Menu 1', 'Monday', 'Chicken Pulao + Raita', 320, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-1', 'Weekly Lunch Menu 1', 'Tuesday', 'Daal Chana + Salad', 220, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-1', 'Weekly Lunch Menu 1', 'Wednesday', 'White Sauce Pasta', 600, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-1', 'Weekly Lunch Menu 1', 'Thursday', 'Chicken Curry', 300, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-1', 'Weekly Lunch Menu 1', 'Friday', 'Sabzi Pulao / Veg Rice + Raita', 250, 'weekly-lunch'),
    ],
  },
  {
    id: 'weekly-lunch-menu-2',
    title: 'Weekly Lunch Menu 2',
    description: 'Five day lunch plan from WEEKLY LUNCH MENU 2',
    sourceImage: 'WEEKLY LUNCH MENU 2.png',
    total: 1770,
    items: [
      weeklyItem('weekly-lunch-menu-2', 'Weekly Lunch Menu 2', 'Monday', 'Chicken Qeema + 1 Roti', 360, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-2', 'Weekly Lunch Menu 2', 'Tuesday', 'Black Daal + Salad', 250, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-2', 'Weekly Lunch Menu 2', 'Wednesday', 'Biryani', 350, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-2', 'Weekly Lunch Menu 2', 'Thursday', 'Chicken Jalfrezi', 360, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-2', 'Weekly Lunch Menu 2', 'Friday', 'Daal Chawal', 450, 'weekly-lunch'),
    ],
  },
  {
    id: 'weekly-lunch-menu-3',
    title: 'Weekly Lunch Menu 3',
    description: 'Five day lunch plan from WEEKLY LUNCH MENU 3',
    sourceImage: 'WEEKLY LUNCH MENU 3.png',
    total: 2050,
    items: [
      weeklyItem('weekly-lunch-menu-3', 'Weekly Lunch Menu 3', 'Monday', 'Chinese Rice + Chicken Manchurian', 600, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-3', 'Weekly Lunch Menu 3', 'Tuesday', 'Chicken Qeema', 350, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-3', 'Weekly Lunch Menu 3', 'Wednesday', 'Daal Mash', 300, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-3', 'Weekly Lunch Menu 3', 'Thursday', 'Chicken Kofta + Anda', 350, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-3', 'Weekly Lunch Menu 3', 'Friday', 'Daal Chawal', 450, 'weekly-lunch'),
    ],
  },
  {
    id: 'weekly-lunch-menu-4',
    title: 'Weekly Lunch Menu 4',
    description: 'Five day lunch plan from WEEKLY LUNCH MENU 4',
    sourceImage: 'WEEKLY LUNCH MENU 4.png',
    total: 1560,
    items: [
      weeklyItem('weekly-lunch-menu-4', 'Weekly Lunch Menu 4', 'Monday', 'Khari Pakora', 280, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-4', 'Weekly Lunch Menu 4', 'Tuesday', 'Chicken Karahi', 360, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-4', 'Weekly Lunch Menu 4', 'Wednesday', 'Biryani', 350, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-4', 'Weekly Lunch Menu 4', 'Thursday', 'Channay', 280, 'weekly-lunch'),
      weeklyItem('weekly-lunch-menu-4', 'Weekly Lunch Menu 4', 'Friday', 'Bhindi', 290, 'weekly-lunch'),
    ],
  },
  {
    id: 'weekly-lunch-dinner-menu-1-lunch',
    title: 'Weekly Lunch + Dinner Menu 1 - Lunch',
    description: 'Seven day lunch plan from WEEKLY LUNCH + DINNER MENU 1',
    sourceImage: 'WEEKLY LUNCH + DINNER MENU 1.png',
    total: 2160,
    items: [
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Monday', 'Chicken Pulao + Raita', 350, 'weekly-lunch'),
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Tuesday', 'Daal Chana + 2 Roti + Salad', 250, 'weekly-lunch'),
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Wednesday', 'Mix Sabzi + 2 Roti', 280, 'weekly-lunch'),
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Thursday', 'Chicken Curry + 2 Roti', 320, 'weekly-lunch'),
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Friday', 'Sabzi Pulao / Veg Rice + Raita', 290, 'weekly-lunch'),
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Saturday', 'Daal Makhni + 2 Roti', 280, 'weekly-lunch'),
      weeklyItem('weekly-lunch-dinner-menu-1-lunch', 'Weekly Lunch + Dinner Menu 1 - Lunch', 'Sunday', 'Chicken Karahi + 2 Roti', 390, 'weekly-lunch'),
    ],
  },
  {
    id: 'weekly-lunch-dinner-menu-1-dinner',
    title: 'Weekly Lunch + Dinner Menu 1 - Dinner',
    description: 'Seven day dinner plan from WEEKLY LUNCH + DINNER MENU 1',
    sourceImage: 'WEEKLY LUNCH + DINNER MENU 1.png',
    total: 2230,
    items: [
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Monday', 'Daal Chawal + Salad', 450, 'weekly-dinner'),
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Tuesday', 'Aloo Qeema + 2 Roti', 350, 'weekly-dinner'),
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Wednesday', 'Sabzi (Loki/Tori) + 2 Roti', 220, 'weekly-dinner'),
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Thursday', 'Chicken Jalfrezi + 2 Roti', 320, 'weekly-dinner'),
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Friday', 'Veg Pulao + Raita', 300, 'weekly-dinner'),
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Saturday', 'Seekh Kabab + Salan + 2 Roti', 350, 'weekly-dinner'),
      weeklyItem('weekly-lunch-dinner-menu-1-dinner', 'Weekly Lunch + Dinner Menu 1 - Dinner', 'Sunday', 'Egg Curry + 2 Roti', 240, 'weekly-dinner'),
    ],
  },
];
