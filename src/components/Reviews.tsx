
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Download, Users, Award, Trophy, Shield } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Maid of Honor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c716?w=150",
      rating: 5,
      text: "ToastBot helped me create the perfect maid of honor speech! The AI coaching feature was incredible - I felt so confident delivering it.",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Best Man",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 5,
      text: "I was terrified of public speaking, but ToastBot's practice mode and analytics helped me nail my best man speech. Everyone loved it!",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Sister of Bride",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5,
      text: "The templates and quote library saved me so much time. My speech was heartfelt and perfectly structured. Highly recommend!",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Father of Groom",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 5,
      text: "As someone who struggles with words, ToastBot made me look like a professional speaker. The mobile teleprompter was a game-changer!",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Wedding Planner",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      rating: 5,
      text: "I recommend ToastBot to all my clients. It ensures their speeches are memorable and well-delivered. Professional results every time!",
      verified: true
    },
    {
      id: 6,
      name: "James Miller",
      role: "Groomsman",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      rating: 5,
      text: "The speech analytics helped me perfect my timing and delivery. Went from nervous wreck to confident speaker in just a few practice sessions!",
      verified: true
    }
  ];

  const stats = [
    { icon: Download, label: "Downloads", value: "500K+" },
    { icon: Users, label: "Happy Users", value: "250K+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
    { icon: Award, label: "Speeches Created", value: "1M+" }
  ];

  const badges = [
    { name: "Editor's Choice", color: "bg-amber-100 text-amber-800" },
    { name: "AI Innovation Award", color: "bg-blue-100 text-blue-800" },
    { name: "User's Favorite", color: "bg-green-100 text-green-800" },
    { name: "Wedding Tech Winner", color: "bg-purple-100 text-purple-800" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Trusted by Wedding Speakers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join hundreds of thousands who've delivered unforgettable toasts
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-amber-100 dark:bg-amber-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {badges.map((badge, index) => (
              <Badge key={index} className={`${badge.color} border-0 px-4 py-2`}>
                <Trophy className="h-4 w-4 mr-2" />
                {badge.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            What Our Users Say
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="shadow-lg border-amber-100 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <Shield className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">250K+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
