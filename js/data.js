/* ==========================================================================
   LingoCraft — Dữ liệu học tiếng Anh (Từ vựng, Nghe, Ngữ pháp, Hội thoại)
   ========================================================================== */

window.LINGO_DATA = {
  topics: [
    { id: 'all', name: 'Tất cả chủ đề' },
    { id: 'daily', name: 'Giao tiếp hằng ngày' },
    { id: 'work', name: 'Công sở & Kinh doanh' },
    { id: 'travel', name: 'Du lịch & Di chuyển' },
    { id: 'tech', name: 'Công nghệ & Làm việc số' },
    { id: 'phrasal', name: 'Cụm động từ (Phrasal Verbs)' },
    { id: 'feelings', name: 'Cảm xúc & Tính cách' }
  ],

  vocabulary: [
    // --- Daily ---
    {
      id: 'v-01', topic: 'daily', level: 'A2', pos: 'adjective',
      word: 'convenient', ipa: '/kənˈviː.ni.ənt/',
      meaning: 'thuận tiện, tiện lợi',
      example: 'Living near the subway station is very convenient for work.',
      exampleVi: 'Sống gần ga tàu điện ngầm rất thuận tiện cho công việc.',
      tip: 'Đi kèm giới từ "for": convenient for someone / doing something.'
    },
    {
      id: 'v-02', topic: 'daily', level: 'B1', pos: 'verb',
      word: 'recommend', ipa: '/ˌrek.əˈmend/',
      meaning: 'gợi ý, đề xuất, khuyên dùng',
      example: 'Could you recommend a good local restaurant around here?',
      exampleVi: 'Bạn có thể gợi ý một nhà hàng địa phương ngon gần đây không?',
      tip: 'Cấu trúc: recommend + V-ing hoặc recommend that + S + V(nguyên mẫu).'
    },
    {
      id: 'v-03', topic: 'daily', level: 'A2', pos: 'noun',
      word: 'routine', ipa: '/ruːˈtiːn/',
      meaning: 'thói quen sinh hoạt hằng ngày',
      example: 'A consistent morning routine helps me stay focused all day.',
      exampleVi: 'Một thói quen buổi sáng đều đặn giúp tôi tập trung suốt cả ngày.',
      tip: 'Cụm hay dùng: daily routine, morning routine, break the routine.'
    },
    {
      id: 'v-04', topic: 'daily', level: 'B1', pos: 'verb',
      word: 'afford', ipa: '/əˈfɔːrd/',
      meaning: 'đủ khả năng chi trả',
      example: 'We cannot afford to eat out every single night.',
      exampleVi: 'Chúng tôi không đủ khả năng đi ăn ngoài mỗi tối.',
      tip: 'Thường đi với "can/could/be able to" + afford + to V / danh từ.'
    },
    {
      id: 'v-05', topic: 'daily', level: 'B1', pos: 'adjective',
      word: 'reliable', ipa: '/rɪˈlaɪ.ə.bəl/',
      meaning: 'đáng tin cậy, ổn định',
      example: 'Public buses here are affordable and remarkably reliable.',
      exampleVi: 'Xe buýt công cộng ở đây giá phải chăng và cực kỳ đáng tin cậy.',
      tip: 'Trái nghĩa: unreliable (không đáng tin).'
    },
    {
      id: 'v-06', topic: 'daily', level: 'A2', pos: 'verb',
      word: 'arrange', ipa: '/əˈreɪndʒ/',
      meaning: 'sắp xếp, thu xếp',
      example: 'Let me arrange a quick catch-up call for tomorrow afternoon.',
      exampleVi: 'Để tôi sắp xếp một cuộc gọi trò chuyện ngắn vào chiều mai nhé.',
      tip: 'Cụm hay dùng: arrange a meeting, arrange for someone to do something.'
    },
    {
      id: 'v-07', topic: 'daily', level: 'B1', pos: 'noun',
      word: 'appointment', ipa: '/əˈpɔɪnt.mənt/',
      meaning: 'cuộc hẹn (bác sĩ, đối tác, dịch vụ)',
      example: 'I have a dentist appointment at 3 p.m. today.',
      exampleVi: 'Tôi có cuộc hẹn với nha sĩ lúc 3 giờ chiều nay.',
      tip: 'Động từ đi kèm: make / book / cancel / reschedule an appointment.'
    },
    {
      id: 'v-08', topic: 'daily', level: 'B1', pos: 'adverb',
      word: 'occasionally', ipa: '/əˈkeɪ.ʒən.əl.i/',
      meaning: 'thỉnh thoảng, đôi khi',
      example: 'I usually cook at home, though I occasionally order delivery.',
      exampleVi: 'Tôi thường nấu ăn ở nhà, dù thỉnh thoảng vẫn đặt giao đồ ăn.',
      tip: 'Đồng nghĩa tự nhiên: from time to time, once in a while.'
    },
    {
      id: 'v-09', topic: 'daily', level: 'B1', pos: 'adjective',
      word: 'reasonable', ipa: '/ˈriː.zən.ə.bəl/',
      meaning: 'hợp lý, phải chăng',
      example: 'The repair cost seemed quite reasonable for the quality of work.',
      exampleVi: 'Chi phí sửa chữa có vẻ khá hợp lý so với chất lượng công việc.',
      tip: 'Dùng tốt cho cả giá cả (reasonable price) và lập luận (reasonable excuse).'
    },
    {
      id: 'v-10', topic: 'daily', level: 'B2', pos: 'verb',
      word: 'hesitate', ipa: '/ˈhez.ɪ.teɪt/',
      meaning: 'do dự, ngập ngừng',
      example: 'Please do not hesitate to reach out if anything is unclear.',
      exampleVi: 'Xin đừng ngần ngại liên hệ nếu có điều gì chưa rõ.',
      tip: 'Câu email lịch sự rất thông dụng: "Don\'t hesitate to contact me."'
    },

    // --- Work ---
    {
      id: 'v-11', topic: 'work', level: 'B1', pos: 'noun',
      word: 'deadline', ipa: '/ˈded.laɪn/',
      meaning: 'hạn chót hoàn thành',
      example: 'We are working closely together to meet Friday\'s deadline.',
      exampleVi: 'Chúng tôi đang phối hợp chặt chẽ để kịp hạn chót thứ Sáu.',
      tip: 'Động từ chuẩn: meet a deadline (kịp hạn), miss a deadline (trễ hạn), extend a deadline.'
    },
    {
      id: 'v-12', topic: 'work', level: 'B2', pos: 'verb',
      word: 'collaborate', ipa: '/kəˈlæb.ə.reɪt/',
      meaning: 'cộng tác, hợp tác cùng nhau',
      example: 'Designers and engineers collaborate daily on new product features.',
      exampleVi: 'Các nhà thiết kế và kỹ sư hợp tác hằng ngày cho tính năng mới.',
      tip: 'Cấu trúc: collaborate with someone on something.'
    },
    {
      id: 'v-13', topic: 'work', level: 'B2', pos: 'verb',
      word: 'prioritize', ipa: '/praɪˈɒr.ə.taɪz/',
      meaning: 'ưu tiên, sắp xếp thứ tự ưu tiên',
      example: 'Let us prioritize the urgent customer issues before adding features.',
      exampleVi: 'Hãy ưu tiên các vấn đề khẩn cấp của khách hàng trước khi thêm tính năng.',
      tip: 'Danh từ: priority (high priority / top priority).'
    },
    {
      id: 'v-14', topic: 'work', level: 'B1', pos: 'noun',
      word: 'feedback', ipa: '/ˈfiːd.bæk/',
      meaning: 'phản hồi, góp ý',
      example: 'Thank you for the constructive feedback on my presentation.',
      exampleVi: 'Cảm ơn bạn vì những góp ý mang tính xây dựng cho bài thuyết trình.',
      tip: 'Feedback là danh từ KHÔNG đếm được — không thêm "s" (sai: feedbacks).'
    },
    {
      id: 'v-15', topic: 'work', level: 'B2', pos: 'verb',
      word: 'negotiate', ipa: '/nɪˈɡəʊ.ʃi.eɪt/',
      meaning: 'đàm phán, thương lượng',
      example: 'She successfully negotiated a better contract with the supplier.',
      exampleVi: 'Cô ấy đã đàm phán thành công một hợp đồng tốt hơn với nhà cung cấp.',
      tip: 'Cụm hay gặp: negotiate a salary / a deal / terms.'
    },
    {
      id: 'v-16', topic: 'work', level: 'B1', pos: 'noun',
      word: 'agenda', ipa: '/əˈdʒen.də/',
      meaning: 'chương trình nghị sự, nội dung cuộc họp',
      example: 'I will share the meeting agenda ten minutes before we begin.',
      exampleVi: 'Tôi sẽ chia sẻ nội dung cuộc họp 10 phút trước khi bắt đầu.',
      tip: 'Cụm hay dùng: on the agenda (nằm trong danh sách thảo luận).'
    },
    {
      id: 'v-17', topic: 'work', level: 'B2', pos: 'adjective',
      word: 'efficient', ipa: '/ɪˈfɪʃ.ənt/',
      meaning: 'hiệu quả, tối ưu (ít tốn công sức/thời gian)',
      example: 'Automating weekly reports made our workflow much more efficient.',
      exampleVi: 'Tự động hóa báo cáo tuần giúp quy trình của chúng tôi hiệu quả hơn nhiều.',
      tip: 'Phân biệt: effective (đạt kết quả) vs efficient (làm nhanh, ít lãng phí).'
    },
    {
      id: 'v-18', topic: 'work', level: 'B1', pos: 'noun',
      word: 'colleague', ipa: '/ˈkɒl.iːɡ/',
      meaning: 'đồng nghiệp',
      example: 'My colleagues organized a warm welcome lunch on my first day.',
      exampleVi: 'Các đồng nghiệp đã tổ chức bữa trưa chào đón ấm áp vào ngày đầu của tôi.',
      tip: 'Lưu ý phát âm: trọng âm âm tiết 1 /ˈkɒl.iːɡ/, không đọc là "co-lích".'
    },
    {
      id: 'v-19', topic: 'work', level: 'B2', pos: 'verb',
      word: 'delegate', ipa: '/ˈdel.ɪ.ɡeɪt/',
      meaning: 'ủy quyền, phân công nhiệm vụ',
      example: 'Good managers know how to delegate tasks to the right people.',
      exampleVi: 'Người quản lý giỏi biết cách phân công việc cho đúng người.',
      tip: 'Cấu trúc: delegate something to someone.'
    },
    {
      id: 'v-20', topic: 'work', level: 'B2', pos: 'noun',
      word: 'milestone', ipa: '/ˈmaɪl.stəʊn/',
      meaning: 'cột mốc quan trọng',
      example: 'Launching the mobile version was a major milestone for our team.',
      exampleVi: 'Ra mắt phiên bản di động là một cột mốc lớn của nhóm chúng tôi.',
      tip: 'Động từ đi kèm: reach / achieve / celebrate a milestone.'
    },

    // --- Travel ---
    {
      id: 'v-21', topic: 'travel', level: 'B1', pos: 'noun',
      word: 'itinerary', ipa: '/aɪˈtɪn.ər.ər.i/',
      meaning: 'lịch trình chuyến đi',
      example: 'We planned a relaxed five-day itinerary across Da Nang and Hoi An.',
      exampleVi: 'Chúng tôi lên lịch trình 5 ngày thư thả khắp Đà Nẵng và Hội An.',
      tip: 'Từ này rất hay xuất hiện trong email xác nhận vé máy bay và tour.'
    },
    {
      id: 'v-22', topic: 'travel', level: 'A2', pos: 'noun',
      word: 'boarding pass', ipa: '/ˈbɔːr.dɪŋ pæs/',
      meaning: 'thẻ lên máy bay',
      example: 'Please have your passport and boarding pass ready at the gate.',
      exampleVi: 'Vui lòng chuẩn bị sẵn hộ chiếu và thẻ lên máy bay tại cửa khởi hành.',
      tip: 'Khác với ticket (vé mua chỗ): boarding pass là thẻ nhận sau khi check-in.'
    },
    {
      id: 'v-23', topic: 'travel', level: 'B1', pos: 'noun',
      word: 'accommodation', ipa: '/əˌkɒm.əˈdeɪ.ʃən/',
      meaning: 'chỗ ở, nơi lưu trú',
      example: 'Booking accommodation early usually saves you a lot of money.',
      exampleVi: 'Đặt chỗ lưu trú sớm thường giúp bạn tiết kiệm khá nhiều tiền.',
      tip: 'Trong Anh-Anh là danh từ không đếm được (accommodation).'
    },
    {
      id: 'v-24', topic: 'travel', level: 'B1', pos: 'noun',
      word: 'destination', ipa: '/ˌdes.tɪˈneɪ.ʃən/',
      meaning: 'điểm đến',
      example: 'Kyoto has been my dream travel destination for years.',
      exampleVi: 'Kyoto là điểm đến du lịch mơ ước của tôi suốt nhiều năm.',
      tip: 'Cụm hay dùng: final destination, tourist destination.'
    },
    {
      id: 'v-25', topic: 'travel', level: 'B1', pos: 'noun',
      word: 'currency', ipa: '/ˈkʌr.ən.si/',
      meaning: 'tiền tệ, đơn vị tiền tệ',
      example: 'It is helpful to carry a little local currency for street markets.',
      exampleVi: 'Mang theo một ít tiền địa phương rất hữu ích khi đi chợ đường phố.',
      tip: 'Cụm hay dùng: exchange currency, local currency, foreign currency.'
    },
    {
      id: 'v-26', topic: 'travel', level: 'B1', pos: 'noun',
      word: 'reservation', ipa: '/ˌrez.əˈveɪ.ʃən/',
      meaning: 'sự đặt chỗ trước (khách sạn, nhà hàng)',
      example: 'Hi, I have a reservation under the name Minh Nguyen.',
      exampleVi: 'Xin chào, tôi có đặt chỗ trước dưới tên Minh Nguyễn.',
      tip: 'Câu mẫu siêu hữu ích khi check-in: "I have a reservation under..."'
    },
    {
      id: 'v-27', topic: 'travel', level: 'B2', pos: 'adjective',
      word: 'scenic', ipa: '/ˈsiː.nɪk/',
      meaning: 'có phong cảnh đẹp, nên thơ',
      example: 'We took the scenic coastal train instead of flying.',
      exampleVi: 'Chúng tôi đi chuyến tàu ven biển ngắm cảnh thay vì bay.',
      tip: 'Cụm tự nhiên: take the scenic route (đi cung đường đẹp hơn).'
    },
    {
      id: 'v-28', topic: 'travel', level: 'A2', pos: 'noun',
      word: 'luggage', ipa: '/ˈlʌɡ.ɪdʒ/',
      meaning: 'hành lý',
      example: 'My checked luggage arrived at the carousel within ten minutes.',
      exampleVi: 'Hành lý ký gửi của tôi ra băng chuyền trong vòng mười phút.',
      tip: 'Luggage không đếm được! Muốn đếm dùng "a piece of luggage" (carry-on luggage: hành lý xách tay).'
    },
    {
      id: 'v-29', topic: 'travel', level: 'B1', pos: 'noun',
      word: 'departure', ipa: '/dɪˈpɑːr.tʃər/',
      meaning: 'sự khởi hành',
      example: 'Check the departure board to see if our flight is on time.',
      exampleVi: 'Hãy xem bảng khởi hành để biết chuyến bay có đúng giờ không.',
      tip: 'Trái nghĩa: arrival (sự đến nơi).'
    },
    {
      id: 'v-30', topic: 'travel', level: 'B2', pos: 'verb',
      word: 'explore', ipa: '/ɪkˈsplɔːr/',
      meaning: 'khám phá, tìm hiểu',
      example: 'We spent the entire afternoon exploring the old quarter on foot.',
      exampleVi: 'Chúng tôi dành cả buổi chiều đi bộ khám phá khu phố cổ.',
      tip: 'Không dùng "explore about" — dùng trực tiếp explore + địa điểm/chủ đề.'
    },

    // --- Tech ---
    {
      id: 'v-31', topic: 'tech', level: 'B1', pos: 'verb',
      word: 'deploy', ipa: '/dɪˈplɔɪ/',
      meaning: 'triển khai (ứng dụng/hệ thống lên môi trường chạy thật)',
      example: 'The team will deploy the latest update tonight after testing.',
      exampleVi: 'Nhóm sẽ triển khai bản cập nhật mới nhất vào tối nay sau khi kiểm thử.',
      tip: 'Danh từ: deployment (continuous deployment).'
    },
    {
      id: 'v-32', topic: 'tech', level: 'B2', pos: 'verb',
      word: 'troubleshoot', ipa: '/ˈtrʌb.əl.ʃuːt/',
      meaning: 'khắc phục sự cố, tìm và sửa lỗi',
      example: 'It took twenty minutes to troubleshoot the Wi-Fi connection issue.',
      exampleVi: 'Mất hai mươi phút để tìm và khắc phục sự cố kết nối Wi-Fi.',
      tip: 'Dùng được cho cả phần mềm, mạng lẫn thiết bị hằng ngày.'
    },
    {
      id: 'v-33', topic: 'tech', level: 'B2', pos: 'adjective',
      word: 'intuitive', ipa: '/ɪnˈtjuː.ɪ.tɪv/',
      meaning: 'trực quan, dễ hiểu và dễ dùng ngay',
      example: 'Users loved the new interface because it feels clean and intuitive.',
      exampleVi: 'Người dùng thích giao diện mới vì cảm giác gọn gàng và trực quan.',
      tip: 'Rất phổ biến khi nhận xét UX/UI sản phẩm.'
    },
    {
      id: 'v-34', topic: 'tech', level: 'B1', pos: 'verb',
      word: 'synchronize', ipa: '/ˈsɪŋ.krə.naɪz/',
      meaning: 'đồng bộ hóa dữ liệu',
      example: 'Your flashcards automatically synchronize across your phone and laptop.',
      exampleVi: 'Thẻ từ vựng của bạn tự động đồng bộ giữa điện thoại và laptop.',
      tip: 'Trong giao tiếp hay rút gọn thành "sync" (/sɪŋk/).'
    },
    {
      id: 'v-35', topic: 'tech', level: 'B2', pos: 'verb',
      word: 'optimize', ipa: '/ˈɒp.tɪ.maɪz/',
      meaning: 'tối ưu hóa',
      example: 'Compressing images helps optimize page loading speed.',
      exampleVi: 'Nén hình ảnh giúp tối ưu hóa tốc độ tải trang.',
      tip: 'Cụm hay gặp: optimize performance, optimize for mobile.'
    },
    {
      id: 'v-36', topic: 'tech', level: 'B1', pos: 'noun',
      word: 'repository', ipa: '/rɪˈpɒz.ɪ.tər.i/',
      meaning: 'kho lưu trữ mã nguồn',
      example: 'Push your clean code to the GitHub repository once tests pass.',
      exampleVi: 'Đẩy mã nguồn sạch của bạn lên kho GitHub khi các bài kiểm thử đạt.',
      tip: 'Lập trình viên thường gọi tắt là "repo" (/ˈriː.pəʊ/).'
    },
    {
      id: 'v-37', topic: 'tech', level: 'B2', pos: 'adjective',
      word: 'scalable', ipa: '/ˈskeɪ.lə.bəl/',
      meaning: 'có khả năng mở rộng quy mô linh hoạt',
      example: 'They designed a scalable architecture to handle millions of learners.',
      exampleVi: 'Họ thiết kế kiến trúc có khả năng mở rộng để phục vụ hàng triệu người học.',
      tip: 'Danh từ: scalability.'
    },
    {
      id: 'v-38', topic: 'tech', level: 'B1', pos: 'noun',
      word: 'backup', ipa: '/ˈbæk.ʌp/',
      meaning: 'bản sao lưu dự phòng',
      example: 'Always keep a backup of your important project files.',
      exampleVi: 'Luôn giữ một bản sao lưu cho các tệp dự án quan trọng của bạn.',
      tip: 'Danh từ viết liền "backup", còn động từ viết tách "back up" (back up your files).'
    },
    {
      id: 'v-39', topic: 'tech', level: 'B2', pos: 'verb',
      word: 'integrate', ipa: '/ˈɪn.tɪ.ɡreɪt/',
      meaning: 'tích hợp',
      example: 'We plan to integrate speech recognition into the speaking practice.',
      exampleVi: 'Chúng tôi dự định tích hợp nhận diện giọng nói vào phần luyện nói.',
      tip: 'Cấu trúc: integrate A into/with B.'
    },
    {
      id: 'v-40', topic: 'tech', level: 'B1', pos: 'noun',
      word: 'feature', ipa: '/ˈfiː.tʃər/',
      meaning: 'tính năng, đặc điểm nổi bật',
      example: 'Dark mode is the most requested feature from our community.',
      exampleVi: 'Chế độ tối là tính năng được cộng đồng yêu cầu nhiều nhất.',
      tip: 'Cẩn thận đừng nhầm với "future" (/ˈfjuː.tʃər/ — tương lai).'
    },

    // --- Phrasal Verbs ---
    {
      id: 'v-41', topic: 'phrasal', level: 'B1', pos: 'phrasal verb',
      word: 'figure out', ipa: '/ˈfɪɡ.ər aʊt/',
      meaning: 'tìm ra cách giải quyết, hiểu ra vấn đề',
      example: 'Don\'t worry — we will figure out a solution together.',
      exampleVi: 'Đừng lo — chúng ta sẽ cùng nhau tìm ra giải pháp.',
      tip: 'Cực kỳ tự nhiên trong tiếng Anh nói thay cho "understand/solve".'
    },
    {
      id: 'v-42', topic: 'phrasal', level: 'B1', pos: 'phrasal verb',
      word: 'look forward to', ipa: '/lʊk ˈfɔːr.wərd tuː/',
      meaning: 'mong chờ, háo hức đón đợi',
      example: 'I look forward to hearing your thoughts on the new design.',
      exampleVi: 'Tôi rất mong chờ được nghe ý kiến của bạn về thiết kế mới.',
      tip: 'LỖI HAY GẶP: Sau "look forward to" là V-ing hoặc danh từ (KHÔNG phải V nguyên mẫu).'
    },
    {
      id: 'v-43', topic: 'phrasal', level: 'B1', pos: 'phrasal verb',
      word: 'catch up', ipa: '/kætʃ ʌp/',
      meaning: 'bắt kịp tiến độ / gặp gỡ hỏi thăm sau thời gian xa nhau',
      example: 'Let\'s grab coffee this weekend and catch up!',
      exampleVi: 'Cuối tuần này đi uống cà phê và hỏi thăm nhau nhé!',
      tip: 'Catch up with someone (gặp trò chuyện hoặc bắt kịp ai đó).'
    },
    {
      id: 'v-44', topic: 'phrasal', level: 'B1', pos: 'phrasal verb',
      word: 'put off', ipa: '/pʊt ɒf/',
      meaning: 'trì hoãn, dời lại sau',
      example: 'Stop putting off your English practice until tomorrow.',
      exampleVi: 'Đừng trì hoãn việc luyện tiếng Anh đến ngày mai nữa.',
      tip: 'Đồng nghĩa trang trọng hơn: postpone. Đi với V-ing.'
    },
    {
      id: 'v-45', topic: 'phrasal', level: 'B2', pos: 'phrasal verb',
      word: 'come up with', ipa: '/kʌm ʌp wɪð/',
      meaning: 'nghĩ ra (ý tưởng, kế hoạch, giải pháp)',
      example: 'She came up with a clever way to remember irregular verbs.',
      exampleVi: 'Cô ấy nghĩ ra một cách thông minh để nhớ các động từ bất quy tắc.',
      tip: 'Luôn có đủ 3 từ: come + up + with + danh từ.'
    },
    {
      id: 'v-46', topic: 'phrasal', level: 'B1', pos: 'phrasal verb',
      word: 'run out of', ipa: '/rʌn aʊt əv/',
      meaning: 'hết sạch, cạn kiệt',
      example: 'We ran out of coffee beans, so I bought a fresh bag.',
      exampleVi: 'Chúng tôi hết hạt cà phê rồi nên tôi đã mua một túi mới.',
      tip: 'Chủ ngữ là người/nhóm: "I ran out of time" (Tôi hết thời gian rồi).'
    },
    {
      id: 'v-47', topic: 'phrasal', level: 'B1', pos: 'phrasal verb',
      word: 'turn down', ipa: '/tɜːrn daʊn/',
      meaning: 'từ chối (lời mời/đề nghị) hoặc vặn nhỏ âm lượng',
      example: 'He turned down the job offer because the commute was too long.',
      exampleVi: 'Anh ấy từ chối lời mời làm việc vì quãng đường đi lại quá xa.',
      tip: 'Ngược lại với vặn nhỏ: turn up (vặn to lên).'
    },
    {
      id: 'v-48', topic: 'phrasal', level: 'B2', pos: 'phrasal verb',
      word: 'carry out', ipa: '/ˈkær.i aʊt/',
      meaning: 'tiến hành, thực hiện (nghiên cứu, kế hoạch)',
      example: 'Researchers carried out a survey of over 1,000 English learners.',
      exampleVi: 'Các nhà nghiên cứu đã tiến hành khảo sát hơn 1.000 người học tiếng Anh.',
      tip: 'Đồng nghĩa học thuật: conduct.'
    },
    {
      id: 'v-49', topic: 'phrasal', level: 'A2', pos: 'phrasal verb',
      word: 'pick up', ipa: '/pɪk ʌp/',
      meaning: 'đón ai đó / học lỏm, tiếp thu nhanh / nhặt lên',
      example: 'Children pick up new languages surprisingly fast.',
      exampleVi: 'Trẻ em tiếp thu ngôn ngữ mới nhanh đến bất ngờ.',
      tip: 'Nghĩa rất đa năng: pick someone up at the airport (đón ai ở sân bay).'
    },
    {
      id: 'v-50', topic: 'phrasal', level: 'B2', pos: 'phrasal verb',
      word: 'get along with', ipa: '/ɡet əˈlɒŋ wɪð/',
      meaning: 'hòa hợp, có mối quan hệ tốt với ai',
      example: 'I get along really well with everyone on my new team.',
      exampleVi: 'Tôi hòa hợp rất tốt với mọi người trong nhóm mới.',
      tip: 'Trong Anh-Anh hay nói "get on well with".'
    },

    // --- Feelings ---
    {
      id: 'v-51', topic: 'feelings', level: 'B1', pos: 'adjective',
      word: 'confident', ipa: '/ˈkɒn.fɪ.dənt/',
      meaning: 'tự tin',
      example: 'Practicing out loud every day makes you more confident in interviews.',
      exampleVi: 'Luyện nói thành tiếng mỗi ngày giúp bạn tự tin hơn khi phỏng vấn.',
      tip: 'Cấu trúc: feel confident about something / in doing something.'
    },
    {
      id: 'v-52', topic: 'feelings', level: 'B2', pos: 'adjective',
      word: 'overwhelmed', ipa: '/ˌəʊ.vəˈwelmd/',
      meaning: 'choáng ngợp, quá tải cảm xúc/công việc',
      example: 'Do not feel overwhelmed by grammar rules; take them one step at a time.',
      exampleVi: 'Đừng cảm thấy quá tải bởi quy tắc ngữ pháp; hãy học từng bước một.',
      tip: 'Người cảm thấy dùng -ed (overwhelmed); thứ gây ra dùng -ing (overwhelming).'
    },
    {
      id: 'v-53', topic: 'feelings', level: 'B1', pos: 'adjective',
      word: 'grateful', ipa: '/ˈɡreɪt.fəl/',
      meaning: 'biết ơn, trân trọng',
      example: 'I am deeply grateful for all the support you gave me this year.',
      exampleVi: 'Tôi vô cùng biết ơn tất cả sự hỗ trợ bạn đã dành cho tôi năm nay.',
      tip: 'Chú ý chính tả: GRATEful (không phải greatful!).'
    },
    {
      id: 'v-54', topic: 'feelings', level: 'B1', pos: 'adjective',
      word: 'curious', ipa: '/ˈkjʊə.ri.əs/',
      meaning: 'tò mò, ham học hỏi',
      example: 'Staying curious is the secret to learning anything deeply.',
      exampleVi: 'Giữ sự tò mò là bí quyết để học sâu bất cứ điều gì.',
      tip: 'Đi với giới từ "about": curious about other cultures.'
    },
    {
      id: 'v-55', topic: 'feelings', level: 'B2', pos: 'adjective',
      word: 'resilient', ipa: '/rɪˈzɪl.jənt/',
      meaning: 'kiên cường, nhanh chóng phục hồi sau khó khăn',
      example: 'Resilient learners treat mistakes as helpful clues, not failures.',
      exampleVi: 'Người học kiên cường xem lỗi sai là gợi ý hữu ích chứ không phải thất bại.',
      tip: 'Danh từ: resilience (sự bền bỉ, khả năng phục hồi).'
    },
    {
      id: 'v-56', topic: 'feelings', level: 'B1', pos: 'adjective',
      word: 'enthusiastic', ipa: '/ɪnˌθjuː.ziˈæs.tɪk/',
      meaning: 'nhiệt huyết, hào hứng',
      example: 'The audience gave an enthusiastic round of applause.',
      exampleVi: 'Khán giả đã dành một tràng pháo tay đầy hào hứng.',
      tip: 'Đi với "about": enthusiastic about the project.'
    },
    {
      id: 'v-57', topic: 'feelings', level: 'B1', pos: 'adjective',
      word: 'frustrated', ipa: '/frʌsˈtreɪ.tɪd/',
      meaning: 'bực bội, nản lòng (vì không đạt kết quả như ý)',
      example: 'It is completely normal to feel frustrated when you forget a word.',
      exampleVi: 'Cảm thấy bực bội khi quên từ vựng là chuyện hoàn toàn bình thường.',
      tip: 'Khác với angry (tức giận): frustrated nhấn mạnh sự bất lực/sốt ruột.'
    },
    {
      id: 'v-58', topic: 'feelings', level: 'B2', pos: 'adjective',
      word: 'thoughtful', ipa: '/ˈθɔːt.fəl/',
      meaning: 'chu đáo, sâu sắc, biết nghĩ cho người khác',
      example: 'Sending a handwritten thank-you note was such a thoughtful gesture.',
      exampleVi: 'Gửi thiệp cảm ơn viết tay là một cử chỉ thật chu đáo.',
      tip: 'Vừa có nghĩa "chu đáo" vừa có nghĩa "trầm tư/sâu sắc".'
    },
    {
      id: 'v-59', topic: 'feelings', level: 'B1', pos: 'adjective',
      word: 'relieved', ipa: '/rɪˈliːvd/',
      meaning: 'nhẹ nhõm, thở phào',
      example: 'I felt so relieved when I saw my passing exam score.',
      exampleVi: 'Tôi thấy nhẹ nhõm vô cùng khi nhìn thấy điểm đậu kỳ thi.',
      tip: 'Cụm hay dùng: breathe a sigh of relief (thở phào nhẹ nhõm).'
    },
    {
      id: 'v-60', topic: 'feelings', level: 'B2', pos: 'adjective',
      word: 'determined', ipa: '/dɪˈtɜːr.mɪnd/',
      meaning: 'quyết tâm, kiên định',
      example: 'She is determined to speak English fluently within twelve months.',
      exampleVi: 'Cô ấy quyết tâm nói tiếng Anh trôi chảy trong vòng mười hai tháng.',
      tip: 'Cấu trúc: be determined to + V(nguyên mẫu).'
    }
  ],

  listeningExercises: [
    {
      id: 'l-01', level: 'A2',
      sentence: 'Could you please speak a little slower so I can follow?',
      blankWord: 'slower',
      vi: 'Bạn vui lòng nói chậm lại một chút để tôi có thể theo kịp được không?',
      note: 'Chú ý nối âm "speak a" (/spiːk‿ə/) và "little slower".'
    },
    {
      id: 'l-02', level: 'A2',
      sentence: 'I usually drink a cup of black coffee before starting work.',
      blankWord: 'usually',
      vi: 'Tôi thường uống một tách cà phê đen trước khi bắt đầu làm việc.',
      note: 'Từ "usually" đọc 3 âm tiết /ˈjuː.ʒu.ə.li/, âm giữa là /ʒ/.'
    },
    {
      id: 'l-03', level: 'B1',
      sentence: 'We need to reschedule tomorrow morning\'s meeting to three o\'clock.',
      blankWord: 'reschedule',
      vi: 'Chúng ta cần dời cuộc họp sáng mai sang ba giờ chiều.',
      note: 'Anh-Mỹ đọc /ˌriːˈskedʒ.uːl/, Anh-Anh đọc /ˌriːˈʃedʒ.uːl/.'
    },
    {
      id: 'l-04', level: 'B1',
      sentence: 'Listening to short podcasts every day builds natural pronunciation.',
      blankWord: 'pronunciation',
      vi: 'Nghe podcast ngắn mỗi ngày giúp xây dựng phát âm tự nhiên.',
      note: 'Pronunciation viết là "nun" (không có "o" như động từ pronounce).'
    },
    {
      id: 'l-05', level: 'B1',
      sentence: 'Please double-check your boarding pass before heading to the gate.',
      blankWord: 'boarding',
      vi: 'Vui lòng kiểm tra kỹ thẻ lên máy bay trước khi ra cửa khởi hành.',
      note: 'Double-check nghĩa là kiểm tra lại lần hai cho chắc chắn.'
    },
    {
      id: 'l-06', level: 'B1',
      sentence: 'Thank you so much for your thoughtful feedback on this proposal.',
      blankWord: 'feedback',
      vi: 'Cảm ơn bạn rất nhiều vì những góp ý sâu sắc cho bản đề xuất này.',
      note: 'Âm /θ/ trong "thank" và "thoughtful" đặt đầu lưỡi nhẹ giữa hai hàm răng.'
    },
    {
      id: 'l-07', level: 'B2',
      sentence: 'Consistent daily practice beats studying for five hours once a week.',
      blankWord: 'consistent',
      vi: 'Luyện tập đều đặn mỗi ngày hiệu quả hơn học 5 tiếng một lần mỗi tuần.',
      note: 'Trọng âm của "consistent" rơi vào âm tiết thứ hai: con-SIS-tent.'
    },
    {
      id: 'l-08', level: 'B2',
      sentence: 'Our team is looking forward to collaborating with you next quarter.',
      blankWord: 'collaborating',
      vi: 'Nhóm chúng tôi rất mong chờ được hợp tác với bạn trong quý tới.',
      note: 'Chú ý "looking forward to" luôn đi với V-ing (collaborating).'
    },
    {
      id: 'l-09', level: 'B1',
      sentence: 'Could you recommend a quiet cafe with reliable internet nearby?',
      blankWord: 'reliable',
      vi: 'Bạn có thể gợi ý một quán cà phê yên tĩnh có mạng ổn định gần đây không?',
      note: 'Trọng âm rơi vào âm tiết 2: re-LI-a-ble.'
    },
    {
      id: 'l-10', level: 'B2',
      sentence: 'Never hesitate to ask clarifying questions during a technical discussion.',
      blankWord: 'hesitate',
      vi: 'Đừng bao giờ ngần ngại đặt câu hỏi làm rõ trong một buổi thảo luận kỹ thuật.',
      note: 'Clarifying questions = câu hỏi để xác nhận cho rõ ý.'
    }
  ],

  grammarLessons: [
    {
      id: 'g-present',
      title: 'Hiện tại đơn vs Hiện tại tiếp diễn',
      subtitle: 'Present Simple vs Present Continuous',
      level: 'A2',
      summary: 'Phân biệt thói quen, sự thật hiển nhiên với hành động đang diễn ra ngay lúc nói hoặc kế hoạch ngắn hạn.',
      formulas: [
        'Hiện tại đơn: S + V(s/es) | Do/Does + S + V?',
        'Hiện tại tiếp diễn: S + am/is/are + V-ing'
      ],
      rules: [
        'Dùng Hiện tại đơn cho thói quen (every day, usually, always), sự thật hiển nhiên, lịch trình cố định.',
        'Dùng Hiện tại tiếp diễn cho việc đang xảy ra lúc nói (now, right now, at the moment) hoặc xu hướng tạm thời (this month).',
        'Không dùng dạng tiếp diễn với động từ chỉ trạng thái (stative verbs): know, believe, understand, want, need, prefer.'
      ],
      examples: [
        { en: 'She writes in English every morning.', vi: 'Cô ấy viết tiếng Anh mỗi sáng. (Thói quen)' },
        { en: 'She is writing an email to a client right now.', vi: 'Cô ấy đang viết email cho khách hàng ngay lúc này.' },
        { en: 'I understand what you mean now.', vi: 'Bây giờ tôi hiểu ý bạn rồi. (Không nói "I am understanding")' }
      ],
      pitfall: 'Người Việt hay quên thêm "-s/-es" ở ngôi thứ 3 số ít (He work -> He works) hoặc dùng "am knowing / am wanting" với động từ trạng thái.',
      questions: [
        {
          q: 'Listen! Someone _____ the piano in the next room.',
          options: ['plays', 'is playing', 'played', 'play'],
          answer: 1,
          explain: 'Có dấu hiệu "Listen!" chỉ hành động đang diễn ra ngay lúc nói -> dùng Hiện tại tiếp diễn (is playing).'
        },
        {
          q: 'Water _____ at 100 degrees Celsius at sea level.',
          options: ['is boiling', 'boil', 'boils', 'boiled'],
          answer: 2,
          explain: 'Sự thật khoa học hiển nhiên -> Hiện tại đơn, chủ ngữ "Water" số ít -> boils.'
        },
        {
          q: 'I _____ this grammar rule much better now.',
          options: ['am understanding', 'understand', 'understands', 'understooding'],
          answer: 1,
          explain: '"Understand" là động từ trạng thái (stative verb), không chia thì tiếp diễn -> understand.'
        }
      ]
    },
    {
      id: 'g-past-perfect',
      title: 'Quá khứ đơn vs Hiện tại hoàn thành',
      subtitle: 'Past Simple vs Present Perfect',
      level: 'B1',
      summary: 'Cặp thì dễ nhầm nhất của người học tiếng Anh: khi nào nhắc mốc thời gian cụ thể và khi nào nhấn mạnh kết quả đến hiện tại.',
      formulas: [
        'Quá khứ đơn: S + V2/V-ed | Did + S + V?',
        'Hiện tại hoàn thành: S + have/has + V3/V-ed'
      ],
      rules: [
        'Dùng Quá khứ đơn khi hành động ĐÃ CHẤM DỨT tại một mốc thời gian xác định trong quá khứ: yesterday, last week, in 2022, two days ago.',
        'Dùng Hiện tại hoàn thành khi không nêu mốc cụ thể, hoặc việc bắt đầu trong quá khứ và kéo dài đến hiện tại: since, for, already, yet, ever, never, recently.'
      ],
      examples: [
        { en: 'I visited Singapore in 2023.', vi: 'Tôi đã đến Singapore năm 2023. (Có mốc cụ thể "in 2023")' },
        { en: 'I have visited Singapore three times.', vi: 'Tôi đã từng đến Singapore ba lần. (Trải nghiệm tính đến nay)' },
        { en: 'She has lived in Ho Chi Minh City for five years.', vi: 'Cô ấy sống ở TP.HCM đã được 5 năm (và hiện vẫn sống).' }
      ],
      pitfall: 'TUYỆT ĐỐI không dùng Present Perfect với mốc quá khứ cụ thể. Sai: "I have met him yesterday." -> Đúng: "I met him yesterday."',
      questions: [
        {
          q: 'We _____ that project last Friday.',
          options: ['have finished', 'finished', 'finish', 'has finished'],
          answer: 1,
          explain: 'Có mốc quá khứ xác định "last Friday" -> bắt buộc dùng Quá khứ đơn (finished).'
        },
        {
          q: '_____ you ever _____ pho in Hanoi?',
          options: ['Did / tried', 'Have / tried', 'Do / try', 'Has / tried'],
          answer: 1,
          explain: 'Hỏi về trải nghiệm trong đời với "ever" -> Hiện tại hoàn thành (Have you ever tried).'
        },
        {
          q: 'He has worked at this company _____ 2021.',
          options: ['for', 'ago', 'since', 'in'],
          answer: 2,
          explain: '2021 là một mốc thời gian bắt đầu -> dùng "since" (còn "for" đi với khoảng thời gian như for 3 years).'
        }
      ]
    },
    {
      id: 'g-conditionals',
      title: 'Câu điều kiện (Conditionals 0, 1, 2, 3)',
      subtitle: 'If-Clauses cho thực tế và giả định',
      level: 'B1',
      summary: 'Diễn đạt nguyên nhân - kết quả, tình huống có thể xảy ra ở tương lai, hoặc giả định trái với hiện tại và quá khứ.',
      formulas: [
        'Loại 1 (Có thể xảy ra): If + S + V(hiện tại), S + will/can + V',
        'Loại 2 (Trái hiện tại): If + S + V2/were, S + would/could + V',
        'Loại 3 (Trái quá khứ): If + S + had + V3, S + would have + V3'
      ],
      rules: [
        'Loại 1 nói về kế hoạch/khả năng thực tế ở tương lai.',
        'Loại 2 nói về điều không có thật ở hiện tại hoặc lời khuyên ("If I were you...").',
        'Loại 3 nói về sự tiếc nuối hoặc giả định khác đi cho chuyện đã xảy ra trong quá khứ.'
      ],
      examples: [
        { en: 'If you practice 15 minutes daily, you will notice progress quickly.', vi: 'Nếu bạn luyện 15 phút mỗi ngày, bạn sẽ thấy tiến bộ nhanh chóng.' },
        { en: 'If I were you, I would take that opportunity.', vi: 'Nếu tôi là bạn, tôi sẽ nắm lấy cơ hội đó.' },
        { en: 'If we had left earlier, we would not have missed the train.', vi: 'Nếu chúng ta đi sớm hơn thì đã không lỡ chuyến tàu.' }
      ],
      pitfall: 'Không đặt "will" hoặc "would" bên trong mệnh đề If! Sai: "If it will rain..." -> Đúng: "If it rains..."',
      questions: [
        {
          q: 'If it _____ tomorrow, we will stay indoors and watch a movie.',
          options: ['will rain', 'rained', 'rains', 'would rain'],
          answer: 2,
          explain: 'Câu điều kiện loại 1: mệnh đề If chia Hiện tại đơn -> rains.'
        },
        {
          q: 'If I _____ more free time, I would learn a third language.',
          options: ['have', 'had', 'will have', 'having'],
          answer: 1,
          explain: 'Giả định trái với hiện tại (loại 2): mệnh đề If dùng V2 (had) kết hợp "would + V".'
        },
        {
          q: 'She would have passed the test if she _____ harder.',
          options: ['studied', 'studies', 'had studied', 'would study'],
          answer: 2,
          explain: 'Mệnh đề chính có "would have passed" (loại 3) -> mệnh đề If dùng Quá khứ hoàn thành (had studied).'
        }
      ]
    },
    {
      id: 'g-prepositions',
      title: 'Giới từ thời gian & nơi chốn (In / On / At)',
      subtitle: 'Quy tắc Kim tự tháp dễ nhớ mãi mãi',
      level: 'A2',
      summary: 'Làm chủ 3 giới từ xuất hiện trong hầu hết mọi câu tiếng Anh bằng quy tắc từ Rộng đến Hẹp.',
      formulas: [
        'IN (Rộng nhất): Năm, tháng, mùa, buổi (in the morning), quốc gia, thành phố, không gian kín',
        'ON (Trung bình): Ngày trong tuần, ngày tháng cụ thể, bề mặt, phương tiện lớn (on the bus/train)',
        'AT (Cụ thể nhất): Giờ chính xác, địa điểm cụ thể (at home, at the airport, at night)'
      ],
      rules: [
        'Thời gian: in 2026 -> in November -> on Monday / on November 25th -> at 7:30 a.m.',
        'Nơi chốn: in Vietnam -> in Hanoi -> on Nguyen Hue Street -> at 42 Nguyen Hue Street.',
        'Ngoại lệ cần nhớ: at night, at noon, at the weekend (UK) / on the weekend (US).'
      ],
      examples: [
        { en: 'Our flight departs at 8:15 a.m. on Tuesday.', vi: 'Chuyến bay của chúng tôi khởi hành lúc 8:15 sáng thứ Ba.' },
        { en: 'She was born in October in Da Nang.', vi: 'Cô ấy sinh vào tháng Mười tại Đà Nẵng.' },
        { en: 'I left my notebook on the kitchen table.', vi: 'Tôi để quyển sổ trên bàn bếp.' }
      ],
      pitfall: 'Không dùng in/on/at trước: today, tomorrow, yesterday, next week, last month, every day! Sai: "in next week" -> Đúng: "next week".',
      questions: [
        {
          q: 'The workshop starts _____ 9:00 a.m. _____ Saturday morning.',
          options: ['in / on', 'at / on', 'on / at', 'at / in'],
          answer: 1,
          explain: 'Giờ cụ thể dùng "at 9:00 a.m.", buổi của một ngày cụ thể dùng "on Saturday morning".'
        },
        {
          q: 'Let\'s meet _____ the main entrance of the library.',
          options: ['at', 'on', 'in', 'to'],
          answer: 0,
          explain: 'Một điểm hẹn cụ thể (cổng chính thư viện) -> dùng "at".'
        },
        {
          q: 'We are traveling to Japan _____ next spring.',
          options: ['in', 'on', 'at', '(không cần giới từ)'],
          answer: 3,
          explain: 'Trước "next / last / this / every" KHÔNG dùng giới từ in/on/at.'
        }
      ]
    },
    {
      id: 'g-passive',
      title: 'Câu bị động (Passive Voice)',
      subtitle: 'Nhấn mạnh hành động hoặc đối tượng chịu tác động',
      level: 'B1',
      summary: 'Cực kỳ hữu ích trong văn phong công sở, báo cáo, kỹ thuật và IELTS Writing khi không cần nêu rõ ai làm hành động đó.',
      formulas: [
        'Cấu trúc chung: S + be (chia theo thì) + V3/V-ed (+ by O)',
        'Hiện tại đơn: is/are + V3 | Quá khứ đơn: was/were + V3',
        'Hiện tại hoàn thành: have/has been + V3 | Modal: can/should/must be + V3'
      ],
      rules: [
        'Dùng khi đối tượng bị tác động quan trọng hơn chủ thể thực hiện.',
        'Dùng khi không biết hoặc không cần nhắc ai đã làm hành động đó.',
        'Luôn đảm bảo động từ "be" chia đúng thì và số ít/nhiều của chủ ngữ mới.'
      ],
      examples: [
        { en: 'English is spoken in over 50 countries worldwide.', vi: 'Tiếng Anh được nói ở hơn 50 quốc gia trên toàn thế giới.' },
        { en: 'The bug was fixed before the product launch.', vi: 'Lỗi đã được sửa trước khi ra mắt sản phẩm.' },
        { en: 'This report must be submitted by Friday.', vi: 'Báo cáo này phải được nộp trước thứ Sáu.' }
      ],
      pitfall: 'Thiếu động từ "be" hoặc quên đưa động từ chính về V3. Sai: "The email was send." -> Đúng: "The email was sent."',
      questions: [
        {
          q: 'The new software update _____ by our engineering team yesterday.',
          options: ['released', 'was released', 'is releasing', 'has released'],
          answer: 1,
          explain: 'Chủ ngữ là vật (update) chịu tác động + mốc "yesterday" -> Quá khứ đơn bị động (was released).'
        },
        {
          q: 'All personal data must _____ securely.',
          options: ['store', 'be stored', 'storing', 'stored'],
          answer: 1,
          explain: 'Bị động với động từ khuyết thiếu (must): must + be + V3 (be stored).'
        },
        {
          q: 'Three new bridges _____ in this city since 2020.',
          options: ['have been built', 'built', 'are building', 'were build'],
          answer: 0,
          explain: 'Có "since 2020" -> Hiện tại hoàn thành bị động: have been built.'
        }
      ]
    },
    {
      id: 'g-relative',
      title: 'Mệnh đề quan hệ (Relative Clauses)',
      subtitle: 'Who, Which, That, Whose, Where',
      level: 'B1',
      summary: 'Gộp hai câu ngắn thành một câu tiếng Anh mượt mà, tự nhiên và giàu thông tin hơn.',
      formulas: [
        'who / that -> thay cho NGƯỜI',
        'which / that -> thay cho VẬT, SỰ VIỆC',
        'whose + N -> chỉ SỞ HỮU | where -> chỉ NƠI CHỐN'
      ],
      rules: [
        'Trong mệnh đề quan hệ không xác định (có dấu phẩy), KHÔNG được dùng "that" — chỉ dùng who/which.',
        'Có thể lược bỏ who/which/that khi nó đóng vai trò tân ngữ ("The book (that) I read was inspiring").'
      ],
      examples: [
        { en: 'The teacher who helped me improve my pronunciation lives nearby.', vi: 'Cô giáo người giúp tôi cải thiện phát âm sống gần đây.' },
        { en: 'This is the café where we practiced speaking last week.', vi: 'Đây là quán cà phê nơi chúng tôi luyện nói tuần trước.' },
        { en: 'My laptop, which I bought in 2024, still runs like new.', vi: 'Chiếc laptop của tôi, cái tôi mua năm 2024, vẫn chạy như mới.' }
      ],
      pitfall: 'Lặp lại đại từ thừa trong mệnh đề quan hệ! Sai: "The movie which I watched it was great." -> Đúng: "The movie which I watched was great."',
      questions: [
        {
          q: 'That is the developer _____ built our entire learning platform.',
          options: ['which', 'who', 'whose', 'where'],
          answer: 1,
          explain: '"The developer" là người, làm chủ ngữ của động từ "built" -> dùng "who".'
        },
        {
          q: 'Da Lat, _____ is famous for its cool weather, attracts many visitors.',
          options: ['that', 'where', 'which', 'who'],
          answer: 2,
          explain: 'Sau dấu phẩy (mệnh đề không xác định) không dùng "that"; thay cho chủ ngữ chỉ địa danh -> dùng "which".'
        },
        {
          q: 'I met a student _____ native language is Japanese.',
          options: ['who', 'whom', 'whose', 'which'],
          answer: 2,
          explain: 'Chỉ sự sở hữu (ngôn ngữ mẹ đẻ CỦA học sinh đó) -> dùng "whose" + danh từ.'
        }
      ]
    }
  ],

  dialogues: [
    {
      id: 'd-coffee',
      title: 'Gọi đồ uống ở quán cà phê',
      level: 'A2',
      setting: 'Quán cà phê buổi sáng — Giao tiếp lịch sự, tự nhiên',
      lines: [
        { speaker: 'Barista', alt: false, en: 'Good morning! What can I get started for you today?', vi: 'Chào buổi sáng! Hôm nay tôi có thể chuẩn bị đồ uống gì cho bạn?' },
        { speaker: 'Bạn', alt: true, en: 'Hi! Could I have an iced latte with oat milk, please?', vi: 'Chào bạn! Cho mình một ly latte đá với sữa yến mạch nhé.' },
        { speaker: 'Barista', alt: false, en: 'Sure thing. What size would you like — regular or large?', vi: 'Được ngay. Bạn muốn cỡ nào — cỡ vừa hay cỡ lớn?' },
        { speaker: 'Bạn', alt: true, en: 'Regular is fine. Also, could you make it less sweet?', vi: 'Cỡ vừa là được ạ. À, bạn làm ít ngọt giúp mình nhé.' },
        { speaker: 'Barista', alt: false, en: 'No problem at all. Would you like anything to eat with that?', vi: 'Không vấn đề gì. Bạn có muốn dùng thêm đồ ăn gì kèm theo không?' },
        { speaker: 'Bạn', alt: true, en: 'Just a warm almond croissant, please. For here.', vi: 'Cho mình thêm một bánh sừng bò hạnh nhân hâm nóng nhé. Mình dùng tại quán.' },
        { speaker: 'Barista', alt: false, en: 'Great, that comes to eight dollars fifty. I\'ll call your name when it\'s ready!', vi: 'Tuyệt vời, tổng cộng là 8 đô 50 xu. Khi nào xong mình sẽ gọi tên bạn nhé!' }
      ],
      phrases: [
        { en: 'Could I have ... please?', vi: 'Cho tôi gọi ... (lịch sự hơn "I want")' },
        { en: 'make it less sweet', vi: 'làm ít ngọt hơn' },
        { en: 'For here or to go?', vi: 'Dùng tại quán hay mang đi?' }
      ]
    },
    {
      id: 'd-interview',
      title: 'Phỏng vấn xin việc bằng tiếng Anh',
      level: 'B2',
      setting: 'Phỏng vấn vị trí chuyên môn — Tự tin & súc tích',
      lines: [
        { speaker: 'Interviewer', alt: false, en: 'Thanks for coming in today. Could you briefly walk me through your background?', vi: 'Cảm ơn bạn đã đến hôm nay. Bạn có thể giới thiệu ngắn gọn về kinh nghiệm của mình không?' },
        { speaker: 'Bạn', alt: true, en: 'Of course. For the past three years, I have worked on web products focused on user experience.', vi: 'Tất nhiên rồi. Trong 3 năm qua, tôi làm việc với các sản phẩm web tập trung vào trải nghiệm người dùng.' },
        { speaker: 'Interviewer', alt: false, en: 'What kind of project are you most proud of so far?', vi: 'Dự án nào bạn tự hào nhất cho đến nay?' },
        { speaker: 'Bạn', alt: true, en: 'I led a redesign that cut page load time in half and boosted daily engagement by thirty percent.', vi: 'Tôi phụ trách đợt thiết kế lại giúp giảm một nửa thời gian tải trang và tăng 30% mức độ tương tác hằng ngày.' },
        { speaker: 'Interviewer', alt: false, en: 'That sounds impressive. How do you handle tight deadlines?', vi: 'Nghe rất ấn tượng. Bạn xử lý các hạn chót gấp như thế nào?' },
        { speaker: 'Bạn', alt: true, en: 'I break work into clear milestones, prioritize critical tasks, and communicate early if any risks come up.', vi: 'Tôi chia nhỏ công việc thành các cột mốc rõ ràng, ưu tiên việc trọng yếu và trao đổi sớm nếu phát sinh rủi ro.' }
      ],
      phrases: [
        { en: 'walk me through ...', vi: 'trình bày tóm lược cho tôi nghe về ...' },
        { en: 'cut ... in half', vi: 'giảm một nửa ...' },
        { en: 'communicate early', vi: 'trao đổi chủ động từ sớm' }
      ]
    },
    {
      id: 'd-hotel',
      title: 'Nhận phòng khách sạn (Hotel Check-in)',
      level: 'B1',
      setting: 'Quầy lễ tân khách sạn khi đi du lịch nước ngoài',
      lines: [
        { speaker: 'Receptionist', alt: false, en: 'Welcome to Harbor View Hotel. How may I assist you?', vi: 'Chào mừng đến với Khách sạn Harbor View. Tôi có thể hỗ trợ gì cho quý khách?' },
        { speaker: 'Bạn', alt: true, en: 'Hi, I have a reservation for three nights under the name Linh Tran.', vi: 'Xin chào, tôi có đặt phòng 3 đêm dưới tên Linh Trần.' },
        { speaker: 'Receptionist', alt: false, en: 'Let me check that for you. Yes, a deluxe room with breakfast included. May I see your passport?', vi: 'Để tôi kiểm tra nhé. Vâng, một phòng deluxe kèm bữa sáng. Cho tôi mượn hộ chiếu của bạn được không?' },
        { speaker: 'Bạn', alt: true, en: 'Here you go. By the way, is it possible to request a quiet room on a higher floor?', vi: 'Đây ạ. Nhân tiện, tôi có thể xin một phòng yên tĩnh ở tầng cao hơn được không?' },
        { speaker: 'Receptionist', alt: false, en: 'Certainly! We have room 1208 available overlooking the park. Breakfast is served from 6:30 to 10.', vi: 'Chắc chắn rồi! Chúng tôi có phòng 1208 hướng nhìn ra công viên. Bữa sáng phục vụ từ 6:30 đến 10 giờ.' },
        { speaker: 'Bạn', alt: true, en: 'That sounds wonderful. Thank you so much!', vi: 'Nghe thật tuyệt. Cảm ơn bạn nhiều nhé!' }
      ],
      phrases: [
        { en: 'under the name ...', vi: 'đặt dưới tên ...' },
        { en: 'with breakfast included', vi: 'đã bao gồm bữa sáng' },
        { en: 'Is it possible to request ...?', vi: 'Tôi có thể yêu cầu ... được không?' }
      ]
    },
    {
      id: 'd-standup',
      title: 'Họp Daily Standup nhóm công nghệ',
      level: 'B1',
      setting: 'Cuộc họp ngắn 15 phút buổi sáng với đồng nghiệp quốc tế',
      lines: [
        { speaker: 'Tech Lead', alt: false, en: 'Morning everyone! Let\'s do a quick round of updates. Minh, would you like to go first?', vi: 'Chào buổi sáng mọi người! Hãy cập nhật nhanh tiến độ nhé. Minh nói trước được không?' },
        { speaker: 'Bạn', alt: true, en: 'Sure. Yesterday I finished building the vocabulary flashcards and fixed a responsive layout bug.', vi: 'Được ạ. Hôm qua tôi hoàn thành phần thẻ từ vựng và sửa một lỗi hiển thị di động.' },
        { speaker: 'Tech Lead', alt: false, en: 'Awesome. What is on your plate for today?', vi: 'Tuyệt vời. Hôm nay bạn dự định làm gì?' },
        { speaker: 'Bạn', alt: true, en: 'Today I\'m focusing on the listening practice feature and writing a few automated checks.', vi: 'Hôm nay tôi tập trung vào tính năng luyện nghe và viết một vài kiểm tra tự động.' },
        { speaker: 'Tech Lead', alt: false, en: 'Any blockers we should help clear?', vi: 'Có vướng mắc nào cần cả nhóm hỗ trợ gỡ không?' },
        { speaker: 'Bạn', alt: true, en: 'No blockers on my end — I\'ll share a preview link in chat this afternoon.', vi: 'Bên tôi không có vướng mắc gì — chiều nay tôi sẽ gửi link xem thử vào nhóm chat.' }
      ],
      phrases: [
        { en: 'What is on your plate?', vi: 'Bạn có những đầu việc nào cần làm?' },
        { en: 'Any blockers?', vi: 'Có trở ngại/vướng mắc nào không?' },
        { en: 'on my end', vi: 'về phía tôi' }
      ]
    },
    {
      id: 'd-directions',
      title: 'Hỏi đường & di chuyển bằng tàu điện',
      level: 'A2',
      setting: 'Ga tàu trung tâm ở nước ngoài',
      lines: [
        { speaker: 'Bạn', alt: true, en: 'Excuse me, could you tell me how to get to the National Museum from here?', vi: 'Xin lỗi, bạn có thể chỉ tôi cách đến Bảo tàng Quốc gia từ đây không?' },
        { speaker: 'Local', alt: false, en: 'Sure! Take the Green Line toward City Center and get off at the third stop.', vi: 'Được chứ! Bạn đi tuyến Xanh lá hướng về Trung tâm thành phố và xuống ở trạm thứ ba.' },
        { speaker: 'Bạn', alt: true, en: 'Got it — third stop on the Green Line. Is it far to walk from the station?', vi: 'Tôi hiểu rồi — trạm thứ ba tuyến Xanh lá. Đi bộ từ ga đến đó có xa không ạ?' },
        { speaker: 'Local', alt: false, en: 'Not at all. Take Exit B, go straight for two blocks, and you\'ll see it on your left.', vi: 'Không xa đâu. Bạn ra lối B, đi thẳng hai dãy nhà là sẽ thấy nó ở bên tay trái.' },
        { speaker: 'Bạn', alt: true, en: 'Thank you so much, I really appreciate your help!', vi: 'Cảm ơn bạn rất nhiều, tôi thật sự trân trọng sự giúp đỡ của bạn!' }
      ],
      phrases: [
        { en: 'get off at the third stop', vi: 'xuống ở trạm thứ ba' },
        { en: 'go straight for two blocks', vi: 'đi thẳng hai dãy phố' },
        { en: 'I really appreciate your help', vi: 'Tôi rất cảm kích sự giúp đỡ của bạn' }
      ]
    }
  ]
};
