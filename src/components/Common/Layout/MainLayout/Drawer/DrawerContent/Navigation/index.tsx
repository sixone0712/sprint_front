// material-ui
import {
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  ChromeOutlined,
  DashboardOutlined,
  FontSizeOutlined,
  LoginOutlined,
  ProfileOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

const menuItem = {
  items: [
    {
      id: 'group-dashboard',
      title: 'Navigation',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          icon: DashboardOutlined,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'group',
      children: [
        {
          id: 'login1',
          title: 'Login',
          type: 'item',
          url: '/login',
          icon: LoginOutlined,
          target: true,
        },
        {
          id: 'register1',
          title: 'Register',
          type: 'item',
          url: '/register',
          icon: ProfileOutlined,
          target: true,
        },
      ],
    },
    {
      id: 'utilities',
      title: 'Utilities',
      type: 'group',
      children: [
        {
          id: 'util-typography',
          title: 'Typography',
          type: 'item',
          url: '/typography',
          icon: FontSizeOutlined,
        },
        {
          id: 'util-color',
          title: 'Color',
          type: 'item',
          url: '/color',
          icon: BgColorsOutlined,
        },
        {
          id: 'util-shadow',
          title: 'Shadow',
          type: 'item',
          url: '/shadow',
          icon: BarcodeOutlined,
        },
        {
          id: 'ant-icons',
          title: 'Ant Icons',
          type: 'item',
          url: '/icons/ant',
          icon: AntDesignOutlined,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      children: [
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          icon: ChromeOutlined,
        },
        {
          id: 'documentation',
          title: 'Documentation',
          type: 'item',
          url: 'https://codedthemes.gitbook.io/mantis-react/',
          icon: QuestionOutlined,
          external: true,
          target: true,
        },
      ],
    },
  ],
};

export type MenuItemType = any;

export default Navigation;
