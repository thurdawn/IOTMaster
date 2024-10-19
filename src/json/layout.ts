import { IMenuItem } from '@/interface/layout';
import { Setting } from '@element-plus/icons-vue';

export const menus: IMenuItem[] = [
  {
    path: '/',
    label: '系统管理',
    icon: Setting,
    children: [
      { path: '/system/user', label: '用户管理' },
      { path: '/system/role', label: '角色管理' },
    ],
  },
];
