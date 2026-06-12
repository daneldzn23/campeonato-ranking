import React from 'react'
import './App.css'
import IcAbrirAbaixo from './ic-abrir_abaixo.svg'

const style = document.createElement('style');
style.textContent = `
  .live-indicator {
    box-shadow: 0 0 8px rgba(82, 234, 148, 0.6);
  }
`;
document.head.appendChild(style);
import {
  IcCampeonato,
  IcChevronPixelCima,
  IcRanking,
  IcRanking2,
  IcRanking3,
  IcChevronLineBaixo,
  IcLupa,
  IcFecharPequeno,
  IcMinimizarMini,
  IcMaximizarMini,
  IcMenuContexto,
  IcUsuario,
  IcTrofeuUltraCup,
} from '@dantunes23/design-system'

// --- Mock ranking data ---
const PARTICIPANTS = [
  { rank: 1,  name: "Rafael Moura",     pnl: "R$ 140.167,00", isUser: false },
  { rank: 2,  name: "Camila Rocha",     pnl: "R$ 125.300,00", isUser: false },
  { rank: 3,  name: "Bruno Almeida",    pnl: "R$ 107.785,00", isUser: false },
  { rank: 4,  name: "Marina Lopes",     pnl: "R$ 107.725,00", isUser: false },
  { rank: 5,  name: "Thiago Martins",   pnl: "R$ 94.936,50",  isUser: false },
  { rank: 6,  name: "Larissa Nunes",    pnl: "R$ 90.710,30",  isUser: false },
  { rank: 7,  name: "Felipe Castro",    pnl: "R$ 87.355,80",  isUser: false },
  { rank: 8,  name: "Juliana Freitas",  pnl: "R$ 85.104,20",  isUser: false },
  { rank: 9,  name: "Gustavo Ribeiro",  pnl: "R$ 82.492,75",  isUser: true, account: '987654321' },
  { rank: 10, name: "Patricia Gomes",   pnl: "R$ 79.820,60",  isUser: false },
  { rank: 11, name: "Daniel Azevedo",   pnl: "R$ 63.028,40",  isUser: false },
  { rank: 12, name: "Beatriz Cardoso",  pnl: "R$ 61.410,00",  isUser: false },
  { rank: 13, name: "Lucas Ferreira",   pnl: "R$ 59.791,60",  isUser: false },
  { rank: 14, name: "Carolina Dias",    pnl: "R$ 58.525,55",  isUser: false },
  { rank: 15, name: "Mateus Barbosa",   pnl: "R$ 56.907,15",  isUser: false },
  { rank: 16, name: "Renata Moreira",   pnl: "R$ 56.715,50",  isUser: false },
  { rank: 17, name: "Andre Farias",     pnl: "R$ 55.449,45",  isUser: false },
  { rank: 18, name: "Isabela Teixeira", pnl: "R$ 53.831,05",  isUser: false },
  { rank: 19, name: "Vitor Campos",     pnl: "R$ 52.212,65",  isUser: false },
  { rank: 20, name: "Gustavo Ribeiro",   pnl: "R$ 50.946,60",  isUser: true, account: '000265899' },
  { rank: 21, name: "Eduardo Cunha",    pnl: "R$ 50.754,95",  isUser: false },
  { rank: 22, name: "Natalia Vieira",   pnl: "R$ 49.136,55",  isUser: false },
  { rank: 23, name: "Gabriel Santos",   pnl: "R$ 48.520,30",  isUser: false },
  { rank: 24, name: "Fernanda Lima",    pnl: "R$ 47.305,15",  isUser: false },
  { rank: 25, name: "Ricardo Pereira",  pnl: "R$ 46.890,75",  isUser: false },
  { rank: 26, name: "Sophia Costa",     pnl: "R$ 45.675,40",  isUser: false },
  { rank: 27, name: "Michel Oliveira",  pnl: "R$ 44.820,85",  isUser: false },
  { rank: 28, name: "Amanda Silva",     pnl: "R$ 43.605,50",  isUser: false },
  { rank: 29, name: "Lucas Gomes",      pnl: "R$ 42.790,20",  isUser: false },
  { rank: 30, name: "Mariana Rocha",    pnl: "R$ 41.574,65",  isUser: false },
  { rank: 31, name: "Victor Alves",     pnl: "R$ 40.759,30",  isUser: false },
  { rank: 30, name: "Mariana Rocha",    pnl: "R$ 41.574,65",  isUser: false },
];


// --- Sub-components ---

function ChampionshipIcon({ size = 16 }) {
  return (
    <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <IcCampeonato style={{ width: size, height: size }} />
    </div>
  );
}

function RankBadge({ rank }) {
  if (rank === 1) {
    return (
      <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <IcRanking style={{ width: 16, height: 16 }} />
      </div>
    );
  }

  if (rank === 2) {
    return (
      <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <IcRanking2 style={{ width: 16, height: 16 }} />
      </div>
    );
  }

  if (rank === 3) {
    return (
      <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <IcRanking3 style={{ width: 16, height: 16 }} />
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden', flexShrink: 0 }}>
      <p style={{
        position: 'absolute',
        left: 8,
        top: 4,
        transform: 'translateX(-50%)',
        width: 16,
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 600,
        fontSize: 11,
        lineHeight: '12px',
        letterSpacing: -0.121,
        color: 'var(--typography-suave-1)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}>
        {rank}
      </p>
    </div>
  );
}

function rowBackground(rank) {
  if (rank === 1) return 'linear-gradient(269.99deg, rgba(194,160,53,0) 0%, rgba(194,160,53,0.1) 100%), linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)';
  if (rank === 2) return 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(270deg, rgba(15,98,254,0) 0%, rgba(15,98,254,0.1) 100%)';
  if (rank === 3) return 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(270deg, rgba(229,132,22,0) 0%, rgba(229,132,22,0.1) 100%)';
  return rank % 2 === 0 ? 'var(--table-default-bg-line-even)' : 'var(--table-default-bg-line-odd)';
}

function RankingRow({ participant, version }) {
  const { rank, name, pnl, isUser, account } = participant;
  const isTop3 = rank <= 3;
  const displayName = version === 'v3' && rank === 9 ? 'Aline Ribeiro' : name;
  let displayIsUser = version === 'v3' && rank === 9 ? false : isUser;
  if (version === 'v1.1' && rank === 20) displayIsUser = false;
  const isBold = isTop3 || displayIsUser;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexShrink: 0,
      background: displayIsUser && !isTop3 ? '#3a3a3a' : rowBackground(rank),
      minHeight: 32,
      borderLeft: displayIsUser && !isTop3 ? '3px solid rgba(15, 98, 254, 0.8)' : 'none',
      paddingLeft: displayIsUser && !isTop3 ? '5px' : '8px',
    }}>
      {/* Rank cell */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '0 8px',
        flexShrink: 0,
      }}>
        <RankBadge rank={rank} />
      </div>

      {/* Name cell */}
      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', minWidth: 0 }}>
        <div style={{ display: 'flex', flex: '1 0 0', gap: 8, height: '100%', alignItems: 'center', minWidth: 0, padding: '0 4px' }}>
          <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: 6, height: 32, justifyContent: 'center', minWidth: 0, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', overflow: 'hidden', width: '100%' }}>
              <span style={{
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: isBold ? 700 : 400,
                fontSize: 11.281,
                lineHeight: '11.281px',
                color: 'var(--typography-base)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {displayName}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PnL cell */}
      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', minWidth: 90 }}>
        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', height: '100%', alignItems: 'flex-end', justifyContent: 'center', minWidth: 90, padding: '0 4px' }}>
          <span style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '12px',
            letterSpacing: -0.132,
            color: 'var(--typography-positivo)',
            whiteSpace: 'nowrap',
          }}>
            {pnl}
          </span>
        </div>
      </div>
    </div>
  );
}

function Subheader({ searchTerm, onSearchChange, isDrawerOpen, onDrawerToggle, version }) {
  const [isSearching, setIsSearching] = React.useState(false);
  const searchInputRef = React.useRef(null);

  React.useEffect(() => {
    if (isSearching && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearching]);

  return (
    <div style={{
      background: 'var(--windown-bg-body)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      gap: 8,
      height: 30,
      alignItems: 'center',
      padding: '0 4px',
      width: '100%',
      flexShrink: 0,
      overflow: 'hidden',
    }}>
      {/* Account selector */}
      <button style={{
        backdropFilter: 'blur(10px)',
        background: 'var(--input-bg-input-windown)',
        border: '1px solid var(--input-border-input-windown)',
        padding: '0 4px',
        cursor: 'pointer',
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        height: 22,
        borderRadius: 4,
        flexShrink: 0,
        overflow: 'hidden',
      }}>
        {/* Trophy Icon */}
        <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <IcTrofeuUltraCup style={{ width: 16, height: 16 }} />
        </div>

        {/* Text Content */}
        <div style={{
          display: 'flex',
          flex: '1 0 0',
          gap: 4,
          alignItems: 'center',
          minWidth: 0,
          fontSize: 11,
          fontFamily: "'Tahoma', sans-serif",
          color: 'var(--typography-base)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          <span style={{ fontWeight: 700, flexShrink: 0 }}>Sim</span>
          <span style={{ fontWeight: 400, flexShrink: 0 }}>987654321</span>
          <span style={{ fontWeight: 400, flexShrink: 0 }}>-</span>
          <span style={{ fontWeight: 400, flex: '1 0 0', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>Gustavo Ribeiro</span>
        </div>

        {/* Chevron Icon */}
        <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <IcChevronLineBaixo style={{ width: 16, height: 16 }} />
        </div>
      </button>

      {/* Search button or input wrapper */}
      {!isSearching ? (
        <button
          onClick={() => setIsSearching(true)}
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 22,
            height: 22,
            borderRadius: 4,
            flexShrink: 0,
            transition: 'background-color 150ms ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <IcLupa style={{ width: 16, height: 16 }} />
        </button>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flex: '1 0 0',
          minWidth: 0,
          gap: 6,
          background: '#464646',
          border: '1px solid #555555',
          borderRadius: 4,
          padding: '0 6px',
          height: 22,
        }}>
          <IcLupa style={{ width: 16, height: 16, flexShrink: 0 }} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onBlur={() => setIsSearching(false)}
            style={{
              flex: '1 0 0',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#FFFFFF',
              fontFamily: "'Tahoma', sans-serif",
              fontSize: 11,
              minWidth: 0,
            }}
          />
        </div>
      )}

      {/* Spacer */}
      <div style={{ flex: '1 0 0' }} />

      {/* Drawer toggle button - far right */}
      {(version === 'v1' || version === 'v1.1') && (
        <button
          onClick={onDrawerToggle}
          style={{
            background: isDrawerOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            border: 'none',
            padding: isDrawerOpen ? 3 : 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 22,
            height: 22,
            flexShrink: 0,
            borderRadius: 4,
          }}
        >
          <img src={IcAbrirAbaixo} style={{ width: 16, height: 16 }} alt="drawer toggle" />
        </button>
      )}
    </div>
  );
}

function TableHeader() {
  return (
    <div style={{
      background: 'var(--windown-bg-body)',
      display: 'flex',
      height: 16,
      alignItems: 'center',
      width: '100%',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      zIndex: 9,
    }}>
      {/* # column */}
      <div style={{ display: 'flex', height: 16, alignItems: 'center', justifyContent: 'center', padding: '0 8px', flexShrink: 0, position: 'relative', width: 32 }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>#</span>
        <div style={{ position: 'absolute', right: 0, top: 2.5, width: 1, height: 10, background: '#474747', opacity: 0.5 }} />
      </div>

      {/* Participante column */}
      <div style={{ display: 'flex', flex: '1 0 0', height: 16, alignItems: 'center', justifyContent: 'center', padding: '0 8px', minWidth: 0, position: 'relative' }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>Participante</span>
        <div style={{ position: 'absolute', right: -0.5, top: 2.5, width: 1, height: 10, background: '#474747', opacity: 0.5 }} />
      </div>

      {/* PnL column */}
      <div style={{ display: 'flex', flex: '1 0 0', height: 15, alignItems: 'center', justifyContent: 'center', padding: '0 8px', minWidth: 90, position: 'relative' }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>PnL</span>
        <div style={{ position: 'absolute', right: -0.5, top: 2.5, width: 1, height: 10, background: '#474747', opacity: 0.5 }} />
      </div>
    </div>
  );
}

function InfoSubheader({ userRank, totalParticipants }) {
  const [timeRemaining, setTimeRemaining] = React.useState({
    days: 3,
    hours: 13,
    minutes: 23,
    seconds: 45,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          return prev;
        }

        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: 'var(--windown-bg-body)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      gap: 8,
      height: 30,
      alignItems: 'center',
      padding: '0 4px',
      width: '100%',
      flexShrink: 0,
      overflow: 'hidden',
      justifyContent: 'space-between',
    }}>
      {/* Left: Position Pill */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        background: '#202020',
        padding: '4px 8px',
        borderRadius: 4,
        flexShrink: 0,
      }}>
        {/* Live indicator */}
        <div className="live-indicator" style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#52ea94',
          flexShrink: 0,
        }} />
        <span style={{
          fontFamily: 'Tahoma, sans-serif',
          fontWeight: 400,
          fontSize: 11,
          color: 'var(--typography-suave-2)',
          whiteSpace: 'nowrap',
        }}>
          Sua Posição:
        </span>
        <strong style={{
          fontFamily: 'Tahoma, sans-serif',
          fontWeight: 700,
          fontSize: 11,
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}>
          {userRank} de {totalParticipants}
        </strong>
      </div>

      {/* Right: Time Remaining Pill */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        background: '#202020',
        padding: '4px 8px',
        borderRadius: 4,
        flexShrink: 0,
      }}>
        {/* Clock icon */}
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          <path d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1ZM6 5H8V6H5V2H6V5Z" fill="#DFDFDF"/>
        </svg>
        <span style={{
          fontFamily: 'Tahoma, sans-serif',
          fontWeight: 400,
          fontSize: 11,
          color: 'var(--typography-suave-2)',
          whiteSpace: 'nowrap',
        }}>
          Encerra em:
        </span>
        <span style={{
          fontFamily: 'Tahoma, sans-serif',
          fontWeight: 400,
          fontSize: 11,
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}>
          {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m
        </span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{
      background: 'var(--windown-bg-header-select)',
      borderBottom: '1px solid var(--windown-bg-header)',
      display: 'flex',
      gap: 4,
      height: 26,
      alignItems: 'center',
      paddingLeft: 8,
      paddingRight: 2,
      width: '100%',
      flexShrink: 0,
    }}>
      {/* Left: champion icon + title */}
      <div style={{ display: 'flex', flex: '1 0 0', gap: 4, height: '100%', alignItems: 'center', minWidth: 0 }}>
        <div style={{
          display: 'flex',
          height: 22,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: 4,
          flexShrink: 0,
          background: 'rgba(255, 255, 255, 0)',
          border: '1px solid rgba(255, 255, 255, 0)',
          padding: '2px 5px',
          gap: 0
        }}>
          <ChampionshipIcon />
          <IcChevronPixelCima style={{ width: 16, height: 16 }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px', flexShrink: 0 }}>
          <span style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '22px',
            color: 'var(--typography-base)',
            whiteSpace: 'nowrap',
          }}>
            Campeonato NeloCup - Ranking Ao Vivo
          </span>
        </div>
      </div>

      {/* Right: window controls */}
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'flex-end', flexShrink: 0, gap: 0 }}>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcMenuContexto style={{ width: 16, height: 16 }} /></button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcMinimizarMini style={{ width: 16, height: 16 }} /></button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcMaximizarMini style={{ width: 16, height: 16 }} /></button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcFecharPequeno style={{ width: 16, height: 16 }} /></button>
      </div>
    </div>
  );
}

function MinhasPosicoesDrawerV4({ position, isOpen, onToggle }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, rgb(51, 51, 51) 0%, rgb(51, 51, 51) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      flexShrink: 0,
      padding: '4px',
      gap: '4px',
    }}>
      <button
        onClick={onToggle}
        style={{
          background: 'transparent',
          border: 'none',
          padding: '4px 4px 4px 4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--typography-base)',
          fontFamily: "'Segoe UI', sans-serif",
          gap: '8px',
        }}
      >
        <span style={{ flex: '1 0 0', textAlign: 'left' }}>Minhas Posições</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
          <IcChevronLineBaixo style={{ width: 16, height: 16 }} />
        </div>
      </button>
      {isOpen && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px',
          width: '100%',
          minHeight: '32px',
          background: 'var(--windown-bg-header-select)',
          borderRadius: '4px',
          fontSize: 11,
          fontFamily: "'Tahoma', sans-serif",
          gap: '8px',
        }}>
          <span style={{ fontWeight: 600, color: '#c2c2c2', fontSize: 11, minWidth: 20 }}>{position.position}</span>
          <span style={{ fontWeight: 600, color: 'var(--typography-base)', fontSize: 11, flex: '0 1 auto' }}>{position.name}</span>
          <span style={{ fontWeight: 700, color: position.pnl.includes('-') ? 'var(--typography-negativo)' : 'var(--typography-positivo)', fontSize: 12, marginLeft: 'auto' }}>{position.pnl}</span>
        </div>
      )}
    </div>
  );
}

function MinhasPosicoesDrawer({ userPositions, isOpen, onToggle }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, rgb(51, 51, 51) 0%, rgb(51, 51, 51) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      flexShrink: 0,
      padding: isOpen ? '4px' : '0px',
      gap: isOpen ? '4px' : '0px',
    }}>
      <button
        onClick={onToggle}
        style={{
          background: 'transparent',
          border: 'none',
          padding: '4px 4px 4px 4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: 12,
          fontWeight: 700,
          color: 'var(--typography-base)',
          fontFamily: "'Segoe UI', sans-serif",
          gap: '8px',
        }}
      >
        <span style={{ flex: '1 0 0', textAlign: 'left' }}>Minhas Posições</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
          <IcChevronLineBaixo style={{ width: 16, height: 16 }} />
        </div>
      </button>
      {isOpen && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '4px', paddingRight: '4px', paddingBottom: '4px' }}>
          {userPositions.map((pos, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '2px 4px',
              width: '100%',
              height: '26px',
              background: 'var(--windown-bg-header-select)',
              borderRadius: '4px',
              fontSize: 11,
              fontFamily: "'Segoe UI', sans-serif",
            }}>
              <div style={{
                display: 'flex',
                gap: '0px',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '8px',
                flexShrink: 0,
              }}>
                <span style={{ fontWeight: 600, color: '#c2c2c2', fontSize: 11, width: 16, textAlign: 'center' }}>{pos.position}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '22px',
                flex: '0 1 auto',
                flexShrink: 0,
                paddingLeft: '6px',
              }}>
                <span style={{ fontWeight: 600, color: 'var(--typography-base)', fontSize: 11, whiteSpace: 'nowrap' }}>{pos.name}</span>
              </div>
              <div style={{
                display: 'flex',
                flex: '1 0 0',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '22px',
                minWidth: 0,
                paddingRight: '4px',
              }}>
                <span style={{ fontWeight: 700, color: pos.pnl.includes('-') ? 'var(--typography-negativo)' : 'var(--typography-positivo)', fontSize: 12, textAlign: 'center', whiteSpace: 'nowrap' }}>{pos.pnl}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const [version, setVersion] = React.useState('v1');
  const [subheaderPosition, setSubheaderPosition] = React.useState('bottom');
  const scrollContainerRef = React.useRef(null);
  const tableAreaRef = React.useRef(null);
  const [scrollThumbHeight, setScrollThumbHeight] = React.useState(0);
  const [scrollThumbTop, setScrollThumbTop] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isThumbHovering, setIsThumbHovering] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartY = React.useRef(0);
  const dragStartScroll = React.useRef(0);
  const [stickyPositions, setStickyPositions] = React.useState([
    { position: 9, name: 'Gustavo Ribeiro', account: '987654321', pnl: 'R$ 82.492,75', pnlV3: 'R$ 50.946,60' },
    { position: 20, name: 'Gustavo Ribeiro', account: '000265899', pnl: 'R$ 6.503,86', pnlV3: 'R$ 50.946,60' },
    { position: 132, name: 'Gustavo Ribeiro', account: '112125417', pnl: 'R$ -1.381,64' },
  ]);
  const [visiblePositions, setVisiblePositions] = React.useState({});

  const handleScroll = React.useCallback((e) => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 20);
    const thumbTop = (scrollTop / scrollHeight) * clientHeight;

    setScrollThumbHeight(thumbHeight);
    setScrollThumbTop(thumbTop);

    // Track which positions have been scrolled past (above viewport)
    const newVisiblePositions = {};
    stickyPositions.forEach((pos) => {
      const rowIndex = PARTICIPANTS.findIndex(p => p.rank === pos.position);
      if (rowIndex !== -1) {
        const rowTop = rowIndex * 32;
        const rowBottom = rowTop + 32;
        const isInViewport = rowBottom > scrollTop && rowTop < scrollTop + clientHeight;
        const isAboveViewport = rowBottom <= scrollTop;
        newVisiblePositions[pos.position] = { inViewport: isInViewport, aboveViewport: isAboveViewport };
      }
    });
    setVisiblePositions(newVisiblePositions);
  }, [stickyPositions]);

  const handleThumbMouseDown = React.useCallback((e) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScroll.current = scrollContainerRef.current?.scrollTop || 0;
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !scrollContainerRef.current) return;

      const deltaY = e.clientY - dragStartY.current;
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const scrollRatio = scrollHeight / clientHeight;
      const newScrollTop = dragStartScroll.current + deltaY * scrollRatio;

      scrollContainerRef.current.scrollTop = newScrollTop;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const filteredParticipants = PARTICIPANTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const userParticipant = PARTICIPANTS.find((p) => p.isUser);
  const userRank = userParticipant?.rank || '-';
  const totalParticipants = PARTICIPANTS.length;

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexDirection: 'column' }}>
      {/* Version Selector */}
      <div style={{ display: 'flex', gap: 8, paddingTop: 12, flexWrap: 'wrap' }}>
        <button onClick={() => setVersion('v1')} style={{ padding: '6px 12px', background: version === 'v1' ? '#52ea94' : '#333', color: version === 'v1' ? '#000' : '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600, fontSize: 12 }}>v1 (Drawer)</button>
        <button onClick={() => setVersion('v1.1')} style={{ padding: '6px 12px', background: version === 'v1.1' ? '#52ea94' : '#333', color: version === 'v1.1' ? '#000' : '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600, fontSize: 12 }}>v1.1 (Single)</button>
        <button onClick={() => setVersion('v2')} style={{ padding: '6px 12px', background: version === 'v2' ? '#52ea94' : '#333', color: version === 'v2' ? '#000' : '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600, fontSize: 12, visibility: 'hidden', position: 'absolute', pointerEvents: 'auto' }}>v2 (Sticky)</button>
        <button onClick={() => setVersion('v3')} style={{ padding: '6px 12px', background: version === 'v3' ? '#52ea94' : '#333', color: version === 'v3' ? '#000' : '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600, fontSize: 12, visibility: 'hidden', position: 'absolute', pointerEvents: 'auto' }}>v3 (Single Sticky)</button>
        <button onClick={() => setVersion('v4')} style={{ padding: '6px 12px', background: version === 'v4' ? '#52ea94' : '#333', color: version === 'v4' ? '#000' : '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600, fontSize: 12, visibility: 'hidden', position: 'absolute', pointerEvents: 'auto' }}>v4 (Enhanced)</button>
      </div>

      {/* Main Window */}
      <div style={{
        backdropFilter: 'blur(20px)',
        background: 'var(--windown-bg-body)',
        border: '1px solid #474747',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
        borderRadius: 4,
        width: 447,
        height: 458,
        boxShadow: '0 0 40px rgba(0,0,0,0.5)',
      }}>
        <Header />
        <Subheader searchTerm={searchTerm} onSearchChange={setSearchTerm} isDrawerOpen={version === 'v1' || version === 'v1.1' ? isDrawerOpen : false} onDrawerToggle={version === 'v1' || version === 'v1.1' ? () => setIsDrawerOpen(!isDrawerOpen) : () => {}} version={version} />
        {subheaderPosition === 'top' && <InfoSubheader userRank={userRank} totalParticipants={totalParticipants} />}

      {/* Table area */}
      <div
        ref={tableAreaRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ background: '#333', display: 'flex', flex: '1 0 0', flexDirection: 'column', alignItems: 'flex-start', padding: '0 2px 2px', width: '100%', minHeight: 0, overflow: 'hidden', position: 'relative' }}>
        <div ref={scrollContainerRef} data-scrollable style={{ background: 'var(--windown-bg-body-deep)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto', width: '100%', flex: 1, minHeight: 0 }}>
          <TableHeader />
          {filteredParticipants.map((p) => (
            <RankingRow key={p.rank} participant={p} version={version} />
          ))}
        </div>
        {(version === 'v2' || version === 'v3') && (
          <>
            <div style={{ position: 'absolute', top: '16px', left: 0, right: 0, display: 'flex', flexDirection: 'column', zIndex: 10 }}>
              {stickyPositions.filter(pos => version === 'v2' || pos.position === 20).map((pos, idx) => {
                const posState = visiblePositions[pos.position];
                if (!posState?.aboveViewport) return null;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  flexShrink: 0,
                  background: '#3a3a3a',
                  minHeight: 32,
                  borderLeft: '3px solid rgba(15, 98, 254, 0.8)',
                  paddingLeft: '5px',
                }}>
                  {/* Rank cell */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '0 8px',
                    flexShrink: 0,
                  }}>
                    <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden', flexShrink: 0 }}>
                      <p style={{
                        position: 'absolute',
                        left: 8,
                        top: 4,
                        transform: 'translateX(-50%)',
                        width: 16,
                        fontFamily: "'Segoe UI', sans-serif",
                        fontWeight: 600,
                        fontSize: 11,
                        lineHeight: '12px',
                        letterSpacing: -0.121,
                        color: 'var(--typography-suave-1)',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                      }}>
                        {pos.position}
                      </p>
                    </div>
                  </div>

                  {/* Name cell */}
                  <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', minWidth: 0 }}>
                    <div style={{ display: 'flex', flex: '1 0 0', gap: 8, height: '100%', alignItems: 'center', minWidth: 0, padding: '0 4px' }}>
                      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', gap: 8, height: 32, justifyContent: 'flex-start', minWidth: 0, alignItems: 'center' }}>
                        <span style={{
                          fontFamily: "'Segoe UI', sans-serif",
                          fontWeight: 700,
                          fontSize: 11.281,
                          lineHeight: '11.281px',
                          color: 'var(--typography-base)',
                          whiteSpace: 'nowrap',
                        }}>
                          {pos.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PnL cell */}
                  <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', minWidth: 90 }}>
                    <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', height: '100%', alignItems: 'flex-end', justifyContent: 'center', minWidth: 90, padding: '0 4px' }}>
                      <span style={{
                        fontFamily: "'Segoe UI', sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        lineHeight: '12px',
                        letterSpacing: -0.132,
                        color: (version === 'v3' && pos.pnlV3 ? pos.pnlV3 : pos.pnl).includes('-') ? 'var(--typography-negativo)' : 'var(--typography-positivo)',
                      }}>
                        {version === 'v3' && pos.pnlV3 ? pos.pnlV3 : pos.pnl}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', borderTop: '1px solid #474747', position: 'relative', zIndex: 5, pointerEvents: 'auto' }}>
              {stickyPositions.filter(pos => version === 'v2' || pos.position === 20).map((pos, idx) => {
                const posState = visiblePositions[pos.position];
                if (posState?.aboveViewport || posState?.inViewport) return null;
                return (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    flexShrink: 0,
                    background: '#3a3a3a',
                    minHeight: 32,
                    borderLeft: '3px solid rgba(15, 98, 254, 0.8)',
                    paddingLeft: '5px',
                  }}>
                    {/* Rank cell */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '0 8px',
                      flexShrink: 0,
                    }}>
                      <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden', flexShrink: 0 }}>
                        <p style={{
                          position: 'absolute',
                          left: 8,
                          top: 4,
                          transform: 'translateX(-50%)',
                          width: 16,
                          fontFamily: "'Segoe UI', sans-serif",
                          fontWeight: 600,
                          fontSize: 11,
                          lineHeight: '12px',
                          letterSpacing: -0.121,
                          color: 'var(--typography-suave-1)',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                        }}>
                          {pos.position}
                        </p>
                      </div>
                    </div>

                    {/* Name cell */}
                    <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', minWidth: 0 }}>
                      <div style={{ display: 'flex', flex: '1 0 0', gap: 8, height: '100%', alignItems: 'center', minWidth: 0, padding: '0 4px' }}>
                        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', gap: 8, height: 32, justifyContent: 'flex-start', minWidth: 0, alignItems: 'center' }}>
                          <span style={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontWeight: 700,
                            fontSize: 11.281,
                            lineHeight: '11.281px',
                            color: 'var(--typography-base)',
                            whiteSpace: 'nowrap',
                          }}>
                            {pos.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* PnL cell */}
                    <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', minWidth: 90 }}>
                      <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', height: '100%', alignItems: 'flex-end', justifyContent: 'center', minWidth: 90, padding: '0 4px' }}>
                        <span style={{
                          fontFamily: "'Segoe UI', sans-serif",
                          fontWeight: 700,
                          fontSize: 12,
                          lineHeight: '12px',
                          letterSpacing: -0.132,
                          color: (version === 'v3' && pos.pnlV3 ? pos.pnlV3 : pos.pnl).includes('-') ? 'var(--typography-negativo)' : 'var(--typography-positivo)',
                        }}>
                          {version === 'v3' && pos.pnlV3 ? pos.pnlV3 : pos.pnl}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Custom scrollbar — only visible on hover */}
        {scrollThumbHeight < (scrollContainerRef.current?.clientHeight || 0) && (
          <div
            onMouseDown={handleThumbMouseDown}
            onMouseEnter={() => setIsThumbHovering(true)}
            onMouseLeave={() => setIsThumbHovering(false)}
            style={{
              position: 'absolute',
              right: 2,
              top: scrollThumbTop,
              width: 6,
              height: scrollThumbHeight,
              background: isThumbHovering ? '#ccc' : '#555',
              borderRadius: 3,
              pointerEvents: 'auto',
              cursor: 'pointer',
              transition: 'opacity 400ms ease-in-out, background-color 200ms ease',
              opacity: isHovering ? 1 : 0,
              userSelect: 'none',
            }} />
        )}
      </div>
      {(version === 'v1' || version === 'v1.1') && (
        <MinhasPosicoesDrawer isOpen={isDrawerOpen} onToggle={() => setIsDrawerOpen(!isDrawerOpen)} userPositions={version === 'v1.1' ? [
          { position: '9', name: 'Gustavo Ribeiro', account: '987654321', pnl: 'R$ 82.492,75' },
        ] : [
          { position: '9', name: 'Gustavo Ribeiro', account: '987654321', pnl: 'R$ 82.492,75' },
          { position: '52', name: 'Gustavo Ribeiro', account: '000265899', pnl: 'R$ 6.503,86' },
          { position: '132', name: 'Gustavo Ribeiro', account: '112125417', pnl: 'R$ -1.381,64' },
        ]} />
      )}
      {version === 'v4' && (
        <MinhasPosicoesDrawerV4 isOpen={isDrawerOpen} onToggle={() => setIsDrawerOpen(!isDrawerOpen)} position={{ position: '9', name: 'Gustavo Ribeiro', account: '987654321', pnl: 'R$ 82.492,75' }} />
      )}
      </div>
    </div>
  );
}
