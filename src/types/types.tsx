// App state

// Navbar Interface
export type TLangButton = {
  name: 'en' | 'ru';
};

export interface ILogo {
  heading: string;
  subheading: string;
}

interface IMenuItemContent {
  id: number;
  value: string;
  path: string;
}

export interface IMenuItem {
  id: number;
  value: string;
  content: IMenuItemContent[];
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILoginButton {
  value: string;
}

export interface IMenu {
  menu: IMenuItem[];
}

// Mobile Navbar Interface
export interface IBurgerMenu {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  menu: IMenuItem[];
  login: ILoginButton;
}

export interface IBurgerButton {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// UI Components

export interface IButtonLink {
  size: 'small' | 'large';
  theme: 'light' | 'dark';
  value: string;
  path: string;
}

export interface IHorizontalBar {
  spacer: boolean;
}
