import React, { useState, useEffect } from 'react';
import { COUPLE_ARTWORK_DATA_URL } from '../data/coupleArtworkDataUrl';

/**
 * Custom Single Ornate Indian Brass Temple Bell (Ghanta) Icon
 * Larger, unmistakable traditional temple bell silhouette.
 */
export const OrnateTempleBellIcon: React.FC<{
  className?: string;
  isSwinging?: boolean;
  bellRingKey?: number;
}> = ({ className = 'w-6 h-6', isSwinging = false, bellRingKey = 0 }) => (
  <svg
    key={isSwinging ? `bell-icon-${bellRingKey}` : 'bell-icon-idle'}
    viewBox="0 0 32 32"
    fill="none"
    className={`${className} overflow-visible ${isSwinging ? 'animate-bell-swing' : ''}`}
    aria-hidden="true"
  >
    {/* Top suspension ring & chain link */}
    <circle cx="16" cy="4" r="2.2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 6.2V9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    {/* Ornate lotus shoulder of the bell */}
    <path
      d="M11.5 10.5C11.5 9.1 13.5 8.5 16 8.5C18.5 8.5 20.5 9.1 20.5 10.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* Flared brass temple bell dome & lip */}
    <path
      d="M9.5 19.5C10.2 14.2 11.4 10.5 16 10.5C20.6 10.5 21.8 14.2 22.5 19.5L25 23.5H7L9.5 19.5Z"
      fill="currentColor"
      fillOpacity="0.22"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Decorative temple band on bell */}
    <line x1="9.2" y1="20" x2="22.8" y2="20" stroke="currentColor" strokeWidth="1.6" />
    {/* Bell Clapper (Pendulum) */}
    <circle
      cx="16"
      cy="26.5"
      r="2.6"
      fill="currentColor"
      className={isSwinging ? 'animate-bell-clapper-svg' : ''}
    />
  </svg>
);

type LightSourceId =
  | 'diya-1'
  | 'diya-2'
  | 'diya-3'
  | 'diya-4'
  | 'thali-diya'
  | 'lantern';

interface LightSourceConfig {
  id: LightSourceId;
  cx: number;
  wickY: number;
  flameCy: number;
  scale: number;
  haloR: number;
  hitR: number;
  hasSmoke: boolean; // True for the 5 diyas, False for the wall hurricane lantern
  dimGradId: string;
  dimRx: number;
  dimRy: number;
}

const LIGHT_SOURCES: LightSourceConfig[] = [
  {
    id: 'diya-1',
    cx: 181,
    wickY: 1206,
    flameCy: 1180,
    scale: 1,
    haloR: 72,
    hitR: 58,
    hasSmoke: true,
    dimGradId: 'dimCoverDiya1',
    dimRx: 17,
    dimRy: 31,
  },
  {
    id: 'diya-2',
    cx: 410,
    wickY: 1206,
    flameCy: 1180,
    scale: 1,
    haloR: 72,
    hitR: 58,
    hasSmoke: true,
    dimGradId: 'dimCoverDiya2',
    dimRx: 17,
    dimRy: 31,
  },
  {
    id: 'diya-3',
    cx: 745,
    wickY: 1204,
    flameCy: 1179,
    scale: 1,
    haloR: 72,
    hitR: 58,
    hasSmoke: true,
    dimGradId: 'dimCoverDiya3',
    dimRx: 17,
    dimRy: 31,
  },
  {
    id: 'diya-4',
    cx: 935,
    wickY: 1206,
    flameCy: 1180,
    scale: 1,
    haloR: 72,
    hitR: 58,
    hasSmoke: true,
    dimGradId: 'dimCoverDiya4',
    dimRx: 17,
    dimRy: 31,
  },
  {
    id: 'thali-diya',
    cx: 732,
    wickY: 802,
    flameCy: 782,
    scale: 0.78,
    haloR: 54,
    hitR: 50,
    hasSmoke: true,
    dimGradId: 'dimCoverThali',
    dimRx: 14,
    dimRy: 24,
  },
  {
    id: 'lantern',
    cx: 119,
    wickY: 545,
    flameCy: 532,
    scale: 0.58,
    haloR: 46,
    hitR: 50,
    hasSmoke: false, // Wall hurricane lantern: NO smoke as requested
    dimGradId: 'dimCoverLantern',
    dimRx: 13,
    dimRy: 20,
  },
];

interface HeroCoupleIllustrationProps {
  isDiyaBlessed: boolean;
  isBellRinging?: boolean;
  bellRingKey?: number;
  onToggleDiya: () => void;
  onRingBell?: () => void;
  bellLabel: string;
  lightDiyaLabel: string;
  dimDiyaLabel: string;
  statusLitLabel: string;
  statusDimmedLabel: string;
}

export const HeroCoupleIllustration: React.FC<HeroCoupleIllustrationProps> = ({
  isDiyaBlessed,
  isBellRinging = false,
  bellRingKey = 0,
  onToggleDiya,
  onRingBell,
  bellLabel,
  lightDiyaLabel,
  dimDiyaLabel,
  statusLitLabel,
  statusDimmedLabel,
}) => {
  const [coupleDesignAssetUrl, setCoupleDesignAssetUrl] = useState<string>(
    COUPLE_ARTWORK_DATA_URL
  );

  // Use local PNG when available in dev/preview, with embedded WebP data URL already loaded so GitHub Pages never fails
  useEffect(() => {
    let cancelled = false;
    const candidates = [
      './assets/aistudio/file_000000005cb48243a73c6010814a8754_beb33cff.png',
      './public/assets/aistudio/file_000000005cb48243a73c6010814a8754_beb33cff.png',
      '/assets/aistudio/file_000000005cb48243a73c6010814a8754_beb33cff.png',
    ];
    let idx = 0;
    const tryNext = () => {
      if (cancelled || idx >= candidates.length) return;
      const url = candidates[idx];
      const probe = new Image();
      probe.onload = () => {
        if (!cancelled) setCoupleDesignAssetUrl(url);
      };
      probe.onerror = () => {
        idx += 1;
        tryNext();
      };
      probe.src = url;
    };
    tryNext();
    return () => {
      cancelled = true;
    };
  }, []);

  // Individual Lit / Dimmed state for each of the 6 non-moon light sources
  const [litMap, setLitMap] = useState<Record<LightSourceId, boolean>>({
    'diya-1': isDiyaBlessed,
    'diya-2': isDiyaBlessed,
    'diya-3': isDiyaBlessed,
    'diya-4': isDiyaBlessed,
    'thali-diya': isDiyaBlessed,
    lantern: isDiyaBlessed,
  });

  // Sync all lights when parent master toggle (isDiyaBlessed) changes via bottom button
  useEffect(() => {
    setLitMap({
      'diya-1': isDiyaBlessed,
      'diya-2': isDiyaBlessed,
      'diya-3': isDiyaBlessed,
      'diya-4': isDiyaBlessed,
      'thali-diya': isDiyaBlessed,
      lantern: isDiyaBlessed,
    });
  }, [isDiyaBlessed]);

  const handleToggleSingleLight = (
    e: React.MouseEvent<SVGGElement | SVGCircleElement>,
    id: LightSourceId
  ) => {
    e.stopPropagation();
    setLitMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleMasterButtonToggle = () => {
    const anyLit = Object.values(litMap).some(Boolean);
    const nextState = !anyLit;
    setLitMap({
      'diya-1': nextState,
      'diya-2': nextState,
      'diya-3': nextState,
      'diya-4': nextState,
      'thali-diya': nextState,
      lantern: nextState,
    });
    if (nextState !== isDiyaBlessed) {
      onToggleDiya();
    }
  };

  const litCount = Object.values(litMap).filter(Boolean).length;
  const anyLightLit = litCount > 0;

  return (
    <div className="no-svg-select relative w-full mx-auto select-none">
      {/* Unified Single-Element Container:
          - Top & sides of couple artwork have NO outer black border
          - Lower section & bottom bar share a continuous #1E0404 dark backing & gold border so both appear as 1 unified element */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_18px_42px_rgba(42,8,8,0.22)]">
        {/* Continuous Dark Backing Behind the Lower Junction of Couple Artwork & Bottom Bar */}
        <div
          className="absolute inset-x-0 bottom-0 top-[72%] bg-[#1E0404] pointer-events-none"
          aria-hidden="true"
        />

        <svg
          viewBox="28 14 1030 1398"
          className="no-svg-select relative z-10 w-full h-auto block select-none outline-none"
          onMouseDown={(e) => e.preventDefault()}
          role="img"
          aria-label="Romantic Indian couple in traditional wedding attire observing the Karwa Chauth full moon through a chhalni sieve with sacred terracotta diyas, puja thali, hanging lantern, and central brass temple bell"
        >
          <defs>
            {/* Warm Diya Radial Light Halo */}
            <radialGradient id="diyaWarmHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF8C2" stopOpacity="0.92" />
              <stop offset="36%" stopColor="#F59E0B" stopOpacity="0.58" />
              <stop offset="70%" stopColor="#DC2626" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
            </radialGradient>

            {/* Soft Celestial Moon Halo (Always Active — Never Dims) */}
            <radialGradient id="moonCelestialHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.38" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>

            {/* Antique Gold Metallic Gradient */}
            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF1B8" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#9E7313" />
              <stop offset="100%" stopColor="#F5DE93" />
            </linearGradient>

            {/* Moonbeam Blessing Ray Gradient (Moon -> Chhalni) */}
            <linearGradient id="moonbeamRayGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF5" stopOpacity="0.26" />
              <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>

            {/* Translucent Sacred Diya Smoke Gradient (Bottom to Top Fade) */}
            <linearGradient id="diyaSmokeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.12" />
              <stop offset="30%" stopColor="#F3F4F6" stopOpacity="0.62" />
              <stop offset="70%" stopColor="#E5E7EB" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0" />
            </linearGradient>

            {/* Localized Flame-Only Dimming Covers Matched to Exact Background Pixels Behind Each Flame */}
            <radialGradient id="dimCoverDiya1" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#7A3107" stopOpacity="0.98" />
              <stop offset="68%" stopColor="#943F08" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#994307" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dimCoverDiya2" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#B62502" stopOpacity="0.98" />
              <stop offset="68%" stopColor="#C42C02" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#C73201" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dimCoverDiya3" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#9D460D" stopOpacity="0.98" />
              <stop offset="68%" stopColor="#B1520E" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#B5560E" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dimCoverDiya4" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#632706" stopOpacity="0.98" />
              <stop offset="68%" stopColor="#863907" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#954107" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dimCoverThali" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#85331C" stopOpacity="0.97" />
              <stop offset="68%" stopColor="#943C1E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#973F1F" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="dimCoverLantern" cx="50%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#8A390A" stopOpacity="0.96" />
              <stop offset="68%" stopColor="#A84A0E" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#B85612" stopOpacity="0" />
            </radialGradient>

            {/* Generous Unclipped Cutout for the Swinging Brass Temple Bell (Ghanta)
                Covers the entire bell dome, flared rim (x=462..625), and clapper (y=256..286) with zero clipping */}
            <clipPath id="heroBellCutoutClip">
              <path d="M 516 104 C 528 96, 558 96, 570 104 L 642 130 L 646 288 L 440 288 L 444 130 Z" />
            </clipPath>
          </defs>

          {/* ===============================================================
              1. BASE HIGH-RESOLUTION COUPLE ARTWORK (NEVER DIMMED)
          =============================================================== */}
          <image
            href={coupleDesignAssetUrl}
            x="0"
            y="0"
            width="1086"
            height="1448"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none select-none"
          />

          {/* ===============================================================
              1B. SEAMLESS BACK DESIGN CONNECTING LOWER COUPLE CORNERS TO BOTTOM BAR
                  Fills the outer cream corner spandrels at y=1318..1412 with #1E0404
                  and extends the gold side borders down into the bottom control bar
          =============================================================== */}
          <g pointerEvents="none">
            {/* Bottom-Left Spandrel Backing (#1E0404) */}
            <path
              d="M 28 1318 L 32 1318 C 33 1344, 45 1366, 77 1376 C 81 1394, 95 1408, 116 1412 L 28 1412 Z"
              fill="#1E0404"
            />
            {/* Bottom-Right Spandrel Backing (#1E0404) */}
            <path
              d="M 1058 1318 L 1054 1318 C 1053 1344, 1041 1366, 1009 1376 C 1005 1394, 991 1408, 970 1412 L 1058 1412 Z"
              fill="#1E0404"
            />
            {/* Outer Gold Frame Continuation Lines into Bottom Control Bar */}
            <line
              x1="29.5"
              y1="1316"
              x2="29.5"
              y2="1412"
              stroke="url(#goldMetallic)"
              strokeWidth="3"
              opacity="0.85"
            />
            <line
              x1="1056.5"
              y1="1316"
              x2="1056.5"
              y2="1412"
              stroke="url(#goldMetallic)"
              strokeWidth="3"
              opacity="0.85"
            />
          </g>

          {/* ===============================================================
              2. CELESTIAL FULL MOON MANDALA & CHHALNI MOONBEAM BLESSING
                 (Always Radiant & Active — Moon Never Dims)
          =============================================================== */}
          <g pointerEvents="none">
            {/* Subtle Sacred Moonbeam Connecting Chandra Dev to Bride's Chhalni */}
            <polygon
              points="865,412 918,494 724,650 682,542"
              fill="url(#moonbeamRayGrad)"
            />

            {/* Rotating Golden Geometric Mandala Around the Full Moon */}
            <g transform="translate(891, 454)">
              <circle
                r="118"
                fill="url(#moonCelestialHalo)"
                className="animate-diya-halo"
              />
              <g className="animate-mandala-slow" opacity="0.34">
                <circle
                  r="96"
                  fill="none"
                  stroke="url(#goldMetallic)"
                  strokeWidth="1.6"
                  strokeDasharray="6 6"
                />
                <circle
                  r="78"
                  fill="none"
                  stroke="url(#goldMetallic)"
                  strokeWidth="1.5"
                />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
                  (deg) => (
                    <g key={deg} transform={`rotate(${deg})`}>
                      <path
                        d="M 0 -78 Q 11 -94 0 -106 Q -11 -94 0 -78 Z"
                        fill="none"
                        stroke="url(#goldMetallic)"
                        strokeWidth="1.4"
                      />
                    </g>
                  )
                )}
              </g>
            </g>

            {/* Twinkling Sacred Stars in the Night Sky */}
            <g fill="#FFFDF5" className="animate-diya-halo">
              <circle cx="260" cy="240" r="2.4" opacity="0.85" />
              <circle cx="385" cy="195" r="2" opacity="0.7" />
              <circle cx="715" cy="215" r="2.5" opacity="0.85" />
              <circle cx="825" cy="270" r="2" opacity="0.75" />
              <circle cx="235" cy="390" r="2.2" opacity="0.75" />
            </g>
          </g>

          {/* ===============================================================
              3. INTERACTIVE CENTRAL BRASS TEMPLE BELL (GHANTA) AT ARCH APEX
                 (Pivoted Precisely at Neck Hinge (543, 104) — Never Clipped)
          =============================================================== */}
          <g
            onClick={onRingBell}
            onMouseDown={(e) => e.preventDefault()}
            className="no-svg-select cursor-pointer outline-none"
          >
            {isBellRinging && (
              <g key={`bell-active-${bellRingKey}`} pointerEvents="none">
                {/* Seamless Night-Sky Backdrop Covering Only the Static Bell Dome & Clapper Below the Kunda Ring */}
                <path
                  d="M 517 105 C 529 99, 557 99, 569 105 L 636 134 L 640 288 L 446 288 L 450 134 Z"
                  fill="#1F080C"
                />

                {/* Soundwave Rings Pulsing 3 Times in Sync with the 3 Double-Strikes */}
                <g
                  stroke="#FDE047"
                  fill="none"
                  strokeWidth="3.2"
                  className="animate-bell-wave-svg"
                >
                  <circle cx="543" cy="218" r="78" opacity="0.9" />
                  <circle cx="543" cy="218" r="112" opacity="0.55" />
                  <circle cx="543" cy="218" r="144" opacity="0.28" />
                </g>

                {/* Exact SVG Coordinate Hinge at (543, 104):
                    Translates origin to (543, 104), rotates smoothly, and translates back so 0% of the bell is ever clipped */}
                <g transform="translate(543, 104)">
                  <g className="animate-bell-swing-svg">
                    <g transform="translate(-543, -104)">
                      <g clipPath="url(#heroBellCutoutClip)">
                        <image
                          href={coupleDesignAssetUrl}
                          x="0"
                          y="0"
                          width="1086"
                          height="1448"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </g>
                      <circle
                        cx="543"
                        cy="268"
                        r="11"
                        fill="#FDE047"
                        fillOpacity="0.45"
                        className="animate-bell-clapper-svg"
                      />
                    </g>
                  </g>
                </g>
              </g>
            )}

            {/* Circular Hit Target Over the Temple Bell (Prevents Square Selection) */}
            <circle
              cx="543"
              cy="182"
              r="98"
              fill="transparent"
              className="no-svg-select outline-none"
            />
          </g>

          {/* ===============================================================
              4. SEPARATELY INTERACTIVE DIYAS, PUJA THALI DIYA & WALL HURRICANE
                 - Click any individual diya or the wall hurricane to dim/light ONLY that light!
                 - Smoke rises on the 5 Diyas' fire ONLY (NO smoke on the wall hurricane lantern).
                 - Dimming a diya NEVER dims the image or the moon!
          =============================================================== */}
          {LIGHT_SOURCES.map((light) => {
            const isLit = litMap[light.id];
            return (
              <g key={light.id}>
                {isLit ? (
                  <g pointerEvents="none">
                    {/* Warm Radial Halo Around Lit Flame */}
                    <circle
                      cx={light.cx}
                      cy={light.flameCy}
                      r={light.haloR}
                      fill="url(#diyaWarmHalo)"
                      className="animate-diya-halo"
                    />

                    {/* Sacred Curling Smoke on the 5 Diyas' Fire ONLY (Excluded on Wall Hurricane) */}
                    {light.hasSmoke && (
                      <g
                        transform={`translate(${light.cx}, ${
                          light.wickY - 46 * light.scale
                        }) scale(${light.scale})`}
                      >
                        {/* Primary Curling Smoke Wisp Rising from Flame Tip */}
                        <path
                          d="M 0 4 C -7 -16, 8 -34, -3 -54 C -11 -70, 6 -86, -2 -104"
                          fill="none"
                          stroke="url(#diyaSmokeGrad)"
                          strokeWidth="4.2"
                          strokeLinecap="round"
                          className="animate-diya-smoke"
                        />
                        {/* Secondary Intertwining Smoke Wisp */}
                        <path
                          d="M 2 6 C 8 -14, -7 -30, 4 -48 C 11 -64, -5 -80, 3 -96"
                          fill="none"
                          stroke="url(#diyaSmokeGrad)"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          className="animate-diya-smoke-alt"
                        />
                      </g>
                    )}

                    {/* Living Multi-Layered Flickering Sacred Flame */}
                    <g
                      transform={`translate(${light.cx}, ${light.wickY}) scale(${light.scale})`}
                      className="animate-diya-flame"
                    >
                      <path
                        d="M 0 -54 Q 18 -20 0 0 Q -18 -20 0 -54 Z"
                        fill="#EA580C"
                        opacity="0.88"
                      />
                      <path
                        d="M 0 -42 Q 12 -16 0 -1 Q -12 -16 0 -42 Z"
                        fill="#FACC15"
                        opacity="0.94"
                      />
                      <path
                        d="M 0 -28 Q 6.5 -12 0 -2 Q -6.5 -12 0 -28 Z"
                        fill="#FFFBEB"
                      />
                    </g>
                  </g>
                ) : (
                  <g pointerEvents="none">
                    {/* Localized Flame Cover: Dims ONLY This Flame Without Dimming the Image or Moon */}
                    <ellipse
                      cx={light.cx}
                      cy={light.flameCy - 1}
                      rx={light.dimRx}
                      ry={light.dimRy}
                      fill={`url(#${light.dimGradId})`}
                    />
                    {/* Gentle Smoke Wisp on Dimmed Diya Wick (5 Diyas Only, Never on Wall Hurricane) */}
                    {light.hasSmoke && (
                      <g
                        transform={`translate(${light.cx}, ${
                          light.wickY - 8
                        }) scale(${light.scale * 0.85})`}
                      >
                        <path
                          d="M 0 0 C -5 -14, 6 -28, -2 -44 C -8 -56, 4 -68, 0 -82"
                          fill="none"
                          stroke="url(#diyaSmokeGrad)"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          className="animate-diya-smoke"
                        />
                      </g>
                    )}
                    {/* Quiet Dimmed Warm Ember at Wick Base */}
                    <circle
                      cx={light.cx}
                      cy={light.wickY - 3}
                      r={4.2 * light.scale}
                      fill="#F59E0B"
                      opacity="0.88"
                    />
                    <circle
                      cx={light.cx}
                      cy={light.wickY - 3}
                      r={2 * light.scale}
                      fill="#FEF08A"
                      opacity="0.92"
                    />
                  </g>
                )}

                {/* Circular Click Target for Individual Light Dim / Light Toggle (No Square Box) */}
                <circle
                  cx={light.cx}
                  cy={light.flameCy + 8}
                  r={light.hitR}
                  fill="transparent"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => handleToggleSingleLight(e, light.id)}
                  className="no-svg-select cursor-pointer outline-none"
                />
              </g>
            );
          })}
        </svg>

        {/* Interactive Caption & Control Bar Seamlessly Integrated at Bottom of the Same Unified Element */}
        <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-2 px-3.5 sm:px-4 py-3 rounded-b-2xl sm:rounded-b-3xl bg-[#1E0404] border-x border-b border-t border-[#D4AF37]/70 border-t-[#D4AF37]/35 text-[#FFF4E6]">
          <div className="text-xs flex items-center gap-1.5 min-w-0">
            <span
              className={`inline-block w-2 h-2 rounded-full shrink-0 transition-colors ${
                anyLightLit
                  ? 'bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]'
                  : 'bg-[#7F1D1D]'
              }`}
            />
            <span className="text-[#FCE7D6]/90 font-medium whitespace-nowrap truncate">
              {anyLightLit
                ? `${statusLitLabel} (${litCount}/6)`
                : statusDimmedLabel}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {onRingBell && (
              <button
                type="button"
                onClick={onRingBell}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#D4AF37]/70 bg-[#3B0909] text-[#F7E5A9] whitespace-nowrap shrink-0 cursor-pointer active:scale-95 transition-transform"
              >
                <OrnateTempleBellIcon
                  className="w-4 h-4 text-[#FDE047] shrink-0"
                  isSwinging={isBellRinging}
                  bellRingKey={bellRingKey}
                />
                <span>{bellLabel}</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleMasterButtonToggle}
              className="btn-festive-outline inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#D4AF37] bg-[#7F1D1D] hover:bg-[#B91C1C] text-[#FFF4E6] whitespace-nowrap shrink-0 cursor-pointer"
            >
              {anyLightLit ? dimDiyaLabel : lightDiyaLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChhalniSimulatorGraphicProps {
  viewThroughChhalni: boolean;
  activePhase: number;
  phaseTitles?: string[];
  stagePrefix?: string;
}

export const ChhalniSimulatorGraphic: React.FC<ChhalniSimulatorGraphicProps> = ({
  viewThroughChhalni,
  activePhase,
  phaseTitles,
  stagePrefix = 'Stage',
}) => {
  const defaultPhaseTitles = [
    '01: Lighting the Ghee Diya on the Puja Thali',
    '02: Gazing at Chandra Dev Through the Chhalni Mesh',
    '03: Pouring Sacred Water Arghya from the Karwa Pot',
    '04: Viewing Spouse Through Chhalni & Breaking Fast (Parana)',
  ];
  const titles = phaseTitles && phaseTitles.length === 4 ? phaseTitles : defaultPhaseTitles;

  return (
    <div className="relative rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-b from-[#260508] via-[#4A0E13] to-[#2B070A] p-3 sm:p-5 overflow-hidden shadow-lg">
      <div className="mb-2 flex items-center justify-between gap-2 text-xs text-[#F7E5A9]">
        <span className="font-semibold truncate">{titles[activePhase] || titles[0]}</span>
        <span className="font-mono text-[11px] text-[#FCE7D6]/80 shrink-0">
          {stagePrefix} 0{activePhase + 1} / 04
        </span>
      </div>

      <svg
        viewBox="0 0 520 340"
        className="w-full h-auto block rounded-xl bg-[#1E0408]/60"
        role="img"
        aria-label={titles[activePhase]}
      >
        <defs>
          <radialGradient id="simMoonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF5" stopOpacity="1" />
            <stop offset="45%" stopColor="#FDE68A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <pattern id="fineChhalniGrid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="#F7E5A9"
              strokeWidth="0.9"
              strokeOpacity="0.55"
            />
          </pattern>
        </defs>

        <g fill="#FFF4E6" opacity="0.7">
          <circle cx="60" cy="50" r="1.3" />
          <circle cx="120" cy="85" r="1.1" />
          <circle cx="420" cy="60" r="1.5" />
          <circle cx="460" cy="115" r="1.2" />
          <circle cx="85" cy="195" r="1.2" />
          <circle cx="440" cy="210" r="1.4" />
        </g>

        <g transform={activePhase === 3 ? 'translate(415, 85) scale(0.72)' : 'translate(260, 128)'}>
          <circle r="88" fill="url(#simMoonGlow)" />
          <circle r="42" fill="#FFFDF7" stroke="#F7E5A9" strokeWidth="1.5" />
          <circle cx="-10" cy="-8" r="6" fill="#EBD598" opacity="0.4" />
          <circle cx="12" cy="9" r="8" fill="#EBD598" opacity="0.35" />
        </g>

        {activePhase === 3 && (
          <g transform="translate(260, 155)">
            <circle r="68" fill="url(#simMoonGlow)" opacity="0.45" />
            <path
              d="M -55 75 C -45 38, 45 38, 55 75 Z"
              fill="#F3DFC1"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            <circle cx="0" cy="-2" r="28" fill="#E8B48A" stroke="#D4AF37" strokeWidth="1.2" />
            <path d="M -28 -6 C -26 -34, 26 -34, 28 -6 C 18 -18, -18 -18, -28 -6 Z" fill="#230A0A" />
            <path d="M 0 -17 L 3 -9 L -3 -9 Z" fill="#B91C1C" />
            <circle cx="0" cy="-11" r="1.3" fill="#FFF4E6" />
            <circle cx="-10" cy="-2" r="2" fill="#2A0808" />
            <circle cx="10" cy="-2" r="2" fill="#2A0808" />
            <path d="M -8 11 Q 0 17 8 11" fill="none" stroke="#6E261A" strokeWidth="1.8" strokeLinecap="round" />

            <g transform="translate(75, 48)">
              <rect x="-12" y="-18" width="24" height="32" rx="4" fill="#F7E5A9" stroke="#B45309" strokeWidth="1.5" />
              <ellipse cx="0" cy="-18" rx="12" ry="4" fill="#BAE6FD" stroke="#B45309" strokeWidth="1" />
            </g>
          </g>
        )}

        <g
          transform={
            activePhase === 2
              ? 'translate(135, 195) rotate(-18)'
              : 'translate(92, 245)'
          }
        >
          <circle
            cx="0"
            cy="0"
            r={activePhase === 2 ? 32 : 25}
            fill="#9A3412"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <path d="M -16 -8 Q 0 6 16 -8" fill="none" stroke="#F7E5A9" strokeWidth="1.5" />
          <path d="M 22 -8 L 38 -20 L 34 -4 Z" fill="#9A3412" stroke="#D4AF37" strokeWidth="1.5" />
          <path
            d={activePhase === 2 ? 'M 40 -18 Q 75 15 95 95' : 'M 40 -18 Q 56 10 62 55'}
            fill="none"
            stroke="#BAE6FD"
            strokeWidth={activePhase === 2 ? '4' : '2.2'}
            strokeDasharray="5 4"
            opacity={activePhase === 2 ? '1' : '0.75'}
          />
        </g>

        {activePhase === 0 && (
          <g transform="translate(260, 265)">
            <ellipse cx="0" cy="12" rx="95" ry="22" fill="#D4AF37" stroke="#78350F" strokeWidth="2" />
            <circle cx="-48" cy="6" r="10" fill="#B91C1C" />
            <circle cx="48" cy="6" r="10" fill="#F59E0B" />
          </g>
        )}

        {viewThroughChhalni && (
          <g transform="translate(260, 165)">
            <circle
              r="124"
              fill="url(#fineChhalniGrid)"
              stroke="#D4AF37"
              strokeWidth="10"
            />
            <circle
              r="118"
              fill="none"
              stroke="#FFF4E6"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />

            <g stroke="#FDE047" strokeWidth="1.2" opacity="0.65">
              <line x1="-55" y1="-35" x2="55" y2="-35" />
              <line x1="0" y1="-90" x2="0" y2="20" />
              <line x1="-38" y1="-73" x2="38" y2="3" />
              <line x1="-38" y1="3" x2="38" y2="-73" />
            </g>

            <g transform="translate(0, 76)">
              <circle cx="0" cy="-14" r="42" fill="url(#simMoonGlow)" className="animate-diya-halo" />
              <path
                d="M -22 0 C -16 14, 16 14, 22 0 Z"
                fill="#9A3412"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <g className="animate-diya-flame">
                <path d="M 0 -32 Q 11 -10 0 2 Q -11 -10 0 -32 Z" fill="#F59E0B" />
                <path d="M 0 -22 Q 6 -8 0 0 Q -6 -8 0 -22 Z" fill="#FEF08A" />
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export const OrnateDivider: React.FC = () => (
  <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 select-none" aria-hidden="true">
    <div className="h-px w-12 sm:w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#7F1D1D]/60" />
    <svg viewBox="0 0 36 20" className="w-7 sm:w-8 h-5 text-[#7F1D1D] shrink-0">
      <path
        d="M18 2 C21 8, 27 10, 34 10 C27 10, 21 12, 18 18 C15 12, 9 10, 2 10 C9 10, 15 8, 18 2 Z"
        fill="#D4AF37"
        stroke="#7F1D1D"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="10" r="2.2" fill="#7F1D1D" />
    </svg>
    <div className="h-px w-12 sm:w-28 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#7F1D1D]/60" />
  </div>
);

export const CardTopLotusOrnament: React.FC<{
  className?: string;
  variant?: 'gold' | 'sindoor-gold';
}> = ({ className = 'w-56 sm:w-64 h-8 mx-auto', variant = 'sindoor-gold' }) => {
  const uid = React.useId().replace(/:/g, '');
  const isGold = variant === 'gold';

  return (
    <div className="flex items-center justify-center select-none" aria-hidden="true">
      <svg
        viewBox="-220 -58 440 70"
        fill="none"
        className={className}
      >
        <defs>
          <linearGradient id={`lotusGrad-${uid}`} x1="0" y1="-54" x2="0" y2="8" gradientUnits="userSpaceOnUse">
            {isGold ? (
              <>
                <stop offset="0%" stopColor="#FFF5B8" />
                <stop offset="35%" stopColor="#FDE047" />
                <stop offset="75%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#CA8A04" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="50%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </>
            )}
          </linearGradient>
          <linearGradient id={`wingLeft-${uid}`} x1="-52" y1="0" x2="-210" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isGold ? '#FFF3B0' : '#B45309'} />
            <stop offset="20%" stopColor={isGold ? '#FDE047' : '#D97706'} />
            <stop offset="78%" stopColor={isGold ? '#D4AF37' : '#92400E'} />
            <stop offset="100%" stopColor={isGold ? '#D4AF37' : '#92400E'} stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id={`wingRight-${uid}`} x1="52" y1="0" x2="210" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isGold ? '#FFF3B0' : '#B45309'} />
            <stop offset="20%" stopColor={isGold ? '#FDE047' : '#D97706'} />
            <stop offset="78%" stopColor={isGold ? '#D4AF37' : '#92400E'} />
            <stop offset="100%" stopColor={isGold ? '#D4AF37' : '#92400E'} stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Outer Base Petals (Left & Right) */}
        <path
          d="M 0 0 C -10 -14, -26 -21, -44 -18 C -38 1, -24 8, -11 5.2 C -5 3.8, -2 1.5, 0 0 M 0 0 C 10 -14, 26 -21, 44 -18 C 38 1, 24 8, 11 5.2 C 5 3.8, 2 1.5, 0 0"
          stroke={`url(#lotusGrad-${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bolder Lower Lobes Rim */}
        <path
          d="M -43.5 -17.5 C -37.5 1.5, -24 8.2, -11 5.4 C -5 3.8, -2 1.5, 0 0 C 2 1.5, 5 3.8, 11 5.4 C 24 8.2, 37.5 1.5, 43.5 -17.5"
          stroke={`url(#lotusGrad-${uid})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Intermediate Angled Petals + Inner V-Cusp */}
        <path
          d="M 0 -22 C -5 -29, -14 -36, -25 -38 C -27 -20, -17 -6, 0 0 M 0 -22 C 5 -29, 14 -36, 25 -38 C 27 -20, 17 -6, 0 0"
          stroke={`url(#lotusGrad-${uid})`}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M -3.2 -25.5 L 0 -18.5 L 3.2 -25.5"
          stroke={`url(#lotusGrad-${uid})`}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center Upright Pointed Petal */}
        <path
          d="M 0 0 C -18 -12, -17 -35, 0 -52 C 17 -35, 18 -12, 0 0"
          stroke={`url(#lotusGrad-${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Diamond-Spear Wing */}
        <path
          fillRule="evenodd"
          d="M -53 0.8 Q -59 -2.4 -64.5 -6 Q -70 -2.4 -75.5 -0.95 L -142 -0.45 L -208 0.8 L -142 2.05 L -75.5 2.55 Q -70 4 -64.5 7.6 Q -59 4 -53 0.8 Z M -58.2 0.8 L -64.5 3.9 L -70.5 0.8 L -64.5 -2.3 Z"
          fill={`url(#wingLeft-${uid})`}
        />
        <circle cx="-63.8" cy="0.8" r="1.25" fill={`url(#wingLeft-${uid})`} />

        {/* Right Diamond-Spear Wing */}
        <path
          fillRule="evenodd"
          d="M 53 0.8 Q 59 -2.4 64.5 -6 Q 70 -2.4 75.5 -0.95 L 142 -0.45 L 208 0.8 L 142 2.05 L 75.5 2.55 Q 70 4 64.5 7.6 Q 59 4 53 0.8 Z M 58.2 0.8 L 64.5 3.9 L 70.5 0.8 L 64.5 -2.3 Z"
          fill={`url(#wingRight-${uid})`}
        />
        <circle cx="63.8" cy="0.8" r="1.25" fill={`url(#wingRight-${uid})`} />
      </svg>
    </div>
  );
};

