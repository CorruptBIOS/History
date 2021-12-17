module.exports = ctx => ({
  title: 'Pinewood Builders',
  description: 'Welcome to the (unofficial) home of Pinewood!',
  dest: 'public/',
  themeConfig: {
    repo: 'https://gitlab.com/CorruptBIOS/pinewood-website',
    editLinks: true,
    docsDir: 'docs/',
    logo: '/PB-Logo.png',
    smoothScroll: true,
    algolia: ctx.isProd ? ({
      apiKey: 'c889630724e74ddbb0a02704299f423e',
      indexName: 'charlotte-mecklenburg-rp'
  }) : null,
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'Pinewood',
      items: [{
        text: 'Pinewood Homepage',
        link: 'https://pinewood-builders.com'
      },
        {
          text: 'PBST Handbook',
          link: 'https://pbst.pinewood-builders.com'
        },
        {
          text: 'TMS Handbook',
          link: 'https://tms.pinewood-builders.com'
        },
        {
          text: 'PET Handbook',
          link: 'https://pet.pinewood-builders.com'
        }
      ]
    },
    {
      text: 'Discord Servers',
      items: [{
          text: 'PB',
          link: 'https://discord.gg/RHWxvhc'
        },{
          text: 'PBST',
          link: 'https://discord.gg/DDUzTwM'
        },
        {
          text: 'TMS',
          link: 'https://discord.gg/3axZ5tb'
        },
        {
          text: 'PET',
          link: 'https://discord.gg/t4KBPkM'
        },{
          text: 'PBA',
          link: 'https://discord.gg/MVAcxTS'
        },{
          text: 'PBM',
          link: 'https://discord.gg/yTVFKne'
        },{
          text: 'MM',
          link: 'https://discord.gg/EjBYFCd'
        },{
          text: 'PBQA',
          link: 'https://discord.gg/6xwcuRh'
        },
      ]
    },
      {
        text: "Group Links",
        items:[{
          text: "Pinewood Builders",
          link: "https://www.roblox.com/groups/159511/Pinewood-Builders#!/about"
        },{
          text: "Pinewood Builders Security Team",
          link: "https://www.roblox.com/groups/645836/Pinewood-Builders-Security-Team#!/about"
        },{
          text: "Pinewood Emergency Team",
          link: "https://www.roblox.com/groups/2593707/Pinewood-Emergency-Team#!/about"
        },{
          text: "Pinewood Builders Media",
          link: "https://www.roblox.com/groups/4032816/Pinewood-Builders-Media#!/about"
        },{
          text: "The Mayhem Syndicate",
          link: "https://www.roblox.com/groups/4890641/The-Mayhem-Syndicate#!/about"
        },{
          text: "Pinewood Builders Aerospace",
          link: "https://www.roblox.com/groups/926624/Pinewood-Builders-Aerospace#!/about"
        },{
          text: "Pinewood Builders Quality Assurance",
          link: "https://www.roblox.com/groups/4543796/Pinewood-Builders-Quality-Assurance#!/about"
        },{
          text: "Mega Miners",
          link: "https://www.roblox.com/groups/1062766/Mega-Miners#!/about"
        },{
          text: "XYLEM Technologies",
          link: "https://www.roblox.com/groups/1179443/XYLEM-Technologies#!/about"
        },{
          text: "Pinewood Intelligence Agency",
          link: "https://www.roblox.com/groups/670202/Pinewood-Intelligence-Agency#!/about"
        }]
      }
  ]
  },
  sidebarDepth: 3,
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-168777162-1' // UA-00000000-0
      }
    ]
  ],
})
