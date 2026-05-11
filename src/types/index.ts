export type MenuCategory =
  | 'frozen'
  | 'cooked'
  | 'italian'
  | 'weekly-lunch'
  | 'weekly-dinner'
  | 'weekly-package';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  day?: string;
  category: MenuCategory;
  menuName?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  packageItems?: MenuItem[];
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

export interface WeeklyMenu {
  id: string;
  title: string;
  description: string;
  sourceImage: string;
  total: number;
  items: MenuItem[];
}
