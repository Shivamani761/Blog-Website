# Markdown Blog Platform

A beautiful, production-ready blogging platform that allows users to write and publish posts using Markdown syntax with live previews. Built with React, TypeScript, and Tailwind CSS.

![Blog Platform Preview](https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## 🚀 Features

### Core Functionality
- **Markdown Editor**: Full-featured editor with live preview pane
- **Local Storage**: Automatic saving and persistence of blog posts
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Search & Filter**: Advanced search by title, content, and tags
- **Tag System**: Automatic hashtag extraction and filtering
- **Post Management**: Create, edit, view, and delete blog posts

### User Experience
- **Live Preview**: Real-time markdown rendering as you type
- **Clean Interface**: Modern, minimalist design with smooth animations
- **Intuitive Navigation**: Easy switching between list, editor, and viewer modes
- **Professional Typography**: Carefully crafted reading experience
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Markdown**: marked.js for parsing, DOMPurify for sanitization
- **Icons**: Lucide React icon library
- **Build Tool**: Vite for fast development and building
- **Storage**: Browser localStorage for data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd markdown-blog-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Creating a New Post
1. Click the "New Post" button on the main blog list
2. Enter your post title in the large title field
3. Write your content using Markdown syntax in the editor
4. Use the Preview toggle to see how your post will look
5. Click "Save Post" to store your blog post

### Markdown Features Supported
- **Headers**: `# H1`, `## H2`, `### H3`
- **Text Formatting**: `**bold**`, `*italic*`, `~~strikethrough~~`
- **Lists**: Ordered (`1. item`) and unordered (`- item`)
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code**: `` `inline` `` and ```code blocks```
- **Blockquotes**: `> quote`
- **Tables**: GitHub-flavored markdown tables
- **Tags**: Use `#hashtag` anywhere in your content

### Managing Posts
- **View Posts**: Click "Read Post" to view in full-screen reader mode
- **Edit Posts**: Click the edit icon or "Edit Post" button
- **Delete Posts**: Use the delete button in the editor (with confirmation)
- **Search Posts**: Use the search bar to find posts by title or content
- **Filter by Tags**: Click on any tag to filter posts

## 🎨 Design System

### Colors
- **Primary**: Purple (`#8B5CF6`) - Main brand color
- **Secondary**: Blue (`#3B82F6`) - Accent color
- **Success**: Green (`#10B981`) - Success states
- **Warning**: Yellow (`#F59E0B`) - Warning states
- **Error**: Red (`#EF4444`) - Error states
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with 1.75 line height
- **Code**: Monospace font for code blocks

### Spacing
- **Base Unit**: 8px grid system
- **Components**: Consistent padding and margins
- **Layout**: Responsive breakpoints for all devices

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column layout)
- **Desktop**: > 1024px (three column layout)

## 🔧 Project Structure

```
src/
├── components/          # React components
│   ├── BlogEditor.tsx   # Markdown editor with preview
│   ├── BlogList.tsx     # Blog post listing and search
│   └── BlogViewer.tsx   # Individual post viewer
├── hooks/               # Custom React hooks
│   └── useBlogStorage.ts # Local storage management
├── types/               # TypeScript type definitions
│   └── blog.ts          # Blog post interfaces
├── utils/               # Utility functions
│   └── markdown.ts      # Markdown processing utilities
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing (if needed)

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 🔮 Future Enhancements

### Planned Features
- **Export Options**: PDF, HTML, and Markdown export
- **Themes**: Dark mode and custom theme support
- **Categories**: Organize posts into categories
- **Media Upload**: Image and file upload support
- **Backend Integration**: Firebase or custom API support
- **Collaboration**: Multi-user editing and comments
- **SEO**: Meta tags and social sharing optimization

### Technical Improvements
- **PWA**: Progressive Web App capabilities
- **Offline Support**: Service worker for offline editing
- **Auto-save**: Automatic draft saving while typing
- **Version History**: Track post revisions
- **Import/Export**: Bulk import from other platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **marked.js** - Markdown parsing library
- **DOMPurify** - HTML sanitization
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Inter Font** - Typography by Google Fonts

## 📞 Support

For support, questions, or feature requests:
- Create an issue on GitHub
- Contact the development team
- Check the documentation wiki

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
