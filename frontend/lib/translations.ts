export type Lang = 'en' | 'th'

export const nav = {
  links: [
    { id: 'menu',    en: 'Menu',    th: 'เมนู' },
    { id: 'gallery', en: 'Gallery', th: 'แกลเลอรี' },
    { id: 'reviews', en: 'Reviews', th: 'รีวิว' },
    { id: 'booking', en: 'Booking', th: 'จองโต๊ะ' },
    { id: 'location',en: 'Location',th: 'สถานที่' },
  ],
  reserve: { en: 'Reserve', th: 'จองโต๊ะ' },
}

export const hero = {
  en: {
    pre:  'Est. 2024 · Bangkok',
    h1:   'A quiet space\nfor slow mornings',
    sub:  'Specialty coffee, house-baked pastries,\nand the sound of nothing in particular.',
    cta1: 'View Menu',
    cta2: 'Reserve a Table',
    open: 'Open Daily',
    time: '8:00 — 18:00',
  },
  th: {
    pre:  'ก่อตั้ง 2567 · กรุงเทพฯ',
    h1:   'พื้นที่เงียบสงบ\nสำหรับเช้าวันสบายๆ',
    sub:  'กาแฟ Specialty ขนมอบโฮมเมด\nและเสียงของความเงียบ',
    cta1: 'ดูเมนู',
    cta2: 'จองโต๊ะ',
    open: 'เปิดทุกวัน',
    time: '8:00 — 18:00',
  },
}

export const menu = {
  en: {
    label: 'Menu',
    title: 'Our Menu',
    sub: 'Carefully sourced, thoughtfully crafted',
    categories: ['Coffee', 'Tea', 'Bakery', 'Signature'],
    items: {
      Coffee: [
        { name: 'Espresso',    desc: 'Rich, bold, and pure',                       price: 60,  img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=128&h=128&fit=crop&q=80' },
        { name: 'Americano',   desc: 'Smooth black coffee',                         price: 70,  img: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=128&h=128&fit=crop&q=80' },
        { name: 'Café Latte',   desc: 'Creamy espresso with steamed milk',            price: 85,  img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=128&h=128&fit=crop&q=80' },
        { name: 'Cappuccino',  desc: 'Equal parts espresso, milk, and foam',        price: 85,  img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=128&h=128&fit=crop&q=80' },
      ],
      Tea: [
        { name: 'Matcha Latte',  desc: 'Uji matcha with oat milk',                 price: 90, img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=128&h=128&fit=crop&q=80' },
        { name: 'Hojicha Latte', desc: 'Roasted green tea, warm & nutty',          price: 90, img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=128&h=128&fit=crop&q=80' },
        { name: 'Jasmine Green', desc: 'Light and fragrant',                        price: 65, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=128&h=128&fit=crop&q=80' },
      ],
      Bakery: [
        { name: 'Butter Croissant',  desc: 'Flaky, golden, classic',               price: 75, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=128&h=128&fit=crop&q=80' },
        { name: 'Matcha Roll Cake',  desc: 'Soft sponge with matcha cream',        price: 95, img: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=128&h=128&fit=crop&q=80' },
        { name: 'Banana Bread',      desc: 'Moist with walnuts',                   price: 80, img: 'https://images.unsplash.com/photo-1585023131141-0f8a62e05708?w=128&h=128&fit=crop&q=80' },
      ],
      Signature: [
        { name: 'MujiMoji Blend', desc: 'House specialty, balanced & fruity',      price: 95,  img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=128&h=128&fit=crop&q=80' },
        { name: 'Affogato',       desc: 'Vanilla gelato drowned in espresso',      price: 110, img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=128&h=128&fit=crop&q=80' },
        { name: 'Moji Mochi',     desc: 'Soft mochi with coffee cream filling',    price: 85,  img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=128&h=128&fit=crop&q=80' },
      ],
    },
  },
  th: {
    label: 'Menu',
    title: 'เมนูของเรา',
    sub: 'คัดสรรวัตถุดิบคุณภาพ ใส่ใจทุกแก้ว',
    categories: ['กาแฟ', 'ชา', 'เบเกอรี', 'ซิกเนเจอร์'],
    items: {
      'กาแฟ': [
        { name: 'เอสเพรสโซ',    desc: 'เข้มข้น กลมกล่อม',         price: 60,  img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=128&h=128&fit=crop&q=80' },
        { name: 'อเมริกาโน่',   desc: 'กาแฟดำนุ่มลึก',                   price: 70,  img: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=128&h=128&fit=crop&q=80' },
        { name: 'คาเฟ่ ลาเต้',   desc: 'เอสเพรสโซกับนมสด',   price: 85,  img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=128&h=128&fit=crop&q=80' },
        { name: 'คาปูชิโน',  desc: 'เอสเพรสโซ นม และโฟม สมดุล',       price: 85,  img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=128&h=128&fit=crop&q=80' },
      ],
      'ชา': [
        { name: 'มัทฉะ ลาเต้',  desc: 'มัทฉะอูจิกับนมโอ๊ต',              price: 90, img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=128&h=128&fit=crop&q=80' },
        { name: 'โฮจิฉะ ลาเต้', desc: 'ชาเขียวคั่ว หอมมัน',            price: 90, img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=128&h=128&fit=crop&q=80' },
        { name: 'จัสมิน กรีนที', desc: 'เบาสบาย หอมดอกมะลิ',        price: 65, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=128&h=128&fit=crop&q=80' },
      ],
      'เบเกอรี': [
        { name: 'บัตเตอร์ ครัวซองต์',  desc: 'กรอบนอกนุ่มใน คลาสสิก',   price: 75, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=128&h=128&fit=crop&q=80' },
        { name: 'มัทฉะ โรลเค้ก',  desc: 'เนื้อนุ่มไส้ครีมมัทฉะ',   price: 95, img: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=128&h=128&fit=crop&q=80' },
        { name: 'บานาน่า เบรด',      desc: 'ชุ่มฉ่ำกับวอลนัท',                  price: 80, img: 'https://images.unsplash.com/photo-1585023131141-0f8a62e05708?w=128&h=128&fit=crop&q=80' },
      ],
      'ซิกเนเจอร์': [
        { name: 'MujiMoji Blend', desc: 'สูตรพิเศษของร้าน ผลไม้และบาลานซ์', price: 95,  img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=128&h=128&fit=crop&q=80' },
        { name: 'อัฟโอกาโต้',       desc: 'เจลาโต้วานิลลาราดเอสเพรสโซ',  price: 110, img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=128&h=128&fit=crop&q=80' },
        { name: 'โมจิ โมจิ',     desc: 'โมจินุ่มไส้ครีมกาแฟ',                price: 85,  img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=128&h=128&fit=crop&q=80' },
      ],
    },
  },
}

export const gallery = {
  en: { label: 'Gallery', title: 'Our Space',    sub: 'Every corner, thoughtfully arranged' },
  th: { label: 'Gallery', title: 'บรรยากาศร้าน', sub: 'มุมเล็กๆ ที่เราตั้งใจจัดให้คุณ' },
}

export const reviews = {
  en: {
    label: 'Reviews', title: 'What People Say',
    items: [
      { name: 'Yuki T.',  text: 'The quietest cafe in Bangkok. Perfect for journaling and slow sipping. The matcha latte is heavenly.', rating: 5 },
      { name: 'Pim S.',   text: 'Minimalist interior that actually feels warm. The croissants are incredible — crispy outside, buttery layers inside.', rating: 5 },
      { name: 'Alex R.',  text: 'Found my new work-from-cafe spot. Great WiFi, amazing coffee, and nobody rushes you. Love the mochi too!', rating: 4 },
      { name: 'Nana K.',  text: 'Every detail feels intentional. From the ceramic cups to the playlist. Will keep coming back.', rating: 5 },
    ],
  },
  th: {
    label: 'Reviews', title: 'เสียงจากลูกค้า',
    items: [
      { name: 'ยูกิ T.', text: 'คาเฟ่ที่เงียบที่สุดในกรุงเทพฯ เหมาะกับการเขียนบันทึกและจิบกาแฟช้าๆ มัทฉะลาเต้อร่อยมาก', rating: 5 },
      { name: 'พิม S.',  text: 'อินทีเรียมินิมอลแต่อบอุ่น ครัวซองต์เป็นที่สุด กรอบนอกนุ่มเนย', rating: 5 },
      { name: 'อเล็กซ์ R.', text: 'ที่นั่งทำงานใหม่ของผม WiFi ดี กาแฟเยี่ยม ไม่มีใครเร่ง โมจิก็อร่อย!', rating: 4 },
      { name: 'นานา K.', text: 'ทุกรายละเอียดตั้งใจมาก ตั้งแต่ถ้วยเซรามิกไปจนถึงเพลย์ลิสต์ จะกลับมาอีกแน่นอน', rating: 5 },
    ],
  },
}

export const booking = {
  en: { title: 'Reserve a Table', sub: "Plan your visit — we'll save you a quiet spot", name: 'Your Name', phone: 'Phone', date: 'Date', time: 'Time', guests: 'Guests', note: 'Special requests', notePlaceholder: 'e.g. window seat', btn: 'Reserve Now', success: 'Reservation confirmed! See you soon.', back: 'Make another reservation', error: 'Something went wrong. Please try again.' },
  th: { title: 'จองโต๊ะ', sub: 'วางแผนมาเยือน — เราจัดที่นั่งเงียบสงบให้คุณ', name: 'ชื่อ', phone: 'เบอร์โทร', date: 'วันที่', time: 'เวลา', guests: 'จำนวน', note: 'ข้อความเพิ่มเติม', notePlaceholder: 'เช่น ขอนั่งริมหน้าต่าง', btn: 'จองเลย', success: 'จองสำเร็จแล้ว! แล้วพบกันนะ', back: 'จองใหม่อีกครั้ง', error: 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง' },
}

export const location = {
  en: {
    label: 'Location', title: 'Find Us', sub: 'Tucked in a quiet soi, worth the detour',
    addr: '42/7 Soi Sukhumvit 49,\nKhlong Tan Nuea, Watthana\nBangkok 10110',
    hours: 'Opening Hours', daily: 'Daily', time: '8:00 — 18:00',
    closed: 'Closed on Wednesdays',
    phone: '02-XXX-XXXX', email: 'hello@mujimoji.cafe',
    transit: 'BTS Thonglor, Exit 3 — 5 min walk',
    mapsLabel: 'Open in Google Maps',
  },
  th: {
    label: 'Location', title: 'สถานที่', sub: 'ซ่อนตัวอยู่ในซอยเงียบ คุ้มค่ากับการมา',
    addr: '42/7 ซอยสุขุมวิท 49\nคลองตันเหนือ วัฒนา\nกรุงเทพฯ 10110',
    hours: 'เวลาเปิด-ปิด', daily: 'ทุกวัน', time: '8:00 — 18:00',
    closed: 'หยุดทุกวันพุธ',
    phone: '02-XXX-XXXX', email: 'hello@mujimoji.cafe',
    transit: 'BTS ทองหล่อ ทางออก 3 — เดิน 5 นาที',
    mapsLabel: 'เปิดใน Google Maps',
  },
}

export const instagram = {
  en: { label: 'Instagram', title: 'Follow Along' },
  th: { label: 'Instagram', title: 'ติดตามเรา' },
}

export const footer = {
  en: { tagline: 'A quiet space for slow mornings' },
  th: { tagline: 'พื้นที่เงียบสงบสำหรับเช้าวันสบายๆ' },
}
