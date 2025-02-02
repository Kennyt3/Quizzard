import React from "react";
import { Button } from "@/app/components/button";
import { Card, CardContent } from "@/app/components/card";
import { Accordion, AccordionItem } from "@/app/components/accordion";
import { Star } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 flex items-center justify-between bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Blogify</h1>
        <nav className="hidden space-x-6 md:block">
          <a href="#features" className="hover:text-gray-700">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-700">
            Pricing
          </a>
          <a href="#about" className="hover:text-gray-700">
            About
          </a>
          <a href="#login" className="hover:text-gray-700">
            Login
          </a>
          <Button className="ml-4">Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Create and Share Your Blog with Ease
        </h2>
        <p className="mt-4 text-gray-600">
          A simple and powerful platform to start your blog today.
        </p>
        <Button className="mt-6">Get Started for Free</Button>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="grid gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4"
      >
        {[
          { title: "Easy Editor", icon: "🖊️" },
          { title: "Customizable Themes", icon: "🎨" },
          { title: "SEO & Performance", icon: "🚀" },
          { title: "Analytics", icon: "📊" },
        ].map((feature, index) => (
          <Card key={index} className="p-6 text-center">
            <CardContent>
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 px-6 py-16">
        <h3 className="text-center text-2xl font-semibold">
          What Our Users Say
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="p-6">
              <CardContent>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-2 text-gray-700">
                  `This platform made blogging effortless!`
                </p>
                <p className="mt-4 font-semibold">- User {index + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-16">
        <h3 className="text-center text-2xl font-semibold">Pricing Plans</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Free", "Pro", "Business"].map((plan, index) => (
            <Card key={index} className="p-6 text-center">
              <CardContent>
                <h4 className="text-lg font-semibold">{plan} Plan</h4>
                <p className="mt-2 text-gray-600">
                  Great for {plan.toLowerCase()} bloggers
                </p>
                <Button className="mt-6">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 px-6 py-16">
        <h3 className="text-center text-2xl font-semibold">
          Frequently Asked Questions
        </h3>
        <Accordion className="mt-8">
          {[
            "How does this work?",
            "Is there a free plan?",
            "Can I customize my blog?",
          ].map((question, index) => (
            <AccordionItem key={index} title={question}>
              <p className="text-gray-600">
                Yes! We offer flexible options for all users.
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-white">
        <p>© 2025 Blogify. All rights reserved.</p>
      </footer>
    </div>
  );
}
