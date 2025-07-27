'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-6 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-800/90 text-base sm:text-lg">
            سوالی دارید یا با مشکلی روبه‌رو شده‌اید؟ خوشحال می‌شویم با ما تماس بگیرید.
          </p>
          <p className="text-red-800 font-black mt-2 text-xl sm:text-2xl tracking-wider" dir="ltr">
            <span className="text-gray-500">023</span>
            <span className="text-gray-500 mx-1">-</span>
            323 44 125
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 