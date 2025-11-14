import { MenuItem } from './type';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BedroomChildRoundedIcon from '@mui/icons-material/BedroomChildRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import AirlineSeatIndividualSuiteRoundedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteRounded';

export const menuItems: MenuItem[] = [
  {
    path: '/dashboard',
    icon: DashboardRoundedIcon,
    label: 'Dashboard',
  },
  {
    path: '/quartos',
    icon: BedroomChildRoundedIcon,
    label: 'Quartos',
  },
  {
    path: '/usuarios',
    icon: PeopleRoundedIcon,
    label: 'Usuários',
  },
  {
    path: '/hospedes',
    icon: AirlineSeatIndividualSuiteRoundedIcon,
    label: 'Hóspedes',
  },
  {
    path: '/reservas',
    icon: Brightness2RoundedIcon,
    label: 'Reservas',
  },
];
