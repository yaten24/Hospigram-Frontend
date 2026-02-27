import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    /* ================= ENGLISH ================= */
    en: {
      translation: {
        /* ================= TOP INFO BAR ================= */
        trusted: "Trusted Hospitals & Diagnostic Services",
        support24: "24×7 Healthcare Support",
        forPartners: "For Hospitals & Labs",
        partnerWithUs: "Partner With Us",

        /* ================= BRAND ================= */
        brandName: "Hospigram",
        tagline: "Smart Healthcare. Easy Bookings.",

        /* ================= NAVBAR ================= */
        home: "Home",
        hospitals: "Hospitals",
        labs: "Blood Test / Labs",
        ultrasound: "Ultrasound",
        xray: "X-Ray",
        howItWorks: "How It Works",
        support: "Support",
        contact: "Contact",
        partnerLogin: "Partner Login",

        /* ================= HERO (OLD KEYS – KEEP) ================= */
        heroBadge: "India’s Smart Healthcare Platform",
        heroTitle1: "Healthcare Access Made",
        heroTitle2: "Simple, Fast & Reliable",
        heroDesc:
          "Find verified hospitals, labs, ultrasound and X-Ray centers near you. Book appointments instantly or get admin-assisted support.",
        bookNow: "Book Appointment",
        becomePartner: "Become a Partner",

        /* ================= HERO (NEW STRUCTURE) ================= */
        hero: {
          tagline: "India’s Smart Healthcare Booking Platform",
          headingPart1: "Healthcare Access Made",
          highlight: "Simple",
          headingPart2: "Fast & Reliable",
          subtext:
            "Hospigram connects you with verified hospitals, diagnostic labs, ultrasound and X-ray centers near you — with instant booking and admin-assisted healthcare support.",
          bookAppointment: "BOOK APPOINTMENT",
          becomePartner: "BECOME A PARTNER",
          trust: {
            hospitals: "Verified Hospitals & Centers",
            labs: "Certified Diagnostic Labs",
            secure: "Secure & Transparent Booking",
            support: "Admin Assisted Support",
          },
        },

        /* ================= CATEGORY CARDS ================= */
        chooseService: "Choose Healthcare Services",
        hospitalsDesc: "Trusted Multi-Speciality Hospitals",
        labsDesc: "Certified Diagnostic & Pathology Labs",
        ultrasoundDesc: "Advanced Imaging & Sonography",
        xrayDesc: "Digital & Emergency X-Ray Services",
        bookNowCaps: "BOOK NOW",

        /* ================= SEARCH ================= */
        searchPlaceholder: "Search hospital, lab, test or city",
        searchHospital: "Search Hospitals",
        searchLab: "Search Labs",
        selectCity: "Select City",
        detectLocation: "Detect My Location",

        /* ================= BOOKING FLOW ================= */
        selectDate: "Select Date",
        selectTime: "Select Time Slot",
        confirmBooking: "Confirm Booking",
        bookingSuccess: "Booking Confirmed",
        bookingPending: "Booking Pending Confirmation",
        bookingFailed: "Booking Failed",
        myBookings: "My Bookings",

        /* ================= CENTER LIST ================= */
        address: "Address",
        timings: "Timings",
        callAdmin: "Call Support",
        viewDetails: "View Details",

        /* ================= USER ================= */
        login: "Login",
        signup: "Sign Up",
        logout: "Logout",
        profile: "Profile",
        userId: "User ID",

        /* ================= PARTNER ================= */
        partnerTitle: "Partner with Hospigram",
        partnerSubtitle: "Grow your hospital or diagnostic center with us",
        partnerForm: "Partner Registration",
        hospitalName: "Hospital / Lab Name",
        ownerName: "Owner Name",
        submit: "Submit",
        approvalPending: "Approval Pending",

        /* ================= ADMIN ================= */
        adminDashboard: "Admin Dashboard",
        manageBookings: "Manage Bookings",
        managePartners: "Manage Partners",
        manageUsers: "Manage Users",

        /* ================= SUPPORT ================= */
        helpCenter: "Help Center",
        customerCare: "Customer Care",
        faq: "FAQs",
        raiseTicket: "Raise a Ticket",

        /* ================= FOOTER ================= */
        aboutUs: "About Us",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        refundPolicy: "Refund Policy",
        copyright: "© Hospigram. All rights reserved.",

        /* ================= STATUS / ERRORS ================= */
        loading: "Loading...",
        noData: "No data available",
        somethingWrong: "Something went wrong",
        tryAgain: "Please try again",
        requiredField: "This field is required",
        categoryIntro:
          "Select a service to find verified healthcare centers and book appointments instantly.",
        popularTestsTitle: "Popular Diagnostic Tests",
        popularTestsDesc:
          "Commonly recommended diagnostic tests for early detection, routine health monitoring, and preventive care.",
        verifiedLabsAvailable: "Verified Labs Available",
        how: {
          title: "How Hospigram Works",
          subtitle:
            "Booking healthcare services with Hospigram is simple, fast, and secure. Just follow these four easy steps.",
          step1: {
            title: "Search Service",
            desc: "Search for hospitals, labs, diagnostic tests, ultrasound or X-Ray services near you.",
          },
          step2: {
            title: "Choose Hospital / Lab",
            desc: "Compare verified hospitals and diagnostic labs based on services and location.",
          },
          step3: {
            title: "Select Date & Time",
            desc: "Pick a convenient appointment date and time as per availability.",
          },
          step4: {
            title: "Confirm Booking",
            desc: "Confirm your appointment and get instant booking confirmation.",
          },
        },
        why: {
          badge: "Our Strength",
          title: "Why Choose Hospigram",
          subtitle:
            "Built on trust, transparency, and technology to simplify healthcare access for patients across India.",
          reason1: {
            title: "Verified Hospitals & Labs",
            desc: "All hospitals and diagnostic labs on Hospigram are carefully verified for quality and reliability.",
          },
          reason2: {
            title: "Transparent Pricing",
            desc: "Clear and upfront information with no hidden charges across healthcare services.",
          },
          reason3: {
            title: "Easy Online Booking",
            desc: "Simple, fast, and user-friendly appointment booking experience for everyone.",
          },
          reason4: {
            title: "Trusted Healthcare Partners",
            desc: "We partner with reputed hospitals, labs, and healthcare providers across India.",
          },
          reason5: {
            title: "Fast & Reliable Support",
            desc: "Dedicated support team to assist you at every step of your healthcare journey.",
          },
        },
        footer: {
          about:
            "Hospigram is a smart healthcare booking platform connecting patients with verified hospitals, diagnostic labs, and imaging centers across India.",
          email: "support@hospigram.com",
          country: "India",
          rights: "All rights reserved.",
          disclaimer: "Medical Disclaimer",

          trust: {
            hospitals: {
              title: "Verified Hospitals",
              desc: "Trusted & verified hospitals across India",
            },
            labs: {
              title: "Certified Labs",
              desc: "NABL approved diagnostic laboratories",
            },
            secure: {
              title: "Secure Bookings",
              desc: "Data privacy & secure transactions",
            },
            support: {
              title: "24×7 Support",
              desc: "Always available healthcare assistance",
            },
          },

          services: {
            title: "Healthcare Services",
            checkups: "Health Checkups",
          },

          patients: {
            title: "For Patients",
          },

          partners: {
            title: "For Partners",
            hospitalLogin: "Hospital Login",
            labLogin: "Lab Login",
          },
        },
        emergency: {
          title: "Need Immediate Assistance?",
          desc: "Our emergency support team is ready to help you connect with nearby hospitals and urgent healthcare services.",
          callNow: "Call Now",
        },
        hospitalsPage: {
          badge: "VERIFIED HOSPITAL NETWORK",
          title: "Find Trusted Hospitals Across India",
          subtitle:
            "Verified multi-speciality and government hospitals offering reliable and advanced healthcare services.",
        },
        cities: "Cities",
        verified: "Verified",
        ultrasoundPage: {
          badge: "VERIFIED ULTRASOUND & IMAGING CENTERS",
          title: "Ultrasound & Imaging Services You Can Trust",
          subtitle:
            "Book ultrasound scans at verified hospitals and diagnostic imaging centers with experienced radiologists and modern ultrasound equipment.",
          searchPlaceholder: "Search ultrasound center or scan type...",
          book: "Book Ultrasound",
        },
        ultrasoundCenters: "Ultrasound Centers",
        citiesCovered: "Cities Covered",
        sameDay: "Same Day",
        reports: "Reports",
        verified: "Verified",
        xrayPage: {
          badge: "VERIFIED X-RAY & RADIOLOGY CENTERS",
          title: "Digital X-Ray & Radiology Services Near You",
          subtitle:
            "Get fast, accurate, and safe X-ray imaging at verified hospitals and diagnostic centers with modern digital radiology equipment.",
          searchPlaceholder: "Search X-ray center or scan type...",
          book: "Book X-Ray",
        },
        xrayCenters: "X-Ray Centers",
        citiesCovered: "Cities Covered",
        quick: "Quick",
        reportDelivery: "Report Delivery",
        verified: "Verified",
        howPage: {
          badge: "SIMPLE • FAST • TRUSTED",
          title: "How Hospigram Works",
          subtitle:
            "Hospigram makes healthcare access simple. Book hospitals, labs, ultrasound, and X-ray services in just a few easy steps.",

          trustTitle: "Why Patients Trust Hospigram",
          trustSubtitle:
            "We focus on trust, transparency, and patient-first healthcare.",

          trust1: {
            title: "Verified Healthcare Partners",
            desc: "All hospitals and labs are carefully verified for quality and reliability.",
          },
          trust2: {
            title: "Transparent Process",
            desc: "No hidden steps. Clear booking flow with trusted medical partners.",
          },
          trust3: {
            title: "Fast Support",
            desc: "Our support team is always ready to assist you with bookings and queries.",
          },

          ctaTitle: "Ready to Book Your Healthcare Service?",
          ctaSubtitle:
            "Find trusted hospitals, labs, ultrasound, and X-ray services near you and book instantly with Hospigram.",
          ctaDoctor: "Book Doctor Appointment",
          ctaLab: "Book Lab Test",
        },
        supportPage: {
          badge: "WE ARE HERE TO HELP",
          title: "Hospigram Support",
          subtitle:
            "Need help with bookings, appointments, lab tests, or reports? Our support team is always available to assist you.",

          call: {
            title: "Call Support",
            desc: "Speak directly with our support team for quick assistance.",
          },
          email: {
            title: "Email Us",
            desc: "Write to us for detailed queries or document support.",
          },
          live: {
            title: "Live Assistance",
            desc: "Get real-time help for bookings and service-related issues.",
            value: "Available 24×7",
          },

          faq: {
            title: "Frequently Asked Questions",
            subtitle:
              "Quick answers to common questions about Hospigram services.",
            q1: {
              q: "How can I book a hospital appointment?",
              a: "You can book appointments by selecting a hospital, choosing a date and time, and confirming your booking through Hospigram.",
            },
            q2: {
              q: "Are all hospitals and labs verified?",
              a: "Yes, all healthcare partners on Hospigram are verified for quality, safety, and reliability.",
            },
            q3: {
              q: "Can I book lab tests from home?",
              a: "Yes, many labs offer home sample collection services depending on your location.",
            },
            q4: {
              q: "What if I face issues with my booking?",
              a: "You can contact our support team via phone or email, and we’ll assist you immediately.",
            },
          },

          info: {
            hours: {
              title: "Support Hours",
              desc: "24×7 support available for emergency and bookings.",
            },
            coverage: {
              title: "Service Coverage",
              desc: "Available across major cities in India.",
            },
            help: {
              title: "Need More Help?",
              desc: "Reach out anytime. We’re happy to assist.",
            },
          },
        },

        appointment: {
          heroTitle: "Book Doctor Appointment",
          heroDesc:
            "Book verified doctors and hospitals instantly with Hospigram.",
          trustTitle: "Why Patients Trust Hospigram",
          trust1: "Verified hospitals and certified doctors",
          trust2: "Secure and private appointment booking",
          trust3: "Real-time slot availability",
          trust4: "Dedicated patient support",
          details: "Appointment Details",
          selectHospital: "Select Hospital",
          selectDoctor: "Select Doctor",
          date: "Appointment Date",
          time: "Appointment Time",
          selectTime: "Select Time Slot",
          patientName: "Patient Name",
          phone: "Mobile Number",
          confirm: "Confirm Appointment",
        },
        errors: {
          fillAll: "Please fill all required details",
        },
        success: {
          appointmentBooked: "Appointment booked successfully!",
        },

        profile: {
          tabs: { profile: "Profile", bookings: "Bookings" },
          basic: "Basic Info",
          contact: "Contact",
          health: "Health",
          account: "Account",
          name: "Name",
          gender: "Gender",
          age: "Age",
          blood: "Blood Group",
          mobile: "Mobile",
          email: "Email",
          city: "City",
          emergency: "Emergency",
          allergies: "Allergies",
          conditions: "Conditions",
          userId: "User ID",
          status: "Status",
          joined: "Joined On",
          upcoming: "Upcoming Bookings",
          previous: "Previous Bookings",
          noUpcoming: "No upcoming bookings",
          noPrevious: "No previous bookings",
        },
      },
    },

    /* ================= HINDI ================= */
    hi: {
      translation: {
        /* ================= TOP INFO BAR ================= */
        trusted: "विश्वसनीय अस्पताल और डायग्नोस्टिक सेवाएं",
        support24: "24×7 हेल्थकेयर सहायता",
        forPartners: "अस्पताल और लैब्स के लिए",
        partnerWithUs: "हमारे साथ पार्टनर बनें",

        /* ================= BRAND ================= */
        brandName: "हॉस्पिग्राम",
        tagline: "स्मार्ट हेल्थकेयर. आसान बुकिंग.",

        /* ================= NAVBAR ================= */
        home: "होम",
        hospitals: "अस्पताल",
        labs: "ब्लड टेस्ट / लैब्स",
        ultrasound: "अल्ट्रासाउंड",
        xray: "एक्स-रे",
        howItWorks: "यह कैसे काम करता है",
        support: "सहायता",
        contact: "संपर्क करें",
        partnerLogin: "पार्टनर लॉगिन",

        /* ================= HERO (OLD KEYS – KEEP) ================= */
        heroBadge: "भारत का स्मार्ट हेल्थकेयर प्लेटफॉर्म",
        heroTitle1: "हेल्थकेयर अब",
        heroTitle2: "आसान, तेज़ और भरोसेमंद",
        heroDesc:
          "अपने नजदीकी सत्यापित अस्पताल, लैब, अल्ट्रासाउंड और एक्स-रे सेंटर खोजें और तुरंत बुक करें।",
        bookNow: "अपॉइंटमेंट बुक करें",
        becomePartner: "पार्टनर बनें",

        /* ================= HERO (NEW STRUCTURE) ================= */
        hero: {
          tagline: "भारत का स्मार्ट हेल्थकेयर बुकिंग प्लेटफॉर्म",
          headingPart1: "स्वास्थ्य सेवाएं अब",
          highlight: "आसान",
          headingPart2: "तेज़ और भरोसेमंद",
          subtext:
            "Hospigram आपको नजदीकी सत्यापित अस्पतालों, डायग्नोस्टिक लैब, अल्ट्रासाउंड और एक्स-रे सेंटर से जोड़ता है — तुरंत बुकिंग और एडमिन सहायता के साथ।",
          bookAppointment: "अपॉइंटमेंट बुक करें",
          becomePartner: "पार्टनर बनें",
          trust: {
            hospitals: "सत्यापित अस्पताल और केंद्र",
            labs: "प्रमाणित डायग्नोस्टिक लैब",
            secure: "सुरक्षित और पारदर्शी बुकिंग",
            support: "एडमिन सहायता उपलब्ध",
          },
        },

        /* ================= CATEGORY CARDS ================= */
        chooseService: "हेल्थकेयर सेवाएं चुनें",
        hospitalsDesc: "विश्वसनीय मल्टी-स्पेशियलिटी अस्पताल",
        labsDesc: "प्रमाणित डायग्नोस्टिक और पैथोलॉजी लैब्स",
        ultrasoundDesc: "उन्नत इमेजिंग और सोनोग्राफी",
        xrayDesc: "डिजिटल और इमरजेंसी एक्स-रे सेवाएं",
        bookNowCaps: "बुक करें",

        /* ================= SEARCH ================= */
        searchPlaceholder: "अस्पताल, लैब, टेस्ट या शहर खोजें",
        searchHospital: "अस्पताल खोजें",
        searchLab: "लैब खोजें",
        selectCity: "शहर चुनें",
        detectLocation: "लोकेशन पहचानें",

        /* ================= BOOKING FLOW ================= */
        selectDate: "तारीख चुनें",
        selectTime: "समय चुनें",
        confirmBooking: "बुकिंग कन्फर्म करें",
        bookingSuccess: "बुकिंग सफल",
        bookingPending: "बुकिंग लंबित है",
        bookingFailed: "बुकिंग असफल",
        myBookings: "मेरी बुकिंग",

        /* ================= CENTER LIST ================= */
        address: "पता",
        timings: "समय",
        callAdmin: "सपोर्ट को कॉल करें",
        viewDetails: "विवरण देखें",

        /* ================= USER ================= */
        login: "लॉगिन",
        signup: "साइन अप",
        logout: "लॉगआउट",
        profile: "प्रोफाइल",
        userId: "यूज़र आईडी",

        /* ================= PARTNER ================= */
        partnerTitle: "हॉस्पिग्राम के साथ पार्टनर बनें",
        partnerSubtitle: "अपने अस्पताल या डायग्नोस्टिक सेंटर को बढ़ाएं",
        partnerForm: "पार्टनर रजिस्ट्रेशन",
        hospitalName: "अस्पताल / लैब का नाम",
        ownerName: "मालिक का नाम",
        submit: "सबमिट करें",
        approvalPending: "अनुमोदन लंबित",

        /* ================= ADMIN ================= */
        adminDashboard: "एडमिन डैशबोर्ड",
        manageBookings: "बुकिंग प्रबंधन",
        managePartners: "पार्टनर प्रबंधन",
        manageUsers: "यूज़र प्रबंधन",

        /* ================= SUPPORT ================= */
        helpCenter: "सहायता केंद्र",
        customerCare: "ग्राहक सेवा",
        faq: "सामान्य प्रश्न",
        raiseTicket: "शिकायत दर्ज करें",

        /* ================= FOOTER ================= */
        aboutUs: "हमारे बारे में",
        privacyPolicy: "गोपनीयता नीति",
        termsConditions: "नियम और शर्तें",
        refundPolicy: "रिफंड नीति",
        copyright: "© हॉस्पिग्राम. सर्वाधिकार सुरक्षित.",

        /* ================= STATUS / ERRORS ================= */
        loading: "लोड हो रहा है...",
        noData: "कोई डेटा उपलब्ध नहीं है",
        somethingWrong: "कुछ गलत हो गया",
        tryAgain: "कृपया पुनः प्रयास करें",
        requiredField: "यह फ़ील्ड आवश्यक है",
        categoryIntro:
          "सेवा चुनें और सत्यापित हेल्थकेयर सेंटर खोजकर तुरंत अपॉइंटमेंट बुक करें।",
        featuredHospitalsTitle: "भारत के शीर्ष और विश्वसनीय अस्पताल",
        featuredHospitalsDesc:
          "भारत भर के सत्यापित अस्पताल जो विश्व स्तरीय चिकित्सा सुविधाएं, विशेषज्ञ डॉक्टर और उन्नत हेल्थकेयर सेवाएं प्रदान करते हैं।",
        verified: "सत्यापित",
        popularTestsTitle: "लोकप्रिय डायग्नोस्टिक टेस्ट",
        popularTestsDesc:
          "शुरुआती पहचान, नियमित स्वास्थ्य निगरानी और रोकथाम के लिए सामान्य रूप से सुझाए गए डायग्नोस्टिक टेस्ट।",
        verifiedLabsAvailable: "सत्यापित लैब उपलब्ध हैं",
        how: {
          title: "Hospigram कैसे काम करता है",
          subtitle:
            "Hospigram के साथ हेल्थकेयर सेवाओं की बुकिंग आसान, तेज़ और सुरक्षित है। बस इन चार आसान चरणों का पालन करें।",
          step1: {
            title: "सेवा खोजें",
            desc: "अपने नजदीकी अस्पताल, लैब, डायग्नोस्टिक टेस्ट, अल्ट्रासाउंड या एक्स-रे सेवाएं खोजें।",
          },
          step2: {
            title: "अस्पताल / लैब चुनें",
            desc: "सेवाओं और लोकेशन के आधार पर सत्यापित अस्पताल और लैब की तुलना करें।",
          },
          step3: {
            title: "तारीख और समय चुनें",
            desc: "उपलब्धता के अनुसार सुविधाजनक तारीख और समय चुनें।",
          },
          step4: {
            title: "बुकिंग कन्फर्म करें",
            desc: "अपॉइंटमेंट कन्फर्म करें और तुरंत बुकिंग पुष्टि प्राप्त करें।",
          },
        },
        why: {
          badge: "हमारी ताकत",
          title: "Hospigram क्यों चुनें",
          subtitle:
            "विश्वास, पारदर्शिता और तकनीक पर आधारित प्लेटफॉर्म जो भारत भर में हेल्थकेयर को आसान बनाता है।",
          reason1: {
            title: "सत्यापित अस्पताल और लैब",
            desc: "Hospigram पर सभी अस्पताल और डायग्नोस्टिक लैब गुणवत्ता और विश्वसनीयता के लिए सत्यापित हैं।",
          },
          reason2: {
            title: "पारदर्शी मूल्य निर्धारण",
            desc: "बिना किसी छुपे शुल्क के स्पष्ट और भरोसेमंद जानकारी।",
          },
          reason3: {
            title: "आसान ऑनलाइन बुकिंग",
            desc: "सभी के लिए सरल, तेज़ और उपयोगकर्ता-अनुकूल बुकिंग अनुभव।",
          },
          reason4: {
            title: "विश्वसनीय हेल्थकेयर पार्टनर",
            desc: "भारत भर के प्रतिष्ठित अस्पतालों और लैब्स के साथ साझेदारी।",
          },
          reason5: {
            title: "तेज़ और भरोसेमंद सहायता",
            desc: "आपकी हेल्थकेयर यात्रा के हर चरण में सहायता के लिए समर्पित टीम।",
          },
        },
        footer: {
          about:
            "Hospigram एक स्मार्ट हेल्थकेयर बुकिंग प्लेटफॉर्म है जो मरीजों को सत्यापित अस्पतालों, डायग्नोस्टिक लैब्स और इमेजिंग सेंटर से जोड़ता है।",
          email: "support@hospigram.com",
          country: "भारत",
          rights: "सर्वाधिकार सुरक्षित।",
          disclaimer: "मेडिकल अस्वीकरण",

          trust: {
            hospitals: {
              title: "सत्यापित अस्पताल",
              desc: "भारत भर के विश्वसनीय और सत्यापित अस्पताल",
            },
            labs: {
              title: "प्रमाणित लैब",
              desc: "NABL स्वीकृत डायग्नोस्टिक लैब्स",
            },
            secure: {
              title: "सुरक्षित बुकिंग",
              desc: "डेटा गोपनीयता और सुरक्षित लेनदेन",
            },
            support: {
              title: "24×7 सहायता",
              desc: "हमेशा उपलब्ध हेल्थकेयर सहायता",
            },
          },

          services: {
            title: "हेल्थकेयर सेवाएं",
            checkups: "हेल्थ चेकअप",
          },

          patients: {
            title: "मरीजों के लिए",
          },

          partners: {
            title: "पार्टनर्स के लिए",
            hospitalLogin: "अस्पताल लॉगिन",
            labLogin: "लैब लॉगिन",
          },
        },

        emergency: {
          title: "तुरंत सहायता चाहिए?",
          desc: "हमारी इमरजेंसी सपोर्ट टीम आपको नजदीकी अस्पतालों और त्वरित हेल्थकेयर सेवाओं से जोड़ने के लिए तैयार है।",
          callNow: "अभी कॉल करें",
        },
        hospitalsPage: {
          badge: "सत्यापित अस्पताल नेटवर्क",
          title: "भारत भर में विश्वसनीय अस्पताल खोजें",
          subtitle:
            "सत्यापित मल्टी-स्पेशियलिटी और सरकारी अस्पताल जो उन्नत और भरोसेमंद हेल्थकेयर सेवाएं प्रदान करते हैं।",
        },
        cities: "शहर",
        verified: "सत्यापित",
        ultrasoundPage: {
          badge: "सत्यापित अल्ट्रासाउंड और इमेजिंग सेंटर",
          title: "भरोसेमंद अल्ट्रासाउंड और इमेजिंग सेवाएं",
          subtitle:
            "अनुभवी रेडियोलॉजिस्ट और आधुनिक अल्ट्रासाउंड मशीनों के साथ सत्यापित अस्पतालों और डायग्नोस्टिक सेंटर पर अल्ट्रासाउंड बुक करें।",
          searchPlaceholder: "अल्ट्रासाउंड सेंटर या स्कैन प्रकार खोजें...",
          book: "अल्ट्रासाउंड बुक करें",
        },
        ultrasoundCenters: "अल्ट्रासाउंड सेंटर",
        citiesCovered: "कवर किए गए शहर",
        sameDay: "उसी दिन",
        reports: "रिपोर्ट",
        verified: "सत्यापित",
        xrayPage: {
          badge: "सत्यापित एक्स-रे और रेडियोलॉजी सेंटर",
          title: "आपके नजदीक डिजिटल एक्स-रे और रेडियोलॉजी सेवाएं",
          subtitle:
            "आधुनिक डिजिटल रेडियोलॉजी उपकरणों के साथ सत्यापित अस्पतालों और डायग्नोस्टिक सेंटर पर तेज़, सटीक और सुरक्षित एक्स-रे कराएं।",
          searchPlaceholder: "एक्स-रे सेंटर या स्कैन प्रकार खोजें...",
          book: "एक्स-रे बुक करें",
        },
        xrayCenters: "एक्स-रे सेंटर",
        citiesCovered: "कवर किए गए शहर",
        quick: "तेज़",
        reportDelivery: "रिपोर्ट डिलीवरी",
        verified: "सत्यापित",
        howPage: {
          badge: "सरल • तेज़ • भरोसेमंद",
          title: "Hospigram कैसे काम करता है",
          subtitle:
            "Hospigram हेल्थकेयर को आसान बनाता है। अस्पताल, लैब, अल्ट्रासाउंड और एक्स-रे सेवाएं कुछ आसान चरणों में बुक करें।",

          trustTitle: "मरीज Hospigram पर क्यों भरोसा करते हैं",
          trustSubtitle:
            "हम विश्वास, पारदर्शिता और मरीज-प्रथम हेल्थकेयर पर ध्यान देते हैं।",

          trust1: {
            title: "सत्यापित हेल्थकेयर पार्टनर",
            desc: "सभी अस्पताल और लैब गुणवत्ता और विश्वसनीयता के लिए सत्यापित हैं।",
          },
          trust2: {
            title: "पारदर्शी प्रक्रिया",
            desc: "कोई छुपा हुआ चरण नहीं। विश्वसनीय मेडिकल पार्टनर्स के साथ स्पष्ट बुकिंग प्रक्रिया।",
          },
          trust3: {
            title: "तेज़ सहायता",
            desc: "हमारी सपोर्ट टीम बुकिंग और सवालों में हमेशा आपकी मदद के लिए तैयार है।",
          },

          ctaTitle: "अपनी हेल्थकेयर सेवा बुक करने के लिए तैयार हैं?",
          ctaSubtitle:
            "अपने नजदीक विश्वसनीय अस्पताल, लैब, अल्ट्रासाउंड और एक्स-रे सेवाएं खोजें और Hospigram के साथ तुरंत बुक करें।",
          ctaDoctor: "डॉक्टर अपॉइंटमेंट बुक करें",
          ctaLab: "लैब टेस्ट बुक करें",
        },
        supportPage: {
          badge: "हम आपकी सहायता के लिए हैं",
          title: "Hospigram सहायता",
          subtitle:
            "बुकिंग, अपॉइंटमेंट, लैब टेस्ट या रिपोर्ट में मदद चाहिए? हमारी सपोर्ट टीम हमेशा आपकी सहायता के लिए उपलब्ध है।",

          call: {
            title: "कॉल सपोर्ट",
            desc: "त्वरित सहायता के लिए सीधे हमारी सपोर्ट टीम से बात करें।",
          },
          email: {
            title: "ईमेल करें",
            desc: "विस्तृत प्रश्नों या दस्तावेज़ सहायता के लिए हमें लिखें।",
          },
          live: {
            title: "लाइव सहायता",
            desc: "बुकिंग और सेवाओं से संबंधित समस्याओं के लिए रियल-टाइम सहायता प्राप्त करें।",
            value: "24×7 उपलब्ध",
          },

          faq: {
            title: "अक्सर पूछे जाने वाले प्रश्न",
            subtitle:
              "Hospigram सेवाओं से जुड़े सामान्य सवालों के त्वरित उत्तर।",
            q1: {
              q: "मैं अस्पताल का अपॉइंटमेंट कैसे बुक कर सकता हूँ?",
              a: "आप अस्पताल चुनकर, तारीख और समय का चयन करके और बुकिंग कन्फर्म करके अपॉइंटमेंट बुक कर सकते हैं।",
            },
            q2: {
              q: "क्या सभी अस्पताल और लैब सत्यापित हैं?",
              a: "हाँ, Hospigram पर सभी हेल्थकेयर पार्टनर गुणवत्ता, सुरक्षा और विश्वसनीयता के लिए सत्यापित हैं।",
            },
            q3: {
              q: "क्या मैं घर से लैब टेस्ट बुक कर सकता हूँ?",
              a: "हाँ, कई लैब आपके स्थान के अनुसार होम सैंपल कलेक्शन सेवा प्रदान करती हैं।",
            },
            q4: {
              q: "अगर मेरी बुकिंग में कोई समस्या हो तो क्या करें?",
              a: "आप हमारी सपोर्ट टीम से फोन या ईमेल के माध्यम से संपर्क कर सकते हैं, हम तुरंत सहायता करेंगे।",
            },
          },

          info: {
            hours: {
              title: "सपोर्ट समय",
              desc: "इमरजेंसी और बुकिंग के लिए 24×7 सपोर्ट उपलब्ध।",
            },
            coverage: {
              title: "सेवा क्षेत्र",
              desc: "भारत के प्रमुख शहरों में उपलब्ध।",
            },
            help: {
              title: "और सहायता चाहिए?",
              desc: "कभी भी संपर्क करें, हमें आपकी मदद करके खुशी होगी।",
            },
          },
        },

        appointmentDate: "अपॉइंटमेंट की तारीख",
        availableTimeSlots: "उपलब्ध समय स्लॉट",
        confirmAppointment: "अपॉइंटमेंट की पुष्टि करें",
        confirmBooking: "बुकिंग कन्फर्म करें",
        date: "तारीख",
        time: "समय",
        demoHospital: {
          name: "सिटी केयर मल्टीस्पेशलिटी हॉस्पिटल",
          location: "नोएडा, सेक्टर 62",
          fee: "₹500 परामर्श शुल्क",
          description:
            "सिटी केयर मल्टीस्पेशलिटी हॉस्पिटल एक NABH मान्यता प्राप्त स्वास्थ्य केंद्र है, जो कार्डियोलॉजी, ऑर्थोपेडिक्स, डायग्नोस्टिक्स और इमरजेंसी सेवाओं सहित उन्नत चिकित्सा सुविधाएँ अनुभवी डॉक्टरों और आधुनिक इंफ्रास्ट्रक्चर के साथ प्रदान करता है।",
        },

        appointment: {
          heroTitle: "डॉक्टर अपॉइंटमेंट बुक करें",
          heroDesc:
            "Hospigram के साथ सत्यापित डॉक्टर और अस्पताल तुरंत बुक करें।",
          trustTitle: "मरीज Hospigram पर क्यों भरोसा करते हैं",
          trust1: "सिर्फ सत्यापित अस्पताल और प्रमाणित डॉक्टर",
          trust2: "सुरक्षित और निजी अपॉइंटमेंट बुकिंग",
          trust3: "रीयल-टाइम स्लॉट उपलब्धता",
          trust4: "समर्पित मरीज सहायता",
          details: "अपॉइंटमेंट विवरण",
          selectHospital: "अस्पताल चुनें",
          selectDoctor: "डॉक्टर चुनें",
          date: "अपॉइंटमेंट की तारीख",
          time: "अपॉइंटमेंट समय",
          selectTime: "समय स्लॉट चुनें",
          patientName: "मरीज का नाम",
          phone: "मोबाइल नंबर",
          confirm: "अपॉइंटमेंट कन्फर्म करें",
        },
        errors: {
          fillAll: "कृपया सभी आवश्यक जानकारी भरें",
        },
        success: {
          appointmentBooked: "अपॉइंटमेंट सफलतापूर्वक बुक हो गया है!",
        },

        profile: {
          tabs: { profile: "प्रोफाइल", bookings: "बुकिंग" },
          basic: "बुनियादी जानकारी",
          contact: "संपर्क विवरण",
          health: "स्वास्थ्य जानकारी",
          account: "खाता जानकारी",
          name: "नाम",
          gender: "लिंग",
          age: "आयु",
          blood: "ब्लड ग्रुप",
          mobile: "मोबाइल",
          email: "ईमेल",
          city: "शहर",
          emergency: "आपातकालीन संपर्क",
          allergies: "एलर्जी",
          conditions: "बीमारियाँ",
          userId: "यूज़र आईडी",
          status: "स्थिति",
          joined: "जॉइन किया",
          upcoming: "आगामी बुकिंग",
          previous: "पिछली बुकिंग",
          noUpcoming: "कोई आगामी बुकिंग नहीं",
          noPrevious: "कोई पिछली बुकिंग नहीं",
        },
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
