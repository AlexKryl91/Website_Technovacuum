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

// Footer Interface
export type TCreator = {
  creator: string;
};

type TAdress = {
  line_1: string;
  line_2: string;
  line_3: string;
  line_4?: string;
};

type TPhone = {
  line_1: string;
  line_2: string;
  line_3: string;
};

export interface IAddress {
  organization: string;
  address: TAdress;
  telephone: TPhone;
  email: string;
}

export interface IMenuLinks {
  menu: IMenuItem[];
  login: ILoginButton;
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
