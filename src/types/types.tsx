import { FC, SVGProps } from 'react';
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

// Dynamic Subpages Interface
type TOperation = {
  title: string;
  blocks: string[];
};

type TFeatures = {
  title: string;
  list: {
    id: string;
    item: string;
  }[];
}[];

type TCommon = {
  summary: string[];
  expand_btn: string[];
  slider_btn: string[];
};

interface ISubpageContent {
  title: string;
  description: {
    strong: string;
    text: string;
  };
  slides: ISlide[];
  operation: TOperation;
  features: TFeatures;
  state_btn: string[];
}

export interface ISubpage {
  icon: React.ReactNode;
  subpage: ISubpageContent;
  common: TCommon;
  parentState?: boolean;
  subpageState: boolean;
  setSubpageState: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface IHBarButton {
  value: string;
  visible: boolean;
  active: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}
