# FindThem — Missing Persons Network

> A modern, full-featured web platform to report and search for missing persons across India.

![Made with React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat&logo=framer)
![Status](https://img.shields.io/badge/Status-Frontend_Complete-4ade80?style=flat)

---

## About the Project

Missing persons cases in India often go untracked due to lack of a centralized, accessible digital platform. **FindThem** aims to bridge that gap — giving families a place to report, search, and share cases quickly and effectively.

This project started as a learning exercise and is actively being developed into a functional MVP.

---

## Features

- **Browse Cases** — Search and filter missing persons by name, location, urgency, and status
- **Report a Case** — Multi-step form to submit detailed missing person reports with photo upload
- **Case Details** — Full profile page per case with physical description and contact options
- **Emergency Contacts** — Quick access to helplines (100, 1098, 1091) throughout the UI
- **Responsive Design** — Works on mobile, tablet, and desktop

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | CSS Variables + Inline Styles |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# Go into the folder
cd your-repo-name

# Install dependencies
npm install

# Start development server
npm run dev
```

App will run at `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with scroll effect
│   ├── MissingCard.jsx   # Case card with urgency indicators
│   └── Footer.jsx        # Footer with emergency numbers
├── pages/
│   ├── Home.jsx          # Hero, stats, urgent cases, how it works
│   ├── Browse.jsx        # Search + filter + cases grid
│   ├── Report.jsx        # 3-step report form
│   ├── CaseDetails.jsx   # Individual case full view
│   └── Contact.jsx       # Contact form + helpline info
├── data/
│   └── mockData.js       # Placeholder data (backend coming soon)
└── styles/
    └── global.css        # Design tokens + base styles
```

---

## Roadmap

- [x] Frontend — All pages built
- [x] Responsive design
- [x] Mock data integration
- [ ] Backend API (Node.js + Express)
- [ ] Database (Supabase / PostgreSQL)
- [ ] Image upload (Cloudinary)
- [ ] Admin panel for case moderation
- [ ] Email/SMS notifications
- [ ] Deploy to production

---

## Emergency Helplines

| Service | Number |
|---------|--------|
| Police | 100 |
| Child Helpline | 1098 |
| Women Helpline | 1091 |
| Senior Citizen | 14567 |

---

## Contributing

This is a learning project open to contributions. If you have ideas, find bugs, or want to help build the backend — feel free to open an issue or pull request.

---

## License

MIT License — free to use and modify.

---

*Built with purpose. Every second counts.*
