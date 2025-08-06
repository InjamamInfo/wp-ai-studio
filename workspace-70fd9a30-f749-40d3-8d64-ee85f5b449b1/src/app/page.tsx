export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            WordPress AI Theme Generator
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Create production-ready WordPress themes with AI-powered workflows
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Welcome to Your Project
          </h2>
          <p className="text-slate-600 mb-6">
            This is a Next.js application deployed on Netlify. The application is working correctly!
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-lg font-semibold text-green-800">Deployment Successful</h3>
            </div>
            <p className="text-green-700">
              Your WordPress AI Theme Generator is now live and ready to use!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">🤖 AI-Powered</h3>
              <p className="text-slate-600 text-sm">Generate complete WordPress themes with AI assistance</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">⚡ Fast & Efficient</h3>
              <p className="text-slate-600 text-sm">Built with Next.js 15 and optimized for performance</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">🎨 Modern Design</h3>
              <p className="text-slate-600 text-sm">Beautiful UI with Tailwind CSS and responsive design</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}