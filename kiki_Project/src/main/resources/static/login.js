// Base URL
const BASE_URL = 'http://localhost:8080';

// 로그인 폼 제출 이벤트 핸들러
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 막기

    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;

    // Axios로 POST 요청
    axios.post(`${BASE_URL}/auth/login`, {
        loginId,
        password,
    }, {
        headers: {
            "Content-Type": "application/json", // JSON 형식으로 데이터 전송
        },
    })
    .then((response) => {
        // 서버 응답 처리
        if (response.status === 200) {
            const data = response.data;
            console.log('로그인 성공:', data); // 로그인 성공 메시지 출력
            localStorage.setItem('jwt', data.object.token); // JWT 토큰 저장
            window.location.href = '/main.html'; // 메인 페이지로 리다이렉트
        } else {
            console.error('로그인 실패:', response.statusText); // 오류 메시지 출력
            alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
        }
    })
    .catch((error) => {
        // 오류 처리
        console.error('로그인 중 오류 발생:', error.response ? error.response.data : error.message);
        alert('오류가 발생했습니다. 다시 시도해주세요.');
    });
});
