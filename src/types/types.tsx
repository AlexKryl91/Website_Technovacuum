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

type TAdress = string[];
type TPhone = string[];

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

// Carousel Slider Interface
interface IDiagramMap {
  caption: string;
  description: {
    block1: string[];
    block2: string[];
  };
}

export interface ISlide {
  id: number;
  img: string;
  img_alt: string;
  text: IDiagramMap;
  width?: string;
}

export interface ICarousel {
  slides: ISlide[];
  btn_label: string[];
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
