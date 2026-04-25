// ============================================================
// SECTION 1: BLOG DATA
// All articles stored as an array of objects
// ============================================================

const articles = [
  {
    id: 1,
    title: "Getting Started with JavaScript in 2025",
    excerpt: "Learn the fundamentals of JavaScript and why it remains the most popular programming language in the world.",
    category: "programming",
    author: "Alex Johnson",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80"
  },
  {
    id: 2,
    title: "Understanding AI: A Beginner's Guide",
    excerpt: "Artificial intelligence is transforming every industry. Here is what you need to know to get started.",
    category: "ai",
    author: "Sarah Chen",
    date: "Jan 22, 2025",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "Both CSS Grid and Flexbox are powerful layout tools. This guide will help you choose the right one.",
    category: "design",
    author: "Maria Lopez",
    date: "Feb 3, 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
  },
  {
    id: 4,
    title: "Top 10 VS Code Extensions for Developers",
    excerpt: "Boost your productivity with these must-have Visual Studio Code extensions every developer should install.",
    category: "tools",
    author: "James Park",
    date: "Feb 10, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
  },
  {
    id: 5,
    title: "How Machine Learning Models Actually Work",
    excerpt: "Demystifying machine learning: from training data to predictions, explained in simple terms.",
    category: "ai",
    author: "Sarah Chen",
    date: "Feb 18, 2025",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80"
  },
  {
    id: 6,
    title: "Building Responsive Layouts with SCSS",
    excerpt: "Learn how to use SCSS mixins and variables to create clean, maintainable responsive designs.",
    category: "design",
    author: "Maria Lopez",
    date: "Mar 1, 2025",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80"
  },
  {
    id: 7,
    title: "Python vs JavaScript: Which Should You Learn First?",
    excerpt: "Choosing your first programming language is a big decision. We compare Python and JavaScript head to head.",
    category: "programming",
    author: "Alex Johnson",
    date: "Mar 8, 2025",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80"
  },
  {
    id: 8,
    title: "Git & GitHub: A Complete Beginner's Guide",
    excerpt: "Version control is an essential skill for every developer. Master Git and GitHub from scratch.",
    category: "tools",
    author: "James Park",
    date: "Mar 15, 2025",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80"
  },
  {
    id: 9,
    title: "The Future of Web Design: Trends for 2025",
    excerpt: "From glassmorphism to AI-generated layouts, discover the design trends shaping the web this year.",
    category: "design",
    author: "Maria Lopez",
    date: "Mar 22, 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80"
  }
];


// ============================================================
// SECTION 2: RENDER ARTICLES
// Functions that create and display article cards
// ============================================================

// DOM elementlerini seçiyoruz
const articlesGrid   = document.getElementById("articlesGrid");
const emptyMessage   = document.getElementById("emptyMessage");

// Tek bir kart HTML'i üretir (Function – Module 5)
function createCardHTML(article) {
  return `
    <article class="card">
      <img
        class="card__image"
        src="${article.image}"
        alt="${article.title}"
        loading="lazy"
      />
      <div class="card__body">
        <span class="card__tag">${article.category}</span>
        <h3 class="card__title">${article.title}</h3>
        <p class="card__excerpt">${article.excerpt}</p>
        <div class="card__meta">
          <span class="card__author">
            <i class="fa-solid fa-user"></i> ${article.author}
          </span>
          <span class="card__date">
            <i class="fa-solid fa-calendar"></i> ${article.date}
          </span>
        </div>
      </div>
    </article>
  `;
}

// Verilen article dizisini ekrana render eder (Function – Module 5)
function renderArticles(articleList) {
  // Eğer hiç makale yoksa boş mesaj göster (Conditional – Module 4)
  if (articleList.length === 0) {
    articlesGrid.innerHTML = "";
    emptyMessage.classList.remove("hidden");
    return;
  }

  // Boş mesajı gizle
  emptyMessage.classList.add("hidden");

  // Her makale için kart oluştur ve birleştir (Loop – Module 4)
  let html = "";
  for (let i = 0; i < articleList.length; i++) {
    html += createCardHTML(articleList[i]);
  }

  articlesGrid.innerHTML = html;
}

// Sayfa ilk açıldığında tüm makaleleri göster
renderArticles(articles);

// ============================================================
// SECTION 3: SEARCH & FILTER
// Search bar and category filter buttons working together
// ============================================================

const searchInput  = document.getElementById("searchInput");
const filterBtns   = document.querySelectorAll(".filter-btn");

// Aktif kategoriyi takip eden değişken (Variables – Module 2)
let activeCategory = "all";

// Arama + Filtre mantığını birleştiren ana fonksiyon
function filterAndSearch() {
  // Arama kutusundaki metni al, küçük harfe çevir (Type Casting – Module 2)
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Her makaleyi kontrol et (Loop + Conditional – Module 4)
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    // Kategori kontrolü
    const categoryMatch =
      activeCategory === "all" || article.category === activeCategory;

    // Başlık veya özet arama terimi içeriyor mu?
    const titleMatch   = article.title.toLowerCase().includes(searchTerm);
    const excerptMatch = article.excerpt.toLowerCase().includes(searchTerm);
    const searchMatch  = titleMatch || excerptMatch;

    // Her iki koşul da sağlanıyorsa ekle (Logical Operators – Module 3)
    if (categoryMatch && searchMatch) {
      results.push(article);
    }
  }

  // Sonuçları ekrana bas
  renderArticles(results);
}

// Arama kutusuna her harf yazıldığında çalışır (Event – Module 3)
searchInput.addEventListener("input", function () {
  filterAndSearch();
});

// Kategori butonlarına tıklama olayı
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Tüm butonlardan "active" class'ını kaldır
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });

    // Tıklanan butona "active" ekle
    btn.classList.add("active");

    // Aktif kategoriyi güncelle (data-filter attribute'u oku)
    activeCategory = btn.getAttribute("data-filter");

    // Filtrele
    filterAndSearch();
  });
});


// ============================================================
// SECTION 4: DARK MODE TOGGLE
// Saves user preference to localStorage
// ============================================================

const themeToggle = document.getElementById("themeToggle");
const body        = document.body;

// Sayfa açılınca kayıtlı temayı uygula (localStorage – Module 2 Ek)
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  // Eğer daha önce dark mode seçildiyse uygula (Conditional – Module 4)
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Tema butonuna tıklanınca geçiş yap
themeToggle.addEventListener("click", function () {
  // dark-mode class'ı var mı? (Boolean – Module 2)
  const isDark = body.classList.contains("dark-mode");

  if (isDark) {
    // Açık temaya geç
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    // Koyu temaya geç
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  }
});

// Sayfa yüklenince çalıştır
loadSavedTheme();


// ============================================================
// SECTION 5: NAVBAR HAMBURGER MENU
// Mobile menu toggle with animation
// ============================================================

const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  // Menü açık mı kapalı mı kontrol et (Conditional – Module 4)
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  } else {
    navLinks.classList.add("open");
    hamburger.classList.add("open");
  }
});

// Nav linkine tıklayınca menüyü kapat (mobil için)
const navLinkItems = document.querySelectorAll(".navbar__links a");
navLinkItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// ============================================================
// SECTION 5B: CONTACT FORM VALIDATION
// Validates inputs and shows error messages (Module 3 & 6)
// ============================================================

const contactForm  = document.getElementById("contactForm");
const nameInput    = document.getElementById("userName");
const emailInput   = document.getElementById("userEmail");
const messageInput = document.getElementById("userMessage");
const nameError    = document.getElementById("nameError");
const emailError   = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess  = document.getElementById("formSuccess");

// E-posta formatını kontrol eden fonksiyon (Function + Regex – Module 5)
function isValidEmail(email) {
  // Basit e-posta kontrolü: birşey @ birşey . birşey
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Hata mesajını göster (Function – Module 5)
function showError(element, message) {
  element.textContent = message;
}

// Hata mesajını temizle
function clearError(element) {
  element.textContent = "";
}

// Form gönderildiğinde doğrulama yap (Errors & Exceptions – Module 6)
contactForm.addEventListener("submit", function (event) {
  // Sayfanın yenilenmesini engelle
  event.preventDefault();

  // Hataları sıfırla
  clearError(nameError);
  clearError(emailError);
  clearError(messageError);
  formSuccess.classList.add("hidden");

  // Değerleri al ve boşlukları temizle (String methods – Module 2)
  const nameValue    = nameInput.value.trim();
  const emailValue   = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Hata takibi için değişken (Variables – Module 2)
  let hasError = false;

  // İsim kontrolü (Conditional – Module 4)
  if (nameValue === "") {
    showError(nameError, "Name is required.");
    hasError = true;
  } else if (nameValue.length < 2) {
    showError(nameError, "Name must be at least 2 characters.");
    hasError = true;
  }

  // E-posta kontrolü
  if (emailValue === "") {
    showError(emailError, "Email is required.");
    hasError = true;
  } else if (!isValidEmail(emailValue)) {
    showError(emailError, "Please enter a valid email address.");
    hasError = true;
  }

  // Mesaj kontrolü
  if (messageValue === "") {
    showError(messageError, "Message is required.");
    hasError = true;
  } else if (messageValue.length < 10) {
    showError(messageError, "Message must be at least 10 characters.");
    hasError = true;
  }

  // Hata yoksa formu "gönder" (Try-Catch – Module 6)
  if (!hasError) {
    try {
      // Gerçek bir backend olmadığı için başarı mesajı gösteriyoruz
      formSuccess.classList.remove("hidden");
      contactForm.reset();   // Formu temizle

      // 4 saniye sonra başarı mesajını gizle
      setTimeout(function () {
        formSuccess.classList.add("hidden");
      }, 4000);

    } catch (error) {
      // Hata oluşursa kullanıcıya bildir (Errors – Module 6)
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  }
});