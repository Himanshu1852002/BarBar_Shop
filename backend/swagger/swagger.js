import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Barbershop API',
      version: '1.0.0',
      description: 'Complete API documentation for Barbershop management system with user authentication, booking management, employee management, and admin operations',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'User ID' },
            name: { type: 'string', description: 'User full name' },
            email: { type: 'string', format: 'email', description: 'User email address' },
            phone: { type: 'string', description: 'User phone number' },
            image: { type: 'string', description: 'User profile image URL' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Admin: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Admin ID' },
            name: { type: 'string', description: 'Admin full name' },
            email: { type: 'string', format: 'email', description: 'Admin email address' },
            phone: { type: 'string', description: 'Admin phone number' },
            role: { type: 'string', default: 'admin' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        Employee: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Employee ID' },
            name: { type: 'string', description: 'Employee full name' },
            email: { type: 'string', format: 'email', description: 'Employee email address' },
            phone: { type: 'string', description: 'Employee phone number' },
            position: { type: 'string', description: 'Employee position/role' },
            experience: { type: 'string', description: 'Years of experience' },
            specialization: { type: 'string', description: 'Employee specialization' },
            image: { type: 'string', description: 'Employee profile image URL' },
            isActive: { type: 'boolean', default: true },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        Booking: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Booking ID' },
            userId: { type: 'string', description: 'Customer user ID' },
            employeeId: { type: 'string', description: 'Assigned employee ID' },
            customerName: { type: 'string', description: 'Customer name' },
            customerPhone: { type: 'string', description: 'Customer phone' },
            service: { type: 'string', description: 'Requested service' },
            date: { type: 'string', format: 'date', description: 'Booking date' },
            time: { type: 'string', description: 'Booking time slot' },
            status: { 
              type: 'string', 
              enum: ['pending', 'confirmed', 'completed', 'cancelled'],
              description: 'Booking status'
            },
            notes: { type: 'string', description: 'Additional notes' },
            price: { type: 'number', description: 'Service price' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: { type: 'string', description: 'Error message' },
            error: { type: 'string', description: 'Error details' },
          },
        },
        Success: {
          type: 'object',
          properties: {
            message: { type: 'string', description: 'Success message' },
            data: { type: 'object', description: 'Response data' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js', './controllers/**/*.js'],
};

const specs = swaggerJSDoc(options);

export { swaggerUi, specs };