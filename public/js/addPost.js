const addPostFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('#post-title').value.trim();
    const postText = document.querySelector('#post-text').value.trim();
  
    if (postTitle && postText) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#add-post-form')
  .addEventListener('submit', addPostFormHandler);