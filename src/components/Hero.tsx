'use client';

import { motion } from 'framer-motion';
import TronPrice from './TronPrice';
import { TelegramIcon, RocketIcon, ZapIcon, UserMultipleIcon, BitcoinShieldIcon, ChartIcon } from './icons/PriceIcons';

const Hero = () => {
  const features = [
    {
      icon: BitcoinShieldIcon,
      title: 'امنیت بالا',
      description: 'با استفاده از بهترین تکنولوژی‌های امنیتی'
    },
    {
      icon: ZapIcon,
      title: 'سرعت بالا',
      description: 'معاملات آنی با سرعت فوق‌العاده'
    },
    {
      icon: ChartIcon,
      title: 'قیمت بهینه',
      description: 'بهترین نرخ ترون در بازار'
    },
    {
      icon: UserMultipleIcon,
      title: 'دسترسی آسان',
      description: 'مستقیماً از تلگرام'
    }
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 flex flex-col justify-start overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-400 to-red-300 rounded-full opacity-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-300 to-red-200 rounded-full opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8 sm:mb-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right pt-4 sm:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                <RocketIcon className="text-red-800" size={16} />
                پیشرفته‌ترین صرافی خرید و فروش ترون
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-black sm:font-bold text-gray-900 mb-6 leading-tight tracking-tight"
            >
              <span className="inline bg-gradient-to-r from-red-800 to-red-700 bg-clip-text text-transparent">
                ترون‌فای؛‌ ‌ 
              </span>
               مینی اپ صرافی در تلگرام
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              با ترون‌فای، معاملات ترون را مستقیماً در تلگرام تجربه کنید. 
              امنیت، سرعت و سهولت در یک مینی اپ پیشرفته.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-red-800 to-red-700 text-white rounded-lg font-semibold text-sm sm:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <TelegramIcon className="text-white" size={20} />
                ورود به مینی اپ تلگرام
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-8 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm sm:text-lg hover:border-red-800 hover:text-red-800 transition-all duration-300"
              >
                <span className="hidden sm:inline">نصب اپلیکیشن</span>
                <span className="sm:hidden">اپلیکیشن</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">+ هفت هزار</div>
                <div className="text-xs sm:text-sm text-gray-600">کاربر فعال</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">+ ده میلیارد ریال</div>
                <div className="text-xs sm:text-sm text-gray-600">حجم معاملات ترون</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-600">رضایت کاربران</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-800 to-red-700 rounded-3xl p-4 shadow-2xl">
              <TronPrice />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                index === 0 || index === 3 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-800 to-red-700 rounded-lg flex items-center justify-center mb-4">
                {<feature.icon className="w-6 h-6 text-white" />}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 