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
  products: [],
  sales: [],
};

export default DB;
