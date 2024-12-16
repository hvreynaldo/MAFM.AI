import { aiSpaceManagement } from './articles/ai-space-management';
import { aiCmmsIntegration } from './articles/ai-cmms-integration';
import { aiTicketAutomation } from './articles/ai-ticket-automation';
import { aiCostReduction } from './articles/ai-cost-reduction';
import { futureAiAutomation } from './articles/future-ai-automation';

export const blogPosts = [
  {
    id: 'ai-space-management',
    title: aiSpaceManagement.title,
    excerpt: "Discover how AI helps businesses optimize their space usage, reduce costs, and increase efficiency with real-world examples.",
    content: aiSpaceManagement.content,
    author: aiSpaceManagement.author,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    date: "Mar 5, 2024",
    readTime: "6 min",
    category: "Case Studies"
  },
  {
    id: 'ai-cmms-integration',
    title: aiCmmsIntegration.title,
    excerpt: "Explore how AI integrates with Computerized Maintenance Management Systems to prevent downtime and improve maintenance workflows.",
    content: aiCmmsIntegration.content,
    author: aiCmmsIntegration.author,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    date: "Mar 15, 2024",
    readTime: "6 min",
    category: "Implementation Guides"
  },
  {
    id: 'ai-ticket-automation',
    title: aiTicketAutomation.title,
    excerpt: "Learn how AI-powered ticketing systems reduce response times, improve team satisfaction, and boost productivity.",
    content: aiTicketAutomation.content,
    author: aiTicketAutomation.author,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "Mar 12, 2024",
    readTime: "8 min",
    category: "AI Workflows"
  },
  {
    id: 'ai-cost-reduction',
    title: aiCostReduction.title,
    excerpt: "From automating repetitive tasks to improving decision-making, see how AI helps businesses cut costs and grow smarter.",
    content: aiCostReduction.content,
    author: aiCostReduction.author,
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
    date: "Mar 10, 2024",
    readTime: "7 min",
    category: "Case Studies"
  },
  {
    id: 'future-ai-automation',
    title: futureAiAutomation.title,
    excerpt: "A forward-looking view on how AI will continue to reshape business operations and drive innovation across industries.",
    content: futureAiAutomation.content,
    author: futureAiAutomation.author,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    date: "Mar 8, 2024",
    readTime: "5 min",
    category: "Industry Insights"
  }
];