const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const userData = {
        name: name,
        email: email,
        password: password
      };
      
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: { 'Content-Type': 'application/json'}
        });
  
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          const data = await response.json();
          alert(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);