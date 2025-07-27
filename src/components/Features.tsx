'use client';

import { motion } from 'framer-motion';
import { 
  BitcoinShieldIcon,
  PoolIcon,
  BitcoinWalletIcon,
  TradeIcon,
  VerifyIcon,
  SupportIcon,
  FuturesIcon,
  SparklesIcon
} from './icons/NewFeatureIcons';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const features = [
    {
      icon: BitcoinShieldIcon,
      title: "سپرهای امنیتی مدرن",
      description: "تیم امنیتی پیشرفته ترون‌فای با ابزارهای مدرن، برای حفظ امنیت دارایی شما.",
      bgColor: "bg-white",
      iconBg: "bg-gradient-to-r from-red-800 to-red-700",
      iconColor: "text-white",
      textColor: "text-gray-900",
      descColor: "text-gray-600",
      isWide: false
    },
    {
      icon: PoolIcon,
      title: "عمق بازار و حجم معاملات بالا",
      description: "با بیش از ۷ هزار کاربر فعال، معامله ترون خود را در سریع‌ترین زمان ممکن انجام دهید.",
      bgColor: "bg-[#212121]",
      iconBg: "bg-[#F6F6F6]",
      iconColor: "text-red-800",
      textColor: "text-white",
      descColor: "text-gray-400",
      isWide: true
    },
    {
      icon: BitcoinWalletIcon,
      title: "کیف‌پول اختصاصی",
      description: "دارایی‌های ترون شما در کیف‌پول اختصاصی به صورت سرد نگه‌داری می‌شود.",
      bgColor: "bg-white",
      iconBg: "bg-gradient-to-r from-red-800 to-red-700",
      iconColor: "text-white",
      textColor: "text-gray-900",
      descColor: "text-gray-600",
      isWide: true
    },
    {
      icon: TradeIcon,
      title: "معاملات ترون",
      description: "معامله‌ی ترون با بهترین قیمت‌ها و کمترین کارمزد، برای تمام معامله‌گران.",
      bgColor: "bg-white",
      iconBg: "bg-gradient-to-r from-red-800 to-red-700",
      iconColor: "text-white",
      textColor: "text-gray-900",
      descColor: "text-gray-600",
      isWide: false
    },
    {
      icon: VerifyIcon,
      title: "احراز هویت سریع",
      description: "در صرافی ترون‌فای، در کمتر از پنج دقیقه ثبت نام و معامله ترون را آغاز کنید.",
      bgColor: "bg-gradient-to-r from-red-800 to-red-700",
      iconBg: "bg-[#F6F6F6]",
      iconColor: "text-[#212121]",
      textColor: "text-white",
      descColor: "text-gray-100",
      isWide: false
    },
    {
      icon: SupportIcon,
      title: "پشتیبانی حرفه‌ای",
      description: "پشتیبانی حرفه‌ای و ۲۴ ساعته‌ی آنلاین و تلفنی ترون‌فای، همیشه در دسترس شما.",
      bgColor: "bg-white",
      iconBg: "bg-gradient-to-r from-red-800 to-red-700",
      iconColor: "text-white",
      textColor: "text-gray-900",
      descColor: "text-gray-600",
      isWide: false
    },
    {
      icon: FuturesIcon,
      title: "امکانات پیشرفته",
      description: "حد سود و ضرر، هشدار قیمت و نمودارهای تحلیلی برای معاملات بهتر.",
      bgColor: "bg-white",
      iconBg: "bg-gradient-to-r from-red-800 to-red-700",
      iconColor: "text-white",
      textColor: "text-gray-900",
      descColor: "text-gray-600",
      isWide: false
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4 sm:mb-6"
          >
            <SparklesIcon className="text-red-800" size={16} />
            ویژگی‌های منحصر به فرد
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6"
          >
            چرا <span className="bg-gradient-to-r from-red-800 to-red-700 bg-clip-text text-transparent">ترون‌فای</span>؟
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            ترون‌فای با ترکیب تکنولوژی پیشرفته و تجربه کاربری عالی، 
            بهترین پلتفرم برای معاملات ترون را ارائه می‌دهد.
          </motion.p>
        </motion.div>

        {/* Desktop Features Grid */}
        <div className="hidden lg:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Row 1: 1 small + 1 wide */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BitcoinShieldIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">سپرهای امنیتی مدرن</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">تیم امنیتی پیشرفته ترون‌فای با ابزارهای مدرن، برای حفظ امنیت دارایی شما.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#212121] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 col-span-2 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-[#F6F6F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <PoolIcon className="w-6 h-6 text-red-800" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">عمق بازار و حجم معاملات بالا</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">با بیش از ۷ هزار کاربر فعال، معامله ترون خود را در سریع‌ترین زمان ممکن انجام دهید. حجم معاملات بالا و نقدشوندگی عالی ترون، امکان انجام معاملات با هر حجمی را فراهم می‌کند.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: 1 wide + 1 small */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 col-span-2 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BitcoinWalletIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">کیف‌پول اختصاصی</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">دارایی‌های ترون شما در کیف‌پول اختصاصی به صورت سرد نگه‌داری می‌شود و دربرابر حمله‌های مختلف امنیت دارد. سیستم نگهداری سرد، دارایی‌های شما را از خطرات آنلاین محافظت می‌کند.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TradeIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">معاملات ترون</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">معامله‌ی ترون با بهترین قیمت‌ها و کمترین کارمزد، برای تمام معامله‌گران.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: 3 equal cards */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-r from-red-800 to-red-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-[#F6F6F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <VerifyIcon className="w-6 h-6 text-[#212121]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">احراز هویت سریع</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">در صرافی ترون‌فای، در کمتر از پنج دقیقه ثبت نام و معامله ترون را آغاز کنید.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SupportIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">پشتیبانی حرفه‌ای</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">پشتیبانی حرفه‌ای و ۲۴ ساعته‌ی آنلاین و تلفنی ترون‌فای، همیشه در دسترس شما.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-32"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FuturesIcon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">امکانات پیشرفته</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">حد سود و ضرر، هشدار قیمت و نمودارهای تحلیلی برای معاملات بهتر.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Features - Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute top-[calc(50%-0.7rem)] left-4 transform -translate-y-1/2 z-10">
              <motion.div 
                animate={{ 
                  x: [0, 8, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-10 h-10 bg-gradient-to-r from-red-800 to-red-700 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.div>
            </div>
            
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-4 pb-8" style={{ width: 'max-content' }}>
                {/* Group cards in pairs */}
                {Array.from({ length: Math.ceil(features.length / 2) }, (_, groupIndex) => (
                  <div key={groupIndex} className="flex flex-col gap-4 w-[calc(100vw-32px)] flex-shrink-0">
                    {features.slice(groupIndex * 2, groupIndex * 2 + 2).map((feature, index) => {
                      const IconComponent = feature.icon;
                      const actualIndex = groupIndex * 2 + index;
                      return (
                        <motion.div
                          key={actualIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: actualIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`${feature.bgColor} rounded-2xl p-4 shadow-lg border border-gray-100 h-32`}
                        >
                          <div className="flex items-start gap-3 h-full">
                            <div className={`w-10 h-10 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className={`w-5 h-5 ${feature.iconColor}`} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className={`text-base font-bold ${feature.textColor} mb-2 leading-tight`}>
                                {feature.title}
                              </h3>
                              <p className={`${feature.descColor} text-xs leading-relaxed line-clamp-3`}>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 