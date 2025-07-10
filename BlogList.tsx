import React, { useState } from 'react';
import { BlogPost } from '../types/Blog';
import { Search, Plus, Edit3, Eye, Trash2, Calendar, Tag, FileText } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  onNewPost: () => void;
  onViewPost: (post: BlogPost) => void;
  onEditPost: (post: BlogPost) => void;
  onDeletePost: (postId: string) => void;
}

export const BlogList: React.FC<BlogListProps> = ({
  posts,
  onNewPost,
  onViewPost,
  onEditPost,
  onDeletePost,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort();

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleDeletePost = (postId: string, postTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${postTitle}"?`)) {
      onDeletePost(postId);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Blog Posts</h1>
          <p className="text-gray-600 mt-1">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} total
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          {/* Tag Filter */}
          <div className="lg:w-64">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          {posts.length === 0 ? (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">No blog posts yet</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Start writing your first blog post with our Markdown editor. 
                Share your thoughts, tutorials, or stories with the world.
              </p>
              <button
                onClick={onNewPost}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Write Your First Post</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">No posts found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden group"
            >
              <div className="p-6">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>

                {/* Post Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Post Meta */}
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Created {formatDate(post.createdAt)}</span>
                  {post.updatedAt !== post.createdAt && (
                    <span className="ml-2">• Updated {formatDate(post.updatedAt)}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onViewPost(post)}
                    className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Read</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onEditPost(post)}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => handleDeletePost(post.id, post.title)}
                      className="flex items-center space-x-1 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};