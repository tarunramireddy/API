# 🧪 API Test Suite

A simple and clean Playwright-based API testing framework.

## 🚀 Features

- ✅ **HTML & JSON Reporting**: Clean test reports with Playwright
- 🎯 **Type Safety**: Full TypeScript support
- 🔄 **Retry Logic**: Configurable retry strategies
- 📊 **Performance Tracking**: Basic response time monitoring

## 📁 Project Structure

```
├── lib/
│   ├── api/
│   │   └── request-wrapper.ts      # HTTP request wrapper
│   └── config/
│       └── env.ts                  # Environment configuration
├── tests/
│   └── api/
│       └── users.spec.ts           # API tests for users endpoint
├── playwright.config.ts            # Playwright configuration
└── package.json                    # Dependencies and scripts
```

## 🛠️ Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd API

# Install dependencies
npm install

# Set up environment (optional)
cp .env.example .env
# Edit .env with your API configuration
```

## 🧪 Running Tests

### Commands

```bash
# Run all tests
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in UI mode
npm run test:ui

# View reports
npm run report

# Clean reports
npm run clean
```

## 📊 Reports

### Available Reports

1. **Playwright HTML Report** - `playwright-report/index.html`
   - Detailed test execution logs
   - Screenshots and traces on failures
   - Interactive test timeline

2. **JSON Report** - `test-results/results.json`
   - Machine-readable test results
   - Integration with CI/CD pipelines

### Viewing Reports

```bash
# Open Playwright HTML report
npm run report
```

## 🔧 Configuration

### Environment Variables (.env)
```env
BASE_URL=https://reqres.in
API_KEY=your_api_key_here
```

## 📚 API Documentation

### Users API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users?page={page}` | Get paginated users list |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/{id}` | Update existing user |
| DELETE | `/api/users/{id}` | Delete user |

### Request/Response Examples

#### Create User
```bash
POST /api/users
Content-Type: application/json
x-api-key: your-api-key

{
  "name": "morpheus",
  "job": "leader"
}
```

Response:
```json
{
  "name": "morpheus", 
  "job": "leader",
  "id": "123",
  "createdAt": "2025-11-22T10:30:00.000Z"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-test`
3. Add tests with proper annotations
4. Run the test suite: `npm test`
5. Commit changes: `git commit -am 'Add new API test'`
6. Push to branch: `git push origin feature/new-test`
7. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Playwright Documentation](https://playwright.dev/)
- [ReqRes API Documentation](https://reqres.in/)
- [Allure Reporting](https://docs.qameta.io/allure/)