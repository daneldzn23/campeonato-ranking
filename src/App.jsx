import React from 'react'
import './App.css'

// --- Figma asset URLs (valid for 7 days) ---
const imgPessoa = "https://www.figma.com/api/mcp/asset/a97c608b-ccac-4a1e-bdc5-d56eac8197f2";
const imgVector1st = "https://www.figma.com/api/mcp/asset/1b402217-8302-4699-b521-e5e15fde8a88";
const imgLaurel1 = "https://www.figma.com/api/mcp/asset/5c9b6ba8-9b61-4cd0-8c3e-47ac3a887d26";
const imgLaurel2 = "https://www.figma.com/api/mcp/asset/2fe33141-5d56-4382-93d6-0693da3fe76e";
const img2num = "https://www.figma.com/api/mcp/asset/de252b1e-3f58-47a1-8c63-b60a9a92eba3";
const imgLaurel3 = "https://www.figma.com/api/mcp/asset/9f3a8074-8afe-4dba-b0a1-7244699de4af";
const img3num = "https://www.figma.com/api/mcp/asset/eb013816-9ec8-4484-8419-ec10d6c4b57e";
const imgSearchIcon = "https://www.figma.com/api/mcp/asset/e0c15bd1-42b7-46bd-9d3c-5ec2fc06439e";
const imgUnionDown1 = "https://www.figma.com/api/mcp/asset/2bf632e5-9dc7-4f0f-88b5-31294663b50d";
const imgUnionDown2 = "https://www.figma.com/api/mcp/asset/945039d8-db22-4090-a3ca-40ce6027b681";
const imgChampionIconCenter = "https://www.figma.com/api/mcp/asset/81b515b5-fc43-4aef-8713-e9e7b4e5df9c";
const imgDivider = "https://www.figma.com/api/mcp/asset/db1d7d28-320b-4dfd-b468-06e83880216f";
const imgAcctGroup1 = "https://www.figma.com/api/mcp/asset/2d91ef75-d0a3-4160-b8ec-c5209a591592";
const imgAcctGroup2 = "https://www.figma.com/api/mcp/asset/fc54c908-abdc-4ace-a54e-6c04a304b04b";
const imgAcctVector1 = "https://www.figma.com/api/mcp/asset/e4540f54-3970-41ff-b66e-31ace901c8b3";
const imgAcctVector2 = "https://www.figma.com/api/mcp/asset/fc664efc-cd55-4b3f-b88a-7cb9d3963e41";
const imgAcctVector3 = "https://www.figma.com/api/mcp/asset/5523414f-742c-4a85-ab64-a6567a11a70a";
const imgAcctChevron = "https://www.figma.com/api/mcp/asset/87a2af73-515d-4d1f-b825-a181333b45b3";
const imgAcctChevron2 = "https://www.figma.com/api/mcp/asset/5840532c-04db-4d94-9169-e8864dc14c1e";

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

// --- Icon components for header ---

function IcFecharPequeno() {
  return (
    <div style={{ position: 'relative', width: 16, height: 16 }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 8, height: 8 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgPrincipal} />
      </div>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 8, height: 8 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgTransparente} />
      </div>
    </div>
  );
}

function IcMaximizarMini() {
  return (
    <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 8, height: 8 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgVector} />
      </div>
    </div>
  );
}

function IcMinimizarMini() {
  return (
    <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: 'calc(50% + 0.38px)', transform: 'translate(-50%, -50%)', width: 8, height: 1 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgIcMinimizarStroke} />
      </div>
    </div>
  );
}

function IcMenuContexto() {
  return (
    <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 1, top: 1, width: 14, height: 14 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgUnion} />
      </div>
    </div>
  );
}

function IcChevronPixelCima() {
  return (
    <div style={{ position: 'relative', width: 16, height: 16 }}>
      <div style={{ position: 'absolute', left: '50%', top: 'calc(50% - 0.5px)', transform: 'translate(-50%, -50%)', width: 6, height: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'scaleY(-1)', width: '100%', height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgUnion1} />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '50%', top: 'calc(50% - 1px)', transform: 'translate(-50%, -50%)', width: 8, height: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'scaleY(-1)', width: '100%', height: '100%' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgUnion2} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components ---

function ChampionshipIcon({ size = 16 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: '8.12% 62.5% 32.5% 0.97%' }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgChampIcon1} />
      </div>
      <div style={{ position: 'absolute', inset: '7.5% 1.05% 32.5% 62.5%' }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgChampIcon2} />
      </div>
      <div style={{ position: 'absolute', inset: '0 18.75%' }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgChampIcon3} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '25%', right: '25%', top: '92.5%' }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgChampIcon4} />
      </div>
    </div>
  );
}

function RankBadge({ rank }) {
  if (rank === 1) {
    return (
      <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden', flexShrink: 0 }}>
        {/* gold laurel */}
        <div style={{ position: 'absolute', inset: '6.25% 0 2.8% 0', display: 'flex', alignItems: 'center', justifyContent: 'center', containerType: 'size' }}>
          <div style={{ transform: 'rotate(180deg) scaleX(-1)', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgLaurel1} />
            </div>
          </div>
        </div>
        {/* "1" numeral */}
        <div style={{ position: 'absolute', height: 6.442, left: 6.2, top: 4.56, width: 2.725 }}>
          <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgVector1st} />
        </div>
      </div>
    );
  }

  if (rank === 2) {
    return (
      <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '6.25% 0 2.8% 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ transform: 'rotate(180deg) scaleX(-1)', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgLaurel2} />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '29.54%', left: 'calc(50% + 0.1px)', top: '30.41%', width: 4.201, transform: 'translateX(-50%)' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={img2num} />
        </div>
      </div>
    );
  }

  if (rank === 3) {
    return (
      <div style={{ position: 'relative', width: 16, height: 16, overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: '6.25% 0 2.8% 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ transform: 'rotate(180deg) scaleX(-1)', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgLaurel3} />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '28.86%', left: 'calc(50% + 0.21px)', top: '30.41%', width: 4.017, transform: 'translateX(-50%)' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={img3num} />
        </div>
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
      background: rowBackground(rank),
      minHeight: 32,
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
                <div style={{ position: 'relative', width: 16, height: 16, flexShrink: 0 }}>
                  <div style={{ position: 'absolute', inset: '12.5%' }}>
                    <img alt="você" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgPessoa} />
                  </div>
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
        <div style={{ position: 'relative', width: 16, height: 16, flexShrink: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: '8.12% 62.5% 32.5% 0.97%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctGroup1} />
          </div>
          <div style={{ position: 'absolute', inset: '7.5% 1.05% 32.5% 62.5%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctGroup2} />
          </div>
          <div style={{ position: 'absolute', inset: '0 18.75%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctVector1} />
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: '25%', right: '25%', top: '92.5%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctVector2} />
          </div>
          <div style={{ position: 'absolute', inset: '12.5% 31.88% 42.5% 31.87%' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctVector3} />
          </div>
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
          <span style={{ fontWeight: 400, flex: '1 0 0', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>Valesca Amaro Cechin</span>
        </div>

        {/* Chevron Icon */}
        <div style={{ position: 'relative', width: 16, height: 16, flexShrink: 0 }}>
          <div style={{ position: 'absolute', left: '50%', top: 'calc(50% - 0.5px)', transform: 'translate(-50%, -50%)', width: 6, height: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctChevron} />
          </div>
          <div style={{ position: 'absolute', left: '50%', top: 'calc(50% + 1px)', transform: 'translate(-50%, -50%)', width: 8, height: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgAcctChevron2} />
          </div>
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
          <img alt="pesquisar" style={{ width: 16, height: 16, display: 'block' }} src={imgSearchIcon} />
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
          <img alt="pesquisar" style={{ width: 16, height: 16, flexShrink: 0 }} src={imgSearchIcon} />
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
        <div style={{ position: 'absolute', right: 0, top: 2.5, width: 1, height: 10 }}>
          <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgDivider} />
        </div>
      </div>

      {/* Participante column */}
      <div style={{ display: 'flex', flex: '1 0 0', height: 16, alignItems: 'center', justifyContent: 'center', padding: '0 8px', minWidth: 0, position: 'relative' }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>Participante</span>
        <div style={{ position: 'absolute', right: -0.5, top: 2.5, width: 1, height: 10 }}>
          <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgDivider} />
        </div>
      </div>

      {/* PnL column */}
      <div style={{ display: 'flex', flex: '1 0 0', height: 15, alignItems: 'center', justifyContent: 'center', padding: '0 8px', minWidth: 90, position: 'relative' }}>
        <span style={{ fontFamily: 'Tahoma, sans-serif', fontWeight: 400, fontSize: 11, color: 'var(--typography-suave-2)', textAlign: 'center', whiteSpace: 'nowrap' }}>PnL</span>
        <div style={{ position: 'absolute', right: -0.5, top: 2.5, width: 1, height: 10 }}>
          <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} src={imgDivider} />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div style={{
      background: 'var(--windown-bg-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', height: 22, alignItems: 'center', flexShrink: 0 }}>
        <div style={{ display: 'flex', height: 19, alignItems: 'center', justifyContent: 'center', borderRadius: 4, flexShrink: 0 }}>
          <div style={{ display: 'flex', height: 14, alignItems: 'center', justifyContent: 'center', padding: '0 12px', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'Tahoma, sans-serif',
              fontWeight: 400,
              fontSize: 12,
              lineHeight: '14px',
              color: 'var(--typography-suave-1)',
              whiteSpace: 'nowrap',
            }}>
              Total de Participantes: 32
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const imgMenuContexto = "https://www.figma.com/api/mcp/asset/9f37dc22-07f2-4a94-a60d-027c93b7fe96";
const imgMinimize = "https://www.figma.com/api/mcp/asset/22a1dce9-b843-40dc-abb2-ebc854266dd1";
const imgMaximize = "https://www.figma.com/api/mcp/asset/529625cc-0906-42bd-a7bf-ef3f864a50b1";
const imgClose = "https://www.figma.com/api/mcp/asset/b8ab7120-0c84-48f9-8285-ae02eca2c2d8";
const imgChampIcon1 = "https://www.figma.com/api/mcp/asset/5952c253-5048-44c1-9fb8-df8b9bffe442";
const imgChampIcon2 = "https://www.figma.com/api/mcp/asset/bdacec87-16e6-4e32-b7df-9e41628e59c4";
const imgChampIcon3 = "https://www.figma.com/api/mcp/asset/c1a14de1-3496-421a-8614-e07108dad184";
const imgChampIcon4 = "https://www.figma.com/api/mcp/asset/69a69aee-7df4-4b3c-86ea-595d055c7476";
const imgChevUp1 = "https://www.figma.com/api/mcp/asset/2bf076b3-0ec6-499d-a36b-7680d5969797";
const imgChevUp2 = "https://www.figma.com/api/mcp/asset/16f38df6-661b-4a38-929d-ca4e48e149d7";

// --- Header icon assets ---
const imgPrincipal = "https://www.figma.com/api/mcp/asset/499927ec-6bce-41ea-b4ef-fb6670a41800";
const imgTransparente = "https://www.figma.com/api/mcp/asset/735c2636-5b4c-400b-897c-44bceceebf8e";
const imgVector = "https://www.figma.com/api/mcp/asset/e9a7d4b8-8a3c-429b-a08c-25cf4eba6188";
const imgIcMinimizarStroke = "https://www.figma.com/api/mcp/asset/b9758e96-b460-4984-9385-f884192d900f";
const imgUnion = "https://www.figma.com/api/mcp/asset/60c3dedc-0ffc-4b0e-824f-c275c276caaa";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/ede7c126-d2d8-4341-a7d2-a168de493753";
const imgUnion2 = "https://www.figma.com/api/mcp/asset/b2510c5b-c0d6-452b-b392-1bd1b9636c1d";
const imgGroup = "https://www.figma.com/api/mcp/asset/6f7eb756-d20c-437a-9891-473436ef8681";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/21373297-d93f-4fe1-8809-0b2ee482eb70";
const imgVector1 = "https://www.figma.com/api/mcp/asset/146e38f6-e9f4-4bfd-9249-f7b5d1ae7b45";
const imgVector2 = "https://www.figma.com/api/mcp/asset/a652d790-48da-47fd-baed-0ba48e0a48c8";

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
          <IcChevronPixelCima />
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
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcMenuContexto /></button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcMinimizarMini /></button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcMaximizarMini /></button>
        <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 20, borderRadius: 4, transition: 'background-color 150ms ease' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><IcFecharPequeno /></button>
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

      <Footer />
    </div>
  );
}
