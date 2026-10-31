export type Language = 'ar' | 'en'

export interface TranslationShape {
  nav: {
    home: string
    about: string
    services: string
    work: string
    contact: string
  }
  cta: {
    startProject: string
    viewWork: string
  }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    supporting: string
    primaryCta: string
    secondaryCta: string
    slideCounter: string
    preview: {
      name: string
      caption: string
    }
    infoBar: {
      location: { title: string; subtitle: string }
      process: { title: string; subtitle: string }
      since: { title: string; subtitle: string }
    }
  }
  about: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    body: string
    cta: string
    signature: string
    info: {
      year: { value: string; label: string }
      scope: { value: string; label: string }
      location: { value: string; label: string }
    }
  }
  stats: {
    eyebrow: string
    heading: string
    supporting: string
    cta: string
    items: { value: string; label: string; description: string }[]
  }
  projects: {
    eyebrow: string
    headingAccent: string
    headingRest: string
    supporting: string
    viewAll: string
    viewProject: string
    cardCta: string
    items: { name: string; category: string; location: string }[]
  }
  services: {
    eyebrow: string
    heading: string
    description: string
    items: { title: string; description: string }[]
  }
  process: {
    eyebrow: string
    heading: string
    supporting: string
    stepLabel: string
    stages: { title: string; description: string }[]
  }
  ctaBanner: {
    heading: string
    supporting: string
    primary: string
    secondary: string
  }
  footer: {
    description: string
    quickLinks: string
    servicesTitle: string
    contactTitle: string
    rights: string
    terms: string
    privacy: string
    backToTop: string
  }
}

export const translations: Record<Language, TranslationShape> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      work: 'أعمالنا',
      contact: 'تواصل معنا',
    },
    cta: {
      startProject: 'ابدأ مشروعك',
      viewWork: 'مشاهدة أعمالنا',
    },
    hero: {
      eyebrow: 'فن التصميم • دقة التنفيذ',
      headlineLine1: 'نصنع مساحات',
      headlineLine2: 'تترك انطباعًا لا يُنسى',
      supporting:
        'من الفكرة الأولى إلى تسليم المفتاح، نصمّم وننفّذ مساحات تجارية وضيافية تجمع بين جمال التفاصيل، وكفاءة التشغيل، وهوية تعكس طموح علامتك.',
      primaryCta: 'ابدأ مشروعك معنا',
      secondaryCta: 'اكتشف أعمالنا',
      slideCounter: '01 / 03',
      preview: {
        name: 'قهوة إيرا',
        caption: 'من أعمالنا',
      },
      infoBar: {
        location: {
          title: 'الرياض، المملكة العربية السعودية',
          subtitle: 'مقرنا الرئيسي',
        },
        process: {
          title: 'تصميم وتنفيذ متكامل',
          subtitle: 'من الفكرة إلى التسليم',
        },
        since: {
          title: 'منذ 2019',
          subtitle: 'خبرة في تصميم وتنفيذ المساحات',
        },
      },
    },
    about: {
      eyebrow: 'من نحن',
      headingLine1: 'من الفكرة',
      headingLine2: 'إلى مساحة تنبض بالحياة',
      body: 'في أوشن ستوديو، نؤمن أن نجاح المكان يبدأ بما هو أبعد من جمال التصميم. منذ عام 2019، نحول رؤى أصحاب المشاريع إلى مساحات متكاملة تجمع بين الهوية المميزة، والتفاصيل المدروسة، وكفاءة التشغيل، من خلال منظومة متكاملة من التصميم الداخلي والتنفيذ حتى تسليم المفتاح.',
      cta: 'اكتشف قصتنا',
      signature: '«لكل مساحة حكاية، ولكل تفصيل أثر.»',
      info: {
        year: { value: '2019', label: 'سنة الانطلاقة' },
        scope: { value: 'تصميم وتنفيذ', label: 'نطاق متكامل' },
        location: { value: 'الرياض', label: 'المقر الرئيسي' },
      },
    },
    stats: {
      eyebrow: 'IN NUMBERS',
      heading: 'أرقام تعكس رحلتنا',
      supporting: 'كل رقم يمثل قصة نجاح، وشراكة مبنية على الثقة، ورحلة من الإبداع حتى التنفيذ.',
      cta: 'اكتشف المزيد',
      items: [
        { value: '+7', label: 'سنوات خبرة', description: 'في تصميم وتنفيذ المساحات' },
        { value: '+7', label: 'علامات تجارية', description: 'وثقت بنا في مشاريعها' },
        { value: '6', label: 'خدمات متكاملة', description: 'تحت سقف واحد' },
        { value: '3', label: 'قطاعات', description: 'ضيافة · تجزئة · سكني' },
      ],
    },
    projects: {
      eyebrow: 'OUR PROJECTS',
      headingAccent: 'مشاريعنا',
      headingRest: 'تعكس رؤيتنا',
      supporting:
        'كل مشروع نعمل عليه هو قصة جديدة من الإبداع، تجمع فيها بين التصميم المبتكر والتنفيذ المتقن لنقدم مساحات استثنائية تعكس هوية عملائنا.',
      viewAll: 'عرض جميع المشاريع',
      viewProject: 'عرض المشروع',
      cardCta: 'عرض المشروع',
      items: [
        { name: 'ERA Coffee', category: 'مقهى مختص', location: 'الرياض' },
        { name: 'Qirat', category: 'العطور', location: 'الرياض' },
        { name: 'Brwaz Real Estate', category: 'التطوير العقاري', location: 'الرياض' },
      ],
    },
    services: {
      eyebrow: 'خدماتنا',
      heading: 'حلول متكاملة للمكان',
      description:
        'نقدم مجموعة متكاملة من الخدمات التي تغطي جميع مراحل المشروع، من الفكرة وحتى التسليم، لنحوّل رؤيتك إلى مساحات استثنائية تعكس هويتك.',
      items: [
        {
          title: 'التصميم الداخلي',
          description: 'تصاميم تعكس هوية العلامة وتخدم تجربة الزائر من أول لحظة.',
        },
        {
          title: 'التصور ثلاثي الأبعاد',
          description: 'نماذج مرئية تقارب الواقع لمعاينة المساحة قبل التنفيذ.',
        },
        {
          title: 'المخططات التنفيذية',
          description: 'مخططات دقيقة تفصيلية تضمن تنفيذاً بلا مفاجآت.',
        },
        {
          title: 'التنفيذ والتشطيبات',
          description: 'تنفيذ ميداني دقيق للأعمال والتشطيبات وفق أعلى معايير الجودة.',
        },
        {
          title: 'الأثاث والعناصر الخاصة',
          description: 'تصميم وتوريد عناصر مخصصة تضيف طابعاً مميزاً للمكان.',
        },
        {
          title: 'إدارة المشروع والإشراف',
          description: 'إشراف ومتابعة مستمرة من الفكرة وحتى تسليم المشروع.',
        },
      ],
    },
    process: {
      eyebrow: 'منهجية العمل',
      heading: 'من الفكرة إلى التسليم',
      supporting: 'خمس مراحل واضحة تقود مشروعك بثقة، من أول جلسة حتى تسليم المفتاح.',
      stepLabel: 'المرحلة',
      stages: [
        { title: 'فهم المشروع', description: 'جلسة استكشاف لتحليل احتياجاتك وأهداف المساحة.' },
        { title: 'التصميم والتصور', description: 'مفاهيم وتصاميم أولية تترجم الفكرة بصرياً.' },
        { title: 'التطوير التنفيذي', description: 'مخططات تنفيذية واضحة تجهّز المشروع للتنفيذ.' },
        { title: 'التنفيذ والإشراف', description: 'تنفيذ الأعمال ومتابعة الجودة ميدانياً أولاً بأول.' },
        { title: 'التسليم', description: 'مساحة جاهزة للتشغيل بعد مراجعة نهائية شاملة.' },
      ],
    },
    ctaBanner: {
      heading: 'لنبدأ مشروعك القادم',
      supporting: 'شاركنا فكرتك، ولنتحدث عن المساحة والهوية وما تحتاجه للانطلاق.',
      primary: 'ابدأ مشروعك',
      secondary: 'تواصل معنا',
    },
    footer: {
      description: 'استوديو تصميم داخلي وتنفيذ متكامل للمقاهي والمطاعم والمساحات التجارية في الرياض.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      contactTitle: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة',
      terms: 'الشروط والأحكام',
      privacy: 'سياسة الخصوصية',
      backToTop: 'العودة إلى الأعلى',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      work: 'Work',
      contact: 'Contact',
    },
    cta: {
      startProject: 'Start Your Project',
      viewWork: 'View Our Work',
    },
    hero: {
      eyebrow: 'The Art of Design • The Precision of Execution',
      headlineLine1: 'We create spaces',
      headlineLine2: 'that leave a lasting impression',
      supporting:
        'From the first idea to key handover, we design and build commercial and hospitality spaces that unite beautiful detail, operational efficiency, and an identity that reflects your brand’s ambition.',
      primaryCta: 'Start Your Project With Us',
      secondaryCta: 'Explore Our Work',
      slideCounter: '01 / 03',
      preview: {
        name: 'Era Coffee',
        caption: 'Featured Project',
      },
      infoBar: {
        location: {
          title: 'Riyadh, Saudi Arabia',
          subtitle: 'Based In',
        },
        process: {
          title: 'End-to-End Delivery',
          subtitle: 'From Concept to Handover',
        },
        since: {
          title: 'Since 2019',
          subtitle: 'Experience in Design & Fit-Out',
        },
      },
    },
    about: {
      eyebrow: 'ABOUT US',
      headingLine1: 'From an Idea',
      headingLine2: 'to a Space That Comes Alive',
      body: 'At OSHAN STUDIO, we believe a space succeeds on more than beautiful design. Since 2019, we have turned business owners’ visions into complete spaces that bring together a distinct identity, considered detail, and operational efficiency, through an integrated system of interior design and fit-out, all the way to key handover.',
      cta: 'Discover Our Story',
      signature: '“Every space has a story, and every detail leaves its mark.”',
      info: {
        year: { value: '2019', label: 'Founded' },
        scope: { value: 'Design & Fit-Out', label: 'Integrated Scope' },
        location: { value: 'Riyadh', label: 'Head Office' },
      },
    },
    stats: {
      eyebrow: 'IN NUMBERS',
      heading: 'Numbers that reflect our journey',
      supporting: 'Every number represents a success story, a partnership built on trust, and a journey from concept to execution.',
      cta: 'Discover More',
      items: [
        { value: '+7', label: 'Years of Experience', description: 'Designing and building spaces' },
        { value: '+7', label: 'Brands', description: 'Trusted us with their projects' },
        { value: '6', label: 'Integrated Services', description: 'All under one roof' },
        { value: '3', label: 'Sectors', description: 'Hospitality · Retail · Residential' },
      ],
    },
    projects: {
      eyebrow: 'OUR PROJECTS',
      headingAccent: 'Our Projects',
      headingRest: 'Reflect Our Vision',
      supporting:
        'Every project we take on is a new story of creativity, combining innovative design with meticulous execution to deliver exceptional spaces that reflect our clients’ identity.',
      viewAll: 'View All Projects',
      viewProject: 'View project',
      cardCta: 'View Project',
      items: [
        { name: 'ERA Coffee', category: 'Specialty Coffee', location: 'Riyadh' },
        { name: 'Qirat', category: 'Perfumes', location: 'Riyadh' },
        { name: 'Brwaz Real Estate', category: 'Real Estate Development', location: 'Riyadh' },
      ],
    },
    services: {
      eyebrow: 'OUR SERVICES',
      heading: 'Integrated solutions for every space',
      description:
        'We offer an integrated range of services covering every stage of the project, from concept to handover, turning your vision into exceptional spaces that reflect your identity.',
      items: [
        {
          title: 'Interior Design',
          description: 'Designs that reflect brand identity and shape the visitor experience from the first moment.',
        },
        {
          title: '3D Visualization',
          description: 'Near-photorealistic renders so you can preview the space before it is built.',
        },
        {
          title: 'Technical Drawings',
          description: 'Precise, detailed drawings that ensure execution without surprises.',
        },
        {
          title: 'Fit-Out & Finishing',
          description: 'Careful on-site execution and finishing to the highest quality standards.',
        },
        {
          title: 'Custom Furniture & Elements',
          description: 'Bespoke pieces designed and sourced to give each space its own character.',
        },
        {
          title: 'Project Management',
          description: 'Continuous supervision and follow-through from concept to handover.',
        },
      ],
    },
    process: {
      eyebrow: 'OUR PROCESS',
      heading: 'From Concept to Handover',
      supporting: 'Five clear stages that carry your project with confidence, from the first session to key handover.',
      stepLabel: 'STEP',
      stages: [
        { title: 'Understanding the Project', description: 'A discovery session to analyze your needs and the space’s goals.' },
        { title: 'Design & Concept', description: 'Early concepts and designs that translate the idea visually.' },
        { title: 'Technical Development', description: 'Clear technical drawings that prepare the project for execution.' },
        { title: 'Execution & Supervision', description: 'On-site execution with continuous quality follow-up.' },
        { title: 'Handover', description: 'A ready-to-operate space after a thorough final review.' },
      ],
    },
    ctaBanner: {
      heading: "Let's Start Your Next Project",
      supporting: 'Share your idea with us, and let’s talk about the space, the identity, and what you need to get started.',
      primary: 'Start Your Project',
      secondary: 'Contact Us',
    },
    footer: {
      description: 'An interior design and end-to-end fit-out studio for cafés, restaurants, and commercial spaces in Riyadh.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Services',
      contactTitle: 'Contact Us',
      rights: 'All Rights Reserved',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      backToTop: 'Back to top',
    },
  },
}
