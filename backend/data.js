import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'PhamTuyen',
      email: 'tuynphmanh2302@gmail.com',
      password: bcrypt.hashSync('020202'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    //Art 1
    {
      //_id: '1',
      name: 'A beautiful Girl Portrait',
      slug: 'a-beautiful-girl-portrait',
      category: 'portrait',
      image: '/images/beauty.jpg',
      price: 199,
      countInStock: 5,
      author: 'Pham Tuyen',
      rating: 4.5,
      numReviews: 45,
      description: 'A girl is very charming with her eyes contact!',
    },
    //Art 2
    {
      //_id: '2',
      name: 'A Sad girl',
      slug: 'a-sad-girl',
      category: 'portrait',
      image: '/images/sad-girl.jpg',
      price: 199,
      countInStock: 5,
      author: 'Pham Tuyen',
      rating: 3.9,
      numReviews: 21,
      description: 'A sad girl is sitting on the chair.',
    },
    //Art 3
    {
      //_id: '3',
      name: 'Hands and rope',
      slug: 'hands-and-rope',
      category: 'art',
      image: '/images/rope.jpg',
      price: 299,
      countInStock: 5,
      author: 'Pham Tuyen',
      rating: 4,
      numReviews: 18,
      description: 'The Jail but beauty!',
    },
    //Art 4
    {
      //_id: '4',
      name: 'Mask',
      slug: 'mask',
      category: 'art',
      image: '/images/sad.jpg',
      price: 349,
      countInStock: 0,
      author: 'Pham Tuyen',
      rating: 5,
      numReviews: 55,
      description: 'What a sentimental art!',
    },
    //Art 5
    {
      //_id: '5',
      name: 'Lying',
      slug: 'lying',
      category: 'art',
      image: '/images/lie.jpg',
      price: 49,
      countInStock: 8,
      author: 'Pham Tuyen',
      rating: 3.5,
      numReviews: 5,
      description: 'No hope!',
    },
    //Art 6
    {
      //_id: '6',
      name: 'Silience',
      slug: 'silince',
      category: 'art',
      image: '/images/silience.jpg',
      price: 89,
      countInStock: 3,
      author: 'Pham Tuyen',
      rating: 4.2,
      numReviews: 15,
      description: 'Love or Toxic?',
    },
  ],
};
export default data;
