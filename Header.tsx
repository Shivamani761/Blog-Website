import React from 'react';
import { PenTool, List, Eye, Plus, ArrowLeft, FileText } from 'lucide-react';

type ViewMode = 'list' | 'editor' | 'viewer';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onNewPost: () => void;
  onBackToList: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onNewPost,
  onBackToList,
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MarkdownBlog</h1>
              <p className="text-sm text-gray-500">Write with Markdown</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {currentView !== 'list' && (
              <button
                onClick={onBackToList}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Posts</span>
              </button>
            )}

            {currentView === 'list' && (
              <>
                <button
                  onClick={() => onViewChange('list')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    currentView === 'list'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">All Posts</span>
                </button>

                <button
                  onClick={onNewPost}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Post</span>
                </button>
              </>
            )}

            {currentView === 'editor' && (
              <div className="flex items-center space-x-2 text-blue-600">
                <PenTool className="w-4 h-4" />
                <span className="font-medium">Editor Mode</span>
              </div>
            )}

            {currentView === 'viewer' && (
              <div className="flex items-center space-x-2 text-green-600">
                <Eye className="w-4 h-4" />
                <span className="font-medium">Reading Mode</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};