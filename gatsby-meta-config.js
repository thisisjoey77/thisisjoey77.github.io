module.exports = {
  title: `zoomkoding.com`,
  description: `줌코딩의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정진혁`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'ProfilePic.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        category: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.08',
        activity: 'Enrolled to Korea International School Jeju (KISJ) MS',
        category: 'Education',
        links: {},
      },
      {
        date: '2021.07.18',
        activity: 'YBM COS Pro Python 2급 시험 합격',
        category: 'Certification',
        links: {},
      },
      {
        date: '2021.11.13',
        activity: '상명대학교 AR/VR 컨탠츠 아이디어 공모전 작품 입선',
        category: 'Competition',
        links: {},
      },
      {
        date: '2021.02.04',
        activity: 'USACO Bronze (978/1000)',
        category: 'Informatics',
        links: {},
      },
      {
        date: '2022.08',
        activity: 'Enrolled to KISJ HS',
        category: 'Education',
        links: {},
      },
      {
        date: '2023.08',
        activity: 'Joined EaSy Computing Club (ESC), KISJ',
        category: 'Club',
        links: {},
      },
      {
        date: '2024.05',
        activity: 'American Computer Science league (ACSL) | Intermediate Finalist',
        category: 'Informatics',
        links: {},
      },
      {
        date: '2025.01.22',
        activity: 'Korea Science Engineering Fair (KSEF) | Silver Prize',
        category: 'Competition',
        links: {},
      },
      {
        date: '2024.12-2025.05',
        activity: 'ACSL Student Coordinator/Advisor for KISJ',
        category: 'Leadership',
        links: {},
      },
      {
        date: '2025.05',
        activity: 'ACSL | Senior Finalist',
        category: 'Informatics',
        links: {},
      },
      {
        date: '2025.06.11',
        activity: 'Published Research Paper on Quantum Error Correction (QEC) and Quantum Computing',
        category: 'Quantum Computing',
        links: {},
      },
      {
        date: '2025.07.02',
        activity: 'International Greenwich Olympiad (IGO) | Bronze Prize *Online Participation',
        category: 'Competition',
        links: {},
      },
      {
        date: '2025.06',
        activity: 'Joined The Coala as Researcher / Intern',
        category: 'Experience',
        links: {},
      },
      {
        date: '2025.07.18',
        activity: 'Collaborative project with Neulbom School of Seoul, South Korea',
        category: 'Project',
        links: {},
      },
      {
        date: '2025.07',
        activity: 'Co-authored Textbook for Primary School students on Algorithmic CS',
        category: 'Publication',
        links: {},
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
