<div align="center">

# React Tailwind Visible Motion

🎯 Add elegant animations to your React components with Tailwind CSS, automatically triggered on scroll.

[![npm version](https://img.shields.io/npm/v/react-tailwind-visible-motion.svg?style=flat)](https://www.npmjs.com/package/react-tailwind-visible-motion)
![yarn-compatible](https://img.shields.io/badge/yarn-compatible-brightgreen)
[![GitHub](https://img.shields.io/badge/GitHub-View%20Repo-black?logo=github)](https://github.com/ange0/react-tailwind-visible-motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 👀 Live Demo

Check out [What Job](https://www.what-job.com) for a live example of this library in action.  
You’ll find this kind of animation on many popular websites — for example, [WhatsApp](https://www.whatsapp.com).

![Animated demo](./assets/demo.gif)

## ✨ Features

- 🚀 **Simple Setup** - Ready to use in seconds
- 🎨 **Tailwind Compatible** - Use all Tailwind CSS animation classes
- 🔄 **Smart Animations** - Triggers only once per element
- 📱 **Responsive** - Works perfectly on all devices
- 🛠️ **Highly Customizable** - Configure your own animations
- 💪 **TypeScript** - Built-in TypeScript support

## 🚀 Installation

```bash
npm install react-tailwind-visible-motion
# or
yarn add react-tailwind-visible-motion
```

## 📖 Usage

```tsx
import { ReactTailwindVisibleMotion } from "react-tailwind-visible-motion";

function App() {
  return (
    <ReactTailwindVisibleMotion 
      id="my-element"
      onInTransitionMode="translate-y-0 opacity-100 delay-[200ms] duration-[1000ms]"
      onOutTransitionMode="translate-y-20 opacity-0 duration-100"
      className="your-custom-classes"
    >
        <p>This content will animate when it becomes visible!</p>
    </ReactTailwindVisibleMotion>
  );
}
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | (required) | Unique identifier for the element |
| `children` | `React.ReactNode` | (required) | Content to be animated |
| `onInTransitionMode` | `string` | `"translate-y-0 opacity-100 delay-[200ms] duration-[1000ms]"` | Tailwind classes for entry animation |
| `onOutTransitionMode` | `string` | `"translate-y-20 opacity-0 duration-100"` | Tailwind classes for initial/hidden state |
| `className` | `string` | `""` | Additional CSS classes |

## 🎨 Animation Examples

### Fade In from Bottom
```tsx
<ReactTailwindVisibleMotion id="fade-up">
  <div>Your content here</div>
</ReactTailwindVisibleMotion>
```

### Fade In with Rotation
```tsx
<ReactTailwindVisibleMotion 
  id="rotate"
  onInTransitionMode="rotate-0 opacity-100 duration-700"
  onOutTransitionMode="-rotate-12 opacity-0"
>
  <div>Your content here</div>
</ReactTailwindVisibleMotion>
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

Created with ❤️ by [Yao Kouassi Ange](https://github.com/ange0)

---

<div align="center">
⭐️ If you like this project, please give it a star on GitHub! ⭐️
</div>