# MedAI - Traust du mir?

A Next.js web application that demonstrates AI-powered medical diagnosis capabilities using OpenAI's GPT-4o-mini model. This is an educational demonstration showcasing the potential and limitations of AI in healthcare communication.

## 🎯 Features

- **Dual Mode Operation**: Acute diagnosis and chronic management tips
- **OpenAI Integration**: Uses GPT-4o-mini with custom medical reasoning prompts
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Research-Style Info Page**: Educational content about AI in healthcare
- **German Language Support**: All content and diagnoses in German

## 🏗️ Tech Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Zustand with localStorage persistence
- **AI Integration**: OpenAI API with custom prompts
- **Validation**: Zod for input validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/medai-app.git
   cd medai-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

1. **Select Mode**: Choose between "Diagnose" (acute) or "Langzeitmanagement" (chronic)
2. **Enter Patient Data**: Age, sex, and symptoms/diagnosis
3. **Submit**: Get AI-generated medical analysis
4. **Review Results**: View diagnosis, probabilities, and recommendations
5. **Explore Info Page**: Learn about AI limitations in healthcare

## 🔧 API Endpoints

- `POST /api/analyze` - Main analysis endpoint
- `GET /api/test` - OpenAI connection test

## ⚠️ Important Disclaimer

This application is for **educational and demonstration purposes only**. It should **never be used for actual medical diagnosis or treatment**. Always consult qualified healthcare professionals for medical advice.

## 🎨 Design Features

- **Consistent Red Theme**: Matches medical urgency and attention
- **Mobile-First**: Responsive design with mobile-optimized layouts
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Professional Typography**: Inter font for clean, readable text

## 📁 Project Structure

```
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── info/              # Info page
│   └── page.tsx           # Main page
├── src/
│   ├── components/        # React components
│   ├── lib/              # Utilities and API helpers
│   └── store/            # Zustand state management
├── public/               # Static assets
└── ...config files
```

## 🚀 Deployment

This app is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

Make sure to set your `OPENAI_API_KEY` environment variable in your deployment platform.

## 📄 License

This project is for educational purposes. Please ensure compliance with OpenAI's usage policies and medical regulations in your jurisdiction.

## 🤝 Contributing

This is a demonstration project. For educational purposes only.

---

**Remember**: This is not a real medical application. Always consult healthcare professionals for medical advice.
