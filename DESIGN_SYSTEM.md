# Monty ShowCase - Design System Documentation

## 📋 Table of Contents
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Section-by-Section Breakdown](#section-by-section-breakdown)

---

## 🎨 Color Palette

### Primary Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary | `#FF6B35` | Main brand color, CTAs, prices, accents |
| Primary Foreground | `#ffffff` | Text on primary color |
| Secondary | `#4ECDC4` | Secondary brand color, alternative CTAs |
| Secondary Foreground | `#ffffff` | Text on secondary color |
| Accent | `#FFD93D` | Highlights, badges, special elements |
| Accent Foreground | `#1a1a1a` | Text on accent color |

### Neutral Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Background | `#ffffff` | Main page background |
| Foreground | `#1a1a1a` | Main text color |
| Muted | `#f5f5f5` | Subtle backgrounds |
| Muted Foreground | `#6b7280` | Secondary text, descriptions |

### Functional Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Destructive | `#EF4444` | Urgency indicators, "one piece left" badges |
| Destructive Foreground | `#ffffff` | Text on destructive color |
| WhatsApp Green | `#25D366` | WhatsApp buttons |
| WhatsApp Hover | `#20BA5A` | WhatsApp button hover state |

### Utility Colors
| Color Name | Value | Usage |
|------------|-------|-------|
| Border | `rgba(0, 0, 0, 0.08)` | Card borders, dividers |
| White Overlays | `rgba(255, 255, 255, 0.1-0.95)` | Glass morphism effects |
| Black Overlays | `rgba(0, 0, 0, 0.75)` | Hero background overlay |

---

## 📝 Typography

### Font Family
- **Primary Font**: `Tajawal` (Arabic font from Google Fonts)
- **Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Direction**: RTL (Right-to-Left)

### Font Weights
- **Normal**: `400`
- **Medium**: `500`

### Font Sizes (by Element)
| Element | Mobile Size | Desktop Size |
|---------|-------------|--------------|
| Hero Title | `text-2xl` / `text-3xl` | `text-4xl` / `text-5xl` |
| Hero Description | `text-lg` | `text-xl` / `text-2xl` |
| Section Headers (h2) | Default (text-xl) | Default (text-xl) |
| Section Headers (h3) | Default (text-lg) | Default (text-lg) |
| Product Names | Default | Default |
| Prices | `text-2xl` | `text-2xl` |
| Body Text | `text-base` | `text-base` |
| Small Text | `text-sm` | `text-sm` |

### Border Radius
- **Small**: `calc(0.75rem - 4px)` = `8px`
- **Medium**: `calc(0.75rem - 2px)` = `10px`
- **Large**: `0.75rem` = `12px`
- **XL**: `calc(0.75rem + 4px)` = `16px`
- **Custom (Cards)**: `rounded-xl` = `12px`, `rounded-2xl` = `16px`, `rounded-3xl` = `24px`

---

## 📑 Section-by-Section Breakdown

### 1️⃣ NAVBAR

#### Colors
- Background: `rgba(0, 0, 0, 0.3)` with backdrop blur
- Border: `rgba(255, 255, 255, 0.1)`
- Logo Text (Monty): `#ffffff`
- Logo Text (ShowCase): `#FF6B35` (Primary)
- Icons: `#ffffff`
- Icon Hover Background: `rgba(255, 255, 255, 0.1)`

#### Typography
- Logo Font Size: `text-2xl`
- Logo Font Weight: `font-bold`

#### Texts
- "Monty ShowCase"

---

### 2️⃣ HERO SECTION

#### Colors
- Background Overlay: `rgba(0, 0, 0, 0.75)`
- Title Color: `#ffffff`
- Description Color: `rgba(255, 255, 255, 0.9)`
- Primary Button Background: `#FF6B35`
- Primary Button Hover: `rgba(255, 107, 53, 0.9)`
- Primary Button Text: `#ffffff`
- Primary Button Shadow: `rgba(255, 107, 53, 0.3)`
- Secondary Button Background: `rgba(255, 255, 255, 0.1)`
- Secondary Button Hover: `rgba(255, 255, 255, 0.2)`
- Secondary Button Border: `rgba(255, 255, 255, 0.3)`
- Secondary Button Text: `#ffffff`

#### Typography
- **Mobile Title**: `text-2xl` / `text-3xl`, center aligned
- **Desktop Title**: `text-4xl` / `text-5xl`, right aligned
- **Mobile Description**: Hidden (description inside product card)
- **Desktop Description**: `text-xl` / `text-2xl`, right aligned
- **Button Text**: `text-base` / `text-lg`

#### Texts
**Fixed Title:**
- "البس صح وخليك مختلف"

**CTA Buttons:**
- Mobile: "أطلب هسع" | "شوف المنتجات"
- Desktop: "اطلب الآن" | "المنتجات"

**Dynamic Descriptions (Hero Products):**
1. "تيشيرت قطن 100% بتصميم عصري - الخيار المثالي للإطلالة اليومية"
2. "جينز بقصة مريحة وجودة عالية - أناقة وراحة في قطعة واحدة"
3. "تيشيرت أبيض كلاسيكي - قطعة أساسية لكل دولاب"
4. "بنطلون كاجوال بقصة عصرية - راحة وأناقة طوال اليوم"
5. "تيشيرت رمادي بقماش ناعم - مثالي للاستخدام اليومي"

**Product Names (Hero Carousel):**
1. "تيشيرت قطن أسود" - 12,500 ج.س
2. "بنطلون جينز أزرق كلاسيك" - 25,000 ج.س
3. "تيشيرت أبيض سادة" - 13,500 ج.س
4. "بنطلون كاكي كاجوال" - 22,000 ج.س
5. "تيشيرت رمادي ناعم" - 14,000 ج.س

---

### 3️⃣ FEATURED PRODUCT CAROUSEL (Hero)

#### Colors
- Card Background: Gradient `from-white/10 to-white/5` with backdrop blur
- Card Border: `rgba(255, 255, 255, 0.2)`
- Product Image Background: `rgba(255, 255, 255, 0.95)`
- Price Tag Background: `#FF6B35` (Primary)
- Price Tag Text: `#ffffff`
- Product Name Color: `#ffffff`
- Description Color: `rgba(255, 255, 255, 0.8)`
- Navigation Button Background: `rgba(255, 255, 255, 0.1)`
- Navigation Button Hover: `rgba(255, 255, 255, 0.2)`
- Navigation Button Border: `rgba(255, 255, 255, 0.2)`
- Dot Indicator (Active): `#FF6B35`
- Dot Indicator (Inactive): `rgba(255, 255, 255, 0.4)`
- Glow Effect: `rgba(255, 107, 53, 0.2)`

#### Typography
- Product Name: `text-xl` / `text-2xl`, center aligned
- Price: `text-base` / `text-lg`, medium weight
- Description: `text-sm` / `text-base`, center aligned

---

### 4️⃣ FEATURED PRODUCTS SECTION

#### Colors
- Background: `#ffffff`
- Section Title: `#1a1a1a`
- Section Subtitle: `#6b7280` (Muted Foreground)
- Action Link: `#FF6B35` (Primary)
- Product Card Background: `#ffffff`
- Product Card Shadow: Default shadow
- Product Card Hover: Enhanced shadow
- Product Name: `#1a1a1a`
- Price: `#FF6B35` (Primary)
- Add to Cart Button Background: `#FF6B35` (Primary)
- Add to Cart Button Text: `#ffffff`

#### Typography
- Section Title (h2): Default size
- Section Subtitle: `text-sm`
- Action Link: Default size
- Product Name (h3): Default size
- Price: Default size

#### Texts
- **Section Title**: "منتجات مميزة"
- **Section Subtitle**: "أفضل اختياراتنا ليك"
- **Action Link**: "عرض الكل"

**Products:**
1. "تيشيرت كاجوال - أسود" - 12,500 ج.س
2. "بنطلون جينز - أزرق" - 25,000 ج.س
3. "تيشيرت بولو - أبيض" - 15,000 ج.س
4. "شورت كاجوال - بيج" - 18,000 ج.س

---

### 5️⃣ NEWEST PRODUCTS SECTION

#### Colors
- Background: `rgba(245, 245, 245, 0.3)` (Muted/30)
- Badge Background: `#FFD93D` (Accent)
- Badge Text: `#1a1a1a` (Accent Foreground)
- Other colors same as Featured Products

#### Typography
Same as Featured Products section

#### Texts
- **Section Title**: "جديد مونتي 🎯"
- **Section Subtitle**: "آخر الوصولات"
- **Action Link**: "عرض الكل"
- **Badge**: "جديد"

**Products:** (Same as Featured Products - 6 items)

---

### 6️⃣ LIMITED PIECES SECTION

#### Colors
- Background: Gradient `from-primary/5 to-secondary/5`
- Icon Color: `#FF6B35` (Primary)
- Section Title: `#1a1a1a`
- Section Subtitle: `#6b7280` (Muted Foreground)
- Card Background: `#ffffff`
- Card Border: `#FFD93D` (Accent) - 2px
- Urgency Badge Background: `#EF4444` (Destructive)
- Urgency Badge Text: `#ffffff`
- Product Name: `#1a1a1a`
- Price: `#FF6B35` (Primary)

#### Typography
- Section Title: Default (h2)
- Section Subtitle: `text-sm`
- Badge Text: `text-sm`
- Product Name (h3): Default
- Price: `text-2xl`

#### Texts
- **Section Title**: "قطع حصرية ⚡"
- **Section Subtitle**: "كل قطعة واحدة بس - استغل الفرصة!"
- **Badge**: "قطعة واحدة بس"

**Products:**
1. "جاكيت جينز فاخر - أزرق غامق" - 45,000 ج.س
2. "قميص كاروهات - أحمر وأسود" - 20,000 ج.س
3. "تيشيرت مخطط - أصفر وأبيض" - 14,000 ج.س

---

### 7️⃣ ALL PRODUCTS SECTION

#### Colors
Same as Featured Products section

#### Typography
Same as Featured Products section

#### Texts
- **Section Title**: "كل المنتجات"
- **Section Subtitle**: "تصفح الكتالوج الكامل"
- **Action Link**: "عرض الكل"

**Products:** 8 items (repeated from Featured Products)

---

### 8️⃣ OFFERS & DISCOUNTS SECTION

#### Colors
- Background: Gradient `from-accent/20 to-primary/10`
- Icon Color: `#FF6B35` (Primary)
- Section Title: `#1a1a1a`

**Offer Card 1 (Discount):**
- Background: Gradient `from-primary to-primary/80`
- Text: `#ffffff`
- Description: `rgba(255, 255, 255, 0.9)`
- Button Background: `#ffffff`
- Button Text: `#FF6B35` (Primary)

**Offer Card 2 (Free Delivery):**
- Background: Gradient `from-secondary to-secondary/80`
- Text: `#ffffff`
- Description: `rgba(255, 255, 255, 0.9)`
- Button Background: `#ffffff`
- Button Text: `#4ECDC4` (Secondary)

#### Typography
- Section Title: Default (h2)
- Card Title (h3): Default, white color
- Card Description: Default size
- Button Text: Default size

#### Texts
- **Section Title**: "عروض وخصومات 💰"

**Card 1:**
- Emoji: "🎁"
- Title: "اشتري 2 واحصل على خصم 15%"
- Description: "عرض لفترة محدودة على كل المنتجات"
- Button: "اطلب الآن"

**Card 2:**
- Emoji: "🚚"
- Title: "توصيل مجاني"
- Description: "على الطلبات فوق 30,000 ج.س داخل الخرطوم"
- Button: "تسوق الآن"

---

### 9️⃣ ABOUT THE OWNER SECTION

#### Colors
- Background: `#ffffff`
- Card Background: `#ffffff`
- Card Shadow: Default shadow-lg
- Owner Image Border: None
- Title (h2): `#1a1a1a`
- Paragraph Text: `#6b7280` (Muted Foreground)
- Signature Text: `#FF6B35` (Primary)

#### Typography
- Title (h2): Default size
- Paragraph: Default size, relaxed leading
- Signature: Default size

#### Texts
- **Title**: "كلمة صاحب المحل"
- **Content**: "السلام عليكم يا شباب! أنا أحمد، وأنا هنا عشان أقدم ليكم أفضل الملابس الكاجوال بأسعار معقولة. مونتي ستور بدأت من حب الموضة والستايل، وكل قطعة بنختارها بعناية عشان تكون مميزة وتناسب ذوقكم. ثقتكم فينا هي الأهم، ووعدنا ليكم جودة عالية وخدمة ممتازة."
- **Signature**: "- أحمد محمد، مؤسس مونتي ستور"

---

### 🔟 ORDERING METHOD SECTION

#### Colors
- Background: `rgba(245, 245, 245, 0.3)` (Muted/30)
- Title (h2): `#1a1a1a`
- Subtitle: `#6b7280` (Muted Foreground)
- Step Card Background: `#ffffff`
- Step Number Background: `rgba(255, 107, 53, 0.1)`
- Step Number Text: `#FF6B35` (Primary)
- Step Title (h3): `#1a1a1a`
- Step Description: `#6b7280` (Muted Foreground)
- WhatsApp Button Background: `#25D366`
- WhatsApp Button Hover: `#20BA5A`
- WhatsApp Button Text: `#ffffff`
- Call Button Background: `#FF6B35` (Primary)
- Call Button Text: `#ffffff`

#### Typography
- Title (h2): Default size
- Subtitle: Default size
- Step Number: `text-xl`
- Step Title (h3): Default size
- Step Description: `text-sm`
- Button Text: Default size

#### Texts
- **Title**: "كيف تطلب؟"
- **Subtitle**: "الطلب سهل ومباشر - اختار المنتج وتواصل معنا"

**Steps:**
1. **Title**: "اختار المنتج"
   - **Description**: "تصفح واختار القطعة اللي عاجبتك"

2. **Title**: "أضف إلى السلة 🛒"
   - **Description**: "اضغط على زر *إضافة إلى السلة* داخل صفحة المنتج"

3. **Title**: "أكمل الطلب"
   - **Description**: "اضغط *شراء الآن* أو أضف منتجات أخرى إلى السلة ثم أتمم الشراء"

**CTA Buttons:**
- "تواصل عبر واتساب"
- "اتصل بنا"

---

### 1️⃣1️⃣ FOOTER

#### Colors
- Background: `#1a1a1a` (Foreground color inverted)
- Text Color: `#ffffff` (Background color inverted)
- Section Titles (h3, h4): `#ffffff`
- Body Text: `rgba(255, 255, 255, 0.8)`
- Social Icons Background: `rgba(255, 255, 255, 0.1)`
- Social Icons Hover: `rgba(255, 255, 255, 0.2)`
- Border Top: `rgba(255, 255, 255, 0.2)`
- Copyright Text: `rgba(255, 255, 255, 0.6)`

#### Typography
- Brand Title (h3): Default size
- Tagline: `text-sm`
- Section Titles (h4): Default size
- Contact Info: `text-sm`
- Copyright: `text-sm`

#### Texts
**Column 1:**
- **Title**: "مونتي ستور"
- **Tagline**: "ستايلك... بطريقتك"

**Column 2:**
- **Title**: "تواصل معنا"
- **Phone 1**: "+249 123 456 789"
- **Phone 2**: "+249 987 654 321"

**Column 3:**
- **Title**: "تابعنا"
- Social Links: Instagram, Facebook

**Copyright:**
- "© 2026 مونتي ستور - جميع الحقوق محفوظة"

---

### 1️⃣2️⃣ STICKY WHATSAPP BUTTON

#### Colors
- Background: `#25D366` (WhatsApp Green)
- Hover Shadow: `rgba(37, 211, 102, 0.5)`
- Icon Color: `#ffffff`

#### Position
- Bottom: `1.5rem` (24px)
- Left: `1.5rem` (24px)
- Size: `3.5rem × 3.5rem` (56px × 56px)
- Z-index: 40

---

### 1️⃣3️⃣ PRODUCT DETAIL MODAL

#### Colors
- Background Overlay: `rgba(0, 0, 0, 0.5)`
- Modal Background: `#ffffff`
- Close Button Hover: `#f5f5f5` (Muted)
- "Only 1 Left" Badge Background: `#EF4444` (Destructive)
- "Only 1 Left" Badge Text: `#ffffff`
- Product Name (h1): `#1a1a1a`
- Price: `#FF6B35` (Primary)
- Description Text: `#6b7280` (Muted Foreground)
- Size Button Border (Unselected): `rgba(0, 0, 0, 0.08)`
- Size Button Border (Selected): `#FF6B35` (Primary) - 2px
- Size Button Background (Selected): `rgba(255, 107, 53, 0.1)`
- Size Button Text (Selected): `#FF6B35` (Primary)
- WhatsApp Button Background: `#25D366`
- WhatsApp Button Hover: `#20BA5A`
- WhatsApp Button Disabled: `#d1d5db`

#### Typography
- Product Name (h1): Default size
- Price: `text-3xl`
- Description: Default size, relaxed leading
- Size Label: Default size
- Button Text: Default size

#### Texts
- **Size Selection Label**: "اختر المقاس"
- **WhatsApp Button**: "اطلب عبر واتساب"
- **Urgency Badge**: "قطعة واحدة متبقية!"

---

## 📐 Layout & Spacing

### Container Widths
- Maximum Width (Sections): `max-w-6xl` (1152px)
- Maximum Width (Narrow Sections): `max-w-4xl` (896px)
- Maximum Width (Hero): `max-w-7xl` (1280px)

### Padding
- Section Vertical Padding: `py-12` (3rem)
- Section Horizontal Padding: `px-4`
- Card Padding: `p-6` to `p-8`

### Gaps
- Grid Gap: `gap-4` (1rem)
- Flex Gap: `gap-3` to `gap-4` (0.75rem - 1rem)

---

## 🎭 Animations

### Transition Durations
- Fast: `0.3s`
- Medium: `0.4s`
- Slow: `0.5s`

### Auto-Slide Interval
- Hero Product Carousel: 4 seconds (4000ms)

### Animation Types
- Fade In/Out
- Scale (0.95 - 1.05)
- Slide (Y-axis)
- Spring animations for interactive elements

---

## 📱 Responsive Breakpoints

### Tailwind Default Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Responsive Behavior
- Mobile-first approach
- 2-column grid becomes 3-4 columns on larger screens
- Hero switches from vertical (mobile) to 2-column (desktop) at `lg` breakpoint

---

## 🌐 RTL (Right-to-Left) Configuration

- **Direction**: `rtl` set on `<body>`
- **Font**: Arabic font (Tajawal) optimized for RTL
- **Layout**: All flexbox and grid layouts respect RTL automatically

---

*Last Updated: 2026-05-05*
