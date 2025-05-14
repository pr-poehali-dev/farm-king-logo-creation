
import React from "react";

interface LogoProps {
  size?: "small" | "medium" | "large";
  variant?: "default" | "withText";
}

const Logo = ({ size = "medium", variant = "default" }: LogoProps) => {
  // Определяем размеры в зависимости от выбранного параметра
  const dimensions = {
    small: {
      container: "w-10 h-10",
      innerCircle: "w-6 h-6",
      icon: "w-3 h-3",
      border: "border-2",
      textContainer: "ml-2",
      title: "text-base font-bold",
      subtitle: "text-xs -mt-1"
    },
    medium: {
      container: "w-16 h-16",
      innerCircle: "w-10 h-10",
      icon: "w-5 h-5",
      border: "border-3",
      textContainer: "ml-3",
      title: "text-xl font-bold",
      subtitle: "text-xs -mt-1"
    },
    large: {
      container: "w-24 h-24",
      innerCircle: "w-16 h-16",
      icon: "w-8 h-8",
      border: "border-4",
      textContainer: "ml-4",
      title: "text-2xl font-bold",
      subtitle: "text-sm -mt-1"
    }
  };

  const dim = dimensions[size];
  
  return (
    <div className="flex items-center">
      {/* Графическая часть логотипа */}
      <div className={`${dim.container} relative flex items-center justify-center`}>
        {/* Основной круг */}
        <div className={`${dim.container} bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-full absolute`}></div>
        
        {/* Золотой круг */}
        <div className={`${dim.innerCircle} bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-full absolute`}></div>
        
        {/* Иконка пшеницы */}
        <svg 
          className={`${dim.icon} absolute text-white z-10`} 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12,6c-0.3,0-0.5-0.2-0.5-0.5V3c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2.5C12.5,5.8,12.3,6,12,6z"/>
          <path d="M10,5.5C9.7,5.5,9.5,5.3,9.5,5V2.5C9.5,2.2,9.7,2,10,2s0.5,0.2,0.5,0.5V5C10.5,5.3,10.3,5.5,10,5.5z"/>
          <path d="M14,5.5c-0.3,0-0.5-0.2-0.5-0.5V2.5C13.5,2.2,13.7,2,14,2s0.5,0.2,0.5,0.5V5C14.5,5.3,14.3,5.5,14,5.5z"/>
          <path d="M16,7c-0.3,0-0.5-0.2-0.5-0.5V4c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2.5C16.5,6.8,16.3,7,16,7z"/>
          <path d="M8,7C7.7,7,7.5,6.8,7.5,6.5V4c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v2.5C8.5,6.8,8.3,7,8,7z"/>
          <path d="M12,22c-0.3,0-0.5-0.2-0.5-0.5v-15C11.5,6.2,11.7,6,12,6s0.5,0.2,0.5,0.5v15C12.5,21.8,12.3,22,12,22z"/>
          <path d="M12,22c-3.9,0-7-1.3-7-3v-3c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v3c0,1,2.5,2,6,2s6-1,6-2v-3c0-0.3,0.2-0.5,0.5-0.5
            s0.5,0.2,0.5,0.5v3C19,20.7,15.9,22,12,22z"/>
          <path d="M12,19c-3.9,0-7-1.3-7-3v-3c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v3c0,1,2.5,2,6,2s6-1,6-2v-3c0-0.3,0.2-0.5,0.5-0.5
            s0.5,0.2,0.5,0.5v3C19,17.7,15.9,19,12,19z"/>
          <path d="M12,16c-3.9,0-7-1.3-7-3v-3c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v3c0,1,2.5,2,6,2s6-1,6-2v-3c0-0.3,0.2-0.5,0.5-0.5
            s0.5,0.2,0.5,0.5v3C19,14.7,15.9,16,12,16z"/>
        </svg>
        
        {/* Пунктирный круг */}
        <div className={`${dim.container} ${dim.border} border-[#1A237E] rounded-full absolute border-dashed animate-[spin_20s_linear_infinite]`}></div>
        
        {/* Глобус */}
        <div className={`${dim.container} absolute opacity-10`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1A237E]">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.6001 9H20.4001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.6001 15H20.4001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3C14.5013 5.12303 15.9228 8.46745 16.0008 12C15.9228 15.5325 14.5013 18.877 12 21C9.49872 18.877 8.07725 15.5325 7.99917 12C8.07725 8.46745 9.49872 5.12303 12 3Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Текстовая часть логотипа */}
      {variant === "withText" && (
        <div className={`${dim.textContainer} font-montserrat`}>
          <h1 className={`${dim.title} text-[#1A237E]`}>
            Farm<span className="text-[#4CAF50]">King</span>
          </h1>
          <p className={`${dim.subtitle} text-gray-600`}>localization</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
