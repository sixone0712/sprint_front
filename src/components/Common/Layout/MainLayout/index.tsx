import { useEffect, useState } from 'react';

// material-ui
import { Box, Toolbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import Drawer from './Drawer';
import Header from './Header';

// types
import { useHeaderDispatch, useHeaderState } from '@libs/context/HeaderProvider';

// ==============================|| MAIN LAYOUT ||============================== //

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
  const { drawerOpen } = useHeaderState();
  const { openDrawer } = useHeaderDispatch();

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    openDrawer(!open);
  };

  // set media wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG);
    openDrawer(!matchDownLG);
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
  }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
