import { people01, people02, people03, people04, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "proposals", title: "Proposals" },
  { id: "voting", title: "Voting" },
  { id: "dashboard", title: "Dashboard" },
  { id: "signup", title: "Signup" },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Community-Driven",
    content:
      "EcoCity empowers residents to collaborate on urban projects, ensuring every voice is heard.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Sustainable Development",
    content:
      "We prioritize green initiatives to reduce carbon emissions and improve quality of life.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Track Progress",
    content:
      "Monitor the impact of your proposals and see real-time progress of urban improvements.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Ecocity is revolutionizing urban planning. Our platform empowers communities to shape their environment sustainably.",
    name: "Janice M.",
    title: "Co-founder & Chief Technology Officer",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "We're bridging the gap between citizens and city planners. Ecocity makes urban development truly collaborative.",
    name: "Prisha Patel",
    title: "Sustainability Expert & Marketing  Manager ",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "With Ecocity, we're not just building smart cities, we're nurturing resilient communities for generations to come.",
    name: "Rebecca N.",
    title: "Head of Community Engagement",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "Ecocity is more than a platform; it's a movement towards sustainable, inclusive, and innovative urban living.",
    name: "Judith K.",
    title: "Co-Founder, Chief Executive Officer && lead Software Dev",
    img: people04,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Lack Sustainable Infrastructure",
    value: "70%+",
  },
  {
    id: "stats-2",
    title: "Annual Funding Needed",
    value: "$100B+",
  },
  {
    id: "stats-3",
    title: "Urban Carbon Emissions",
    value: "80%+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Content", link: "https://www.ecocity.com/content/" },
      { name: "How it Works", link: "https://www.ecocity.com/how-it-works/" },
      { name: "Create", link: "https://www.ecocity.com/create/" },
      { name: "Explore", link: "https://www.ecocity.com/explore/" },
      { name: "Terms & Services", link: "https://www.ecocity.com/terms-and-services/" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Help Center", link: "https://www.ecocity.com/help-center/" },
      { name: "Partners", link: "https://www.ecocity.com/partners/" },
      { name: "Suggestions", link: "https://www.ecocity.com/suggestions/" },
      { name: "Blog", link: "https://www.ecocity.com/blog/" },
      { name: "Newsletters", link: "https://www.ecocity.com/newsletters/" },
    ],
  },
  {
    title: "Partner",
    links: [
      { name: "Our Partner", link: "https://www.ecocity.com/our-partner/" },
      { name: "Become a Partner", link: "https://www.ecocity.com/become-a-partner/" },
    ],
  },
];

export const socialMedia = [
  { id: "social-media-1", icon: instagram, link: "https://www.instagram.com/" },
  { id: "social-media-2", icon: facebook, link: "https://www.facebook.com/" },
  { id: "social-media-3", icon: twitter, link: "https://www.twitter.com/" },
  { id: "social-media-4", icon: linkedin, link: "https://www.linkedin.com/" },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const pricingTiers = [
  {
    id: "tier-1",
    name: "Basic",
    price: "Free",
    features: [
      "Submit up to 5 proposals per month",
      "Vote on community projects",
      "Access to basic analytics",
    ],
  },
  {
    id: "tier-2",
    name: "Pro",
    price: "$9.99/month",
    features: [
      "Submit unlimited proposals",
      "Priority voting on projects",
      "Advanced analytics and reporting",
      "Collaborate with other users",
    ],
  },
  {
    id: "tier-3",
    name: "Premium",
    price: "$29.99/month",
    features: [
      "All Pro features",
      "AI-powered proposal improvement suggestions",
      "Unlimited product listings for sustainable solutions",
      "Direct access to urban planning experts",
      "Custom dashboard and data visualization",
    ],
  },
];