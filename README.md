# ASTUDIO Task


## Features

### Users Management
- Display users in a data table format
- Advanced filtering options:
  - Search by name
  - Search by email
  - Filter by gender
  - Filter by date of birth
- Pagination support
- Adjustable items per page
- Real-time search functionality

### Products Management
- Display products in a data table format
- Advanced filtering options:
  - Search by product name
  - Filter by category
- Pagination support
- Adjustable items per page
- Display of detailed product information including:
  - Price
  - Rating
  - Stock
  - Availability Status
  - Return Policy
  - Shipping Information
  - Warranty Information

## Tech Stack

- **Frontend Framework**: Next.js
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **HTTP Client**: Axios
- **API**: DummyJSON

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd astudio-task
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/            # Reusable UI components
├── hooks/                # Custom React hooks
├── models/               # TypeScript interfaces and types
└── redux/               # Redux store, slices, and state management
```

## API Integration

The application uses the DummyJSON API for demonstration purposes:
- Users API: https://dummyjson.com/users
- Products API: https://dummyjson.com/products

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
