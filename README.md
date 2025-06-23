![npm](https://img.shields.io/npm/v/safe-async-ts)
![downloads](https://img.shields.io/npm/dm/safe-async-ts)
![license](https://img.shields.io/npm/l/safe-async-ts)

# safe-async-ts

A tiny utility to safely handle asynchronous calls in TypeScript using tuple destructuring — without try/catch everywhere.

## Install

```bash
npm install safe-async-ts
```

## Usage

```ts
import { safeAsync } from 'safe-async-ts';

const [err, data] = await safeAsync(apiCall());

if (err) {
  // handle error
} else {
  // use data
}
```

## 📄 License

MIT © Sanjib Kumar Mandal
