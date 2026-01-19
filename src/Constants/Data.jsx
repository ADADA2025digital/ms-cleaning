import Whychooseus from "../assets/Images/whychooseus.jpg";
import HeroImage1 from "../assets/Images/slider-2-1.jpg";
import HeroImage2 from "../assets/Images/slider-2-2.jpg";
import HeroImage3 from "../assets/Images/slider-2-3.jpg";
import CenterLeft from "../assets/Images/11.jpeg";
import CenterRight from "../assets/Images/12.jpeg";
import Service1 from "../assets/Images/5.jpeg";
import Service2 from "../assets/Images/6.jpeg";
import Service3 from "../assets/Images/7.jpeg";
import Service4 from "../assets/Images/8.jpeg";
import Service5 from "../assets/Images/10.jpeg";
import Service6 from "../assets/Images/9.jpeg";

import Client1 from "../assets/Images/client-6.png";
import Client2 from "../assets/Images/client-6.png";
import Client3 from "../assets/Images/client-6.png";
import Client4 from "../assets/Images/client-6.png";
import Client5 from "../assets/Images/client-6.png";
import Client6 from "../assets/Images/client-6.png";
import Client7 from "../assets/Images/client-6.png";
import Client8 from "../assets/Images/client-6.png";

import { toSlug } from "../utils/slugify";

export const Clients = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
];

export const heroContent = [
  {
    title: "Premium Residential & Office Cleaning",
    heading: "Make Your Space Healthier, Brighter & Spotless.",
    description:
      "From homes to offices, we deliver deep cleaning solutions that create safe, fresh, and hygienic environments.",
    buttonText: "Explore Services",
    backgroundImage: HeroImage1,
  },
  {
    title: "Kitchen & Window Cleaning Experts",
    heading: "Shine That Lasts Longer.",
    description:
      "We specialize in grease-free kitchens, sparkling windows, and spotless surfaces using eco-friendly cleaning methods.",
    buttonText: "Book a Cleaning",
    backgroundImage: HeroImage2,
  },
  {
    title: "Carpet & Upholstery Cleaning",
    heading: "Deep Clean. Fresh Feel. Lasting Comfort.",
    description:
      "Restore the beauty of your carpets and furniture with deep-cleaning solutions that remove stains, dust, and allergens.",
    buttonText: "Get a Quote",
    backgroundImage: HeroImage3,
  },
];


export const evolutionData = {
  subtitle: "From Mess to Masterpiece",
  title: "Remarkable Transformation by MS Property Cleaning",
  leftFeatures: [
    {
      icon: "bi-magic",
      title: "Premium Deep Cleaning",
      description:
        "Restore freshness with professional deep cleaning and advanced sanitization for spotless interiors.",
    },
    {
      icon: "bi-list-check",
      title: "Personalized Cleaning Plans",
      description:
        "Tailored cleaning packages curated to match every property type - apartments, houses, and luxury homes.",
    },
  ],
  rightFeatures: [
    {
      icon: "bi-recycle",
      title: "Eco-Friendly Home Care",
      description:
        "We use safe, sustainable cleaning products that protect your family, pets, and the environment.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Fast & Reliable Service",
      description:
        "Quick turnaround with consistent, high-quality results delivered by trusted and trained professionals.",
    },
  ],
  centerImage1: CenterLeft,
  centerImage2: CenterRight,
  centerImageAlt1: "Before MS Property Cleaning",
  centerImageAlt2: "After MS Property Cleaning",
};

export const progressData = [
  { percentage: 95, title: "Industrial Cleaning Service" },
  { percentage: 80, title: "Residential Cleaning Service" },
  { percentage: 65, title: "Cleaning Service Support" },
];

export const serviceslist = [
  {
    id: 1,
    name: "Residents",
    icon: "bi-house-door",
    image: Service1,
    title: "Premium Cleaning for Residential Properties",
    description:
      "Comprehensive cleaning services for individual homes, apartments, villas, and residential complexes with consistent quality and care.",
    features: [
      "Deep Residential Cleaning",
      "Move-In / Move-Out Cleaning",
      "Allergen & Dust Control",
      "Eco-Safe Cleaning Products",
    ],
    details: [
      "Maintain a calm, hygienic home with our residential cleaning programs. From studio apartments to large villas, our trained team tackles bedrooms, living spaces, kitchens and bathrooms with a consistent checklist.",
      "We schedule around your routine to minimize disruption and use family-safe, low-odor cleaning agents. Custom scopes (e.g., balcony wash, inside fridge/oven, post-renovation) are available on demand."
    ],
    keyFactors: [
      {
        title: "Assessment and Quotation",
        icon: "bi-clipboard-check",
        description:
          "Quick walk-through (or photo/video) to confirm scope, preferences and access. Transparent pricing before we start."
      },
      {
        title: "Scheduling and Preparation",
        icon: "bi-calendar-check",
        description:
          "Flexible weekday/weekend slots; we bring supplies and PPE. You decide if linen changes or dishwashing are included."
      },
      {
        title: "Cleaning and Inspection",
        icon: "bi-brush",
        description:
          "Room-by-room checklist covering dusting, surfaces, floors, bathrooms, kitchen degreasing and spot removal."
      },
      {
        title: "Completion and Feedback",
        icon: "bi-check-circle",
        description:
          "Final walkthrough with the resident; we note preferences for the next visit and provide after-care tips."
      }
    ],
    benefits: {
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
      items: [
        "Sparkling, allergen-reduced spaces",
        "Trusted, background-checked staff",
        "On-time arrivals and clear communication",
        "Eco-friendly, family-safe methods"
      ]
    },
    outcomes: {
      image:
        "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
      items: [
        "High-quality finish in every room",
        "Affordable recurring plans",
        "Happier, healthier home life",
        "Ongoing support for special requests"
      ]
    },
    faqs: [
      {
        id: "res-1",
        title: "Do I need to be home during cleaning?",
        content:
          "Not required. Many residents provide access via key/smart lock. We share start/finish photos on request."
      },
      {
        id: "res-2",
        title: "Can I customize the checklist?",
        content:
          "Yes. Add-ons like balcony wash, window tracks, or appliance deep-cleaning can be included."
      },
      {
        id: "res-3",
        title: "What products do you use?",
        content:
          "Low-odor, eco-friendly agents suitable for homes with kids and pets. MSDS sheets available."
      },
      {
        id: "res-4",
        title: "How often should I book?",
        content:
          "Weekly or bi-weekly keeps surfaces dust-free; monthly is popular for deep clean cycles."
      }
    ]
  },
  {
    id: 2,
    name: "Office",
    icon: "bi-building",
    image: Service2,
    title: "Corporate & Office Property Cleaning",
    description:
      "Ensuring hygienic and well-maintained office environments that support productivity and professional workplace standards.",
    features: [
      "Scheduled Facility Cleaning",
      "Carpet & Upholstery Care",
      "Restroom & Pantry Maintenance",
      "Custom Cleaning Plans",
    ],
    details: [
      "Keep a professional, productive environment with our office cleaning solutions. We handle workstations, reception areas, meeting rooms and shared facilities with precision and care.",
      "Our team works around your hours to minimize disruption, ensuring clean desks, sanitized restrooms and streak-free glass. Custom scopes and recurring SLAs are available."
    ],
    keyFactors: [
      {
        title: "Assessment and Quotation",
        icon: "bi-clipboard-check",
        description:
          "Site survey to map zones, footfall and risk areas. Clear scope, KPIs and SLA defined up front."
      },
      {
        title: "Scheduling and Preparation",
        icon: "bi-calendar-check",
        description:
          "After-hours or staggered cleaning; supervisor assigned; consumables (tissues, soap) restock plan included."
      },
      {
        title: "Cleaning and Inspection",
        icon: "bi-brush",
        description:
          "Desk and device-safe wipe downs, pantry/restroom sanitizing, waste segregation, glass and floor care."
      },
      {
        title: "Completion and Feedback",
        icon: "bi-check-circle",
        description:
          "Monthly audit reports and issue logs; rapid response for requests and incidents."
      }
    ],
    benefits: {
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
      items: [
        "Healthier workplace & fewer sick days",
        "Reliable, trained staff with supervision",
        "On-time completion",
        "Green cleaning policy available"
      ]
    },
    outcomes: {
      image:
        "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
      items: [
        "Consistent office presentation",
        "Predictable budgets via SLA",
        "Employee & visitor satisfaction",
        "Dedicated account manager"
      ]
    },
    faqs: [
      {
        id: "off-1",
        title: "Do you work after hours?",
        content:
          "Yes. Night shifts or early mornings to avoid disruption are common for offices."
      },
      {
        id: "off-2",
        title: "Can you supply consumables?",
        content:
          "We can supply, track and restock tissue, soap, sanitizer and bin liners per agreement."
      },
      {
        id: "off-3",
        title: "How do you ensure quality?",
        content:
          "Supervisor checklists, monthly audits and photo logs. We share reports with your admin team."
      },
      {
        id: "off-4",
        title: "Are staff vetted?",
        content:
          "All crew are background-checked and trained on safety, confidentiality and data-safe cleaning."
      }
    ]
  },
  {
    id: 3,
    name: "Kitchen",
    icon: "bi-houses",
    image: Service3,
    title: "Commercial & Shared Kitchen Cleaning",
    description:
      "Deep sanitation services for private, shared, and commercial kitchens to maintain hygiene and safety standards.",
    features: [
      "Grease & Oil Removal",
      "Anti-Bacterial Treatment",
      "Exhaust & Vent Cleaning",
      "Food-Safe Disinfectants",
    ],
    details: [
      "Kitchen operations demand strict hygiene. We degrease cooktops, hoods, filters and splashbacks, descale sinks and sanitize prep surfaces.",
      "Food-safe disinfectants and HACCP-aware procedures help you pass inspections and keep staff safe."
    ],
    keyFactors: [
      { title: "Site Survey & Quote", icon: "bi-clipboard-check", description: "Assess buildup levels, equipment and access windows." },
      { title: "Prep & Soak", icon: "bi-calendar-check", description: "Detachable parts soaked; sensitive gear masked and protected." },
      { title: "Degrease & Sanitize", icon: "bi-brush", description: "Hot-tank degreasing, steam where required, food-safe sanitizers." },
      { title: "Final Checks", icon: "bi-check-circle", description: "Airflow test for hoods; hygiene log updated with photos." }
    ],
    benefits: {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
      items: ["Pass hygiene audits", "Reduce fire risk", "Better airflow & efficiency", "Food-safe chemistry"]
    },
    outcomes: {
      image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
      items: ["Shiny, odor-free kitchen", "Lower downtime", "Improved staff morale", "Scheduled maintenance plan"]
    },
    faqs: [
      { id: "kit-1", title: "Do you clean during off-hours?", content: "Yes, we align with your non-service hours to avoid disruption." },
      { id: "kit-2", title: "Are chemicals food-safe?", content: "All agents used on prep surfaces are certified food-contact safe." },
      { id: "kit-3", title: "Can you clean fryers/ovens?", content: "Deep clean for ovens, grills and fryers can be included." },
      { id: "kit-4", title: "How often is hood cleaning needed?", content: "Typically quarterly for heavy use; semi-annual for light use." }
    ]
  },
  {
    id: 4,
    name: "Window",
    icon: "bi-microsoft",
    image: Service4,
    title: "High-Rise & Large Property Window Cleaning",
    description:
      "Specialized cleaning services for windows in residential towers, commercial buildings, and large properties.",
    features: [
      "High-Rise Glass Cleaning",
      "Safety-Compliant Methods",
      "Water-Repellent Coating",
      "Professional Equipment",
    ],
    details: [
      "Crystal-clear glass enhances curb appeal and daylighting. We clean interior/exterior panes, frames and tracks.",
      "For high-rise sites we use certified equipment and safety-compliant methods, with risk assessments and permits handled."
    ],
    keyFactors: [
      { title: "Site & Risk Assessment", icon: "bi-clipboard-check", description: "Anchor points, access paths, traffic and weather checks." },
      { title: "Scheduling & Permits", icon: "bi-calendar-check", description: "Coordinate with building management; barricading plan included." },
      { title: "Cleaning Execution", icon: "bi-brush", description: "Pure-water systems or squeegee method for a streak-free finish." },
      { title: "Coating & Handover", icon: "bi-check-circle", description: "Optional hydrophobic coating; photo report on completion." }
    ],
    benefits: {
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
      items: ["Streak-free clarity", "Safe high-rise methods", "Faster drying times", "Protection with coatings"]
    },
    outcomes: {
      image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
      items: ["Better daylight & aesthetics", "Reduced spotting", "Professional building image", "Planned maintenance cycles"]
    },
    faqs: [
      { id: "win-1", title: "Do you work with BMU/rope access?", content: "Yes. Licensed technicians and certified gear are used." },
      { id: "win-2", title: "What about hard-water stains?", content: "We can treat mineral deposits and advise on protection." },
      { id: "win-3", title: "Will you clean frames/tracks?", content: "Included by default unless otherwise specified." },
      { id: "win-4", title: "Rain policy?", content: "We reschedule during unsafe weather; no charge for weather delays." }
    ]
  },
  // {
  //   id: 5,
  //   name: "Plumbing Service",
  //   icon: "bi-wrench",
  //   image: Service5,
  //   title: "Plumbing Maintenance for Properties",
  //   description:
  //     "Reliable plumbing care to maintain smooth water flow and prevent property damage in large or small facilities.",
  //   features: [
  //     "Leak Detection & Repair",
  //     "Drain & Pipeline Cleaning",
  //     "Preventive Maintenance",
  //     "Emergency Response",
  //   ],
  //   details: [
  //     "From minor leaks to urgent blockages, our technicians stabilize issues quickly and prevent water damage.",
  //     "Preventive programs include descaling, pressure tests and fixture checks to keep facilities running smoothly."
  //   ],
  //   keyFactors: [
  //     { title: "Diagnostics & Quote", icon: "bi-clipboard-check", description: "Thermal/pressure tests, camera inspection for drains if needed." },
  //     { title: "Scheduling & Parts", icon: "bi-calendar-check", description: "We source compatible parts and plan downtime windows." },
  //     { title: "Repair & Testing", icon: "bi-brush", description: "Repairs, reseals and flow tests; hygiene maintained throughout." },
  //     { title: "Completion & Report", icon: "bi-check-circle", description: "Cause, fix and prevention notes with warranty details." }
  //   ],
  //   benefits: {
  //     image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
  //     items: ["Fewer breakdowns", "Faster response", "Clean, safe work areas", "Transparent pricing"]
  //   },
  //   outcomes: {
  //     image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
  //     items: ["Dry, damage-free spaces", "Improved water efficiency", "Compliance with building standards", "Planned maintenance"]
  //   },
  //   faqs: [
  //     { id: "plu-1", title: "Do you handle emergencies?", content: "Yes, priority hotline with rapid dispatch is available." },
  //     { id: "plu-2", title: "What about warranties?", content: "Parts per OEM warranty; workmanship warranty included." },
  //     { id: "plu-3", title: "Camera inspection available?", content: "We provide drain camera diagnostics for persistent issues." },
  //     { id: "plu-4", title: "Can you work after hours?", content: "Yes—scheduled night work to reduce downtime." }
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "Landscaping",
  //   icon: "bi-tree",
  //   image: Service6,
  //   title: "Landscaping & Outdoor Property Care",
  //   description:
  //     "Professional maintenance of gardens, outdoor areas, and shared spaces for a clean and aesthetically pleasing property.",
  //   features: [
  //     "Garden Upkeep",
  //     "Lawn Maintenance",
  //     "Outdoor Deep Cleaning",
  //     "Seasonal Plant Care",
  //   ],
  //   details: [
  //     "Enhance curb appeal with routine lawn care, pruning, hedge shaping and weed control. We also pressure-wash pavements and outdoor furniture.",
  //     "Seasonal programs keep beds healthy with mulching, fertilizing and pest control using environment-conscious methods."
  //   ],
  //   keyFactors: [
  //     { title: "Site Review & Plan", icon: "bi-clipboard-check", description: "Soil, shade and irrigation assessment; plant palette advice." },
  //     { title: "Schedule & Prep", icon: "bi-calendar-check", description: "Weekly/fortnightly cycles; waste disposal plan included." },
  //     { title: "Care & Cleaning", icon: "bi-brush", description: "Mowing, edging, pruning, leaf clearance and pressure wash." },
  //     { title: "Handover & Tips", icon: "bi-check-circle", description: "Watering guide and seasonal recommendations." }
  //   ],
  //   benefits: {
  //     image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
  //     items: ["Healthy, neat greens", "Safer, cleaner walkways", "Eco-aware practices", "Consistent schedule"]
  //   },
  //   outcomes: {
  //     image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f",
  //     items: ["Attractive common areas", "Better property value", "Resident satisfaction", "Year-round upkeep"]
  //   },
  //   faqs: [
  //     { id: "lan-1", title: "Do you remove green waste?", content: "Yes, collection and disposal are part of the service." },
  //     { id: "lan-2", title: "What about irrigation fixes?", content: "We repair timers, drips and sprinklers or coordinate specialists." },
  //     { id: "lan-3", title: "Pet- and child-safe products?", content: "Yes—non-toxic options available on request." },
  //     { id: "lan-4", title: "Can you do one-off makeovers?", content: "We offer seasonal cleanups and event-ready refreshes." }
  //   ]
  // }
];

const seen = new Map();
export const services = serviceslist.map((s, i) => {
  const base = toSlug(s.title || `service-${i + 1}`);
  const count = (seen.get(base) || 0) + 1;
  seen.set(base, count);
  const slug = count > 1 ? `${base}-${count}` : base;
  return { ...s, slug };
});

export const servicesData = [
  {
    id: 1,
    title: "House Cleaning",
    description:
      "Thorough home cleaning with attention to detail, ensuring every room is spotless and fresh.",
    image: Service1,
  },
  {
    id: 2,
    title: "Office Cleaning",
    description:
      "Professional office cleaning that maintains a tidy and hygienic work environment.",
    image: Service2,
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    description:
      "Deep cleaning of kitchen surfaces, appliances, and hard-to-reach areas for a safe and hygienic space.",
    image: Service3,
  },
  {
    id: 4,
    title: "Window Cleaning",
    description:
      "Crystal-clear window cleaning inside and out to improve brightness and curb appeal.",
    image: Service4,
  },
];

export const accordionData = [
  {
    id: "collapseOne",
    headingId: "headingOne",
    title: "Our Mission",
    content:
      "Our mission is to provide high-quality cleaning services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    title: "Our Vision",
    content:
      "Our vision is to continuously innovate and exceed client expectations. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "collapseThree",
    headingId: "headingThree",
    title: "Business Strategy",
    content:
      "Our strategy is to continuously improve customer satisfaction. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "collapseFour",
    headingId: "headingFour",
    title: "Marketing Policy",
    content:
      "We believe in customer-driven marketing strategies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Mike Anderson",
    designation: "Business Man",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    name: "Sarah Johnson",
    designation: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
  },
  {
    id: 3,
    quote:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    name: "James Smith",
    designation: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Emily Davis",
    designation: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4,
  },
  {
    id: 5,
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Robert Brown",
    designation: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    name: "Olivia Wilson",
    designation: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    name: "William Martinez",
    designation: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 4,
  },
  {
    id: 8,
    quote:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    name: "Sophia Taylor",
    designation: "HR Specialist",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    rating: 5,
  },
  {
    id: 9,
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    name: "Daniel Harris",
    designation: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    rating: 5,
  },
  {
    id: 10,
    quote:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    name: "Ava Lopez",
    designation: "Customer Success Manager",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4,
  },
];

export const timelineEvents = [
  {
    id: 1,
    title: "The Journey Begins",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "January 1, 2010",
    position: "left",
  },
  {
    id: 2,
    title: "Become Public Company",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "January 1, 2012",
    position: "right",
  },
  {
    id: 3,
    title: "Subscription Started",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "January 1, 2016",
    position: "left",
  },
];

export const features = [
  {
    icon: "bi-briefcase",
    heading: "Professional Excellence",
    description:
      "Highly-trained cleaning professionals delivering consistent and detailed results for every property.",
  },
  {
    icon: "bi-tools",
    heading: "Customized Solutions",
    description:
      "Flexible cleaning plans tailored for residential blocks, commercial buildings, and large-scale properties.",
  },
  {
    icon: "bi-building",
    heading: "Mass Property Cleaning",
    description:
      "End-to-end cleaning for apartments, villas, construction handovers, and facility maintenance.",
  },
  {
    icon: "bi-emoji-smile",
    heading: "Customer Satisfaction",
    description:
      "Reliable service with guaranteed quality and long-term client trust.",
  },
];

export const howItWorks = [
  {
    title: "Select Service",
    description:
      "Kobita amco laboris nisid ut aliquip ex ea com moido con sequat. Duis aute",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=200",
    number: "1",
  },
  {
    title: "Team Arrives",
    description:
      "Kobita amco laboris nisid ut aliquip ex ea com moido con sequat. Duis aute",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=200",
    number: "2",
  },
  {
    title: "Cleaning Process",
    description:
      "Kobita amco laboris nisid ut aliquip ex ea com moido con sequat. Duis aute",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=200",
    number: "3",
  },
  {
    title: "Satisfaction",
    description:
      "Kobita amco laboris nisid ut aliquip ex ea com moido con sequat. Duis aute",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
    number: "4",
  },
];

export const plans = [
  {
    title: "Basic Clean",
    price: 120,
    features: [
      "Laboris nisi ut aliquip modo",
      "Consea e dolor in reprehe",
      "Widert in voluptate velit esse",
    ],
    missingFeatures: [
      "Cillum dolore eu fugiat nulla",
      "Pariatt occaecat cupidatat",
    ],
  },
  {
    title: "Deep Clean",
    price: 220,
    features: [
      "Laboris nisi ut aliquip modo",
      "Consea e dolor in reprehe",
      "Widert in voluptate velit esse",
      "Cillum dolore eu fugiat nulla",
    ],
    missingFeatures: ["Pariatt occaecat cupidatat"],
    popular: true,
  },
  {
    title: "Clean & Sanitization",
    price: 320,
    features: [
      "Laboris nisi ut aliquip modo",
      "Consea e dolor in reprehe",
      "Widert in voluptate velit esse",
      "Cillum dolore eu fugiat nulla",
      "Pariatt occaecat cupidatat",
    ],
  },
];

export const qualityAssurance = [
  "Eco-friendly products and spotless results.",
  "Supervised by trained professionals.",
  "Strict safety and hygiene standards.",
  "Regular inspections and feedback.",
  "Your satisfaction, our priority.",
];

export const blogs = [
  {
    id: 1,
    title: "House Cleaning",
    description: "Eidunt ut labore et dol ore mana kobitay",
    image: Service1,
  },
  {
    id: 2,
    title: "Office Cleaning",
    description: "Professional office cleaning services.",
    image: Service2,
  },
  {
    id: 3,
    title: "Plumbing",
    description: "Reliable plumbing solutions for your home.",
    image: Service1,
  },
  {
    id: 4,
    title: "Kitchen Cleaning",
    description: "Sparkling clean kitchens with expert care.",
    image: Service2,
  },
  {
    id: 5,
    title: "Bathroom Cleaning",
    description: "Hygienic and deep bathroom cleaning.",
    image: Service1,
  },
  {
    id: 6,
    title: "Wardroom Cleaning",
    description: "Hygienic and deep bathroom cleaning.",
    image: Service2,
  },
  {
    id: 7,
    title: "House Cleaning1",
    description: "Eidunt ut labore et dol ore mana kobitay",
    image: Service1,
  },
  {
    id: 8,
    title: "Office Cleaning1",
    description: "Professional office cleaning services.",
    image: Service2,
  },
  {
    id: 9,
    title: "Plumbing1",
    description: "Reliable plumbing solutions for your home.",
    image: Service1,
  },
  {
    id: 10,
    title: "Kitchen Cleaning1",
    description: "Sparkling clean kitchens with expert care.",
    image: Service2,
  },
  {
    id: 11,
    title: "Bathroom Cleaning1",
    description: "Hygienic and deep bathroom cleaning.",
    image: Service1,
  },
  {
    id: 12,
    title: "Wardroom Cleaning1",
    description: "Hygienic and deep bathroom cleaning.",
    image: Service2,
  },
  {
    id: 13,
    title: "House Cleaning2",
    description: "Eidunt ut labore et dol ore mana kobitay",
    image: Service1,
  },
  {
    id: 14,
    title: "Office Cleaning2",
    description: "Professional office cleaning services.",
    image: Service2,
  },
  {
    id: 15,
    title: "Plumbing2",
    description: "Reliable plumbing solutions for your home.",
    image: Service1,
  },
  {
    id: 16,
    title: "Kitchen Cleaning2",
    description: "Sparkling clean kitchens with expert care.",
    image: Service2,
  },
  {
    id: 18,
    title: "Bathroom Cleaning2",
    description: "Hygienic and deep bathroom cleaning.",
    image: Service1,
  },
  {
    id: 19,
    title: "Wardroom Cleaning2",
    description: "Hygienic and deep bathroom cleaning.",
    image: Service2,
  },
];
