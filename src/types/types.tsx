// App state

// Navbar Interface
export interface ILogo {
  title: string;
  subtitle: string;
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
