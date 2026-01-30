"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export type Language = "sq" | "en"

interface LanguageSwitcherProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 border border-border rounded-md p-0.5">
      <Button
        variant={currentLang === "sq" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-2 text-xs"
        onClick={() => onLanguageChange("sq")}
      >
        SQ
      </Button>
      <Button
        variant={currentLang === "en" ? "default" : "ghost"}
        size="sm"
        className="h-7 px-2 text-xs"
        onClick={() => onLanguageChange("en")}
      >
        EN
      </Button>
    </div>
  )
}

export const translations = {
  sq: {
    nav: {
      home: "Kryefaqja",
      about: "Rreth INVEST",
      objectives: "Objektivat",
      directions: "Drejtimet",
      calendar: "Kalendari",
      membership: "Antarsimi",
      gallery: "Galeria",
      blog: "Blog",
      contact: "Kontakt",
    },
    home: {
      badge: "Rrjeti i Mësuesve AFP - Shqipëri",
      title: "INVEST Teachers Hub Albania",
      description:
        "Bashkësi aktive dhe bashkëpunuese mësuesish të arsimit dhe formimit profesional, ku ndajmë përvojat, mësojmë nga njëri-tjetri dhe mbështesim zhvillimin e përbashkët profesional.",
      applyBtn: "Apliko për Antarsim",
      learnMore: "Mëso më shumë",
      voluntary: "Falas dhe Vullnetar",
      voluntaryDesc: "Rrjeti funksionon në mënyrë vullnetare, pa pagese",
      stats: {
        directions: "Drejtime",
        activities: "Aktivitete/Vit",
        teachers: "Mësues AFP",
        year: "Viti Aktiv",
      },
      explore: "Eksploroni Platformën",
      exploreDesc: "Zgjidhni një seksion për të mësuar më shumë rreth rrjetit INVEST Teachers Hub Albania",
      ctaTitle: "Bëhu pjesë e rrjetit INVEST",
      ctaDesc: "Apliko tani dhe bashkohu me mësuesit e tjerë AFP në Shqipëri",
      membershipTerms: "Kushtet e Antarsimit",
    },
    about: {
      title: "Rreth INVEST Teachers Hub",
      subtitle: "Mësoni më shumë rreth misionit, vizionit dhe strukturës së rrjetit të mësuesve AFP në Shqipëri.",
      mission: "Misioni i Rrjetit",
      missionDesc:
        "Qëllimi i këtij rrjeti është të krijojë një bashkësi aktive dhe bashkëpunuese mësuesish të arsimit dhe formimit profesional (AFP), fillimisht në Shqipëri dhe gradualisht edhe në vendet e Ballkanit Perëndimor dhe më gjerë.",
      vision: "Vizioni",
      visionDesc:
        "Të krijojmë një hapësirë bashkëpunimi të hapur, praktike dhe të orientuar drejt nevojave reale të mësuesve në arsimin dhe formimin profesional.",
      values: "Vlerat",
      valuesDesc: "Bashkëpunim, vullnetarizëm, zhvillim i vazhdueshëm profesional, ndarje e përvojave dhe mësim nga njëri-tjetri.",
      support: "Mbështetja",
      supportDesc: "Mësuesit e angazhuar do të mbështeten nga Albanian Skills me trajnime, workshop-e, evente dhe aktivitete rrjetëzimi.",
      coordUnit: "Njësia Koordinuese",
      coordUnitDesc: "Për të mbajtur rrjetin aktiv dhe funksional, krijohet një njësi e vogël koordinuese, e përbërë nga mësues që angazhohen vullnetarisht.",
      coordinator: "Koordinatori i Rrjetit",
      coordinatorDesc: "Mbështet funksionimin e përgjithshëm të rrjetit, koordinon aktivitetet dhe shërben si pikë lidhëse mes mësuesve dhe iniciativave mbështetëse.",
      supportGroup: "Grupi Mbështetës",
      supportGroupDesc: "5-7 mësues aktivë që ndihmojnë në planifikimin e aktiviteteve, ndarjen e temave dhe marrjen e vendimeve në mënyrë bashkëpunuese.",
      thematicCoords: "Koordinatorët Tematikë",
      thematicCoordsDesc: "Mësues që mbështesin aktivitetet sipas fushave VET, duke lehtësuar diskutimet brenda temës përkatëse.",
      monthlyMeeting: "Takim mujor: E mërkurë e tretë e çdo muaji",
    },
    directions: {
      title: "Drejtimet e Përgjithshme",
      subtitle: "Fushat kryesore të arsimit dhe formimit profesional që mbulohen nga rrjeti.",
      forming: "Në formim e sipër",
      formingDesc: "Grupet tematike janë aktualisht në proces formimi dhe do të strukturohen gradualisht.",
    },
    calendar: {
      title: "Kalendari i Aktiviteteve",
      subtitle: "Aktivitetet do të shtohen gradualisht gjatë vitit.",
      comingSoon: "Aktivitetet do të publikohen së shpejti...",
    },
    membership: {
      title: "Antarsimi",
      subtitle: "Mësoni se kush mund të marrë pjesë në rrjet dhe si të angazhoheni.",
      whoCanJoin: "Kush mund të jetë pjesë?",
      whoCanJoinDesc: "Rrjeti është i hapur për të gjithë profesionistët që kontribuojnë në arsimin dhe formimin profesional.",
      openActivities: "Aktivitete të Hapura",
      openActivitiesDesc: "Aktivitetet janë të hapura për të gjithë antarët e rrjetit por edhe më gjerë përmes formës së antarsimit.",
      certificates: "Çertifikata Pjesëmarrje",
      certificatesDesc: "Në fund të çdo aktiviteti, pjesëmarrësit marrin çertifikatë pjesëmarrje.",
      accredited: "Çertifikime të Akredituara",
      accreditedDesc: "Përmes bashkëpunimeve do të sigurohen çertifikime të akredituara me institucione të tjera që ofrojnë trajnim profesional për mësuesit.",
      benefits: "Përfitimet e Antarsimit",
      readyToJoin: "Gati për tu bashkuar?",
      readyToJoinDesc: "Plotësoni formularin e aplikimit dhe bëhuni pjesë e rrjetit INVEST Teachers Hub Albania.",
    },
    gallery: {
      title: "Galeria e Fotove",
      subtitle: "Momente nga aktivitetet dhe ngjarjet e rrjetit INVEST Teachers Hub Albania.",
      comingSoon: "Fotot do të shtohen pas aktiviteteve...",
    },
    blog: {
      title: "Blog & Njoftime",
      subtitle: "Lajmet më të fundit, njoftimet dhe testimonialet nga rrjeti.",
      news: "Njoftime",
      testimonials: "Testimoniale",
      comingSoon: "Postimet do të shtohen së shpejti...",
    },
    contact: {
      title: "Na Kontaktoni",
      subtitle: "Lidhuni me rrjetin INVEST Teachers Hub Albania përmes kanaleve tona të komunikimit.",
      email: "Email",
      phone: "Telefon",
      location: "Vendndodhja",
      socialMedia: "Rrjetet Sociale",
      partnerships: "Partneritete",
      partnershipsDesc: "Rrjeti INVEST Teachers Hub bashkëpunon me partnerë të ndryshëm për të mbështetur zhvillimin e arsimit profesional.",
    },
    footer: {
      description: "Rrjeti i Mësuesve të Arsimit dhe Formimit Profesional në Shqipëri - Bashkësi aktive dhe bashkëpunuese për zhvillim profesional.",
      navigation: "Navigimi",
      contact: "Kontakt",
      copyright: "© 2026 Albanian Skills. Të gjitha të drejtat e rezervuara.",
      supportedBy: "Mbështetur nga projekti INVEST",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About INVEST",
      objectives: "Objectives",
      directions: "Directions",
      calendar: "Calendar",
      membership: "Membership",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
    },
    home: {
      badge: "VET Teachers Network - Albania",
      title: "INVEST Teachers Hub Albania",
      description:
        "An active and collaborative community of vocational education and training teachers, where we share experiences, learn from each other and support joint professional development.",
      applyBtn: "Apply for Membership",
      learnMore: "Learn More",
      voluntary: "Free and Voluntary",
      voluntaryDesc: "The network operates on a voluntary basis, free of charge",
      stats: {
        directions: "Directions",
        activities: "Activities/Year",
        teachers: "VET Teachers",
        year: "Active Year",
      },
      explore: "Explore the Platform",
      exploreDesc: "Choose a section to learn more about the INVEST Teachers Hub Albania network",
      ctaTitle: "Become part of the INVEST network",
      ctaDesc: "Apply now and join other VET teachers in Albania",
      membershipTerms: "Membership Terms",
    },
    about: {
      title: "About INVEST Teachers Hub",
      subtitle: "Learn more about the mission, vision and structure of the VET teachers network in Albania.",
      mission: "Network Mission",
      missionDesc:
        "The purpose of this network is to create an active and collaborative community of vocational education and training (VET) teachers, initially in Albania and gradually in the Western Balkans and beyond.",
      vision: "Vision",
      visionDesc:
        "To create an open, practical collaborative space oriented towards the real needs of teachers in vocational education and training.",
      values: "Values",
      valuesDesc: "Collaboration, volunteerism, continuous professional development, sharing experiences and learning from each other.",
      support: "Support",
      supportDesc: "Engaged teachers will be supported by Albanian Skills with trainings, workshops, events and networking activities.",
      coordUnit: "Coordinating Unit",
      coordUnitDesc: "To keep the network active and functional, a small coordinating unit is created, composed of voluntarily engaged teachers.",
      coordinator: "Network Coordinator",
      coordinatorDesc: "Supports the overall functioning of the network, coordinates activities and serves as a link between teachers and supporting initiatives.",
      supportGroup: "Support Group",
      supportGroupDesc: "5-7 active teachers who help plan activities, share topics and make decisions collaboratively.",
      thematicCoords: "Thematic Coordinators",
      thematicCoordsDesc: "Teachers who support activities by VET fields, facilitating discussions within their respective topic.",
      monthlyMeeting: "Monthly meeting: Third Wednesday of each month",
    },
    directions: {
      title: "General Directions",
      subtitle: "The main areas of vocational education and training covered by the network.",
      forming: "Currently forming",
      formingDesc: "Thematic groups are currently in the formation process and will be gradually structured.",
    },
    calendar: {
      title: "Activities Calendar",
      subtitle: "Activities will be added gradually throughout the year.",
      comingSoon: "Activities will be published soon...",
    },
    membership: {
      title: "Membership",
      subtitle: "Learn who can participate in the network and how to get involved.",
      whoCanJoin: "Who can be part?",
      whoCanJoinDesc: "The network is open to all professionals who contribute to vocational education and training.",
      openActivities: "Open Activities",
      openActivitiesDesc: "Activities are open to all network members and beyond through the membership form.",
      certificates: "Participation Certificates",
      certificatesDesc: "At the end of each activity, participants receive a participation certificate.",
      accredited: "Accredited Certifications",
      accreditedDesc: "Through partnerships, accredited certifications will be provided with other institutions that offer professional training for teachers.",
      benefits: "Membership Benefits",
      readyToJoin: "Ready to join?",
      readyToJoinDesc: "Fill out the application form and become part of the INVEST Teachers Hub Albania network.",
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Moments from activities and events of the INVEST Teachers Hub Albania network.",
      comingSoon: "Photos will be added after activities...",
    },
    blog: {
      title: "Blog & Announcements",
      subtitle: "Latest news, announcements and testimonials from the network.",
      news: "Announcements",
      testimonials: "Testimonials",
      comingSoon: "Posts will be added soon...",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Connect with the INVEST Teachers Hub Albania network through our communication channels.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      socialMedia: "Social Media",
      partnerships: "Partnerships",
      partnershipsDesc: "The INVEST Teachers Hub network collaborates with various partners to support the development of professional education.",
    },
    footer: {
      description: "VET Teachers Network in Albania - Active and collaborative community for professional development.",
      navigation: "Navigation",
      contact: "Contact",
      copyright: "© 2026 Albanian Skills. All rights reserved.",
      supportedBy: "Supported by INVEST project",
    },
  },
}
