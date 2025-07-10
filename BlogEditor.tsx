import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { BlogPost } from '../types/Blog';
import { Save, X, Eye, EyeOff, FileText, Calendar } from 'lucide-react';

interface BlogEditorProps {
  post?: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

export const BlogEditor: React.FC<BlogEditorProps> = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [tags, setTags] = useState(post?.tags.join(', ') || '');
  const [showPreview, setShowPreview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please provide both title and content');
      return;
    }

    const blogPost: BlogPost = {
      id: post?.id || Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      createdAt: post?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      excerpt: content.trim().substring(0, 150) + (content.length > 150 ? '...' : ''),
    };

    onSave(blogPost);
  };

  const getPreviewHtml = () => {
    const html = marked(content);
    return DOMPurify.sanitize(html);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 's') {
        e.preventDefault();
        handleSave();
      } else if (e.key === 'p') {
        e.preventDefault();
        setShowPreview(!showPreview);
      }
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg ${isFullscreen ? 'fixed inset-4 z-50' : ''}`}>
      {/* Editor Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            {post ? 'Edit Post' : 'New Post'}
          </h2>
          {post && (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Created {new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
              showPreview
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title="Toggle Preview (Ctrl+P)"
          >
            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="hidden sm:inline">{showPreview ? 'Hide' : 'Preview'}</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            title="Save Post (Ctrl+S)"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>

          <button
            onClick={onCancel}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-4 h-4" />
            <span>Cancel</span>
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="p-6">
        {/* Title Input */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your post title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-lg font-medium"
          />
        </div>

        {/* Tags Input */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="react, javascript, tutorial..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
        </div>

        {/* Editor/Preview Layout */}
        <div className={`grid gap-6 ${showPreview ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* Markdown Editor */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Markdown Content
              </label>
              <div className="text-xs text-gray-500">
                Supports Markdown syntax
              </div>
            </div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="# Your Post Title

Write your content here using **Markdown** syntax...

## Features
- **Bold** and *italic* text
- [Links](https://example.com)
- `code blocks`
- Lists and more!

```javascript
console.log('Hello, World!');
```"
              className="w-full h-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 font-mono text-sm resize-none"
            />
          </div>

          {/* Live Preview */}
          {showPreview && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  Live Preview
                </label>
                <div className="text-xs text-gray-500">
                  Real-time rendering
                </div>
              </div>
              <div className="h-96 p-4 border border-gray-300 rounded-lg bg-gray-50 overflow-y-auto">
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: getPreviewHtml() }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Markdown Help */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Markdown Quick Reference</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-blue-800">
            <div>
              <strong># Heading 1</strong><br />
              <strong>## Heading 2</strong><br />
              <strong>**Bold text**</strong><br />
              <strong>*Italic text*</strong>
            </div>
            <div>
              <strong>[Link](url)</strong><br />
              <strong>![Image](url)</strong><br />
              <strong>`inline code`</strong><br />
              <strong>- List item</strong>
            </div>
            <div>
              <strong>```code block```</strong><br />
              <strong>&gt; Blockquote</strong><br />
              <strong>| Table | Header |</strong><br />
              <strong>--- | ---</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};