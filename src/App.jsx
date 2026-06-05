import React from 'react'
import './App.css'
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
  { rank: 9,  name: "Gustavo Ribeiro",  pnl: "R$ 82.492,75",  isUser: true },
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
  { rank: 20, name: "Aline Medeiros",   pnl: "R$ 50.946,60",  isUser: false },
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
  { rank: 32, name: "Carolina Martins", pnl: "R$ 39.543,75",  isUser: false },
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

function RankingRow({ participant }) {
  const { rank, name, pnl, isUser } = participant;
  const isTop3 = rank <= 3;
  const isBold = isTop3 || isUser;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexShrink: 0,
      background: isUser && !isTop3 ? '#3a3a3a' : rowBackground(rank),
      minHeight: 32,
      borderLeft: isUser && !isTop3 ? '3px solid rgba(15, 98, 254, 0.8)' : 'none',
      paddingLeft: isUser && !isTop3 ? '5px' : '8px',
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
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', overflow: 'hidden', width: '100%' }}>
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
                {name}
              </span>
              {isUser && (
                <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IcUsuario style={{ width: 16, height: 16 }} />
                </div>
              )}
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

function Subheader({ searchTerm, onSearchChange }) {
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
    }}>
      {/* # column */}
      <div style={{ display: 'flex', height: 16, alignItems: 'center', justifyContent: 'center', padding: '0 8px', flexShrink: 0, position: 'relative', width: 32 }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>#</span>
        <div style={{ position: 'absolute', right: 0, top: 2.5, width: 1, height: 10, opacity: 0.5 }} />
      </div>

      {/* Participante column */}
      <div style={{ display: 'flex', flex: '1 0 0', height: 16, alignItems: 'center', justifyContent: 'center', padding: '0 8px', minWidth: 0, position: 'relative' }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>Participante</span>
        <div style={{ position: 'absolute', right: -0.5, top: 2.5, width: 1, height: 10, opacity: 0.5 }} />
      </div>

      {/* Resultado column */}
      <div style={{ display: 'flex', flex: '1 0 0', height: 15, alignItems: 'center', justifyContent: 'center', padding: '0 8px', minWidth: 90, position: 'relative' }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>Resultado</span>
        <div style={{ position: 'absolute', right: -0.5, top: 2.5, width: 1, height: 10, opacity: 0.5 }} />
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
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        let { days, hours, minutes, seconds } = prev;

        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
          if (minutes < 0) {
            minutes = 59;
            hours -= 1;
            if (hours < 0) {
              hours = 23;
              days -= 1;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
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
        <div style={{
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

export default function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const scrollContainerRef = React.useRef(null);
  const tableAreaRef = React.useRef(null);
  const [scrollThumbHeight, setScrollThumbHeight] = React.useState(0);
  const [scrollThumbTop, setScrollThumbTop] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isThumbHovering, setIsThumbHovering] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartY = React.useRef(0);
  const dragStartScroll = React.useRef(0);

  const handleScroll = React.useCallback((e) => {
    if (!scrollContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 20);
    const thumbTop = (scrollTop / scrollHeight) * clientHeight;

    setScrollThumbHeight(thumbHeight);
    setScrollThumbTop(thumbTop);
  }, []);

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
      <Subheader searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <InfoSubheader userRank={userRank} totalParticipants={totalParticipants} />

      {/* Table area */}
      <div
        ref={tableAreaRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ background: '#333', display: 'flex', flex: '1 0 0', flexDirection: 'column', alignItems: 'flex-start', padding: '0 2px 2px', width: '100%', minHeight: 0, overflow: 'hidden', position: 'relative' }}>
        <div ref={scrollContainerRef} data-scrollable style={{ background: 'var(--windown-bg-body-deep)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto', width: '100%', flex: 1, minHeight: 0 }}>
          <TableHeader />
          {filteredParticipants.map((p) => (
            <RankingRow key={p.rank} participant={p} />
          ))}
        </div>

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
    </div>
  );
}
