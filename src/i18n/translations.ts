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
    exploreMore: string
  }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    supporting: string
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
    detailCaption: string
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
    items: { value: string; label: string }[]
  }
  projects: {
    eyebrow: string
    heading: string
    viewAll: string
    filters: { all: string; cafes: string; retail: string; residential: string }
    items: { name: string; category: string }[]
  }
  services: {
    eyebrow: string
    heading: string
    supporting: string
    items: { title: string; description: string }[]
  }
  process: {
    eyebrow: string
    heading: string
    cta: string
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
      exploreMore: 'استكشف المزيد',
    },
    hero: {
      eyebrow: 'INTERIOR DESIGN & FIT-OUT',
      headlineLine1: 'نصمم تجربة المكان',
      headlineLine2: 'وننفذها حتى التسليم',
      supporting: 'للمقاهي والمطاعم والمتاجر والمساحات التجارية',
      slideCounter: '01 / 03',
      preview: {
        name: 'قهوة إيرا',
        caption: 'من أعمالنا',
      },
      infoBar: {
        location: {
          title: 'الرياض، المملكة العربية السعودية',
          subtitle: 'مقرنا',
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
      eyebrow: 'عن أوشن ستوديو',
      headingLine1: 'من الفكرة',
      headingLine2: 'حتى تسليم المفتاح',
      body: 'أوشن ستوديو شركة سعودية متخصصة في التصميم الداخلي والتنفيذ للمقاهي والمطاعم والمساحات التجارية. نحوّل الأفكار إلى مساحات تجمع بين الجمال والوظيفة، من التصور الإبداعي حتى التسليم.',
      cta: 'اكتشف قصتنا',
      detailCaption: 'تفاصيل تصنع التجربة',
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
        { value: '+250', label: 'مشروع منفذ' },
        { value: '+100', label: 'عميل وثق بنا' },
        { value: '6', label: 'خدمات متكاملة' },
        { value: '+7', label: 'سنوات خبرة' },
      ],
    },
    projects: {
      eyebrow: 'OUR PROJECTS',
      heading: 'مشاريعنا',
      viewAll: 'عرض جميع المشاريع',
      filters: {
        all: 'الكل',
        cafes: 'المقاهي والمطاعم',
        retail: 'المتاجر التجارية',
        residential: 'المساحات السكنية',
      },
      items: [
        { name: 'قهوة إيرا', category: 'مقاهي ومطاعم' },
        { name: 'قيراط', category: 'متاجر تجارية' },
        { name: 'بروز للتطوير العقاري', category: 'مساحات سكنية' },
      ],
    },
    services: {
      eyebrow: 'OUR SERVICES',
      heading: 'خدماتنا',
      supporting: 'حلول متكاملة للمكان',
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
      eyebrow: 'OUR PROCESS',
      heading: 'من الفكرة إلى التسليم',
      cta: 'تعرف على منهجية العمل',
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
      exploreMore: 'Explore More',
    },
    hero: {
      eyebrow: 'INTERIOR DESIGN & FIT-OUT',
      headlineLine1: 'We design the experience',
      headlineLine2: 'and build it to completion',
      supporting: 'For cafés, restaurants, retail & commercial spaces',
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
      eyebrow: 'ABOUT OSHAN STUDIO',
      headingLine1: 'From the Idea',
      headingLine2: 'to Key Handover',
      body: 'OSHAN STUDIO is a Saudi interior design and fit-out studio specializing in cafés, restaurants, and commercial spaces. We turn ideas into places that balance beauty and function, from the initial concept through delivery.',
      cta: 'Discover Our Story',
      detailCaption: 'Details That Shape The Experience',
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
        { value: '+250', label: 'Projects Delivered' },
        { value: '+100', label: 'Clients Who Trusted Us' },
        { value: '6', label: 'Integrated Services' },
        { value: '+7', label: 'Years of Experience' },
      ],
    },
    projects: {
      eyebrow: 'OUR PROJECTS',
      heading: 'Our Projects',
      viewAll: 'View All Projects',
      filters: {
        all: 'All',
        cafes: 'Cafés & Restaurants',
        retail: 'Commercial Retail',
        residential: 'Residential Spaces',
      },
      items: [
        { name: 'Era Coffee', category: 'Cafés & Restaurants' },
        { name: 'Qirat', category: 'Commercial Retail' },
        { name: 'Brooz Real Estate', category: 'Residential Spaces' },
      ],
    },
    services: {
      eyebrow: 'OUR SERVICES',
      heading: 'Our Services',
      supporting: 'Integrated solutions for every space',
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
      cta: 'Learn About Our Process',
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
    },
  },
}
