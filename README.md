# Learnovia - Training and Placement Center

A modern, responsive web application for a training and placement center built with React and Tailwind CSS. This project showcases a complete implementation with seamless integration between UI and functional layers.

## 🚀 Project Overview

Learnovia is a comprehensive training and placement center website that provides information about courses, placements, company partnerships, and enables seamless user interaction through forms and navigation.
 
**Team Size**: 2 (UI Developer + Functional Layer Developer)

## 👥 Team & Contributions

### Sumpreetsing - UI Developer (Frontend)
Responsible for complete UI/UX implementation, visual design, and responsive layouts.

### Keerthi - Functional Layer Developer (Backend Integration)
Responsible for data management, component logic, form handling, and ensuring smooth functionality.

---

## 📂 Project Structure
```
TnP_website_LMS/
├── Learnovia/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/              # Image assets
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ContactPage.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── VideoCall.jsx
│   │   ├── data/                    # JSON data and constants
│   │   │   ├── courses.js
│   │   │   ├── firebase.js
│   │   │   └── placements.js
│   │   ├── pages/                   # Page components
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Placements.jsx
│   │   │   └── SecureSpotForm.jsx
│   │   ├── App.jsx                  # Main app component with routing
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # Application entry point
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
# TnP_website_LMS
This repository consist of all the development files related to learnovia website followed by LMS platform.

## Maintain the below folder structure

<pre lang="md"> ``` TnP_website_LMS/
├── website/ # Main frontend project
│ ├── Sumpreetsing/ # Pages & UI development (Intern 1)
│ ├── Keerthi/ # Form handling & deployment (Intern 2)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── App.js
│ ├── .env.example
│ ├── tailwind.config.js
│ └── package.json
├── lms/ # Placeholder for LMS module (future)
│ └── README.md
├── .gitignore
├── LICENSE
└── README.md
```
---

## 🎯 Individual Contributions

### 👨‍💻 Sumpreetsing - UI Developer

#### **Responsibilities**: Visual Design, Layout Implementation, Responsive Design, Animations

| Tasks Completed |
|----------------|
| • Set up page structure and routing using React Router<br>• Configured navigation flow and route paths |
| • Built responsive Header (Navbar) with mobile hamburger menu<br>• Implemented Footer component (desktop + mobile responsive) |
| • Built Home Page: Hero section with animations<br>• Created Services section layout<br>• Designed Testimonials section |
| • Built About Page: Mission and Vision sections<br>• Created Team layout with member profiles |
| • Built Courses Page: Card-based layout for courses<br>• Styled course cards with hover effects using CourseCard component |
| • Built Placements Page: Company logos grid<br>• Created success stories layout |
| • Built Contact Page: Form UI with Tailwind CSS using ContactPage component<br>• Styled form fields and buttons |
| • Built Login Page: Placeholder UI for future LMS<br>• Designed login form interface |
| • Made all pages fully responsive<br>• Optimized for mobile, tablet, and desktop<br>• Fixed responsive layout issues |
| • Applied polish: hover effects, animations, spacing<br>• Ensured visual consistency across all pages |

**Key Deliverables**:
- ✅ Complete UI/UX design implementation
- ✅ Responsive layouts for all devices
- ✅ Smooth animations and transitions
- ✅ Consistent visual styling with Tailwind CSS

---

### 👨‍💻 Keerthi - Functional Layer Developer

#### **Responsibilities**: Data Management, Component Logic, Form Functionality, State Management

| Tasks Completed |
|----------------|
| • Collaborated on route planning and page hierarchy<br>• Set up routing structure with UI Developer |
| • Set up dummy course and placement data (JS/constants)<br>• Created data structure in `/src/data/` folder |
| • Injected data dynamically into Courses Page<br>• Implemented data mapping and rendering logic |
| • Injected company logos/testimonials into Placements Page<br>• Managed data flow to components |
| • Prepared reusable components: CourseCard, ContactPage, VideoCall<br>• Created component props structure |
| • Implemented form logic for Contact Page (state, validation)<br>• Set up form field validation rules |
| • Integrated contact form with Formspree<br>• Handled form submission and success messages |
| • Ensured anchor links and page transitions work smoothly<br>• Fixed navigation and routing issues |
| • Assisted in responsive fixes and bug cleanup<br>• Testing and debugging across devices |
| • Final review of all user interactions<br>• Tested form submissions, links, and buttons |

**Key Deliverables**:
- ✅ Complete data structure and JSON files
- ✅ Dynamic data integration across all pages
- ✅ Form validation and submission logic
- ✅ Reusable component architecture
- ✅ Smooth page transitions and anchor links

---

## ✨ Key Features

### UI Features (Sumpreetsing)
- 🎨 Modern, clean interface with professional design
- 📱 Fully responsive across mobile, tablet, and desktop
- ✨ Smooth hover effects and micro-animations
- 🎯 Consistent visual styling with Tailwind CSS
- 🔄 Seamless page transitions
- 📐 Optimized spacing and visual hierarchy

### Functional Features (Keerthi)
- 📊 Dynamic data rendering from JSON files
- 🔄 Reusable component architecture
- 📝 Form validation with real-time feedback
- ✉️ Contact form integration with Formspree
- 🔗 Smooth anchor link navigation
- ⚡ Optimized data flow and state management

---

## 🛠️ Tech Stack

### Frontend (Sumpreetsing)
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite
- **Animations**: Tailwind + CSS

### Functional Layer (Keerthi)
- **Data Management**: JSON files in `/src/data/`
- **Form Handling**: Formspree
- **State Management**: React Hooks (useState, useEffect)
- **Component Logic**: Props and component composition
- **Video Meeting**: Video meeting integration for contact form submission

---

## 🎯 Pages Overview

| Page | UI Developer | Functional Developer | Description |
|------|-------------|---------------------|-------------|
| **Home** | Hero, Services, Testimonials layout | Dynamic testimonials data | Landing page with key highlights |
| **About** | Mission, Vision, Team layout | Team member data integration | Company information and team |
| **Courses** | Card-based course layout | Course data from JSON | Available training courses |
| **Placement** | Company logos grid, success stories | Placement data and logos | Partner companies and success stories |
| **Contact** | Form UI and styling | Form validation + Formspree | Contact form for inquiries | Communication mode |
| **Login** | Login UI placeholder | Future LMS integration ready | Placeholder for student portal |

---

## 🤝 Collaboration Workflow

### Sync Points:
1. Route structure and page hierarchy planning
2. Data structure definition and UI implementation
3. Component integration and data injection
4. Form functionality and navigation testing
5. Responsive fixes, testing, and final review
6. Communication mode, video meeting and text box

### Communication:
- Regular sync meetings for integration points
- Shared component props structure
- Coordinated data structure and UI requirements
- Joint debugging and testing sessions

---

## 📊 Contribution Summary
```
Sumpreetsing (UI Developer):
├── Complete UI/UX Implementation
├── Responsive Design System
├── Tailwind CSS Styling
├── Animations & Transitions
└── Visual Consistency

Keerthi (Functional Layer):
├── Data Architecture
├── Component Logic
├── Form Functionality
├── State Management
├── Integration Testing
└── Form Handling

```

---

## 🌟 Project Achievements

- ✅ **100% responsive** across all devices
- ✅ **Clean code architecture** with reusable components
- ✅ **Seamless collaboration** between UI and functional layers
- ✅ **Production-ready** application with polish and optimization

---

## 📧 Contact

**Sumpreetsing** - UI Developer  
**Keerthi** - Functional Layer Developer

For any queries or suggestions, feel free to reach out!

---

## 📄 License

This project is part of an internship program and is for educational purposes.

---

<div align="center">

### ⭐ Built with collaboration and dedication

**UI Excellence** 🎨 + **Functional Perfection** ⚙️ = **Learnovia** 🚀

</div>