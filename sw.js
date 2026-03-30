// File này chỉ cần chạy ngầm để thỏa mãn điều kiện PWA của trình duyệt
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Đã cài đặt');
});

self.addEventListener('fetch', (e) => {
    // Để trống để web hoạt động bình thường
});
