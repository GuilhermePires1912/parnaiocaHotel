'use client';

import { useRouter } from 'next/navigation';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuIcon from '@/icons/MenuIcon';

interface MenuProps {
  handleMenuClick: () => void;
}

const Navbar = ({ handleMenuClick }: MenuProps) => {
  const router = useRouter();

  const handleLogout = () => {
    // Limpa todo o localStorage
    localStorage.clear();

    // Redireciona para a página de login
    router.push('/auth/login');
  };

  return (
    <nav className='border-b px-6 py-3 flex items-center justify-between'>
      <div className='flex gap-2'>
        <div onClick={handleMenuClick} className='cursor-pointer'>
          <MenuIcon />
        </div>
        <div>Título</div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='cursor-pointer' onClick={handleLogout}>
          <LogoutRoundedIcon />
        </div>
        <div className='bg-gray-200 flex font-semibold items-center justify-center p-2 rounded-full'>
          USER
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
