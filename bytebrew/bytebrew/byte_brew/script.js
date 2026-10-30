const products = [
  {
    id: 1,
    name: "Americano",
    category: "Coffee",
    price: 119,
    description: "A strong coffee made with two shots of espresso and hot water. Hot or iced.",
    badge: "BEST SELLER",
    rating: "4.9",
    image: "../americano.jpg"
  },
  {
    id: 2,
    name: "Banana Bread",
    category: "Pastries",
    price: 159,
    description: "A sweet, moist cake made with mashed bananas.",
    badge: "FAN FAVORITE",
    rating: "5.0",
    image: "../bananabread.jpg"
  },
  {
    id: 3,
    name: "Cafe Latte",
    category: "Coffee",
    price: 99,
    description: "Classic Italian coffee made with espresso and steamed milk.",
    badge: "SMALL BATCH",
    rating: "4.8",
    image: "../cafelatte.jpg"
  },
  {
    id: 4,
    name: "Cafe Mocha",
    category: "Drinks",
    price: 119,
    description: "A sweet espresso drink with steamed milk and chocolate. Combined with chocolate syrup or cocoa powder.",
    badge: "Mocha Dream",
    rating: "4.9",
    image: "../cafemocha.jpg"
  },
  {
    id: 5,
    name: "Cappuccino",
    category: "Coffee",
    price: 99,
    description: "An Italian's traditional morning coffee with espresso, steamed milk and milk foam.",
    badge: "MADE FOR SLOW DAYS",
    rating: "4.8",
    image: "../cappuccino.jpg"
  },
  {
    id: 6,
    name: "Chocolate Chip Muffin",
    category: "Pastries",
    price: 79,
    description: "A soft muffin filled with chocolate chips.",
    badge: "SWEET TREAT",
    rating: "4.9",
    image: "../chocolatechipmuffin.jpg"
  },
  {
    id: 7,
    name: "Cinnamon Roll",
    category: "Pastries",
    price: 69,
    description: "Sweet bread rolled with cinnamon and sugar.",
    badge: "BURST OF FLAVOR",
    rating: "4.9",
    image: "../cinnamonroll.jpg"
  },
  {
    id: 8,
    name: "Croissant",
    category: "Pastries",
    price: 89,
    description: "A buttery, flaky pastry with a soft inside.",
    badge: "FRESHLY ROASTED",
    rating: "5.0",
    image: "../croissant.jpg"
  },
  {
    id: 9,
    name: "Iced Americano",
    category: "Drinks",
    price: 119,
    description: "Chilled espresso and water over ice.",
    badge: "LOW CALORIE PICK",
    rating: "5.0",
    image: "../icedamericano.jpg"
  },
  {
    id: 10,
    name: "Iced Caramel Latte",
    category: "Drinks",
    price: 119,
    description: "A smooth, sweet coffee with espresso, chilled milk, caramel syrup and ice.",
    badge: "SWEET & COOL",
    rating: "5.0",
    image: "../icedcaramellatte.jpg"
  },
  {
    id: 11,
    name: "Iced Latte",
    category: "Coffee",
    price: 119,
    description: "Smooth espresso and chilled milk over ice.",
    badge: "COOL & CLASSIC",
    rating: "5.0",
    image: "../icedlatte.jpg"
  },
  {
    id: 12,
    name: "Iced Mocha",
    category: "Drinks",
    price: 119,
    description: "Chocolate and espresso poured over chilled milk.",
    badge: "CHOCOLATEY COOL",
    rating: "5.0",
    image: "../icedmocha.jpg"
  },
  {
    id: 13,
    name: "Agua Fresca",
    category: "Drinks",
    price: 129,
    description: "Refreshing mexican beverage with blended fruits, edible flowers and a splash of lime juice.",
    badge: "REFRESHING PICK",
    rating: "4.8",
    image: "../aguafresca.png"
  },
  {
    id: 14,
    name: "Apple Iced Tea",
    category: "Drinks",
    price: 99,
    description: "A simple iced tea made complicated by adding apple slices.",
    badge: "FRUITY FAVORITE",
    rating: "4.9",
    image: "../appleicedtea.png"
  },
  {
    id: 15,
    name: "Brown Sugar Boba Milk Tea",
    category: "Drinks",
    price: 99,
    description: "A sweet, smoky caramel taste with its signature tiger stripes along the cup.",
    badge: "CLASSIC FAVORITE",
    rating: "5.0",
    image: "../brownsugarbobamilktea.png"
  },
  {
    id: 16,
    name: "Lemonade",
    category: "Drinks",
    price: 99,
    description: "A bright, refreshing sip with a clean citrus sparkle.",
    badge: "SUNSHINE SIP",
    rating: "4.8",
    image: "../lemonade.png"
  },
  {
    id: 17,
    name: "Lemon Iced Tea",
    category: "Drinks",
    price: 99,
    description: "Bright lemon and chilled tea, made for sunny days.",
    badge: "CITRUSY & FRESH",
    rating: "4.9",
    image: "../lemonicedtea.png"
  },
  {
    id: 18,
    name: "Lime",
    category: "Drinks",
    price: 129,
    description: "A simple drink made from fresh lime juice, water and sugar.",
    badge: "ZESTY FAV",
    rating: "4.8",
    image: "../lime.png"
  },
  {
    id: 19,
    name: "Matcha Milk Tea",
    category: "Drinks",
    price: 129,
    description: "a finely ground, green powder made from processed green tea leaves. A traditional japanese tea with sweet syrup and boba.",
    badge: "MATCHA MOMENT",
    rating: "4.9",
    image: "../matchamilktea.png"
  },
  {
    id: 20,
    name: "Taro Milk Tea",
    category: "Drinks",
    price: 119,
    description: "A sweet creamy bubble tea, with its famous purple hue. Made with mashed taro root.",
    badge: "COZY FAVORITE",
    rating: "4.9",
    image: "../taromilktea.png"
  }
];

// DOM Elements
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const overlay = document.getElementById("overlay");
const drawer = document.getElementById("cartDrawer");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Modals
const accountModal = document.getElementById("accountModal");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");

// App State
let activeCategory = "All";
let cart = [];
let toastTimer;

// Helper: Currency Formatter
const peso = (value) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0
  }).format(value);


// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let shown = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = (p.name + " " + p.description + " " + p.category).toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (sortSelect.value === "low") shown.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") shown.sort((a, b) => b.price - a.price);

  productGrid.innerHTML = shown
    .map(
      (p) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-fallback')">
        <span class="product-badge">${p.badge}</span>
        <button class="quick-add" data-add="${p.id}" aria-label="Add ${p.name} to bag" title="Add to bag">+</button>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <h3 class="product-name">${p.name}</h3>
          <span class="product-rating">★ ${p.rating}</span>
        </div>
        <p class="product-description">${p.description}</p>
        <div class="product-bottom">
          <span class="product-price">${peso(p.price)}</span>
          <span class="product-category">${p.category}</span>
        </div>
      </div>
    </article>`
    )
    .join("");

  emptyState.hidden = shown.length > 0;
}

function renderCart() {
  const details = cartDetails();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = details.reduce((sum, item) => sum + item.lineTotal, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("drawerCount").textContent = `(${count})`;
  document.getElementById("cartSubtotal").textContent = peso(total);
  document.getElementById("checkoutTotal").textContent = peso(total);

  document.getElementById("cartItems").innerHTML = details
    .map(
      (p) => `
    <div class="cart-line">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h3>${p.name}</h3>
        <p>${peso(p.price)} each</p>
        <div class="quantity-controls">
          <button data-qty="${p.id}" data-change="-1" aria-label="Decrease quantity">−</button>
          <span>${p.quantity}</span>
          <button data-qty="${p.id}" data-change="1" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove-item" data-remove="${p.id}">Remove</button>
      </div>
      <strong class="cart-line-price">${peso(p.lineTotal)}</strong>
    </div>`
    )
    .join("");

  const isEmpty = count === 0;
  document.getElementById("cartEmpty").style.display = isEmpty ? "block" : "none";
  document.getElementById("cartSummary").style.display = isEmpty ? "none" : "block";
}


// ==========================================
// CART & TOAST ACTIONS
// ==========================================

function cartDetails() {
  return cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      lineTotal: product.price * item.quantity
    };
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function addToCart(id) {
  const item = cart.find((x) => x.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  renderCart();
  const product = products.find((p) => p.id === id);
  showToast(`${product.name} added to your bag ♡`);
}

function updateQuantity(id, change) {
  const item = cart.find((x) => x.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter((x) => x.id !== id);
  }

  renderCart();
}

function openCart() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}


// ==========================================
// EVENT LISTENERS
// ==========================================

// Cart UI
document.getElementById("cartOpen").addEventListener("click", openCart);
document.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeCart));
overlay.addEventListener("click", closeCart);

document.getElementById("continueShopping").addEventListener("click", () => {
  closeCart();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

// Product Grid delegation
productGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (btn) addToCart(Number(btn.dataset.add));
});

// Cart Items delegation
document.getElementById("cartItems").addEventListener("click", (e) => {
  const qtyBtn = e.target.closest("[data-qty]");
  const removeBtn = e.target.closest("[data-remove]");

  if (qtyBtn) {
    updateQuantity(Number(qtyBtn.dataset.qty), Number(qtyBtn.dataset.change));
  }
  if (removeBtn) {
    cart = cart.filter((x) => x.id !== Number(removeBtn.dataset.remove));
    renderCart();
  }
});

// Filtering & Sorting
document.getElementById("categoryTabs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;

  activeCategory = btn.dataset.category;
  document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.toggle("selected", tab === btn));
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

document.getElementById("searchToggle").addEventListener("click", () => {
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => searchInput.focus(), 450);
});

// Navigation Menu
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  })
);

// Global Keyboard Events
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    document.querySelectorAll("dialog[open]").forEach((d) => d.close());
  }
});

// Dialogs & Forms
document.getElementById("accountOpen")?.addEventListener("click", () => {
  if (signedInAccount) {
    showAccountProfile(signedInAccount.profile);
  } else {
    showAccountForm();
  }
  accountModal.showModal();
});

document.querySelectorAll("[data-dialog-close]").forEach((b) =>
  b.addEventListener("click", () => b.closest("dialog").close())
);

const accountForm = document.getElementById("accountForm");
const accountMessage = document.getElementById("accountMessage");
const signupFields = document.getElementById("signupFields");
const accountPassword = document.getElementById("accountPassword");
const accountStorageKey = "bytebrewAccounts";
const signedInStorageKey = "bytebrewSignedInEmail";
const accountFields = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["dateOfBirth", "Date of birth"],
  ["streetAddress", "Street address"],
  ["city", "City"],
  ["province", "Province"],
  ["postalCode", "Postal code"],
  ["country", "Country"],
  ["email", "Email"],
  ["phoneNumber", "Phone number"],
  ["username", "Preferred username"]
];
let isSigningUp = false;
let signedInAccount = null;

function updateAccountHeader(profile) {
  const accountButton = document.getElementById("accountOpen");
  if (!accountButton) return;
  const username = document.getElementById("accountUsername");
  const accountIcon = accountButton.querySelector('[aria-hidden="true"]');
  if (profile) {
    username.textContent = profile.username || profile.firstName;
    username.hidden = false;
    accountIcon.hidden = true;
    accountButton.classList.add("is-signed-in");
    accountButton.title = `Profile: ${username.textContent}`;
    accountButton.setAttribute("aria-label", `Open profile for ${username.textContent}`);
  } else {
    username.hidden = true;
    accountIcon.hidden = false;
    accountButton.classList.remove("is-signed-in");
    accountButton.title = "Account";
    accountButton.setAttribute("aria-label", "Open account");
  }
}

function showAccountForm() {
  document.getElementById("accountForm").hidden = false;
  document.getElementById("accountSwitchPrompt").hidden = false;
  accountMessage.hidden = false;
  document.getElementById("accountProfile").hidden = true;
}

function showAccountProfile(profile) {
  document.getElementById("accountForm").hidden = true;
  document.getElementById("accountSwitchPrompt").hidden = true;
  accountMessage.hidden = true;
  const profileView = document.getElementById("accountProfile");
  document.getElementById("profileHeading").textContent = `Hello, ${profile.username || profile.firstName}!`;
  const details = document.getElementById("profileDetails");
  details.replaceChildren();
  accountFields.forEach(([key, label]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const value = document.createElement("dd");
    term.textContent = label;
    value.textContent = profile[key] || "—";
    row.append(term, value);
    details.append(row);
  });
  profileView.hidden = false;
  updateAccountHeader(profile);
}

function restoreAccountSession() {
  try {
    const email = localStorage.getItem(signedInStorageKey);
    if (!email) return;
    const account = readAccounts()[email];
    if (!account?.profile) {
      localStorage.removeItem(signedInStorageKey);
      return;
    }
    signedInAccount = account;
    updateAccountHeader(account.profile);
  } catch (error) {
    console.error("Unable to restore the signed-in account.", error);
    accountMessage.textContent = error instanceof Error
      ? error.message
      : "Unable to access account storage in this browser.";
  }
}

function prefillCheckoutForm(profile) {
  if (!profile) return;
  const checkoutForm = document.getElementById("checkoutForm");
  if (!checkoutForm) return;

  const setValue = (fieldName, value) => {
    const field = checkoutForm.elements.namedItem(fieldName);
    if (field && value) field.value = value;
  };
  const address = [
    profile.streetAddress,
    profile.city,
    profile.province,
    profile.postalCode,
    profile.country
  ].filter(Boolean).join(", ");

  setValue("firstName", profile.firstName);
  setValue("lastName", profile.lastName);
  setValue("email", profile.email);
  setValue("address", address);
  setValue("phone", profile.phoneNumber);
}

function setAccountMode(signingUp) {
  isSigningUp = signingUp;
  document.getElementById("accountHeading").textContent = signingUp ? "Join the cozy crowd." : "Come on in.";
  document.getElementById("accountIntro").textContent = signingUp
    ? "Add your details to create your ByteBrew account."
    : "Sign in to keep your favorite goodies close.";
  document.getElementById("accountSubmit").textContent = signingUp ? "Create account ↗" : "Sign in ↗";
  document.getElementById("accountSwitchPrompt").firstChild.textContent =
    signingUp ? "Already have an account? " : "New to ByteBrew? ";
  document.getElementById("accountSwitchLink").textContent = signingUp ? "Sign in" : "Sign up";
  document.getElementById("accountSwitchLink").href = signingUp ? "#signin" : "#signup";
  signupFields.hidden = !signingUp;
  signupFields.querySelectorAll("input").forEach((input) => {
    input.disabled = !signingUp;
  });
  document.getElementById("confirmPasswordField").hidden = !signingUp;
  document.getElementById("confirmPassword").disabled = !signingUp;
  accountPassword.autocomplete = signingUp ? "new-password" : "current-password";
  accountMessage.textContent =
    "Demo account data is saved only in this browser. Do not use a real password.";
}

function toHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashAccountPassword(password, salt) {
  if (!window.crypto?.subtle) {
    throw new Error("Secure password storage requires opening this site on HTTPS or localhost.");
  }
  const passwordKey = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const derivedBits = await window.crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 310000, hash: "SHA-256" },
    passwordKey,
    256
  );
  return toHex(new Uint8Array(derivedBits));
}

function readAccounts() {
  const savedAccounts = localStorage.getItem(accountStorageKey);
  if (!savedAccounts) return {};
  const accounts = JSON.parse(savedAccounts);
  if (!accounts || typeof accounts !== "object" || Array.isArray(accounts)) {
    throw new Error("Saved account data is invalid. Clear this site's browser storage and try again.");
  }
  return accounts;
}

restoreAccountSession();

document.getElementById("accountSwitchLink")?.addEventListener("click", (e) => {
  e.preventDefault();
  setAccountMode(!isSigningUp);
});

accountForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(accountForm);
  const email = formData.get("email").trim().toLowerCase();
  const password = formData.get("password");

  try {
    const accounts = readAccounts();
    if (isSigningUp) {
      if (password !== formData.get("confirmPassword")) {
        accountMessage.textContent = "Those passwords do not match. Please try again.";
        return;
      }
      if (accounts[email]) {
        accountMessage.textContent = "An account with that email already exists. Sign in instead.";
        return;
      }

      const salt = window.crypto.getRandomValues(new Uint8Array(16));
      const saltHex = toHex(salt);
      const passwordHash = await hashAccountPassword(password, salt);
      const profile = Object.fromEntries(formData.entries());
      delete profile.password;
      delete profile.confirmPassword;
      accounts[email] = { salt: saltHex, passwordHash, profile };
      localStorage.setItem(accountStorageKey, JSON.stringify(accounts));
      accountMessage.textContent = `Your account is ready, ${profile.firstName}! You can now sign in with ${email}.`;
      showToast("Your ByteBrew account is ready ♡");
      accountForm.reset();
      return;
    }

    const account = accounts[email];
    if (!account) {
      accountMessage.textContent = "No account was found for that email. Please sign up first.";
      return;
    }
    const salt = Uint8Array.from(account.salt.match(/.{2}/g), (byte) => parseInt(byte, 16));
    const passwordHash = await hashAccountPassword(password, salt);
    if (passwordHash !== account.passwordHash) {
      accountMessage.textContent = "That email and password do not match. Please try again.";
      return;
    }
    localStorage.setItem(signedInStorageKey, email);
    signedInAccount = account;
    showAccountProfile(account.profile);
    showToast("Welcome back to ByteBrew ♡");
  } catch (error) {
    console.error("Unable to complete the account action.", error);
    accountMessage.textContent = error instanceof Error
      ? error.message
      : "Unable to access account storage in this browser.";
  }
});

document.getElementById("accountSignOut")?.addEventListener("click", () => {
  try {
    localStorage.removeItem(signedInStorageKey);
    signedInAccount = null;
    updateAccountHeader(null);
    setAccountMode(false);
    accountForm.reset();
    showAccountForm();
    accountMessage.textContent = "You have signed out.";
  } catch (error) {
    console.error("Unable to sign out of the account.", error);
    accountMessage.textContent = error instanceof Error
      ? error.message
      : "Unable to sign out in this browser.";
  }
});

document.getElementById("checkoutOpen").addEventListener("click", () => {
  if (!cart.length) return;
  closeCart();
  prefillCheckoutForm(signedInAccount?.profile);
  checkoutModal.showModal();
});

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!cart.length) {
    checkoutModal.close();
    showToast("Your bag is empty.");
    return;
  }

  const data = new FormData(e.currentTarget);
  const name = String(data.get("firstName") || "friend").trim();
  const orderNumber = "BB" + Math.random().toString(36).slice(2, 7).toUpperCase();
  const orderTotal = cart.reduce((s, x) => s + products.find((p) => p.id === x.id).price * x.quantity, 0);

  document.getElementById("successMessage").textContent = `Thank you, ${name}! Your demo order ${orderNumber} for ${peso(
    orderTotal
  )} has been recorded in this page session. No payment was taken.`;

  checkoutModal.close();
  successModal.showModal();
  cart = [];
  renderCart();
  e.currentTarget.reset();
});

document.getElementById("successClose").addEventListener("click", () => {
  successModal.close();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("newsletterMessage").textContent =
    "You're on the list! Check your inbox for a little love. ♡";
  e.currentTarget.reset();
});


// ==========================================
// INITIALIZATION
// ==========================================
renderProducts();
renderCart();