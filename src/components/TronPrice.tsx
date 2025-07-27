'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { MarketTicker } from '@/types/market';
import { TrxPriceIcon, PriceUpIcon, PriceDownIcon, TelegramIcon } from './icons/PriceIcons';

const TronPrice = () => {
  const [price, setPrice] = useState<MarketTicker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.bitpin.ir/api/v1/mkt/tickers/');
        const data: MarketTicker[] = await response.json();
        const tronPrice = data.find(ticker => ticker.symbol === 'TRX_IRT');
        if (tronPrice) {
          setPrice(tronPrice);
        }
      } catch (err) {
        setError('خطا در دریافت قیمت');
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // هر 30 ثانیه به‌روزرسانی می‌شود

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('fa-IR').format(Math.floor(Number(price)));
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                          <Image 
                src="/pics/logo.svg" 
                alt="ترون‌فای" 
                width={32}
                height={32}
                className="rounded-lg sm:w-10 sm:h-10"
              />
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm sm:text-base">ترون‌فای</div>
            <div className="text-xs sm:text-sm text-gray-500">صرافی ترون</div>
          </div>
        </div>
        {loading ? (
          <div className="text-right animate-pulse">
            <div className="h-7 w-24 bg-gray-200 rounded mb-1"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        ) : error ? (
          <div className="text-right">
            <div className="text-sm text-red-800">{error}</div>
          </div>
        ) : price && (
          <div className="text-right">
            <div className="text-lg sm:text-2xl font-bold text-gray-900">{formatPrice(price.price)} تومان</div>
            <div className={`text-xs sm:text-sm ${price.daily_change_price >= 0 ? 'text-green-600' : 'text-red-800'}`}>
              {price.daily_change_price >= 0 ? '+' : ''}{price.daily_change_price.toFixed(2)}%
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              <TrxPriceIcon className="text-red-500" size={16} />
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">ترون (TRX)</span>
          </div>
          {loading ? (
            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
          ) : error ? (
            <span className="text-sm text-red-800">خطا در دریافت قیمت</span>
          ) : price && (
            <span className="font-bold text-gray-900">{formatPrice(price.price)} تومان</span>
          )}
        </div>
        
        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              <PriceDownIcon className="text-gray-600" size={16} />
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">کمترین قیمت امروز</span>
          </div>
          {loading ? (
            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
          ) : error ? (
            <span className="text-sm text-red-800">خطا در دریافت قیمت</span>
          ) : price && (
            <span className="font-bold text-gray-900">{formatPrice(price.low)} تومان</span>
          )}
        </div>
        
        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              <PriceUpIcon className="text-gray-600" size={16} />
            </div>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">بیشترین قیمت امروز</span>
          </div>
          {loading ? (
            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
          ) : error ? (
            <span className="text-sm text-red-800">خطا در دریافت قیمت</span>
          ) : price && (
            <span className="font-bold text-gray-900">{formatPrice(price.high)} تومان</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TronPrice; 