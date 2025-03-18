
**QuickDish** is a modern, responsive food ordering web application that allows users to browse food items, add them to the cart, manage quantities, and checkout—all with a seamless and intuitive user experience.

---

## 📦 Features

- 🍽️ **Menu Display** – Browse a curated list of dishes with ratings, prices, and images.
- 🛒 **Cart Management** – Add, remove, or update quantities of items in the cart.
- 🧮 **Live Totals** – Dynamic updates for total items and pricing in the cart.
- 🗑️ **Clear Cart** – Remove all items at once with a single click.
- ⚙️ **Redux Toolkit** – Centralized and clean state management.
- 🔔 **Toast Notifications** – Real-time feedback on cart actions.

---

## 🛠️ Tech Stack Used

| Category             | Tech                                                   |
|----------------------|--------------------------------------------------------|
| Frontend             | `React.js`, `React-Bootstrap`, `CSS`                  |
| State Management     | `Redux Toolkit`, `useSelector`, `useDispatch`         |
| Notifications        | `react-hot-toast`                                     |
| Icons                | `Font Awesome`                                        |
| Tooling              | `Vite`             |

---

## 🧠 Key Concepts Implemented

- Functional Components with Hooks (`useState`, `useEffect`)
- Redux Slices for modular state logic
- Conditional Rendering (Empty cart, item count logic)
- Event Handlers (Add, remove, increment, decrement)
- Responsive Layout with Bootstrap Grid
- Accessibility (`alt` tags, `aria-label`, semantic tags)

---

## 🖼️ Screenshots



---

## 📂 Folder Structure
```
src/
├── components/
│   ├── Home.jsx
│   ├── CartDetails.jsx
│   └── CardData.js
├── redux/
│   ├── features/
│   │   └── cartSlice.js
│   └── store.js
├── styles/
│   ├── style.css
│   └── cartstyle.css
└── App.jsx
```

---

## 🧑‍💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/AishwaryaCodes/QuickDish-Food-Web-App.git

# Navigate into the project folder
cd QuickDish-Food-Web-App

# Install dependencies
npm install

# Start the development server
npm start

