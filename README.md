<div align="center">

# React Tailwind Visible Motion

🎯 Ajoutez des animations élégantes à vos composants React avec Tailwind CSS, déclenchées automatiquement lors du défilement.

[![npm version](https://img.shields.io/npm/v/react-tailwind-visible-motion.svg?style=flat)](https://www.npmjs.com/package/react-tailwind-visible-motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## ✨ Caractéristiques

- 🚀 **Installation Simple** - Prêt à l'emploi en quelques secondes
- 🎨 **Compatible Tailwind** - Utilisez toutes les classes d'animation Tailwind CSS
- 🔄 **Animations Intelligentes** - Ne s'active qu'une seule fois par élément
- 📱 **Responsive** - Fonctionne parfaitement sur tous les appareils
- 🛠️ **Hautement Personnalisable** - Configurez vos propres animations
- 💪 **TypeScript** - Support TypeScript intégré

## 🚀 Installation

```bash
npm install react-tailwind-visible-motion
# ou
yarn add react-tailwind-visible-motion
```

## 📖 Utilisation

```tsx
import { ReactTailwindVisibleMotion } from "react-tailwind-visible-motion";

function App() {
  return (
    <ReactTailwindVisibleMotion 
      id="mon-element"
      onInTransitionMode="translate-y-0 opacity-100 delay-[200ms] duration-[1000ms]"
      onOutTransitionMode="translate-y-20 opacity-0 duration-100"
      className="your-custom-classes"
    >
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Contenu Animé</h2>
        <p>Ce contenu s'animera à l'apparition !</p>
      </div>
    </ReactTailwindVisibleMotion>
  );
}
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | (requis) | Identifiant unique de l'élément |
| `children` | `React.ReactNode` | (requis) | Le contenu à animer |
| `onInTransitionMode` | `string` | `"translate-y-0 opacity-100 delay-[200ms] duration-[1000ms]"` | Classes Tailwind pour l'animation d'entrée |
| `onOutTransitionMode` | `string` | `"translate-y-20 opacity-0 duration-100"` | Classes Tailwind pour l'état initial/caché |
| `className` | `string` | `""` | Classes CSS additionnelles |

## 🎨 Exemples d'Animations

### Fade In depuis le bas
```tsx
<ReactTailwindVisibleMotion id="fade-up">
  <div>Votre contenu ici</div>
</ReactTailwindVisibleMotion>
```

### Fade In avec rotation
```tsx
<ReactTailwindVisibleMotion 
  id="rotate"
  onInTransitionMode="rotate-0 opacity-100 duration-700"
  onOutTransitionMode="-rotate-12 opacity-0"
>
  <div>Votre contenu ici</div>
</ReactTailwindVisibleMotion>
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 👨‍💻 Auteur

Créé avec ❤️ par [Yao Kouassi Ange](https://github.com/ange0)

---

<div align="center">
⭐️ Si vous aimez ce projet, donnez-lui une étoile sur GitHub ! ⭐️
</div>