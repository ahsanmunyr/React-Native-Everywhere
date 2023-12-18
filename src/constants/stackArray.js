import {Icons} from '../components/Icons';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerScreen from '../screens/DrawerScreen';
import CategoryScreen from '../screens/CategoryScreen';
import RefundScreen from '../screens/RefundScreen';
import DishesScreen from '../screens/DishesScreen';
import KitchenOrderScreen from '../screens/KitchenOrderScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import SettingScreen from '../screens/SettingsScreen';

export const ScreensArray = [
  {
    route: 'Dashboard',
    label: 'Dashboard',
    type: Icons.Feather,
    icon: 'home',
    component: DashboardScreen,
    notification: 0,
  },
  {
    route: 'Categories',
    label: 'Categories',
    type: Icons.Feather,
    icon: 'inbox',
    component: CategoryScreen,
    notification: 9,
  },
  {
    route: 'Refund',
    label: 'Refund',
    type: Icons.Feather,
    icon: 'calendar',
    component: RefundScreen,
    notification: 4,
  },
  {
    route: 'Dishes',
    label: 'Dishes',
    type: Icons.Feather,
    icon: 'layers',
    component: DishesScreen,
    notification: 0,
  },
  {
    route: 'KitchenOrder',
    label: 'Kitchen Orders',
    type: Icons.Feather,
    icon: 'pie-chart',
    component: KitchenOrderScreen,
    notification: 2,
  },
  {
    route: 'Transactions',
    label: 'Transactions',
    type: Icons.AntDesign,
    icon: 'filetext1',
    component: TransactionsScreen,
    notification: 0,
  },
  {
    route: 'Settings',
    label: 'Settings',
    type: Icons.Feather,
    icon: 'settings',
    component: SettingScreen,
    notification: 0,
  },
];
