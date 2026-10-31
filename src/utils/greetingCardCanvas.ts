export interface CardThemeConfig {
  id: 'crimson-zari' | 'ivory-pichwai' | 'moonlit-sandstone';
  name: string;
  bgStart: string;
  bgEnd: string;
  borderGold: string;
  textPrimary: string;
  textSecondary: string;
  accentColor: string;
}

export type CardOrientation = 'horizontal' | 'vertical';

export const CARD_THEMES: CardThemeConfig[] = [
  {
    id: 'crimson-zari',
    name: 'Royal Crimson & Zari Gold',
    bgStart: '#631010',
    bgEnd: '#3A0707',
    borderGold: '#D4AF37',
    textPrimary: '#FFF4E6',
    textSecondary: '#F7E5A9',
    accentColor: '#D4AF37',
  },
  {
    id: 'ivory-pichwai',
    name: 'Warm Ivory & Sindoor',
    bgStart: '#FFF4E6',
    bgEnd: '#FCE7D6',
    borderGold: '#7F1D1D',
    textPrimary: '#2A0808',
    textSecondary: '#7F1D1D',
    accentColor: '#B91C1C',
  },
  {
    id: 'moonlit-sandstone',
    name: 'Moonlit Palace Maroon',
    bgStart: '#2D0912',
    bgEnd: '#521218',
    borderGold: '#E6C665',
    textPrimary: '#FFF8F0',
    textSecondary: '#FCE7D6',
    accentColor: '#E6C665',
  },
];

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (const para of paragraphs) {
    const words = para.split(/\s+/).filter(Boolean);
    if (words.length === 0) continue;
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  }
  return lines.length > 0 ? lines : [''];
}

function drawRoundedRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawTopLotusOrnament(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  topY: number,
  isVertical: boolean,
  theme: CardThemeConfig
): number {
  const isLightTheme = theme.id === 'ivory-pichwai';
  const scale = isVertical ? 0.68 : 0.74;
  const wingOuterSpan = isVertical ? 205 : 240;

  // In reference coordinates (90x60 lotus):
  // Top apex is at y = -52, bottom lobes reach y = +6.5, confluence is at y = 0.
  const lotusTopOffset = 53 * scale;
  const lotusBottomOffset = 7.5 * scale;
  const totalHeight = Math.ceil(lotusTopOffset + lotusBottomOffset);
  const baseConfluenceY = topY + lotusTopOffset;

  ctx.save();
  ctx.translate(centerX, baseConfluenceY);
  ctx.scale(scale, scale);

  // Subtle warm golden glow matching the reference ornament
  ctx.shadowColor = isLightTheme
    ? 'rgba(180, 83, 9, 0.22)'
    : 'rgba(245, 158, 11, 0.55)';
  ctx.shadowBlur = isLightTheme ? 6 : 11;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Vertical metallic gold gradient for the 5-petal lotus
  const lotusGrad = ctx.createLinearGradient(0, -54, 0, 8);
  if (isLightTheme) {
    lotusGrad.addColorStop(0, '#B45309');
    lotusGrad.addColorStop(0.45, '#D97706');
    lotusGrad.addColorStop(1, '#7F1D1D');
  } else {
    lotusGrad.addColorStop(0, '#FFF5B8');
    lotusGrad.addColorStop(0.32, '#FDE047');
    lotusGrad.addColorStop(0.72, '#EAB308');
    lotusGrad.addColorStop(1, '#CA8A04');
  }

  ctx.strokeStyle = lotusGrad;
  ctx.fillStyle = lotusGrad;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // 1. Outer Base Petals (Left & Right) — upper arc crosses intermediate petal, lower arc forms double-lobed base
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  // Left outer petal
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-10, -14, -26, -21, -44, -18);
  ctx.bezierCurveTo(-38, 1, -24, 8, -11, 5.2);
  ctx.bezierCurveTo(-5, 3.8, -2, 1.5, 0, 0);
  // Right outer petal
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(10, -14, 26, -21, 44, -18);
  ctx.bezierCurveTo(38, 1, 24, 8, 11, 5.2);
  ctx.bezierCurveTo(5, 3.8, 2, 1.5, 0, 0);
  ctx.stroke();

  // Slightly bolder lower crescent rim on the two bottom lobes to match reference weight
  ctx.save();
  ctx.lineWidth = 4.2;
  ctx.beginPath();
  ctx.moveTo(-43.5, -17.5);
  ctx.bezierCurveTo(-37.5, 1.5, -24, 8.2, -11, 5.4);
  ctx.bezierCurveTo(-5, 3.8, -2, 1.5, 0, 0);
  ctx.bezierCurveTo(2, 1.5, 5, 3.8, 11, 5.4);
  ctx.bezierCurveTo(24, 8.2, 37.5, 1.5, 43.5, -17.5);
  ctx.stroke();
  ctx.restore();

  // 2. Intermediate Angled Petals (Left & Right) + Inner V-Cusp inside Center Petal
  ctx.lineWidth = 3.4;
  ctx.beginPath();
  // Left intermediate petal: starts from inner V-cusp (0, -22) inside center petal out to tip (-25, -38) and down to base (0, 0)
  ctx.moveTo(0, -22);
  ctx.bezierCurveTo(-5, -29, -14, -36, -25, -38);
  ctx.bezierCurveTo(-27, -20, -17, -6, 0, 0);
  // Right intermediate petal: starts from inner V-cusp (0, -22) out to tip (25, -38) and down to base (0, 0)
  ctx.moveTo(0, -22);
  ctx.bezierCurveTo(5, -29, 14, -36, 25, -38);
  ctx.bezierCurveTo(27, -20, 17, -6, 0, 0);
  ctx.stroke();

  // Subtle downward V-point extension at the center petal inner cusp (0, -22 -> 0, -17.5)
  ctx.beginPath();
  ctx.moveTo(-3.2, -25.5);
  ctx.lineTo(0, -18.5);
  ctx.lineTo(3.2, -25.5);
  ctx.lineWidth = 2.6;
  ctx.stroke();

  // 3. Center Upright Pointed Petal
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-18, -12, -17, -35, 0, -52);
  ctx.bezierCurveTo(17, -35, 18, -12, 0, 0);
  ctx.stroke();

  // 4. Left & Right Symmetrical Diamond-Spear Horizontal Wings
  const wingY = 0.8;
  ([-1, 1] as const).forEach((dir) => {
    const wingGrad = ctx.createLinearGradient(
      dir * 52,
      wingY,
      dir * wingOuterSpan,
      wingY
    );
    if (isLightTheme) {
      wingGrad.addColorStop(0, '#B45309');
      wingGrad.addColorStop(0.25, '#D97706');
      wingGrad.addColorStop(0.85, '#92400E');
      wingGrad.addColorStop(1, 'rgba(146, 64, 14, 0.08)');
    } else {
      wingGrad.addColorStop(0, '#FFF3B0');
      wingGrad.addColorStop(0.18, '#FDE047');
      wingGrad.addColorStop(0.75, '#D4AF37');
      wingGrad.addColorStop(0.94, '#B45309');
      wingGrad.addColorStop(1, 'rgba(212, 175, 55, 0.08)');
    }

    ctx.fillStyle = wingGrad;
    ctx.strokeStyle = wingGrad;

    // Outer diamond spearhead + smoothly tapered horizontal wing shaft
    ctx.beginPath();
    // Inner spear point facing the lotus
    ctx.moveTo(dir * 53, wingY);
    // Upper diamond edge to top vertex
    ctx.quadraticCurveTo(dir * 59, wingY - 3.2, dir * 64.5, wingY - 6.8);
    // Upper outer diamond edge curving into shaft neck
    ctx.quadraticCurveTo(dir * 70, wingY - 3.2, dir * 75.5, wingY - 1.75);
    // Upper edge of long horizontal shaft tapering to outer point
    ctx.lineTo(dir * (wingOuterSpan * 0.68), wingY - 1.25);
    ctx.lineTo(dir * wingOuterSpan, wingY);
    // Lower edge of long horizontal shaft back to diamond neck
    ctx.lineTo(dir * (wingOuterSpan * 0.68), wingY + 1.25);
    ctx.lineTo(dir * 75.5, wingY + 1.75);
    // Lower outer diamond edge to bottom vertex
    ctx.quadraticCurveTo(dir * 70, wingY + 3.2, dir * 64.5, wingY + 6.8);
    // Lower inner diamond edge back to inner spear point
    ctx.quadraticCurveTo(dir * 59, wingY + 3.2, dir * 53, wingY);
    ctx.closePath();

    // Inner hollow diamond cutout (counter-clockwise for evenodd cutout)
    ctx.moveTo(dir * 58.2, wingY);
    ctx.lineTo(dir * 64.5, wingY + 3.1);
    ctx.lineTo(dir * 70.5, wingY);
    ctx.lineTo(dir * 64.5, wingY - 3.1);
    ctx.closePath();

    ctx.fill('evenodd');

    // Tiny ornate central gold bead/bridge inside the diamond cutout (matches reference filigree)
    ctx.beginPath();
    ctx.arc(dir * 63.8, wingY, 1.25, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
  return totalHeight;
}

/**
 * Renders the Greeting Card onto a canvas using the EXACT same layout,
 * rounded double-frame borders, royal lotus top ornament, quote dividers, and tight
 * vertical spacing as the live preview card.
 */
export function renderGreetingCardToCanvas(
  canvas: HTMLCanvasElement,
  options: {
    headerLine: string;
    greetingLine: string;
    titleLine: string;
    bodyMessage: string;
    closingLine: string;
    signatureLine: string;
    footerLine: string;
    theme: CardThemeConfig;
    orientation: CardOrientation;
  }
): void {
  const {
    headerLine,
    greetingLine,
    titleLine,
    bodyMessage,
    closingLine,
    signatureLine,
    footerLine,
    theme,
    orientation,
  } = options;

  const isVertical = orientation === 'vertical';
  const scale = 2; // 2x Retina high-DPI export

  // Logical dimensions matching the live preview card proportions
  const logicalWidth = isVertical ? 380 : 580;
  const outerPad = isVertical ? 22 : 20;
  const innerPadX = isVertical ? 24 : 28;
  const innerPadY = isVertical ? 26 : 20;
  const groupGap = isVertical ? 20 : 14;

  const innerBoxWidth = logicalWidth - outerPad * 2;
  const maxTextWidth = innerBoxWidth - innerPadX * 2;
  const bodyMaxTextWidth = isVertical
    ? maxTextWidth - 8
    : Math.min(maxTextWidth - 16, 460);

  // Measure wrapped text lines using an offscreen context first so height wraps tightly
  const measureCtx = canvas.getContext('2d');
  if (!measureCtx) return;

  const headerFont = '600 11.5px "Plus Jakarta Sans", sans-serif';
  const greetingFont = `italic 700 ${isVertical ? 28 : 29}px "Cormorant Garamond", Georgia, serif`;
  const titleFont = `600 ${isVertical ? 19 : 20}px "Cormorant Garamond", Georgia, serif`;
  const bodyFont = `400 ${isVertical ? 15 : 15.5}px "Plus Jakarta Sans", sans-serif`;
  const closingFont = `italic 600 ${isVertical ? 19 : 20}px "Cormorant Garamond", Georgia, serif`;
  const signatureFont = '400 13.5px "Plus Jakarta Sans", sans-serif';
  const footerFont = '600 11px "Plus Jakarta Sans", sans-serif';

  measureCtx.font = headerFont;
  const headerLines = headerLine.trim()
    ? wrapCanvasText(measureCtx, headerLine.trim().toUpperCase(), maxTextWidth)
    : [];

  measureCtx.font = greetingFont;
  const greetingLines = greetingLine.trim()
    ? wrapCanvasText(measureCtx, greetingLine.trim(), maxTextWidth)
    : [];

  measureCtx.font = titleFont;
  const titleLines = titleLine.trim()
    ? wrapCanvasText(measureCtx, titleLine.trim(), maxTextWidth)
    : [];

  measureCtx.font = bodyFont;
  const bodyLines = bodyMessage.trim()
    ? wrapCanvasText(measureCtx, `“${bodyMessage.trim()}”`, bodyMaxTextWidth)
    : [];

  measureCtx.font = closingFont;
  const closingLines = closingLine.trim()
    ? wrapCanvasText(measureCtx, closingLine.trim(), maxTextWidth)
    : [];

  measureCtx.font = signatureFont;
  const signatureLines = signatureLine.trim()
    ? wrapCanvasText(measureCtx, signatureLine.trim(), maxTextWidth)
    : [];

  measureCtx.font = footerFont;
  const footerLines = footerLine.trim()
    ? wrapCanvasText(measureCtx, footerLine.trim().toUpperCase(), maxTextWidth)
    : [];

  // Calculate exact content height so rows sit cozily together just like the preview
  const emblemSize = isVertical ? 42 : 45;
  const headerLineH = 16;
  const greetingLineH = isVertical ? 33 : 34;
  const titleLineH = 25;
  const bodyLineH = 23;
  const closingLineH = 25;
  const signatureLineH = 19;
  const footerLineH = 15;

  // Top Group height
  let topGroupH = emblemSize;
  if (headerLines.length > 0) {
    topGroupH += 10 + headerLines.length * headerLineH;
  }
  if (greetingLines.length > 0) {
    topGroupH += 8 + greetingLines.length * greetingLineH;
  }
  if (titleLines.length > 0) {
    topGroupH += 6 + titleLines.length * titleLineH;
  }

  // Middle Quote Group height (includes top & bottom border-y padding)
  const quotePadY = isVertical ? 12 : 10;
  const middleGroupH =
    bodyLines.length > 0 ? quotePadY * 2 + bodyLines.length * bodyLineH : 0;

  // Bottom Group height
  let bottomGroupH = 0;
  if (closingLines.length > 0) {
    bottomGroupH += closingLines.length * closingLineH;
  }
  if (signatureLines.length > 0) {
    bottomGroupH += (bottomGroupH > 0 ? 6 : 0) + signatureLines.length * signatureLineH;
  }
  if (footerLines.length > 0) {
    bottomGroupH += (bottomGroupH > 0 ? 8 : 0) + footerLines.length * footerLineH;
  }

  const totalInnerContentH =
    topGroupH +
    (middleGroupH > 0 ? groupGap + middleGroupH : 0) +
    (bottomGroupH > 0 ? groupGap + bottomGroupH : 0);

  const innerBoxHeight = totalInnerContentH + innerPadY * 2;
  const logicalHeight = innerBoxHeight + outerPad * 2;

  canvas.width = Math.round(logicalWidth * scale);
  canvas.height = Math.round(logicalHeight * scale);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.save();
  ctx.scale(scale, scale);

  // 1. Outer Rounded Card Background & Border (matches preview rounded-2xl border-2)
  drawRoundedRectPath(ctx, 1, 1, logicalWidth - 2, logicalHeight - 2, 18);
  const grad = ctx.createLinearGradient(0, 0, logicalWidth, logicalHeight);
  grad.addColorStop(0, theme.bgStart);
  grad.addColorStop(1, theme.bgEnd);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.strokeStyle = theme.borderGold;
  ctx.lineWidth = 2;
  ctx.stroke();

  // 2. Inner Rounded Frame Border (matches preview rounded-xl border)
  const innerX = outerPad;
  const innerY = outerPad;
  drawRoundedRectPath(ctx, innerX, innerY, innerBoxWidth, innerBoxHeight, 12);
  ctx.save();
  ctx.strokeStyle = theme.borderGold;
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 1.15;
  ctx.stroke();
  ctx.restore();

  const centerX = logicalWidth / 2;
  let y = innerY + innerPadY;

  // 3. Top Royal Golden Lotus & Diamond-Spear Ornament
  drawTopLotusOrnament(ctx, centerX, y, isVertical, theme);

  y += emblemSize;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  // ROW 1: Header Line
  if (headerLines.length > 0) {
    y += 10;
    ctx.fillStyle = theme.textSecondary;
    ctx.font = headerFont;
    headerLines.forEach((line) => {
      ctx.fillText(line, centerX, y);
      y += headerLineH;
    });
  }

  // ROW 2: Greeting Line
  if (greetingLines.length > 0) {
    y += 8;
    ctx.fillStyle = theme.textPrimary;
    ctx.font = greetingFont;
    greetingLines.forEach((line) => {
      ctx.fillText(line, centerX, y);
      y += greetingLineH;
    });
  }

  // ROW 3: Title Line
  if (titleLines.length > 0) {
    y += 6;
    ctx.fillStyle = theme.textSecondary;
    ctx.font = titleFont;
    titleLines.forEach((line) => {
      ctx.fillText(line, centerX, y);
      y += titleLineH;
    });
  }

  // ROW 4: Middle Quote Box with Top & Bottom Divider Lines (matches preview border-y py-2)
  if (bodyLines.length > 0) {
    y += groupGap;
    const dividerHalfW = Math.min(bodyMaxTextWidth / 2, isVertical ? 140 : 215);

    // Top border of quote
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX - dividerHalfW, y);
    ctx.lineTo(centerX + dividerHalfW, y);
    ctx.strokeStyle = theme.borderGold;
    ctx.globalAlpha = 0.32;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    y += quotePadY;
    ctx.fillStyle = theme.textPrimary;
    ctx.font = bodyFont;
    bodyLines.forEach((line) => {
      ctx.fillText(line, centerX, y);
      y += bodyLineH;
    });
    y += quotePadY;

    // Bottom border of quote
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX - dividerHalfW, y);
    ctx.lineTo(centerX + dividerHalfW, y);
    ctx.strokeStyle = theme.borderGold;
    ctx.globalAlpha = 0.32;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  // BOTTOM GROUP: Row 5 + Row 6 + Row 7 (tightly grouped right below Middle Group)
  if (bottomGroupH > 0) {
    y += groupGap;

    if (closingLines.length > 0) {
      ctx.fillStyle = theme.textSecondary;
      ctx.font = closingFont;
      closingLines.forEach((line) => {
        ctx.fillText(line, centerX, y);
        y += closingLineH;
      });
    }

    if (signatureLines.length > 0) {
      if (closingLines.length > 0) y += 6;
      ctx.save();
      ctx.fillStyle = theme.textPrimary;
      ctx.globalAlpha = 0.95;
      ctx.font = signatureFont;
      signatureLines.forEach((line) => {
        ctx.fillText(line, centerX, y);
        y += signatureLineH;
      });
      ctx.restore();
    }

    if (footerLines.length > 0) {
      if (closingLines.length > 0 || signatureLines.length > 0) y += 8;
      ctx.save();
      ctx.fillStyle = theme.textSecondary;
      ctx.globalAlpha = 0.82;
      ctx.font = footerFont;
      footerLines.forEach((line) => {
        ctx.fillText(line, centerX, y);
        y += footerLineH;
      });
      ctx.restore();
    }
  }

  ctx.restore();
}

export function downloadGreetingCardImage(options: {
  headerLine: string;
  greetingLine: string;
  titleLine: string;
  bodyMessage: string;
  closingLine: string;
  signatureLine: string;
  footerLine: string;
  theme: CardThemeConfig;
  orientation: CardOrientation;
}): void {
  const canvas = document.createElement('canvas');
  renderGreetingCardToCanvas(canvas, options);

  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  const safeSlug = (options.greetingLine.trim() || 'karwa-chauth')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  link.download = `happy-karwa-chauth-${options.orientation}-${safeSlug || 'card'}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
