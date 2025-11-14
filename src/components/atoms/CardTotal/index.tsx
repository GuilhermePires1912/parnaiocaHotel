import BedIcon from '@mui/icons-material/Bed';
import KingBedIcon from '@mui/icons-material/KingBed';
import HailIcon from '@mui/icons-material/Hail';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export const CardTotal = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between mb-8'>
        <div>Quartos Disponíveis</div>
        <div>{<BedIcon />}</div>
      </div>

      <div>
        <span className='text-2xl text-green-900 font-bold'>8</span>
        <div></div>
        <div style={{ fontSize: '9px', color: '#B0B0B0' }}>
          QUARTOS LIVRES PARA RESERVA
        </div>
      </div>
    </div>
  );
};
export const CardTotal2 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between mb-8'>
        <div>Quartos Reservados</div>
        <div>{<KingBedIcon />}</div>
      </div>

      <div>
        <span className='text-2xl font-bold text-blue-600'>12</span>
        <div></div>
        <div style={{ fontSize: '9px', color: '#B0B0B0' }}>
          QUARTOS OCUPADOS ATUALMENTE
        </div>
      </div>
    </div>
  );
};

export const CardTotal3 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between mb-8'>
        <div>Hospedes Hospedados</div>
        <div>{<HailIcon />}</div>
      </div>

      <div>
        <span className='text-2xl font-bold text-orange-600'>28</span>
        <div></div>
        <div style={{ fontSize: '9px', color: '#B0B0B0' }}>
          HÓSPEDES ATUALMENTE NA POUSADA
        </div>
      </div>
    </div>
  );
};
export const CardTotal4 = () => {
  return (
    <div className='flex flex-col p-6 rounded-xl border border-gray-200'>
      <div className='flex justify-between mb-8'>
        <div>TOTAL DE USUÁRIOS</div>
        <div>{<PersonAddAltIcon />}</div>
      </div>

      <div>
        <span className='text-2xl font-bold text-purple-600'>5</span>
        <div></div>
        <div style={{ fontSize: '9px', color: '#B0B0B0' }}>
          FUNCIONÁRIOS CADASTRADOS
        </div>
      </div>
    </div>
  );
};
