import {useEffect, useState} from 'react'

export function NotFound() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex flex-col items-center justify-center p-4">
      <div
        className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div
          className="text-[200px] md:text-[300px] font-bold text-orange-500 leading-none relative">
          <span className="animate-bounce-slow inline-block">4</span>
          <span className="animate-wiggle inline-block">0</span>
          <span className="animate-bounce-delayed inline-block">4</span>
        </div>
        
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
          <div
            className="absolute w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-60 animate-pulse"/>
          <div
            className="absolute w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-40 animate-pulse-delayed"
            style={{animation: 'pulse 4s infinite 1s'}}/>
        </div>
      </div>
      
      <div
        className={`text-center mt-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Página não encontrada
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Parece que você se perdeu! A página que você está procurando não existe ou foi movida.
        </p>
        
        <p
          className="inline-block px-6 py-3 text-white font-semibold bg-orange-500 rounded-full
                     hover:bg-orange-600 transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-orange-300/50"
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = "/";
            }
          }}
        >
          Voltar
        </p>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[20%] w-4 h-4 bg-orange-300 rounded-full animate-float"/>
        <div
          className="absolute top-40 right-[25%] w-3 h-3 bg-orange-400 rounded-full animate-float-delayed"/>
        <div
          className="absolute bottom-32 left-[35%] w-5 h-5 bg-orange-200 rounded-full animate-float-slow"/>
        <div
          className="absolute bottom-40 right-[30%] w-6 h-6 bg-orange-300 rounded-full animate-float"/>
      </div>
    </div>
  )
}

