const BASE_API = 'http://localhost:8080'; // 백엔드 URL
const jwt = localStorage.getItem('jwt'); // 로그인 시 저장된 JWT 토큰 가져오기

if (!jwt) {
    alert('You are not logged in!');
    window.location.href = 'index.html'; // 로그인 페이지로 리다이렉트
}

// 페이지 로드 시 사용자 정보 불러오기
document.addEventListener('DOMContentLoaded', () => {
    axios.get(`${BASE_API}/auth/main`, {
        headers: {
            Authorization: `Bearer ${jwt}` // JWT 토큰 포함
        }
    })
    .then((response) => {
        if (response.status === 200) {
            const data = response.data;
            console.log("데이터값", data);

            // 데이터 렌더링
            document.getElementById('driverName').textContent = data.driverName || 'N/A';
            document.getElementById('routeName').textContent = data.routeName || 'N/A';
            document.getElementById('busNumber').textContent = data.busNumber || 'N/A';
        } else {
            console.error('Failed to fetch user info:', response.statusText);
            alert('Failed to load user information. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error fetching user info:', error.response ? error.response.data : error.message);
        alert('An error occurred while loading user information.');
        window.location.href = 'index.html'; // 로그인 페이지로 리다이렉트
    });
});

// 로그아웃 기능
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('jwt'); // JWT 토큰 삭제
    alert('로그아웃 성공');
    window.location.href = 'index.html'; // 로그인 페이지로 리다이렉트
});
