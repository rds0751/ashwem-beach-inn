export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://corp.ashvembeachinn.com';

type SeoConfig = {
  title: string;
  description: string;
  image: string;
  type?: 'website' | 'article';
};

export const DEFAULT_SEO: SeoConfig = {
  title: 'Ashwem Beach Inn | Corporate Offsites & Leadership Retreats in Goa',
  description:
    'Host your next corporate offsite, leadership retreat, or startup getaway at Ashwem Beach Inn, Goa. Luxury rooms, meeting spaces, and beachside vibes.',
  image: '/rooms/hotel-view-and-swimming.jpg',
  type: 'website',
};

export const ROUTE_SEO: Record<string, SeoConfig> = {
  '/': DEFAULT_SEO,
  '/retreats': {
    title: 'Goa Corporate Retreat Planning | Ashwem Beach Inn',
    description:
      'Plan high-impact offsites in Goa with tailored schedules, team-size options, and logistics support at Ashwem Beach Inn.',
    image: '/events/ideal-venue-for-corporate-events-in-goa.jpg',
  },
  '/pricing': {
    title: 'Corporate Retreat Pricing in Goa | Ashwem Beach Inn',
    description:
      'Explore transparent per-person retreat packages and estimate your team budget using our corporate retreat cost calculator.',
    image: '/rooms/736139587.jpg',
  },
  '/book': {
    title: 'Book Your Stay or Corporate Offsite | Ashwem Beach Inn',
    description:
      'Reserve rooms instantly or submit a corporate inquiry for custom offsite planning at Ashwem Beach Inn in North Goa.',
    image: '/rooms/our-spot-on-ashvem-beach.jpg',
  },
  '/experiences': {
    title: 'Team Experiences & Activities in Goa | Ashwem Beach Inn',
    description:
      'Discover curated team experiences from workshops to beachside networking that elevate your corporate retreat in Goa.',
    image: '/events/main.webp',
  },
  '/rooms': {
    title: 'Rooms & Suites Near Ashvem Beach | Ashwem Beach Inn',
    description:
      'Browse boutique room categories, amenities, and rates designed for comfortable workations and relaxing team stays.',
    image: '/rooms/ashvem-beach-inn.jpg',
  },
  '/gallery': {
    title: 'Resort Gallery | Ashwem Beach Inn Goa',
    description:
      'View photos of rooms, pool areas, team events, and the Ashvem beachside atmosphere before planning your retreat.',
    image: '/events/Elevate-Your-Corporate-Event.jpeg',
  },
};
