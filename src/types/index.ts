export interface MenuItem {
  id: string;
  name: string;
  price: number;
  day?: string;
  category: 'lunch' | 'dinner' | 'frozen' | 'cooked' | 'italian';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
}
