import { INavButton } from '@/types';

export const footerNav: Array<INavButton> = [
  { title: 'Menu', to: '/', icon: '/assets/icons/menu.svg' },
  { title: 'Settings', to: '/settings', icon: '/assets/icons/settings.svg' },
  { title: 'Cart', to: '/cart', icon: '/assets/icons/cart.svg' },
];

export const headerNav: Array<INavButton> = [
  { title: 'Combo', icon: '/assets/icons/combo.svg' },
  { title: 'Chicken Sandwiches & Nuggets', icon: '/assets/icons/chicken.svg' },
  { title: 'Hamburgers', icon: '/assets/icons/hamburgers.svg' },
  { title: 'Fries & Sides', icon: '/assets/icons/fries.svg' },
  { title: 'Drinks', icon: '/assets/icons/drinks.svg' },
  { title: 'Sweets & Treats', icon: '/assets/icons/sweets.svg' },
];
