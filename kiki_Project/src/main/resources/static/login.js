document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // 폼 제출 방지

    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8080/api/login', {
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
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('main-page').style.display = 'block';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
    }
});
