'use client';

export const CardInfo = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between mb-8'>
        <div>RESERVAS RECENTES</div>
      </div>

      <div className='flex justify-between pb-2 mb-2 border-b border-gray-200'>
        <div>
          <div className='font-bold'>João Silva</div>
          <div>Suite Master</div>
        </div>

        <div>
          <div className='font-bold'>R$ 350,00</div>
          <div>2024-01-15</div>
        </div>
      </div>

      <div className='flex justify-between pb-2 mb-2 border-b border-gray-200'>
        <div>
          <div className='font-bold'>Maria Silva</div>
          <div>Quarto duplo</div>
        </div>

        <div>
          <div className='font-bold'>R$ 280,00</div>
          <div>2024-01-13</div>
        </div>
      </div>
      <div className='flex justify-between pb-2 mb-2 border-b border-gray-200'>
        <div>
          <div className='font-bold'>Carlos Oliveira</div>
          <div>Chalé Família</div>
        </div>

        <div>
          <div className='font-bold'>R$ 420,00</div>
          <div>2024-01-16</div>
        </div>
      </div>
      {/*
      <button
        onClick={() => toggleMenu()}
        className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-100'
      >
        Abrir/Fechar Menu
      </button>*/}
    </div>
  );
};
export const CardInfo2 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between mb-8'>
        <div>CHECK-OUT HOJE</div>
      </div>

      <div className='flex justify-between pb-2 mb-2 border-b border-gray-200'>
        <div>
          <div className='font-bold'>Ana Costa</div>
          <div>Quarto Standard</div>
        </div>

        <div>
          <div className='font-bold'>11:00</div>
          <div>Check-out</div>
        </div>
      </div>

      <div className='flex justify-between pb-2 mb-2 border-b border-gray-200'>
        <div>
          <div className='font-bold'>Pedro Lima</div>
          <div>Suíte Luxo</div>
        </div>

        <div>
          <div className='font-bold'>10:30</div>
          <div>Check-out</div>
        </div>
      </div>
      <div className='flex justify-between pb-2 mb-2 border-b border-gray-200'>
        <div>
          <div className='font-bold'>Fernanda Rocha</div>
          <div>Chalé Romântico</div>
        </div>

        <div>
          <div className='font-bold'>12:00</div>
          <div>Check-out</div>
        </div>
      </div>
      {/*
      <button
        onClick={() => toggleMenu()}
        className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-100'
      >
        Abrir/Fechar Menu
      </button>*/}
    </div>
  );
};
