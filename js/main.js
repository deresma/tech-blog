// ============================================================
// SECTION 1: BOOK DATA
// All books stored as an array of objects (Module 2 - Variables & Data Types)
// ============================================================

const books = [
  {
    id: 1,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    genre: "fantasy",
    year: 2015,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
    description: "A young huntress is taken to a magical land after killing a wolf in the woods. What starts as a cold captor-captive relationship turns into something far more dangerous.",
    rating: 4.8,
    reviewCount: 0,
    tags: ["love triangle", "magic", "fae world", "enemies to lovers"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 2,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "fantasy",
    year: 2007,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    description: "The riveting first-person narrative of a young man who grows up to be the most notorious wizard his world has ever seen.",
    rating: 4.9,
    reviewCount: 0,
    tags: ["magic system", "coming of age", "dark academia", "epic quest"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 3,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "romance",
    year: 2016,
    cover: "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=400&q=80",
    description: "A brave and heartbreaking novel that digs its fingers into you and doesn't let go — a story about love, loss, and the courage to start over.",
    rating: 4.7,
    reviewCount: 0,
    tags: ["love triangle", "emotional", "second chances", "heartbreaking"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 4,
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    genre: "fantasy",
    year: 2023,
    cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80",
    description: "Twenty-year-old Violet Sorrengail is pushed into the rider quadrant to bond with a dragon. But dragons are far more terrifying than any other danger she faces.",
    rating: 4.9,
    reviewCount: 0,
    tags: ["dragons", "enemies to lovers", "magic", "love triangle"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 5,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "thriller",
    year: 2012,
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
    description: "On the morning of their fifth wedding anniversary, Amy Dunne disappears. The media frenzy that follows brings dark secrets to light.",
    rating: 4.6,
    reviewCount: 0,
    tags: ["mystery", "dark twists", "unreliable narrator", "psychological"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 6,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "adventure",
    year: 2008,
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&q=80",
    description: "In a dystopian future, twelve-year-old Primrose is chosen for the Hunger Games. Her sister Katniss volunteers in her place — and nothing will ever be the same.",
    rating: 4.8,
    reviewCount: 0,
    tags: ["dystopia", "survival", "love triangle", "strong heroine"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 7,
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    genre: "fantasy",
    year: 2012,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
    description: "An assassin is offered a chance at freedom if she wins a competition to become the king's champion. But the palace hides a dark and deadly secret.",
    rating: 4.7,
    reviewCount: 0,
    tags: ["assassin", "magic", "love triangle", "strong heroine"],
    nyt: "NYT Bestseller"
  },
  {
    id: 8,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "thriller",
    year: 2019,
    cover: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&q=80",
    description: "A famous painter shoots her husband five times and then never speaks another word. A criminal psychotherapist is obsessed with uncovering her motive.",
    rating: 4.5,
    reviewCount: 0,
    tags: ["psychological", "mystery", "dark twists", "unreliable narrator"],
    nyt: "#1 NYT Bestseller"
  },
  {
    id: 9,
    title: "Beach Read",
    author: "Emily Henry",
    genre: "romance",
    year: 2020,
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description: "A romance writer and a literary fiction author swap genres for the summer — and end up swapping a lot more than that.",
    rating: 4.6,
    reviewCount: 0,
    tags: ["enemies to lovers", "second chances", "emotional", "witty"],
    nyt: "NYT Bestseller"
  }
];

// Tüm mevcut etiketler (tag selector için)
const allTags = [
  "love triangle", "magic", "fae world", "enemies to lovers",
  "magic system", "coming of age", "dark academia", "epic quest",
  "emotional", "second chances", "heartbreaking", "dragons",
  "mystery", "dark twists", "unreliable narrator", "psychological",
  "dystopia", "survival", "strong heroine", "assassin", "witty"
];

// ============================================================
// SECTION 2: STATE VARIABLES
// Track active filters and reviews (Module 2 - Variables)
// ============================================================

let activeGenre    = "all";       // Aktif tür filtresi
let selectedRating = 0;           // Yıldız puanı
let selectedTags   = [];          // Seçilen etiketler
let currentBookId  = null;        // Modal'da açık olan kitap

// Her kitabın yorumlarını tutan obje
// key: bookId, value: reviews array
let reviewsData = {};

// reviewsData'yı localStorage'dan yükle (Module 2 - Variables Ek)
function loadReviews() {
  const saved = localStorage.getItem("pageturner_reviews");
  if (saved) {
    reviewsData = JSON.parse(saved);

    // Her kitabın reviewCount'unu güncelle (Loop - Module 4)
    for (let i = 0; i < books.length; i++) {
      const bookReviews = reviewsData[books[i].id];
      if (bookReviews) {
        books[i].reviewCount = bookReviews.length;
      }
    }
  }
}

// reviewsData'yı localStorage'a kaydet
function saveReviews() {
  localStorage.setItem("pageturner_reviews", JSON.stringify(reviewsData));
}

loadReviews();

// ============================================================
// SECTION 3: RENDER BOOKS
// Create and display book cards (Module 5 - Functions)
// ============================================================

const booksGrid    = document.getElementById("booksGrid");
const emptyMessage = document.getElementById("emptyMessage");

// Yıldız HTML'i üretir (Function - Module 5)
function generateStars(rating) {
  const fullStars  = Math.floor(rating);        // Tam yıldız sayısı
  const halfStar   = rating % 1 >= 0.5;         // Yarım yıldız var mı?
  let starsHTML    = "";

  // Tam yıldızları ekle (Loop - Module 4)
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fa-solid fa-star"></i>';
  }

  // Yarım yıldız ekle (Conditional - Module 4)
  if (halfStar) {
    starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
  }

  return starsHTML;
}

// Kitap etiketlerini HTML'e çevirir
function generateTagsHTML(tags) {
  let html = "";
  for (let i = 0; i < tags.length; i++) {
    html += `<span class="book-card__tag">#${tags[i]}</span>`;
  }
  return html;
}

// Tek bir kitap kartı HTML'i üretir (Function - Module 5)
function createBookCardHTML(book) {
  const reviews     = reviewsData[book.id] || [];
  const reviewCount = reviews.length;

  return `
    <article class="book-card">
      <span class="book-card__badge">${book.nyt}</span>
      <img
        class="book-card__cover"
        src="${book.cover}"
        alt="${book.title}"
        loading="lazy"
      />
      <div class="book-card__body">
        <span class="book-card__genre">${book.genre}</span>
        <h3 class="book-card__title">${book.title}</h3>
        <p class="book-card__author">
          <i class="fa-solid fa-feather-pointed"></i> ${book.author} · ${book.year}
        </p>
        <div class="book-card__rating">
          <span class="stars">${generateStars(book.rating)}</span>
          <span class="rating-score">${book.rating}</span>
          <span class="rating-count">(NYT)</span>
        </div>
        <div class="book-card__tags">
          ${generateTagsHTML(book.tags)}
        </div>
        <div class="book-card__footer">
          <span class="book-card__reviews-count">
            <i class="fa-solid fa-comments"></i>
            ${reviewCount} review${reviewCount !== 1 ? "s" : ""}
          </span>
          <button
            class="book-card__btn"
            onclick="openModal(${book.id})"
          >
            <i class="fa-solid fa-book-open"></i> Reviews
          </button>
        </div>
      </div>
    </article>
  `;
}

// Kitap listesini ekrana basar (Function - Module 5)
function renderBooks(bookList) {
  // Boş sonuç kontrolü (Conditional - Module 4)
  if (bookList.length === 0) {
    booksGrid.innerHTML = "";
    emptyMessage.classList.remove("hidden");
    return;
  }

  emptyMessage.classList.add("hidden");

  let html = "";
  // Her kitap için kart oluştur (Loop - Module 4)
  for (let i = 0; i < bookList.length; i++) {
    html += createBookCardHTML(bookList[i]);
  }

  booksGrid.innerHTML = html;
}

// İlk yükleme
renderBooks(books);

// ============================================================
// SECTION 4: SEARCH & FILTER
// Combined search and genre filter (Module 4 - Control Flow)
// ============================================================

const searchInput = document.getElementById("searchInput");
const filterBtns  = document.querySelectorAll(".filter-btn");

function filterAndSearch() {
  // Arama terimini küçük harfe çevir (Type Casting - Module 2)
  const searchTerm = searchInput.value.toLowerCase().trim();

  const results = [];

  // Her kitabı kontrol et (Loop + Conditional - Module 4)
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    // Tür eşleşmesi (Operators - Module 3)
    const genreMatch =
      activeGenre === "all" || book.genre === activeGenre;

    // Başlık, yazar veya etiket araması
    const titleMatch  = book.title.toLowerCase().includes(searchTerm);
    const authorMatch = book.author.toLowerCase().includes(searchTerm);

    // Etiket araması (Loop içinde Loop - Module 4)
    let tagMatch = false;
    for (let j = 0; j < book.tags.length; j++) {
      if (book.tags[j].toLowerCase().includes(searchTerm)) {
        tagMatch = true;
        break;
      }
    }

    const searchMatch = titleMatch || authorMatch || tagMatch;

    // Her iki koşul sağlanıyorsa ekle (Logical Operators - Module 3)
    if (genreMatch && searchMatch) {
      results.push(book);
    }
  }

  renderBooks(results);
}

// Arama kutusuna yazınca filtrele
searchInput.addEventListener("input", function () {
  filterAndSearch();
});

// Tür filtresi butonları
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Aktif class'ı güncelle
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    // Aktif türü güncelle
    activeGenre = btn.getAttribute("data-filter");
    filterAndSearch();
  });
});

// ============================================================
// SECTION 5: MODAL – Reviews & Add Review
// Open/close modal, show reviews (Module 5 - Functions)
// ============================================================

const reviewModal   = document.getElementById("reviewModal");
const modalOverlay  = document.getElementById("modalOverlay");
const modalClose    = document.getElementById("modalClose");
const modalBookInfo = document.getElementById("modalBookInfo");
const reviewsList   = document.getElementById("reviewsList");

// Kitabı id'ye göre bul (Function - Module 5)
function findBookById(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
  return null;   // Bulunamazsa null döner (Module 6 - Errors)
}

// Modal yorum listesini render eder
function renderReviews(bookId) {
  const reviews = reviewsData[bookId] || [];

  // Hiç yorum yoksa mesaj göster (Conditional - Module 4)
  if (reviews.length === 0) {
    reviewsList.innerHTML = `
      <p style="color: var(--text-muted, #8a7a6a); text-align: center; padding: 1rem;">
        <i class="fa-solid fa-feather-pointed"></i>
        No reviews yet. Be the first to share your thoughts!
      </p>
    `;
    return;
  }

  let html = "";

  // Her yorumu kart olarak oluştur (Loop - Module 4)
  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    const stars  = generateStars(review.rating);

    // Etiketleri HTML'e çevir
    let tagsHTML = "";
    for (let j = 0; j < review.tags.length; j++) {
      tagsHTML += `<span class="review-card__tag">#${review.tags[j]}</span>`;
    }

    html += `
      <div class="review-card">
        <div class="review-card__header">
          <span class="review-card__name">
            <i class="fa-solid fa-user-pen"></i> ${review.name}
          </span>
          <span class="review-card__stars">${stars}</span>
        </div>
        ${tagsHTML ? `<div class="review-card__tags">${tagsHTML}</div>` : ""}
        <p class="review-card__text">${review.text}</p>
      </div>
    `;
  }

  reviewsList.innerHTML = html;
}

// Modal'ı aç (Function - Module 5)
function openModal(bookId) {
  const book = findBookById(bookId);

  // Kitap bulunamazsa hata (Errors - Module 6)
  if (!book) {
    console.error("Book not found with id:", bookId);
    return;
  }

  currentBookId = bookId;

  // Kitap bilgilerini modal'a yaz
  const tagsHTML = generateTagsHTML(book.tags);

  modalBookInfo.innerHTML = `
    <img src="${book.cover}" alt="${book.title}" />
    <div class="info">
      <h3>${book.title}</h3>
      <p><i class="fa-solid fa-feather-pointed"></i> ${book.author} · ${book.year}</p>
      <p>${book.description}</p>
      <div class="modal-tags">${tagsHTML}</div>
    </div>
  `;

  // Yorumları göster
  renderReviews(bookId);

  // Tag selector'ı oluştur
  buildTagSelector();

  // Gizli input'a bookId yaz
  document.getElementById("reviewBookId").value = bookId;

  // Formu sıfırla
  resetReviewForm();

  // Modal'ı göster
  reviewModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";   // Scroll'u engelle
}

// Modal'ı kapat (Function - Module 5)
function closeModal() {
  reviewModal.classList.add("hidden");
  document.body.style.overflow = "";
  currentBookId = null;
}

// Overlay ve close butonuna tıklayınca kapat
modalOverlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

// ESC tuşuna basınca kapat (User Interaction - Module 3)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// ============================================================
// SECTION 6: STAR RATING
// Interactive star rating system (Module 3 - User Interaction)
// ============================================================

const starRating = document.getElementById("starRating");
const stars      = starRating.querySelectorAll("i");

// Yıldızları belirtilen değere kadar renklendir
function highlightStars(value) {
  stars.forEach(function (star) {
    const starValue = parseInt(star.getAttribute("data-value"));

    // Conditional - Module 4
    if (starValue <= value) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

// Her yıldıza hover ve click olayları ekle (Loop - Module 4)
stars.forEach(function (star) {
  // Mouse üzerine gelince önizleme
  star.addEventListener("mouseover", function () {
    const value = parseInt(this.getAttribute("data-value"));
    highlightStars(value);
  });

  // Mouse çekilince seçili puana dön
  star.addEventListener("mouseout", function () {
    highlightStars(selectedRating);
  });

  // Tıklayınca seç
  star.addEventListener("click", function () {
    selectedRating = parseInt(this.getAttribute("data-value"));
    highlightStars(selectedRating);
  });
});

// ============================================================
// SECTION 7: TAG SELECTOR
// Build and handle content tag selection (Module 5 - Functions)
// ============================================================

function buildTagSelector() {
  const tagSelector = document.getElementById("tagSelector");
  selectedTags = [];   // Sıfırla
  let html = "";

  for (let i = 0; i < allTags.length; i++) {
    html += `
      <button
        type="button"
        class="tag-option"
        data-tag="${allTags[i]}"
        onclick="toggleTag(this)"
      >#${allTags[i]}</button>
    `;
  }

  tagSelector.innerHTML = html;
}

// Etiketi seç / kaldır (Function - Module 5)
function toggleTag(btn) {
  const tag = btn.getAttribute("data-tag");

  // Etiket seçili mi? (Conditional - Module 4)
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");

    // selectedTags'dan çıkar (Loop - Module 4)
    const newTags = [];
    for (let i = 0; i < selectedTags.length; i++) {
      if (selectedTags[i] !== tag) {
        newTags.push(selectedTags[i]);
      }
    }
    selectedTags = newTags;

  } else {
    // En fazla 5 etiket seçilebilir (Conditional - Module 4)
    if (selectedTags.length >= 5) {
      alert("You can select up to 5 tags.");
      return;
    }
    btn.classList.add("selected");
    selectedTags.push(tag);
  }
}

// ============================================================
// SECTION 8: REVIEW FORM VALIDATION & SUBMIT
// Validate and save reviews (Module 6 - Errors & Exceptions)
// ============================================================

const reviewForm        = document.getElementById("reviewForm");
const reviewerName      = document.getElementById("reviewerName");
const reviewText        = document.getElementById("reviewText");
const reviewNameError   = document.getElementById("reviewNameError");
const reviewRatingError = document.getElementById("reviewRatingError");
const reviewTextError   = document.getElementById("reviewTextError");
const reviewSuccess     = document.getElementById("reviewSuccess");

function showError(element, message) {
  element.textContent = message;
}

function clearError(element) {
  element.textContent = "";
}

function resetReviewForm() {
  reviewForm.reset();
  selectedRating = 0;
  selectedTags   = [];
  highlightStars(0);
  clearError(reviewNameError);
  clearError(reviewRatingError);
  clearError(reviewTextError);
  reviewSuccess.classList.add("hidden");
}

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Hataları temizle
  clearError(reviewNameError);
  clearError(reviewRatingError);
  clearError(reviewTextError);
  reviewSuccess.classList.add("hidden");

  // Değerleri al (String methods - Module 2)
  const nameValue = reviewerName.value.trim();
  const textValue = reviewText.value.trim();
  const bookId    = parseInt(document.getElementById("reviewBookId").value);

  let hasError = false;

  // Doğrulama (Conditional - Module 4)
  if (nameValue === "") {
    showError(reviewNameError, "Please enter your name.");
    hasError = true;
  } else if (nameValue.length < 2) {
    showError(reviewNameError, "Name must be at least 2 characters.");
    hasError = true;
  }

  if (selectedRating === 0) {
    showError(reviewRatingError, "Please select a star rating.");
    hasError = true;
  }

  if (textValue === "") {
    showError(reviewTextError, "Please write your review.");
    hasError = true;
  } else if (textValue.length < 10) {
    showError(reviewTextError, "Review must be at least 10 characters.");
    hasError = true;
  }

  // Hata yoksa kaydet (Try-Catch - Module 6)
  if (!hasError) {
    try {
      // Yeni yorum objesi oluştur (Variables & Data Types - Module 2)
      const newReview = {
        name:   nameValue,
        rating: selectedRating,
        tags:   selectedTags,
        text:   textValue,
        date:   new Date().toLocaleDateString("en-US", {
          year: "month", month: "long", day: "numeric"
        })
      };

      // reviewsData'ya ekle (Conditional - Module 4)
      if (!reviewsData[bookId]) {
        reviewsData[bookId] = [];
      }
      reviewsData[bookId].push(newReview);

      // Kitabın reviewCount'unu güncelle (Loop - Module 4)
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === bookId) {
          books[i].reviewCount = reviewsData[bookId].length;
          break;
        }
      }

      // localStorage'a kaydet
      saveReviews();

      // Yorumları yenile
      renderReviews(bookId);

      // Formu sıfırla ve başarı mesajı göster
      resetReviewForm();
      reviewSuccess.classList.remove("hidden");

      // 3 saniye sonra başarı mesajını gizle
      setTimeout(function () {
        reviewSuccess.classList.add("hidden");
      }, 3000);

      // Kart grid'ini güncelle
      filterAndSearch();

    } catch (error) {
      // Hata yönetimi (Errors - Module 6)
      console.error("Error saving review:", error);
      alert("Something went wrong. Please try again.");
    }
  }
});

// ============================================================
// SECTION 9: DARK MODE
// Save and load theme preference (Module 2 - Variables Ek)
// ============================================================

const themeToggle = document.getElementById("themeToggle");
const body        = document.body;

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("pageturner_theme");

  // Conditional - Module 4
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

themeToggle.addEventListener("click", function () {
  const isDark = body.classList.contains("dark-mode");

  if (isDark) {
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("pageturner_theme", "light");
  } else {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("pageturner_theme", "dark");
  }
});

loadSavedTheme();

// ============================================================
// SECTION 10: NAVBAR & CONTACT FORM
// Hamburger menu and contact form validation (Module 3 & 6)
// ============================================================

const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  const isOpen = navLinks.classList.contains("open");

  // Conditional - Module 4
  if (isOpen) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  } else {
    navLinks.classList.add("open");
    hamburger.classList.add("open");
  }
});

// Nav linklerine tıklayınca menüyü kapat
const navLinkItems = document.querySelectorAll(".navbar__links a");
navLinkItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// ----- Contact Form -----
const contactForm  = document.getElementById("contactForm");
const nameInput    = document.getElementById("userName");
const emailInput   = document.getElementById("userEmail");
const messageInput = document.getElementById("userMessage");
const nameError    = document.getElementById("nameError");
const emailError   = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess  = document.getElementById("formSuccess");

// E-posta doğrulama (Function - Module 5)
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  clearError(nameError);
  clearError(emailError);
  clearError(messageError);
  formSuccess.classList.add("hidden");

  const nameValue    = nameInput.value.trim();
  const emailValue   = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let hasError = false;

  // Doğrulama (Conditional - Module 4)
  if (nameValue === "") {
    showError(nameError, "Name is required.");
    hasError = true;
  } else if (nameValue.length < 2) {
    showError(nameError, "Name must be at least 2 characters.");
    hasError = true;
  }

  if (emailValue === "") {
    showError(emailError, "Email is required.");
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    showError(emailError, "Please enter a valid email address.");
    hasError = true;
  }

  if (messageValue === "") {
    showError(messageError, "Message is required.");
    hasError = true;
  } else if (messageValue.length < 10) {
    showError(messageError, "Message must be at least 10 characters.");
    hasError = true;
  }

  // Try-Catch - Module 6
  if (!hasError) {
    try {
      formSuccess.classList.remove("hidden");
      contactForm.reset();

      setTimeout(function () {
        formSuccess.classList.add("hidden");
      }, 4000);

    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    }
  }
});