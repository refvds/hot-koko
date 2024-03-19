import { INavButton } from '@/types';

export const footerNav: Array<INavButton> = [
  { title: 'Menu', to: '/', icon: '/assets/icons/menu.svg' },
  { title: 'Settings', to: '/settings', icon: '/assets/icons/settings.svg' },
  { title: 'Cart', to: '/cart', icon: '/assets/icons/cart.svg' },
];

export const headerNav: Array<INavButton> = [
  { title: 'Combo', icon: './assets/icons/combo.svg' },
  { title: 'Humbergers', icon: '/assets/icons/burger.svg' },
  { title: 'Chiken sandwiches & nuggets', icon: '/assets/icons/sandwitch.svg' },
  { title: 'Fries & sides', icon: '/assets/icons/fries.svg' },
  { title: 'Drinks', icon: '/assets/icons/drinks.svg' },
  { title: 'Desserts', icon: '/assets/icons/dessert.svg' },
];
