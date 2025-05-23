import React from "react";
import {
  Globe,
  Wallet,
  CreditCard,
  TrendingUp,
  Target,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-background ">
      <Navbar />

      <div className="relative w-full h-[120vh] flex items-center justify-center overflow-hidden">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-[40%] inset-y-[-10%] h-full skew-y-12"
          )}
        />
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-[-10%] inset-y-[-10%] h-full skew-y-[12deg]"
          )}
        />
        <div className="relative z-10 text-center">
          <SparklesText
            text="Revolutionize Your Financial Management"
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600  bg-clip-text"
          />
          <p className="text-xl  max-w-4xl mx-auto mb-10">
            Comprehensive AI-Powered Financial Tracking & Insights. Manage
            Investments, Expenses, and Wealth in One Platform.
          </p>
          <div className="flex justify-center space-x-4">
            <RainbowButton>Get Started - Its Free</RainbowButton>
            <Button variant="outline">Watch Demo</Button>
          </div>
        </div>
      </div>

      <main className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <Wallet className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Tracking
              </h3>
              <p className="text-gray-400">
                Track investments, expenses, stocks, mutual funds, and crypto in
                real-time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Insights
              </h3>
              <p className="text-gray-400">
                Get intelligent recommendations and financial health analysis
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-400">
                Bank-level encryption and zero data sharing
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <AnimatedGradientText className="text-sm font-medium">
            Why Choose Our Platform
          </AnimatedGradientText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: CreditCard,
              title: "Multiple Account Sync",
              description: "Connect bank, demat, credit cards seamlessly",
            },
            {
              icon: Target,
              title: "Goal Tracking",
              description: "Set, monitor, and achieve financial milestones",
            },
            {
              icon: Globe,
              title: "Multi-Asset Tracking",
              description: "Stocks, Mutual Funds, Crypto, IPOs, SIPs",
            },
            {
              icon: Zap,
              title: "Real-Time Analytics",
              description: "Instant financial health and performance metrics",
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="p-6 rounded-xl text-center">
              <Icon className="w-12 h-12 mx-auto text-primary  mb-4" />
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 text-center">
        <BorderBeam />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Financial Journey Today
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            No Credit Card Required. Unlimited Access. AI-Powered Insights.
          </p>
          <div className="flex justify-center space-x-4">
            <RainbowButton>Create Free Account</RainbowButton>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
