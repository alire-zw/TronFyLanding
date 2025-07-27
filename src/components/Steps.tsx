'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'ثبت نام و احراز در کمتر از 1 دقیقه',
      description: 'پس از ثبت نام با ایمیل و یا شماره موبایل میتوانید با استفاده از کد ملی و مالکیت شماره موبایل از احراز سریع استفاده و به صورت خودکار احراز شوید.',
      image: '/pics/step-1.webp'
    },
    {
      title: 'انتخاب نوع معامله',
      description: 'خرید یا فروش ترون را انتخاب کرده و مقدار مورد نظر را وارد کنید',
      image: '/pics/step-2.webp'
    },
    {
      title: 'واریز وجه',
      description: 'مبلغ را به شماره کارت یا کیف پول اعلام شده واریز کنید',
      image: '/pics/step-3.webp'
    },
    {
      title: 'تکمیل معامله',
      description: 'پس از تایید واریز، ترون به کیف پول شما واریز می‌شود',
      image: '/pics/step-4.webp'
    }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#1a1a1a] flex items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4"
          >
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                مراحل خرید ارز دیجیتال در ترون‌فای
              </h2>
              <div className="h-[120px] md:h-[160px] relative">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </div>
              <div className="flex items-center justify-center gap-2 md:gap-3 pt-2 md:pt-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && (
                      <div className="flex items-center ml-2 md:ml-3">
                        <div className="h-[2px] w-2 md:w-3 bg-gray-700 mx-[2px]"></div>
                        <div className="h-[2px] w-2 md:w-3 bg-gray-700 mx-[2px]"></div>
                        <div className="h-[2px] w-2 md:w-3 bg-gray-700 mx-[2px]"></div>
                        <div className="h-[2px] w-2 md:w-3 bg-gray-700 mx-[2px] relative">
                          <div className="absolute -right-[1px] -top-[4px] border-t-[4px] md:border-t-[5px] border-t-transparent border-b-[4px] md:border-b-[5px] border-b-transparent border-r-[5px] md:border-r-[6px] border-r-gray-700"></div>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => handleStepClick(index)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all duration-300 ${
                        index <= activeStep 
                          ? 'bg-gradient-to-r from-red-800 to-red-700 text-white' 
                          : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {index + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative md:block order-last md:order-none"
          >
            <div className="h-[300px] md:h-[340px] mt-6 md:mt-0 -mb-12 sm:mb-0">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex h-full items-center justify-center -mt-6 md:-mt-10"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    width={700}
                    height={700}
                    className="w-[95%] md:w-full h-full object-contain transition-all duration-300"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps; 