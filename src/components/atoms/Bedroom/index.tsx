import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

export const Bedroom = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Suíte Master</div>
        <div className='text-white bg-black p-1 rounded-xl'>Disponível</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 350,00</div>

      <div className='mb-1 text-gray-600'>
        Suíte luxuosa com vista para o mar
      </div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 2 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Bedroom1 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Quarto Duplo</div>
        <div className='text-white bg-red-600 p-1 rounded-xl'>Ocupado</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 280,00</div>

      <div className='mb-1 text-gray-600'>Quarto confortável para casal</div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 2 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Bedroom2 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Chalé Família</div>
        <div className='text-white bg-black p-1 rounded-xl'>Disponível</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 420,00</div>

      <div className='mb-1 text-gray-600'>
        Chalé espaçoso ideal para famílias
      </div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 4 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Bedroom3 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Quarto Standard</div>
        <div className='text-white bg-black p-1 rounded-xl'>Disponível</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 350,00</div>

      <div className='mb-1 text-gray-600'>Quarto simples e aconchegante</div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 1 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Bedroom4 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Suíte Luxo</div>
        <div className='text-white bg-red-600 p-1 rounded-xl'>Ocupado</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 350,00</div>

      <div className='mb-1 text-gray-600'>
        Suíte luxuosa com vista para o mar
      </div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 2 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Bedroom5 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Suíte Master</div>
        <div className='text-white bg-black p-1 rounded-xl'>Disponível</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 350,00</div>

      <div className='mb-1 text-gray-600'>
        Suíte luxuosa com vista para o mar
      </div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 2 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Bedroom6 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold'>Chalé Romântico</div>
        <div className='text-white bg-black p-1 rounded-xl'>Disponível</div>
      </div>

      <div className='mb-8 text-green-900 font-bold'>R$ 350,00</div>

      <div className='mb-1 text-gray-600'>
        Chalé íntimo perfeito para lua de mel
      </div>

      <div className='flex gap-2 font-semibold mb-2'>
        <div>{<PeopleIcon />}</div>
        <div>Capacidade: 2 pessoas</div>
      </div>

      <div className='flex gap-2'>
        <div className='flex gap-2 w-full'>
          <button
            className={
              'flex justify-center items-center gap-2 w-full border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-sm'
            }
          >
            <span className='h-5'>
              {<EditIcon className='h-3' />} <span>Editar</span>{' '}
            </span>
          </button>
          <button className='flex items-center gap-2 border border-gray-200 hover:bg-gray-200 py-1 px-2 rounded-xl text-red-500'>
            <div>{<CancelIcon />}</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};
