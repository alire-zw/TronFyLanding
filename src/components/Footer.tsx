'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TelegramIcon, MailIcon, PhoneIcon, ClockIcon, InstagramIcon, LinkedInIcon } from './icons/FooterIcons';

const Footer = () => {
  return (
    <footer className="bg-[#212121] py-16 relative overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0),
            radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)
          `,
          backgroundSize: '32px 32px, 16px 16px',
          backgroundPosition: '0 0, 8px 8px'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-9 text-right relative"
          >
            <div className="mb-6">
              <div className="absolute right-0 top-0">
                <Image
                  src="/icons/logo.svg"
                  alt="ترون‌فای"
                  width={100}
                  height={100}
                  className="h-24 w-24"
                  priority
                />
              </div>
              <div className="pr-32">
                <p className="text-white/70 text-sm leading-7">
                  ما در ترون‌فای، به دنبال آگاهی‌بخشی، رشد و پیشرفت افرادی هستیم که با عنوان سرمایه و توان مالی، قصد تحقق یک رویا برای آینده خود را دارند. تیم ترون‌فای متشکل از نیروهای خبره در حوزه سرمایه‌گذاری و نرم‌افزار است و قصد دارد ضمن ایجاد بستری ایمن جهت خرید و فروش ارزهای دیجیتال، در کنار افرادی باشد که قصد دارند از ارزش دارایی‌های خود در برابر تورم محافظت کنند.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Badges */}
          <div className="lg:col-span-3 flex flex-row justify-center lg:justify-end gap-4 mt-8 lg:mt-0">
            <Link
              href="https://iranblockchain.org"
              target="_blank"
              className="flex flex-col items-center bg-[#F6F6F6] rounded-2xl p-3 sm:p-4 hover:bg-white transition-colors w-24 sm:w-32"
            >
              <Image
                src="/pics/blockchain.png"
                alt="انجمن بلاکچین ایران"
                width={80}
                height={80}
                className="w-16 sm:w-20 h-auto mb-2"
              />
              <strong className="text-gray-600 text-[11px] sm:text-[13px]">انجمن بلاکچین</strong>
            </Link>
            <Link
              href="#"
              target="_blank"
              className="flex flex-col items-center bg-[#F6F6F6] rounded-2xl p-3 sm:p-4 hover:bg-white transition-colors w-24 sm:w-32"
            >
              <Image
                src="/pics/enamad.png"
                alt="اعتماد الکترونیکی"
                width={80}
                height={80}
                className="w-16 sm:w-20 h-auto mb-2"
              />
              <strong className="text-gray-600 text-[11px] sm:text-[13px]">اعتماد الکترونیکی</strong>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div 
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Telegram */}
          <div className="bg-white/5 rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover:bg-white/10 group">
            <div className="bg-white/10 rounded-xl p-2 sm:p-3 group-hover:bg-white/20">
              <TelegramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6F6F6]" />
            </div>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-base truncate">آیدی تلگرام</p>
              <p className="text-white mt-0.5 sm:mt-1 font-medium text-xs sm:text-base truncate">@TronfySupport</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white/5 rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover:bg-white/10 group">
            <div className="bg-white/10 rounded-xl p-2 sm:p-3 group-hover:bg-white/20">
              <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6F6F6]" />
            </div>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-base truncate">ایمیل پشتیبانی</p>
              <p className="text-white mt-0.5 sm:mt-1 font-medium text-xs sm:text-base truncate">support@tronfy.ir</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white/5 rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover:bg-white/10 group">
            <div className="bg-white/10 rounded-xl p-2 sm:p-3 group-hover:bg-white/20">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6F6F6]" />
            </div>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-base truncate">شماره تماس</p>
              <p className="text-white mt-0.5 sm:mt-1 font-medium text-xs sm:text-base truncate">023-32344125</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white/5 rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-4 hover:bg-white/10 group">
            <div className="bg-white/10 rounded-xl p-2 sm:p-3 group-hover:bg-white/20">
              <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6F6F6]" />
            </div>
            <div className="min-w-0">
              <p className="text-white/70 text-xs sm:text-base truncate">ساعات کاری</p>
              <p className="text-white mt-0.5 sm:mt-1 font-medium text-xs sm:text-base truncate">9 صبح الی 17</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright and Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-[11px] sm:text-sm text-center sm:text-right">
              تمامی حقوق مادی و معنوی این وبسایت متعلق به ترون‌فای می‌باشد
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-white/40 hover:text-red-500 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="https://t.me/SwapWalletSupport" 
                target="_blank"
                className="text-white/40 hover:text-red-500 transition-colors"
              >
                <TelegramIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="text-white/40 hover:text-red-500 transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 