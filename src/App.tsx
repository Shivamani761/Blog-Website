import React, { useState, useEffect } from 'react';
import { BlogEditor } from './components/BlogEditor';
import { BlogList } from './components/BlogList';
import { BlogViewer } from './components/BlogViewer';
import { Header } from './components/Header';
import { useLocalStorage } from './hooks/useLocalStorage';
import { BlogPost } from './types/Blog';
import { PenTool, List, Eye } from 'lucide-react';

type ViewMode = 'list' | 'editor' | 'viewer';

function App() {
  const [posts, setPosts] = useLocalStorage<BlogPost[]>('blog-posts', []);
  const [currentView, setCurrentView] = useState<ViewMode>('list');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleSavePost = (post: BlogPost) => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(p => p.id === post.id ? post : p));
    } else {
      // Add new post
      setPosts([post, ...posts]);
    }
    setEditingPost(null);
    setCurrentView('list');
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setCurrentView('editor');
  };

  const handleViewPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentView('viewer');
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setCurrentView('editor');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedPost(null);
    setEditingPost(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'editor':
        return (
          <BlogEditor
            post={editingPost}
            onSave={handleSavePost}
            onCancel={handleBackToList}
          />
        );
      case 'viewer':
        return selectedPost ? (
          <BlogViewer
            post={selectedPost}
            onBack={handleBackToList}
            onEdit={() => handleEditPost(selectedPost)}
          />
        ) : null;
      default:
        return (
          <BlogList
            posts={posts}
            onNewPost={handleNewPost}
            onViewPost={handleViewPost}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView}
        onViewChange={setCurrentView}
        onNewPost={handleNewPost}
        onBackToList={handleBackToList}
      />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;