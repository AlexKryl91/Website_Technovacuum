// Navbar Interface

export interface ILogo {
  maintext: string;
  subtext: string;
}

interface IMenuItemContent {
  id: number;
  name: string;
  path: string;
}

export interface IMenuItem {
  id: number;
  name: string;
  content: IMenuItemContent[];
}

export interface ILoginButton {
  name: string;
}

export interface IMenu {
  menu: IMenuItem[];
}
