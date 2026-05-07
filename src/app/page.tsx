"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Events",
          id: "events",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Tuscany Courtyard"
      button={{
        text: "Reserve Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Tuscany Courtyard"
      description="Refined Dining, Timeless Evenings. Nestled in Kohsar Market, Tuscany Courtyard blends Italian sophistication with contemporary hospitality—your destination for celebrations, gatherings, and unforgettable moments in Islamabad."
      buttons={[
        {
          text: "Reserve Your Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/boiled-coffee-cups-sweets_140725-3711.jpg?_wi=1"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A Legacy of Taste"
      description="Experience the culinary heart of Tuscany in the middle of Islamabad. Our commitment to authentic ingredients and warm, Mediterranean-inspired service creates the perfect backdrop for your most cherished celebrations."
      bulletPoints={[
        {
          title: "Italian Sophistication",
          description: "Authentic recipes prepared with passion.",
        },
        {
          title: "Premier Location",
          description: "Ideally nestled in the heart of Kohsar Market.",
        },
        {
          title: "Curated Atmosphere",
          description: "Golden lighting and ambient elegance.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081867.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Private Events",
          description: "Exclusive space for corporate hosts.",
          buttonIcon: "Calendar",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-fried-pieces-meat-fried-onions_140725-3560.jpg",
          imageAlt: "Medium fried pieces of meat and fried onions",
        },
        {
          title: "Premium Service",
          description: "Seamless, attentive, and professional.",
          buttonIcon: "Award",
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-coffee-cups-sweets_140725-3711.jpg?_wi=2",
          imageAlt: "Medium fried pieces of meat and fried onions",
        },
        {
          title: "Consistent Quality",
          description: "High standards in every dish.",
          buttonIcon: "Star",
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081867.jpg?_wi=2",
          imageAlt: "Medium fried pieces of meat and fried onions",
        },
        {
          title: "Elegant Ambiance",
          description: "Perfect for business and family.",
          buttonIcon: "GlassWater",
          imageSrc: "http://img.b2bpic.net/free-photo/spaghetti-tomato-red-pepper-sauce_114579-2487.jpg?_wi=1",
          imageAlt: "Medium fried pieces of meat and fried onions",
        },
      ]}
      title="Why Choose Us"
      description="Elevating every detail of your dining experience."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Tuscany Signature Pasta",
          price: "PKR 3,500",
          imageSrc: "http://img.b2bpic.net/free-photo/spaghetti-tomato-red-pepper-sauce_114579-2487.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Grilled Premium Fillet",
          price: "PKR 5,200",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-meat-decorated-with-vegetables_1303-12325.jpg",
        },
        {
          id: "3",
          name: "Artisan Stone-Baked Pizza",
          price: "PKR 2,800",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-vegetable-vegetarian-pizza-top-view_169016-21794.jpg",
        },
        {
          id: "4",
          name: "Mediterranean Seafood Platter",
          price: "PKR 4,900",
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-sauce_140725-141.jpg",
        },
        {
          id: "5",
          name: "Chef's Risotto Special",
          price: "PKR 3,200",
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-grated-cheese-greens_140725-8747.jpg",
        },
        {
          id: "6",
          name: "Signature Tiramisu",
          price: "PKR 1,500",
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-topped-with-cheese-herbs_140725-1829.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Indulge in a curated selection of Italian excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Khan",
          handle: "@sarahk",
          testimonial: "The best dining experience in Islamabad. Perfectly lit and incredible food.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517448.jpg",
        },
        {
          id: "2",
          name: "Ahmed Raza",
          handle: "@ahmedr",
          testimonial: "Ideal for business dinners. The service and atmosphere were unmatched.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-her-boyfriend-reading-text-message-mobile-phone-while-sitting-dining-table_637285-10328.jpg",
        },
        {
          id: "3",
          name: "Nadia Malik",
          handle: "@nadiam",
          testimonial: "A beautiful courtyard and very authentic taste. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-preparing-propose-his-lover_23-2148060327.jpg",
        },
        {
          id: "4",
          name: "Bilal Ahmed",
          handle: "@bilala",
          testimonial: "Fantastic venue for our family celebration. The quality is consistent.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/ornamental-restaurant-pattern-with-label_23-2147511434.jpg",
        },
        {
          id: "5",
          name: "Zara Noor",
          handle: "@zaran",
          testimonial: "I love the vibe! It's our go-to spot for special weekend dinners.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-setting-table-christmas-dinner_23-2147969378.jpg",
        },
      ]}
      showRating={true}
      title="Guest Stories"
      description="What our patrons say about their evenings with us."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="By The Numbers"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",
          value: "10+",
          description: "Years of Excellence",
        },
        {
          id: "m2",
          value: "5k+",
          description: "Memorable Dinners Served",
        },
        {
          id: "m3",
          value: "100%",
          description: "Fresh Ingredient Commitment",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do I need a reservation?",
          content: "Yes, we highly recommend booking in advance, especially for weekends.",
        },
        {
          id: "f2",
          title: "Do you host private events?",
          content: "We offer exclusive private dining experiences for corporate and family gatherings.",
        },
        {
          id: "f3",
          title: "Where are you located?",
          content: "We are located in the heart of Kohsar Market, Islamabad.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Need more information? We are here to help."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal",
      }}
      text="Ready for an unforgettable evening at Tuscany Courtyard? Book your table today."
      buttons={[
        {
          text: "Reserve Now",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Tuscany Courtyard"
      copyrightText="© 2025 Tuscany Courtyard Islamabad. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
