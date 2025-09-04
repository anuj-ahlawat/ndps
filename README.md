# New Delhi Public School (NDPS) Website

A modern, responsive website for New Delhi Public School built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases the school's academic programs, facilities, and community information with a beautiful, accessible design.

## 🏫 About NDPS

New Delhi Public School is committed to providing quality education and fostering intellectual curiosity, critical thinking, and a passion for lifelong learning. Our website serves as a comprehensive platform for students, parents, and the community to access information about our programs and facilities.

## ✨ Features

### 🎓 Academic Information
- **Academic Programs**: Primary, Middle, and High School curriculum details
- **Examination Schedule**: Comprehensive exam timetables and assessment policies
- **Results**: Class 10th & 12th CBSE results showcase
- **Annual Calendar**: Key dates and events for the academic year
- **Life Skills Education**: Holistic development programs

### 🏛️ School Information
- **About Us**: School history, vision, and mission
- **Leadership**: Chairperson's and Principal's messages
- **Managing Committee**: Governance and administrative structure
- **SMC Body**: School Management Committee details
- **Faculty**: Teaching staff information

### 🏗️ Facilities
- **Smart Classes**: Technology-enhanced learning environments
- **Laboratories**: State-of-the-art science labs (Physics, Chemistry, Biology)
- **Computer Lab**: Digital literacy and programming facilities
- **Library**: Extensive collection of books and digital resources
- **Transport**: Safe and reliable transportation services
- **Excursions**: Educational trips and outdoor learning experiences

### 📋 Administrative
- **Admissions**: Application process and requirements
- **Fee Structure**: Transparent fee details for all grade levels
- **School Safety Committee**: Safety protocols and guidelines
- **Rules & Regulations**: School policies and code of conduct
- **Infrastructure**: Campus facilities and amenities

### 🎨 Interactive Features
- **Gallery**: Photo gallery showcasing school activities
- **News & Updates**: Latest school news and announcements
- **Contact Information**: Multiple ways to reach the school
- **Interactive Chat Bot**: AI-powered assistance for queries

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **AI Integration**: Genkit AI for chatbot functionality
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Email**: Nodemailer for contact forms

## 📁 Project Structure

```
ndps/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About school pages
│   │   ├── academics/         # Academic information
│   │   ├── admissions/        # Admission process
│   │   ├── facilities/        # School facilities
│   │   ├── contact/           # Contact information
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   ├── header.tsx        # Navigation header
│   │   ├── footer.tsx        # Site footer
│   │   ├── chat-bot.tsx      # AI chatbot
│   │   └── icons.tsx         # Custom icons
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── ai/                   # AI integration
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ndps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

### Available Scripts

- `npm run dev` - Start development server on port 9002
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start AI development server

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Light Blue (#E0F2FE) - Supporting elements
- **Accent**: Orange (#F59E0B) - Call-to-action elements
- **Muted**: Gray variations for text and backgrounds

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: PT Sans (sans-serif)
- **UI Elements**: Roboto (sans-serif)

### Components
The project uses a comprehensive component library built with:
- **Radix UI**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first styling
- **Custom Components**: School-specific UI elements

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuration

### Next.js Configuration
- **TypeScript**: Strict mode enabled
- **ESLint**: Code quality enforcement
- **Webpack**: Custom configuration for AI integration
- **Images**: Optimized with Next.js Image component

### Tailwind Configuration
- **Custom colors**: School brand colors
- **Custom fonts**: Typography system
- **Custom spacing**: Consistent design tokens
- **Dark mode**: Ready for future implementation

## 🤖 AI Integration

The website includes an AI-powered chatbot using Genkit:
- **Question Answering**: Responds to school-related queries
- **Natural Language Processing**: Understands user intent
- **Contextual Responses**: Provides relevant information

## 📧 Contact Forms

Contact forms are implemented with:
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **Nodemailer**: Email delivery
- **Toast notifications**: User feedback

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
- `NEXT_PUBLIC_SCHOOL_NAME`: School name for display
- `SMTP_HOST`: Email server configuration
- `SMTP_PORT`: Email server port
- `SMTP_USER`: Email authentication
- `SMTP_PASS`: Email authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for New Delhi Public School.

## 📞 Support

For technical support or questions about the website:
- **Email**: ndpsmorena@gmail.com
- **Phone**: (+91) 9997987968
- **Address**: Jarah Road, Bandha, Morena, Madhya Pradesh 476001

## 🏆 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Radix UI**: For accessible component primitives
- **School Administration**: For content and guidance

---

**Built with ❤️ for New Delhi Public School**
