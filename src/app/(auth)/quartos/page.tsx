import {
  Bedroom,
  Bedroom1,
  Bedroom2,
  Bedroom3,
  Bedroom4,
  Bedroom5,
} from '@/components/atoms/Bedroom/index';
import ButtonCreate from '@/components/atoms/ButtonCreate';

const QuartosPage = () => {
  return (
    <main>
      <div className='flex justify-between items-center mb-6 text-gray-600'>
        <div>Total de 6 quartos cadastrados</div>
        <ButtonCreate />
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <Bedroom />
        <Bedroom1 />
        <Bedroom2 />
        <Bedroom3 />
        <Bedroom4 />
        <Bedroom5 />
      </div>
    </main>
  );
};

export default QuartosPage;
