'use client';

import {
  CardTotal,
  CardTotal2,
  CardTotal3,
  CardTotal4,
} from '@/components/atoms/CardTotal';
import { CardInfo, CardInfo2 } from '@/components/molecules/CardInfo';
import { useMenu } from '@/contexts/MenuContext';

const DashboardPage = () => {
  const { toggleMenu } = useMenu();
  return (
    <main>
      <div className='grid grid-cols-4 gap-6 mb-6'>
        <CardTotal />
        <CardTotal2 />
        <CardTotal3 />
        <CardTotal4 />
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <CardInfo toggleMenu={toggleMenu} />
        <CardInfo2 />
      </div>
    </main>
  );
};

export default DashboardPage;
