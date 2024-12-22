document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('jwt');

    if (!token) {
        alert('Please log in first.');
        document.getElementById('login-page').style.display = 'block';
        document.getElementById('main-page').style.display = 'none';
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/api/main', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('driverName').textContent = data.driverName;
            document.getElementById('routeName').textContent = data.routeName;
            document.getElementById('busNumber').textContent = data.busNumber;
        } else {
            alert('Failed to fetch data. Please log in again.');
            localStorage.removeItem('jwt');
            location.reload();
        }
    } catch (error) {
        console.error('Error fetching main page data:', error);
        alert('An error occurred. Please try again.');
    }
});

document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('jwt'); // JWT 토큰 삭제
    alert('Logged out successfully.');
    location.reload();
});
