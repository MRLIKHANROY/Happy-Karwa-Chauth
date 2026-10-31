import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sparkles,
  Moon,
  CheckSquare,
  Square,
  Share2,
  Copy,
  Check,
  Download,
  ChevronDown,
  ChevronUp,
  Sun,
  Heart,
  RotateCcw,
  X,
  Eye,
  Plus,
  Trash2,
  BookOpen,
  Edit3,
  RectangleHorizontal,
  RectangleVertical,
} from 'lucide-react';
import {
  CITY_MOONRISE_TIMINGS,
  SAMAGRI_CHECKLIST_ITEMS,
  SamagriItem,
  getFestivalYearData,
  getCityTimingsForYear,
  getMostRecentUpcomingFestivalYear,
} from './data/festivalData';
import {
  SUPPORTED_LANGUAGES,
  SITE_TRANSLATIONS,
  SupportedLanguage,
} from './data/translations';
import {
  FULL_LANGUAGE_CONTENT,
  LocalizedWishItem,
} from './data/localizedContent';
import {
  HeroCoupleIllustration,
  ChhalniSimulatorGraphic,
  OrnateDivider,
  OrnateTempleBellIcon,
  CardTopLotusOrnament,
} from './components/FestiveIllustrations';
import {
  CARD_THEMES,
  CardThemeConfig,
  CardOrientation,
  renderGreetingCardToCanvas,
  downloadGreetingCardImage,
} from './utils/greetingCardCanvas';
import {
  copyTextReliable,
  scrollToSectionById,
  playSacredBellChime,
} from './utils/clipboardAndAudio';

const STORAGE_KEY_SAMAGRI = 'karwa_chauth_samagri_checked_v2';
const STORAGE_KEY_CUSTOM_SAMAGRI = 'karwa_chauth_custom_samagri_v1';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  targetLabel: string;
  targetDateDisplay: string;
}

export default function App() {
  // 0. Site & Card Multi-Language State (100% Site + Cards Translation)
  const [lang, setLang] = useState<SupportedLanguage>('en');
  const t = SITE_TRANSLATIONS[lang];
  const lc = FULL_LANGUAGE_CONTENT[lang];

  // 1. Smart Hide-on-Scroll-Down / Show-on-Scroll-Up Header State (ONLY on Finger/Manual Scroll) + Active Section Scroll-Spy
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  const lastScrollYRef = useRef<number>(0);
  const isProgrammaticScrollRef = useRef<boolean>(false);
  const programmaticScrollTimerRef = useRef<number | null>(null);
  const isManualUserScrollRef = useRef<boolean>(false);
  const manualScrollTimerRef = useRef<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('top');

  const triggerProgrammaticScroll = (targetId: string, activeNavId?: string) => {
    if (programmaticScrollTimerRef.current) {
      window.clearTimeout(programmaticScrollTimerRef.current);
    }
    if (manualScrollTimerRef.current) {
      window.clearTimeout(manualScrollTimerRef.current);
    }
    isManualUserScrollRef.current = false;
    isProgrammaticScrollRef.current = true;
    setHeaderVisible(true);
    setMobileMenuOpen(false);
    if (activeNavId) {
      setActiveSectionId(activeNavId);
    }

    scrollToSectionById(targetId);

    programmaticScrollTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      lastScrollYRef.current = window.scrollY;
    }, 600);
  };

  useEffect(() => {
    const sectionOrder = [
      'countdown',
      'puja-vidhi',
      'samagri',
      'sargi-guide',
      'rituals',
      'wishes',
      'faq',
    ];

    const markManualUserScroll = () => {
      // As soon as the user scrolls with their finger or wheel, cancel programmatic lock
      if (programmaticScrollTimerRef.current) {
        window.clearTimeout(programmaticScrollTimerRef.current);
        programmaticScrollTimerRef.current = null;
      }
      isProgrammaticScrollRef.current = false;
      isManualUserScrollRef.current = true;

      if (manualScrollTimerRef.current) {
        window.clearTimeout(manualScrollTimerRef.current);
      }
      // Keep manual-scroll window active through touch momentum scrolling
      manualScrollTimerRef.current = window.setTimeout(() => {
        isManualUserScrollRef.current = false;
      }, 1200);
    };

    const handleScrollEnd = () => {
      if (isProgrammaticScrollRef.current) {
        if (programmaticScrollTimerRef.current) {
          window.clearTimeout(programmaticScrollTimerRef.current);
          programmaticScrollTimerRef.current = null;
        }
        isProgrammaticScrollRef.current = false;
        lastScrollYRef.current = window.scrollY;
      }
    };

    const updateScrollAndActiveSection = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;

      // During programmatic scroll from clicking a menu/navigation link, NEVER hide the header
      if (isProgrammaticScrollRef.current) {
        lastScrollYRef.current = currentY;
        setHeaderVisible(true);
        if (programmaticScrollTimerRef.current) {
          window.clearTimeout(programmaticScrollTimerRef.current);
        }
        programmaticScrollTimerRef.current = window.setTimeout(() => {
          isProgrammaticScrollRef.current = false;
          lastScrollYRef.current = window.scrollY;
        }, 200);
        return;
      }

      if (currentY <= 60) {
        setHeaderVisible(true);
      } else if (isManualUserScrollRef.current) {
        if (currentY > lastY + 8 && currentY > 80) {
          setHeaderVisible(false);
          setMobileMenuOpen(false);
        } else if (currentY < lastY - 6) {
          setHeaderVisible(true);
        }
      }

      lastScrollYRef.current = currentY;

      // Determine which section the user is currently viewing
      const triggerLine = window.innerHeight * 0.36;
      let currentSection = 'top';

      for (const secId of sectionOrder) {
        const el = document.getElementById(secId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentSection = secId;
          }
        }
      }

      // If scrolled near the bottom of the page, mark the last visible section active
      if (
        window.innerHeight + currentY >=
        document.documentElement.scrollHeight - 40
      ) {
        currentSection = 'faq';
      }

      setActiveSectionId(currentSection);
    };

    updateScrollAndActiveSection();
    window.addEventListener('touchmove', markManualUserScroll, {
      passive: true,
    });
    window.addEventListener('wheel', markManualUserScroll, {
      passive: true,
    });
    window.addEventListener('scroll', updateScrollAndActiveSection, {
      passive: true,
    });
    window.addEventListener('scrollend', handleScrollEnd, {
      passive: true,
    });
    window.addEventListener('resize', updateScrollAndActiveSection, {
      passive: true,
    });
    return () => {
      window.removeEventListener('touchmove', markManualUserScroll);
      window.removeEventListener('wheel', markManualUserScroll);
      window.removeEventListener('scroll', updateScrollAndActiveSection);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('resize', updateScrollAndActiveSection);
    };
  }, []);

  // 2. Hero Interactive Diya, Puja Bell (3x2 Strikes) & Toast State
  const [isDiyaBlessed, setIsDiyaBlessed] = useState<boolean>(true);
  const [isBellRinging, setIsBellRinging] = useState<boolean>(false);
  const [bellRingKey, setBellRingKey] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const bellTimerRef = useRef<number | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    triggerProgrammaticScroll(targetId, targetId);
  };

  const siteFaviconDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAL70lEQVR42u2du6tdVRDGU0eMhQoBExCtYpqAiFiIDxB7LWy0EXxgJWIrtxBBgqV2IdZWWtgomhSCFpJOsLPwXxCRIOTKEnY4nOy196w177W+BVOJ996c830zv5lZ+5wzZ3BwcHBwcHBwcHBwcHC6znuvPXJyGF9+fOnmb18/fcqJ8jOOfy5eaRzX89Tl+59bxMgVODeWv6P8TXhncFQzu7fYW02Bdw6HleGzCJ5iCFQInKlEDzPgQPQwA06N6WcV/ZYZoAxkexgBVWE84UvM42eL8prBCBA+jAAjQPgIGAHCR8AImOogMDUKlvUji+SbTy6ffvb6o6woPyPyvxHVALhzV6zvPvnw6Utnz6pG+R3L7wMWAXfcsrqF2FtN4V0tgEXKxyvrRxM81RBe1QBKHYD1s4k+mhmARAmzvqTo33zwwXvi5OJFUqz9vxnNgGqQQPwL0/eK6tVz55oFzo3l95Xf3ft3W/UMMEFQ5Clvfk+2XwRvJfYWU/QYorwGFkYAEgURf4/wi7jeP38+nOhrUf7WVmyyMAJM4DjibBV+NtFLmUHbCBiVOvA+VfhR8cYDk8prhr4gufipzW0RxQjZvqUqUI2gNTWCCRTFT8WdkbN9S1XwwqLpTaAhforwS/abXfjHQakIGlg0rQmkxV8yFFDHBo2kq8F0JpAW/x7rQ/jyRpDuDaYxgbT495AHnK/XH0gj0fAmkBT/HvIg69tVA0kkGtYEkkuuPfEj69tXA0kTDLcsk7zesIc8yPq61cAKiYa5NmElfow2Y4xMYYKjYyF+IE8sJJI0AZreHfEDeWIikZQJ0jbFED9MMK0JpLgf4ocJUvYDmuLHfF8mbnz6wd3Q3hdImWAa9NkSP8TLE/0fP147vfPXL3fj+isvm0yIJEwQHoUkll0Qv47wD0WvJX4LE4Rdkklw/9aGF9gjJ3xN8e/1BBIb45D9ABd9IH7ZOEadwyj/zbMx5pogHApJZH+IXyZKZt8Sf4kI06GhqoAW90P87eLfEr42+rSYQKIfGKLxrT3MgusNsthjnf0p1ya4D9W4N8Rc9KlxPyY+OuKXmvlLToa4/YArCnEb3xofQtDy6OOV/Q9Dox9wa4i52X9W7v/9owf+D8mfSRF/BANo9QMuVYCT/WvoMzr3F+H/ff2+u3Ht2fOqs/4o+EPpBzgoZF4FNLL/yNxfhH4sfikTULN/FAPU+oFUVYCT/WtTn1HRpwh8TfgSJqBm/2gGqKEQZypkVgW42X8m9KGIf4mevoAy+YlogC0UCl8FONl/JvT5/o2HyOLvNQFV/BENoIFC6lWAk/1rje+I6FPjfUkTUEefkQ1QQyFOQ6xaBThb31myP0f8LSZo4f+oBtCoAqrbYWR/ffFTTdBqgAh7AKsqgOyfXPwUE4xigDRVQDr7Q/w8E/QYICoG1a5JhKkCnOZ3LfuPNPbsmfZImKDHABYPwkiORTlVQLQZ7sWf0bN/y5xf2gQ9BvB4HsCrCohikOTWdxT2txT/2sa41wCRq8BaL8DZDrvjz8iTH03u34reRViGKlCbCLliUC/+jJz9Kdx/5/ZPXfHPt8+QUajXAJFNIFkFRDAIze+9sSf+27++022A8v9SUagXgyKjkHQzHAp/Zsn+HAP8++cX5Ia49TpEFhOEwSBJ/Jkl+5coIu41QImWhphjgKg4tFYFXDBIEn9GaH6pM3+O+KkGKH8LF4MyPS/ggkHAHx8DUPqAw4lQy3MBe0jEqQaSlUQSg4A/hvjjYQBuL1CrCFRBL586LWkAdwzqNcCo+BPRAAsGSaLQliEO47jqSDfUkhjUZQDgT58BOBMgjgEkUSjKNMkVg6Tu/ox07Tm6ATxMoDlKXVuK9d4NMpn/j8z/ERGo9mkSVibQ3iNI9gFN+wBJ/h/p3n/UJljqeYGISzSXPqDXAKM/+GI1Bt27D0QxAPW7AqIvzqT6gCYDSDXAoz32SL0CbbkIk/4ArWjLsrU+QL0RBv/7NsIS2b9WEXo+TcLzqoRkHwADDHYZTvK7go9jxHtBaICNHoYpDG9xHXqWMG2E0QDL9AJaDXAL+49qANVGGAaQqQK9GGSBPjCAgQFm+JK7LRP0YNAe/syGPlt9gJoBej79ee0KxAwG2EMhSfyZVfw1A/RciSB9ejQmQHImaMGgrenPzOI3nwTBALIm4OLPrNwPAwxiAurzwRD/YAaY8Y1aMwGlGV7L/hD/9iQIBkhkgr0qAPHDAEObYKsKHGf/2RteGGBQE9SqAMQPA0zxBdlrVeAw+0P8MMDwG+PjKgDxwwBTmeCwCpTsj2YXBpgqyk3OUgVKQPwwwLR9wQ8fvojXAgZAIAY2wGxXIRC4CgEDIGAAGACR2gB4IAYx9QMxeCQSMfUjkXgoHoGH4mEABAyAD8ZCTPjBWJgEIaadAMEACBgg+Mejf/7C46dfvf0EImCU92aIj0eP3gj3vgAI3UjfAGdphEumgeBihUb2P/H6iqQMX5J34+oVCC9IlPciOv83fUlelq9JhfjGRZ8Tz69JzfJF2UChcdHnxPuLsiX7gPK191ovUpk+QIg+UV57rfe1aMaF/7kG8NgHoB8Yh/s1+L/LAFkwiIJC3124gOgIL/Rxxx+uAawxaM8Et65egaAb49ZGVdUWvyT+sAyQCYP2UOjnty5B2MQor5UX+oTBH84+wPN69NbfdPP5xyDwnSivkcfIUwt/muf/mhhkUQWAQnnRp5b9XfBHA4M0l2JUFIIJ+sRvgT615ZcL/mhhkHYzTDEBUKgNfazEv9b8uuIPF4M8qwBGo3lGnhrZXwR/uBi0djfI8lHJrS0xUIiGPprbXkrz23v3RwR/JDDIqxkGCuVBH43mVwx/uBjkXQX2UGhmE+yNPK3QRzr7i+IPF4NqVcCqF8BoNO7Ic4v9OdlfFH80q4DVRAhb4njb3r3JT6jsP0IVwJY41rY3XfbnNsMRqgBQKBb6aGR/8eZX4tOjI1WB2bfEEba9Wtmf9OnPnlWgth22/gCtWUejUUaetbEnZ+trkv0lqsDadjgSCo28JY4y8qyhD2fra5L9papABBSabUscZdurgT6m2V+iCtQaYqDQvOjDaXxNs79mFYiGQiOYINK2t4Y+6bK/RBWoNcTW3ysw+mg0ysizdt2B2/i6ZH+pKlBDoUij0cxb4ijb3hr3c9HHNftLbIe3pkLW/cBoKBRp21vjfs7UR33ra3FHKEs/kBGFom97udyveufHGoW2+oEoF+YymSDKtrcmfi73h0Af6Ya41g9EMkEGFIoy8twSP5f7XRtfzSoQwQTZt8QRRp6a4g+Z/aUa4q1+wHIylHVLHGXbW5v4SHB/mMZXC4WimCDbaDTKyFNT/CHRR2MqtGcCKxzKMhqNMPIs74mm+ENNfSz6gS0TSPcEM37JhiQSbTG/lPjDcr8mClmZAAaILf406JPVBDAAxB+6H9gzAffaBAwgd71BUvypuF+7H9gzAWdCBAPITHqkxZ+O+71N0ItEMAAfeSB+gyUZZWPcg0QwAA95pDa8aZZd3k0xxQQt+wIYoG++ryH+9E2vpQkoSESpBjBAX9aXRJ4pxK9lgtpDNdRqUC6JFUHMFFsX4yhZn/swy7Ti1zLBHhJZX6PIGBThSyPPlOLXMgEFiTyeOc4QFOFLI8/U4tc0QclQFCNYP3ccMfY4fxG+dNaH+JVNQOkNZkUjKuposD7Eb2wCKhYtRhi5KpR/G1X4GrgD8Rsuy3qx6BCPRqgK5d9AwRxt3Bl+yRXx2oSEETKaoVX0FsIf8npDVhP0GiEyJrXgjbXwIf6AfcGhEajN8pYhLE2x/L4ewR82txbCB+8nMMHh1KinKtSw6ThaBX4YEn9T+bdpTXUg/uRIpGkGz7AWPZBnkGqQ2QxeokfWTz4qbekZIhliEbwF02PEGQSJvKpBrUJYmWIRu1eGr2V9IM8kvUFPteCEd1YH6wOLEMAdYBECuAMjQPgQPowA4ePACBA+Tj4joFmmNbcQPqZGmOrgoCog2+PADBA9DswA0eNM3jNkMsTy9+Kdw1GtEBFMsfwdyPA4YSrFEhL7h/Izjn8uXmkcHBwcHBwcHBwcHJy+8x9MsIsT0p3NPwAAAABJRU5ErkJggg==';

  const [siteLogoSrc, setSiteLogoSrc] = useState<string>(siteFaviconDataUrl);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const paths = ['./favicon.png', '/favicon.png', './public/favicon.png'];
    const tryPath = (idx: number) => {
      if (idx >= paths.length) {
        setSiteLogoSrc(siteFaviconDataUrl);
        return;
      }
      const probe = new Image();
      probe.onload = () => {
        if (probe.naturalWidth > 0) {
          setSiteLogoSrc(paths[idx]);
        } else {
          tryPath(idx + 1);
        }
      };
      probe.onerror = () => tryPath(idx + 1);
      probe.src = paths[idx];
    };
    tryPath(0);
  }, []);

  const handleLogoImgError = () => {
    setSiteLogoSrc(siteFaviconDataUrl);
  };

  // Rings the Puja Bell 2 times per set for 3 sets (2.7s total) & restarts animation on every click
  const handleRingBell = async () => {
    if (bellTimerRef.current) {
      window.clearTimeout(bellTimerRef.current);
    }
    setBellRingKey((prev) => prev + 1);
    setIsBellRinging(true);

    bellTimerRef.current = window.setTimeout(() => {
      setIsBellRinging(false);
    }, 2700);

    await playSacredBellChime();
  };

  // 4. Verified Festival Year & City Moonrise Selection
  const [selectedCityId, setSelectedCityId] = useState<string>('delhi');
  const selectedCity = useMemo(
    () =>
      CITY_MOONRISE_TIMINGS.find((c) => c.id === selectedCityId) ||
      CITY_MOONRISE_TIMINGS[0],
    [selectedCityId]
  );

  const localizedCityMeta = useMemo(
    () =>
      lc.cityNames[selectedCity.id] || {
        city: selectedCity.city,
        region: selectedCity.region,
      },
    [lc, selectedCity]
  );

  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  // Automatically identifies the most recent UPCOMING Karwa Chauth year every second
  const upcomingFestivalYear = useMemo(
    () => getMostRecentUpcomingFestivalYear(nowMs, selectedCity),
    [nowMs, selectedCity]
  );

  // Only 1 connected past year (upcomingFestivalYear - 1)
  const minConnectedPastYear = upcomingFestivalYear - 1;

  // By default, select the most recent UPCOMING Karwa Chauth year automatically
  const [selectedYear, setSelectedYear] = useState<number>(() =>
    getMostRecentUpcomingFestivalYear(Date.now(), CITY_MOONRISE_TIMINGS[0])
  );
  const [userPickedCustomYear, setUserPickedCustomYear] = useState<boolean>(false);

  // Refs for Past & Coming slot bar so "Coming" starts at the left edge and user can slide left for the 1 "Past" slot
  const yearScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const upcomingYearBtnRef = useRef<HTMLButtonElement | null>(null);
  const isDraggingYearBarRef = useRef<boolean>(false);
  const hasDraggedYearBarRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartScrollLeftRef = useRef<number>(0);

  // Automatically advance to the new upcoming year whenever Karwa Chauth concludes
  useEffect(() => {
    if (!userPickedCustomYear && selectedYear !== upcomingFestivalYear) {
      setSelectedYear(upcomingFestivalYear);
    } else if (selectedYear < minConnectedPastYear) {
      setSelectedYear(minConnectedPastYear);
    }
  }, [upcomingFestivalYear, minConnectedPastYear, userPickedCustomYear, selectedYear]);

  const scrollComingYearToLeftEdge = (smooth: boolean) => {
    const container = yearScrollContainerRef.current;
    const upcomingBtn = upcomingYearBtnRef.current;
    if (!container || !upcomingBtn) return;
    const targetLeft = Math.max(0, upcomingBtn.offsetLeft - 4);
    if (smooth) {
      container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    } else {
      container.scrollLeft = targetLeft;
    }
  };

  // Position the first "Coming" slot right at the left edge by default (user slides left to see the 1 "Past" slot)
  useEffect(() => {
    if (selectedYear === upcomingFestivalYear) {
      const raf = window.requestAnimationFrame(() => {
        scrollComingYearToLeftEdge(false);
      });
      return () => window.cancelAnimationFrame(raf);
    }
  }, [upcomingFestivalYear, lang]);

  const handleSelectYear = (yr: number) => {
    const clampedYr = Math.max(minConnectedPastYear, yr);
    setSelectedYear(clampedYr);
    setUserPickedCustomYear(clampedYr !== upcomingFestivalYear);

    const container = yearScrollContainerRef.current;
    if (!container) return;
    if (clampedYr === upcomingFestivalYear) {
      window.requestAnimationFrame(() => scrollComingYearToLeftEdge(true));
    } else if (clampedYr === minConnectedPastYear) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Automatic Past & Coming Year Slots: ONLY 1 connected Past year + Coming years
  const quickYearOptions = useMemo(
    () => [
      minConnectedPastYear,
      upcomingFestivalYear,
      upcomingFestivalYear + 1,
      upcomingFestivalYear + 2,
      upcomingFestivalYear + 3,
      upcomingFestivalYear + 4,
    ],
    [minConnectedPastYear, upcomingFestivalYear]
  );

  const activeYearData = useMemo(
    () => getFestivalYearData(selectedYear),
    [selectedYear]
  );

  const activeCityYearTimings = useMemo(
    () => getCityTimingsForYear(selectedCity, selectedYear),
    [selectedCity, selectedYear]
  );

  const targetTimestamp = activeCityYearTimings.moonriseTimestamp;

  // Dynamic verified summary showing the 1 connected Past year and Coming years
  const dynamicVerifiedDatesText = useMemo(() => {
    const prevData = getFestivalYearData(minConnectedPastYear);
    const upData = getFestivalYearData(upcomingFestivalYear);
    const nextData = getFestivalYearData(upcomingFestivalYear + 1);
    return `${prevData.year}: ${prevData.shortDate} (${t.yearStatusPast}) · ★ ${upData.year}: ${upData.dateFormatted} (${t.yearStatusComing}) · ${nextData.year}: ${nextData.shortDate} (${t.yearStatusComing})`;
  }, [minConnectedPastYear, upcomingFestivalYear, t.yearStatusPast, t.yearStatusComing]);

  const countdown = useMemo<CountdownState>(() => {
    const diff = targetTimestamp - nowMs;
    const isPast = diff < 0;
    const absDiff = Math.abs(diff);

    const label = `${lc.moonriseTargetPrefix} ${localizedCityMeta.city} · ${t.brandTitle} ${selectedYear}`;
    const dateDisplay = `${activeYearData.dateFormatted} (${activeYearData.dayOfWeek}) · ${activeCityYearTimings.moonriseDisplay}`;

    const totalSeconds = Math.floor(absDiff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      isPast,
      targetLabel: label,
      targetDateDisplay: dateDisplay,
    };
  }, [
    targetTimestamp,
    nowMs,
    selectedYear,
    activeYearData,
    activeCityYearTimings,
    lc,
    localizedCityMeta,
    t.brandTitle,
  ]);

  const userLocalMoonriseInfo = useMemo(() => {
    try {
      const tz =
        Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local Time';
      const formatted = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short',
      }).format(new Date(targetTimestamp));
      return { tz, formatted };
    } catch {
      return {
        tz: 'Local Time',
        formatted: activeYearData.defaultMoonriseIST,
      };
    }
  }, [targetTimestamp, activeYearData]);

  // 5. Puja Vidhi Interactive Active Step & Full Vrat Katha Reader
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [showFullKatha, setShowFullKatha] = useState<boolean>(false);
  const [copiedMantraStep, setCopiedMantraStep] = useState<string | null>(null);

  const handleCopyMantra = async (stepNumber: string, text: string) => {
    const ok = await copyTextReliable(text);
    if (ok) {
      setCopiedMantraStep(stepNumber);
      showToast(lc.copiedLabel);
      window.setTimeout(() => setCopiedMantraStep(null), 2200);
    }
  };

  // 6. Interactive Puja Samagri Checklist
  const [customSamagriItems, setCustomSamagriItems] = useState<SamagriItem[]>(
    () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_SAMAGRI);
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
      return [];
    }
  );

  const [newCustomItemName, setNewCustomItemName] = useState<string>('');
  const [newCustomItemCategory, setNewCustomItemCategory] =
    useState<SamagriItem['category']>('Puja Offerings');

  const allSamagriItems = useMemo(
    () => [...SAMAGRI_CHECKLIST_ITEMS, ...customSamagriItems],
    [customSamagriItems]
  );

  const [checkedSamagri, setCheckedSamagri] = useState<Record<string, boolean>>(
    () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_SAMAGRI);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // ignore
      }
      return {
        'karwa-pot': true,
        'chhalni': true,
        'puja-thali': true,
        'diya-ghee': true,
      };
    }
  );

  const [samagriFilter, setSamagriFilter] = useState<
    'all' | 'pending' | 'completed' | SamagriItem['category']
  >('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SAMAGRI, JSON.stringify(checkedSamagri));
    } catch {
      // ignore
    }
  }, [checkedSamagri]);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY_CUSTOM_SAMAGRI,
        JSON.stringify(customSamagriItems)
      );
    } catch {
      // ignore
    }
  }, [customSamagriItems]);

  const toggleSamagriItem = (id: string) => {
    setCheckedSamagri((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddCustomSamagri = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newCustomItemName.trim();
    if (!trimmed) return;
    const newId = `custom-${Date.now()}`;
    const newItem: SamagriItem = {
      id: newId,
      name: trimmed,
      hindiName: trimmed,
      category: newCustomItemCategory,
      purpose: lc.categoryLabels[newCustomItemCategory],
      essential: true,
    };
    setCustomSamagriItems((prev) => [...prev, newItem]);
    setCheckedSamagri((prev) => ({ ...prev, [newId]: false }));
    setNewCustomItemName('');
    showToast(`+ ${trimmed}`);
  };

  const handleDeleteCustomSamagri = (id: string, name: string) => {
    setCustomSamagriItems((prev) => prev.filter((item) => item.id !== id));
    setCheckedSamagri((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    showToast(`- ${name}`);
  };

  const markAllSamagri = () => {
    const all: Record<string, boolean> = {};
    allSamagriItems.forEach((item) => {
      all[item.id] = true;
    });
    setCheckedSamagri(all);
    showToast(`${lc.checkAllBtn} (${allSamagriItems.length})`);
  };

  const resetSamagri = () => {
    setCheckedSamagri({});
    showToast(lc.resetBtn);
  };

  const copySamagriShoppingList = async () => {
    const pendingItems = allSamagriItems.filter(
      (item) => !checkedSamagri[item.id]
    );
    const listToCopy =
      pendingItems.length > 0 ? pendingItems : allSamagriItems;
    const header = `${t.samagriTitle} (${listToCopy.length}):`;
    const text = [
      header,
      ...listToCopy.map((item, idx) => {
        const locItem = lc.samagriItems[item.id];
        const displayName = locItem ? locItem.name : item.name;
        const displayCat = lc.categoryLabels[item.category] || item.category;
        return `${idx + 1}. ${displayName} — ${displayCat}`;
      }),
    ].join('\n');

    const ok = await copyTextReliable(text);
    if (ok) {
      showToast(lc.copiedLabel);
    }
  };

  const filteredSamagriItems = useMemo(() => {
    return allSamagriItems.filter((item) => {
      if (samagriFilter === 'all') return true;
      if (samagriFilter === 'pending') return !checkedSamagri[item.id];
      if (samagriFilter === 'completed') return !!checkedSamagri[item.id];
      return item.category === samagriFilter;
    });
  }, [samagriFilter, checkedSamagri, allSamagriItems]);

  const completedSamagriCount = useMemo(
    () => allSamagriItems.filter((item) => !!checkedSamagri[item.id]).length,
    [checkedSamagri, allSamagriItems]
  );

  // 7. Interactive Chhalni Moon Simulator State
  const [viewThroughChhalni, setViewThroughChhalni] = useState<boolean>(true);
  const [activeChhalniPhase, setActiveChhalniPhase] = useState<number>(1);

  // 8. ALL-ROW EDITABLE Greeting Card Studio & Wishes Library State
  const [cardHeaderLine, setCardHeaderLine] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.headerLine
  );
  const [cardGreetingLine, setCardGreetingLine] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.greetingLine
  );
  const [cardTitleLine, setCardTitleLine] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.titleLine
  );
  const [cardBodyMessage, setCardBodyMessage] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.bodyMessage
  );
  const [cardClosingLine, setCardClosingLine] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.closingLine
  );
  const [cardSignatureLine, setCardSignatureLine] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.signatureLine
  );
  const [cardFooterLine, setCardFooterLine] = useState<string>(
    SITE_TRANSLATIONS.en.cardDefaults.footerLine
  );

  const [cardOrientation, setCardOrientation] =
    useState<CardOrientation>('horizontal');
  const [selectedCardThemeId, setSelectedCardThemeId] = useState<
    CardThemeConfig['id']
  >('crimson-zari');

  const [editableWishes, setEditableWishes] = useState<LocalizedWishItem[]>(
    FULL_LANGUAGE_CONTENT.en.wishesList
  );
  const [editingWishId, setEditingWishId] = useState<string | null>(null);
  const [wishCategoryKey, setWishCategoryKey] = useState<
    'all' | LocalizedWishItem['categoryKey']
  >('all');
  const [copiedWishId, setCopiedWishId] = useState<string | null>(null);

  const handleSelectLanguage = (newLang: SupportedLanguage) => {
    setLang(newLang);
    const defaults = SITE_TRANSLATIONS[newLang].cardDefaults;
    setCardHeaderLine(defaults.headerLine);
    setCardGreetingLine(defaults.greetingLine);
    setCardTitleLine(defaults.titleLine);
    setCardBodyMessage(defaults.bodyMessage);
    setCardClosingLine(defaults.closingLine);
    setCardSignatureLine(defaults.signatureLine);
    setCardFooterLine(defaults.footerLine);
    setEditableWishes(FULL_LANGUAGE_CONTENT[newLang].wishesList);
    const langMeta = SUPPORTED_LANGUAGES.find((l) => l.code === newLang);
    showToast(`${langMeta?.nativeName} (${langMeta?.englishName})`);
  };

  const selectedCardTheme = useMemo(
    () =>
      CARD_THEMES.find((theme) => theme.id === selectedCardThemeId) ||
      CARD_THEMES[0],
    [selectedCardThemeId]
  );

  const filteredWishes = useMemo(() => {
    if (wishCategoryKey === 'all') return editableWishes;
    return editableWishes.filter((w) => w.categoryKey === wishCategoryKey);
  }, [wishCategoryKey, editableWishes]);

  const handleUpdateWishField = (
    id: string,
    field: keyof LocalizedWishItem,
    value: string
  ) => {
    setEditableWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, [field]: value } : w))
    );
  };

  const handleLoadWishIntoStudio = (wish: LocalizedWishItem) => {
    setCardTitleLine(wish.title);
    setCardBodyMessage(wish.message);
    setCardClosingLine(wish.closing);
    triggerProgrammaticScroll('greeting-card-studio', 'wishes');
    showToast(wish.title);
  };

  const formatStudioFullText = () => {
    return [
      cardHeaderLine.trim(),
      cardGreetingLine.trim(),
      cardTitleLine.trim(),
      `“${cardBodyMessage.trim()}”`,
      cardClosingLine.trim(),
      cardSignatureLine.trim(),
      cardFooterLine.trim(),
    ]
      .filter(Boolean)
      .join('\n\n');
  };

  const handleCopyStudioCardText = async () => {
    const text = formatStudioFullText();
    const ok = await copyTextReliable(text);
    if (ok) {
      setCopiedWishId('studio-copy');
      window.setTimeout(() => setCopiedWishId(null), 2400);
      showToast(lc.copiedLabel);
    }
  };

  const handleShareStudioCard = async () => {
    const text = formatStudioFullText();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: cardTitleLine || t.brandTitle,
          text,
        });
        return;
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }
    await handleCopyStudioCardText();
  };

  const handleCopyLibraryWish = async (wish: LocalizedWishItem) => {
    const fullText = [
      wish.category,
      wish.title,
      `“${wish.message}”`,
      wish.closing,
    ]
      .filter(Boolean)
      .join('\n\n');
    const ok = await copyTextReliable(fullText);
    if (ok) {
      setCopiedWishId(wish.id);
      window.setTimeout(() => setCopiedWishId(null), 2400);
      showToast(lc.copiedLabel);
    }
  };

  // 9. FAQ Accordion State + Dynamic Yearly Puja Vidhi & FAQ Computations
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-date');

  // Dynamically compute all 6 Puja Vidhi step timing windows for the selected Year & City
  const dynamicVidhiSteps = useMemo(() => {
    const dynamicWindows = [
      activeCityYearTimings.sargiWindowDisplay,
      activeCityYearTimings.altarSetupWindowDisplay,
      activeCityYearTimings.shringarWindowDisplay,
      activeCityYearTimings.pujaMuhuratDisplay,
      `~${activeCityYearTimings.moonriseDisplay}`,
      `~${activeCityYearTimings.paranaTimeDisplay}`,
    ];
    return lc.vidhiSteps.map((step, idx) => {
      const prefix = step.timingWindow.split('·')[0]?.trim() || '';
      const computedTime = dynamicWindows[idx] || step.timingWindow;
      return {
        ...step,
        timingWindow: prefix ? `${prefix} · ${computedTime}` : computedTime,
      };
    });
  }, [lc.vidhiSteps, activeCityYearTimings]);

  // Dynamically compute FAQs across all 6 languages for the live Upcoming Year, Next Year & Selected City/Year
  const dynamicFaqsList = useMemo(() => {
    const upYr = upcomingFestivalYear;
    const nextYr = upcomingFestivalYear + 1;
    const upData = getFestivalYearData(upYr);
    const nextData = getFestivalYearData(nextYr);
    const upCity = getCityTimingsForYear(selectedCity, upYr);
    const nextCity = getCityTimingsForYear(selectedCity, nextYr);
    const selData = activeYearData;
    const selCity = activeCityYearTimings;
    const cityName = localizedCityMeta.city;

    return lc.faqsList.map((faq) => {
      if (faq.id === 'faq-date') {
        const extraSelectedNoteEn =
          selectedYear !== upYr && selectedYear !== nextYr
            ? ` For your currently selected year ${selectedYear} (${selData.dateFormatted}, ${selData.dayOfWeek}), ${cityName} Puja Muhurat is ${selCity.pujaMuhuratDisplay}, Vrat Duration is ${selCity.vratDurationDisplay}, and Moonrise is ${selCity.moonriseDisplay} (Tithi Begins: ${selData.tithiBegins}; Tithi Ends: ${selData.tithiEnds}).`
            : '';

        if (lang === 'bn') {
          return {
            ...faq,
            question: `ভারতীয় পঞ্জিকা অনুসারে ${upYr} এবং ${nextYr} সালে করওয়া চৌথ কবে ও কখন পালিত হবে?`,
            answer: `হিন্দু পঞ্জিকা অনুসারে কার্তিক মাসের কৃষ্ণপক্ষের চতুর্থী তিথিতে করওয়া চৌথ (করক চতুর্থী) পালিত হয়। সঠিক দৃক পঞ্জিকা গণনা (${cityName} IST) অনুযায়ী: ★ ${upYr} সালে করওয়া চৌথ: ${upData.dateFormatted} (${upData.dayOfWeek}) — চতুর্থী তিথি শুরু: ${upData.tithiBegins}, তিথি সমাপ্ত: ${upData.tithiEnds}; সান্ধ্য পূজার শুভ মুহূর্ত: ${upCity.pujaMuhuratDisplay}; ব্রতের সময়কাল: ${upCity.vratDurationDisplay}; এবং চন্দ্রোদয় (চাঁদ ওঠার সময়): ${upCity.moonriseDisplay}। ★ ${nextYr} সালে করওয়া চৌথ: ${nextData.dateFormatted} (${nextData.dayOfWeek}) — চতুর্থী তিথি শুরু: ${nextData.tithiBegins}, তিথি সমাপ্ত: ${nextData.tithiEnds}; পূজার মুহূর্ত: ${nextCity.pujaMuhuratDisplay}; এবং চন্দ্রোদয়: ${nextCity.moonriseDisplay}।`,
          };
        }
        if (lang === 'hi') {
          return {
            ...faq,
            question: `भारतीय पंचांग के अनुसार ${upYr} और ${nextYr} में करवा चौथ कब है और पूजा व चन्द्रोदय का सही समय क्या है?`,
            answer: `करवा चौथ (करक चतुर्थी) कार्तिक मास के कृष्ण पक्ष की चतुर्थी तिथि को मनाया जाता है। प्रमाणित दृक पंचांग (${cityName} IST) के अनुसार: ★ ${upYr} में करवा चौथ: ${upData.dateFormatted} (${upData.dayOfWeek}) — चतुर्थी तिथि प्रारंभ: ${upData.tithiBegins}, तिथि समाप्त: ${upData.tithiEnds}; सायंकालीन पूजा मुहूर्त: ${upCity.pujaMuhuratDisplay}; व्रत अवधि: ${upCity.vratDurationDisplay}; तथा चन्द्रोदय समय: ${upCity.moonriseDisplay}। ★ ${nextYr} में करवा चौथ: ${nextData.dateFormatted} (${nextData.dayOfWeek}) — चतुर्थी तिथि प्रारंभ: ${nextData.tithiBegins}, तिथि समाप्त: ${nextData.tithiEnds}; पूजा मुहूर्त: ${nextCity.pujaMuhuratDisplay}; तथा चन्द्रोदय: ${nextCity.moonriseDisplay}।`,
          };
        }
        if (lang === 'pa') {
          return {
            ...faq,
            question: `ਭਾਰਤੀ ਪੰਚਾਂਗ ਅਨੁਸਾਰ ${upYr} ਅਤੇ ${nextYr} ਵਿੱਚ ਕਰਵਾ ਚੌਥ ਕਦੋਂ ਹੈ ਅਤੇ ਪੂਜਾ ਤੇ ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਹੀ ਸਮਾਂ ਕੀ ਹੈ?`,
            answer: `ਕਰਵਾ ਚੌਥ ਕੱਤਕ ਮਹੀਨੇ ਦੇ ਕ੍ਰਿਸ਼ਨ ਪੱਖ ਦੀ ਚਤੁਰਥੀ ਤਿਥੀ ਨੂੰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਪ੍ਰਮਾਣਿਤ ਪੰਚਾਂਗ (${cityName} IST) ਅਨੁਸਾਰ: ★ ${upYr} ਵਿੱਚ ਕਰਵਾ ਚੌਥ: ${upData.dateFormatted} (${upData.dayOfWeek}) — ਚਤੁਰਥੀ ਤਿਥੀ ਸ਼ੁਰੂ: ${upData.tithiBegins}, ਤਿਥੀ ਸਮਾਪਤ: ${upData.tithiEnds}; ਸ਼ਾਮ ਦੀ ਪੂਜਾ ਦਾ ਮੁਹੂਰਤ: ${upCity.pujaMuhuratDisplay}; ਵਰਤ ਦਾ ਸਮਾਂ: ${upCity.vratDurationDisplay}; ਅਤੇ ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਮਾਂ: ${upCity.moonriseDisplay}। ★ ${nextYr} ਵਿੱਚ ਕਰਵਾ ਚੌਥ: ${nextData.dateFormatted} (${nextData.dayOfWeek}) — ਪੂਜਾ ਮੁਹੂਰਤ: ${nextCity.pujaMuhuratDisplay}; ਅਤੇ ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਮਾਂ: ${nextCity.moonriseDisplay}।`,
          };
        }
        if (lang === 'gu') {
          return {
            ...faq,
            question: `ભારતીય પંચાંગ મુજબ ${upYr} અને ${nextYr} માં કરવા ચોથ ક્યારે છે અને પૂજા તથા ચંદ્રોદયનો સાચો સમય શું છે?`,
            answer: `કરવા ચોથ કાર્તિક માસના કૃષ્ણ પક્ષની ચતુર્થી તિથિએ ઉજવાય છે. પ્રમાણિત દ્રિક પંચાંગ (${cityName} IST) મુજબ: ★ ${upYr} માં કરવા ચોથ: ${upData.dateFormatted} (${upData.dayOfWeek}) — ચતુર્થી તિથિ પ્રારંભ: ${upData.tithiBegins}, તિથિ સમાપ્ત: ${upData.tithiEnds}; સાંજનું પૂજા મુહૂર્ત: ${upCity.pujaMuhuratDisplay}; વ્રત સમયગાળો: ${upCity.vratDurationDisplay}; અને ચંદ્રોદય સમય: ${upCity.moonriseDisplay}. ★ ${nextYr} માં કરવા ચોથ: ${nextData.dateFormatted} (${nextData.dayOfWeek}) — પૂજા મુહૂર્ત: ${nextCity.pujaMuhuratDisplay}; અને ચંદ્રોદય: ${nextCity.moonriseDisplay}.`,
          };
        }
        if (lang === 'mr') {
          return {
            ...faq,
            question: `भारतीय पंचांगानुसार ${upYr} आणि ${nextYr} मध्ये करवा चौथ कधी आहे आणि पूजा व चंद्रोदयाची अचूक वेळ काय आहे?`,
            answer: `करवा चौथ (करक चतुर्थी) कार्तिक महिन्याच्या कृष्ण पक्षातील चतुर्थी तिथीला साजरा केला जातो. प्रमाणित दृक पंचांगानुसार (${cityName} IST): ★ ${upYr} मध्ये करवा चौथ: ${upData.dateFormatted} (${upData.dayOfWeek}) — चतुर्थी तिथी प्रारंभ: ${upData.tithiBegins}, तिथी समाप्त: ${upData.tithiEnds}; सायंकाळचा पूजा मुहूर्त: ${upCity.pujaMuhuratDisplay}; व्रत काळ: ${upCity.vratDurationDisplay}; आणि चंद्रोदय वेळ: ${upCity.moonriseDisplay}. ★ ${nextYr} मध्ये करवा चौथ: ${nextData.dateFormatted} (${nextData.dayOfWeek}) — पूजा मुहूर्त: ${nextCity.pujaMuhuratDisplay}; आणि चंद्रोदय: ${nextCity.moonriseDisplay}.`,
          };
        }

        return {
          ...faq,
          question: `When is Karwa Chauth observed in ${upYr} and ${nextYr} according to the verified Indian Panchang?`,
          answer: `Karwa Chauth (Karak Chaturthi) is observed on the Krishna Paksha Chaturthi of the Hindu lunar month of Kartik. According to verified Drik Panchang calculations for ${cityName} (IST): ★ Karwa Chauth ${upYr} falls on ${upData.dayOfWeek}, ${upData.dateFormatted} — Chaturthi Tithi Begins: ${upData.tithiBegins}, Tithi Ends: ${upData.tithiEnds}; Evening Pradosh Puja Muhurat: ${upCity.pujaMuhuratDisplay}; Vrat Duration: ${upCity.vratDurationDisplay}; and Moonrise (Chandrodaya): ${upCity.moonriseDisplay}. ★ In ${nextYr}, Karwa Chauth falls on ${nextData.dayOfWeek}, ${nextData.dateFormatted} — Chaturthi Tithi Begins: ${nextData.tithiBegins}, Tithi Ends: ${nextData.tithiEnds}; Puja Muhurat: ${nextCity.pujaMuhuratDisplay}; and Moonrise: ${nextCity.moonriseDisplay}.${extraSelectedNoteEn}`,
        };
      }

      if (faq.id === 'faq-cloudy-moon') {
        const timingNote =
          lang === 'bn'
            ? ` (${selectedYear} সালে ${cityName}-এ নির্ধারিত চন্দ্রোদয়ের সময়: ${selData.dateFormatted}, ${selCity.moonriseDisplay})`
            : lang === 'hi'
            ? ` (${selectedYear} में ${cityName} के लिए प्रमाणित चन्द्रोदय समय: ${selData.dateFormatted}, ${selCity.moonriseDisplay})`
            : ` (Verified ${selectedYear} Chandrodaya time for ${cityName}: ${selData.dateFormatted} at ${selCity.moonriseDisplay})`;
        return {
          ...faq,
          answer: `${faq.answer}${timingNote}`,
        };
      }

      return faq;
    });
  }, [
    lc.faqsList,
    upcomingFestivalYear,
    selectedYear,
    selectedCity,
    activeYearData,
    activeCityYearTimings,
    localizedCityMeta.city,
    lang,
  ]);

  // Dynamically keep Schema.org JSON-LD & meta keywords updated for the active upcoming festival years
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const upYr = upcomingFestivalYear;
    const nextYr = upcomingFestivalYear + 1;
    const upData = getFestivalYearData(upYr);
    const nextData = getFestivalYearData(nextYr);

    const kwMeta = document.querySelector('meta[name="keywords"]');
    if (kwMeta) {
      kwMeta.setAttribute(
        'content',
        `Happy Karwa Chauth, Karwa Chauth ${upYr}, Karwa Chauth ${nextYr}, Karwa Chauth Puja Vidhi, Puja Samagri Checklist, Sargi Guide, Chand Dekhne Ki Vidhi, Karwa Chauth Wishes, Greeting Cards`
      );
    }

    const ldScript = document.querySelector('script[type="application/ld+json"]');
    if (ldScript) {
      const schemaObj = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: 'Happy Karwa Chauth — Sacred Vrat & Puja Guide',
            image: './favicon.png',
            publisher: {
              '@type': 'Organization',
              name: 'Happy Karwa Chauth',
              logo: {
                '@type': 'ImageObject',
                url: './favicon.png',
              },
            },
            description:
              'Authentic Indian Hindu festival guide for Karwa Chauth featuring verified Panchang countdowns, Puja Vidhi, interactive Samagri checklist, Sargi preparation, and shareable blessings.',
          },
          {
            '@type': 'Event',
            name: `Karwa Chauth (Karak Chaturthi) ${upYr}`,
            startDate: `${upData.isoDate}T${upData.delhiSunrise24h}:00+05:30`,
            endDate: `${upData.isoDate}T${upData.delhiMoonrise24h}:00+05:30`,
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'India & Worldwide Hindu Households',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
            },
            description: `Traditional Hindu festival of Karwa Chauth observed on ${upData.dayOfWeek}, ${upData.dateFormatted} (Kartik Krishna Paksha Chaturthi) with Nirjala Vrat, evening Katha Puja (${upData.pujaMuhurat}), and Moonrise Darshan (${upData.defaultMoonriseIST}).`,
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `When is Karwa Chauth in ${upYr} and ${nextYr} in India?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `According to Drik Panchang, Karwa Chauth in ${upYr} falls on ${upData.dayOfWeek}, ${upData.dateFormatted} (Tithi Begins: ${upData.tithiBegins}, Tithi Ends: ${upData.tithiEnds}, Puja Muhurat: ${upData.pujaMuhurat}, New Delhi Moonrise: ${upData.defaultMoonriseIST}). In ${nextYr}, Karwa Chauth falls on ${nextData.dayOfWeek}, ${nextData.dateFormatted} (Puja Muhurat: ${nextData.pujaMuhurat}, Moonrise: ${nextData.defaultMoonriseIST}).`,
                },
              },
            ],
          },
        ],
      };
      ldScript.textContent = JSON.stringify(schemaObj);
    }
  }, [upcomingFestivalYear]);

  // Refs for focusing inputs when user clicks directly on a row in the Card Preview
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const row1InputRef = useRef<HTMLInputElement>(null);
  const row2InputRef = useRef<HTMLInputElement>(null);
  const row3InputRef = useRef<HTMLInputElement>(null);
  const row4InputRef = useRef<HTMLTextAreaElement>(null);
  const row5InputRef = useRef<HTMLInputElement>(null);
  const row6InputRef = useRef<HTMLInputElement>(null);
  const row7InputRef = useRef<HTMLInputElement>(null);

  // Render the exact downloadable card onto the live preview canvas (100% 1:1 WYSIWYG for Horizontal & Vertical)
  useEffect(() => {
    const drawPreview = () => {
      if (!previewCanvasRef.current) return;
      renderGreetingCardToCanvas(previewCanvasRef.current, {
        headerLine: cardHeaderLine,
        greetingLine: cardGreetingLine,
        titleLine: cardTitleLine,
        bodyMessage: cardBodyMessage,
        closingLine: cardClosingLine,
        signatureLine: cardSignatureLine,
        footerLine: cardFooterLine,
        theme: selectedCardTheme,
        orientation: cardOrientation,
      });
    };

    drawPreview();
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => {
        drawPreview();
      });
    }
  }, [
    cardHeaderLine,
    cardGreetingLine,
    cardTitleLine,
    cardBodyMessage,
    cardClosingLine,
    cardSignatureLine,
    cardFooterLine,
    selectedCardTheme,
    cardOrientation,
    lang,
  ]);

  return (
    <div className="min-h-screen w-full bg-[#FFF4E6] text-[#2A0808] relative overflow-x-hidden flex flex-col">

      {/* Non-intrusive Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 right-4 left-4 sm:left-auto z-50 sm:max-w-md rounded-xl bg-[#2A0808] text-[#FFF4E6] border-2 border-[#D4AF37] px-4 py-3 shadow-2xl flex items-center justify-between gap-3 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="font-medium">{toastMessage}</span>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            aria-label="Close notification"
            className="text-[#FCE7D6]/70 hover:text-[#FFF4E6] cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* =======================================================================
          SMART AUTO-HIDE HEADER WITH ANIMATED HAMBURGER-TO-CROSS BUTTON
      ======================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full bg-[#FFF4E6]/95 backdrop-blur-md border-b border-[#7F1D1D]/15 transition-transform duration-300 ease-out ${
          headerVisible ? 'translate-y-0 shadow-xs' : '-translate-y-full'
        }`}
      >
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          {/* Zone 1: Brand Logo & Title (Left Side) */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, 'top')}
            className={`flex items-center gap-1.5 sm:gap-2.5 min-w-0 text-[#7F1D1D] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F1D1D] ${
              lang === 'en'
                ? 'font-sans text-[13px] sm:text-lg lg:text-xl font-bold tracking-tight'
                : 'font-serif text-base sm:text-xl lg:text-2xl font-bold tracking-tight'
            }`}
          >
            <img
              src={siteLogoSrc}
              alt={t.brandTitle}
              onError={handleLogoImgError}
              className="h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10 object-contain shrink-0"
            />
            <span className="truncate">{t.brandTitle}</span>
          </a>

          {/* Zone 2: 5 Single-Line Navigation Links with Active Section Indicator */}
          <nav
            aria-label="Primary Festival Navigation"
            className="hidden md:flex items-center gap-2 lg:gap-4 text-sm font-medium text-[#450A0A]"
          >
            {[
              { id: 'countdown', label: t.navCountdown },
              { id: 'puja-vidhi', label: t.navPujaVidhi },
              { id: 'samagri', label: t.navSamagri },
              { id: 'rituals', label: t.navRituals },
              { id: 'wishes', label: t.navWishes },
            ].map((navItem) => {
              const isActive = activeSectionId === navItem.id;
              return (
                <a
                  key={navItem.id}
                  href={`#${navItem.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => handleNavClick(e, navItem.id)}
                  className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#FCE7D6] text-[#7F1D1D] font-bold border border-[#D4AF37]/80 shadow-2xs'
                      : 'hover:text-[#B91C1C] hover:bg-[#FCE7D6]/50'
                  }`}
                >
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{navItem.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Smooth Animated Hamburger-to-Cross Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href="#wishes"
              onClick={(e) => handleNavClick(e, 'wishes')}
              className="btn-festive-outline px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold text-[#FFF4E6] bg-[#7F1D1D] hover:bg-[#B91C1C] border border-[#D4AF37]/60 rounded-lg whitespace-nowrap shrink-0"
            >
              {t.navShareCta}
            </a>

            {/* Animated 3-Line Hamburger to Cross (X) Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg border border-[#7F1D1D]/30 bg-[#FFF8F0] hover:bg-[#FCE7D6] text-[#7F1D1D] flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#7F1D1D]"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between items-center">
                <span
                  className={`block h-[2.2px] w-5 bg-[#7F1D1D] rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? 'translate-y-[6.9px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[2.2px] w-5 bg-[#7F1D1D] rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`block h-[2.2px] w-5 bg-[#7F1D1D] rounded-full transform transition-all duration-300 ease-in-out origin-center ${
                    mobileMenuOpen ? '-translate-y-[6.9px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Expand Transition & Active Location Highlight */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[460px] opacity-100 border-t border-[#7F1D1D]/15' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            aria-label="Mobile Festival Navigation"
            className="bg-[#FFF4E6] px-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm font-medium text-[#2A0808] shadow-lg"
          >
            {[
              { id: 'top', label: t.brandTitle },
              { id: 'countdown', label: t.navCountdown },
              { id: 'puja-vidhi', label: t.navPujaVidhi },
              { id: 'samagri', label: t.navSamagri },
              { id: 'sargi-guide', label: t.sargiTitle },
              { id: 'rituals', label: t.navRituals },
              { id: 'wishes', label: t.navWishes },
              { id: 'faq', label: t.faqTitle },
            ].map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-2.5 px-3.5 rounded-xl flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#7F1D1D] text-[#FFF4E6] font-bold border border-[#D4AF37] shadow-xs'
                      : 'hover:bg-[#FCE7D6] text-[#450A0A] border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isActive ? 'bg-[#FDE047] ring-2 ring-[#D4AF37]/50' : 'bg-[#7F1D1D]/25'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.label}</span>
                  </span>
                  <span
                    className={`text-xs font-bold shrink-0 ml-2 ${
                      isActive ? 'text-[#FDE047]' : 'text-[#7F1D1D]'
                    }`}
                  >
                    {isActive ? '●' : '→'}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Spacer for fixed auto-hiding header */}
      <div className="h-[62px] w-full shrink-0" aria-hidden="true" />

      <main id="top" className="flex-1 w-full">
        {/* =====================================================================
            SINGLE-LINE AUTO-FIT LANGUAGE SELECTION BAR (NO LABEL, NO SLIDING)
        ===================================================================== */}
        <div className="w-full bg-gradient-to-r from-[#FCE7D6]/60 via-[#FFF8F0] to-[#FCE7D6]/60 border-b border-[#D4AF37]/45">
          <div className="w-full max-w-[1240px] mx-auto px-2.5 sm:px-6 lg:px-8 py-2 flex items-center justify-center sm:justify-start">
            <div className="w-full sm:w-auto grid grid-cols-6 gap-1 sm:gap-1.5 bg-[#FFF4E6] border border-[#D4AF37]/60 rounded-xl p-1 shadow-2xs">
              {SUPPORTED_LANGUAGES.map((l) => {
                const active = lang === l.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelectLanguage(l.code)}
                    className={`btn-festive-outline inline-flex items-center justify-center h-8 px-1.5 sm:px-3.5 rounded-lg text-[11px] sm:text-xs font-semibold leading-none text-center whitespace-nowrap truncate cursor-pointer ${
                      active
                        ? 'bg-[#7F1D1D] text-[#FFF4E6] shadow-2xs'
                        : 'text-[#450A0A] hover:bg-[#FCE7D6]/80'
                    }`}
                  >
                    {l.nativeName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================================
            SECTION 1: HERO SECTION
        ===================================================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FCE7D6]/70 via-[#FFF4E6] to-[#FFF4E6] border-b border-[#7F1D1D]/15 py-8 sm:py-12 lg:py-16">
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wider font-semibold text-[#7F1D1D]">
                  <span>{t.heroKicker}</span>
                </div>

                <h1
                  className="font-serif font-bold text-[#450A0A] leading-[1.15] tracking-tight"
                  style={{
                    fontSize: 'clamp(1.9rem, 3.6vw, 3.1rem)',
                    textWrap: 'balance',
                  }}
                >
                  {t.heroTitle}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-[#450A0A]/90 leading-relaxed max-w-2xl">
                  {t.heroSubtitle}
                </p>

                {/* Sacred Sanskrit Shloka Callout */}
                <div className="rounded-2xl bg-[#FCE7D6]/85 border border-[#D4AF37]/60 p-4 sm:p-5 space-y-1.5">
                  <p className="font-serif text-base sm:text-xl font-semibold text-[#7F1D1D]">
                    “करकचतुर्थी व्रतं सुखसौभाग्य समृद्धिदायकम्”
                  </p>
                  <p className="text-xs sm:text-sm text-[#450A0A]/85 leading-relaxed">
                    {t.heroMantraMeaning}
                  </p>
                </div>

                {/* Responsive Action Buttons */}
                <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'countdown')}
                    className="btn-festive-outline inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7F1D1D] hover:bg-[#B91C1C] text-[#FFF4E6] font-semibold text-sm border border-[#D4AF37] shadow-sm cursor-pointer"
                  >
                    <Moon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{t.btnLiveCountdown}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'samagri')}
                    className="btn-festive-outline inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FFF4E6] hover:bg-[#FCE7D6] text-[#7F1D1D] font-semibold text-sm border border-[#7F1D1D]/40 cursor-pointer"
                  >
                    <CheckSquare className="w-4 h-4 text-[#B91C1C] shrink-0" />
                    <span>
                      {t.btnSamagriChecklist} ({completedSamagriCount}/
                      {allSamagriItems.length})
                    </span>
                  </button>
                </div>

                {/* Verified Dates Summary */}
                <div className="pt-3 border-t border-[#7F1D1D]/15 flex flex-wrap items-center justify-between gap-3 text-xs text-[#450A0A]/80">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold text-[#7F1D1D]">
                      {dynamicVerifiedDatesText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Upgraded Couple Illustration with Single Large Bell & 5 Sculpted Diyas */}
              <div className="lg:col-span-5 w-full">
                <HeroCoupleIllustration
                  isDiyaBlessed={isDiyaBlessed}
                  isBellRinging={isBellRinging}
                  bellRingKey={bellRingKey}
                  onRingBell={handleRingBell}
                  bellLabel={t.btnRingBell}
                  lightDiyaLabel={t.btnLightDiyas}
                  dimDiyaLabel={t.btnDimDiyas}
                  statusLitLabel={t.statusDiyasLit}
                  statusDimmedLabel={t.statusDiyasDimmed}
                  onToggleDiya={() => {
                    setIsDiyaBlessed((prev) => {
                      const next = !prev;
                      showToast(next ? t.statusDiyasLit : t.statusDiyasDimmed);
                      return next;
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2: LIVE COUNTDOWN & VERIFIED INDIAN PANCHANG MUHURAT
        ===================================================================== */}
        <section
          id="countdown"
          className="py-12 sm:py-16 lg:py-20 bg-[#FFF4E6] border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                {t.countdownKicker}
              </div>
              <h2
                className="font-serif font-bold text-[#450A0A]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                {t.countdownTitle}
              </h2>
              <OrnateDivider />
              <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                {t.countdownSubtitle}
              </p>
            </div>

            {/* Automatic Past & Coming Year Slot Bar (No Manual Date Dropdown) + City Selector Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 bg-[#FCE7D6]/75 border border-[#D4AF37]/50 rounded-2xl p-4 sm:p-5 items-start">
              <div className="lg:col-span-6 space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7F1D1D] truncate">
                  {t.selectYearLabel}
                </label>

                {/* Horizontal Past & Coming Slot Bar: "Coming" aligned at Left by default, slide Left to reveal the 1 "Past" slot */}
                <div
                  ref={yearScrollContainerRef}
                  role="group"
                  aria-label={t.selectYearLabel}
                  onMouseDown={(e) => {
                    if (!yearScrollContainerRef.current) return;
                    isDraggingYearBarRef.current = true;
                    hasDraggedYearBarRef.current = false;
                    dragStartXRef.current = e.clientX;
                    dragStartScrollLeftRef.current = yearScrollContainerRef.current.scrollLeft;
                  }}
                  onMouseLeave={() => {
                    isDraggingYearBarRef.current = false;
                  }}
                  onMouseUp={() => {
                    isDraggingYearBarRef.current = false;
                  }}
                  onMouseMove={(e) => {
                    if (!isDraggingYearBarRef.current || !yearScrollContainerRef.current) return;
                    const deltaX = e.clientX - dragStartXRef.current;
                    if (Math.abs(deltaX) > 5) {
                      hasDraggedYearBarRef.current = true;
                    }
                    e.preventDefault();
                    yearScrollContainerRef.current.scrollLeft =
                      dragStartScrollLeftRef.current - deltaX * 1.25;
                  }}
                  className="relative w-full flex flex-nowrap items-center justify-start gap-1.5 p-1 bg-[#FFF4E6] border border-[#D4AF37]/60 rounded-xl shadow-2xs overflow-x-auto select-none cursor-grab active:cursor-grabbing"
                >
                  {quickYearOptions.map((yrNum) => {
                    const yrData = getFestivalYearData(yrNum);
                    const yrTimings = getCityTimingsForYear(selectedCity, yrNum);
                    const yrIsPast = yrTimings.moonriseTimestamp < nowMs;
                    const isNextUpcoming = yrNum === upcomingFestivalYear;
                    const isSelected = selectedYear === yrNum;
                    return (
                      <button
                        key={yrNum}
                        ref={isNextUpcoming ? upcomingYearBtnRef : undefined}
                        type="button"
                        onClick={() => {
                          if (hasDraggedYearBarRef.current) {
                            hasDraggedYearBarRef.current = false;
                            return;
                          }
                          handleSelectYear(yrNum);
                        }}
                        className={`btn-festive-outline shrink-0 min-w-[172px] sm:min-w-[184px] px-3 py-2 rounded-lg text-xs font-semibold text-center cursor-pointer flex items-center justify-between gap-2 whitespace-nowrap ${
                          isSelected
                            ? 'bg-[#7F1D1D] text-[#FFF4E6] shadow-2xs ring-1 ring-[#D4AF37]'
                            : isNextUpcoming
                            ? 'bg-[#FCE7D6]/85 text-[#7F1D1D] border border-[#D4AF37]'
                            : 'text-[#450A0A] hover:bg-[#FCE7D6]/80'
                        }`}
                      >
                        <span className="whitespace-nowrap">
                          {isNextUpcoming ? '★ ' : ''}
                          {yrNum} · {yrData.shortDate}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded whitespace-nowrap ${
                            isSelected
                              ? yrIsPast
                                ? 'bg-[#450A0A] text-[#FDE68A]'
                                : 'bg-[#D4AF37] text-[#2A0808]'
                              : yrIsPast
                              ? 'bg-[#FCE7D6] text-[#B91C1C]'
                              : 'bg-[#DCFCE7] text-[#15803D]'
                          }`}
                        >
                          {yrIsPast ? t.yearStatusPast : t.yearStatusComing}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7F1D1D] truncate">
                  {t.selectCityLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {CITY_MOONRISE_TIMINGS.map((cityItem) => {
                    const locCity =
                      lc.cityNames[cityItem.id]?.city || cityItem.city;
                    const cityYrTimings = getCityTimingsForYear(
                      cityItem,
                      selectedYear
                    );
                    return (
                      <button
                        key={cityItem.id}
                        type="button"
                        onClick={() => {
                          setSelectedCityId(cityItem.id);
                          showToast(
                            `${locCity} · ${selectedYear} (${cityYrTimings.moonriseDisplay})`
                          );
                        }}
                        className={`btn-festive-outline inline-flex items-center justify-center px-2.5 py-2 rounded-lg text-xs font-medium border text-center whitespace-nowrap truncate cursor-pointer ${
                          selectedCityId === cityItem.id
                            ? 'bg-[#B91C1C] text-[#FFF4E6] border-[#D4AF37] font-semibold'
                            : 'bg-[#FFF4E6] text-[#450A0A] border-[#7F1D1D]/20 hover:border-[#7F1D1D]'
                        }`}
                      >
                        {locCity}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Maroon & Gold Countdown Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#581111] via-[#7F1D1D] to-[#3B0909] text-[#FFF4E6] border border-[#D4AF37] p-5 sm:p-8 lg:p-10 shadow-xl space-y-6 sm:space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-[#F7E5A9] font-medium">
                      {countdown.targetLabel}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider border ${
                        countdown.isPast
                          ? 'bg-[#3B0909] text-[#FDE68A] border-[#FDE68A]/50'
                          : 'bg-[#D4AF37] text-[#2A0808] border-[#FFF4E6]'
                      }`}
                    >
                      {countdown.isPast ? t.statusPassedBadge : t.statusUpcomingBadge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#FFF4E6]">
                    {countdown.targetDateDisplay}
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-[#FCE7D6]/90 space-y-1 lg:text-right">
                  <div>
                    <span className="text-[#F7E5A9] font-medium">
                      {lc.localTimeLabel} ({userLocalMoonriseInfo.tz}):
                    </span>{' '}
                    <span className="font-mono tabular-nums">
                      {userLocalMoonriseInfo.formatted}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#F7E5A9] font-medium">
                      {lc.regionLabel}:
                    </span>{' '}
                    {localizedCityMeta.region}
                  </div>
                </div>
              </div>

              {/* 4-Column Tabular Countdown Grid (Clearly Distinguishing AGO vs LEFT) */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5"
                role="timer"
                aria-live="off"
                aria-label={countdown.targetLabel}
              >
                {[
                  { value: countdown.days, unit: t.unitDays },
                  { value: countdown.hours, unit: t.unitHours },
                  { value: countdown.minutes, unit: t.unitMinutes },
                  { value: countdown.seconds, unit: t.unitSeconds },
                ].map((slot) => (
                  <div
                    key={slot.unit}
                    className="rounded-2xl bg-[#2A0606]/75 border border-[#D4AF37]/45 p-4 sm:p-6 text-center space-y-1.5"
                  >
                    <div
                      className="font-mono tabular-nums font-semibold text-[#F7E5A9] tracking-tight"
                      style={{ fontSize: 'clamp(1.85rem, 4vw, 3.25rem)' }}
                    >
                      {String(slot.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FFF4E6]">
                      {slot.unit}{' '}
                      <span className="text-[#FDE047] font-bold">
                        {countdown.isPast ? t.unitAgo : t.unitLeft}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Panchang Details Strip (Dynamically Computed for Selected Year & City) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1 items-stretch">
                <div className="h-full flex flex-col justify-between rounded-xl bg-[#2A0606]/55 border border-[#D4AF37]/30 p-4 space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#F7E5A9] truncate">
                    {lc.panchangEveningMuhurat} ({selectedYear})
                  </div>
                  <div className="font-mono tabular-nums text-sm sm:text-base font-semibold text-[#FFF4E6]">
                    {activeCityYearTimings.pujaMuhuratDisplay}
                  </div>
                  <div className="text-xs text-[#FCE7D6]/75 truncate">
                    {lc.panchangPradoshWindow}
                  </div>
                </div>

                <div className="h-full flex flex-col justify-between rounded-xl bg-[#2A0606]/55 border border-[#D4AF37]/30 p-4 space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#F7E5A9] truncate">
                    {localizedCityMeta.city} {lc.panchangMoonriseSuffix} ({selectedYear})
                  </div>
                  <div className="font-mono tabular-nums text-sm sm:text-base font-semibold text-[#FFF4E6]">
                    {activeCityYearTimings.moonriseDisplay}
                  </div>
                  <div className="text-xs text-[#FCE7D6]/75 truncate">
                    {lc.panchangChhalniArghya}
                  </div>
                </div>

                <div className="h-full flex flex-col justify-between rounded-xl bg-[#2A0606]/55 border border-[#D4AF37]/30 p-4 space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#F7E5A9] truncate">
                    {lc.panchangVratDuration} ({selectedYear})
                  </div>
                  <div className="font-mono tabular-nums text-sm sm:text-base font-semibold text-[#FFF4E6]">
                    {activeCityYearTimings.vratDurationDisplay}
                  </div>
                  <div className="text-xs text-[#FCE7D6]/75 truncate">
                    {lc.panchangSunriseToMoonrise}
                  </div>
                </div>

                <div className="h-full flex flex-col justify-between rounded-xl bg-[#2A0606]/55 border border-[#D4AF37]/30 p-4 space-y-1">
                  <div className="text-xs uppercase tracking-wider text-[#F7E5A9] truncate">
                    {lc.panchangTithiWindow} ({selectedYear})
                  </div>
                  <div className="font-mono tabular-nums text-xs sm:text-sm font-semibold text-[#FFF4E6] truncate">
                    {lc.panchangBegins}: {activeYearData.tithiBegins}
                  </div>
                  <div className="font-mono tabular-nums text-xs text-[#FCE7D6]/80 truncate">
                    {lc.panchangEnds}: {activeYearData.tithiEnds}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: KARWA CHAUTH PUJA VIDHI STEP-BY-STEP GUIDE
        ===================================================================== */}
        <section
          id="puja-vidhi"
          className="py-12 sm:py-16 lg:py-20 bg-[#FCE7D6]/45 border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                {t.pujaVidhiKicker}
              </div>
              <h2
                className="font-serif font-bold text-[#450A0A]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                {t.pujaVidhiTitle}
              </h2>
              <OrnateDivider />
              <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                {t.pujaVidhiSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 items-stretch">
                {dynamicVidhiSteps.map((step, index) => {
                  const isActive = activeStepIndex === index;
                  return (
                    <button
                      key={step.stepNumber}
                      type="button"
                      onClick={() => setActiveStepIndex(index)}
                      className={`btn-festive-outline h-full w-full flex flex-col justify-between text-left rounded-2xl p-4 sm:p-5 border cursor-pointer ${
                        isActive
                          ? 'bg-[#7F1D1D] text-[#FFF4E6] border-[#D4AF37] shadow-md'
                          : 'bg-[#FFF4E6] text-[#2A0808] border-[#7F1D1D]/15 hover:bg-[#FCE7D6]'
                      }`}
                    >
                      <div className="w-full flex items-baseline justify-between gap-2">
                        <span
                          className={`font-mono tabular-nums text-xs font-semibold uppercase tracking-widest shrink-0 ${
                            isActive ? 'text-[#F7E5A9]' : 'text-[#B91C1C]'
                          }`}
                        >
                          {lc.stepPrefix} {step.stepNumber}
                        </span>
                        <span
                          className={`text-xs font-mono tabular-nums truncate ${
                            isActive ? 'text-[#FCE7D6]/90' : 'text-[#450A0A]/70'
                          }`}
                        >
                          {step.timingWindow.split('·')[1] || step.timingWindow}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold mt-1 leading-snug">
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs mt-1 truncate ${
                          isActive ? 'text-[#F7E5A9]' : 'text-[#7F1D1D]'
                        }`}
                      >
                        {step.sanskritTitle}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-7">
                {(() => {
                  const currentStep =
                    dynamicVidhiSteps[activeStepIndex] || dynamicVidhiSteps[0];
                  return (
                    <article className="rounded-3xl bg-[#FFF4E6] border border-[#D4AF37]/70 p-5 sm:p-8 shadow-sm space-y-6">
                      <div className="border-b border-[#7F1D1D]/15 pb-5 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                          <div>
                            <span>
                              {lc.stepPrefix} {currentStep.stepNumber}{' '}
                              {lc.stageOfSix}
                            </span>
                            <span className="mx-2" aria-hidden="true">
                              ·
                            </span>
                            <span>{currentStep.timingWindow}</span>
                          </div>
                          <button
                            type="button"
                            onClick={handleRingBell}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#7F1D1D] text-[#FFF4E6] border border-[#D4AF37] text-xs font-bold cursor-pointer active:scale-95 transition-transform"
                          >
                            <OrnateTempleBellIcon
                              className="w-4 h-4 text-[#FDE047]"
                              isSwinging={isBellRinging}
                              bellRingKey={bellRingKey}
                            />
                            <span>{t.btnRingBell}</span>
                          </button>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#450A0A]">
                          {currentStep.title}
                        </h3>
                        <p className="font-serif text-base text-[#7F1D1D] font-medium">
                          {currentStep.sanskritTitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-[#2A0808] leading-relaxed">
                        {currentStep.summary}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-serif text-lg font-bold text-[#7F1D1D]">
                          {lc.ritualProcedureHeading}
                        </h4>
                        <ol className="space-y-3">
                          {currentStep.detailedInstructions.map((inst, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm sm:text-base text-[#450A0A]/90 leading-relaxed"
                            >
                              <span className="font-mono tabular-nums text-xs font-bold text-[#7F1D1D] bg-[#FCE7D6] border border-[#D4AF37]/50 rounded-md px-2 py-0.5 mt-1 shrink-0">
                                0{i + 1}
                              </span>
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {currentStep.sacredMantra && (
                        <div className="rounded-2xl bg-[#FCE7D6]/85 border border-[#D4AF37] p-4 sm:p-5 space-y-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs uppercase tracking-widest font-semibold text-[#7F1D1D]">
                              {lc.sacredMantraHeading}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                handleCopyMantra(
                                  currentStep.stepNumber,
                                  `${currentStep.sacredMantra!.devanagari}\n${currentStep.sacredMantra!.transliteration}\n${lc.meaningLabel} ${currentStep.sacredMantra!.meaning}`
                                )
                              }
                              className="btn-festive-outline inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#FFF4E6] hover:bg-[#7F1D1D] hover:text-[#FFF4E6] text-[#7F1D1D] border border-[#7F1D1D]/25 cursor-pointer"
                            >
                              {copiedMantraStep === currentStep.stepNumber ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>{lc.copiedLabel}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>{lc.copyMantraBtn}</span>
                                </>
                              )}
                            </button>
                          </div>
                          <p className="font-serif text-lg sm:text-xl font-bold text-[#450A0A] leading-snug">
                            {currentStep.sacredMantra.devanagari}
                          </p>
                          <p className="text-xs sm:text-sm italic text-[#7F1D1D]">
                            {currentStep.sacredMantra.transliteration}
                          </p>
                          <p className="text-xs sm:text-sm text-[#450A0A]/85 pt-1 border-t border-[#7F1D1D]/10">
                            <strong className="font-semibold text-[#450A0A]">
                              {lc.meaningLabel}
                            </strong>{' '}
                            {currentStep.sacredMantra.meaning}
                          </p>
                        </div>
                      )}

                      <div className="rounded-2xl bg-[#FFF8F0] border border-[#D4AF37]/60 p-4 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-sm font-bold text-[#7F1D1D]">
                            <BookOpen className="w-4 h-4 text-[#B91C1C]" />
                            <span>{lc.kathaBoxTitle}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowFullKatha((prev) => !prev)}
                            className="btn-festive-outline px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#7F1D1D] text-[#FFF4E6] hover:bg-[#B91C1C] cursor-pointer"
                          >
                            {showFullKatha
                              ? lc.hideFullKathaBtn
                              : lc.readFullKathaBtn}
                          </button>
                        </div>

                        {showFullKatha && (
                          <div className="pt-2 border-t border-[#7F1D1D]/15 text-xs sm:text-sm text-[#450A0A]/90 space-y-2.5 leading-relaxed">
                            <p>
                              <strong className="text-[#7F1D1D]">
                                {lc.kathaStoryLead}
                              </strong>{' '}
                              {lc.kathaStoryPara1}
                            </p>
                            <p>{lc.kathaStoryPara2}</p>
                            <p className="font-serif italic text-[#7F1D1D] font-semibold">
                              {lc.kathaPrayer}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="rounded-xl bg-[#FFF8F0] border border-[#7F1D1D]/15 p-4 text-xs sm:text-sm text-[#450A0A]/85 leading-relaxed">
                        <strong className="font-semibold text-[#7F1D1D]">
                          {lc.culturalNoteLabel}
                        </strong>{' '}
                        {currentStep.culturalNote}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#7F1D1D]/15">
                        <button
                          type="button"
                          disabled={activeStepIndex === 0}
                          onClick={() =>
                            setActiveStepIndex((prev) => Math.max(0, prev - 1))
                          }
                          className="btn-festive-outline px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border border-[#7F1D1D]/30 text-[#7F1D1D] hover:bg-[#FCE7D6] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                        >
                          {lc.prevStageBtn}
                        </button>
                        <span className="font-mono tabular-nums text-xs text-[#450A0A]/70">
                          {activeStepIndex + 1} / {lc.vidhiSteps.length}
                        </span>
                        <button
                          type="button"
                          disabled={
                            activeStepIndex === lc.vidhiSteps.length - 1
                          }
                          onClick={() =>
                            setActiveStepIndex((prev) =>
                              Math.min(lc.vidhiSteps.length - 1, prev + 1)
                            )
                          }
                          className="btn-festive-outline px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-[#7F1D1D] text-[#FFF4E6] hover:bg-[#B91C1C] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                        >
                          {lc.nextStageBtn}
                        </button>
                      </div>
                    </article>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: INTERACTIVE PUJA SAMAGRI CHECKLIST
        ===================================================================== */}
        <section
          id="samagri"
          className="py-12 sm:py-16 lg:py-20 bg-[#FFF4E6] border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                  {t.samagriKicker}
                </div>
                <h2
                  className="font-serif font-bold text-[#450A0A]"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                    textWrap: 'balance',
                  }}
                >
                  {t.samagriTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                  {t.samagriSubtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={markAllSamagri}
                  className="btn-festive-outline px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#FCE7D6] hover:bg-[#7F1D1D] hover:text-[#FFF4E6] text-[#7F1D1D] border border-[#7F1D1D]/30 cursor-pointer"
                >
                  {lc.checkAllBtn} ({allSamagriItems.length})
                </button>
                <button
                  type="button"
                  onClick={copySamagriShoppingList}
                  className="btn-festive-outline inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#7F1D1D] hover:bg-[#B91C1C] text-[#FFF4E6] border border-[#D4AF37]/60 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lc.copyShoppingListBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={resetSamagri}
                  className="btn-festive-outline inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium text-[#450A0A] hover:bg-[#FCE7D6] border border-[#7F1D1D]/20 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lc.resetBtn}</span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FCE7D6]/70 border border-[#D4AF37]/60 p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#450A0A]">
                <span>{lc.readinessProgressLabel}</span>
                <span className="font-mono tabular-nums text-[#7F1D1D]">
                  {completedSamagriCount} / {allSamagriItems.length}{' '}
                  {lc.itemsReadySuffix} (
                  {allSamagriItems.length > 0
                    ? Math.round(
                        (completedSamagriCount / allSamagriItems.length) * 100
                      )
                    : 0}
                  %)
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#FFF4E6] overflow-hidden border border-[#7F1D1D]/20">
                <div
                  className="h-full bg-gradient-to-r from-[#7F1D1D] via-[#B91C1C] to-[#D4AF37] transition-all duration-300"
                  style={{
                    width: `${
                      allSamagriItems.length > 0
                        ? (completedSamagriCount / allSamagriItems.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {(
                  [
                    {
                      id: 'all',
                      label: `${lc.filterAll} (${allSamagriItems.length})`,
                    },
                    {
                      id: 'pending',
                      label: `${lc.filterPending} (${
                        allSamagriItems.length - completedSamagriCount
                      })`,
                    },
                    {
                      id: 'completed',
                      label: `${lc.filterCompleted} (${completedSamagriCount})`,
                    },
                    {
                      id: 'Sacred Vessels & Altar',
                      label: lc.categoryLabels['Sacred Vessels & Altar'],
                    },
                    {
                      id: 'Puja Offerings',
                      label: lc.categoryLabels['Puja Offerings'],
                    },
                    {
                      id: 'Solah Shringar',
                      label: lc.categoryLabels['Solah Shringar'],
                    },
                    {
                      id: 'Night Moonrise Ritual',
                      label: lc.categoryLabels['Night Moonrise Ritual'],
                    },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSamagriFilter(tab.id)}
                    className={`btn-festive-outline px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                      samagriFilter === tab.id
                        ? 'bg-[#7F1D1D] text-[#FFF4E6]'
                        : 'bg-[#FFF4E6] text-[#450A0A] hover:bg-[#FCE7D6] border border-[#7F1D1D]/15'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <form
                onSubmit={handleAddCustomSamagri}
                className="pt-2 border-t border-[#7F1D1D]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
              >
                <input
                  type="text"
                  value={newCustomItemName}
                  onChange={(e) => setNewCustomItemName(e.target.value)}
                  placeholder={lc.addCustomPlaceholder}
                  aria-label={lc.addCustomPlaceholder}
                  className="flex-1 rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/25 px-3.5 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                />
                <select
                  value={newCustomItemCategory}
                  onChange={(e) =>
                    setNewCustomItemCategory(
                      e.target.value as SamagriItem['category']
                    )
                  }
                  aria-label="Category"
                  className="rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/25 px-3 py-2 text-xs sm:text-sm text-[#450A0A]"
                >
                  <option value="Sacred Vessels & Altar">
                    {lc.categoryLabels['Sacred Vessels & Altar']}
                  </option>
                  <option value="Puja Offerings">
                    {lc.categoryLabels['Puja Offerings']}
                  </option>
                  <option value="Solah Shringar">
                    {lc.categoryLabels['Solah Shringar']}
                  </option>
                  <option value="Night Moonrise Ritual">
                    {lc.categoryLabels['Night Moonrise Ritual']}
                  </option>
                </select>
                <button
                  type="submit"
                  className="btn-festive-outline inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#7F1D1D] hover:bg-[#B91C1C] text-[#FFF4E6] text-xs sm:text-sm font-semibold cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>{lc.addItemBtn}</span>
                </button>
              </form>
            </div>

            {filteredSamagriItems.length === 0 ? (
              <div className="rounded-2xl bg-[#FCE7D6]/40 border border-[#7F1D1D]/15 p-8 text-center space-y-2">
                <p className="font-serif text-xl font-semibold text-[#7F1D1D]">
                  {lc.noItemsMatchText}
                </p>
                <button
                  type="button"
                  onClick={() => setSamagriFilter('all')}
                  className="text-xs font-semibold text-[#B91C1C] underline underline-offset-4 cursor-pointer"
                >
                  {lc.showAllSamagriBtn}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSamagriItems.map((item) => {
                  const isChecked = !!checkedSamagri[item.id];
                  const isCustom = item.id.startsWith('custom-');
                  const locItem = lc.samagriItems[item.id];
                  const displayName = locItem ? locItem.name : item.name;
                  const displayPurpose = locItem
                    ? locItem.purpose
                    : item.purpose;
                  const displayCat =
                    lc.categoryLabels[item.category] || item.category;

                  return (
                    <div
                      key={item.id}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onClick={() => toggleSamagriItem(item.id)}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          toggleSamagriItem(item.id);
                        }
                      }}
                      className={`group flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl border transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F1D1D] ${
                        isChecked
                          ? 'bg-[#FCE7D6]/80 border-[#D4AF37]'
                          : 'bg-[#FFF8F0] border-[#7F1D1D]/20 hover:border-[#7F1D1D]/55'
                      }`}
                    >
                      <div className="mt-0.5 text-[#7F1D1D] shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#7F1D1D]" />
                        ) : (
                          <Square className="w-5 h-5 text-[#7F1D1D]/60 group-hover:text-[#7F1D1D]" />
                        )}
                      </div>

                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#7F1D1D]/80">
                          <div>
                            <span>{displayCat}</span>
                            <span className="mx-1.5" aria-hidden="true">
                              ·
                            </span>
                            <span>
                              {item.essential
                                ? lc.essentialBadge
                                : lc.optionalBadge}
                            </span>
                          </div>
                          {isCustom && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCustomSamagri(item.id, displayName);
                              }}
                              aria-label={`Remove ${displayName}`}
                              className="text-[#B91C1C] hover:text-[#7F1D1D] p-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                        <div
                          className={`font-serif text-lg font-bold leading-snug ${
                            isChecked
                              ? 'line-through text-[#450A0A]/65'
                              : 'text-[#2A0808]'
                          }`}
                        >
                          {displayName}
                        </div>
                        <div className="text-xs font-medium text-[#B91C1C]">
                          {item.hindiName}
                        </div>
                        <p className="text-xs sm:text-sm text-[#450A0A]/80 leading-relaxed pt-0.5">
                          {displayPurpose}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* =====================================================================
            SECTION 5: SARGI & VRAT PREPARATION GUIDE
        ===================================================================== */}
        <section
          id="sargi-guide"
          className="py-12 sm:py-16 lg:py-20 bg-[#FCE7D6]/50 border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                {t.sargiKicker}
              </div>
              <h2
                className="font-serif font-bold text-[#450A0A]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                {t.sargiTitle}
              </h2>
              <OrnateDivider />
              <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                {t.sargiSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
              {lc.sargiCards.map((card, idx) => (
                <div
                  key={card.badge}
                  className="h-full flex flex-col justify-between rounded-2xl bg-[#FFF4E6] border border-[#D4AF37]/60 p-5 sm:p-6 space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#B91C1C]">
                      <span className="truncate">{card.badge}</span>
                      {idx === 0 ? (
                        <Sun className="w-4 h-4 text-[#7F1D1D] shrink-0" />
                      ) : idx === 1 ? (
                        <Sparkles className="w-4 h-4 text-[#7F1D1D] shrink-0" />
                      ) : (
                        <Heart className="w-4 h-4 text-[#7F1D1D] shrink-0" />
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#450A0A] leading-snug">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#450A0A]/85 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: CHAND DEKHNE & TRADITIONAL CHHALNI RITUAL GUIDE
        ===================================================================== */}
        <section
          id="rituals"
          className="py-12 sm:py-16 lg:py-20 bg-[#FFF4E6] border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                {t.ritualsKicker}
              </div>
              <h2
                className="font-serif font-bold text-[#450A0A]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                {t.ritualsTitle}
              </h2>
              <OrnateDivider />
              <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                {t.ritualsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <ChhalniSimulatorGraphic
                  viewThroughChhalni={viewThroughChhalni}
                  activePhase={activeChhalniPhase}
                  phaseTitles={lc.chhalniMoments.map((m) => m.phase)}
                  stagePrefix={lc.stageWord}
                />

                <div className="rounded-2xl bg-[#FCE7D6]/85 border border-[#D4AF37]/60 p-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-[#7F1D1D]">
                      {lc.chhalniControlsHeading}
                    </span>
                    <button
                      type="button"
                      onClick={() => setViewThroughChhalni((prev) => !prev)}
                      className="btn-festive-outline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#7F1D1D] text-[#FFF4E6] hover:bg-[#B91C1C] cursor-pointer whitespace-nowrap"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>
                        {viewThroughChhalni
                          ? lc.removeChhalniBtn
                          : lc.placeChhalniBtn}
                      </span>
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {lc.chhalniMoments.map((moment, idx) => (
                      <button
                        key={moment.tabLabel}
                        type="button"
                        onClick={() => setActiveChhalniPhase(idx)}
                        className={`btn-festive-outline inline-flex items-center justify-center py-1.5 px-2 rounded-lg text-xs font-semibold text-center whitespace-nowrap truncate cursor-pointer ${
                          activeChhalniPhase === idx
                            ? 'bg-[#B91C1C] text-[#FFF4E6]'
                            : 'bg-[#FFF4E6] text-[#450A0A] border border-[#7F1D1D]/20 hover:bg-[#FCE7D6]'
                        }`}
                      >
                        {moment.tabLabel}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3.5">
                {lc.chhalniMoments.map((item, idx) => {
                  const isSelected = activeChhalniPhase === idx;
                  return (
                    <button
                      key={item.phase}
                      type="button"
                      onClick={() => setActiveChhalniPhase(idx)}
                      className={`w-full text-left rounded-2xl p-4 sm:p-5 border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#FCE7D6] border-[#7F1D1D] shadow-xs'
                          : 'bg-[#FFF8F0] border-[#7F1D1D]/15 hover:border-[#7F1D1D]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#B91C1C] truncate">
                          {item.phase}
                        </span>
                        {isSelected && (
                          <span className="text-xs font-semibold text-[#7F1D1D] shrink-0 whitespace-nowrap">
                            {lc.activeInSimulatorBadge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#450A0A] mt-0.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#450A0A]/85 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7: KARWA CHAUTH WISHES & ALL-ROW EDITABLE GREETING CARDS
        ===================================================================== */}
        <section
          id="wishes"
          className="py-12 sm:py-16 lg:py-20 bg-[#FCE7D6]/45 border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                {t.wishesKicker}
              </div>
              <h2
                className="font-serif font-bold text-[#450A0A]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                {t.wishesTitle}
              </h2>
              <OrnateDivider />
              <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                {t.wishesSubtitle}
              </p>
            </div>

            {/* =================================================================
                GREETING CARD STUDIO: Every Single Row (Rows 1–7) Editable +
                Download, Copy Card Text, Share Card at the VERY END of All Inputs
            ================================================================= */}
            <div
              id="greeting-card-studio"
              className="rounded-3xl bg-[#FFF4E6] border-2 border-[#D4AF37] p-4 sm:p-7 lg:p-9 shadow-md space-y-6 scroll-mt-20"
            >
              {/* Studio Top Toolbar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#7F1D1D]/15">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#450A0A]">
                    {t.studioHeading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7F1D1D]">
                    {lc.studioSubheading}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: 100% True 1:1 WYSIWYG Greeting Card Preview (Horizontal & Vertical) */}
                <div className="lg:col-span-6 flex flex-col items-center gap-3 lg:sticky lg:top-20">
                  {/* Quick Orientation Switcher Right Above Preview */}
                  <div className="w-full flex items-center justify-between gap-2 bg-[#FFF8F0] border border-[#D4AF37]/60 rounded-xl p-1.5 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setCardOrientation('horizontal')}
                      className={`btn-festive-outline flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        cardOrientation === 'horizontal'
                          ? 'bg-[#7F1D1D] text-[#FFF4E6] shadow-2xs'
                          : 'text-[#450A0A] hover:bg-[#FCE7D6]/80'
                      }`}
                    >
                      <RectangleHorizontal className="w-3.5 h-3.5 shrink-0" />
                      <span>{lc.horizontalBtn}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardOrientation('vertical')}
                      className={`btn-festive-outline flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        cardOrientation === 'vertical'
                          ? 'bg-[#7F1D1D] text-[#FFF4E6] shadow-2xs'
                          : 'text-[#450A0A] hover:bg-[#FCE7D6]/80'
                      }`}
                    >
                      <RectangleVertical className="w-3.5 h-3.5 shrink-0" />
                      <span>{lc.verticalBtn}</span>
                    </button>
                  </div>

                  {/* Exact 1:1 Live Canvas Preview (Identical to Downloaded PNG) with Click-to-Edit Row Zones */}
                  <div
                    className={`relative w-full transition-all duration-300 flex justify-center ${
                      cardOrientation === 'vertical'
                        ? 'max-w-[350px] sm:max-w-[380px] mx-auto'
                        : 'max-w-[580px] mx-auto'
                    }`}
                  >
                    <canvas
                      ref={previewCanvasRef}
                      className="w-full h-auto block rounded-2xl shadow-xl"
                    />

                    {/* Invisible Click-to-Focus Row Overlay Zones */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col justify-between p-5"
                    >
                      <div
                        title={lc.rowLabels[0]}
                        onClick={() => row1InputRef.current?.focus()}
                        className="h-[14%] w-full cursor-pointer"
                      />
                      <div
                        title={lc.rowLabels[1]}
                        onClick={() => row2InputRef.current?.focus()}
                        className="h-[14%] w-full cursor-pointer"
                      />
                      <div
                        title={lc.rowLabels[2]}
                        onClick={() => row3InputRef.current?.focus()}
                        className="h-[12%] w-full cursor-pointer"
                      />
                      <div
                        title={lc.rowLabels[3]}
                        onClick={() => row4InputRef.current?.focus()}
                        className="h-[28%] w-full cursor-pointer"
                      />
                      <div
                        title={lc.rowLabels[4]}
                        onClick={() => row5InputRef.current?.focus()}
                        className="h-[11%] w-full cursor-pointer"
                      />
                      <div
                        title={lc.rowLabels[5]}
                        onClick={() => row6InputRef.current?.focus()}
                        className="h-[10%] w-full cursor-pointer"
                      />
                      <div
                        title={lc.rowLabels[6]}
                        onClick={() => row7InputRef.current?.focus()}
                        className="h-[11%] w-full cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: All 7 Editable Row Inputs + Download, Copy, Share at the VERY END */}
                <div className="lg:col-span-6 space-y-4 bg-[#FFF8F0] border border-[#7F1D1D]/20 rounded-2xl p-4 sm:p-6">
                  {/* Card Language Quick-Switch (Single-Line Auto-Fit, No 'Language' Text) */}
                  <div className="pb-3 border-b border-[#7F1D1D]/15">
                    <div className="grid grid-cols-6 gap-1 bg-[#FFF4E6] border border-[#D4AF37]/60 rounded-xl p-1">
                      {SUPPORTED_LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => handleSelectLanguage(l.code)}
                          className={`btn-festive-outline inline-flex items-center justify-center h-8 px-1 sm:px-2.5 rounded-lg text-[11px] sm:text-xs font-semibold leading-none text-center whitespace-nowrap truncate cursor-pointer ${
                            lang === l.code
                              ? 'bg-[#7F1D1D] text-[#FFF4E6]'
                              : 'text-[#450A0A] hover:bg-[#FCE7D6]'
                          }`}
                        >
                          {l.nativeName}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme Palette Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#7F1D1D]">
                      {lc.cardPaletteLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {CARD_THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          type="button"
                          onClick={() => setSelectedCardThemeId(theme.id)}
                          className={`btn-festive-outline inline-flex items-center justify-center px-2.5 py-2 rounded-lg text-xs font-medium border text-center whitespace-nowrap truncate cursor-pointer ${
                            selectedCardThemeId === theme.id
                              ? 'bg-[#7F1D1D] text-[#FFF4E6] border-[#D4AF37] font-semibold'
                              : 'bg-[#FFF4E6] text-[#450A0A] border-[#7F1D1D]/20 hover:bg-[#FCE7D6]'
                          }`}
                        >
                          {lc.themeNames[theme.id] || theme.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Boxes for All 7 Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 items-end">
                    <div>
                      <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                        {lc.rowLabels[0]}
                      </label>
                      <input
                        ref={row1InputRef}
                        type="text"
                        value={cardHeaderLine}
                        onChange={(e) => setCardHeaderLine(e.target.value)}
                        className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 px-3 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                        {lc.rowLabels[1]}
                      </label>
                      <input
                        ref={row2InputRef}
                        type="text"
                        value={cardGreetingLine}
                        onChange={(e) => setCardGreetingLine(e.target.value)}
                        className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 px-3 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                      {lc.rowLabels[2]}
                    </label>
                    <input
                      ref={row3InputRef}
                      type="text"
                      value={cardTitleLine}
                      onChange={(e) => setCardTitleLine(e.target.value)}
                      className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 px-3 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                      {lc.rowLabels[3]}
                    </label>
                    <textarea
                      ref={row4InputRef}
                      rows={3}
                      value={cardBodyMessage}
                      onChange={(e) => setCardBodyMessage(e.target.value)}
                      className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 p-3 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                    <div>
                      <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                        {lc.rowLabels[4]}
                      </label>
                      <input
                        ref={row5InputRef}
                        type="text"
                        value={cardClosingLine}
                        onChange={(e) => setCardClosingLine(e.target.value)}
                        className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 px-3 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                        {lc.rowLabels[5]}
                      </label>
                      <input
                        ref={row6InputRef}
                        type="text"
                        value={cardSignatureLine}
                        onChange={(e) => setCardSignatureLine(e.target.value)}
                        className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 px-3 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#7F1D1D] mb-1 truncate">
                      {lc.rowLabels[6]}
                    </label>
                    <input
                      ref={row7InputRef}
                      type="text"
                      value={cardFooterLine}
                      onChange={(e) => setCardFooterLine(e.target.value)}
                      className="w-full rounded-xl bg-[#FFF4E6] border border-[#7F1D1D]/30 px-3 py-2 text-xs sm:text-sm text-[#2A0808] focus:outline-2 focus:outline-[#7F1D1D]"
                    />
                  </div>

                  {/* ===========================================================
                      DOWNLOAD, COPY CARD TEXT, SHARE CARD AT THE VERY END OF ALL INPUT BOXES
                  =========================================================== */}
                  <div className="pt-4 mt-2 border-t border-[#7F1D1D]/20 space-y-2.5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          downloadGreetingCardImage({
                            headerLine: cardHeaderLine,
                            greetingLine: cardGreetingLine,
                            titleLine: cardTitleLine,
                            bodyMessage: cardBodyMessage,
                            closingLine: cardClosingLine,
                            signatureLine: cardSignatureLine,
                            footerLine: cardFooterLine,
                            theme: selectedCardTheme,
                            orientation: cardOrientation,
                          });
                          showToast(t.btnDownloadCard);
                        }}
                        className="btn-festive-outline inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-[#7F1D1D] hover:bg-[#B91C1C] text-[#FFF4E6] text-xs sm:text-sm font-bold border border-[#D4AF37] whitespace-nowrap cursor-pointer shadow-sm"
                      >
                        <Download className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{t.btnDownloadCard}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyStudioCardText}
                        className="btn-festive-outline inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-[#FCE7D6] hover:bg-[#D4AF37] text-[#450A0A] text-xs sm:text-sm font-bold border border-[#7F1D1D]/30 whitespace-nowrap cursor-pointer"
                      >
                        {copiedWishId === 'studio-copy' ? (
                          <>
                            <Check className="w-4 h-4 text-[#7F1D1D] shrink-0" />
                            <span>{lc.copiedLabel}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#7F1D1D] shrink-0" />
                            <span>{t.btnCopyCardText}</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleShareStudioCard}
                        className="btn-festive-outline inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-[#FFF4E6] hover:bg-[#FCE7D6] text-[#7F1D1D] text-xs sm:text-sm font-bold border border-[#7F1D1D]/35 whitespace-nowrap cursor-pointer"
                      >
                        <Share2 className="w-4 h-4 text-[#B91C1C] shrink-0" />
                        <span>{t.btnShareCard}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================
                CURATED WISHES LIBRARY (Every Row of Every Card Also Editable!)
            ================================================================= */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#450A0A]">
                    {lc.curatedWishesHeading}
                  </h3>
                  <p className="text-xs text-[#7F1D1D]">
                    {lc.curatedWishesSubheading}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {(
                    [
                      { key: 'all', label: lc.wishFilterTabs.all },
                      { key: 'wife', label: lc.wishFilterTabs.wife },
                      { key: 'husband', label: lc.wishFilterTabs.husband },
                      { key: 'mother', label: lc.wishFilterTabs.mother },
                      { key: 'poetic', label: lc.wishFilterTabs.poetic },
                      {
                        key: 'traditional',
                        label: lc.wishFilterTabs.traditional,
                      },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setWishCategoryKey(tab.key)}
                      className={`btn-festive-outline px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                        wishCategoryKey === tab.key
                          ? 'bg-[#7F1D1D] text-[#FFF4E6]'
                          : 'bg-[#FFF4E6] text-[#450A0A] border border-[#7F1D1D]/20 hover:bg-[#FCE7D6]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredWishes.map((wish) => {
                  const isCopied = copiedWishId === wish.id;
                  const isEditingThisCard = editingWishId === wish.id;

                  return (
                    <article
                      key={wish.id}
                      className="rounded-2xl bg-[#FFF4E6] border border-[#D4AF37]/60 p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-2xs"
                    >
                      <CardTopLotusOrnament
                        className="w-48 sm:w-56 h-7 mx-auto -mb-1"
                        variant="sindoor-gold"
                      />
                      {isEditingThisCard ? (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase text-[#7F1D1D]">
                              {lc.editAllRowsBtn}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingWishId(null);
                                showToast(lc.doneEditingBtn);
                              }}
                              className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#7F1D1D] text-[#FFF4E6] cursor-pointer"
                            >
                              {lc.doneEditingBtn}
                            </button>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-[#7F1D1D] mb-0.5">
                              {lc.rowLabels[0]}
                            </label>
                            <input
                              type="text"
                              value={wish.category}
                              onChange={(e) =>
                                handleUpdateWishField(
                                  wish.id,
                                  'category',
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg bg-[#FFF8F0] border border-[#7F1D1D]/30 px-2.5 py-1.5 text-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-[#7F1D1D] mb-0.5">
                              {lc.rowLabels[2]}
                            </label>
                            <input
                              type="text"
                              value={wish.title}
                              onChange={(e) =>
                                handleUpdateWishField(
                                  wish.id,
                                  'title',
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg bg-[#FFF8F0] border border-[#7F1D1D]/30 px-2.5 py-1.5 text-sm font-serif font-bold"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-[#7F1D1D] mb-0.5">
                              {lc.rowLabels[3]}
                            </label>
                            <textarea
                              rows={3}
                              value={wish.message}
                              onChange={(e) =>
                                handleUpdateWishField(
                                  wish.id,
                                  'message',
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg bg-[#FFF8F0] border border-[#7F1D1D]/30 p-2.5 text-xs sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-[#7F1D1D] mb-0.5">
                              {lc.rowLabels[4]}
                            </label>
                            <input
                              type="text"
                              value={wish.closing}
                              onChange={(e) =>
                                handleUpdateWishField(
                                  wish.id,
                                  'closing',
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg bg-[#FFF8F0] border border-[#7F1D1D]/30 px-2.5 py-1.5 text-xs sm:text-sm font-serif italic"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs text-[#B91C1C] font-semibold uppercase tracking-wider">
                            <span>{wish.category}</span>
                            <button
                              type="button"
                              onClick={() => setEditingWishId(wish.id)}
                              className="inline-flex items-center gap-1 text-[#7F1D1D] hover:text-[#B91C1C] underline underline-offset-2 cursor-pointer"
                            >
                              <Edit3 className="w-3 h-3" />
                              <span>{lc.editAllRowsBtn}</span>
                            </button>
                          </div>
                          <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#450A0A]">
                            {wish.title}
                          </h4>
                          <p className="text-sm sm:text-base text-[#2A0808]/90 leading-relaxed">
                            “{wish.message}”
                          </p>
                          <p className="font-serif italic text-base font-semibold text-[#7F1D1D]">
                            {wish.closing}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#7F1D1D]/15">
                        <button
                          type="button"
                          onClick={() => handleCopyLibraryWish(wish)}
                          className="btn-festive-outline inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[#7F1D1D] hover:bg-[#B91C1C] text-[#FFF4E6] cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                              <span>{lc.copiedLabel}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                              <span>{lc.copyWishBtn}</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setEditingWishId((prev) =>
                              prev === wish.id ? null : wish.id
                            )
                          }
                          className="btn-festive-outline inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#FFF8F0] hover:bg-[#FCE7D6] text-[#7F1D1D] border border-[#7F1D1D]/25 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>
                            {isEditingThisCard
                              ? lc.saveRowsBtn
                              : lc.editAllRowsBtn}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleLoadWishIntoStudio(wish)}
                          className="btn-festive-outline px-3 py-2 rounded-lg text-xs font-semibold bg-[#FCE7D6] hover:bg-[#D4AF37] text-[#450A0A] border border-[#7F1D1D]/25 cursor-pointer"
                        >
                          {lc.openInStudioBtn}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ)
        ===================================================================== */}
        <section
          id="faq"
          className="py-12 sm:py-16 lg:py-20 bg-[#FFF4E6] border-b border-[#7F1D1D]/15 scroll-mt-16"
        >
          <div className="w-full max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="text-center space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#B91C1C]">
                {t.faqKicker}
              </div>
              <h2
                className="font-serif font-bold text-[#450A0A]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                  textWrap: 'balance',
                }}
              >
                {t.faqTitle}
              </h2>
              <OrnateDivider />
              <p className="text-sm sm:text-base text-[#450A0A]/85 leading-relaxed">
                {t.faqSubtitle}
              </p>
            </div>

            <div className="space-y-3">
              {dynamicFaqsList.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-[#FFF8F0] border border-[#7F1D1D]/20 overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaqId((prev) =>
                          prev === faq.id ? null : faq.id
                        )
                      }
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-[#FCE7D6]/60 transition-colors cursor-pointer"
                    >
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#450A0A]">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#7F1D1D] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#7F1D1D] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-2 text-sm sm:text-base text-[#450A0A]/90 leading-relaxed border-t border-[#7F1D1D]/10">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          SECTION 9: ELEGANT FOOTER WITH FESTIVAL MESSAGE & DEVELOPER CREDIT
      ===================================================================== */}
      <footer className="w-full bg-gradient-to-b from-[#3A0707] to-[#230404] text-[#FFF4E6] border-t-2 border-[#D4AF37]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-3.5">
              <a
                href="#top"
                onClick={(e) => handleNavClick(e, 'top')}
                className="inline-flex items-center gap-3 group"
              >
                <img
                  src={siteLogoSrc}
                  alt={t.brandTitle}
                  onError={handleLogoImgError}
                  className="h-10 sm:h-12 w-auto max-w-[160px] object-contain shrink-0"
                />
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F7E5A9] group-hover:text-[#FFF4E6] transition-colors">
                  {t.brandTitle}
                </span>
              </a>
              <p className="text-sm text-[#FCE7D6]/85 leading-relaxed max-w-md">
                {lc.footerBlessing}
              </p>
              <p className="text-xs text-[#FCE7D6]/70 pt-1">
                {lc.footerCulturalNote}
              </p>
            </div>

            <div className="md:col-span-6 space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                {lc.footerSectionsHeading}
              </div>
              <ul className="space-y-2 text-sm text-[#FCE7D6]/85">
                {[
                  { id: 'countdown', label: t.navCountdown },
                  { id: 'puja-vidhi', label: t.navPujaVidhi },
                  { id: 'samagri', label: t.navSamagri },
                  { id: 'sargi-guide', label: t.sargiTitle },
                  { id: 'rituals', label: t.navRituals },
                  { id: 'wishes', label: t.navWishes },
                  { id: 'faq', label: t.faqTitle },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="hover:text-[#F7E5A9] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom-most Developer Credit Bar with Logo & GitHub Link */}
        <div className="w-full bg-[#FFF4E6] text-[#2A0808] border-t-2 border-[#D4AF37] py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <img
                src={siteLogoSrc}
                alt={t.brandTitle}
                onError={handleLogoImgError}
                className="h-7 sm:h-8 w-auto max-w-[120px] object-contain shrink-0"
              />
              <span className="font-serif font-bold text-sm sm:text-base text-[#7F1D1D]">
                {t.brandTitle}
              </span>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-semibold text-[#2A0808]">
              <span>Developed by:</span>
              <a
                href="https://github.com/MRLIKHANROY"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'brown' }}
                className="inline-flex items-center gap-1.5 font-bold hover:opacity-80 transition-opacity underline-offset-4 hover:underline"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-[1em] h-[1em] inline-block shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>MRLIKHANROY</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
