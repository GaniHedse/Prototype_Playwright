# Playwright TypeScript Automation Framework

## Overview

This framework is built using **Playwright + TypeScript** following the **Page Object Model (POM)** design pattern. It supports UI and API automation, external test data management, logging, reporting, and reusable utility methods.

---

# Technology Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Allure Reports
- CSV Data Reader
- JSON Data Reader
- Custom Logger

---

# Project Structure

```text
PLAYWRIGHT_PROTOTYPE
│
├── .github
│
├── allure-results
│
├── baseMethods
│   └── BaseMethods.spec.ts
│
├── data
│   ├── LoginData.json
│   └── UserData.csv
│
├── logs
│   └── execution.log
│
├── pages
│   │
│   ├── API_Pages
│   │
│   └── UI_Pages
│       ├── AlertPage.ts
│       ├── BasicAuthPage.ts
│       ├── Checkboxpage.ts
│       ├── DropdownPage.ts
│       └── RightclickPage.ts
│
├── playwright-report
│
├── reports
│
├── test-results
│
├── tests
│   ├── API
│   └── UI
│
├── utils
│   ├── CsvReader.ts
│   ├── JsonReader.ts
│   └── Logger.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── test.config.ts
└── README.md
```

---

# Folder Description

## baseMethods

Contains reusable methods and common actions used across multiple test cases.

### Example:
- Click
- Fill Text
- Wait Methods
- Assertions

---

## data

Stores external test data.

### Files:
- **LoginData.json** → JSON-based test data
- **UserData.csv** → CSV-based test data

---

## logs

Stores framework execution logs.

### File:
- **execution.log** → Captures test execution details and debugging information.

---

## pages

Contains all Page Object Model classes.

### API_Pages
Stores API-related page/service classes.

### UI_Pages
Stores UI page classes.

Examples:

| Page | Description |
|--------|------------|
| AlertPage.ts | Alert handling |
| BasicAuthPage.ts | Basic Authentication |
| Checkboxpage.ts | Checkbox operations |
| DropdownPage.ts | Dropdown operations |
| RightclickPage.ts | Right Click operations |

---

## tests

Contains all test scripts.

### UI
UI automation test cases.

### API
API automation test cases.

---

## utils

Contains reusable utility classes.

### CsvReader.ts
Reads test data from CSV files.

### JsonReader.ts
Reads test data from JSON files.

### Logger.ts
Custom logger implementation for framework execution.

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd PLAYWRIGHT_PROTOTYPE
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running Tests

## Execute All Tests

```bash
npx playwright test
```

## Execute Specific Test

```bash
npx playwright test tests/UI/TestName.spec.ts
```

## Execute in Headed Mode

```bash
npx playwright test --headed
```

## Execute on Specific Browser

```bash
npx playwright test --project=chromium
```

---

# Reporting

## Playwright HTML Report

Generate report:

```bash
npx playwright show-report
```

Report Location:

```text
playwright-report/
```

---

## Allure Report

Generate Allure Report:

```bash
allure generate allure-results --clean -o allure-report
```

Open Allure Report:

```bash
allure open allure-report
```

---

# Logging

Execution logs are automatically generated under:

```text
logs/execution.log
```

Logs help with:
- Debugging failures
- Tracking execution flow
- Capturing framework events

---

# Test Data Management

The framework supports:

### JSON Data

```json
{
  "username": "testuser",
  "password": "password123"
}
```

### CSV Data

```csv
username,password
testuser,password123
```

---

# Framework Features

✅ Playwright with TypeScript

✅ Page Object Model (POM)

✅ API Testing Support

✅ UI Testing Support

✅ CSV Data Reader

✅ JSON Data Reader

✅ Custom Logging

✅ Allure Reporting

✅ HTML Reporting

✅ Reusable Base Methods

✅ Easy Maintenance


