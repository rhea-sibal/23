/* ═══════════════════════════════════════════
   FOR YOU, BUNNY — Interactive Script
   Card carousel, gallery, lightbox, response
   ═══════════════════════════════════════════ */

// ─── CARD DATA ───
const CARDS = [
  {
    id: 1, image: "assets/images/01-us-arms-open.png",
    act: "Her Beautiful World", location: "United States", hero: false,
    question: "Do you know what I love most about this photo?",
    note: "The way you just open your arms to the world like it\u2019s all yours. Because it kind of is. This is you on your family trip, living freely, just being yourself! ✨",
    hidden: "Her US family trip. Arms wide open, heart even wider.",
    alt: "Animated illustration of a girl with arms wide open on a sunny city sidewalk"
  },
  {
    id: 2, image: "assets/images/02-us-palm-trees.png",
    act: "Her Beautiful World", location: "United States", hero: false,
    question: "Can you feel the breeze just looking at this?",
    note: "Palm trees, good vibes, and your hair doing its thing. You always find the most beautiful spots and somehow make them even better! 🌴",
    hidden: "Somewhere warm in the US. Wind, palms, and her.",
    alt: "Animated illustration of a girl in a tropical field surrounded by palm trees"
  },
  {
    id: 3, image: "assets/images/03-us-lake.png",
    act: "Her Beautiful World", location: "United States", hero: true,
    question: "Honestly, how are you this photogenic?",
    note: "The lake, the mountains, and the trees. You really are a supermodel Bunny. One of the best clicks of you ever! 💫",
    hidden: "A lakeside moment that could be a movie poster.",
    alt: "Animated illustration of a girl by a mountain lake surrounded by tall trees"
  },
  {
    id: 4, image: "assets/images/04-us-white-house.png",
    act: "Her Beautiful World", location: "Washington D.C.", hero: false,
    question: "Do you remember how excited you were that day?",
    note: "The one infront of the White House. You really enjoyed that day and I\u2019m so happy you got to experience such a place. You cherish all the memories, and so do I! 🇺🇸",
    hidden: "Washington D.C. The White House, autumn vibes, and her biggest smile.",
    alt: "Animated illustration of a girl near the White House wearing a plaid scarf in autumn"
  },
  {
    id: 5, image: "assets/images/05-birmingham-running-trail.png",
    act: "Her Beautiful World", location: "Birmingham", hero: false,
    question: "Selfie queen, even mid-run. How do you even do that?",
    note: "You and your greenery runs. This is so you, Bunny. Cap on, earbuds in, sneaking selfies while you run somewhere in the Woods! 🌳",
    hidden: "Birmingham trails. Where the selfie queen does her thing.",
    alt: "Animated illustration of a girl taking a selfie on a tree-lined nature trail"
  },
  {
    id: 6, image: "assets/images/06-london-marathon.png",
    act: "What She\u2019s Achieved", location: "London", hero: true,
    question: "Do you remember how it felt crossing that line?",
    note: "The London Marathon. One of the biggest days of your life. You prepared for this moment for so long and you actually did it. I\u2019m so proud of you! 🏅",
    hidden: "London Marathon. She ran it. She finished it. She was incredible.",
    alt: "Animated illustration of a girl running in the London Marathon"
  },
  {
    id: 7, image: "assets/images/07-graduation.png",
    act: "What She\u2019s Achieved", location: "London", hero: true,
    question: "How does it feel to look back at this moment?",
    note: "You graduated with your Master\u2019s. All those late nights calls, endless research papers, everything you put into it. I\u2019m so proud of you, Rhea and you deserve every bit of success! 🎓",
    hidden: "Graduation day. A Master\u2019s degree, earned and completely deserved.",
    alt: "Animated illustration of a girl in graduation gown holding flowers"
  },
  {
    id: 8, image: "assets/images/08-california-research.png",
    act: "What She\u2019s Achieved", location: "California", hero: false,
    question: "Do you remember how hard you worked to get here?",
    note: "You pushed yourself to get a chance to present your research in California and you actually did it. Your hard work paid off. I was so proud of you then. I still am! 👩‍⚕️",
    hidden: "California. Presenting her PCOS research to the world.",
    alt: "Animated illustration of a girl presenting a research poster at a conference"
  },
  {
    id: 9, image: "assets/images/09-doctor-locker-room.png",
    act: "What She\u2019s Achieved", location: "Hospital", hero: false,
    question: "The world doesn\u2019t see this side, do they?",
    note: "Your stylish doctor era. Working hard, giving everything you have, but still managing to sneak in cute selfies even after the longest shifts. This is the real you! 🧸",
    hidden: "Behind the scenes. The work nobody sees but everyone benefits from.",
    alt: "Animated illustration of a young doctor resting in scrubs in a locker room"
  },
  {
    id: 10, image: "assets/images/10-doctor-selfie.png",
    act: "What She\u2019s Achieved", location: "Hospital", hero: false,
    question: "How are you this adorable in hospital scrubs?",
    note: "One of the cutest hospital selfies of you. Glasses on, that little pose. You honestly make scrubs look so cute. I love it! 🌻",
    hidden: "Doctor mode: ON. Cuteness: also very much ON.",
    alt: "Animated illustration of a young doctor taking a cheerful selfie in scrubs"
  },
  {
    id: 11, image: "assets/images/11-family-function.png",
    act: "Her Roots & Grace", location: "Birmingham", hero: false,
    question: "Do you know what makes you different from everyone else in a room?",
    note: "You always look so pretty in desi outfit. I love how you appreciate and hold back to your roots, celebrating them in your own way! ✨",
    hidden: "Birmingham. Family function, and she stole the whole show.",
    alt: "Animated illustration of a girl in a green floral lehenga in a sunlit room"
  },
  {
    id: 12, image: "assets/images/12-diwali.png",
    act: "Her Roots & Grace", location: "Birmingham", hero: true,
    question: "Lord Ganesha blessing you in the background, do you see it?",
    note: "You look so gorgeous here. Diwali celebrations, the warm golden light, and Ganesha watching over you. This photo has so much peace and beauty in it! 🕉️",
    hidden: "Diwali night. Blessings, light, and her.",
    alt: "Animated illustration of a girl in traditional dress with a Ganesha painting behind"
  },
  {
    id: 13, image: "assets/images/13-pooja-portrait.png",
    act: "Her Roots & Grace", location: "Birmingham", hero: false,
    question: "Do you know what your smile does to me?",
    note: "You look so innocent here. Dressed for Pooja, that gentle expression. Your smile brings so much calmness to my life, Bunny. I really mean that! 💐",
    hidden: "Pooja day. The smile that makes everything feel calmer.",
    alt: "Animated illustration of a girl in a lilac salwar with pink dupatta and bindi"
  },
  {
    id: 14, image: "assets/images/14-pooja-bindi.png",
    act: "Her Roots & Grace", location: "Birmingham", hero: false,
    question: "The bindi, the glow. Do you see how bright you shine?",
    note: "You look so amazing with that small bindi on your forehead. Getting ready for Pooja, golden and glowing. You shine so bright every single time! 🥹",
    hidden: "Getting ready. Bindi on, shine on, always.",
    alt: "Animated illustration of a girl in golden kurta with embroidered dupatta"
  },
  {
    id: 15, image: "assets/images/16-cambridge-night.png",
    act: "Her Roots & Grace", location: "Cambridge", hero: false,
    question: "Do you remember this quiet evening walk?",
    note: "This photo is so stunning. You\u2019re literally a supermodel, Rhea. You owned the Cambridge. Amazing at whatever you do! 🔥",
    hidden: "A quiet Cambridge evening. And she made it cinematic.",
    alt: "Animated illustration of a girl walking on a path at night with warm lights"
  },
  {
    id: 16, image: "assets/images/15-mayfair-purple-dress.png",
    act: "Our Moments", location: "London", hero: true,
    question: "Do you remember where we went for your birthday dinner?",
    note: "The sun was shining on you, that purple dress, the garden around you. We were heading to Mayfair for your birthday dinner. You looked absolutely breathtaking that evening! 💃",
    hidden: "Isabella Restaurant, Mayfair. Her birthday dinner. Unforgettable.",
    alt: "Animated illustration of a girl in a purple satin dress in a London garden"
  },
  {
    id: 17, image: "assets/images/17-masala-zone.png",
    act: "Our Moments", location: "London", hero: true,
    question: "Do you remember where we were going that night?",
    note: "This is one of my favourite photos of you, and you know that. The city lights behind you, that black dress, that look. This is us heading out together! ✨",
    hidden: "Masala Zone. And yes, this is still my favourite photo of you.",
    alt: "Animated illustration of a girl in a black dress by a window with city lights"
  },
  {
    id: 18, image: "assets/images/18-date-night.png",
    act: "Our Moments", location: "London", hero: false,
    question: "Do you know what your smile does for me on the hard days?",
    note: "Another date, another evening with you. Your smile really brings me comfort. More than you probably know! 🌹",
    hidden: "London date night. Her smile, my favourite thing in the world.",
    alt: "Animated illustration of a girl smiling by a window at night with city skyline"
  },
  {
    id: 19, image: "assets/images/19-nana-comfort.png",
    act: "Our Moments", location: "London", hero: false,
    question: "Do you remember this day?",
    note: "You lost someone you loved deeply. It was one of the hardest days. And I\u2019m really glad I was there for you. Some moments matter more than others and this was one of them! 🤍",
    hidden: "The day she needed someone. And he was there.",
    alt: "Animated illustration of a girl at home in a cozy fur jacket and beanie"
  },
  {
    id: 20, image: "assets/images/20-proposal-day.png",
    act: "Our Moments", location: "London", hero: true,
    question: "Think carefully... do you remember what happened this day?",
    note: "This is the day I asked you to be my girlfriend. You were travelling to the US the very next day. Let\u2019s see how much you remember about this moment, Bunny! 🎬",
    hidden: "The day he proposed. And she said yes. The day before she flew to the US.",
    alt: "Animated illustration of a girl laughing with a VR headset on a couch"
  },
  {
    id: 21, image: "assets/images/21-valentine-flowers.png",
    act: "Celebration", location: "London", hero: false,
    question: "You\u2019ve always loved flowers. Do you remember this day?",
    note: "Valentine\u2019s Day. You always loved flowers and you looked so amazing that day. Some things are just worth remembering! 💐",
    hidden: "Valentine\u2019s Day. Flowers for the one who deserves every petal.",
    alt: "Animated illustration of someone holding a large bouquet of red flowers"
  },
  {
    id: 22, image: "assets/images/22-birthday-surprise.png",
    act: "Celebration", location: "London", hero: true,
    question: "Do you remember how you felt when you walked in?",
    note: "I prepped this surprise for you. Balloons, roses, everything. And when you saw it, when your face lit up, that was one of the best days of my life, Bunny! 🎉",
    hidden: "The birthday surprise. Her happiness was his whole world that day.",
    alt: "Animated illustration of a girl on a bed with birthday balloons and rose petals"
  },
  {
    id: 23, image: "assets/images/23-birthday-cake.png",
    act: "Celebration", location: "London", hero: true,
    question: "What did you wish for?",
    note: "Rhea this is you last year cutting the cake. I remember everything about that day. You were so excited, so happy. If I could do it all over again, I would wish for the same thing! 🎂",
    hidden: "Cake, candles, and the girl who deserves every wish she makes.",
    alt: "Animated illustration of a girl smiling in front of a birthday cake with candles"
  }
];

const CONFIG = {
  email: "attnishit@gmail.com",
  subject: "About Your Birthday Website!",
  swipeThreshold: 0.15, // fraction of card width
  peekCards: 2,          // how many cards peek on each side
};

// ─── APP STATE ───
let activeIndex = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartTime = 0;
let dragDelta = 0;
let dragActivated = false; // true only after movement exceeds tap threshold
let lightboxIndex = 0;
let lightboxOpen = false;
let scrollLockCount = 0;

// ─── DOM REFS ───
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCardCarousel();
  initGallery();
  initLightbox();
  initResponse();
  initScrollAnimations();
  initBeginButton();
  initKeyboard();
});

// ═══════ LOADER ═══════
function initLoader() {
  const loader = $('#loader');
  // Wait for a few images to load, or a timeout
  const heroImg = new Image();
  heroImg.src = CARDS[0].image;

  const reveal = () => {
    loader.classList.add('hidden');
    // Trigger hero animation
    setTimeout(() => {
      $$('.hero .fade-in-up').forEach(el => el.classList.add('visible'));
    }, 200);
  };

  heroImg.onload = () => setTimeout(reveal, 400);
  heroImg.onerror = () => setTimeout(reveal, 400);
  // Fallback timeout
  setTimeout(reveal, 3000);
}

// ═══════ BEGIN BUTTON ═══════
function initBeginButton() {
  const btn = $('#beginBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const memories = $('#memories');
    if (memories) {
      memories.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ═══════ CARD CAROUSEL ═══════
function initCardCarousel() {
  const stack = $('#cardStack');
  if (!stack) return;

  // Render cards
  CARDS.forEach((card, i) => {
    const el = createCardElement(card, i);
    stack.appendChild(el);
  });

  // Set total
  const totalEl = $('#progressTotal');
  if (totalEl) totalEl.textContent = CARDS.length;

  // Position cards
  updateCarousel();

  // Touch / Pointer events
  stack.addEventListener('pointerdown', onDragStart, { passive: true });
  stack.addEventListener('pointermove', onDragMove, { passive: false });
  stack.addEventListener('pointerup', onDragEnd);
  stack.addEventListener('pointercancel', onDragEnd);
  stack.addEventListener('pointerleave', onDragEnd);

  // Prevent default drag on images
  stack.addEventListener('dragstart', e => e.preventDefault());

  // Navigation buttons
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => goToCard(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToCard(activeIndex + 1));
}

function createCardElement(card, index) {
  const el = document.createElement('div');
  el.className = 'memory-card';
  el.setAttribute('role', 'group');
  el.setAttribute('aria-roledescription', 'slide');
  el.setAttribute('aria-label', `Memory ${index + 1} of ${CARDS.length}`);
  el.dataset.index = index;

  el.innerHTML = `
    <div class="card-image-wrap">
      <img
        class="card-image"
        src="${card.image}"
        alt="${card.alt}"
        loading="${index < 3 ? 'eager' : 'lazy'}"
        draggable="false"
      >
      <span class="card-location">${card.location}</span>
    </div>
    <div class="card-body">
      <p class="card-question">${card.question}</p>
      <p class="card-note">${card.note}</p>
    </div>
  `;

  // Hide shimmer when image loads
  const img = el.querySelector('.card-image');
  const wrap = el.querySelector('.card-image-wrap');
  const hideShimmer = () => { wrap.style.setProperty('--shimmer-opacity', '0'); wrap.classList.add('loaded'); };
  if (img.complete) hideShimmer();
  else img.addEventListener('load', hideShimmer, { once: true });

  // Click on a neighbor card navigates to it
  el.addEventListener('click', () => {
    const cardIndex = parseInt(el.dataset.index);
    if (cardIndex !== activeIndex) {
      goToCard(cardIndex);
    }
  });

  return el;
}

function updateCarousel(dragOffset = 0) {
  const cards = $$('.memory-card');
  const stackWidth = $('#cardStack').offsetWidth;
  const cardWidth = Math.min(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-width')), stackWidth - 32);

  cards.forEach((card, i) => {
    const offset = i - activeIndex;
    const absOffset = Math.abs(offset);

    if (absOffset > CONFIG.peekCards) {
      card.style.transform = `translateX(-50%) translateX(${Math.sign(offset) * (cardWidth * 0.8)}px) scale(0.8)`;
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
      card.style.zIndex = '0';
      card.classList.remove('active');
      return;
    }

    const baseTranslateX = offset * (cardWidth * 0.18);
    const scale = 1 - absOffset * 0.06;
    const rotate = offset * 1.5;
    const opacity = 1 - absOffset * 0.3;
    const z = 10 - absOffset * 2;

    // Apply drag offset to active card and its neighbors
    let drag = 0;
    if (dragOffset !== 0) {
      // Active card follows finger, neighbors shift proportionally
      drag = dragOffset * (1 - absOffset * 0.3);
    }

    card.style.transform = `translateX(-50%) translateX(${baseTranslateX + drag}px) scale(${scale}) rotate(${rotate}deg)`;
    card.style.opacity = opacity;
    card.style.zIndex = z;

    // Active card and immediate neighbors are clickable
    if (absOffset <= 1) {
      card.style.pointerEvents = 'auto';
      card.style.cursor = offset === 0 ? 'grab' : 'pointer';
    } else {
      card.style.pointerEvents = 'none';
    }

    if (offset === 0) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Update UI
  const currentEl = $('#progressCurrent');
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');
  const actLabel = $('#actLabel');
  const progressBar = $('#progressBar');

  if (currentEl) currentEl.textContent = activeIndex + 1;
  if (prevBtn) prevBtn.disabled = activeIndex === 0;
  if (nextBtn) nextBtn.disabled = activeIndex === CARDS.length - 1;
  if (actLabel) actLabel.textContent = CARDS[activeIndex].act;
  if (progressBar) {
    const pct = ((activeIndex + 1) / CARDS.length) * 100;
    progressBar.style.width = pct + '%';
  }

  // Hide swipe hint after first interaction
  if (activeIndex > 0) {
    const hint = $('#swipeHint');
    if (hint) hint.style.display = 'none';
  }
}

function goToCard(index) {
  if (index < 0 || index >= CARDS.length) return;
  activeIndex = index;

  // Re-enable transitions
  $$('.memory-card').forEach(c => c.classList.remove('no-transition'));

  updateCarousel();
}

// ─── DRAG HANDLING ───
const TAP_THRESHOLD = 8; // pixels of movement before it counts as a drag

function onDragStart(e) {
  // Only handle primary pointer (left mouse / single touch)
  if (e.pointerType === 'mouse' && e.button !== 0) return;

  isDragging = true;
  dragActivated = false;
  dragStartX = e.clientX;
  dragStartTime = Date.now();
  dragDelta = 0;

  const stack = $('#cardStack');
  stack.classList.add('dragging');

  // Don't capture pointer yet - wait until movement exceeds tap threshold
  // This lets taps pass through to child elements normally
}

function onDragMove(e) {
  if (!isDragging) return;

  dragDelta = e.clientX - dragStartX;

  // Only activate drag mode after movement exceeds tap threshold
  if (!dragActivated) {
    if (Math.abs(dragDelta) < TAP_THRESHOLD) return;
    dragActivated = true;
    e.preventDefault();
    // Now capture pointer and disable transitions
    const stack = $('#cardStack');
    try { stack.setPointerCapture(e.pointerId); } catch {}
    $$('.memory-card').forEach(c => c.classList.add('no-transition'));
  } else {
    e.preventDefault();
  }

  updateCarousel(dragDelta);
}

function onDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;

  const stack = $('#cardStack');
  stack.classList.remove('dragging');

  // Re-enable transitions
  $$('.memory-card').forEach(c => c.classList.remove('no-transition'));

  // If drag was never activated (it was a tap), do nothing
  if (!dragActivated) {
    dragDelta = 0;
    return;
  }

  const cardWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-width'));
  const threshold = cardWidth * CONFIG.swipeThreshold;

  // Velocity-based detection: fast flicks register even if short distance
  const elapsed = Date.now() - dragStartTime;
  const velocity = Math.abs(dragDelta) / Math.max(elapsed, 1);
  const isFlick = velocity > 0.4 && Math.abs(dragDelta) > 20;

  if ((dragDelta < -threshold || (isFlick && dragDelta < 0)) && activeIndex < CARDS.length - 1) {
    activeIndex++;
  } else if ((dragDelta > threshold || (isFlick && dragDelta > 0)) && activeIndex > 0) {
    activeIndex--;
  }

  dragDelta = 0;
  dragActivated = false;
  updateCarousel();
}

// ═══════ GALLERY ═══════
function initGallery() {
  const grid = $('#galleryGrid');
  if (!grid) return;

  CARDS.forEach((card, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item' + (card.hero ? ' hero-item' : '');
    item.setAttribute('role', 'listitem');
    item.dataset.index = i;

    item.innerHTML = `
      <img
        src="${card.image}"
        alt="${card.alt}"
        loading="lazy"
        draggable="false"
      >
      <div class="gallery-item-overlay">
        <span class="gallery-item-label">${card.location}</span>
      </div>
    `;

    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
  });
}

// ═══════ LIGHTBOX ═══════
function initLightbox() {
  const lightbox = $('#lightbox');
  if (!lightbox) return;

  const overlay = lightbox.querySelector('.lightbox-overlay');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  overlay.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));

  // Touch swipe in lightbox
  let lbStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    lbStartX = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const delta = e.changedTouches[0].clientX - lbStartX;
    if (Math.abs(delta) > 60) {
      navigateLightbox(delta > 0 ? -1 : 1);
    }
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  lightboxOpen = true;

  const lightbox = $('#lightbox');
  const img = lightbox.querySelector('.lightbox-img');
  const counter = $('#lightboxCounter');

  img.src = CARDS[index].image;
  img.alt = CARDS[index].alt;
  if (counter) counter.textContent = `${index + 1} / ${CARDS.length}`;

  lightbox.hidden = false;
  lockScroll();

  // Focus trap
  lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  const lightbox = $('#lightbox');
  lightbox.hidden = true;
  lightboxOpen = false;
  unlockScroll();
}

// iOS-safe scroll lock
function lockScroll() {
  scrollLockCount++;
  if (scrollLockCount === 1) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
  }
}

function unlockScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

function navigateLightbox(dir) {
  const newIndex = lightboxIndex + dir;
  if (newIndex < 0 || newIndex >= CARDS.length) return;
  openLightbox(newIndex);
}

// ═══════ RESPONSE SECTION ═══════
function initResponse() {
  const textarea = $('#responseText');
  const sendBtn = $('#sendBtn');
  const copyBtn = $('#copyBtn');
  const quickBtns = $$('.quick-btn');

  if (!textarea || !sendBtn || !copyBtn) return;

  // Quick action buttons
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prefill = btn.dataset.prefill;
      textarea.value = prefill;
      textarea.focus();
      textarea.setSelectionRange(prefill.length, prefill.length);
      updateResponseButtons();

      // Visual feedback
      quickBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Enable/disable send buttons based on content
  textarea.addEventListener('input', updateResponseButtons);

  function updateResponseButtons() {
    const hasContent = textarea.value.trim().length > 0;
    sendBtn.disabled = !hasContent;
    copyBtn.disabled = !hasContent;
  }

  // Send button (mailto)
  sendBtn.addEventListener('click', () => {
    const body = textarea.value.trim();
    if (!body) return;

    const subject = encodeURIComponent(CONFIG.subject);
    // Encode body with proper line breaks
    const encodedBody = encodeURIComponent(body);
    const mailtoUrl = `mailto:${CONFIG.email}?subject=${subject}&body=${encodedBody}`;

    // Open mail client
    window.location.href = mailtoUrl;
  });

  // Copy button
  copyBtn.addEventListener('click', async () => {
    const body = textarea.value.trim();
    if (!body) return;

    const label = $('#copyLabel');

    try {
      await navigator.clipboard.writeText(body);
      copyBtn.classList.add('copied');
      if (label) label.textContent = 'Copied!';

      setTimeout(() => {
        copyBtn.classList.remove('copied');
        if (label) label.textContent = 'Copy Message';
      }, 2500);
    } catch {
      // Fallback: select the textarea content
      textarea.select();
      try {
        document.execCommand('copy');
        if (label) label.textContent = 'Copied!';
        setTimeout(() => {
          if (label) label.textContent = 'Copy Message';
        }, 2500);
      } catch {
        if (label) label.textContent = 'Select All & Copy manually';
        setTimeout(() => {
          if (label) label.textContent = 'Copy Message';
        }, 3000);
      }
    }
  });
}

// ═══════ KEYBOARD ═══════
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Lightbox navigation
    if (lightboxOpen) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
      return;
    }

    // Card carousel navigation (only when not typing)
    if (document.activeElement.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToCard(activeIndex - 1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToCard(activeIndex + 1);
    }
  });
}

// ═══════ SCROLL ANIMATIONS ═══════
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  // Observe fade-in elements (except hero ones which are triggered by loader)
  $$('.fade-in-up').forEach(el => {
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });

  // Gallery items with stagger
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger the animation based on visual position
          const item = entry.target;
          const rect = item.getBoundingClientRect();
          const col = Math.floor((rect.left / window.innerWidth) * 4);
          const delay = col * 80;

          setTimeout(() => {
            item.classList.add('visible');
          }, delay);

          galleryObserver.unobserve(item);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    }
  );

  $$('.gallery-item').forEach(item => {
    galleryObserver.observe(item);
  });
}
