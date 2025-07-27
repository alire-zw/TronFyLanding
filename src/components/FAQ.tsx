'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('عمومی');
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const categories = [
    'عمومی',
    'مینی آپ تلگرام',
    'احراز هویت و محدودیتها',
    'فروشگاه'
  ];

  const faqData = {
    'عمومی': [
      {
        question: 'ترون‌فای چیست؟',
        answer: 'ترون‌فای یک مینی اپ پیشرفته در تلگرام است که امکان خرید و فروش ترون (TRX) را به صورت امن و سریع فراهم می‌کند. این پلتفرم با استفاده از بهترین تکنولوژی‌های امنیتی، تجربه‌ای متفاوت از معاملات ارز دیجیتال ارائه می‌دهد.'
      },
      {
        question: 'چرا باید به ترون‌فای اعتماد کنم؟',
        answer: 'ترون‌فای با بیش از 7 هزار کاربر فعال و حجم معاملات بالای 10 میلیارد ریال، یکی از معتبرترین پلتفرم‌های معاملات ترون در ایران است. امنیت بالا، سرعت معاملات و پشتیبانی 24/7 از مزایای این پلتفرم محسوب می‌شود.'
      },
      {
        question: 'آیا ترون‌فای مجوز قانونی دارد؟',
        answer: 'ترون‌فای با رعایت تمام قوانین و مقررات جمهوری اسلامی ایران فعالیت می‌کند و از سیستم‌های احراز هویت پیشرفته برای اطمینان از امنیت معاملات استفاده می‌کند.'
      },
      {
        question: 'کارمزد معاملات در ترون‌فای چقدر است؟',
        answer: 'ترون‌فای با کمترین کارمزد ممکن در بازار فعالیت می‌کند. کارمزد معاملات بر اساس حجم معامله محاسبه می‌شود و از 0.1% تا 0.3% متغیر است.'
      },
      {
        question: 'برداشت ریالی چه زمانی به حساب من واریز می‌شود؟',
        answer: 'برداشت‌های ریالی معمولاً در همان روز کاری واریز می‌شوند. در صورت تأخیر، تیم پشتیبانی ترون‌فای در اسرع وقت پیگیری خواهد کرد.'
      }
    ],
    'مینی آپ تلگرام': [
      {
        question: 'چگونه می‌توانم به ترون‌فای دسترسی پیدا کنم؟',
        answer: 'برای دسترسی به ترون‌فای، کافی است در تلگرام ربات @TronFyBot را جستجو کرده و روی دکمه "شروع" کلیک کنید. سپس مراحل ثبت نام و احراز هویت را تکمیل کنید.'
      },
      {
        question: 'آیا نیاز به نصب اپلیکیشن جداگانه دارم؟',
        answer: 'خیر، ترون‌فای یک مینی اپ در تلگرام است و نیازی به نصب اپلیکیشن جداگانه ندارید. تمام امکانات از طریق تلگرام در دسترس است.'
      },
      {
        question: 'آیا ترون‌فای در تمام نسخه‌های تلگرام کار می‌کند؟',
        answer: 'ترون‌فای با تمام نسخه‌های تلگرام سازگار است، اما برای بهترین تجربه، استفاده از نسخه‌های به‌روز تلگرام توصیه می‌شود.'
      },
      {
        question: 'آیا امکان استفاده از ترون‌فای در مرورگر وجود دارد؟',
        answer: 'در حال حاضر ترون‌فای فقط از طریق مینی اپ تلگرام در دسترس است. این روش امنیت بیشتری دارد و نیازی به حفظ رمز عبور جداگانه نیست.'
      },
      {
        question: 'آیا ترون‌فای در خارج از ایران کار می‌کند؟',
        answer: 'ترون‌فای مخصوص کاربران ایرانی طراحی شده و در حال حاضر فقط در ایران قابل استفاده است.'
      }
    ],
    'احراز هویت و محدودیتها': [
      {
        question: 'سطوح کاربری در ترون‌فای چگونه است؟',
        answer: 'ترون‌فای دارای سه سطح کاربری است: سطح اول (احراز هویت ساده)، سطح دوم (احراز هویت پیشرفته) و سطح سوم (احراز هویت کامل). هر سطح محدودیت‌های خاص خود را دارد.'
      },
      {
        question: 'محدودیت واریز و برداشت هر سطح چقدر است؟',
        answer: 'سطح اول: روزانه تا 10 میلیون تومان، سطح دوم: روزانه تا 50 میلیون تومان، سطح سوم: بدون محدودیت (با تأیید مدیریت).'
      },
      {
        question: 'انجام احراز هویت چقدر زمان می‌برد؟',
        answer: 'احراز هویت ساده معمولاً در کمتر از 5 دقیقه انجام می‌شود. احراز هویت پیشرفته و کامل ممکن است تا 24 ساعت کاری زمان ببرد.'
      },
      {
        question: 'من کارت ملی هوشمند ندارم، برای احراز هویت پیشرفته چه کاری انجام دهم؟',
        answer: 'در صورت عدم دسترسی به کارت ملی هوشمند، می‌توانید از روش احراز هویت با کارت ملی معمولی و عکس سلفی استفاده کنید. این روش کمی بیشتر زمان می‌برد.'
      },
      {
        question: 'محدودیت 72 ساعت فتا چیست؟',
        answer: 'طبق قوانین جمهوری اسلامی ایران، برداشت‌های ریالی تا 72 ساعت پس از واریز امکان‌پذیر نیست. این محدودیت برای اطمینان از امنیت معاملات اعمال می‌شود.'
      }
    ],
    'فروشگاه': [
      {
        question: 'آیا ترون‌فای فروشگاه دارد؟',
        answer: 'در حال حاضر ترون‌فای فقط روی خدمات معاملات ترون تمرکز دارد. امکان خرید محصولات فیزیکی در آینده اضافه خواهد شد.'
      },
      {
        question: 'آیا می‌توانم با ترون خرید کنم؟',
        answer: 'ترون‌فای در حال حاضر امکان خرید محصولات با ترون را فراهم نمی‌کند. این قابلیت در نسخه‌های آینده اضافه خواهد شد.'
      },
      {
        question: 'آیا ترون‌فای کارت هدیه ارائه می‌دهد؟',
        answer: 'ترون‌فای در حال حاضر کارت هدیه ارائه نمی‌دهد. این قابلیت در آینده اضافه خواهد شد.'
      },
      {
        question: 'آیا امکان خرید گیفت کارت در ترون‌فای وجود دارد؟',
        answer: 'در حال حاضر ترون‌فای گیفت کارت ارائه نمی‌دهد. این قابلیت در نسخه‌های آینده اضافه خواهد شد.'
      },
      {
        question: 'آیا ترون‌فای تخفیف‌های ویژه ارائه می‌دهد؟',
        answer: 'ترون‌فای گاهی اوقات تخفیف‌های ویژه برای کاربران جدید و وفادار ارائه می‌دهد. برای اطلاع از آخرین تخفیف‌ها، کانال رسمی ترون‌فای را دنبال کنید.'
      }
    ]
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            سوالی برات پیش اومده؟
          </h2>
          <p className="text-gray-600 text-lg">
            پاسخ سوالات خود را از دسته بندیهای زیر پیدا کنید
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-800 to-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqData[activeCategory as keyof typeof faqData]?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-900 font-medium">{item.question}</span>
                <motion.div
                  animate={{ rotate: openQuestions.includes(index) ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-red-600 text-xl font-bold"
                >
                  +
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openQuestions.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="border-2 border-dashed border-red-200 rounded-lg p-6 bg-red-50">
            <p className="text-red-800 font-medium">
              سوال شما وجود نداشت؟ همیشه میتونید از ما بپرسید.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 