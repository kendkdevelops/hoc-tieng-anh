# LingoCraft — Website Học Tiếng Anh Chủ Động

Website học tiếng Anh tương tác dành cho người Việt, được xây dựng hoàn toàn bằng HTML5, Vanilla CSS và JavaScript thuần (không cần cài đặt thư viện hay bước build), lưu tiến độ tự động bằng `localStorage` và sẵn sàng triển khai miễn phí trên **GitHub Pages**.

## Tính năng nổi bật

- **Flashcards Từ Vựng (60+ từ chọn lọc theo 6 chủ đề)**:
  - Đầy đủ phiên âm **IPA**, từ loại, trình độ CEFR (`A2`–`B2`), nghĩa tiếng Việt, câu ví dụ thực tế và mẹo dùng từ.
  - Phát âm trực tiếp bằng **Web Speech API** với tùy chọn giọng **Anh - Mỹ (US)** / **Anh - Anh (UK)** và tốc độ chậm **0.7x**.
  - Tự đánh giá mức độ nhớ (*Chưa nhớ / Tạm nhớ / Đã thuộc*), lọc từ chưa thuộc và hỗ trợ phím tắt (`Space`, `S`, `←`, `→`, `1`, `2`, `3`).
- **Sổ Từ Vựng & Từ Cá Nhân**:
  - Tìm kiếm nhanh theo từ tiếng Anh, nghĩa tiếng Việt hoặc ví dụ.
  - Tự thêm từ vựng mới của riêng bạn vào sổ tay và bộ Flashcard.
- **Luyện Nghe & Chép Chính Tả (Listening Studio)**:
  - Hai chế độ: **Nghe & Điền từ** và **Chép chính tả cả câu** kèm chấm điểm chi tiết từng từ và ghi chú phát âm.
- **Ngữ Pháp Cốt Lõi (6 chuyên đề trọng tâm)**:
  - Công thức súc tích, ví dụ có âm thanh, mục **"Lỗi người Việt hay gặp"** và bài kiểm tra nhanh kèm giải thích chi tiết.
- **Hội Thoại Thực Tế (5 tình huống đời thực)**:
  - Gọi cà phê, phỏng vấn xin việc, check-in khách sạn, họp Daily Standup, hỏi đường — hỗ trợ bấm nghe từng câu hoặc **Nghe cả đoạn** và bật/tắt dịch tiếng Việt.
- **Kiểm Tra Trắc Nghiệm (4 chế độ)**:
  - Anh → Việt, Việt → Anh, Nghe & Chọn từ, Trắc nghiệm Ngữ pháp kèm chấm điểm, chuỗi trả lời đúng và bảng ôn lại các câu sai.
- **Giao diện Sáng/Tối & Sao lưu tiến độ**:
  - Theo dõi chuỗi ngày học (Streak), mục tiêu XP hằng ngày và xuất/nhập bản sao lưu `.json`.

## Cách sử dụng

1. Mở trực tiếp tệp `index.html` trên trình duyệt hiện đại (Chrome, Edge, Safari, Firefox), hoặc chạy một server tĩnh bất kỳ:
   ```bash
   python3 -m http.server 8000
   ```
2. **Bật GitHub Pages để học online miễn phí**:
   - Vào **Settings → Pages** trong repository này trên GitHub.
   - Tại mục **Build and deployment → Source**, chọn **GitHub Actions** (workflow `.github/workflows/pages.yml` đã được thiết lập sẵn).

## Cấu trúc thư mục

```text
.
├── index.html                   # Trang chính và các không gian học tập
├── css/
│   └── styles.css               # Hệ thống giao diện sáng/tối & responsive
├── js/
│   ├── data.js                  # Dữ liệu từ vựng, bài nghe, ngữ pháp, hội thoại
│   ├── audio.js                 # Bộ phát âm Web Speech API (US/UK)
│   └── app.js                   # Logic tương tác, kiểm tra, lưu tiến độ
└── .github/workflows/pages.yml  # Triển khai tự động lên GitHub Pages
```
