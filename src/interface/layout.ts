type MenuItem = { path: string; label: string; icon?: any };

export interface IMenuItem extends MenuItem {
  children?: MenuItem[];
}
