'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '@/utils/services/mockData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Câu Chuyện Thành Công
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lời chia sẻ từ những du học sinh đã thành công với sự đồng hành của Việt Âu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 line-clamp-4">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.program}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.university}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-xs text-gray-400">
                  {testimonial.year}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}