# How to Add Images to Assets Folder

## Step 1: Add Images to the Assets Folder

1. Place your image files in the `src/assets/` folder
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.svg`, `.gif`, `.webp`

Example structure:
```
src/
  assets/
    hero-image.jpg
    paris.jpg
    tokyo.jpg
    logo.png
```

## Step 2: Import Images in Your Component

### Method 1: Import at the top of your file

```jsx
import heroImage from '../assets/hero-image.jpg';
import parisImage from '../assets/paris.jpg';
```

### Method 2: Use in your component

#### Option A: Use in an `<img>` tag
```jsx
<img src={heroImage} alt="Hero" />
```

#### Option B: Use as a background image
```jsx
<div style={{ backgroundImage: `url(${heroImage})` }}>
  {/* content */}
</div>
```

#### Option C: Use with CSS classes (inline style)
```jsx
<div 
  className="bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  {/* content */}
</div>
```

## Step 3: Dynamic Imports (Optional)

If you need to import images dynamically:

```jsx
// Using require (not recommended in Vite, but works)
const image = require('../assets/image.jpg');

// Better: Use import() for dynamic imports
const loadImage = async () => {
  const imageModule = await import('../assets/image.jpg');
  return imageModule.default;
};
```

## Example: Complete Component

```jsx
import React from 'react';
import heroImage from '../assets/hero-image.jpg';
import logo from '../assets/logo.png';

function MyComponent() {
  return (
    <div>
      {/* Using in img tag */}
      <img src={logo} alt="Logo" />
      
      {/* Using as background */}
      <div 
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        Content here
      </div>
    </div>
  );
}

export default MyComponent;
```

## Tips

1. **Vite handles image optimization**: Images are processed by Vite automatically
2. **Use descriptive names**: Name your images clearly (e.g., `hero-banner.jpg` not `img1.jpg`)
3. **Optimize images**: Compress images before adding to reduce bundle size
4. **Path resolution**: Always use relative paths from your component: `../assets/` for one level up

## Common Issues

- **Image not found**: Make sure the path is correct and the file exists
- **Import error**: Check that the file extension matches exactly
- **Build errors**: Ensure image files are in the `src` directory (not `public`)

