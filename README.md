
# 🏫 New Delhi Public School (NDPS) — Morena

> **Empowering young minds. Building tomorrow's leaders.**

Welcome to the official website repository of **New Delhi Public School, Morena** — a premier CBSE-affiliated institution in Madhya Pradesh committed to academic excellence, holistic development, and character building.

---

## 🏛️ About the School

**New Delhi Public School (NDPS), Morena** is a reputed educational institution located in Morena, Madhya Pradesh. Founded on the principles of academic excellence and value-based education, NDPS has been a beacon of quality learning for the students of Morena and surrounding regions.

The school provides education from the primary to the senior secondary level under the **Central Board of Secondary Education (CBSE)** framework, ensuring a nationally recognised and standardised curriculum.

### 📍 Location
Jarah Road, Bandha, Morena, Po Hetampur,
Madhya Pradesh — 476001, India

### 📞 Contact

| Type | Details |
|------|---------|
| 📱 Phone | (+91) 9997987968 |
| 📧 Email | ndpsmorena@gmail.com |

---

## 🎓 Recognition & Affiliation

| Detail | Value |
|--------|-------|
| Affiliated Board | **CBSE** (Central Board of Secondary Education) |
| Affiliation Number | **1030601** |
| School Code | **50570** |
| Recognized by | Directorate of Education, Govt. of Madhya Pradesh |

NDPS Morena holds all mandatory certifications including:
- ✅ Society Registration Certificate
- ✅ No Objection Certificate (NOC) from State Government
- ✅ CBSE Affiliation / Self Declaration Letter
- ✅ Building Safety Certificate (National Building Code)
- ✅ Fire Safety Certificate
- ✅ Water Safety Certificate
- ✅ Health & Land Certificates
- ✅ DEO Recognition Certificate
- ✅ RTE Act Recognition Certificate
- ✅ Parents Teacher Association Document
- ✅ Anapati Certificate

---

## 🌟 Vision & Mission

### Our Vision
> *To be a leading educational institution that empowers every student to become a critical thinker, a lifelong learner, and a compassionate leader in a global community.*

### Our Mission
- 🏫 Provide a **safe, inclusive, and intellectually stimulating** learning environment
- 📚 Deliver a **comprehensive and balanced curriculum** fostering academic excellence and holistic development
- 💡 Cultivate **essential life skills** — creativity, collaboration, and resilience
- 🤝 Instil core values of **integrity, respect, and social responsibility**

### Our Core Values

| Value | Description |
|-------|-------------|
| ⚡ Excellence | Striving for the highest standards in all endeavours |
| 🛡️ Integrity | Upholding honesty, ethics, and moral principles |
| 🤝 Respect | Fostering a culture of mutual respect and inclusivity |
| 🌏 Global Citizenship | Nurturing responsible and compassionate global citizens |

---

## 👥 School at a Glance

| Metric | Value |
|--------|-------|
| 👨‍🎓 Students Enrolled | 1200+ |
| 👩‍🏫 Dedicated Teachers | 75+ |
| 📐 Student-Teacher Ratio | 16:1 |

---

## 🏗️ Facilities & Infrastructure

- 🖥️ **Smart Classes** — Technology-enabled interactive classrooms
- 🔬 **Science Laboratories** — Fully equipped Physics, Chemistry & Biology labs
- 📚 **Library** — Extensive collection of books and learning resources
- 💻 **Computer Lab** — Modern computer infrastructure with internet access
- 🚌 **Transport** — Safe and reliable school transport service
- 🎨 **Co-curricular Activities** — Arts, Music, Sports, and Cultural activities
- 🛡️ **School Safety Committee** — Dedicated committee ensuring student well-being

---

## 📚 Academic Offerings

- **Curriculum**: CBSE (Central Board of Secondary Education)
- **Academic Calendar**: Structured annual calendar with regular assessments
- **Examination System**: Comprehensive examination and evaluation system
- **Life Skills Program**: Dedicated life skills curriculum
- **Co-scholastic Activities**: Sports, arts, music, and extracurricular programs
- **Transfer Certificate**: Streamlined TC issuance process

---

## 🖥️ Website Features

The NDPS Morena website is a modern, responsive web application that provides:

- 🏠 **Home** — School overview, news, and highlights
- 👤 **About** — School history, managing committee, leadership messages
  - Chairperson's Desk
  - Principal's Desk
  - Managing Committee
- 📖 **Academics** — Examination info, annual calendar, results, life skills
- 🎓 **Admissions & Fees** — Admission process and fee structure
- 🏛️ **Facilities** — Smart classes, labs, library, computer lab, transport, excursions
- 📋 **Mandatory Disclosure** — All official documents and certificates
- 🏛️ **SMC Body** — School Management Committee details
- 🖼️ **Gallery** — School events and activities photos
- 📰 **News** — Latest news and announcements
- 📞 **Contact** — Contact form and interactive school location map
- 🤖 **AI Chatbot** — AI-powered assistant to answer school-related queries

---

## 🛠️ Tech Stack

| Technology | Details |
|------------|---------|
| **Framework** | Next.js 15.5.x (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4.x |
| **UI Components** | Radix UI |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod validation |
| **AI Chatbot** | Google Genkit AI |
| **Email** | Nodemailer |
| **Charts** | Recharts |

---

## 📁 Project Structure

```
ndps/
├── public/
│   ├── images/           # School images and logos
│   ├── schoolFiles/      # Official school documents & certificates
│   └── tc/               # Transfer certificate files
├── src/
│   ├── ai/               # AI integration (Google Genkit)
│   │   ├── flows/        # AI conversation flows
│   │   └── genkit.ts     # Genkit configuration
│   ├── app/              # Next.js App Router pages
│   │   ├── about/
│   │   ├── academics/
│   │   ├── admissions/
│   │   ├── chairpersons-desk/
│   │   ├── co-scholastic-activities/
│   │   ├── contact/
│   │   ├── examination/
│   │   ├── faculty/
│   │   ├── fees/
│   │   ├── gallery/
│   │   ├── life-skills/
│   │   ├── mandatory-disclosure/
│   │   ├── managing-committee/
│   │   ├── news/
│   │   ├── principals-desk/
│   │   ├── recognition/
│   │   ├── results/
│   │   ├── rules/
│   │   ├── school-safety-committee/
│   │   ├── smc-body/
│   │   ├── transfer-certificate/
│   │   └── vision-mission/
│   ├── components/       # Reusable React components
│   │   ├── ui/           # Radix UI base components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── chat-bot.tsx
│   ├── data/             # Static data and content
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/anuj-ahlawat/ndps.git
cd ndps
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:
```env
GOOGLE_AI_API_KEY=your_google_ai_api_key
EMAIL_HOST=your_email_host
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
```

4. **Start the development server:**
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 9002 |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run genkit:dev` | Start Genkit AI development server |
| `npm run genkit:watch` | Start Genkit AI with watch mode |

---

## 📄 License

This project is **private and proprietary**. All rights reserved by New Delhi Public School, Morena.

---

## 👥 Authors

- **NDPS Morena Development Team**

---

*For more information, contact the school administration at **ndpsmorena@gmail.com***