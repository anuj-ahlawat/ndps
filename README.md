# New Delhi Public School (NDPS) Website

A modern, responsive website for New Delhi Public School built with Next.js 15, featuring comprehensive information about the school, academics, facilities, and administrative details.

## 🚀 Features

- **Responsive Design**: Fully responsive website that works seamlessly on all devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components
- **AI Integration**: Integrated with Google Genkit AI for chatbot functionality
- **Comprehensive Pages**:
  - About Us (Managing Committee, Chairperson's Desk, Principal's Desk, Vision & Mission)
  - Academics (Examination, Annual Calendar, Results, Life Skills)
  - Admissions & Fees
  - Facilities (Smart Classes, Laboratories, Library, Computer Lab, Transport, Excursions)
  - School Management Committee (SMC)
  - Mandatory Disclosure with downloadable documents
  - Gallery, News, and Contact pages
- **Document Management**: Easy access to school certificates and documents
- **Contact Forms**: Integrated contact and inquiry forms

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **AI**: Google Genkit AI
- **Email**: Nodemailer
- **Charts**: Recharts

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ndps
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Add your environment variables here
# For example:
# GOOGLE_AI_API_KEY=your_api_key
# EMAIL_HOST=your_email_host
# EMAIL_USER=your_email_user
# EMAIL_PASS=your_email_password
```

## 🚀 Running the Development Server

Start the development server on port 9002:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server on port 9002
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit AI with watch mode

## 📁 Project Structure

```
ndps/
├── public/
│   ├── images/          # School images and logos
│   ├── schoolFiles/     # School documents and certificates
│   └── tc/              # Transfer certificate files
├── src/
│   ├── ai/              # AI integration (Genkit)
│   │   ├── flows/       # AI flows
│   │   └── genkit.ts    # Genkit configuration
│   ├── app/             # Next.js app router pages
│   │   ├── about/       # About page
│   │   ├── academics/   # Academics pages
│   │   ├── admissions/  # Admissions page
│   │   ├── facilities/  # Facilities pages
│   │   ├── contact/     # Contact page
│   │   └── ...          # Other pages
│   ├── components/      # React components
│   │   ├── ui/          # UI components (Radix UI)
│   │   ├── header.tsx   # Header component
│   │   ├── footer.tsx   # Footer component
│   │   └── chat-bot.tsx # Chatbot component
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Key Pages

- **Home** (`/`) - Landing page with school overview
- **About** (`/about`) - About the school
- **Academics** (`/academics`) - Academic information
- **Admissions** (`/admissions`) - Admission process
- **Facilities** (`/facilities/*`) - School facilities
- **Mandatory Disclosure** (`/mandatory-disclosure`) - School documents
- **SMC Body** (`/smc-body`) - School Management Committee
- **Contact** (`/contact`) - Contact information and form

## 🔐 School Information

- **Affiliation Number**: 1030601
- **School Code**: 50570
- **Address**: Jarah Road, Bandha, Morena, Po Hetampur, Madhya Pradesh, Morena, Madhya Pradesh 476001
- **Phone**: (+91) 9997987968
- **Email**: ndpsmorena@gmail.com

## 📝 Notes

- The project uses Next.js App Router with TypeScript
- All UI components are built with Radix UI and styled with Tailwind CSS
- The website includes AI-powered chatbot functionality via Google Genkit
- School documents are stored in the `public/schoolFiles/` directory
- The project is configured to ignore TypeScript and ESLint errors during builds (for development purposes)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Authors

- New Delhi Public School Development Team

---

For more information, visit the school website or contact the administration.
