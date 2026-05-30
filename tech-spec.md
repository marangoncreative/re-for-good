# RE Token — Teknik Spesifikasyon

## Bagimliliklar (Dependencies)

### Uretim (Production)

| Paket | Versiya | Sebeb |
|-------|---------|-------|
| react | ^19.1 | UI kitabxanasi |
| react-dom | ^19.1 | React DOM renderer |
| react-router-dom | ^7.6 | Tek sehife (SPA), anker navigasiya |
| gsap | ^3.13 | Butun animasiyalar, ScrollTrigger, timeline |
| lenis | ^1.3 | Smooth scroll, GSAP ile sync |
| three | ^0.175 | 3D engine — ASCII sahne ve orbit ring |
| @react-three/fiber | ^9.1 | Three.js React integrasiyasi |
| @react-three/drei | ^10.0 | R3F helperleri (Html, useTexture) |

### Inkişaf (Development)

| Paket | Versiya | Sebeb |
|-------|---------|-------|
| typescript | ^5.8 | Tip sistemi |
| vite | ^6.3 | Build aləti |
| @vitejs/plugin-react | ^4.4 | React Vite plugin |
| tailwindcss | ^4.1 | Utility-first CSS |
| @tailwindcss/vite | ^4.1 | Tailwind Vite integrasiyasi |
| @types/react | ^19.1 | React tipleri |
| @types/react-dom | ^19.1 | ReactDOM tipleri |
| @types/three | ^0.175 | Three.js tipleri |

## Komponent Envanteri

### Layout (Paylaşılan)

| Komponent | Mənbə | İstifadə | Qeyd |
|-----------|-------|----------|------|
| Navigation | Özel | Sabit header, bütün səhifə | Scroll ilə arxa plan dəyişimi, aktiv underline |
| AnnouncementBar | Özel | Üst bar | Sabit 40px bar |
| Footer | Özel | Alt hissə | Sütunlar, linklər |

### Bölmələr (Sections)

| Komponent | Mənbə | İstifadə | Qeyd |
|-----------|-------|----------|------|
| HeroSection | Özel | Hero — ASCII shader fon | R3F Canvas + content overlay |
| ManifestoSection | Özel | 2 sütunlu mətn + şəkil | Parallax şəkil |
| ThreePillarsSection | Özel | 3 kart sırası | Hover border animasiyası |
| DecentralizedSection | Özel | 2 sütunlu şəkil + mətn | Əks slaydlı giriş |
| RwaNftSection | Özel | Mərkəzləşdirilmiş mətn | Fade-in stagger |
| WhyReFiSection | Özel | 2 sütunlu mətn + şəkil | Parallax şəkil |
| ParallaxGallerySection | Özel | Horizontal scroll galeri | GSAP pin + 3D kart rotasiyası |
| ForArtistsSection | Özel | 2×2 kart grid | Stagger giriş |
| ForBusinessesSection | Özel | 4 sütunlu xüsusiyyətlər | Stagger giriş |
| ForCitizensSection | Özel | 4 xüsusiyyət + CTA | Stagger giriş |
| PartnersRingSection | Özel | 3D orbit mətn üzüyü | R3F sahne + overlay mətn |
| ProjectsSection | Özel | 3 layihə kartı | Hover lift animasiyası |
| TokenomicsSection | Özel | Donut cədvəl + 3 sütun | Scale giriş + stagger |

### Yenidən İstifadə Edilən Komponentlər

| Komponent | Mənbə | İstifadə | Qeyd |
|-----------|-------|----------|------|
| SectionLabel | Özel | Bütün bölmələr | 11px, uppercase, gold rəng |
| PillButton | Özel | Nav, Hero, bölmə CTA-ları | 50px border-radius, 2 varyant |
| FeatureCard | Özel | Artists, kart əsaslı bölmələr | Border, hover state |
| ProjectCard | Özel | Projects bölməsi | Şəkil + badge + mətn + link |

### Three.js / Shader Komponentləri

| Komponent | Mənbə | İstifadə | Qeyd |
|-----------|-------|----------|------|
| AsciiCanvas | Özel | HeroSection fonu | R3F OrthographicCamera + MSDF shader |
| AsciiShaderMaterial | Özel | AsciiCanvas daxili | Custom ShaderMaterial, 13+ uniform |
| OrbitingRing | Özel | PartnersRingSection | R3F Group + Html drei, 24 element |

## Animasiya Planı

| Animasiya | Kitabxana | Tətbiqat | Mürəkkəblik |
|-----------|-----------|----------|-------------|
| ASCII Particle Field (MSDF shader, mouse inversion, ripple, scroll offset) | Three.js raw shader (R3F Canvas) | AsciiCanvas — custom vertex + fragment shader, 13 uniform, mouse lerp, per-cell hash | **Yüksək** |
| Hero mətn girişi (fade + translateY stagger) | GSAP timeline | HeroSection — headline, ornamental, body, CTA stagger | Aşağı |
| Bölmə giriş animasiyaları (translateY + opacity) | GSAP ScrollTrigger | Bütün bölmələr — start: "top 80%", play once | Aşağı |
| Parallax şəkil hərəkəti | GSAP ScrollTrigger | Manifesto, Decentralized, WhyReFi — şəkillər fərqli scroll sürəti | Aşağı |
| 3D kart rotasiyası + slide (gallery) | GSAP ScrollTrigger pin + containerAnimation | ParallaxGallerySection — rotationY ±40°, xPercent ±100 | **Yüksək** |
| 3D orbit mətn üzüyü (auto-rotate + scroll-driven) | R3F useFrame + drei Html | PartnersRingSection — trigonometrik pozisiya, dərinlik əsaslı opacity | **Yüksək** |
| Nav aktiv underline sürüşməsi | GSAP ScrollTrigger | Navigation — underline left/width animasiyası | Orta |
| Nav arxa plan keçidi (transparent → frosted) | GSAP ScrollTrigger | Navigation — backdrop-filter + background | Aşağı |
| Kart hover lift + kölgə dərinləşməsi | CSS transition | Projects kartları — translateY(-8px) | Aşağı |
| Scroll indicator animasiyası | CSS @keyframes | Hero — dövrü translateY + fade | Aşağı |

## Dövriyyə Planı (State & Logic)

### Lenis ↔ GSAP Ticker Sinxronizasiyası
Lenis smooth scroll instance-i GSAP ticker-ə bağlanır. Lenis `scroll` event-i ScrollTrigger.update() çağırır. GSAP ticker hər frame Lenis.raf() çağırır. Bu sinxronizasiya bütün ScrollTrigger animasiyalarının düzgün işləməsi üçün vacibdir.

### Mouse → Three.js Uniform Keçidi
ASCII shader üçün: container üzərində mousemove event listener raw piksel koordinatlarını yığır. R3F `useFrame` hər frame `threeMouse.lerp(targetMouse, 0.14)` ilə hamarlayır və `uMouse` uniform-una yazır. `uJump` uniform-u hər mouse hərəkətində `Math.random()` ilə yenilənir.

### Scroll Progress → Three.js Rotasiya Keçidi
Orbit üzük üçün: Lenis scroll progress-i (scrollY / limit) `targetRotX` və `targetRotY` hesablanması üçün istifadə olunur. `useFrame` hər frame cari rotasiyanı target-ə `0.05` lerp ilə yaxınlaşdırır.

### Shader Glyph Texture Yaratma
ASCII shader üçün 1024 glyph indeksini RGBA texture-ə kodlaşdırmaq lazımdır. `encodeValue`/`decodeValue` funksiyaları ilə Uint8Array texture yaradılır və `uGlyphs` uniform olaraq ötürülür.

## Digər Əsas Qərarlar

### MSDF Font Sistemi
ASCII shader Multi-Channel Signed Distance Field (MSDF) font renderinqi tələb edir. Atlas PNG (2048×2048 tövsiyə olunur) + glyph metrics JSON faylı lazımdır. `three-msdf-text-utils` paketi və ya MSDF atlas generator alətləri (`msdf-bmfont-xml`, `msdf-atlas-gen`) ilə atlas yaradılmalıdır.

### ParallaxGallery 3D Kart Efekti
`containerAnimation` ilə `ScrollTrigger` konfiqurasiyası tələb edir. Hər slide üçün iki müstəqil GSAP animasiyası — cardWrapper (rotationY) və card (xPercent) — eyni `containerAnimation` ilə scrub edilir.

### Orbiting Ring — Drei Html vs TextMesh
Orbit üzük üçün Drei `<Html>` komponenti istifadə olunur (DOM elementlər 3D məkanda pozisiya olunur). Bu, CSS ilə stil verməyə və opacity dəyişdirməyə imkan verir. Alternativ — `three-mesh-ui` və ya custom TextMesh.
