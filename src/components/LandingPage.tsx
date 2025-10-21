import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Bell, User, Home, Users, Calendar, BookOpen, GraduationCap, HelpCircle, Settings } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold">UP HUB</div>
            <div className="text-sm text-gray-300">(logo here)</div>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search everything • Ask NAVI" 
                className="pl-10 bg-white text-black"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-4">
          <nav className="space-y-2">
            <div className="text-sm font-medium text-gray-900 mb-4">Home</div>
            
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Home className="mr-2 h-4 w-4" />
                Inbox & Chat
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Users className="mr-2 h-4 w-4" />
                Discover
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Calendar className="mr-2 h-4 w-4" />
                Events (All • BC • BC)
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                Resources
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <GraduationCap className="mr-2 h-4 w-4" />
                Directory
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                UP Academy
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Calendar className="mr-2 h-4 w-4" />
                Programmes
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm bg-blue-50 text-blue-700">
                <Calendar className="mr-2 h-4 w-4" />
                Today's Plan
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                Personal
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                Library/Media
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Users className="mr-2 h-4 w-4" />
                Organizations
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Settings className="mr-2 h-4 w-4" />
                Governance & Charter
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Start a conversation section */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <Input placeholder="Start a conversation..." className="flex-1" />
                  <Button>Post</Button>
                </div>
              </CardContent>
            </Card>

            {/* Your Conversations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Conversations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">UP The Hague</span> — That's fantastic really for comments. • <span className="text-gray-500">1 hr ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>E</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">Event Q&A</span> — Can help help capture today from UP? • <span className="text-gray-500">4 mins</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">
                        <span className="font-medium">MentorMatch</span> — Happy to support your THRIVE goals! • <span className="text-gray-500">15 ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Announcements & Latest */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Announcements & Latest</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-1">
                  <div>BC Sustainability — New Sustainability partner announced</div>
                  <div>Diversity & Inclusion — New Diversity & Inclusion partner announced</div>
                  <div>BC Law & Public Safety — Policy proposal open for feedback</div>
                  <div>UP Academy — New course: Lean Canvas for Projects</div>
                </div>
              </CardContent>
            </Card>

            {/* Two column layout for Programs and THRIVE Plan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Programmes today */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Programmes today</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <div>UP Lean Food Security • 18:00</div>
                    <div>Rethinking ACE for Leaders • 19:30</div>
                    <div>UX CONNECT The Hague • 20:00</div>
                    <div>BC Violence Seminar: AI Futures • Tomorrow 09:00</div>
                  </div>
                </CardContent>
              </Card>

              {/* THRIVE Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">THRIVE Plan (with MentorMatch)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium">Progress: ████</div>
                      <div className="text-gray-600 mt-2">This week's actions:</div>
                      <ul className="text-sm space-y-1 mt-1">
                        <li>• Complete Academic module</li>
                        <li>• Attend CONNECT</li>
                        <li>• Report back by 3 points</li>
                      </ul>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm">Start</Button>
                      <Button size="sm" variant="outline">Review</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* EHN World News */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">EHN World News — Curated for Empowered Citizens</CardTitle>
                <p className="text-sm text-gray-600">UN sustainable Transition for global water equity</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm space-y-1">
                  <div>Breakthrough cancer therapy approved in Japan</div>
                  <div>AI treaty signed by 42 nations at Geneva summit</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 bg-white border-l p-4 space-y-6">
          {/* Next CONNECT */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Next CONNECT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">UX CONNECT The Hague</div>
                <div className="text-gray-600">Tonight • 8pm</div>
              </div>
              <Button size="sm" className="w-full">Join</Button>
              <Button size="sm" variant="outline" className="w-full">Remind</Button>
            </CardContent>
          </Card>

          {/* Pending & Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pending & Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <div>• 3 pending • 1 overdue</div>
                <div>• 1 impact • 1 overdue</div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm">Review</Button>
                <Button size="sm" variant="outline">Submit</Button>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <div>• Ms S — Dr. Tamara & Team</div>
                <div>• Dr. Robert Kiyosaki & Team</div>
              </div>
              <Button size="sm" className="w-full">View All</Button>
            </CardContent>
          </Card>

          {/* NAVI Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">NAVI Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm space-y-1">
                <div>• 1 Draft • 1 new • 1 follow up</div>
                <div>• Invite 2 members to review "THRIVE"</div>
                <div>• Review 1 new comment on "Impact"</div>
              </div>
              <Button size="sm" className="w-full">See All</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default LandingPage;