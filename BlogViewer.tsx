import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { BlogPost } from '../types/Blog';
import { ArrowLeft, Edit3, Calendar, Tag, Clock } from 'lucide-react';

interface BlogViewerProps {
  post: BlogPost;
  onBack: () => void;
  onEdit: () => void;
}

export const BlogViewer: React.FC<BlogViewerProps> = ({ post, onBack, onEdit }) => {
  const getHtml = () => {
    const html = marked(post.content);
    return DOMPurify.sanitize(html);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Posts</span>
            </button>

            <button
              onClick={onEdit}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Post</span>
            </button>
          </div>

          {/* Post Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Published {formatDate(post.createdAt)}</span>
            </div>

            {post.updatedAt !== post.createdAt && (
              <div className="flex items-center space-x-2">
                <Edit3 className="w-4 h-4" />
                <span>Updated {formatDate(post.updatedAt)}</span>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{getReadingTime(post.content)} min read</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Post Content */}
      <article className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-pink-600 prose-code:bg-pink-50 prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: getHtml() }}
          />
        </div>
      </article>

      {/* Footer Actions */}
      <div className="mt-8 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Enjoyed this post?</p>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={onEdit}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit This Post</span>
              </button>
              <button
                onClick={onBack}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>View All Posts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};