/* ==========================================================================
   LingoCraft C1 Studio — Personalized 6-Month C1 Roadmap & Curriculum Data
   Built directly from your diagnostic profile & 24-week CEFR C1 plan
   ========================================================================== */

window.C1_DATA = {
  profile: {
    currentLevel: 'B1 Vững (~58%)',
    targetLevel: 'CEFR C1 (6 Tháng)',
    strengths: 'Đọc hiểu 100% (B2/C1) · Nghe hiểu 67% (B1+) · Vững Present Perfect vs Past Simple & Having + V3',
    bottlenecks: [
      {
        id: 'collocations',
        title: '1. Verb + Noun Collocations',
        score: '50%',
        status: 'Ưu tiên cao',
        desc: 'Giảm thói quen dịch từng từ tiếng Việt (ví dụ: maintain a habit, establish a reputation thay vì keep/make).',
        actionTab: 'collocations',
        actionLabel: 'Ôn Collocations SM-2'
      },
      {
        id: 'grammar',
        title: '2. Ngữ pháp Giả định & Nhấn mạnh',
        score: '31%',
        status: 'Cần lấp gấp',
        desc: 'Tập trung 3 cấu trúc lõi: Mixed Conditionals, Subjunctive Mood (that he be...) và Inversion (Not only did...).',
        actionTab: 'grammar',
        actionLabel: 'Luyện Ngữ pháp C1'
      },
      {
        id: 'writing',
        title: '3. Phản xạ Viết (Writing Output)',
        score: 'Micro-Writing',
        status: '20:00 mỗi tối',
        desc: 'Phá rào cản ngại viết dài bằng 2 câu chất lượng cao mỗi tối (2 tuần đầu) → đoạn 150 từ → luận C1 260–300 từ.',
        actionTab: 'writing',
        actionLabel: 'Mở Xưởng Micro-Writing'
      }
    ]
  },

  weeklySchedule: {
    1: {
      dayName: 'Thứ Hai',
      morning: [
        { id: 'm1', title: 'Ôn từ vựng Collocations SM-2 (15p)', desc: 'Active Recall các cụm đến hạn ôn hôm nay', tab: 'collocations' },
        { id: 'm2', title: 'Nghe sâu & Chép chính tả (30p)', desc: 'Dictation tốc độ chuẩn + phân tích nối âm', tab: 'speaking' }
      ],
      evening: [
        { id: 'e1', title: 'Ngữ pháp trọng tâm tuần (30p)', desc: 'Mixed Conditionals / Subjunctive / Inversion', tab: 'grammar' },
        { id: 'e2', title: 'Micro-Writing câu ứng dụng (30p)', desc: 'Viết 2 câu chất lượng cao có cấu trúc mục tiêu', tab: 'writing' }
      ]
    },
    2: {
      dayName: 'Thứ Ba',
      morning: [
        { id: 'm1', title: 'Ôn từ vựng Collocations SM-2 (15p)', desc: 'Củng cố Verb + Noun Collocations cốt lõi', tab: 'collocations' },
        { id: 'm2', title: 'Tra & lọc Collocations bài báo (30p)', desc: 'Dùng bộ tra từ điển + Datamuse lưu thẳng vào bộ thẻ', tab: 'collocations' }
      ],
      evening: [
        { id: 'e1', title: 'Luyện phát âm / Shadowing (25p)', desc: 'Chỉnh ending sounds, linking & ngữ điệu câu', tab: 'speaking' },
        { id: 'e2', title: 'Nói ghi âm theo chủ đề (35p)', desc: 'Ghi âm & nghe đối chiếu với giọng bản xứ', tab: 'speaking' }
      ]
    },
    3: {
      dayName: 'Thứ Tư',
      morning: [
        { id: 'm1', title: 'Ôn từ vựng Collocations SM-2 (15p)', desc: 'Ôn cụm từ đến hạn & sửa bẫy dịch sát nghĩa', tab: 'collocations' },
        { id: 'm2', title: 'Nghe Podcast/TED & Ghi chú Cornell (30p)', desc: 'Tóm tắt ý chính trong khung Cornell Notes', tab: 'speaking' }
      ],
      evening: [
        { id: 'e1', title: 'Luyện Viết đoạn văn / Bài luận (40p)', desc: 'Từ 2 câu → đoạn 150 từ → bài luận 250 từ', tab: 'writing' },
        { id: 'e2', title: 'Tự sửa lỗi & Academic Paraphrasing (20p)', desc: 'Danh từ hóa (Nominalization) & nâng cấp từ B1→C1', tab: 'writing' }
      ]
    },
    4: {
      dayName: 'Thứ Năm',
      morning: [
        { id: 'm1', title: 'Ôn từ vựng Collocations SM-2 (15p)', desc: 'Chú ý sắc thái từ (Nuance & Register)', tab: 'collocations' },
        { id: 'm2', title: 'Đọc phân tích chuyên sâu B2/C1 (30p)', desc: 'BBC Future / The Guardian — ghi chú cụm hay', tab: 'collocations' }
      ],
      evening: [
        { id: 'e1', title: 'Ngữ pháp nâng cao C1 (25p)', desc: 'Đảo ngữ, Câu chẻ & Thức giả định', tab: 'grammar' },
        { id: 'e2', title: 'Luyện Nói phương pháp 3-2-1 (35p)', desc: '3 phút → 2 phút → 1 phút trôi chảy không ngập ngừng', tab: 'speaking' }
      ]
    },
    5: {
      dayName: 'Thứ Sáu',
      morning: [
        { id: 'm1', title: 'Ôn từ vựng Collocations SM-2 (15p)', desc: 'Tổng ôn các thẻ khó trong tuần', tab: 'collocations' },
        { id: 'm2', title: 'Nghe thực chiến đa giọng UK / US / AU (30p)', desc: 'Đổi accent US → UK → AU khi làm bài nghe sâu', tab: 'speaking' }
      ],
      evening: [
        { id: 'e1', title: 'Viết học thuật / Báo cáo / Paraphrase (40p)', desc: 'Kiểm tra độ mạch lạc (Cohesion & Coherence)', tab: 'writing' },
        { id: 'e2', title: 'Tổng hợp Collocations tuần (20p)', desc: 'Bổ sung cụm mới gặp vào sổ thẻ SM-2', tab: 'collocations' }
      ]
    },
    6: {
      dayName: 'Thứ Bảy',
      morning: [
        { id: 'm1', title: 'Kiểm tra mini Use of English & Nghe (60p)', desc: 'Làm bài kiểm tra tổng hợp Collocations + Ngữ pháp C1', tab: 'review' }
      ],
      evening: [
        { id: 'e1', title: 'Mô phỏng Speaking & Review Error Log (45p)', desc: 'Rà soát toàn bộ lỗi sai cá nhân trong tuần và xử lý dứt điểm', tab: 'review' }
      ]
    },
    0: {
      dayName: 'Chủ Nhật',
      morning: [
        { id: 'm1', title: 'Học nhẹ nhàng (45p)', desc: 'Xem phim/tài liệu tiếng Anh & đánh dấu tiến độ tuần mới', tab: 'roadmap' }
      ],
      evening: [
        { id: 'e1', title: 'Nghỉ ngơi tái tạo năng lượng', desc: 'Tích lũy năng lượng cho tuần huấn luyện tiếp theo', tab: 'roadmap' }
      ]
    }
  },

  phases: [
    {
      id: 'p1',
      badge: 'Chặng 1 · Tuần 1–8',
      title: 'A2/B1 → B1+ Vững',
      kpi: '~3.000 từ cốt lõi + Chuẩn hóa IPA & Collocations',
      resources: 'English Grammar in Use · Oxford Word Skills · BBC 6 Minute English',
      units: [
        { id: 'w1-2', label: 'Tuần 1–2: Hệ thống Thì & Phát âm Chuẩn', detail: '44 âm IPA, ending sounds, linking, Shadowing BBC 6 Minute English, Micro-Writing 2 câu/tối.' },
        { id: 'w3-4', label: 'Tuần 3–4: Câu Phức & Connectors', detail: 'Relative Clauses, although/despite/consequently/whereas. Chủ điểm: Education, Work, Tech, Health.' },
        { id: 'w5-6', label: 'Tuần 5–6: Bị động, Điều kiện & Giả định', detail: 'Mixed Conditionals, Past Modals (must/could/shouldn\'t have V3), nghe TED-Ed.' },
        { id: 'w7-8', label: 'Tuần 7–8: Reporting Verbs & Milestone Test 1', detail: 'advise, insist, claim, acknowledge, warn + Test chuẩn Cambridge B1/B2 rút gọn.' }
      ]
    },
    {
      id: 'p2',
      badge: 'Chặng 2 · Tuần 9–16',
      title: 'B1+ → B2 Chuẩn',
      kpi: '~4.500 từ + 300 Collocations học thuật & Luận 250 từ',
      resources: 'Destination B2 · English Collocations in Use · TED-Ed · BBC Future',
      units: [
        { id: 'w9-10', label: 'Tuần 9–10: Tư duy Collocations & Participle Clauses', detail: '300 Collocations học thuật & công việc, V-ing / Having V3, nghe bài giảng 5–8 phút + Cornell Notes.' },
        { id: 'w11-12', label: 'Tuần 11–12: Đọc phản biện & Luận 250 từ', detail: 'Skimming/Scanning BBC Future, Opinion & Discussion Essay, kỹ thuật Nominalization.' },
        { id: 'w13-14', label: 'Tuần 13–14: Tranh biện & 3-2-1 Speaking', detail: 'Discourse Markers tự nhiên (That being said, On the flip side...) + luyện nói 3→2→1 phút.' },
        { id: 'w15-16', label: 'Tuần 15–16: Tổng duyệt B2 & Milestone Test 2', detail: 'Chủ điểm Environment, Globalization, Psychology, Media. Mục tiêu B2 First ≥ 170/190.' }
      ]
    },
    {
      id: 'p3',
      badge: 'Chặng 3 · Tuần 17–24',
      title: 'B2 → C1 Thành Thạo',
      kpi: '6.000+ từ học thuật · Đảo ngữ, Subjunctive, Nuance & CAE/IELTS 7.5',
      resources: 'Destination C1 & C2 · Grammar for CAE · The Economist · The Guardian',
      units: [
        { id: 'w17-18', label: 'Tuần 17–18: Ngữ pháp Cao cấp C1', detail: 'Inversion (Not only, Seldom, Hardly...when), Cleft Sentences, Subjunctive + The Economist Podcasts.' },
        { id: 'w19-20', label: 'Tuần 19–20: Sắc thái từ, Idioms & Register', detail: 'Phân biệt famous/notorious/eminent, C1 Idioms, đọc ẩn ý trong The Guardian & HBR.' },
        { id: 'w21-22', label: 'Tuần 21–22: Viết C1 & Phản biện tức thời', detail: 'Proposal, Report, Review & Academic Essay 260–300 từ; Impromptu Speaking chủ đề trừu tượng.' },
        { id: 'w23-24', label: 'Tuần 23–24: Luyện đề C1 Thực chiến & Error Log', detail: 'Giải 4 bộ đề Cambridge CAE / IELTS Academic (7.5) bấm giờ + rà soát sạch Error Log.' }
      ]
    }
  ],

  collocationCategories: [
    { id: 'all', name: 'Tất cả (54 cụm)' },
    { id: 'verb-noun', name: 'Verb + Noun (Điểm nghẽn #1)' },
    { id: 'academic', name: 'Học thuật & Công việc (B2–C1)' },
    { id: 'discourse', name: 'Discourse Markers (Nói C1)' },
    { id: 'nuance', name: 'Sắc thái & Idioms C1' }
  ],

  collocations: [
    // --- Verb + Noun Collocations (Targeting Bottleneck #1!) ---
    {
      id: 'c-01', category: 'verb-noun', level: 'B1+', headword: 'maintain',
      chunk: 'maintain a habit', ipa: '/meɪnˈteɪn ə ˈhæb.ɪt/',
      meaning: 'duy trì một thói quen',
      trap: '❌ Tránh dịch sát "keep a habit" khi muốn diễn đạt trang trọng/bền vững → dùng "maintain / sustain a habit".',
      example: 'It takes consistent effort to maintain a daily English study habit.',
      exampleVi: 'Cần sự nỗ lực đều đặn để duy trì thói quen học tiếng Anh mỗi ngày.'
    },
    {
      id: 'c-02', category: 'verb-noun', level: 'B2', headword: 'establish',
      chunk: 'establish a reputation', ipa: '/ɪˈstæb.lɪʃ ə ˌrep.jəˈteɪ.ʃən/',
      meaning: 'xây dựng/tạo dựng danh tiếng',
      trap: '❌ Không dùng "make a reputation" → ✅ "establish / build / earn a reputation for...".',
      example: 'The university has established a reputation for cutting-edge research.',
      exampleVi: 'Trường đại học này đã tạo dựng danh tiếng về nghiên cứu tiên phong.'
    },
    {
      id: 'c-03', category: 'verb-noun', level: 'B2', headword: 'conduct',
      chunk: 'conduct research', ipa: '/kənˈdʌkt rɪˈsɜːrtʃ/',
      meaning: 'tiến hành nghiên cứu',
      trap: '❌ Tránh "make research" (lỗi phổ biến nhất!) → ✅ "conduct / carry out research".',
      example: 'Linguists conducted extensive research on spaced repetition memory.',
      exampleVi: 'Các nhà ngôn ngữ học đã tiến hành nghiên cứu sâu rộng về trí nhớ lặp lại ngắt quãng.'
    },
    {
      id: 'c-04', category: 'verb-noun', level: 'C1', headword: 'alleviate',
      chunk: 'alleviate pressure', ipa: '/əˈliː.vi.eɪt ˈpreʃ.ər/',
      meaning: 'giảm bớt áp lực, xoa dịu căng thẳng',
      trap: '❌ Thay vì "reduce pressure" lặp lại nhiều lần ở mức B1 → nâng lên C1: "alleviate / ease pressure".',
      example: 'Breaking the roadmap into two short sessions helps alleviate mental pressure.',
      exampleVi: 'Chia lộ trình thành hai phiên ngắn giúp giảm bớt áp lực tinh thần.'
    },
    {
      id: 'c-05', category: 'verb-noun', level: 'B2', headword: 'pose',
      chunk: 'pose a threat', ipa: '/pəʊz ə θret/',
      meaning: 'đặt ra mối đe dọa',
      trap: '❌ Không dùng "give a threat" hay "make a threat to society" → ✅ "pose a serious threat to...".',
      example: 'Unchecked misinformation can pose a serious threat to public trust.',
      exampleVi: 'Thông tin sai lệch không được kiểm soát có thể đặt ra mối đe dọa nghiêm trọng cho niềm tin công chúng.'
    },
    {
      id: 'c-06', category: 'verb-noun', level: 'C1', headword: 'yield',
      chunk: 'yield results', ipa: '/jiːld rɪˈzʌlts/',
      meaning: 'mang lại kết quả (sau quá trình đầu tư công sức)',
      trap: '❌ Nâng cấp từ "give good results" → ✅ "yield tangible / remarkable results".',
      example: 'Practicing micro-writing every evening soon began to yield tangible results.',
      exampleVi: 'Luyện viết ngắn mỗi tối chẳng mấy chốc bắt đầu mang lại kết quả rõ rệt.'
    },
    {
      id: 'c-07', category: 'verb-noun', level: 'B2', headword: 'bridge',
      chunk: 'bridge the gap', ipa: '/brɪdʒ ðə ɡæp/',
      meaning: 'thu hẹp khoảng cách',
      trap: '❌ Tránh "close/shorten the distance" cho nghĩa bóng → ✅ "bridge the gap between A and B".',
      example: 'Active speaking drills help bridge the gap between passive reading and fluency.',
      exampleVi: 'Bài tập nói chủ động giúp thu hẹp khoảng cách giữa đọc thụ động và sự trôi chảy.'
    },
    {
      id: 'c-08', category: 'verb-noun', level: 'C1', headword: 'mitigate',
      chunk: 'mitigate risks', ipa: '/ˈmɪt.ɪ.ɡeɪt rɪsks/',
      meaning: 'giảm thiểu rủi ro',
      trap: '❌ Chuẩn học thuật/công sở C1 thay cho "lower risks" → ✅ "mitigate / minimize risks".',
      example: 'Reviewing an error log weekly helps mitigate the risk of repeating fossilized mistakes.',
      exampleVi: 'Xem lại sổ lỗi hằng tuần giúp giảm thiểu rủi ro lặp lại các lỗi đã ăn sâu.'
    },
    {
      id: 'c-09', category: 'verb-noun', level: 'B2', headword: 'reach',
      chunk: 'reach a consensus', ipa: '/riːtʃ ə kənˈsen.səs/',
      meaning: 'đạt được sự đồng thuận',
      trap: '❌ Không nói "get a consensus" → ✅ "reach / achieve a consensus on...".',
      example: 'After hours of debate, the committee finally reached a consensus on the policy.',
      exampleVi: 'Sau nhiều giờ tranh luận, ủy ban cuối cùng đã đạt được sự đồng thuận về chính sách.'
    },
    {
      id: 'c-10', category: 'verb-noun', level: 'C1', headword: 'exert',
      chunk: 'exert influence', ipa: '/ɪɡˈzɜːrt ˈɪn.flu.əns/',
      meaning: 'tạo ra / phát huy tầm ảnh hưởng',
      trap: '❌ Nâng cấp từ "have big influence" → ✅ "exert considerable influence over/on...".',
      example: 'Social media algorithms exert considerable influence over public opinion.',
      exampleVi: 'Thuật toán mạng xã hội tạo ra tầm ảnh hưởng đáng kể lên dư luận.'
    },
    {
      id: 'c-11', category: 'verb-noun', level: 'B2', headword: 'implement',
      chunk: 'implement a strategy', ipa: '/ˈɪm.plɪ.ment ə ˈstræt.ə.dʒi/',
      meaning: 'triển khai một chiến lược',
      trap: '❌ Tránh "do a strategy" → ✅ "implement / execute a strategy".',
      example: 'Only when you implement a clear strategy will your scores improve steadily.',
      exampleVi: 'Chỉ khi bạn triển khai một chiến lược rõ ràng thì điểm số mới cải thiện vững chắc.'
    },
    {
      id: 'c-12', category: 'verb-noun', level: 'C1', headword: 'foster',
      chunk: 'foster innovation', ipa: '/ˈfɒs.tər ˌɪn.əˈveɪ.ʃən/',
      meaning: 'thúc đẩy, nuôi dưỡng sự đổi mới',
      trap: '❌ Nâng cấp từ "help innovation grow" → ✅ "foster innovation / collaboration / growth".',
      example: 'Open dialogue in the workplace fosters both innovation and mutual trust.',
      exampleVi: 'Đối thoại cởi mở tại nơi làm việc nuôi dưỡng cả sự đổi mới lẫn niềm tin.'
    },
    {
      id: 'c-13', category: 'verb-noun', level: 'B2', headword: 'draw',
      chunk: 'draw a conclusion', ipa: '/drɔː ə kənˈkluː.ʒən/',
      meaning: 'rút ra kết luận',
      trap: '❌ Không dịch sát "take out a conclusion" → ✅ "draw a conclusion from...".',
      example: 'We should not draw hasty conclusions before examining all the evidence.',
      exampleVi: 'Chúng ta không nên rút ra kết luận vội vàng trước khi xem xét toàn bộ bằng chứng.'
    },
    {
      id: 'c-14', category: 'verb-noun', level: 'C1', headword: 'shed',
      chunk: 'shed light on', ipa: '/ʃed laɪt ɒn/',
      meaning: 'làm sáng tỏ vấn đề gì',
      trap: '❌ Cụm C1 cực hay thay cho "explain clearly" trong bài luận & báo cáo.',
      example: 'The diagnostic test shed light on three specific areas needing urgent focus.',
      exampleVi: 'Bài kiểm tra chẩn đoán đã làm sáng tỏ ba mảng cụ thể cần tập trung gấp.'
    },
    {
      id: 'c-15', category: 'verb-noun', level: 'B2', headword: 'tackle',
      chunk: 'tackle an issue', ipa: '/ˈtæk.əl ən ˈɪʃ.uː/',
      meaning: 'giải quyết triệt để một vấn đề khó',
      trap: '❌ Mạnh và tự nhiên hơn "solve a problem" trong IELTS/CAE Writing & Speaking.',
      example: 'Governments must cooperate internationally to tackle climate issues effectively.',
      exampleVi: 'Các chính phủ phải hợp tác quốc tế để giải quyết hiệu quả vấn đề khí hậu.'
    },
    {
      id: 'c-16', category: 'verb-noun', level: 'B2', headword: 'meet',
      chunk: 'meet the criteria', ipa: '/miːt ðə kraɪˈtɪə.ri.ə/',
      meaning: 'đáp ứng các tiêu chí (lưu ý: criteria là số nhiều)',
      trap: '❌ Không nói "adapt the criteria" hay "criterias" → ✅ "meet / fulfill the criteria".',
      example: 'Her proposal met all the strict criteria required for C1 certification.',
      exampleVi: 'Bản đề xuất của cô ấy đáp ứng mọi tiêu chí khắt khe của chứng chỉ C1.'
    },
    {
      id: 'c-17', category: 'verb-noun', level: 'C1', headword: 'strike',
      chunk: 'strike a balance', ipa: '/straɪk ə ˈbæl.əns/',
      meaning: 'đạt được sự cân bằng',
      trap: '❌ Không nói "make a balance" → ✅ "strike a delicate balance between A and B".',
      example: 'Effective learners strike a balance between input skills and active output.',
      exampleVi: 'Người học hiệu quả đạt được sự cân bằng giữa kỹ năng đầu vào và đầu ra chủ động.'
    },
    {
      id: 'c-18', category: 'verb-noun', level: 'B2', headword: 'raise',
      chunk: 'raise awareness', ipa: '/reɪz əˈweə.nəs/',
      meaning: 'nâng cao nhận thức',
      trap: '❌ Không dùng "rise awareness" (rise là nội động từ!) → ✅ "raise awareness of/about".',
      example: 'Documentaries play a vital role in raising public awareness of ocean pollution.',
      exampleVi: 'Phim tài liệu đóng vai trò thiết yếu trong việc nâng cao nhận thức về ô nhiễm đại dương.'
    },

    // --- Academic & Workplace C1 ---
    {
      id: 'c-19', category: 'academic', level: 'C1', headword: 'imperative',
      chunk: 'it is imperative that', ipa: '/ɪmˈper.ə.tɪv/',
      meaning: 'điều tối quan trọng/cấp thiết là...',
      trap: '⚠️ Luôn kích hoạt Thức giả định (Subjunctive): động từ theo sau ở dạng NGUYÊN MẪU ("that he be / attend").',
      example: 'It is imperative that every team member adhere to the security guidelines.',
      exampleVi: 'Điều tối quan trọng là mọi thành viên đều tuân thủ hướng dẫn bảo mật.'
    },
    {
      id: 'c-20', category: 'academic', level: 'C1', headword: 'paramount',
      chunk: 'of paramount importance', ipa: '/ˈpær.ə.maʊnt/',
      meaning: 'có tầm quan trọng hàng đầu',
      trap: '❌ Nâng cấp C1 xuất sắc thay cho "very important".',
      example: 'Accuracy in collocations is of paramount importance at the C1 level.',
      exampleVi: 'Độ chính xác về cụm từ cố định có tầm quan trọng hàng đầu ở trình độ C1.'
    },
    {
      id: 'c-21', category: 'academic', level: 'C1', headword: 'detrimental',
      chunk: 'have a detrimental impact on', ipa: '/ˌdet.rɪˈmen.təl/',
      meaning: 'gây tác động bất lợi/có hại lên',
      trap: '❌ Thay cho "have a bad effect on" (mức B1). Đi với giới từ "to" hoặc "impact on".',
      example: 'Chronic sleep deprivation has a detrimental impact on memory consolidation.',
      exampleVi: 'Thiếu ngủ kéo dài gây tác động bất lợi lên quá trình củng cố trí nhớ.'
    },
    {
      id: 'c-22', category: 'academic', level: 'B2', headword: 'inevitable',
      chunk: 'an inevitable consequence', ipa: '/ɪˈnev.ɪ.tə.bəl/',
      meaning: 'một hệ quả tất yếu không thể tránh khỏi',
      trap: 'Chú ý trọng âm âm tiết 2: in-EV-i-ta-ble.',
      example: 'Rapid urbanization brought housing shortages as an inevitable consequence.',
      exampleVi: 'Đô thị hóa nhanh chóng kéo theo thiếu hụt nhà ở như một hệ quả tất yếu.'
    },
    {
      id: 'c-23', category: 'academic', level: 'C1', headword: 'viable',
      chunk: 'a viable alternative', ipa: '/ˈvaɪ.ə.bəl/',
      meaning: 'một giải pháp thay thế khả thi',
      trap: 'Rất đắt giá cho bài Discussion Essay & Proposal (Tuần 21–22).',
      example: 'Remote work has proven to be a viable alternative to traditional office setups.',
      exampleVi: 'Làm việc từ xa đã chứng minh là giải pháp thay thế khả thi cho mô hình văn phòng truyền thống.'
    },
    {
      id: 'c-24', category: 'academic', level: 'C1', headword: 'ubiquitous',
      chunk: 'become ubiquitous', ipa: '/juːˈbɪk.wɪ.təs/',
      meaning: 'trở nên phổ biến khắp mọi nơi',
      trap: 'Thay thế tinh tế cho "appear everywhere" khi viết chủ đề Công nghệ & Truyền thông.',
      example: 'AI-powered translation tools have become ubiquitous in international business.',
      exampleVi: 'Các công cụ dịch bằng AI đã trở nên phổ biến khắp nơi trong kinh doanh quốc tế.'
    },
    {
      id: 'c-25', category: 'academic', level: 'C1', headword: 'catalyst',
      chunk: 'act as a catalyst for', ipa: '/ˈkæt.əl.ɪst/',
      meaning: 'đóng vai trò chất xúc tác thúc đẩy',
      trap: 'Đi với giới từ "for" (a catalyst for change/growth).',
      example: 'Clear weekly milestones often act as a catalyst for sustained motivation.',
      exampleVi: 'Các cột mốc tuần rõ ràng thường đóng vai trò chất xúc tác cho động lực bền bỉ.'
    },
    {
      id: 'c-26', category: 'academic', level: 'B2', headword: 'discrepancy',
      chunk: 'a stark discrepancy', ipa: '/dɪˈskrep.ən.si/',
      meaning: 'sự chênh lệch / mâu thuẫn rõ rệt',
      trap: 'Chuẩn C1 thay cho "big difference" khi so sánh số liệu, kỹ năng hoặc báo cáo.',
      example: 'There was a stark discrepancy between his reading accuracy and writing speed.',
      exampleVi: 'Có sự chênh lệch rõ rệt giữa độ chính xác khi đọc và tốc độ viết của anh ấy.'
    },
    {
      id: 'c-27', category: 'academic', level: 'C1', headword: 'conducive',
      chunk: 'conducive to learning', ipa: '/kənˈdjuː.sɪv/',
      meaning: 'tạo điều kiện thuận lợi cho việc học',
      trap: '⚠️ Sau "conducive to" là danh từ hoặc V-ing (KHÔNG phải V nguyên mẫu).',
      example: 'A quiet, distraction-free desk is far more conducive to deep focus.',
      exampleVi: 'Một bàn học yên tĩnh không xao nhãng thuận lợi hơn nhiều cho sự tập trung sâu.'
    },
    {
      id: 'c-28', category: 'academic', level: 'C1', headword: 'corroborate',
      chunk: 'corroborate a claim', ipa: '/kəˈrɒb.ə.reɪt/',
      meaning: 'củng cố, chứng thực một luận điểm',
      trap: 'Rất hiệu quả khi đọc phân tích lập luận tác giả (The Guardian / HBR).',
      example: 'Recent neurological studies corroborate the claim that active recall outperforms rereading.',
      exampleVi: 'Các nghiên cứu thần kinh gần đây chứng thực luận điểm rằng gợi nhớ chủ động vượt trội hơn đọc lại.'
    },

    // --- Discourse Markers (Speaking Fluency — Week 13-14) ---
    {
      id: 'c-29', category: 'discourse', level: 'B2', headword: 'concerned',
      chunk: 'As far as I\'m concerned', ipa: '/æz fɑːr æz aɪm kənˈsɜːrnd/',
      meaning: 'Theo quan điểm của riêng tôi thì...',
      trap: '❌ Tự nhiên hơn hẳn việc lặp lại "In my opinion" quá nhiều lần khi nói 3-2-1.',
      example: 'As far as I\'m concerned, consistent daily habits matter more than raw talent.',
      exampleVi: 'Theo quan điểm của tôi, thói quen đều đặn hằng ngày quan trọng hơn năng khiếu.'
    },
    {
      id: 'c-30', category: 'discourse', level: 'C1', headword: 'account',
      chunk: 'Taking everything into account', ipa: '/ˈteɪ.kɪŋ ˈev.ri.θɪŋ ˈɪn.tuː əˈkaʊnt/',
      meaning: 'Xét tổng thể mọi khía cạnh thì...',
      trap: 'Mở đầu câu kết luận C1 cực kỳ mượt mà trong Speaking & Discussion Essay.',
      example: 'Taking everything into account, investing six months in structured training is well worth it.',
      exampleVi: 'Xét tổng thể mọi khía cạnh, đầu tư 6 tháng cho lộ trình bài bản hoàn toàn xứng đáng.'
    },
    {
      id: 'c-31', category: 'discourse', level: 'C1', headword: 'said',
      chunk: 'That being said', ipa: '/ðæt ˈbiː.ɪŋ sed/',
      meaning: 'Tuy nhiên / Nói đi cũng phải nói lại thì...',
      trap: 'Cụm chuyển ý tương phản cực kỳ bản xứ thay cho "However" / "But".',
      example: 'Automated tools are remarkably helpful. That being said, human nuance still requires practice.',
      exampleVi: 'Công cụ tự động rất hữu ích. Tuy nhiên, sắc thái ngôn ngữ con người vẫn đòi hỏi sự rèn luyện.'
    },
    {
      id: 'c-32', category: 'discourse', level: 'C1', headword: 'flip',
      chunk: 'On the flip side', ipa: '/ɒn ðə flɪp saɪd/',
      meaning: 'Ở chiều ngược lại / Mặt trái của vấn đề là...',
      trap: 'Cụm Speaking C1 tự nhiên (không dùng trong bài viết quá trang trọng; viết dùng "Conversely").',
      example: 'Remote work saves commuting time; on the flip side, it can blur work-life boundaries.',
      exampleVi: 'Làm việc từ xa tiết kiệm thời gian đi lại; ở chiều ngược lại, nó có thể làm mờ ranh giới công việc - đời sống.'
    },
    {
      id: 'c-33', category: 'discourse', level: 'C1', headword: 'fair',
      chunk: 'To be perfectly honest', ipa: '/tuː biː ˈpɜːr.fɪkt.li ˈɒn.ɪst/',
      meaning: 'Thật lòng mà nói thì...',
      trap: 'Giúp kéo dài nhịp suy nghĩ tự nhiên trong Impromptu Speaking (Tuần 21–22) thay vì "uhm/ah".',
      example: 'To be perfectly honest, I used to hesitate whenever asked to write a long paragraph.',
      exampleVi: 'Thật lòng mà nói, tôi từng ngập ngừng mỗi khi được yêu cầu viết một đoạn văn dài.'
    },
    {
      id: 'c-34', category: 'discourse', level: 'C1', headword: 'perspective',
      chunk: 'From a broader perspective', ipa: '/frɒm ə ˈbrɔː.dər pəˈspek.tɪv/',
      meaning: 'Nhìn từ góc độ rộng lớn hơn',
      trap: 'Giúp nâng tầm câu trả lời trừu tượng từ góc nhìn cá nhân lên tầm xã hội (tiêu chí C1!).',
      example: 'From a broader perspective, lifelong learning has become an economic necessity.',
      exampleVi: 'Nhìn từ góc độ rộng hơn, học tập suốt đời đã trở thành một tất yếu kinh tế.'
    },

    // --- Nuance & C1 Idioms (Week 19-20) ---
    {
      id: 'c-35', category: 'nuance', level: 'C1', headword: 'eminent',
      chunk: 'famous vs. notorious vs. eminent', ipa: '/ˈem.ɪ.nənt/',
      meaning: 'nổi tiếng (trung tính) / khét tiếng (tiêu cực) / lỗi lạc, xuất chúng (học thuật)',
      trap: '⚠️ Đúng ví dụ trong Tuần 19–20 của bạn! Không dùng "notorious" cho người thành đạt đáng kính.',
      example: 'She is an eminent physicist, whereas the scandal made his rival notorious.',
      exampleVi: 'Bà ấy là một nhà vật lý lỗi lạc, trong khi vụ bê bối khiến đối thủ của ông ta trở nên khét tiếng.'
    },
    {
      id: 'c-36', category: 'nuance', level: 'C1', headword: 'second',
      chunk: 'second nature', ipa: '/ˌsek.ənd ˈneɪ.tʃər/',
      meaning: 'trở thành bản năng tự nhiên (nhờ luyện tập nhiều)',
      trap: 'Cấu trúc: become second nature to someone.',
      example: 'After months of shadowing, natural intonation became second nature to him.',
      exampleVi: 'Sau nhiều tháng luyện shadowing, ngữ điệu tự nhiên đã trở thành bản năng với anh ấy.'
    },
    {
      id: 'c-37', category: 'nuance', level: 'C1', headword: 'scratch',
      chunk: 'barely scratch the surface', ipa: '/skrætʃ ðə ˈsɜːr.fɪs/',
      meaning: 'mới chỉ chạm đến bề nổi của vấn đề',
      trap: 'Idiom C1 rất sắc bén khi nhận xét một vấn đề sâu rộng.',
      example: 'A single textbook barely scratches the surface of authentic English idioms.',
      exampleVi: 'Một quyển sách giáo khoa đơn lẻ mới chỉ chạm bề nổi của kho thành ngữ tiếng Anh thực tế.'
    },
    {
      id: 'c-38', category: 'nuance', level: 'C1', headword: 'double-edged',
      chunk: 'a double-edged sword', ipa: '/ˌdʌb.əl.edʒd ˈsɔːrd/',
      meaning: 'con dao hai lưỡi (vừa có lợi vừa có hại)',
      trap: 'Rất hiệu quả cho Discussion Essay về AI, mạng xã hội và toàn cầu hóa.',
      example: 'Globalization is a double-edged sword, bringing prosperity alongside cultural homogenization.',
      exampleVi: 'Toàn cầu hóa là con dao hai lưỡi, mang lại thịnh vượng song hành với sự đồng hóa văn hóa.'
    },
    {
      id: 'c-39', category: 'nuance', level: 'C1', headword: 'point',
      chunk: 'a case in point', ipa: '/ə keɪs ɪn pɔɪnt/',
      meaning: 'một ví dụ điển hình minh họa rõ nhất',
      trap: 'Thay thế đẳng cấp C1 cho "For example" trong cả Viết và Nói.',
      example: 'Habit stacking works wonders; pairing flashcards with morning coffee is a case in point.',
      exampleVi: 'Ghép thói quen mang lại hiệu quả kỳ diệu; kết hợp flashcard với cà phê sáng là một ví dụ điển hình.'
    },
    {
      id: 'c-40', category: 'nuance', level: 'C1', headword: 'silver',
      chunk: 'every cloud has a silver lining', ipa: '/ˈsɪl.vər ˈlaɪ.nɪŋ/',
      meaning: 'trong cái rủi có cái may / luôn có tia sáng tích cực',
      trap: 'Trong văn nói C1 thường rút gọn thành "the silver lining is that...".',
      example: 'The low grammar score stung at first, but the silver lining was knowing exactly what to fix.',
      exampleVi: 'Điểm ngữ pháp thấp lúc đầu hơi chạnh lòng, nhưng điểm tích cực là biết chính xác cần sửa gì.'
    },
    {
      id: 'c-41', category: 'nuance', level: 'C1', headword: 'frugal',
      chunk: 'thrifty vs. frugal vs. stingy', ipa: '/ˈfruː.ɡəl/',
      meaning: 'tiết kiệm khéo léo (tích cực) / giản dị tiết chế (trung tính-tốt) / keo kiệt (tiêu cực)',
      trap: 'Phân biệt sắc thái (Register & Connotation) chuẩn C1.',
      example: 'Being frugal helps you invest in quality education, whereas being stingy hurts relationships.',
      exampleVi: 'Sống tiết chế giúp bạn đầu tư cho giáo dục chất lượng, còn keo kiệt lại làm tổn hại các mối quan hệ.'
    },
    {
      id: 'c-42', category: 'nuance', level: 'C1', headword: 'watershed',
      chunk: 'a watershed moment', ipa: '/ˈwɔː.tər.ʃed ˈməʊ.mənt/',
      meaning: 'bước ngoặt mang tính lịch sử / quyết định',
      trap: 'Chuẩn từ vựng báo chí The Economist / The Guardian.',
      example: 'Passing the B2 milestone test marked a watershed moment in his confidence.',
      exampleVi: 'Vượt qua bài kiểm tra mốc B2 đánh dấu một bước ngoặt lớn về sự tự tin của anh ấy.'
    },
    // --- English Collocations in Use (Intermediate & Advanced Additions) ---
    {
      id: 'c-43', category: 'verb-noun', level: 'B2', headword: 'measure',
      chunk: 'take decisive measures', ipa: '/teɪk dɪˈsaɪ.sɪv ˈmeʒ.ərz/',
      meaning: 'áp dụng các biện pháp quyết liệt',
      trap: '❌ Không dùng "do measures" hay "make measures" → ✅ "take measures to + V" (English Collocations in Use).',
      example: 'Authorities must take decisive measures to curb urban air pollution.',
      exampleVi: 'Chính quyền phải áp dụng các biện pháp quyết liệt để kiềm chế ô nhiễm không khí đô thị.'
    },
    {
      id: 'c-44', category: 'verb-noun', level: 'C1', headword: 'exacerbate',
      chunk: 'exacerbate a problem', ipa: '/ɪɡˈzæs.ə.beɪt/',
      meaning: 'làm trầm trọng thêm một vấn đề',
      trap: '❌ Nâng cấp C1 chuẩn học thuật thay cho "make a problem worse".',
      example: 'Ignoring minor pronunciation errors can exacerbate comprehension issues later.',
      exampleVi: 'Phớt lờ các lỗi phát âm nhỏ có thể làm trầm trọng thêm vấn đề nghe hiểu về sau.'
    },
    {
      id: 'c-45', category: 'verb-noun', level: 'C1', headword: 'undermine',
      chunk: 'undermine confidence', ipa: '/ˌʌn.dəˈmaɪn ˈkɒn.fɪ.dəns/',
      meaning: 'làm xói mòn / suy yếu sự tự tin (hoặc niềm tin)',
      trap: 'Collocation chuẩn Cambridge CAE: undermine trust / authority / credibility / confidence.',
      example: 'Constant self-criticism tends to undermine learners\' speaking confidence.',
      exampleVi: 'Tự chỉ trích liên tục có xu hướng làm suy yếu sự tự tin khi nói của người học.'
    },
    {
      id: 'c-46', category: 'verb-noun', level: 'C1', headword: 'reap',
      chunk: 'reap the benefits', ipa: '/riːp ðə ˈben.ɪ.fɪts/',
      meaning: 'gặt hái thành quả / lợi ích lâu dài',
      trap: '❌ Thay cho "get benefits" mức B1 → ✅ "reap the benefits / rewards of...".',
      example: 'After six months of steady practice, you will reap the benefits in every meeting.',
      exampleVi: 'Sau sáu tháng luyện tập đều đặn, bạn sẽ gặt hái thành quả trong mọi cuộc họp.'
    },
    {
      id: 'c-47', category: 'verb-noun', level: 'B2', headword: 'bear',
      chunk: 'bear responsibility for', ipa: '/beər rɪˌspɒn.səˈbɪl.ə.ti/',
      meaning: 'chịu trách nhiệm về (trang trọng)',
      trap: 'Chuẩn Destination B2/C1: bear / shoulder responsibility for + N/V-ing.',
      example: 'Both educators and learners bear responsibility for creating an active study environment.',
      exampleVi: 'Cả người dạy lẫn người học đều chịu trách nhiệm xây dựng môi trường học chủ động.'
    },
    {
      id: 'c-48', category: 'verb-noun', level: 'C1', headword: 'warrant',
      chunk: 'warrant careful attention', ipa: '/ˈwɒr.ənt ˈkeə.fəl əˈten.ʃən/',
      meaning: 'xứng đáng được quan tâm / xem xét kỹ lưỡng',
      trap: 'Rất đắt giá cho bài Report & Proposal C1 thay cho "need attention".',
      example: 'The gap between passive reading and active writing warrants careful attention.',
      exampleVi: 'Khoảng cách giữa đọc thụ động và viết chủ động xứng đáng được chú ý kỹ lưỡng.'
    },
    {
      id: 'c-49', category: 'verb-noun', level: 'C1', headword: 'curb',
      chunk: 'curb emissions', ipa: '/kɜːrb ɪˈmɪʃ.ənz/',
      meaning: 'kiềm chế / cắt giảm khí thải (hoặc thói quen xấu)',
      trap: 'Collocation báo chí chuẩn The Economist: curb inflation / curb emissions / curb spending.',
      example: 'Strict industrial standards are essential to curb carbon emissions globally.',
      exampleVi: 'Các tiêu chuẩn công nghiệp nghiêm ngặt là thiết yếu để kiềm chế khí thải carbon toàn cầu.'
    },
    {
      id: 'c-50', category: 'verb-noun', level: 'B2', headword: 'harm',
      chunk: 'do more harm than good', ipa: '/duː mɔːr hɑːrm ðæn ɡʊd/',
      meaning: 'lợi bất cập hại (gây hại nhiều hơn lợi)',
      trap: '❌ Luôn dùng DO (không dùng make) với harm/damage/good!',
      example: 'Memorizing complex C1 idioms without context can do more harm than good.',
      exampleVi: 'Học thuộc lòng thành ngữ C1 mà không hiểu ngữ cảnh có thể lợi bất cập hại.'
    },
    {
      id: 'c-51', category: 'verb-noun', level: 'C1', headword: 'objection',
      chunk: 'raise an objection', ipa: '/reɪz ən əbˈdʒek.ʃən/',
      meaning: 'nêu ra ý kiến phản đối',
      trap: '❌ Dùng RAISE (ngoại động từ), không dùng "rise an objection".',
      example: 'Several residents raised strong objections to the proposed highway expansion.',
      exampleVi: 'Nhiều cư dân đã nêu ra sự phản đối mạnh mẽ đối với đề xuất mở rộng cao tốc.'
    },
    {
      id: 'c-52', category: 'academic', level: 'C1', headword: 'unprecedented',
      chunk: 'at an unprecedented pace', ipa: '/ʌnˈpres.ɪ.den.tɪd/',
      meaning: 'với tốc độ chưa từng có tiền lệ',
      trap: 'Cụm C1 kinh điển cho bài luận về Công nghệ & Toàn cầu hóa (Oxford 5000 C1).',
      example: 'Generative artificial intelligence is evolving at an unprecedented pace.',
      exampleVi: 'Trí tuệ nhân tạo tạo sinh đang phát triển với tốc độ chưa từng có tiền lệ.'
    },
    {
      id: 'c-53', category: 'academic', level: 'C1', headword: 'spur',
      chunk: 'spur economic growth', ipa: '/spɜːr ˌiː.kəˈnɒm.ɪk ɡrəʊθ/',
      meaning: 'thúc đẩy mạnh mẽ tăng trưởng kinh tế',
      trap: 'Mạnh mẽ và chuẩn văn phong báo chí hơn "increase economic growth".',
      example: 'Strategic investment in digital infrastructure can spur long-term economic growth.',
      exampleVi: 'Đầu tư chiến lược vào hạ tầng số có thể thúc đẩy tăng trưởng kinh tế dài hạn.'
    },
    {
      id: 'c-54', category: 'nuance', level: 'C1', headword: 'utterly',
      chunk: 'utterly ridiculous / compelling', ipa: '/ˈʌt.ə.li/',
      meaning: 'hoàn toàn vô lý / cực kỳ thuyết phục (trạng từ nhấn mạnh C1)',
      trap: '⚠️ Adverb + Adjective Collocation chuẩn CAE: dùng "utterly / deeply / fiercely", tránh lạm dụng "very"!',
      example: 'Her argument for micro-writing was utterly compelling and backed by clear evidence.',
      exampleVi: 'Lập luận của cô ấy về phương pháp micro-writing cực kỳ thuyết phục và có bằng chứng rõ ràng.'
    }
  ],

  grammarModules: [
    {
      id: 'gm-mixed',
      priority: 'Điểm nghẽn #2 · Ưu tiên 1',
      level: 'B2–C1',
      title: 'Câu điều kiện hỗn hợp (Mixed Conditionals)',
      subtitle: 'Kết nối nguyên nhân quá khứ ↔ kết quả hiện tại (và ngược lại)',
      summary: 'Chữa dứt điểm lỗi nhầm lẫn giữa Loại 2 và Loại 3 khi mệnh đề If và mệnh đề chính nằm ở hai mốc thời gian khác nhau.',
      formulas: [
        'Dạng 1 (Quá khứ → Hiện tại): If + S + had + V3, S + would/could + V(nguyên mẫu) + (now/today)',
        'Dạng 2 (Hiện tại → Quá khứ): If + S + V2/were, S + would have + V3 (yesterday/last week)',
        'Đảo ngữ C1 bỏ "If": Had I studied earlier, I would speak fluently now.'
      ],
      b1Sentence: 'I didn\'t practice speaking last year, so I am not confident now.',
      c1Sentence: 'Had I practiced speaking consistently last year, I would feel far more confident now.',
      pitfall: 'Người học hay dùng "would have + V3" cho cả kết quả hiện tại (Sai: "...I would have been fluent now" → Đúng: "...I would be fluent now").',
      drills: [
        {
          q: 'If she _____ that scholarship in 2023, she would be living in London now.',
          options: ['accepted', 'had accepted', 'would accept', 'has accepted'],
          answer: 1,
          explain: 'Nguyên nhân trong quá khứ (2023) → dùng Past Perfect (had accepted); kết quả ở hiện tại (now) → would be living.'
        },
        {
          q: 'If he weren\'t so afraid of making mistakes, he _____ for the international role last month.',
          options: ['would apply', 'will apply', 'would have applied', 'applied'],
          answer: 2,
          explain: 'Tính cách hiện tại/luôn đúng (weren\'t) ảnh hưởng tới hành động quá khứ (last month) → would have applied.'
        },
        {
          q: '_____ the advice earlier, we wouldn\'t be facing this bottleneck today.',
          options: ['If we followed', 'Had we followed', 'Did we follow', 'Were we following'],
          answer: 1,
          explain: 'Đảo ngữ câu điều kiện hỗn hợp C1 bỏ "If": Had + S + V3 (Had we followed).'
        }
      ]
    },
    {
      id: 'gm-subjunctive',
      priority: 'Điểm nghẽn #2 · Ưu tiên 2',
      level: 'C1',
      title: 'Thức giả định (Mandative Subjunctive)',
      subtitle: 'It is imperative that he BE... · recommend/insist/demand',
      summary: 'Cấu trúc đặc trưng của tiếng Anh C1 trang trọng (báo cáo, đề xuất, hội thảo). Động từ trong mệnh đề "that" luôn giữ nguyên mẫu không chia.',
      formulas: [
        'Động từ yêu cầu/khuyên: suggest / recommend / insist / demand / propose + that + S + (not) + V(nguyên mẫu)',
        'Tính từ cấp thiết: It is imperative / essential / vital / crucial + that + S + (not) + V(nguyên mẫu)',
        'Thể bị động: ...that the report BE submitted on time (KHÔNG chia is/was!)'
      ],
      b1Sentence: 'The manager says every employee must follow the new policy.',
      c1Sentence: 'The manager insists that every employee adhere strictly to the new policy.',
      pitfall: 'Cực kỳ dễ chia nhầm thêm "-s" ở ngôi thứ 3 hoặc dùng "is/was" (Sai: "It is vital that he attends" → Đúng C1: "It is vital that he attend").',
      drills: [
        {
          q: 'It is imperative that the candidate _____ present ten minutes before the interview.',
          options: ['is', 'be', 'was', 'will be'],
          answer: 1,
          explain: 'Sau "It is imperative that", động từ "to be" luôn giữ nguyên mẫu ở thức giả định → be.'
        },
        {
          q: 'The doctor strongly recommended that she _____ late-night caffeine.',
          options: ['avoids', 'avoided', 'avoid', 'to avoid'],
          answer: 2,
          explain: 'Cấu trúc Subjunctive: recommend that + S + V(nguyên mẫu) → avoid (không thêm -s, không dùng to-V).'
        },
        {
          q: 'The committee demanded that all personal records _____ kept strictly confidential.',
          options: ['are', 'be', 'were', 'being'],
          answer: 1,
          explain: 'Thức giả định ở thể bị động: that + S + be + V3 → be kept.'
        }
      ]
    },
    {
      id: 'gm-inversion',
      priority: 'Điểm nghẽn #2 · Ưu tiên 3',
      level: 'C1',
      title: 'Đảo ngữ Nhấn mạnh (Negative & Emphatic Inversion)',
      subtitle: 'Not only did... · Seldom have... · Hardly... when · Little did...',
      summary: 'Đưa trạng từ phủ định hoặc giới hạn lên đầu câu và đảo trợ động từ lên trước chủ ngữ để tạo lực nhấn tự nhiên chuẩn C1.',
      formulas: [
        'Trạng từ phủ định + Trợ động từ (do/does/did/have/had/will/can) + S + V',
        'Not only + Aux + S + V, but S + also + V',
        'Hardly / Scarcely + had + S + V3 + WHEN + S + V2  |  No sooner + had + S + V3 + THAN + S + V2',
        'Only after / Only when / Only by + [cụm/mệnh đề phụ] + Aux + S + V (đảo ở mệnh đề CHÍNH!)'
      ],
      b1Sentence: 'I didn\'t realize how helpful collocations were until I took the test.',
      c1Sentence: 'Not until I took the diagnostic test did I realize how crucial collocations truly are.',
      pitfall: 'Quên đảo trợ động từ, hoặc đảo NHẦM ở mệnh đề phụ của "Only when / Not until" (phải đảo ở mệnh đề CHÍNH phía sau!).',
      drills: [
        {
          q: 'Not only _____ his listening accuracy, but he also gained confidence in debates.',
          options: ['he improved', 'did he improve', 'he did improve', 'improved he'],
          answer: 1,
          explain: 'Đảo ngữ với "Not only" ở đầu câu: Not only + did + S + V(nguyên mẫu) → did he improve.'
        },
        {
          q: 'Hardly had the lecture begun _____ the fire alarm went off.',
          options: ['than', 'then', 'when', 'while'],
          answer: 2,
          explain: 'Cặp cố định C1: Hardly/Scarcely... WHEN (còn No sooner... THAN).'
        },
        {
          q: 'Seldom _____ such a thorough and well-structured proposal.',
          options: ['I have seen', 'have I seen', 'I saw', 'did I saw'],
          answer: 1,
          explain: '"Seldom" đứng đầu câu kích hoạt đảo ngữ trợ động từ "have" lên trước "I" → have I seen.'
        }
      ]
    },
    {
      id: 'gm-cleft',
      priority: 'Chặng 3 · Tuần 17–18',
      level: 'B2–C1',
      title: 'Câu chẻ (Cleft Sentences — It-cleft & Wh-cleft)',
      subtitle: 'It is... that · What we need to focus on is...',
      summary: 'Tách một câu đơn thành 2 vế để làm nổi bật chính xác thông tin bạn muốn người nghe/đọc chú ý trong thuyết trình và bài luận C1.',
      formulas: [
        'It-cleft: It is / was + [Thành phần cần nhấn] + that / who + ...',
        'Wh-cleft: What + S + V + is / was + [Thông tin trọng tâm]',
        'All-cleft: All (that) I need is + [danh từ / (to) V]'
      ],
      b1Sentence: 'We need to focus on daily output rather than memorizing isolated words.',
      c1Sentence: 'What we need to focus on is consistent daily output rather than isolated word lists.',
      pitfall: 'Nhầm lẫn chia động từ số nhiều sau mệnh đề "What..." — mệnh đề "What + S + V" thường đi với "is/was" trừ khi tân ngữ phía sau là số nhiều rõ rệt.',
      drills: [
        {
          q: '_____ truly distinguishes C1 speakers is their precise control of register and nuance.',
          options: ['That', 'Which', 'What', 'It'],
          answer: 2,
          explain: 'Câu chẻ Wh-cleft: "What + V + is..." (= Điều thực sự tạo nên khác biệt là...).'
        },
        {
          q: 'It was her daily micro-writing routine _____ eventually eliminated her fear of essays.',
          options: ['what', 'that', 'whom', 'where'],
          answer: 1,
          explain: 'Câu chẻ It-cleft nhấn mạnh danh từ chỉ vật → It was [X] THAT...'
        },
        {
          q: 'All _____ to bridge the gap is fifteen focused minutes each morning.',
          options: ['that takes', 'what it takes', 'it takes', 'which takes'],
          answer: 2,
          explain: 'Cấu trúc All-cleft tự nhiên: All (that) it takes is... (Không dùng "All what").'
        }
      ]
    },
    {
      id: 'gm-modals',
      priority: 'Chặng 1 · Tuần 5–8',
      level: 'B1+–B2',
      title: 'Past Modals & Động từ tường thuật nâng cao',
      subtitle: 'must have V3 · shouldn\'t have V3 · insist / acknowledge / warn',
      summary: 'Diễn đạt suy đoán chắc chắn, tiếc nuối trong quá khứ và tường thuật ý kiến tinh tế hơn hẳn động từ "say/tell".',
      formulas: [
        'Suy đoán quá khứ: must have V3 (chắc hẳn đã) | can\'t/couldn\'t have V3 (không thể nào đã)',
        'Phê bình/Tiếc nuối: should(n\'t) have V3 (lẽ ra nên / không nên đã)',
        'Reporting Verbs: warn sb against V-ing | insist on V-ing | acknowledge that... | advise sb to V'
      ],
      b1Sentence: 'He said sorry because he didn\'t back up the files before updating.',
      c1Sentence: 'He acknowledged that he should have backed up the files prior to updating.',
      pitfall: 'Dùng "mustn\'t have V3" để nói "chắc chắn đã không làm" → SAI! Phủ định của suy đoán quá khứ phải dùng "can\'t have V3".',
      drills: [
        {
          q: 'She passed C1 with distinction — she _____ tirelessly over the past six months.',
          options: ['must study', 'must have studied', 'should have studied', 'can\'t have studied'],
          answer: 1,
          explain: 'Suy đoán logic gần như chắc chắn về một quá trình đã diễn ra → must have + V3.'
        },
        {
          q: 'You _____ forgotten your passport at home; I saw you put it in your backpack!',
          options: ['mustn\'t have', 'can\'t have', 'shouldn\'t have', 'needn\'t have'],
          answer: 1,
          explain: 'Phủ định suy đoán chắc chắn trong quá khứ luôn dùng "can\'t have + V3" (không dùng mustn\'t have).'
        },
        {
          q: 'The mentor warned us _____ translating Vietnamese idioms word for word.',
          options: ['to not', 'against', 'from not', 'that not'],
          answer: 1,
          explain: 'Cấu trúc chuẩn: warn someone against (doing) something.'
        }
      ]
    },
    {
      id: 'gm-nominalization',
      priority: 'Chặng 2 · Tuần 9–12',
      level: 'B2–C1',
      title: 'Danh từ hóa (Nominalization) & Liên từ học thuật',
      subtitle: 'Chuyển câu nói thông thường thành văn phong báo cáo & luận C1',
      summary: 'Kỹ thuật cốt lõi của Tuần 11–12: biến động từ/tính từ thành cụm danh từ kết hợp với Participle Clauses (điểm mạnh sẵn có của bạn!).',
      formulas: [
        'Động từ → Danh từ: analyze → the analysis of | implement → the implementation of | fail → the failure to',
        'Nhượng bộ C1: Despite / In spite of + Noun/V-ing  vs.  Although / Whereas + S + V',
        'Kết hợp điểm mạnh của bạn: Having analyzed the data, the researchers proposed a viable solution.'
      ],
      b1Sentence: 'Because the city grew very fast, traffic became much worse.',
      c1Sentence: 'Rapid urban expansion resulted in a marked deterioration in traffic conditions.',
      pitfall: 'Dùng "Despite + S + V" (Sai: "Despite it rained...") → phải là "Despite the rain" hoặc "Despite the fact that it rained".',
      drills: [
        {
          q: '_____ the tight schedule, she managed to complete every evening micro-writing task.',
          options: ['Although', 'Despite', 'Whereas', 'However'],
          answer: 1,
          explain: 'Theo sau là cụm danh từ "the tight schedule" (không có động từ chia thì) → dùng Despite.'
        },
        {
          q: 'Which sentence best demonstrates C1 academic nominalization?',
          options: [
            'People use phones too much so they sleep badly.',
            'Because people use phones a lot, their sleep is very bad.',
            'Excessive smartphone usage leads to significant sleep disruption.',
            'Using phones a lot makes people not sleep well.'
          ],
          answer: 2,
          explain: '"Excessive smartphone usage" và "significant sleep disruption" danh từ hóa súc tích, chuẩn văn phong học thuật C1.'
        },
        {
          q: '_____ the core grammar bottlenecks, he moved swiftly toward full C1 essay writing.',
          options: ['Overcame', 'Having overcome', 'Have overcome', 'To overcoming'],
          answer: 1,
          explain: 'Mệnh đề phân từ hoàn thành (Having + V3) diễn đạt hành động xảy ra trước hành động chính.'
        }
      ]
    },
    {
      id: 'gm-impersonal-passive',
      priority: 'Giáo trình Hewings Units 22–24',
      level: 'C1',
      title: 'Bị động khách quan & Tường thuật Học thuật',
      subtitle: 'It is widely acknowledged that... · is believed to have + V3',
      summary: 'Cấu trúc không thể thiếu trong Cambridge CAE, IELTS Writing Task 2 và báo cáo C1 (Advanced Grammar in Use — Martin Hewings Units 22–24) để giữ giọng văn khách quan.',
      textbookRef: 'Advanced Grammar in Use (M. Hewings) Units 22–24 · Destination C1 & C2 (Unit 7 Passive)',
      referenceUrl: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1',
      formulas: [
        'Khách quan với It: It is widely believed / acknowledged / alleged that + S + V',
        'Đưa chủ ngữ lên đầu (Hiện tại): S + is/are + thought / reported / expected + TO + V',
        'Đưa chủ ngữ lên đầu (Quá khứ): S + is/are + believed / alleged + TO HAVE + V3'
      ],
      b1Sentence: 'Many people think that the ancient city disappeared because of drought.',
      c1Sentence: 'The ancient city is widely believed to have disappeared as a result of prolonged drought.',
      pitfall: 'Nhầm lẫn mốc thời gian ở động từ nguyên mẫu: nếu sự việc đã xảy ra TRƯỚC thời điểm nói, bắt buộc dùng Perfect Infinitive ("to have + V3", KHÔNG dùng "to + V").',
      drills: [
        {
          q: 'The policy is widely believed _____ a decisive impact on rural employment last decade.',
          options: ['to have', 'to have had', 'having had', 'that it had'],
          answer: 1,
          explain: 'Có mốc quá khứ "last decade" (xảy ra trước hiện tại) → Perfect Infinitive: to have had.'
        },
        {
          q: '_____ that consistent exposure to varied accents accelerates listening fluency.',
          options: ['It widely acknowledges', 'It is widely acknowledged', 'There is acknowledged', 'That is acknowledged'],
          answer: 1,
          explain: 'Cấu trúc bị động khách quan chuẩn C1: It is widely acknowledged that...'
        },
        {
          q: 'The software glitch is estimated _____ thousands of commuters during yesterday\'s rush hour.',
          options: ['to delay', 'to be delaying', 'to have delayed', 'delaying'],
          answer: 2,
          explain: 'Sự cố xảy ra trong quá khứ ("yesterday\'s rush hour") → to have delayed.'
        }
      ]
    },
    {
      id: 'gm-double-comp',
      priority: 'Giáo trình Destination C1 & C2',
      level: 'C1',
      title: 'So sánh kép & Giả định hiện tại (It\'s high time / Would rather)',
      subtitle: 'The more..., the more... · It\'s high time + V2 · Would rather + S + V2',
      summary: 'Các cấu trúc ăn điểm tuyệt đối trong Cambridge C1 Key Word Transformations (Part 4) và bài Nói tranh biện (Destination C1 & C2 — Unreal Past & Comparatives).',
      textbookRef: 'Destination C1 & C2 (Unreal Past) · Advanced Grammar in Use (M. Hewings)',
      referenceUrl: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1',
      formulas: [
        'So sánh kép: The + comparative (+ S + V), the + comparative (+ S + V)',
        'Đã đến lúc phải làm gì: It is (high / about) time + S + V2/V-ed (dù nói về hiện tại!)',
        'Muốn ai đó làm gì (Unreal Past): S1 + would rather + S2 + V2 (hiện tại) | had + V3 (quá khứ)'
      ],
      b1Sentence: 'If you practice speaking more often, you will hesitate much less.',
      c1Sentence: 'The more consistently you practice speaking, the less likely you are to hesitate under pressure.',
      pitfall: 'Sau "It\'s high time + S..." và "I\'d rather you..." luôn lùi thì về Quá khứ đơn (V2) dù đang nói về hiện tại/tương lai! (Sai: "It\'s high time we start" → Đúng: "It\'s high time we started").',
      drills: [
        {
          q: 'It is high time the organization _____ clear guidelines on ethical AI usage.',
          options: ['establishes', 'established', 'will establish', 'has established'],
          answer: 1,
          explain: 'Cấu trúc Unreal Past: It\'s high time + S + V2/V-ed → established.'
        },
        {
          q: 'I\'d rather you _____ me honest, constructive feedback than polite praise.',
          options: ['give', 'gave', 'will give', 'giving'],
          answer: 1,
          explain: 'Khi có hai chủ ngữ khác nhau (I\'d rather YOU...) nói về hiện tại/tương lai → dùng V2 (gave).'
        },
        {
          q: 'The more nuanced your vocabulary becomes, _____ you can express complex arguments.',
          options: ['more effortlessly', 'the effortlessly', 'the more effortlessly', 'most effortlessly'],
          answer: 2,
          explain: 'Cấu trúc so sánh kép bắt buộc có "the" ở cả hai vế → the more effortlessly.'
        }
      ]
    }
  ],

  writingPrompts: [
    {
      id: 'wp-01',
      mode: 'micro',
      stage: 'Tuần 1–2 · Micro-Writing (2 câu)',
      title: 'Thói quen học tập & Sự bền bỉ',
      instruction: 'Viết ĐÚNG 2 câu chất lượng cao về lý do duy trì thói quen hằng ngày quan trọng hơn học dồn. Bắt buộc lồng ghép 1 Collocation ("maintain a habit" / "yield results") và 1 cấu trúc nhấn mạnh hoặc tương phản.',
      targetWords: ['maintain', 'habit', 'yield', 'results', 'although', 'whereas', 'despite', 'not only'],
      model: 'Although cramming before an exam may offer temporary reassurance, it rarely yields lasting results. Only by maintaining a disciplined daily habit can learners transform passive knowledge into genuine fluency.',
      viHint: 'Gợi ý: Câu 1 dùng nhượng bộ (Although / Despite...), Câu 2 dùng đảo ngữ (Only by... can...).'
    },
    {
      id: 'wp-02',
      mode: 'micro',
      stage: 'Tuần 1–2 · Micro-Writing (2 câu)',
      title: 'Ứng dụng Mixed Conditional về công việc / học tập',
      instruction: 'Viết 2 câu chia sẻ một quyết định trong quá khứ ảnh hưởng đến hiện tại của bạn (dùng 1 Câu điều kiện hỗn hợp "If + had V3, ... would + V now" hoặc đảo ngữ "Had I...").',
      targetWords: ['had', 'would', 'now', 'today', 'confident', 'establish', 'bridge'],
      model: 'Had I focused on active speaking earlier in my career, I would feel far more at ease during international meetings today. That being said, dedicating focused time each evening is steadily bridging that gap.',
      viHint: 'Gợi ý: Kết hợp Mixed Conditional ở câu 1 + Discourse Marker ("That being said,...") ở câu 2.'
    },
    {
      id: 'wp-03',
      mode: 'micro',
      stage: 'Tuần 3–4 · Micro-Writing (2 câu)',
      title: 'Công nghệ AI & Thức giả định (Subjunctive)',
      instruction: 'Viết 2 câu nhận định về việc sử dụng AI trong giáo dục/công việc. Hãy dùng "It is imperative/essential that + S + V(nguyên mẫu)" và 1 Collocation ("pose a threat" hoặc "mitigate risks").',
      targetWords: ['imperative', 'essential', 'vital', 'that', 'mitigate', 'pose', 'threat', 'risk'],
      model: 'While AI tools have become ubiquitous in modern workplaces, overreliance on them can pose a subtle threat to critical thinking. Consequently, it is imperative that organizations establish clear guidelines to mitigate these risks.',
      viHint: 'Gợi ý: Chú ý sau "imperative that organizations + establish" giữ nguyên mẫu!'
    },
    {
      id: 'wp-04',
      mode: 'micro',
      stage: 'Tuần 5–6 · Micro-Writing (2 câu)',
      title: 'Cân bằng Công việc & Cuộc sống (Đảo ngữ)',
      instruction: 'Viết 2 câu dùng "Not only + Aux + S + V, but ... also..." và cụm "strike a balance" hoặc "alleviate pressure".',
      targetWords: ['not only', 'but', 'balance', 'alleviate', 'pressure', 'detrimental'],
      model: 'Not only does setting clear work boundaries alleviate chronic stress, but it also boosts creative problem-solving. Ultimately, professionals must strike a sustainable balance before burnout has a detrimental impact on their health.',
      viHint: 'Gợi ý: Nhớ đảo trợ động từ "does/do/did" ngay sau "Not only".'
    },
    {
      id: 'wp-05',
      mode: 'paraphrase',
      stage: 'Tuần 11–12 · Paraphrasing B1 → C1',
      title: 'Nâng cấp câu bằng Danh từ hóa (Nominalization)',
      instruction: 'Viết lại câu B1 sau lên trình độ C1 trang trọng hơn (gợi ý dùng: "implementation", "yield", "significant", "alleviate"): \n👉 Câu gốc B1: "When companies let staff work from home, workers feel less stressed and do their jobs better."',
      targetWords: ['implementation', 'flexible', 'remote', 'alleviate', 'productivity', 'yield', 'significant'],
      model: 'The implementation of flexible remote-work policies significantly alleviates employee stress while yielding marked improvements in overall productivity.',
      viHint: 'Đổi "When companies let staff..." → "The implementation of..." và "do their jobs better" → "improvements in productivity".'
    },
    {
      id: 'wp-06',
      mode: 'paraphrase',
      stage: 'Tuần 17–18 · Paraphrasing B1 → C1',
      title: 'Nâng cấp câu bằng Câu chẻ & Collocation',
      instruction: 'Viết lại câu B1 sau lên chuẩn C1 nhấn mạnh (dùng What-cleft hoặc It-cleft): \n👉 Câu gốc B1: "Learners don\'t lack grammar knowledge; they lack real speaking practice."',
      targetWords: ['what', 'it is', 'that', 'rather than', 'fluency', 'practice', 'bridge'],
      model: 'What most intermediate learners truly lack is consistent speaking output rather than additional theoretical grammar rules.',
      viHint: 'Dùng "What [chủ ngữ] truly lack is [X] rather than [Y]".'
    },
    {
      id: 'wp-07',
      mode: 'essay',
      stage: 'Tuần 11–22 · Đoạn văn 150 từ / Luận C1 (260–300 từ)',
      title: 'Opinion / Discussion Essay: Tự học trực tuyến vs Lớp học truyền thống',
      instruction: 'Viết 1 đoạn văn (150 từ ở Chặng 1–2) hoặc bài luận đầy đủ (250–300 từ ở Chặng 3) thảo luận quan điểm: "In the age of AI and online platforms, self-directed learning is becoming more effective than traditional classroom instruction. To what extent do you agree?"',
      targetWords: ['nevertheless', 'consequently', 'whereas', 'furthermore', 'imperative', 'balance', 'viable', 'foster', 'not only'],
      model: 'The proliferation of interactive digital platforms has undeniably reshaped how individuals acquire complex skills such as foreign languages. While traditional classrooms continue to foster structured peer interaction, self-directed online training offers an unprecedented level of personalization. Not only can learners tailor their schedules around professional commitments, but they can also employ spaced-repetition systems to target personal weaknesses systematically. That being said, complete autonomy can be a double-edged sword for individuals who struggle to maintain consistent habits without external accountability. Taking everything into account, the most viable approach lies in striking a balance: leveraging personalized digital tools for daily input while engaging in live human coaching for nuanced feedback.',
      viHint: 'Cấu trúc 4 phần: Topic Sentence rõ ràng → Lập luận + Ví dụ → Phản biện (That being said...) → Kết luận.'
    }
  ],

  listeningPassages: [
    {
      id: 'lp-01',
      level: 'B1+',
      accentHint: 'en-GB',
      source: 'Chặng 1 · Phonetics & Ending Sounds',
      sentence: 'Establishing a consistent morning routine helps alleviate decision fatigue throughout the entire workday.',
      blankWord: 'alleviate',
      vi: 'Xây dựng thói quen buổi sáng đều đặn giúp giảm bớt sự mệt mỏi khi ra quyết định suốt cả ngày làm việc.',
      note: 'Chú ý âm cuối /s/ trong "helps" và nối âm "throughout the entire".'
    },
    {
      id: 'lp-02',
      level: 'B2',
      accentHint: 'en-US',
      source: 'Chặng 1 · Mixed Conditionals',
      sentence: 'Had the organization conducted thorough market research earlier, it would occupy a far stronger position today.',
      blankWord: 'conducted',
      vi: 'Giá như tổ chức đó tiến hành nghiên cứu thị trường kỹ lưỡng sớm hơn thì hôm nay họ đã ở vị thế vững mạnh hơn nhiều.',
      note: 'Chú ý đuôi -ed đọc /ɪd/ trong "conducted" và nhấn mạnh vào "far stronger".'
    },
    {
      id: 'lp-03',
      level: 'B2',
      accentHint: 'en-AU',
      source: 'Thứ Sáu · Đa giọng đọc UK/US/AU',
      sentence: 'Striking a delicate balance between rapid innovation and ethical responsibility remains a global challenge.',
      blankWord: 'delicate',
      vi: 'Đạt được sự cân bằng tinh tế giữa đổi mới nhanh chóng và trách nhiệm đạo đức vẫn là thách thức toàn cầu.',
      note: 'Thử chuyển giọng đọc sang AU hoặc UK ở góc trên để quen biến thể nguyên âm.'
    },
    {
      id: 'lp-04',
      level: 'C1',
      accentHint: 'en-GB',
      source: 'Chặng 3 · Subjunctive Mood',
      sentence: 'It is imperative that every researcher corroborate their findings with transparent, peer-reviewed evidence.',
      blankWord: 'corroborate',
      vi: 'Điều tối quan trọng là mọi nhà nghiên cứu đều chứng thực phát hiện của mình bằng bằng chứng minh bạch có phản biện.',
      note: 'Trọng âm của "corroborate" rơi vào âm tiết thứ 2: cor-ROB-o-rate.'
    },
    {
      id: 'lp-05',
      level: 'C1',
      accentHint: 'en-US',
      source: 'Chặng 3 · Inversion & Nuance',
      sentence: 'Not only did the workshop shed light on subtle pronunciation habits, but it also fostered genuine confidence.',
      blankWord: 'subtle',
      vi: 'Buổi hội thảo không chỉ làm sáng tỏ những thói quen phát âm tinh tế mà còn nuôi dưỡng sự tự tin thực sự.',
      note: 'Từ "subtle" có âm "b" câm! Đọc là /ˈsʌt.əl/.'
    },
    {
      id: 'lp-06',
      level: 'C1',
      accentHint: 'en-GB',
      source: 'Chặng 3 · Academic Register (The Economist style)',
      sentence: 'Despite initial skepticism, renewable microgrids have emerged as a viable alternative for remote communities.',
      blankWord: 'viable',
      vi: 'Bất chấp sự hoài nghi ban đầu, lưới điện siêu nhỏ tái tạo đã nổi lên như một giải pháp thay thế khả thi cho các cộng đồng vùng sâu.',
      note: 'Chú ý "skepticism" (US) / "scepticism" (UK) đọc /ˈskep.tɪ.sɪ.zəm/.'
    },
    {
      id: 'lp-07',
      level: 'B2',
      accentHint: 'en-AU',
      source: 'Chặng 2 · Discourse Markers',
      sentence: 'Remote collaboration brings undeniable flexibility; on the flip side, spontaneous mentorship becomes harder to maintain.',
      blankWord: 'spontaneous',
      vi: 'Cộng tác từ xa mang lại sự linh hoạt không thể phủ nhận; ở chiều ngược lại, việc cố vấn tự phát trở nên khó duy trì hơn.',
      note: 'Spontaneous /spɒnˈteɪ.ni.əs/ — nhấn trọng âm vào âm tiết thứ 2 (-TEI-).'
    },
    {
      id: 'lp-08',
      level: 'C1',
      accentHint: 'en-US',
      source: 'Chặng 3 · Cleft Sentences',
      sentence: 'What truly bridges the gap between intermediate competence and fluency is deliberate daily output.',
      blankWord: 'deliberate',
      vi: 'Điều thực sự thu hẹp khoảng cách giữa năng lực trung cấp và sự trôi chảy là luyện đầu ra có chủ đích mỗi ngày.',
      note: 'Tính từ "deliberate" đọc đuôi /-rət/ (khác với động từ đọc /-reɪt/).'
    }
  ],

  speakingTopics321: [
    {
      id: 'sp-01',
      topic: 'Work & Career (Tuần 3–4)',
      prompt: 'Describe a skill you are currently building to advance your career and explain how you maintain consistency.',
      markers: ['As far as I\'m concerned', 'That being said', 'maintain a habit', 'yield tangible results']
    },
    {
      id: 'sp-02',
      topic: 'Technology & AI (Tuần 3–4 / 19–20)',
      prompt: 'Is artificial intelligence a catalyst for human creativity, or does it pose a threat to critical thinking?',
      markers: ['On the flip side', 'a double-edged sword', 'pose a threat', 'mitigate risks']
    },
    {
      id: 'sp-03',
      topic: 'Education & Lifelong Learning (Tuần 11–14)',
      prompt: 'Should universities prioritize practical problem-solving over traditional theoretical exams? Defend your stance.',
      markers: ['From a broader perspective', 'It is imperative that', 'bridge the gap', 'a case in point']
    },
    {
      id: 'sp-04',
      topic: 'Environment & Society (Tuần 15–16)',
      prompt: 'Who holds greater responsibility for tackling climate change: governments, corporations, or individual citizens?',
      markers: ['Taking everything into account', 'tackle an issue', 'of paramount importance', 'viable alternative']
    },
    {
      id: 'sp-05',
      topic: 'Psychology & Decision-Making (Tuần 21–22 C1)',
      prompt: 'Think of a past decision that shaped where you are today. Use at least one Mixed Conditional to reflect on it.',
      markers: ['To be perfectly honest', 'Had I known...', 'a watershed moment', 'the silver lining']
    }
  ],

  /* ------------------------------------------------------------------------
     Cambridge C1 Advanced (CAE) — Reading & Use of English (Parts 2, 3, 4)
     Định dạng đề thi chuẩn Cambridge C1 (Destination C1/C2 & Hewings)
     ------------------------------------------------------------------------ */
  caeUseOfEnglish: {
    openCloze: [
      {
        id: 'oc-1',
        sentence: 'Not _____ did the seminar clarify mixed conditionals, but it also boosted everyone\'s writing speed.',
        answers: ['only'],
        explain: 'Cấu trúc đảo ngữ nhấn mạnh cố định: Not ONLY + Aux + S + V, but ... also...'
      },
      {
        id: 'oc-2',
        sentence: 'Hardly had the keynote speaker stepped onto the stage _____ the microphone failed.',
        answers: ['when'],
        explain: 'Cặp đảo ngữ thời gian chuẩn CAE: Hardly / Scarcely ... WHEN (No sooner ... THAN).'
      },
      {
        id: 'oc-3',
        sentence: 'It is high _____ the department updated its outdated onboarding curriculum.',
        answers: ['time'],
        explain: 'Cấu trúc Unreal Past: It is high / about TIME + S + V2.'
      },
      {
        id: 'oc-4',
        sentence: '_____ the initial skepticism surrounding online coaching, completion rates exceeded ninety percent.',
        answers: ['despite'],
        explain: 'Theo sau là cụm danh từ ("the initial skepticism") → giới từ nhượng bộ DESPITE.'
      },
      {
        id: 'oc-5',
        sentence: 'Remote work offers remarkable autonomy; _____, it requires strong personal discipline to avoid burnout.',
        answers: ['however', 'nevertheless', 'nonetheless'],
        explain: 'Trạng từ liên kết tương phản đặt sau dấu chấm phẩy và trước dấu phẩy: HOWEVER / NEVERTHELESS.'
      },
      {
        id: 'oc-6',
        sentence: 'The researchers called for strict ethical standards _____ order to mitigate potential algorithmic bias.',
        answers: ['in'],
        explain: 'Cụm chỉ mục đích trang trọng chuẩn học thuật: IN order to + V.'
      }
    ],
    wordFormation: [
      {
        id: 'wf-1',
        root: 'PRECEDE',
        sentence: 'Digital learning platforms have grown at an _____ pace over the past five years.',
        answers: ['unprecedented'],
        explain: 'Tiền tố phủ định un- + tính từ phân từ: UNPRECEDENTED (chưa từng có tiền lệ).'
      },
      {
        id: 'wf-2',
        root: 'SUSTAIN',
        sentence: 'Long-term _____ depends on building realistic daily habits rather than short bursts of willpower.',
        answers: ['sustainability'],
        explain: 'Sau tính từ "Long-term" cần danh từ trừu tượng → SUSTAINABILITY (tính bền vững).'
      },
      {
        id: 'wf-3',
        root: 'RELY',
        sentence: 'Public transit in that district used to be notoriously _____, causing frequent commuter delays.',
        answers: ['unreliable'],
        explain: 'Ngữ cảnh tiêu cực ("notoriously", "delays") → tính từ phủ định UNRELIABLE (không đáng tin cậy).'
      },
      {
        id: 'wf-4',
        root: 'PERCEIVE',
        sentence: 'Shadowing native podcasts gradually reshapes learners\' _____ of natural rhythm and connected speech.',
        answers: ['perception'],
        explain: 'Sau sở hữu cách "learners\'" cần danh từ → PERCEPTION (sự cảm nhận / nhận thức).'
      },
      {
        id: 'wf-5',
        root: 'CONTROVERSY',
        sentence: 'The proposal to replace written exams with AI oral assessments proved highly _____.',
        answers: ['controversial'],
        explain: 'Sau động từ nối "proved" + trạng từ "highly" cần tính từ → CONTROVERSIAL (gây tranh cãi).'
      },
      {
        id: 'wf-6',
        root: 'SIGNIFY',
        sentence: 'At first glance the error seemed _____, yet repeating it undermined the clarity of the report.',
        answers: ['insignificant'],
        explain: 'Ngữ cảnh tương phản với "yet" → tính từ phủ định INSIGNIFICANT (không đáng kể).'
      },
      {
        id: 'wf-7',
        root: 'COMPARE',
        sentence: 'Practicing with real human studio audio provides _____ clarity compared to robotic synthesizers.',
        answers: ['incomparable'],
        explain: 'Cần tính từ C1 mang nghĩa "vượt trội không gì sánh bằng" → INCOMPARABLE.'
      },
      {
        id: 'wf-8',
        root: 'CONSEQUENCE',
        sentence: 'She skipped weekly error reviews; _____, the same collocation mistakes kept reappearing.',
        answers: ['consequently'],
        explain: 'Đứng sau dấu chấm phẩy và trước dấu phẩy để chỉ kết quả → trạng từ CONSEQUENTLY.'
      }
    ],
    keyWordTransformations: [
      {
        id: 'kwt-1',
        original: 'He only realized the importance of collocations after taking the diagnostic test.',
        keyWord: 'UNTIL',
        prefix: 'Not ',
        suffix: ' realize the importance of collocations.',
        answers: ['until he took the diagnostic test did he', 'until he had taken the diagnostic test did he'],
        explain: 'Đảo ngữ với "Not until": Not until + [mệnh đề phụ] + did + S + V(nguyên mẫu).'
      },
      {
        id: 'kwt-2',
        original: 'I didn\'t practice speaking regularly last year, so I feel nervous in meetings today.',
        keyWord: 'HAD',
        prefix: '',
        suffix: ' regularly last year, I wouldn\'t feel nervous in meetings today.',
        answers: ['had i practiced speaking', 'had i practised speaking'],
        explain: 'Đảo ngữ Câu điều kiện hỗn hợp bỏ "If": Had I practiced speaking...'
      },
      {
        id: 'kwt-3',
        original: 'The committee insists that every applicant must submit an original portfolio.',
        keyWord: 'IMPERATIVE',
        prefix: 'It ',
        suffix: ' an original portfolio.',
        answers: ['is imperative that every applicant submit'],
        explain: 'Thức giả định (Subjunctive): It is imperative that + S + V(nguyên mẫu: submit).'
      },
      {
        id: 'kwt-4',
        original: 'People widely believe that the ancient harbor collapsed after a severe earthquake.',
        keyWord: 'BELIEVED',
        prefix: 'The ancient harbor ',
        suffix: ' after a severe earthquake.',
        answers: ['is widely believed to have collapsed', 'is believed to have collapsed'],
        explain: 'Bị động khách quan về sự việc trong quá khứ: is (widely) believed to have + V3.'
      },
      {
        id: 'kwt-5',
        original: 'You really ought to stop putting off your evening writing practice.',
        keyWord: 'HIGH',
        prefix: 'It ',
        suffix: ' putting off your evening writing practice.',
        answers: ['is high time you stopped', '\'s high time you stopped'],
        explain: 'Unreal Past: It is high time + S + V2 (stopped).'
      },
      {
        id: 'kwt-6',
        original: 'The mentor\'s constructive feedback immediately boosted the whole team\'s morale.',
        keyWord: 'WAS',
        prefix: 'It ',
        suffix: ' immediately boosted the whole team\'s morale.',
        answers: ['was the mentor\'s constructive feedback that'],
        explain: 'Câu chẻ nhấn mạnh (It-cleft): It was [thành phần nhấn] + that + V.'
      }
    ]
  },

  standardResources: [
    { level: 'A0–A2', title: 'British Council LearnEnglish — A1–A2 Grammar (Miễn phí)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2', note: 'Chuẩn quy trình Test → Teach → Test' },
    { level: 'B1–B2', title: 'British Council LearnEnglish — B1–B2 Grammar (Miễn phí)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2', note: 'Song hành với English Grammar in Use (Murphy)' },
    { level: 'C1', title: 'British Council LearnEnglish — C1 Grammar (Miễn phí)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1', note: 'Inversion, Cleft Sentences & Advanced Nuance' },
    { level: 'A0–C1', title: 'British Council — English Grammar Reference', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference', note: 'Tra cứu chuẩn 7 nhóm từ loại học thuật' }
  ]
};

