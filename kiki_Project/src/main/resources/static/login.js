document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ loginId, password })
        });

        if (response.ok) {
            const data = await response.text();
            localStorage.setItem('jwt', data); // JWT 토큰 저장
            alert('Login successful!');
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
});
