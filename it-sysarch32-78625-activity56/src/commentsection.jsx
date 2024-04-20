import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Function to fetch comments from Firestore
    const fetchComments = async () => {
      const commentsRef = firebase.firestore().collection('comments').where('postId', '==', postId);
      const snapshot = await commentsRef.get();
      const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    };

    // Fetch comments when component mounts
    fetchComments();

    // Subscribe to real-time updates when component mounts
    const unsubscribe = firebase.firestore().collection('comments').where('postId', '==', postId)
      .onSnapshot(snapshot => {
        const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setComments(commentsData);
      });
      
    // Unsubscribe from real-time updates when component unmounts
    return () => unsubscribe();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Add new comment to Firestore
    await firebase.firestore().collection('comments').add({
      postId,
      userId: firebase.auth().currentUser.uid,
      content: newComment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Clear comment input field
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
