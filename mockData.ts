import { Emerald, Order, PolishingRequest, User } from '../types';

export const users: User[] = [
  {
    id: 'usr1',
    name: 'John Smith',
    email: 'john@example.com',
    isVerified: true,
    joined: '2023-04-15',
  },
  {
    id: 'usr2',
    name: 'Emily Johnson',
    email: 'emily@example.com',
    isVerified: true,
    joined: '2023-06-22',
  },
  {
    id: 'usr3',
    name: 'Current User',
    email: 'me@example.com',
    isVerified: true,
    joined: '2023-01-10',
  },
];

export const emeralds: Emerald[] = [
  {
    id: 'em1',
    title: 'Colombian Emerald - Vivid Green',
    description: 'Exceptional Colombian emerald with vivid green color and excellent clarity. This gem exhibits the classic deep green color that Colombian emeralds are famous for.',
    price: 12500,
    carat: 2.34,
    origin: 'Colombia',
    images: [
      '/emerald1.jpg',
      '/emerald2.jpg',
    ],
    seller: {
      id: 'usr1',
      name: 'John Smith',
      rating: 4.8,
      verified: true,
    },
    certification: {
      lab: 'GIA',
      certificateNumber: 'GIA7321567891',
      date: '2023-04-10',
      url: '#',
    },
    listed: '2023-05-12',
  },
  {
    id: 'em2',
    title: 'Zambian Emerald - Oval Cut',
    description: 'Beautiful Zambian emerald with rich green color and excellent luster. This oval cut showcases the stone\'s color and brilliance perfectly.',
    price: 8750,
    carat: 1.85,
    origin: 'Zambia',
    images: [
      '/emerald3.jpg',
      '/emerald4.jpg',
    ],
    seller: {
      id: 'usr2',
      name: 'Emily Johnson',
      rating: 4.7,
      verified: true,
    },
    certification: {
      lab: 'AGL',
      certificateNumber: 'AGL87654321',
      date: '2023-03-15',
      url: '#',
    },
    listed: '2023-04-20',
  },
  {
    id: 'em3',
    title: 'Brazilian Emerald - Emerald Cut',
    description: 'Rare Brazilian emerald with exceptional color saturation and clarity. The emerald cut highlights the stone\'s natural beauty and color zoning.',
    price: 6900,
    carat: 1.42,
    origin: 'Brazil',
    images: [
      '/emerald5.jpg',
      '/emerald2.jpg',
    ],
    seller: {
      id: 'usr1',
      name: 'John Smith',
      rating: 4.8,
      verified: true,
    },
    certification: {
      lab: 'GIA',
      certificateNumber: 'GIA9876543210',
      date: '2023-02-28',
      url: '#',
    },
    listed: '2023-03-10',
  },
  {
    id: 'em4',
    title: 'Colombian Emerald - Pear Shape',
    description: 'Stunning Colombian emerald with exceptional color and clarity. This pear-shaped gem has minimal inclusions and displays the coveted bluish-green hue.',
    price: 18700,
    carat: 3.21,
    origin: 'Colombia',
    images: [
      '/emerald3.jpg',
      '/emerald4.jpg',
    ],
    seller: {
      id: 'usr2',
      name: 'Emily Johnson',
      rating: 4.7,
      verified: true,
    },
    certification: {
      lab: 'GIA',
      certificateNumber: 'GIA1234987650',
      date: '2023-05-05',
      url: '#',
    },
    listed: '2023-06-01',
  },
  {
    id: 'em5',
    title: 'Zambian Emerald - Cushion Cut',
    description: 'Exquisite Zambian emerald with deep green color and excellent clarity. The cushion cut maximizes the stone\'s color while minimizing inclusions.',
    price: 9300,
    carat: 2.05,
    origin: 'Zambia',
    images: [
      '/emerald5.jpg',
      '/emerald1.jpg',
    ],
    seller: {
      id: 'usr1',
      name: 'John Smith',
      rating: 4.8,
      verified: true,
    },
    certification: {
      lab: 'AGL',
      certificateNumber: 'AGL76543210',
      date: '2023-04-25',
      url: '#',
    },
    listed: '2023-05-15',
  },
  {
    id: 'em6',
    title: 'Ethiopian Emerald - Round Brilliant',
    description: 'Rare Ethiopian emerald with excellent transparency and vibrant green color. The modern round brilliant cut adds sparkle to this exceptional gem.',
    price: 5800,
    carat: 1.15,
    origin: 'Ethiopia',
    images: [
      '/emerald2.jpg',
      '/emerald3.jpg',
    ],
    seller: {
      id: 'usr2',
      name: 'Emily Johnson',
      rating: 4.7,
      verified: true,
    },
    certification: {
      lab: 'GIA',
      certificateNumber: 'GIA5432178901',
      date: '2023-03-30',
      url: '#',
    },
    listed: '2023-04-10',
  },
];

export const polishingRequests: PolishingRequest[] = [
  {
    id: 'pr1',
    userId: 'usr3',
    emeraldId: 'em2',
    customUpload: false,
    polishType: 'premium',
    status: 'in-progress',
    requestDate: '2023-07-15',
    scheduledDate: '2023-07-20',
    notes: 'Please focus on improving clarity while maintaining carat weight.',
  },
  {
    id: 'pr2',
    userId: 'usr3',
    customUpload: true,
    polishType: 'standard',
    status: 'pending',
    requestDate: '2023-07-18',
    notes: 'Family heirloom emerald, please handle with extra care.',
  },
];

export const orders: Order[] = [
  {
    id: 'ord1',
    emeraldId: 'em1',
    buyerId: 'usr3',
    sellerId: 'usr1',
    price: 12500,
    status: 'delivered',
    orderDate: '2023-06-10',
    paymentMethod: 'Credit Card',
    shippingAddress: '123 Main St, New York, NY 10001',
  },
  {
    id: 'ord2',
    emeraldId: 'em3',
    buyerId: 'usr3',
    sellerId: 'usr1',
    price: 6900,
    status: 'shipped',
    orderDate: '2023-07-05',
    paymentMethod: 'Bank Transfer',
    shippingAddress: '123 Main St, New York, NY 10001',
  },
];

export const userListings = [
  {
    id: 'em7',
    title: 'Colombian Emerald - Octagon Cut',
    description: 'Exquisite Colombian emerald with vibrant green color and excellent clarity.',
    price: 14200,
    carat: 2.75,
    origin: 'Colombia',
    images: [
      '/emerald4.jpg',
    ],
    status: 'active',
    listed: '2023-06-25',
    views: 42,
    inquiries: 3,
  },
  {
    id: 'em8',
    title: 'Brazilian Emerald - Square Cut',
    description: 'Beautiful Brazilian emerald with rich green color and minimal inclusions.',
    price: 7500,
    carat: 1.65,
    origin: 'Brazil',
    images: [
      '/emerald5.jpg',
    ],
    status: 'pending',
    listed: '2023-07-10',
    views: 18,
    inquiries: 1,
  },
];

export const origins = [
  'Colombia',
  'Zambia',
  'Brazil',
  'Ethiopia',
  'Russia',
  'Afghanistan',
  'Pakistan',
];

export const polishTypes = [
  { id: 'standard', name: 'Standard Polish', price: 200, description: 'Basic polish to enhance clarity and shine', duration: '3-5 days' },
  { id: 'premium', name: 'Premium Polish', price: 350, description: 'Advanced polishing techniques with superior results', duration: '5-7 days' },
  { id: 'custom', name: 'Custom Polish', price: 500, description: 'Tailored approach for unique stones with special requirements', duration: '7-10 days' },
];