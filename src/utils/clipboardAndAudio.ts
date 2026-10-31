/**
 * Reliable clipboard copy utility that works both in standard browsers
 * and inside cross-origin / sandboxed iframes where navigator.clipboard may be blocked.
 */
export async function copyTextReliable(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to textarea execCommand fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length);
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

/**
 * Smoothly scrolls to a target element by ID without triggering iframe hash navigation issues.
 */
export function scrollToSectionById(sectionId: string): void {
  const cleanId = sectionId.replace(/^#/, '');
  if (cleanId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(cleanId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

let sharedAudioCtx: AudioContext | null = null;
let activeNodes: AudioNode[] = [];
let cachedImpulseBuffer: AudioBuffer | null = null;

/**
 * Creates a natural stereo acoustic Temple Mandapam reverb impulse response
 * so every bell strike carries a rich, sacred temple echo.
 */
function getTempleReverbBuffer(ctx: AudioContext): AudioBuffer {
  if (cachedImpulseBuffer && cachedImpulseBuffer.sampleRate === ctx.sampleRate) {
    return cachedImpulseBuffer;
  }
  const duration = 2.4;
  const length = Math.floor(ctx.sampleRate * duration);
  const impulse = ctx.createBuffer(2, length, ctx.sampleRate);

  for (let ch = 0; ch < 2; ch++) {
    const channelData = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      const t = i / ctx.sampleRate;
      // Early temple stone reflections + smooth exponential hall tail
      const earlyBoost = t < 0.08 ? 1.35 : 1.0;
      const env = Math.pow(1 - i / length, 2.6) * Math.exp(-t * 2.1) * earlyBoost;
      channelData[i] = (Math.random() * 2 - 1) * env * 0.45;
    }
  }
  cachedImpulseBuffer = impulse;
  return impulse;
}

/**
 * Synthesizes an authentic, resonant Indian cast-brass/kansa temple bell (Puja Ghanta)
 * with metallic clapper strike, natural bronze shimmer (beating partials),
 * and sacred temple hall echo (2 strikes per set × 3 sets = 6 strikes).
 */
export async function playSacredBellChime(): Promise<boolean> {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return false;

    if (!sharedAudioCtx || sharedAudioCtx.state === 'closed') {
      sharedAudioCtx = new AudioCtx();
    }
    const ctx = sharedAudioCtx;
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    // Stop any previous bell nodes cleanly when re-clicked
    activeNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof (node as OscillatorNode).stop === 'function') {
          (node as OscillatorNode).stop();
        }
        node.disconnect();
      } catch {
        // already stopped
      }
    });
    activeNodes = [];

    // Master Output Compressor/Limiter for clean, loud, distortion-free bell resonance
    const masterCompressor = ctx.createDynamicsCompressor();
    masterCompressor.threshold.setValueAtTime(-10, ctx.currentTime);
    masterCompressor.knee.setValueAtTime(12, ctx.currentTime);
    masterCompressor.ratio.setValueAtTime(3, ctx.currentTime);
    masterCompressor.attack.setValueAtTime(0.002, ctx.currentTime);
    masterCompressor.release.setValueAtTime(0.25, ctx.currentTime);
    masterCompressor.connect(ctx.destination);
    activeNodes.push(masterCompressor);

    // Dry Signal Bus
    const dryBus = ctx.createGain();
    dryBus.gain.setValueAtTime(0.85, ctx.currentTime);
    dryBus.connect(masterCompressor);
    activeNodes.push(dryBus);

    // 1. Distinct Temple Echo Network (Multi-Tap Delay with Warm Brass Filtering)
    const echoDelay1 = ctx.createDelay(1.0);
    echoDelay1.delayTime.setValueAtTime(0.165, ctx.currentTime); // 165ms temple slap echo

    const echoFilter = ctx.createBiquadFilter();
    echoFilter.type = 'lowpass';
    echoFilter.frequency.setValueAtTime(3200, ctx.currentTime);

    const echoFeedback = ctx.createGain();
    echoFeedback.gain.setValueAtTime(0.42, ctx.currentTime); // Multi-repeat echo tail

    const echoWetGain = ctx.createGain();
    echoWetGain.gain.setValueAtTime(0.46, ctx.currentTime);

    echoDelay1.connect(echoFilter);
    echoFilter.connect(echoFeedback);
    echoFeedback.connect(echoDelay1);
    echoFilter.connect(echoWetGain);
    echoWetGain.connect(masterCompressor);
    activeNodes.push(echoDelay1, echoFilter, echoFeedback, echoWetGain);

    // 2. Temple Mandapam Acoustic Reverb (ConvolverNode)
    const convolver = ctx.createConvolver();
    convolver.buffer = getTempleReverbBuffer(ctx);
    const reverbWetGain = ctx.createGain();
    reverbWetGain.gain.setValueAtTime(0.52, ctx.currentTime);
    convolver.connect(reverbWetGain);
    reverbWetGain.connect(masterCompressor);
    activeNodes.push(convolver, reverbWetGain);

    const triggerAuthenticGhantaStrike = (startTime: number, velocity: number) => {
      // A. Metallic Brass Clapper Impact ("Ting" transient when clapper hits rim)
      const strikeOsc = ctx.createOscillator();
      const strikeGain = ctx.createGain();
      strikeOsc.type = 'triangle';
      strikeOsc.frequency.setValueAtTime(3100, startTime);
      strikeOsc.frequency.exponentialRampToValueAtTime(1661.2, startTime + 0.022);

      strikeGain.gain.setValueAtTime(0.0001, startTime);
      strikeGain.gain.linearRampToValueAtTime(0.35 * velocity, startTime + 0.002);
      strikeGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.055);

      strikeOsc.connect(strikeGain);
      strikeGain.connect(dryBus);
      strikeGain.connect(echoDelay1);
      strikeOsc.start(startTime);
      strikeOsc.stop(startTime + 0.06);
      activeNodes.push(strikeOsc, strikeGain);

      // B. Cast Kansa/Brass Temple Bell Modal Partials (with natural detuned beating pairs)
      // Fundamental f0 = 830.61 Hz (G#5) & Nominal = 1661.22 Hz (G#6) — classic bright Indian Puja Ghanta pitch
      const bellModes = [
        { freq: 415.3, amp: 0.16, decay: 2.1, attack: 0.004 },   // Sub-octave warm brass hum
        { freq: 830.61, amp: 0.42, decay: 1.85, attack: 0.003 }, // Prime fundamental (A)
        { freq: 832.5, amp: 0.28, decay: 1.75, attack: 0.003 },  // Prime detuned pair (creates natural brass wave shimmer)
        { freq: 987.77, amp: 0.24, decay: 1.45, attack: 0.003 }, // Minor third tierce modal ring
        { freq: 1244.5, amp: 0.22, decay: 1.25, attack: 0.002 }, // Fifth modal partial
        { freq: 1661.22, amp: 0.38, decay: 1.55, attack: 0.002 },// Bright Nominal Octave ring (main ghanta chime)
        { freq: 1664.1, amp: 0.22, decay: 1.4, attack: 0.002 },  // Nominal detuned shimmer
        { freq: 2217.46, amp: 0.16, decay: 0.95, attack: 0.002 },// Upper bronze harmonic
        { freq: 2793.83, amp: 0.13, decay: 0.72, attack: 0.0015 },// High metallic brilliance
        { freq: 3520.0, amp: 0.09, decay: 0.45, attack: 0.0015 }, // Rim strike ping
        { freq: 4434.92, amp: 0.06, decay: 0.28, attack: 0.001 }, // Crystalline overtone
      ];

      bellModes.forEach((mode) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(mode.freq, startTime);

        const peak = Math.max(0.001, mode.amp * velocity);
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.linearRampToValueAtTime(peak, startTime + mode.attack);
        // Two-stage bell envelope: initial bright ring followed by warm echoing sustain
        gain.gain.exponentialRampToValueAtTime(peak * 0.32, startTime + mode.decay * 0.28);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + mode.decay);

        osc.connect(gain);
        gain.connect(dryBus);
        gain.connect(echoDelay1);
        gain.connect(convolver);

        osc.start(startTime);
        osc.stop(startTime + mode.decay + 0.05);
        activeNodes.push(osc, gain);
      });
    };

    const now = ctx.currentTime + 0.01;

    // 3 sets of double-strikes ("2 bar 2 bar kore 3 bar") synchronized with the 3x 0.9s bell swing animation:
    // Set 1 (0.00s & 0.28s)
    triggerAuthenticGhantaStrike(now + 0.0, 1.0);
    triggerAuthenticGhantaStrike(now + 0.28, 0.82);

    // Set 2 (0.90s & 1.18s)
    triggerAuthenticGhantaStrike(now + 0.9, 1.0);
    triggerAuthenticGhantaStrike(now + 1.18, 0.82);

    // Set 3 (1.80s & 2.08s — final strike rings out with long temple echo)
    triggerAuthenticGhantaStrike(now + 1.8, 1.0);
    triggerAuthenticGhantaStrike(now + 2.08, 0.92);

    return true;
  } catch {
    return false;
  }
}


