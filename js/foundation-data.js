/* ==========================================================================
   LingoCraft C1 Studio — Khóa Ôn Tập Nền Tảng A0 → B1 (4 Chặng Cốt Lõi)
   Củng cố IPA, Ngữ pháp gốc, Mẫu câu sinh tồn & Cầu nối lên B2/C1
   ========================================================================== */

window.FOUNDATION_DATA = {
  modules: [
    {
      id: 'f-a0',
      level: 'A0',
      badge: 'Chặng A0 · Khởi động',
      title: 'Phát âm IPA, Âm cuối & Trật tự câu gốc',
      goal: 'Sửa triệt để lỗi phát âm phổ biến của người Việt (nguyên âm dài/ngắn, âm /θ/, đuôi -s/-ed) và nắm chắc cấu trúc câu S + V + O.',
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
          tip: 'Chỉ đọc thêm 1 âm tiết /ɪd/ sau âm cuối /t/ hoặc /d/ (wanted, needed). Còn lại đọc gọn /t/ hoặc /d/!'
        },
        {
          rule: 'Âm cuối /s/ và /z/ (Ending sounds)',
          left: 'price', leftIpa: '/praɪs/', leftVi: 'giá cả (/s/)',
          right: 'prize', rightIpa: '/praɪz/', rightVi: 'giải thưởng (/z/)',
          tip: 'Không nuốt âm cuối! /s/ không rung cổ họng; /z/ rung nhẹ và làm nguyên âm trước dài hơn.'
        }
      ],
      grammarPoints: [
        {
          name: 'Trật tự câu cơ bản (S + V + O + Nơi chốn + Thời gian)',
          formula: 'Subject + Verb + Object + Place + Time',
          example: 'I study English at home every morning.',
          exampleVi: 'Tôi học tiếng Anh ở nhà mỗi sáng. (Thời gian đặt cuối câu)'
        },
        {
          name: 'Động từ To Be (am / is / are) — Không bỏ quên "be" trước tính từ!',
          formula: 'I am | He/She/It is | You/We/They are + Tính từ / Danh từ',
          example: 'The lesson is very clear and useful.',
          exampleVi: 'Bài học rất rõ ràng và hữu ích. (Sai phổ biến: "The lesson very clear")'
        },
        {
          name: 'Tính từ luôn đứng TRƯỚC danh từ',
          formula: 'a/an + Adjective + Noun',
          example: 'She has a busy daily schedule.',
          exampleVi: 'Cô ấy có một lịch trình hằng ngày bận rộn.'
        }
      ],
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
          q: 'Đặt câu hỏi đúng với động từ thường "like":',
          options: ['Are you like coffee?', 'Do you like coffee?', 'Does you like coffee?', 'You like coffee?'],
          answer: 1,
          explain: 'Với động từ thường "like" và chủ ngữ "you", mượn trợ động từ "Do" → Do you like coffee?'
        }
      ]
    },

    {
      id: 'f-a1',
      level: 'A1',
      badge: 'Chặng A1 · Sơ cấp',
      title: 'Thì Hiện tại, Giới từ In/On/At & Lượng từ',
      goal: 'Giao tiếp trôi chảy các tình huống quen thuộc hằng ngày, phân biệt rạch ròi Hiện tại đơn vs Tiếp diễn và dùng chuẩn danh từ đếm được/không đếm được.',
      grammarPoints: [
        {
          name: 'Hiện tại đơn vs Hiện tại tiếp diễn',
          formula: 'Thói quen: S + V(s/es)  |  Đang diễn ra lúc nói: S + am/is/are + V-ing',
          example: 'I usually take the bus, but today I am walking to work.',
          exampleVi: 'Tôi thường đi xe buýt, nhưng hôm nay tôi đang đi bộ đi làm.'
        },
        {
          name: 'Danh từ đếm được vs Không đếm được (some / any / much / many)',
          formula: 'Đếm được: many books, a few tips  |  Không đếm được: much time, a little water, some advice',
          example: 'I need some advice because I don\'t have much time.',
          exampleVi: 'Tôi cần một vài lời khuyên vì tôi không có nhiều thời gian. (Không nói "advices"!)'
        },
        {
          name: 'Giới từ In / On / At (Kim tự tháp Rộng → Hẹp)',
          formula: 'IN (tháng, năm, thành phố) → ON (thứ, ngày, bề mặt) → AT (giờ cụ thể, at home/work/night)',
          example: 'The class meets at 8 p.m. on Mondays in May.',
          exampleVi: 'Lớp học diễn ra lúc 8 giờ tối các ngày thứ Hai trong tháng Năm.'
        },
        {
          name: 'Động từ khuyết thiếu cơ bản: can / could / have to / should',
          formula: 'S + can/could/should + V(nguyên mẫu)  |  S + have/has to + V',
          example: 'You should review your notes before you have to take the test.',
          exampleVi: 'Bạn nên xem lại ghi chú trước khi phải làm bài kiểm tra.'
        }
      ],
      phrases: [
        { word: 'usually', chunk: 'I usually wake up at six', ipa: '/ˈjuː.ʒu.ə.li/', vi: 'Tôi thường thức dậy lúc 6 giờ', ex: 'I usually wake up at six and review flashcards.' },
        { word: 'available', chunk: 'Are you available tomorrow?', ipa: '/əˈveɪ.lə.bəl/', vi: 'Ngày mai bạn có rảnh không?', ex: 'Are you available tomorrow afternoon for a quick call?' },
        { word: 'advice', chunk: 'give someone some advice', ipa: '/ədˈvaɪs/', vi: 'cho ai đó lời khuyên (không đếm được)', ex: 'My teacher gave me some helpful advice on listening.' },
        { word: 'borrow', chunk: 'Could I borrow your pen?', ipa: '/ˈbɒr.əʊ/', vi: 'Tôi mượn bút bạn chút được không?', ex: 'Excuse me, could I borrow your charger for ten minutes?' },
        { word: 'direction', chunk: 'Go straight and turn left', ipa: '/daɪˈrek.ʃən/', vi: 'Đi thẳng rồi rẽ trái', ex: 'Go straight for two blocks and turn left at the traffic light.' },
        { word: 'afford', chunk: 'How much does it cost?', ipa: '/kɒst/', vi: 'Cái này giá bao nhiêu?', ex: 'Excuse me, how much does a monthly gym membership cost?' }
      ],
      drills: [
        {
          q: 'She _____ English every evening, so her vocabulary is growing fast.',
          options: ['study', 'studies', 'is studying', 'studying'],
          answer: 1,
          explain: 'Có trạng từ tần suất "every evening" (thói quen) + chủ ngữ ngôi 3 số ít "She" → studies.'
        },
        {
          q: 'Can you give me _____ about how to improve my pronunciation?',
          options: ['an advice', 'many advices', 'some advice', 'a few advice'],
          answer: 2,
          explain: '"Advice" là danh từ KHÔNG đếm được trong tiếng Anh → dùng "some advice" (hoặc "a piece of advice").'
        },
        {
          q: 'Our evening study session begins _____ 8:00 p.m. _____ Tuesday.',
          options: ['in / on', 'at / on', 'on / at', 'at / in'],
          answer: 1,
          explain: 'Giờ chính xác dùng "at 8:00 p.m.", ngày trong tuần dùng "on Tuesday".'
        },
        {
          q: 'Look! It _____ outside — don\'t forget your umbrella.',
          options: ['rains', 'rained', 'is raining', 'rain'],
          answer: 2,
          explain: 'Dấu hiệu "Look!" chỉ sự việc đang diễn ra ngay lúc nói → Hiện tại tiếp diễn (is raining).'
        }
      ]
    },

    {
      id: 'f-a2',
      level: 'A2',
      badge: 'Chặng A2 · Sơ trung cấp',
      title: 'Quá khứ đơn, Tương lai, So sánh & Điều kiện Loại 1',
      goal: 'Kể lại trải nghiệm quá khứ tự nhiên, nói kế hoạch tương lai rõ ràng, so sánh sự vật và diễn đạt tình huống có điều kiện.',
      grammarPoints: [
        {
          name: 'Quá khứ đơn (Past Simple) & Động từ bất quy tắc hay gặp',
          formula: 'S + V2/V-ed  |  Phủ định: S + didn\'t + V(nguyên mẫu)  |  Hỏi: Did + S + V?',
          example: 'We went to Da Nang last summer, but we didn\'t stay long.',
          exampleVi: 'Chúng tôi đi Đà Nẵng hè năm ngoái, nhưng không ở lại lâu. (Sau didn\'t luôn về V nguyên mẫu!)'
        },
        {
          name: 'Tương lai: Will vs Be going to vs Present Continuous',
          formula: 'Quyết định tức thì / dự đoán: will + V  |  Kế hoạch đã định: be going to + V  |  Lịch hẹn chắc chắn: am/is/are + V-ing',
          example: 'I\'m going to finish this course in six months. Oh, the phone is ringing — I\'ll answer it!',
          exampleVi: 'Tôi dự định hoàn thành khóa này trong 6 tháng. Ồ chuông reo rồi — để tôi nghe máy!'
        },
        {
          name: 'So sánh hơn & So sánh nhất (Comparatives & Superlatives)',
          formula: 'Tính từ ngắn: -er than / the -est  |  Tính từ dài: more ... than / the most ...  |  Bất quy tắc: good → better → best',
          example: 'Practicing daily is much more effective than cramming once a week.',
          exampleVi: 'Luyện hằng ngày hiệu quả hơn nhiều so với học nhồi nhét mỗi tuần một lần.'
        },
        {
          name: 'Câu điều kiện Loại 0 (Sự thật) & Loại 1 (Có thể xảy ra)',
          formula: 'Loại 1: If + S + V(hiện tại đơn), S + will/can + V(nguyên mẫu)',
          example: 'If you listen to English every morning, your ears will adapt quickly.',
          exampleVi: 'Nếu bạn nghe tiếng Anh mỗi sáng, tai bạn sẽ thích nghi rất nhanh.'
        }
      ],
      phrases: [
        { word: 'experience', chunk: 'It was an unforgettable experience', ipa: '/ɪkˈspɪə.ri.əns/', vi: 'Đó là một trải nghiệm khó quên', ex: 'Traveling solo for the first time was an unforgettable experience.' },
        { word: 'plan', chunk: 'I\'m planning to improve my speaking', ipa: '/plæn/', vi: 'Tôi đang dự định cải thiện kỹ năng nói', ex: 'I\'m planning to spend twenty minutes speaking every evening.' },
        { word: 'compare', chunk: 'compared to last year', ipa: '/kəmˈpeər/', vi: 'so với năm ngoái', ex: 'My listening feels much clearer compared to last year.' },
        { word: 'appointment', chunk: 'reschedule an appointment', ipa: '/əˈpɔɪnt.mənt/', vi: 'dời lại một cuộc hẹn', ex: 'Could we reschedule our appointment to Thursday afternoon?' },
        { word: 'luggage', chunk: 'check in your luggage', ipa: '/ˈlʌɡ.ɪdʒ/', vi: 'ký gửi hành lý (không đếm được)', ex: 'Please arrive two hours early to check in your luggage.' },
        { word: 'improve', chunk: 'make steady progress', ipa: '/ˈprəʊ.ɡres/', vi: 'tiến bộ đều đặn', ex: 'If you stick to the plan, you will make steady progress.' }
      ],
      drills: [
        {
          q: 'Did you _____ the podcast I sent you yesterday?',
          options: ['listened to', 'listen to', 'listening to', 'listens to'],
          answer: 1,
          explain: 'Sau trợ động từ "Did" ở câu hỏi Quá khứ đơn, động từ chính trở về nguyên mẫu → listen to.'
        },
        {
          q: 'This new pronunciation tool is far _____ than the old robotic voice.',
          options: ['more natural', 'naturaler', 'most natural', 'as natural'],
          answer: 0,
          explain: '"Natural" là tính từ dài + có "than" → dùng so sánh hơn "more natural".'
        },
        {
          q: 'Look at those dark clouds! It _____ soon.',
          options: ['will raining', 'is going to rain', 'rains', 'rained'],
          answer: 1,
          explain: 'Dự đoán có bằng chứng rõ ràng trước mắt (mây đen dày đặc) → dùng "be going to" (is going to rain).'
        },
        {
          q: 'If we _____ early tomorrow, we will avoid the morning traffic.',
          options: ['will leave', 'left', 'leave', 'are leaving'],
          answer: 2,
          explain: 'Câu điều kiện Loại 1: mệnh đề If chia Hiện tại đơn (KHÔNG đặt "will" trong mệnh đề If) → leave.'
        }
      ]
    },

    {
      id: 'f-b1',
      level: 'B1',
      badge: 'Chặng B1 · Cầu nối lên B2/C1',
      title: 'Hiện tại hoàn thành, Bị động, Mệnh đề quan hệ & V-ing/to-V',
      goal: 'Hoàn thiện toàn bộ ngữ pháp trung cấp B1 để bước vững vàng vào chương trình Collocations, Mixed Conditionals, Subjunctive & Inversion của lộ trình C1.',
      grammarPoints: [
        {
          name: 'Hiện tại hoàn thành (since / for / already / yet) vs Quá khứ đơn',
          formula: 'S + have/has + V3 (chưa rõ mốc hoặc kéo dài tới nay)  vs  S + V2 (có mốc quá khứ: yesterday, in 2022)',
          example: 'I have studied English for three years, and I took my placement test last week.',
          exampleVi: 'Tôi đã học tiếng Anh được 3 năm (vẫn đang học), và tôi làm bài kiểm tra đầu vào tuần trước.'
        },
        {
          name: 'Câu bị động nền tảng (Passive Voice)',
          formula: 'S + be (is/are/was/were/have been/will be) + V3/V-ed',
          example: 'Over 40 collocations are reviewed automatically using the SM-2 algorithm.',
          exampleVi: 'Hơn 40 cụm collocations được ôn tập tự động bằng thuật toán SM-2.'
        },
        {
          name: 'Mệnh đề quan hệ (who / which / that / whose / where)',
          formula: 'Người: who/that | Vật: which/that | Sở hữu: whose + N | Nơi chốn: where',
          example: 'The method that works best for me is writing two sentences every night.',
          exampleVi: 'Phương pháp hiệu quả nhất với tôi là viết hai câu mỗi tối.'
        },
        {
          name: 'Gerund (V-ing) vs To-Infinitive (to V) & Điều kiện Loại 2',
          formula: 'Sau giới từ & enjoy/avoid/suggest/finish/look forward to + V-ing | decide/plan/want/manage + to V | Loại 2: If + V2/were, would + V',
          example: 'I look forward to mastering C1, and if I had extra time, I would read more novels.',
          exampleVi: 'Tôi mong chờ chinh phục C1, và nếu có thêm thời gian tôi sẽ đọc nhiều tiểu thuyết hơn.'
        }
      ],
      phrases: [
        { word: 'opinion', chunk: 'In my view / From my perspective', ipa: '/pəˈspek.tɪv/', vi: 'Theo góc nhìn của tôi', ex: 'From my perspective, speaking out loud is essential from day one.' },
        { word: 'although', chunk: 'Although it was challenging, ...', ipa: '/ɔːlˈðəʊ/', vi: 'Mặc dù nó khá thử thách, ...', ex: 'Although grammar felt confusing at first, daily practice made it clear.' },
        { word: 'manage', chunk: 'manage to finish on time', ipa: '/ˈmæn.ɪdʒ/', vi: 'xoay xở hoàn thành đúng hạn', ex: 'Despite a busy day, she managed to complete her evening session.' },
        { word: 'avoid', chunk: 'avoid translating word for word', ipa: '/əˈvɔɪd/', vi: 'tránh dịch từng từ một', ex: 'Try to avoid translating Vietnamese sentences word for word.' },
        { word: 'improve', chunk: 'look forward to hearing from you', ipa: '/ˈfɔː.wəd/', vi: 'mong chờ nhận phản hồi từ bạn (+ V-ing)', ex: 'Thank you for your help; I look forward to hearing from you soon.' },
        { word: 'benefit', chunk: 'one of the main advantages is', ipa: '/ədˈvɑːn.tɪdʒ/', vi: 'một trong những lợi ích chính là', ex: 'One of the main advantages of flashcards is active recall.' }
      ],
      drills: [
        {
          q: 'She has lived in Ho Chi Minh City _____ 2020.',
          options: ['for', 'since', 'ago', 'during'],
          answer: 1,
          explain: '2020 là một mốc thời gian bắt đầu → dùng "since" ("for" đi với khoảng thời gian như "for 5 years").'
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
      level: 'A1',
      q: 'We don\'t have _____ information about the new schedule yet.',
      options: ['many', 'much', 'a few', 'an'],
      answer: 1,
      explain: '"Information" là danh từ KHÔNG đếm được → dùng "much" trong câu phủ định.'
    },
    {
      level: 'A1',
      q: 'My brother usually _____ coffee, but right now he _____ green tea.',
      options: ['drinks / drinks', 'is drinking / drinks', 'drinks / is drinking', 'drink / is drinking'],
      answer: 2,
      explain: 'Thói quen ("usually") dùng Hiện tại đơn (drinks); đang xảy ra ("right now") dùng Hiện tại tiếp diễn (is drinking).'
    },
    {
      level: 'A2',
      q: 'Where did you _____ during your trip to Hue last month?',
      options: ['stayed', 'stay', 'staying', 'stays'],
      answer: 1,
      explain: 'Sau trợ động từ "did" động từ chính luôn ở dạng nguyên mẫu → stay.'
    },
    {
      level: 'A2',
      q: 'If it _____ sunny this weekend, we will go hiking.',
      options: ['will be', 'is', 'was', 'would be'],
      answer: 1,
      explain: 'Câu điều kiện Loại 1: mệnh đề If chia Hiện tại đơn → is.'
    },
    {
      level: 'A2',
      q: 'Speaking aloud is _____ way to build muscle memory for pronunciation.',
      options: ['effective', 'more effective', 'the most effective', 'most effective than'],
      answer: 2,
      explain: 'So sánh nhất với tính từ dài "effective" → the most effective.'
    },
    {
      level: 'B1',
      q: 'I _____ that grammar video twice already, so I understand the rule now.',
      options: ['watched', 'have watched', 'watch', 'was watching'],
      answer: 1,
      explain: 'Có "already" và nhấn mạnh kết quả đến hiện tại ("understand now") → Hiện tại hoàn thành (have watched).'
    },
    {
      level: 'B1',
      q: 'She is looking forward to _____ the B1 milestone test next Saturday.',
      options: ['take', 'taking', 'took', 'taken'],
      answer: 1,
      explain: '"Look forward to" là cụm có giới từ "to" → theo sau bắt buộc là V-ing (taking).'
    },
    {
      level: 'B1',
      q: 'That is the mentor _____ helped me fix my ending sounds.',
      options: ['which', 'who', 'whose', 'where'],
      answer: 1,
      explain: 'Thay cho danh từ chỉ người ("the mentor") làm chủ ngữ → who.'
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
