/* ==========================================================================
   LingoCraft C1 Studio — Khóa Ôn Tập Nền Tảng Chuẩn Giáo Trình A0 → B1
   Tham chiếu chuẩn: Essential Grammar in Use & English Grammar in Use (Raymond Murphy),
   Oxford 3000, British Council LearnEnglish & Cambridge A2 Key / B1 Preliminary
   ========================================================================== */

window.FOUNDATION_DATA = {
  modules: [
    {
      id: 'f-a0',
      level: 'A0',
      badge: 'Chặng A0 · Khởi động chuẩn IPA',
      title: 'Phát âm 44 âm IPA, To Be, Đại từ & Trật tự câu gốc',
      goal: 'Xây móng phát âm chuẩn (nguyên âm dài/ngắn, âm /θ/ /ð/, đuôi -s/-ed) và nắm chắc cấu trúc câu cơ bản theo giáo trình Essential Grammar in Use (Units 1–10, 37, 59–64).',
      textbookRef: 'Essential Grammar in Use (R. Murphy) Units 1–10, 37, 59–64 · Oxford 3000 (A1 Core) · Cambridge Pre-A1/A1',
      referenceLinks: [
        { label: 'British Council — A1–A2 Grammar (Miễn phí)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2' },
        { label: 'British Council — Grammar Reference', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference' }
      ],
      minimalPairs: [
        {
          rule: 'Nguyên âm dài /iː/ vs ngắn /ɪ/',
          left: 'sheep', leftIpa: '/ʃiːp/', leftVi: 'con cừu',
          right: 'ship', rightIpa: '/ʃɪp/', rightVi: 'con tàu',
          tip: '/iː/ kéo dài và căng miệng cười; /ɪ/ ngắn, thả lỏng môi.'
        },
        {
          rule: 'Nguyên âm /æ/ (bẹt) vs /e/',
          left: 'bad', leftIpa: '/bæd/', leftVi: 'tệ, xấu',
          right: 'bed', rightIpa: '/bed/', rightVi: 'cái giường',
          tip: '/æ/ mở hàm rộng hơn hẳn /e/, âm lai giữa "a" và "e".'
        },
        {
          rule: 'Phụ âm lưỡi /θ/ vs /s/',
          left: 'think', leftIpa: '/θɪŋk/', leftVi: 'suy nghĩ',
          right: 'sink', rightIpa: '/sɪŋk/', rightVi: 'bồn rửa / chìm',
          tip: 'Đặt nhẹ đầu lưỡi giữa hai hàm răng rồi thổi hơi nhẹ cho /θ/.'
        },
        {
          rule: 'Phụ âm rung /ð/ vs /d/',
          left: 'they', leftIpa: '/ðeɪ/', leftVi: 'họ',
          right: 'day', rightIpa: '/deɪ/', rightVi: 'ngày',
          tip: 'Tương tự /θ/ nhưng rung dây thanh quản ở cổ họng.'
        },
        {
          rule: 'Đuôi -ed: /t/ vs /d/ vs /ɪd/',
          left: 'worked', leftIpa: '/wɜːrkt/', leftVi: 'đã làm việc (/t/)',
          right: 'wanted', rightIpa: '/ˈwɒn.tɪd/', rightVi: 'đã muốn (/ɪd/)',
          tip: 'Chỉ đọc thêm 1 âm tiết /ɪd/ sau âm cuối /t/ hoặc /d/ (wanted, needed, decided).'
        },
        {
          rule: 'Âm cuối /s/ và /z/ (Ending sounds)',
          left: 'price', leftIpa: '/praɪs/', leftVi: 'giá cả (/s/)',
          right: 'prize', rightIpa: '/praɪz/', rightVi: 'giải thưởng (/z/)',
          tip: 'Không nuốt âm cuối! /s/ vô thanh; /z/ hữu thanh rung cổ họng.'
        }
      ],
      grammarPoints: [
        {
          name: 'Động từ To Be & Trật tự câu gốc (Essential Grammar in Use — Units 1–2)',
          formula: 'S + am/is/are + Adj/Noun  |  S + V + O + Place + Time',
          example: 'The morning lesson is clear, and I study English at home every day.',
          exampleVi: 'Bài học sáng rất rõ ràng, và tôi học tiếng Anh ở nhà mỗi ngày. (Không bỏ quên "is" trước tính từ!)'
        },
        {
          name: 'Đại từ nhân xưng & Tính từ sở hữu (Units 59–62)',
          formula: 'Chủ ngữ: I/you/he/she/we/they | Tân ngữ: me/him/her/us/them | Sở hữu: my/his/her/our/their + N',
          example: 'She gave me her notebook so I could review our notes.',
          exampleVi: 'Cô ấy đưa tôi quyển sổ của cô ấy để tôi ôn ghi chú của chúng tôi.'
        },
        {
          name: 'Cấu trúc There is / There are & Câu hỏi cơ bản (Units 37, 44–45)',
          formula: 'There is + danh từ số ít/không đếm được | There are + số nhiều | Do/Does + S + V?',
          example: 'There are three quiet cafés near my office. Do you work nearby?',
          exampleVi: 'Có ba quán cà phê yên tĩnh gần văn phòng tôi. Bạn có làm gần đây không?'
        }
      ],
      reading: {
        title: 'Bài đọc ngắn chuẩn A0–A1: A Simple Morning Routine',
        text: 'My name is Tuan, and I am an office worker in Hanoi. Every weekday, I wake up at 6:30 a.m. There is a small park near my apartment, so I walk there for twenty minutes. After breakfast, I listen to one short English audio track before work. It is simple, but it helps me feel ready for the day.',
        question: 'What does Tuan do right before work?',
        options: ['He cooks dinner', 'He listens to a short English audio track', 'He visits his parents', 'He sleeps again'],
        answer: 1,
        explain: 'Trong bài có câu: "After breakfast, I listen to one short English audio track before work."'
      },
      phrases: [
        { word: 'introduce', chunk: 'Let me introduce myself', ipa: '/ˌɪn.trəˈdjuːs/', vi: 'Để tôi tự giới thiệu bản thân', ex: 'Hello everyone, let me introduce myself briefly.' },
        { word: 'repeat', chunk: 'Could you repeat that, please?', ipa: '/rɪˈpiːt/', vi: 'Bạn vui lòng nhắc lại được không?', ex: 'Sorry, I missed the last word. Could you repeat that, please?' },
        { word: 'pronounce', chunk: 'How do you pronounce this word?', ipa: '/prəˈnaʊns/', vi: 'Bạn phát âm từ này thế nào?', ex: 'Excuse me, how do you pronounce this word correctly?' },
        { word: 'schedule', chunk: 'What time does it start?', ipa: '/ˈskedʒ.uːl/', vi: 'Mấy giờ thì bắt đầu?', ex: 'What time does the morning session start?' },
        { word: 'understand', chunk: 'I don\'t quite understand', ipa: '/ˌʌn.dəˈstænd/', vi: 'Tôi chưa hiểu rõ lắm', ex: 'I don\'t quite understand the second rule yet.' },
        { word: 'spell', chunk: 'How do you spell your name?', ipa: '/spel/', vi: 'Tên bạn đánh vần như thế nào?', ex: 'Could you tell me how to spell your last name?' }
      ],
      drills: [
        {
          q: 'Chọn câu có động từ "to be" ĐÚNG ngữ pháp:',
          options: ['This coffee very hot.', 'This coffee is very hot.', 'This coffee are very hot.', 'Is very hot this coffee.'],
          answer: 1,
          explain: 'Trước tính từ "very hot" bắt buộc có động từ to be ("is" cho chủ ngữ số ít "This coffee").'
        },
        {
          q: 'Từ nào có đuôi "-ed" phát âm là /ɪd/ (thêm 1 âm tiết)?',
          options: ['worked', 'played', 'decided', 'watched'],
          answer: 2,
          explain: 'Động từ kết thúc bằng âm /t/ hoặc /d/ (decide → decided) đọc đuôi -ed là /ɪd/.'
        },
        {
          q: '_____ a great bookstore next to the train station.',
          options: ['There are', 'There is', 'It have', 'Have'],
          answer: 1,
          explain: '"A great bookstore" là danh từ số ít → dùng "There is" (không dịch "Có" thành "Have" đứng đầu câu!).'
        },
        {
          q: 'Chọn trật tự câu tự nhiên nhất trong tiếng Anh:',
          options: [
            'I every day practice English at home.',
            'I practice at home English every day.',
            'I practice English at home every day.',
            'Practice I English at home every day.'
          ],
          answer: 2,
          explain: 'Trật tự chuẩn: S (I) + V (practice) + O (English) + Nơi chốn (at home) + Thời gian (every day).'
        },
        {
          q: 'My colleagues are very friendly. I really enjoy working with _____.',
          options: ['they', 'their', 'them', 'theirs'],
          answer: 2,
          explain: 'Sau giới từ "with" phải dùng đại từ tân ngữ (object pronoun) → them.'
        }
      ]
    },

    {
      id: 'f-a1',
      level: 'A1',
      badge: 'Chặng A1 · Sơ cấp chuẩn Cambridge',
      title: 'Thì Hiện tại, Mạo từ a/an/the, Do vs Make & Lượng từ',
      goal: 'Làm chủ hệ thống ngữ pháp A1 cốt lõi theo Essential Grammar in Use (Units 3–8, 56, 65–73, 83–84, 103–108) — đặc biệt xóa lỗi Mạo từ và Do/Make của người Việt.',
      textbookRef: 'Essential Grammar in Use (R. Murphy) Units 3–8, 56, 65–73, 83–84, 103–108 · British Council A1–A2',
      referenceLinks: [
        { label: 'British Council — Articles: a, an, the', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the' },
        { label: 'British Council — Prepositions: at, in, on', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on' }
      ],
      grammarPoints: [
        {
          name: 'Hiện tại đơn vs Hiện tại tiếp diễn (Units 3–8)',
          formula: 'Thói quen / sự thật: S + V(s/es)  |  Đang diễn ra lúc nói: S + am/is/are + V-ing',
          example: 'I usually take the bus, but today I am walking to work.',
          exampleVi: 'Tôi thường đi xe buýt, nhưng hôm nay tôi đang đi bộ đi làm.'
        },
        {
          name: 'Mạo từ a / an / the / Ø (Units 65–73 — Lỗi hay gặp nhất của người Việt!)',
          formula: 'a/an (lần đầu nhắc tới, số ít đếm được) | the (đã xác định / duy nhất) | Ø (danh từ số nhiều hoặc không đếm được nói chung)',
          example: 'I bought a book yesterday. The book is about music and history.',
          exampleVi: 'Hôm qua tôi mua một quyển sách (a). Quyển sách đó (the) nói về âm nhạc và lịch sử (nói chung → không dùng the).'
        },
        {
          name: 'Phân biệt DO vs MAKE (Unit 56 — Đặt móng sửa Điểm nghẽn Collocations!)',
          formula: 'DO (công việc, nhiệm vụ): do homework, do exercise, do business, do research | MAKE (tạo ra/quyết định): make a mistake, make a decision, make progress, make an effort',
          example: 'Don\'t be afraid to make mistakes when you do speaking exercises.',
          exampleVi: 'Đừng ngại mắc lỗi (make mistakes) khi bạn làm bài tập nói (do exercises).'
        },
        {
          name: 'Danh từ đếm được/không đếm được & Giới từ In / On / At (Units 67–68, 83, 103)',
          formula: 'many/a few + N đếm được | much/a little/some + N không đếm được (advice, information, luggage) | IN (tháng/năm) → ON (thứ/ngày) → AT (giờ)',
          example: 'I need some advice because I don\'t have much time before the class at 8 p.m. on Monday.',
          exampleVi: 'Tôi cần một ít lời khuyên vì tôi không có nhiều thời gian trước buổi học lúc 8 giờ tối thứ Hai.'
        }
      ],
      reading: {
        title: 'Bài đọc ngắn chuẩn A1: Learning at a Local Café',
        text: 'Every Saturday morning, Mai goes to a quiet café near the library. She doesn\'t order sweet drinks; she usually has black coffee and a bottle of water. Right now, she is doing a listening exercise on her laptop and taking notes. She believes that making small daily efforts is the easiest way to improve.',
        question: 'Why does Mai visit the café on Saturdays?',
        options: ['She works there part-time', 'She practices English listening and takes notes', 'She meets her boss for lunch', 'She buys sweet desserts'],
        answer: 1,
        explain: 'Trong bài nêu rõ: "she is doing a listening exercise on her laptop and taking notes."'
      },
      phrases: [
        { word: 'progress', chunk: 'make steady progress', ipa: '/ˈprəʊ.ɡres/', vi: 'tiến bộ đều đặn (dùng MAKE)', ex: 'If you study every day, you will make steady progress.' },
        { word: 'effort', chunk: 'make an effort to', ipa: '/ˈef.ət/', vi: 'nỗ lực để làm gì (dùng MAKE)', ex: 'She makes an effort to speak English aloud every night.' },
        { word: 'exercise', chunk: 'do a listening exercise', ipa: '/ˈek.sə.saɪz/', vi: 'làm bài tập nghe (dùng DO)', ex: 'Let\'s do one short listening exercise before breakfast.' },
        { word: 'advice', chunk: 'give someone some advice', ipa: '/ədˈvaɪs/', vi: 'cho ai đó lời khuyên (không đếm được)', ex: 'My teacher gave me some helpful advice on pronunciation.' },
        { word: 'available', chunk: 'Are you available tomorrow?', ipa: '/əˈveɪ.lə.bəl/', vi: 'Ngày mai bạn có rảnh không?', ex: 'Are you available tomorrow afternoon for a quick call?' },
        { word: 'borrow', chunk: 'Could I borrow your pen?', ipa: '/ˈbɒr.əʊ/', vi: 'Tôi mượn bút bạn chút được không?', ex: 'Excuse me, could I borrow your charger for ten minutes?' }
      ],
      drills: [
        {
          q: 'She _____ English every evening, so her confidence is growing fast.',
          options: ['study', 'studies', 'is studying', 'studying'],
          answer: 1,
          explain: 'Thói quen hằng ngày ("every evening") + chủ ngữ "She" → Hiện tại đơn (studies).'
        },
        {
          q: 'I saw _____ interesting documentary last night. _____ documentary was about climate.',
          options: ['a / The', 'an / The', 'the / A', 'an / A'],
          answer: 1,
          explain: 'Lần đầu nhắc tới trước nguyên âm "interesting" → "an"; nhắc lại lần 2 đã xác định → "The".'
        },
        {
          q: 'You will definitely _____ faster progress if you _____ your homework daily.',
          options: ['do / make', 'make / do', 'do / do', 'make / make'],
          answer: 1,
          explain: 'Collocation chuẩn Unit 56 Murphy: MAKE progress (tạo tiến bộ) & DO homework (làm bài tập).'
        },
        {
          q: 'Can you give me _____ about how to improve my pronunciation?',
          options: ['an advice', 'many advices', 'some advice', 'a few advice'],
          answer: 2,
          explain: '"Advice" là danh từ KHÔNG đếm được → dùng "some advice" (không thêm "s").'
        },
        {
          q: 'Our evening study session begins _____ 8:00 p.m. _____ Tuesday.',
          options: ['in / on', 'at / on', 'on / at', 'at / in'],
          answer: 1,
          explain: 'Giờ chính xác dùng "at 8:00 p.m.", thứ trong tuần dùng "on Tuesday".'
        }
      ]
    },

    {
      id: 'f-a2',
      level: 'A2',
      badge: 'Chặng A2 · Chuẩn Cambridge A2 Key (KET)',
      title: 'Quá khứ đơn/Tiếp diễn, Used to, Tương lai, So sánh & Điều kiện 1',
      goal: 'Kể chuyện quá khứ có chiều sâu (Past Simple vs Past Continuous, used to), diễn đạt kế hoạch tương lai chính xác và nắm chắc 20 động từ bất quy tắc cốt lõi (Murphy Units 11–14, 25–28, 87–92).',
      textbookRef: 'English Grammar in Use (R. Murphy) Units 5–6, 18, 19–23, 105–108 · Cambridge A2 Key (KET)',
      referenceLinks: [
        { label: 'British Council — Future forms: will, going to, continuous', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous' },
        { label: 'British Council — A1–A2 Grammar Hub', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2' }
      ],
      irregularVerbs: [
        { v1: 'begin', v2: 'began', v3: 'begun', vi: 'bắt đầu' },
        { v1: 'break', v2: 'broke', v3: 'broken', vi: 'làm vỡ / phá vỡ' },
        { v1: 'bring', v2: 'brought', v3: 'brought', vi: 'mang theo' },
        { v1: 'build', v2: 'built', v3: 'built', vi: 'xây dựng' },
        { v1: 'choose', v2: 'chose', v3: 'chosen', vi: 'lựa chọn' },
        { v1: 'draw', v2: 'drew', v3: 'drawn', vi: 'vẽ / rút ra (kết luận)' },
        { v1: 'find', v2: 'found', v3: 'found', vi: 'tìm thấy' },
        { v1: 'forget', v2: 'forgot', v3: 'forgotten', vi: 'quên' },
        { v1: 'grow', v2: 'grew', v3: 'grown', vi: 'phát triển / lớn lên' },
        { v1: 'keep', v2: 'kept', v3: 'kept', vi: 'giữ' },
        { v1: 'know', v2: 'knew', v3: 'known', vi: 'biết' },
        { v1: 'lead', v2: 'led', v3: 'led', vi: 'dẫn dắt' },
        { v1: 'meet', v2: 'met', v3: 'met', vi: 'gặp / đáp ứng' },
        { v1: 'rise', v2: 'rose', v3: 'risen', vi: 'tăng lên / mọc' },
        { v1: 'speak', v2: 'spoke', v3: 'spoken', vi: 'nói' },
        { v1: 'strike', v2: 'struck', v3: 'struck', vi: 'đánh / đạt (sự cân bằng)' },
        { v1: 'take', v2: 'took', v3: 'taken', vi: 'lấy / thực hiện' },
        { v1: 'teach', v2: 'taught', v3: 'taught', vi: 'dạy học' },
        { v1: 'understand', v2: 'understood', v3: 'understood', vi: 'hiểu' },
        { v1: 'write', v2: 'wrote', v3: 'written', vi: 'viết' }
      ],
      grammarPoints: [
        {
          name: 'Quá khứ đơn vs Quá khứ tiếp diễn (Murphy Unit 6 — Kể chuyện tự nhiên)',
          formula: 'Hành động đang diễn ra (nền): S + was/were + V-ing  |  Hành động xen vào: when + S + V2',
          example: 'I was listening to a BBC podcast when my colleague called me.',
          exampleVi: 'Tôi đang nghe podcast BBC thì đồng nghiệp gọi cho tôi.'
        },
        {
          name: 'Thói quen quá khứ: Used to + V (Murphy Unit 18)',
          formula: 'S + used to + V(nguyên mẫu)  |  S + didn\'t use to + V  |  Did + S + use to + V?',
          example: 'I used to translate every sentence from Vietnamese, but now I think in English chunks.',
          exampleVi: 'Tôi từng có thói quen dịch từng câu từ tiếng Việt, nhưng giờ tôi tư duy theo cụm tiếng Anh.'
        },
        {
          name: 'Tương lai: Will vs Be going to vs Present Continuous (Units 19–23)',
          formula: 'Quyết định tức thì: will + V | Dự định/bằng chứng rõ: be going to + V | Lịch hẹn đã chốt: am/is/are + V-ing',
          example: 'I\'m meeting my mentor at 8 p.m. tonight, and I\'m going to review all my mistakes first.',
          exampleVi: 'Tối nay 8 giờ tôi có lịch gặp mentor, và tôi dự định sẽ xem lại hết lỗi sai trước.'
        },
        {
          name: 'So sánh (-er / more / as...as), Too / Enough & Điều kiện Loại 1 (Units 103, 105–108)',
          formula: 'as + adj + as | too + adj + to V | adj + enough + to V | If + S + V(hiện tại), S + will/can + V',
          example: 'The audio wasn\'t too fast to follow; it was clear enough for me to catch every word.',
          exampleVi: 'Đoạn nghe không quá nhanh để theo kịp; nó đủ rõ để tôi nghe được từng từ.'
        }
      ],
      reading: {
        title: 'Bài đọc ngắn chuẩn A2 Key (KET): Changing How I Study',
        text: 'Two years ago, Minh used to memorize long lists of isolated English words before exams. However, he quickly forgot them whenever he tried to speak. Last autumn, while he was searching for a better method online, he discovered spaced repetition and collocations. Now his study sessions are shorter than before, yet he remembers far more vocabulary.',
        question: 'What problem did Minh have two years ago?',
        options: ['He didn\'t have internet access', 'He forgot isolated words whenever he tried to speak', 'His sessions were too short', 'He hated reading articles'],
        answer: 1,
        explain: 'Bài đọc viết: "he quickly forgot them whenever he tried to speak."'
      },
      phrases: [
        { word: 'habit', chunk: 'I used to struggle with...', ipa: '/ˈstrʌɡ.əl/', vi: 'Tôi từng chật vật với...', ex: 'I used to struggle with ending sounds when speaking fast.' },
        { word: 'interrupt', chunk: 'while I was working on...', ipa: '/waɪl/', vi: 'trong lúc tôi đang làm...', ex: 'The Wi-Fi dropped while I was working on my evening notes.' },
        { word: 'compare', chunk: 'not as difficult as I thought', ipa: '/kəmˈpeər/', vi: 'không khó như tôi từng nghĩ', ex: 'Dictation practice is not as difficult as I first thought.' },
        { word: 'appointment', chunk: 'reschedule an appointment', ipa: '/əˈpɔɪnt.mənt/', vi: 'dời lại một cuộc hẹn', ex: 'Could we reschedule our appointment to Thursday afternoon?' },
        { word: 'enough', chunk: 'clear enough to understand', ipa: '/ɪˈnʌf/', vi: 'đủ rõ ràng để hiểu (adj + enough)', ex: 'The UK voice is slow and clear enough to shadow comfortably.' },
        { word: 'experience', chunk: 'an unforgettable experience', ipa: '/ɪkˈspɪə.ri.əns/', vi: 'một trải nghiệm khó quên', ex: 'Giving my first presentation in English was an unforgettable experience.' }
      ],
      drills: [
        {
          q: 'While I _____ dinner, the power suddenly _____ out.',
          options: ['cooked / was going', 'was cooking / went', 'cooked / went', 'am cooking / went'],
          answer: 1,
          explain: 'Hành động nền đang diễn ra (was cooking) bị hành động ngắn xen vào (went out).'
        },
        {
          q: 'Did you _____ live near the coast when you were a child?',
          options: ['used to', 'use to', 'using to', 'uses to'],
          answer: 1,
          explain: 'Trong câu hỏi/phủ định có "Did / Didn\'t", "used to" bỏ chữ d thành "use to".'
        },
        {
          q: 'The recording was _____ quiet for the back row to hear clearly.',
          options: ['enough', 'too', 'much', 'very'],
          answer: 1,
          explain: 'Cấu trúc "too + adj + for sb + to V" (= quá nhỏ đến mức không nghe được).'
        },
        {
          q: 'Look at those dark clouds! It _____ soon.',
          options: ['will raining', 'is going to rain', 'rains', 'rained'],
          answer: 1,
          explain: 'Dự đoán có dấu hiệu rõ ràng trước mắt → dùng "be going to" (is going to rain).'
        },
        {
          q: 'If we _____ early tomorrow, we will avoid the morning traffic.',
          options: ['will leave', 'left', 'leave', 'are leaving'],
          answer: 2,
          explain: 'Câu điều kiện Loại 1: mệnh đề If chia Hiện tại đơn (KHÔNG dùng "will" trong mệnh đề If) → leave.'
        }
      ]
    },

    {
      id: 'f-b1',
      level: 'B1',
      badge: 'Chặng B1 · Chuẩn Cambridge B1 Preliminary (PET)',
      title: 'Present Perfect, Past Perfect, Bị động, Câu hỏi gián tiếp & V-ing/to-V',
      goal: 'Hoàn thiện toàn bộ ngữ pháp trung cấp B1 theo English Grammar in Use (Units 7–16, 42–49, 53–58, 92–95) làm bệ phóng vững chắc vào chương trình C1.',
      textbookRef: 'English Grammar in Use (R. Murphy) Units 7–16, 42–49, 53–58, 92–95 · Cambridge B1 Preliminary (PET)',
      referenceLinks: [
        { label: 'British Council — B1–B2 Grammar Syllabus', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2' },
        { label: 'British Council — Reported Speech Statements', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements' }
      ],
      grammarPoints: [
        {
          name: 'Present Perfect vs Past Simple & Past Perfect (Murphy Units 13–15)',
          formula: 'Hiện tại hoàn thành: have/has + V3 (since/for/already/yet) | Quá khứ hoàn thành (xảy ra TRƯỚC 1 mốc quá khứ): had + V3',
          example: 'By the time the seminar started, she had already reviewed all her notes.',
          exampleVi: 'Vào lúc hội thảo bắt đầu (started), cô ấy đã xem lại hết ghi chú từ trước đó rồi (had reviewed).'
        },
        {
          name: 'Câu bị động các thì cốt lõi (Murphy Units 42–44)',
          formula: 'S + is/are | was/were | have/has been | will be / must be + V3/V-ed',
          example: 'Over 50 collocations have been organized into spaced-repetition decks.',
          exampleVi: 'Hơn 50 cụm collocations đã được sắp xếp vào các bộ thẻ lặp lại ngắt quãng.'
        },
        {
          name: 'Câu hỏi gián tiếp lịch sự & Câu tường thuật (Murphy Units 47–49)',
          formula: 'Could you tell me + Wh-/if + S + V (KHÔNG đảo trợ động từ!)  |  He said (that) he had finished...',
          example: 'Could you tell me where the nearest metro station is? (Sai: "...where is the station?")',
          exampleVi: 'Bạn có thể chỉ tôi ga tàu điện gần nhất ở đâu không? (Trật tự khẳng định S + V!)'
        },
        {
          name: 'Mệnh đề quan hệ, Gerund (V-ing) vs to-V & Điều kiện Loại 2 (Units 38, 53–58, 92–95)',
          formula: 'who/which/that/whose/where | enjoy/avoid/suggest/look forward to + V-ing | manage/decide/afford + to V | If + V2/were, would + V',
          example: 'I look forward to reaching B2, and if I had more evenings free, I would join a debate club.',
          exampleVi: 'Tôi mong chờ đạt B2, và nếu có thêm buổi tối rảnh, tôi sẽ tham gia câu lạc bộ tranh biện.'
        }
      ],
      reading: {
        title: 'Bài đọc ngắn chuẩn B1 Preliminary (PET): Why Output Unlocks Fluency',
        text: 'Many learners who have studied English for years can read news articles comfortably, yet they freeze when asked to write a short paragraph or speak in a meeting. Language researchers point out that reading and listening are receptive skills, whereas writing and speaking require active retrieval. Once learners start producing even two carefully crafted sentences every evening, their brain begins turning passive vocabulary into active command.',
        question: 'According to the passage, what helps turn passive vocabulary into active command?',
        options: ['Reading longer textbooks only', 'Producing even two carefully crafted sentences daily', 'Avoiding grammar rules completely', 'Translating word for word from one\'s native language'],
        answer: 1,
        explain: 'Bài đọc chỉ rõ: "Once learners start producing even two carefully crafted sentences every evening, their brain begins turning passive vocabulary into active command."'
      },
      phrases: [
        { word: 'already', chunk: 'By the time..., I had already...', ipa: '/ɔːlˈred.i/', vi: 'Vào lúc..., tôi đã ... xong rồi', ex: 'By the time the deadline arrived, we had already tested every feature.' },
        { word: 'polite', chunk: 'Could you tell me where... is?', ipa: '/pəˈlaɪt/', vi: 'Bạn vui lòng cho tôi biết ... ở đâu không?', ex: 'Excuse me, could you tell me where the departure gate is?' },
        { word: 'manage', chunk: 'manage to finish on time', ipa: '/ˈmæn.ɪdʒ/', vi: 'xoay xở hoàn thành đúng hạn (+ to V)', ex: 'Despite a busy schedule, she managed to complete her evening session.' },
        { word: 'avoid', chunk: 'avoid translating word for word', ipa: '/əˈvɔɪd/', vi: 'tránh dịch sát từng từ (+ V-ing)', ex: 'Try to avoid translating Vietnamese expressions word for word.' },
        { word: 'forward', chunk: 'look forward to hearing from you', ipa: '/ˈfɔː.wəd/', vi: 'mong chờ nhận phản hồi từ bạn (+ V-ing)', ex: 'Thank you for your feedback; I look forward to hearing from you.' },
        { word: 'perspective', chunk: 'From my perspective, ...', ipa: '/pəˈspek.tɪv/', vi: 'Theo góc nhìn của tôi, ...', ex: 'From my perspective, shadowing is the fastest way to improve intonation.' }
      ],
      drills: [
        {
          q: 'By the time we reached the airport, the check-in desk _____ already _____.',
          options: ['has / closed', 'had / closed', 'was / closing', 'did / close'],
          answer: 1,
          explain: 'Hành động đóng quầy xảy ra TRƯỚC một mốc quá khứ ("reached") → Quá khứ hoàn thành (had already closed).'
        },
        {
          q: 'Excuse me, could you tell me what time _____?',
          options: ['does the library close', 'the library closes', 'closes the library', 'is the library closing'],
          answer: 1,
          explain: 'Câu hỏi gián tiếp sau "Could you tell me..." giữ trật tự khẳng định S + V (KHÔNG đảo trợ động từ) → the library closes.'
        },
        {
          q: 'I really enjoy _____ to short English podcasts on my morning commute.',
          options: ['listen', 'to listen', 'listening', 'listened'],
          answer: 2,
          explain: 'Sau động từ "enjoy" luôn dùng danh động từ V-ing → listening.'
        },
        {
          q: 'The report _____ by the team before Friday\'s meeting.',
          options: ['must finish', 'must be finished', 'must finished', 'is finishing'],
          answer: 1,
          explain: 'Chủ ngữ là vật "The report" chịu tác động → câu bị động với động từ khuyết thiếu: must + be + V3.'
        },
        {
          q: 'If I _____ you, I would start with two short sentences every evening.',
          options: ['am', 'was', 'were', 'will be'],
          answer: 2,
          explain: 'Câu điều kiện Loại 2 dùng để khuyên bảo luôn dùng "If I were you, I would...".'
        }
      ]
    }
  ],

  finalCheckpoint: [
    {
      level: 'A0',
      q: 'Which word has the "-ed" ending pronounced as /ɪd/?',
      options: ['stopped', 'loved', 'needed', 'walked'],
      answer: 2,
      explain: 'Kết thúc bằng âm /d/ (need → needed) đọc đuôi -ed là /ɪd/.'
    },
    {
      level: 'A0',
      q: '_____ several useful tips at the end of this chapter.',
      options: ['There is', 'There are', 'It has', 'They is'],
      answer: 1,
      explain: '"Several useful tips" là số nhiều → dùng "There are".'
    },
    {
      level: 'A1',
      q: 'We don\'t have _____ information about the new schedule yet.',
      options: ['many', 'much', 'a few', 'an'],
      answer: 1,
      explain: '"Information" là danh từ KHÔNG đếm được → dùng "much" trong câu phủ định.'
    },
    {
      level: 'A1',
      q: 'If you want to _____ real progress, you should _____ one speaking drill every day.',
      options: ['do / make', 'make / do', 'do / do', 'make / make'],
      answer: 1,
      explain: 'Collocation gốc Unit 56 Murphy: MAKE progress & DO a drill/exercise.'
    },
    {
      level: 'A1',
      q: 'My brother usually _____ coffee, but right now he _____ green tea.',
      options: ['drinks / drinks', 'is drinking / drinks', 'drinks / is drinking', 'drink / is drinking'],
      answer: 2,
      explain: 'Thói quen ("usually") → Hiện tại đơn (drinks); đang xảy ra ("right now") → Hiện tại tiếp diễn (is drinking).'
    },
    {
      level: 'A2',
      q: 'While she _____ for the bus, she _____ an old university friend.',
      options: ['waited / was meeting', 'was waiting / met', 'waits / met', 'was waiting / meets'],
      answer: 1,
      explain: 'Hành động nền đang diễn ra (was waiting) + hành động xen vào (met).'
    },
    {
      level: 'A2',
      q: 'I _____ get nervous before interviews, but practice helped me build confidence.',
      options: ['use to', 'used to', 'am used to', 'using to'],
      answer: 1,
      explain: 'Thói quen/trạng thái trong quá khứ nay không còn nữa → used to + V(nguyên mẫu).'
    },
    {
      level: 'A2',
      q: 'If it _____ sunny this weekend, we will go hiking.',
      options: ['will be', 'is', 'was', 'would be'],
      answer: 1,
      explain: 'Câu điều kiện Loại 1: mệnh đề If chia Hiện tại đơn → is.'
    },
    {
      level: 'B1',
      q: 'By the time the meeting began, the manager _____ the agenda to everyone.',
      options: ['has emailed', 'had emailed', 'emailed', 'was emailing'],
      answer: 1,
      explain: 'Xảy ra trước một hành động quá khứ ("began") → Quá khứ hoàn thành (had emailed).'
    },
    {
      level: 'B1',
      q: 'Could you tell me how long _____ to reach the city center by train?',
      options: ['does it take', 'it takes', 'takes it', 'is it taking'],
      answer: 1,
      explain: 'Câu hỏi gián tiếp sau "Could you tell me..." dùng trật tự S + V → it takes.'
    },
    {
      level: 'B1',
      q: 'She is looking forward to _____ the B1 milestone test next Saturday.',
      options: ['take', 'taking', 'took', 'taken'],
      answer: 1,
      explain: '"Look forward to" luôn đi với danh động từ V-ing → taking.'
    },
    {
      level: 'B1',
      q: 'If I had more free time on weekdays, I _____ another language.',
      options: ['will learn', 'learned', 'would learn', 'learn'],
      answer: 2,
      explain: 'Câu điều kiện Loại 2 giả định trái hiện tại → If + V2 (had), S + would + V (would learn).'
    }
  ]
};
