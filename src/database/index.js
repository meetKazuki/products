import { hashPassword } from '../helpers/auth';

const DB = {
  users: [
    {
      id: 1,
      firstName: 'Marya',
      email: 'mwysome0@epa.gov',
      password: hashPassword('12345678'),
      mobileNumber: '8621646611',
      role: 'attendant',
      imageUrl: 'http://dummyimage.com/226x161.png/dddddd/000000'
    },
    {
      id: 2,
      firstName: 'Richmound',
      email: 'rheaphy9@123-reg.co.uk',
      password: hashPassword('adminsecret'),
      mobileNumber: '6385449372',
      role: 'admin',
      imageUrl: 'http://dummyimage.com/176x158.png/dddddd/000000'
    }
  ],
  products: [
    {
      id: 1,
      name: 'Appetizer - Mushroom Tart',
      category: 'fashion',
      price: '$4.79',
      quantity: 64,
      description: 'curae duis faucibus accumsan',
      imageUrl: 'http://dummyimage.com/223x169.png/dddddd/000000'
    },
    {
      id: 2,
      name: 'Muffin Mix - Raisin Bran',
      category: 'gaming',
      price: '$8.10',
      quantity: 94,
      description: 'ut erat',
      imageUrl: 'http://dummyimage.com/241x188.bmp/5fa2dd/ffffff'
    },
    {
      id: 3,
      name: 'Remy Red',
      category: 'computing',
      price: '$1.33',
      quantity: 95,
      description: 'massa id nisl',
      imageUrl: 'http://dummyimage.com/146x146.png/5fa2dd/ffffff'
    },
    {
      id: 4,
      name: 'Pasta - Rotini, Colour, Dry',
      category: 'grocery',
      price: '$9.49',
      quantity: 43,
      description: 'bibendum imperdiet nullam',
      imageUrl: 'http://dummyimage.com/197x216.jpg/ff4444/ffffff'
    },
    {
      id: 5,
      name: 'Yoplait Drink',
      category: 'electronics',
      price: '$4.17',
      quantity: 54,
      description: 'sit amet',
      imageUrl: 'http://dummyimage.com/174x224.png/ff4444/ffffff'
    },
    {
      id: 6,
      name: 'Vinegar - Sherry',
      category: 'computing',
      price: '$2.16',
      quantity: 33,
      description: 'id mauris vulputate',
      imageUrl: 'http://dummyimage.com/197x177.png/dddddd/000000'
    },
    {
      id: 7,
      name: 'Oven Mitts 17 Inch',
      category: 'electronics',
      price: '$2.46',
      quantity: 13,
      description: 'magnis dis',
      imageUrl: 'http://dummyimage.com/225x239.bmp/ff4444/ffffff'
    },
    {
      id: 8,
      name: 'Beans - French',
      category: 'gaming',
      price: '$5.08',
      quantity: 82,
      description: 'sit amet lobortis sapien sapien',
      imageUrl: 'http://dummyimage.com/221x193.jpg/cc0000/ffffff'
    },
    {
      id: 9,
      name: 'Cheese - Taleggio D.o.p.',
      category: 'gaming',
      price: '$7.58',
      quantity: 79,
      description: 'in imperdiet et',
      imageUrl: 'http://dummyimage.com/113x195.png/ff4444/ffffff'
    },
    {
      id: 10,
      name: 'Wine - Soave Folonari',
      category: 'grocery',
      price: '$0.97',
      quantity: 37,
      description: 'suspendisse ornare',
      imageUrl: 'http://dummyimage.com/107x170.bmp/cc0000/ffffff'
    }
  ],
  sales: [
    {
      id: 1,
      productId: 9,
      staffId: 1
    },
    {
      id: 2,
      productId: 9,
      staffId: 1
    },
    {
      id: 3,
      productId: 9,
      staffId: 1
    },
    {
      id: 4,
      productId: 9,
      staffId: 2
    },
    {
      id: 5,
      productId: 5,
      staffId: 1
    },
    {
      id: 6,
      productId: 10,
      staffId: 1
    },
    {
      id: 7,
      productId: 7,
      staffId: 2
    },
    {
      id: 8,
      productId: 4,
      staffId: 2
    },
    {
      id: 9,
      productId: 5,
      staffId: 2
    },
    {
      id: 10,
      productId: 2,
      staffId: 1
    }
  ],
};

export default DB;
