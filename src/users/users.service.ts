import { Injectable } from '@nestjs/common';

let users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    phone: '+1-555-123-4567',
    age: 34,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',
    phone: '+1-555-234-5678',
    age: 28,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'moderator',
    phone: '+1-555-345-6789',
    age: 41,
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    role: 'user',
    phone: '+1-555-456-7890',
    age: 23,
  },
  {
    id: 5,
    name: 'Carol White',
    email: 'carol.white@example.com',
    role: 'admin',
    phone: '+1-555-567-8901',
    age: 38,
  },
  {
    id: 6,
    name: 'David Green',
    email: 'david.green@example.com',
    role: 'user',
    phone: '+1-555-678-9012',
    age: 30,
  },
  {
    id: 7,
    name: 'Emily Black',
    email: 'emily.black@example.com',
    role: 'moderator',
    phone: '+1-555-789-0123',
    age: 35,
  },
  {
    id: 8,
    name: 'Frank Wilson',
    email: 'frank.wilson@example.com',
    role: 'admin',
    phone: '+1-555-890-1234',
    age: 45,
  },
  {
    id: 9,
    name: 'Grace Lee',
    email: 'grace.lee@example.com',
    role: 'user',
    phone: '+1-555-901-2345',
    age: 27,
  },
  {
    id: 10,
    name: 'Hannah King',
    email: 'hannah.king@example.com',
    role: 'user',
    phone: '+1-555-012-3456',
    age: 29,
  },
];

@Injectable()
export class UsersService {
  findAll(role?: 'user' | 'moderator' | 'admin') {
    if (role) {
      return users.filter((user) => user.role === role);
    }
    return users;
  }

  findOne(id: string) {
    return users.find((user) => user.id === +id);
  }

  create(userData: {
    name: string;
    email: string;
    phone: string;
    age: number;
  }) {
    const { name, email, phone, age } = userData;
    if (!name || !email || !phone! || !age) {
      return {
        message: 'All fields are required!',
      };
    }
    const id = users.length + 1;
    users.push({
      id,
      role: 'user',
      ...userData,
    });

    return users.find((user) => user.id === id);
  }

  update(
    id: string,
    userData: {
      name?: string;
      email?: string;
      phone?: string;
      age?: number;
      role?: string;
    },
  ) {
    const user = users.find((user) => user.id === +id);
    if (!user) {
      return {
        message: 'user does not exist!',
      };
    }
    users = users.map((user) => {
      if (user.id === +id) {
        return {
          ...user,
          ...userData,
        };
      } else {
        return user;
      }
    });
    return {
      message: 'user updated successfully!',
      ...userData,
    };
  }

  delete(id: string) {
    users = users.filter((user) => user.id !== +id);
    return {
      message: 'Deleted',
    };
  }
}
