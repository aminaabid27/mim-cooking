export interface MenuItem {
  id: string;
  name: string;
  price: number;
  day?: string;
  category: 'lunch' | 'dinner' | 'frozen' | 'cooked' | 'italian';
}

export interface SelectedItem extends MenuItem {
  selectedAt: Date;
}
