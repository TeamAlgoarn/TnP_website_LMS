import inf from '../assets/images/Companies/Infosys.jpg';
import tcs from '../assets/images/Companies/TCS-Logo.jpg';
import hcl from '../assets/images/Companies/Hcl.jpg';
import wipro from '../assets/images/Companies/wipro.jpg';
import tm from '../assets/images/Companies/Tech-Mahindra-flm-job-notifications.webp';
import acc from '../assets/images/Companies/Accenture.webp';
import cog from '../assets/images/Companies/cog.jpg';
import capg from '../assets/images/Companies/capgemini.jpg';
import ibm from '../assets/images/Companies/OIP.webp';
import ms from '../assets/images/Companies/mslogo.jpg';
import ama from '../assets/images/Companies/amazonINlogo.jpg';
import ggl from '../assets/images/Companies/Google.jpg';
import dell from '../assets/images/Companies/Dell_Logo_v_2021.webp';
import intel from '../assets/images/Companies/Intel.jpg';
import oracle from '../assets/images/Companies/OIP (1).webp';

// testimonials
import priya from '../assets/images/Testimonials/priya.jpeg';
import rajesh from '../assets/images/Testimonials/rajesh.jpeg';
import anjali from '../assets/images/Testimonials/anjali.jpeg';
import arun from '../assets/images/Testimonials/arun.jpeg';
import sneha from '../assets/images/Testimonials/sneha.jpeg';
import vikram from '../assets/images/Testimonials/vikram.jpeg';



export const placementsData = {
  stats: [
    { number: 78, suffix: '%', label: 'Placement Rate', icon: 'TrendingUp' },
    { number: 9, suffix: 'LPA', label: 'Average Package', icon: 'Award', prefix: '₹' },
    { number: 120, suffix: '+', label: 'Partner Companies', icon: 'Building2' },
    { number: 850, suffix: '+', label: 'Alumni Placed', icon: 'Users' },
  ],

  companies: [
    {
      name: "TCS",
      logo: tcs,
      tier: 'Premium'
    },
    {
      name: "Infosys",
      logo: inf,
      tier: 'Premium'
    },
    {
      name: "Wipro",
      logo: wipro,
      tier: 'Premium'
    },
    {
      name: "HCL Technologies",
      logo: hcl,
      tier: 'Premium'
    },
    {
      name: "Tech Mahindra",
      logo: tm,
      tier: 'Premium'
    },
    {
      name: "Accenture",
      logo: acc,
      tier: 'Premium'
    },
    {
      name: "Cognizant",
      logo: cog,
      tier: 'Premium'
    },
    {
      name: "Capgemini",
      logo: capg,
      tier: 'Premium'
    },
    {
      name: "IBM India",
      logo: ibm,
      tier: 'Premium'
    },
    {
      name: "Microsoft India",
      logo: ms,
      tier: 'Premium'
    },
    {
      name: "Amazon India",
      logo: ama,
      tier: 'Premium'
    },
    {
      name: "Google India",
      logo: ggl,
      tier: 'Premium'
    },
    {
      name: "Dell India",
      logo: dell,
      tier: 'Premium'
    },
    {
      name: "Intel India",
      logo: intel,
      tier: 'Premium'
    },
    {
      name: "Oracle India",
      logo: oracle,
      tier: 'Premium'
    },
    

  ],

  successStories: [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Infosys',
      package: '₹12 LPA',
      // image: priya,
      story: 'From a small town in Uttar Pradesh to Infosys Bangalore. Learnovia\'s training and placement support helped me achieve my dreams in just 6 months.',
      course: 'Full Stack Development',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Data Analyst',
      company: 'TCS',
      package: '₹9 LPA',
      image: rajesh,
      story: 'As a mechanical engineer, I never thought I could switch to IT. Learnovia made it possible with their structured Data Science program and dedicated placement cell.',
      course: 'Data Science & Analytics',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Cloud Engineer',
      company: 'Wipro',
      package: '₹14 LPA',
      image: anjali,
      story: 'The AWS certification and real-time projects at Learnovia gave me the confidence to crack Wipro interviews. Got placed even before course completion!',
      course: 'Cloud Computing & DevOps',
      rating: 5,
    },
    {
      name: 'Arun Mehta',
      role: 'Mobile Developer',
      company: 'Tech Mahindra',
      package: '₹11 LPA',
      image: arun,
      story: 'Coming from a non-IT background, Learnovia\'s mobile development course was perfectly structured. The placement team ensured I got multiple offers.',
      course: 'Mobile App Development',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      role: 'Cybersecurity Analyst',
      company: 'HCL Technologies',
      package: '₹13 LPA',
      image: sneha,
      story: 'The cybersecurity program at Learnovia is industry-relevant. Got placed at HCL with a great package and working on exciting security projects.',
      course: 'Cybersecurity Specialist',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'UI/UX Designer',
      company: 'Accenture',
      package: '₹10 LPA',
      image: vikram,
      story: 'Learnovia helped me transition from graphic design to UI/UX. The portfolio building sessions and mock interviews were incredibly helpful for Accenture.',
      course: 'UI/UX Design',
      rating: 5,
    }
  ],

  placementProcess: [
    {
      step: '1',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of technical and soft skills to identify strengths and areas for improvement.',
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume creation with industry-specific keywords and achievement highlighting.',
    },
    {
      step: '3',
      title: 'Interview Prep',
      description: 'Mock interviews, technical assessments, and behavioral question preparation.',
    },
    {
      step: '4',
      title: 'Company Matching',
      description: 'Strategic matching with partner companies based on skills, preferences, and career goals.',
    },
    {
      step: '5',
      title: 'Offer Negotiation',
      description: 'Support in salary negotiation and contract terms to ensure the best possible package.',
    },
  ],

  salaryRanges: [
    {
      title: 'Entry Level (0-2 years)',
      roles: [
        { name: 'Software Developer', range: '₹6 - ₹12 LPA' },
        { name: 'Data Analyst', range: '₹5 - ₹10 LPA' },
        { name: 'UI/UX Designer', range: '₹4 - ₹8 LPA' },
        { name: 'Cloud Associate', range: '₹7 - ₹13 LPA' }
      ]
    },
    {
      title: 'Mid Level (2-5 years)',
      roles: [
        { name: 'Senior Developer', range: '₹12 - ₹20 LPA' },
        { name: 'Data Scientist', range: '₹15 - ₹25 LPA' },
        { name: 'Product Designer', range: '₹10 - ₹18 LPA' },
        { name: 'DevOps Engineer', range: '₹14 - ₹22 LPA' }
      ]
    },
    {
      title: 'Senior Level (5+ years)',
      roles: [
        { name: 'Tech Lead', range: '₹22 - ₹35 LPA' },
        { name: 'Principal Engineer', range: '₹30 - ₹50 LPA' },
        { name: 'Design Director', range: '₹20 - ₹32 LPA' },
        { name: 'Solutions Architect', range: '₹25 - ₹40 LPA' }
      ]
    }
  ]
};

// Additional data from your placements.js file
export const placements = {
  companies: [
    {
      name: "Google",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
      tier: 'Premium'
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      tier: 'Premium'
    },
    {
      name: "TCS",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/TCS-Symbol.png",
      tier: 'Premium'
    },
    {
      name: "Infosys",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Infosys-Logo.png",
      tier: 'Premium'
    },
    {
      name: "Accenture",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png",
      tier: 'Premium'
    },
    {
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      tier: 'Premium'
    }
  ],

  testimonials: [
    {
      student: "Rahul Sharma",
      course: "Full Stack Development",
      company: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      message: "Great course! I got placed within 3 weeks of completion."
    },
    {
      student: "Sneha Verma",
      course: "DSA Bootcamp",
      company: "Google",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
      message: "Helped me crack interviews with top product companies."
    },
    {
      student: "Vikram Iyer",
      course: "DevOps Essentials",
      company: "TCS",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/TCS-Symbol.png",
      message: "Very practical and industry-aligned curriculum."
    }
  ],

  stats: {
    placementRate: "92%",
    highestPackage: "18 LPA",
    averagePackage: "6.5 LPA",
    totalCompanies: 40
  }
};