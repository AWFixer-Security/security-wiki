export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "AWFixer Security Wiki",
      description: "Community-driven security wiki.",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5,
    },
    header: {
      title: "AWFixer Security Wiki",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2024",
      links: [
        {
          icon: 'lucide:heart',
          title: 'Sponsor Me',
          to: 'https://support.awfixer.blog',
          target: '_blank',
        },
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/awfixer',
          target: '_blank',
        },
        {
          icon: 'simple-icons:discord',
          to: 'https://discord.gg/austinscave',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/awfixer-security',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Join our Community",
          icon: "lucide:chat",
          to: "https://discord.gg/awfixer",
          target: "_blank",
        },
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/awfixer-security-wiki",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/awfixer-security/security-wiki/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
