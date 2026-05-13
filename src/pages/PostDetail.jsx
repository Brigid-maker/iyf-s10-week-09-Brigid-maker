import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const [postRes, commentsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ]);

        const postData = await postRes.json();
        const commentsData = await commentsRes.json();

        setPost(postData);
        setComments(commentsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [postId]);

  if (loading) return (
    <div className="flex justify-center py-12">
      <p className="text-gray-500 text-lg">Loading post...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center py-12">
      <p className="text-red-500">Error: {error}</p>
    </div>
  );

  return (
    <div className="space-y-6">

      {/* Back Button */}
      <Link to="/posts">
        <Button variant="secondary">← Back to Posts</Button>
      </Link>

      {/* Post */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
            {post.userId}
          </div>
          <div>
            <p className="font-medium text-gray-700">User {post.userId}</p>
            <p className="text-sm text-gray-400">Post #{post.id}</p>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 capitalize mb-4">
          {post.title}
        </h1>
        <p className="text-gray-600 leading-relaxed">{post.body}</p>

        {/* Like Button */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <button
            onClick={() => {
              setLiked(!liked);
              setLikes(liked ? likes - 1 : likes + 1);
            }}
            className={`flex items-center gap-2 font-medium transition-colors
              ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
          >
            {liked ? '❤️' : '🤍'} {likes} Likes
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">
          💬 Comments ({comments.length})
        </h2>
        {comments.map(comment => (
          <Card key={comment.id}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-bold">
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-gray-700 text-sm">{comment.name}</p>
                <p className="text-xs text-gray-400">{comment.email}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{comment.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}