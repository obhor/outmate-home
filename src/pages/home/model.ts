// @ts-nocheck — logic preserved verbatim from the design export.
import { ModelBase } from '../../lib/model'
const NAV = [
  ['', [['Home', 'M3.8 9L10 4l6.2 5v6.5h-4.4v-4h-3.6v4H3.8z']]],
  [
    'Workspace',
    [
      ['Projects', 'M3.5 6.5h5l1.5 2h6.5v7h-13z'],
      ['Templates', 'M3.5 4.5h13v4h-13zM3.5 11h6v4.5h-6zM11 11h5.5v4.5H11z'],
      ['Recent research', 'M10 5v5l3.5 2M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z'],
      ['Saved lists', 'M6 3.5h8v13l-4-3-4 3z'],
      ['Revenue Radar', 'M3.5 12.5l3-5 3 3 3-6 4 8'],
      ['Copilot', 'M4.5 4.5h11v8.5h-6.5l-4.5 3.5z'],
    ],
  ],
  [
    'Configure',
    [
      ['Integrations', 'M7 3.5v3M13 3.5v3M5 6.5h10v4a5 5 0 01-10 0zM10 15.5v1'],
      ['Skills', 'M10 3.5l6 3v7l-6 3-6-3v-7zM10 9.5V16M4 6.5l6 3 6-3'],
      ['API keys', 'M12.5 4.5a3.5 3.5 0 11-3.3 4.6L4 14.3V16h1.7l.9-.9M13 7h.01'],
      ['Usage', 'M4 16V9M8 16V5M12 16v-5M16 16V7'],
    ],
  ],
]
const SRC = {
  cb: ['cb', '#0B66C3'],
  bw: ['bw', '#166534'],
  zi: ['zi', '#DC2626'],
  gh: ['gh', '#7C2D5A'],
  hs: ['hs', '#EA580C'],
  li: ['in', '#0A66C2'],
}
const IC = {
  news: 'M6 3.5h5l3 3v10H6zM11 3.5v3h3M8 10h4M8 12.5h4',
  rocket:
    'M11.6 4.4c2.4-1 4 .6 3 3-.7 1.8-2.6 3.8-5 5.2l-2.6-2.6C8.2 7.4 10 5.3 11.6 4.4zM7 12.9L5.6 15.4 4.5 14.3 7 12.9z',
  monitor: 'M3.5 4.5h13v8.5h-13zM8 15.5h4M10 13v2.5',
  building: 'M5 16.5V4.5h6v12M11 8.5h4v8M7 7h2M7 10h2M7 13h2',
  brief: 'M3.5 7.5h13v8h-13zM7.5 7.5V5.5h5v2M3.5 11h13',
  people:
    'M7.5 9.5a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4zM3.5 16c0-2.2 1.8-3.6 4-3.6s4 1.4 4 3.6M13.2 6.2a2 2 0 010 4M14 12.6c1.6.3 2.6 1.5 2.6 3.4',
  globe:
    'M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM3.5 10h13M10 3.5c2 2 2 11 0 13M10 3.5c-2 2-2 11 0 13',
  chart: 'M4 16V9M8 16V5M12 16v-5M16 16V7',
  tag: 'M4.5 9.5l5-5h6v6l-5 5zM12.5 7.5h.01',
  doc: 'M5 3.5h10v13H5zM7.5 7h5M7.5 10h5M7.5 13h3',
}
const ENRICH = [
  ['Find Company News', 'Find the latest relevant company news.', 3, IC.news, ''],
  ['Find Company Funding', "Find the company's latest funding round.", 3, IC.rocket, 'cb'],
  ['Find Website Tech Stack', 'Identify technologies the company runs on.', 6, IC.monitor, 'bw'],
  ['Find Company Revenue', "Find the company's estimated revenue.", 2, IC.building, 'zi'],
  ['Find Job Openings', 'Find current GTM job openings.', 3, IC.brief, 'gh'],
  [
    'Find LinkedIn Profile Highlights',
    'Extract noteworthy details from the company profile.',
    4,
    IC.people,
    'li',
  ],
  ['Find Social Profiles', "Find the company's social accounts.", 2, IC.globe, ''],
  ['Find GTM Strategy', "Analyze the company's go-to-market motion.", 5, IC.chart, ''],
  ['Find Core Values', "Find the company's stated core values.", 3, IC.doc, ''],
  ['Find Free Trial', 'Check whether a free trial or freemium tier exists.', 2, IC.tag, ''],
  ['Find Company Snapshot', 'Return a one-line company snapshot.', 3, IC.doc, ''],
  ['Find Decision Makers', 'Find the buying committee at each company.', 20, IC.people, ''],
]
const WORKFLOWS = [
  [
    'Find ICP Accounts',
    'Find companies matching my ideal customer profile.',
    'Accounts',
    2,
    IC.building,
    '1h ago',
  ],
  [
    'Find Decision Makers',
    'Find VP Sales, RevOps and other buying stakeholders.',
    'People',
    20,
    IC.people,
    '20h ago',
  ],
  [
    'Find High-Intent Accounts',
    'Find companies showing recent buying signals.',
    'Signals',
    4,
    'M3.5 12.5l3-5 3 3 3-6 4 8',
    '2h ago',
  ],
  [
    'Find Recently Funded Companies',
    'Find companies that raised in the last 90 days.',
    'Signals',
    3,
    IC.rocket,
    '1d ago',
  ],
  [
    'Find Companies Hiring',
    'Find companies hiring roles that signal intent.',
    'Signals',
    3,
    IC.brief,
    '3d ago',
  ],
  [
    'Competitor Research',
    'Analyze competitors, customers and positioning.',
    'Research',
    5,
    IC.chart,
    '4d ago',
  ],
  [
    'GTM Gap Analysis',
    'Find companies with missing GTM capabilities.',
    'GTM',
    5,
    'M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM10 6.5V10l2.5 1.5',
    '1h ago',
  ],
  ['Account Intelligence', 'Build a complete account snapshot.', 'Accounts', 8, IC.doc, '2d ago'],
  [
    'Build Lead List',
    'Build a qualified list with contacts and enrichment.',
    'Lists',
    25,
    'M6 3.5h8v13l-4-3-4 3z',
    '6d ago',
  ],
  [
    'Technology Intelligence',
    'Find companies using specific technologies.',
    'Technology',
    6,
    IC.monitor,
    '5d ago',
  ],
  [
    'Company News Monitoring',
    'Track news mentions across your accounts.',
    'Research',
    3,
    IC.news,
    '12h ago',
  ],
  [
    'Website Technology Analysis',
    'Detect the stack behind each website.',
    'Technology',
    6,
    IC.monitor,
    '8d ago',
  ],
  [
    'Company Revenue Intelligence',
    'Estimate revenue and growth per account.',
    'Research',
    2,
    IC.building,
    '9d ago',
  ],
  ['Social Intelligence', 'Track posting and engagement signals.', 'Signals', 4, IC.globe, 'Never'],
  [
    'GTM Strategy Analysis',
    'Analyze motion, gaps and recommended plays.',
    'GTM',
    5,
    IC.chart,
    '3d ago',
  ],
]
const PROJECTS = [
  [
    'B2B SaaS GTM Platform Gap Analysis',
    'Live',
    '400',
    '112',
    '642',
    '2,370',
    '2.4K',
    '1h ago',
    'GTM Research',
    'AK',
    '#EDE9FE',
    '#5B21B6',
  ],
  [
    'RevOps leadership search',
    'Complete',
    '24',
    '86',
    '41',
    '688',
    '0.7K',
    '20h ago',
    'People Research',
    'MS',
    '#DBEAFE',
    '#1D4ED8',
  ],
  [
    'Series B MarTech accounts',
    'Complete',
    '128',
    '0',
    '302',
    '1,024',
    '1.1K',
    '1d ago',
    'Funding Research',
    'AK',
    '#EDE9FE',
    '#5B21B6',
  ],
  [
    'Salesforce replacement signals',
    'Paused',
    '64',
    '18',
    '190',
    '384',
    '0.4K',
    '3d ago',
    'Signal Research',
    'RT',
    '#DCFCE7',
    '#15803D',
  ],
  [
    'Hiring-signal watchlist',
    'Live',
    '212',
    '46',
    '498',
    '1,696',
    '1.8K',
    '4h ago',
    'Signal Research',
    'MS',
    '#DBEAFE',
    '#1D4ED8',
  ],
  [
    'EMEA expansion shortlist',
    'Draft',
    '0',
    '0',
    '0',
    '0',
    '0',
    '6d ago',
    'Account Research',
    'AK',
    '#EDE9FE',
    '#5B21B6',
  ],
]
const LISTS = [
  [
    'High Intent Accounts',
    '42',
    '38',
    '186',
    '12 Aug',
    '1h ago',
    'B2B SaaS GTM Platform Gap Analysis',
  ],
  ['VP Sales Prospects', '0', '86', '41', '10 Aug', '20h ago', 'RevOps leadership search'],
  ['Recently Funded SaaS', '128', '12', '302', '8 Aug', '1d ago', 'Series B MarTech accounts'],
  [
    'Salesforce Replacement Accounts',
    '64',
    '18',
    '190',
    '2 Aug',
    '3d ago',
    'Salesforce replacement signals',
  ],
  ['Companies Hiring RevOps', '96', '24', '212', '28 Jul', '4h ago', 'Hiring-signal watchlist'],
  [
    'Priority Outreach Accounts',
    '18',
    '54',
    '92',
    '26 Jul',
    '2d ago',
    'B2B SaaS GTM Platform Gap Analysis',
  ],
]
const PAGES = {
  Integrations: {
    blurb: 'Connect your CRM and communication tools to improve research quality.',
    action: 'Request an integration',
    cards: [
      ['HubSpot', 'CRM — sync companies and contacts', 'hs', '#EA580C', 'Connected'],
      ['Salesforce', 'CRM — push qualified accounts', 'sf', '#0B66C3', 'Not connected'],
      ['Gmail', 'Send and track outreach', 'gm', '#DC2626', 'Not connected'],
      ['Slack', 'Signal alerts in your channels', 'sl', '#4A154B', 'Connected'],
      ['Google Sheets', 'Two-way sheet sync', 'gs', '#15803D', 'Not connected'],
      ['CSV', 'Import and export flat files', 'csv', '#52525B', 'Enabled'],
      ['API', 'Programmatic access to research', 'api', '#18181B', 'Enabled'],
      ['MCP', 'Model context protocol server', 'mcp', '#18181B', 'Not connected'],
      ['LinkedIn', 'Profile and activity research', 'in', '#0A66C2', 'Not connected'],
      ['Crunchbase', 'Funding and firmographics', 'cb', '#0B66C3', 'Connected'],
    ],
  },
  Skills: {
    blurb: 'Reusable research capabilities the copilot can call.',
    action: 'Create custom skill',
    cards: [
      ['Company Research', 'Firmographics, description, category', 'CR', '#6D28D9', 'Enabled'],
      ['Lead Research', 'Buying committee and contact discovery', 'LR', '#6D28D9', 'Enabled'],
      ['Funding Research', 'Rounds, investors, amounts', 'FR', '#0B66C3', 'Enabled'],
      ['Hiring Intelligence', 'Open roles and hiring velocity', 'HI', '#7C2D5A', 'Enabled'],
      ['Technology Detection', 'Stack and vendor detection', 'TD', '#166534', 'Enabled'],
      ['Social Intelligence', 'Posting and engagement signals', 'SI', '#0A66C2', 'Not enabled'],
      ['Competitive Intelligence', 'Competitors and positioning', 'CI', '#C2410C', 'Not enabled'],
      ['GTM Analysis', 'Motion, gaps and recommendations', 'GA', '#6D28D9', 'Enabled'],
      ['ICP Classification', 'Fit scoring against your ICP', 'IC', '#15803D', 'Enabled'],
    ],
  },
  'API keys': {
    blurb: 'Programmatic access to research, sheets and enrichments.',
    action: 'Create key',
    grid: '1.2fr 1.4fr .8fr .9fr',
    cols: ['Name', 'Key', 'Scope', 'Last used'],
    rows: [
      ['Production', 'om_live_••••4c9f', 'Read / write', '12m ago'],
      ['Analytics read-only', 'om_live_••••81ad', 'Read', '2d ago'],
      ['Sandbox', 'om_test_••••55e2', 'Read / write', 'Never'],
    ],
  },
  Usage: {
    blurb: 'Credit consumption by enrichment over the current cycle.',
    action: 'Export usage',
    grid: '1.4fr .9fr .9fr .9fr',
    cols: ['Enrichment', 'Cells run', 'Credits', 'Share'],
    rows: [
      ['Find decision-makers', '112', '2,240', '38%'],
      ['Website tech stack', '400', '2,400', '31%'],
      ['Company funding', '400', '1,200', '18%'],
      ['Work email finder', '186', '558', '9%'],
      ['Company revenue', '188', '376', '4%'],
    ],
  },
  Settings: {
    blurb: 'Workspace defaults for research, enrichment and billing.',
    action: 'Save changes',
    grid: '1.2fr 1.6fr .9fr',
    cols: ['Setting', 'Value', 'Scope'],
    rows: [
      ['Default agent', 'Outmate Agent', 'Workspace'],
      ['Search depth', 'Deep', 'Workspace'],
      ['Signal window', '7 days', 'Workspace'],
      ['Auto-enrich new rows', 'Off', 'Workspace'],
      ['Credit alert threshold', '1,000 credits', 'Billing'],
      ['Data residency', 'US', 'Organization'],
    ],
  },
  Trash: {
    blurb: 'Deleted projects and sheets are kept for 30 days.',
    action: 'Empty trash',
    empty: [
      'Trash is empty',
      'Anything you delete will sit here for 30 days before it is permanently removed.',
    ],
  },
}
const WORKSPACE_FILE = 'Outmate Workspace v3.dc.html'
const LINKS = {
  'Revenue Radar': 'Outmate Radar.dc.html',
  Copilot: 'Outmate Copilot v2.dc.html',
}
export /** Generated from the Claude Design export; logic preserved verbatim.*/
class HomeModel extends ModelBase {
  state = {
    page: 'Home',
    draft: '',
    agent: 'Outmate Agent',
    agentOpen: false,
    toolsOpen: false,
    workspaceOpen: false,
    notifsOpen: false,
    userOpen: false,
    creditsOpen: false,
    drawerOpen: false,
    voiceOn: false,
    credits: 5000,
    used: 2370,
    toast: '',
    menuFor: null,
    enrichPrompt: '',
    q: '',
    statusFilter: 'All',
    sort: 'Last run',
    cat: 'All',
    researchFilter: 'All',
    connected: {
      HubSpot: true,
      Gmail: false,
      Slack: true,
      Salesforce: false,
      LinkedIn: false,
      MCP: false,
    },
  }
  stop = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
  }
  flash = (t) => {
    this.clearTimeout(this._t)
    this.setState({
      toast: t,
    })
    this._t = this.setTimeout(
      () =>
        this.setState({
          toast: '',
        }),
      2200,
    )
  }
  closeAll(x) {
    return Object.assign(
      {
        agentOpen: false,
        toolsOpen: false,
        workspaceOpen: false,
        notifsOpen: false,
        userOpen: false,
        menuFor: null,
      },
      x || {},
    )
  }
  renderVals() {
    const s = this.state
    const statusPill = (v) =>
      'flex:none; padding:2px 7px; border-radius:4px; font-size:10px; font-weight:650; letter-spacing:.02em; ' +
      (v === 'Live'
        ? 'background:#ECFDF3; color:#15803D'
        : v === 'Paused'
          ? 'background:#FFF8F1; color:#C2410C'
          : v === 'Draft'
            ? 'background:#F5F3FF; color:#6D28D9'
            : 'background:#F4F4F6; color:#71717A')
    const chip = (on) =>
      'padding:5px 11px; border-radius:5px; font-size:12px; font-weight:600; cursor:pointer; white-space:nowrap; ' +
      (on
        ? 'border:1px solid #6D28D9; background:#F5F1FD; color:#5B21B6'
        : 'border:1px solid #E4E4E8; background:#FFFFFF; color:#52525B')
    const navStyle = (on) =>
      'display:flex; align-items:center; gap:9px; padding:6px 9px; border-radius:6px; cursor:pointer; font-size:12.5px; ' +
      (on
        ? 'background:#F3EEFE; color:#4C1D95; font-weight:650; box-shadow:inset 2px 0 0 #6D28D9'
        : 'background:transparent; color:#52525B; font-weight:500')
    return {
      plan: 'Growth workspace',
      pageTitle: s.page,
      isHome: s.page === 'Home',
      creditsLeft: s.credits.toLocaleString(),
      creditsUsed: s.used.toLocaleString(),
      creditColor: s.credits < 1000 ? '#C2410C' : '#18181B',
      remainPct:
        Math.max(3, Math.min(100, (s.credits / (s.credits + s.used)) * 100)).toFixed(1) + '%',
      settingsNavStyle: 'margin-top:6px; ' + navStyle(s.page === 'Settings'),
      workspaceOpen: s.workspaceOpen,
      toggleWorkspace: () =>
        this.setState(
          this.closeAll({
            workspaceOpen: !s.workspaceOpen,
          }),
        ),
      workspaces: [
        ['Outmate', '✓'],
        ['Outmate — Sandbox', ''],
        ['Create workspace', '+'],
      ].map((w) => ({
        name: w[0],
        mark: w[1],
        pick: () => {
          this.setState({
            workspaceOpen: false,
          })
          this.flash(w[0] === 'Create workspace' ? 'New workspace' : 'Switched to ' + w[0])
        },
      })),
      navGroups: NAV.map((g) => ({
        label: g[0],
        hasLabel: !!g[0],
        items: g[1].map((i) => ({
          label: i[0],
          path: i[1],
          style: navStyle(s.page === i[0]),
          hasTag: i[0] === 'API keys',
          tag: 'beta',
          go: () => {
            if (LINKS[i[0]]) {
              this.goFile(LINKS[i[0]])
              return
            }
            this.setState(
              this.closeAll({
                page: i[0],
              }),
            )
            const el = document.getElementById('scroller')
            if (el) el.scrollTop = 0
          },
        })),
      })),
      recents: [
        'B2B SaaS GTM Platform Gap Analysis',
        'RevOps leadership search',
        'Series B MarTech accounts',
        'Salesforce replacement signals',
      ].map((name) => ({
        name,
        open: () => this.goFile(WORKSPACE_FILE),
      })),
      resources: [
        ['Refer a friend', 'M10 4.5v11M4.5 10h11'],
        ['Join our Slack', 'M4.5 10h11M10 4.5v11M7 7l6 6M13 7l-6 6'],
      ].map((r) => ({
        label: r[0],
        path: r[1],
        act: () => this.flash(r[0]),
      })),
      upgrade: () =>
        this.setState(
          this.closeAll({
            creditsOpen: true,
          }),
        ),
      openCredits: () =>
        this.setState(
          this.closeAll({
            creditsOpen: true,
          }),
        ),
      newResearch: () => {
        this.setState(
          this.closeAll({
            page: 'Home',
            draft: '',
          }),
        )
        this.flash('New research started')
      },
      openSearch: () => this.flash('Global search — ⌘K'),
      goSettings: () =>
        this.setState(
          this.closeAll({
            page: 'Settings',
          }),
        ),
      notifsOpen: s.notifsOpen,
      toggleNotifs: () =>
        this.setState(
          this.closeAll({
            notifsOpen: !s.notifsOpen,
          }),
        ),
      notifications: [
        ['Gap Analysis run finished — 2,370 / 2,370 cells', '18m ago', '#22A15D'],
        ['4 new buying signals on Acme', '1h ago', '#6D28D9'],
        ['Gmail connector needs re-authentication', '3h ago', '#EA580C'],
      ].map((n) => ({
        text: n[0],
        time: n[1],
        dot: n[2],
        act: () => {
          this.setState({
            notifsOpen: false,
          })
          this.flash(n[0])
        },
      })),
      userOpen: s.userOpen,
      toggleUser: () =>
        this.setState(
          this.closeAll({
            userOpen: !s.userOpen,
          }),
        ),
      userMenu: ['Account settings', 'Billing & credits', 'Keyboard shortcuts', 'Sign out'].map(
        (label) => ({
          label,
          act: () => {
            this.setState({
              userOpen: false,
            })
            label === 'Billing & credits'
              ? this.setState({
                  creditsOpen: true,
                })
              : this.flash(label)
          },
        }),
      ),
      draft: s.draft,
      onDraft: (e) =>
        this.setState({
          draft: e.target.value,
        }),
      estimateLabel: s.draft.trim()
        ? '~' + (24 + Math.min(120, s.draft.trim().length)) + ' credits estimated'
        : 'Credits estimated before each run',
      agent: s.agent.replace(' Agent', ''),
      agentOpen: s.agentOpen,
      toggleAgent: (e) => {
        this.stop(e)
        this.setState(
          this.closeAll({
            agentOpen: !s.agentOpen,
          }),
        )
      },
      agents: [
        ['Outmate Agent', 'General GTM research'],
        ['Prospector', 'People and contact discovery'],
        ['Signal Analyst', 'Intent and buying signals'],
      ].map((a) => ({
        name: a[0],
        desc: a[1],
        pick: (e) => {
          this.stop(e)
          this.setState({
            agent: a[0],
            agentOpen: false,
          })
          this.flash(a[0] + ' selected')
        },
      })),
      toolsOpen: s.toolsOpen,
      toggleTools: (e) => {
        this.stop(e)
        this.setState(
          this.closeAll({
            toolsOpen: !s.toolsOpen,
          }),
        )
      },
      tools: [
        ['Company search', '2 / row'],
        ['Find decision-makers', '20 / row'],
        ['Work email finder', '3 / row'],
        ['Tech stack detection', '6 / row'],
        ['Signal monitoring', '4 / company'],
      ].map((t) => ({
        label: t[0],
        cost: t[1],
        pick: (e) => {
          this.stop(e)
          this.setState({
            toolsOpen: false,
          })
          this.flash(t[0] + ' added to this research')
        },
      })),
      attach: () => this.flash('Attach a CSV, list or brief'),
      voice: () => {
        this.setState({
          voiceOn: !s.voiceOn,
        })
        this.flash(s.voiceOn ? 'Recording stopped' : 'Recording — speak your research brief')
      },
      voiceBg: s.voiceOn ? '#FEF2F2' : '#FFFFFF',
      voiceBorder: s.voiceOn ? '#FCA5A5' : '#E4E4E8',
      voiceFg: s.voiceOn ? '#DC2626' : '#52525B',
      send: () => {
        if (!s.draft.trim()) {
          this.flash('Describe what you need first')
          return
        }
        this.flash('Research started — building your table')
      },
      buildEnrichment: () =>
        this.setState(
          this.closeAll({
            drawerOpen: true,
          }),
        ),
      toast: s.toast,
      drawerOpen: s.drawerOpen,
      closeDrawer: () =>
        this.setState({
          drawerOpen: false,
        }),
      enrichPrompt: s.enrichPrompt,
      onEnrichPrompt: (e) =>
        this.setState({
          enrichPrompt: e.target.value,
        }),
      createEnrich: () => {
        if (!s.enrichPrompt.trim()) {
          this.flash('Describe the column first')
          return
        }
        this.setState({
          drawerOpen: false,
          enrichPrompt: '',
        })
        this.flash('AI column added to your sheet')
      },
      enrichments: ENRICH.map((e) => ({
        name: e[0],
        desc: e[1],
        cost: e[2] ? '~' + e[2] + ' / cell' : 'Free',
        path: e[3],
        hasSrc: !!e[4],
        src: e[4] ? SRC[e[4]][0] : '',
        srcStyle: e[4]
          ? 'flex:none; width:17px; height:17px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:8.5px; font-weight:700; color:#FFFFFF; background:' +
            SRC[e[4]][1]
          : '',
        add: () => {
          this.setState({
            drawerOpen: false,
          })
          this.flash('“' + e[0] + '” column added — ~' + e[2] + ' credits / cell')
        },
      })),
      creditsOpen: s.creditsOpen,
      closeCredits: () =>
        this.setState({
          creditsOpen: false,
        }),
      usedPct: Math.min(100, (s.used / (s.used + s.credits)) * 100).toFixed(1) + '%',
      rates: [
        ['Find decision-makers', '20 / company'],
        ['Website tech stack', '6 / company'],
        ['Company funding', '3 / company'],
        ['Company revenue', '2 / company'],
      ].map((r) => ({
        label: r[0],
        cost: r[1],
      })),
      packs: [
        ['5,000', '$49 / mo'],
        ['25,000', '$199 / mo'],
        ['100,000', 'Contact sales'],
      ].map((p) => ({
        amount: p[0],
        price: p[1],
        buy: () => {
          const n = parseInt(p[0].replace(/,/g, ''), 10)
          if (p[1] === 'Contact sales') {
            this.setState({
              creditsOpen: false,
            })
            this.flash('Sales will reach out')
            return
          }
          this.setState((st) => ({
            credits: st.credits + n,
            creditsOpen: false,
          }))
          this.flash(p[0] + ' credits added')
        },
      })),
      newTemplate: () => this.flash('New template'),
      newList: () => this.flash('New list'),
      isProjects: s.page === 'Projects',
      isTemplates: s.page === 'Templates',
      isResearchPage: s.page === 'Recent research',
      isLists: s.page === 'Saved lists',
      projectSummary: [
        ['Active projects', '2'],
        ['Completed', '2'],
        ['Paused', '1'],
        ['Companies researched', '828'],
        ['Credits used', '6.4K'],
      ].map((x) => ({
        label: x[0],
        value: x[1],
      })),
      projectCols: [
        'Project',
        'Status',
        'Companies',
        'Leaders',
        'Signals',
        'Enriched',
        'Last run',
        'Credits',
        'Updated',
        '',
      ],
      projectGrid: '1.5fr .74fr .78fr .68fr .68fr .76fr .74fr .68fr .74fr 40px',
      projectRows: PROJECTS.filter(
        (p) =>
          !s.q.trim() || (p[0] + ' ' + p[8]).toLowerCase().indexOf(s.q.trim().toLowerCase()) > -1,
      )
        .filter((p) => s.statusFilter === 'All' || p[1] === s.statusFilter)
        .map((p) => ({
          name: p[0],
          status: p[1],
          statusStyle: statusPill(p[1]),
          type: p[8],
          cells: [p[2], p[3], p[4], p[5], p[7], p[6], p[7]],
          companies: p[2],
          leaders: p[3],
          signals: p[4],
          enriched: p[5],
          lastRun: p[7],
          creditsUsed: p[6],
          updated: p[7],
          menuOpen: s.menuFor === p[0],
          act: () => this.goFile(WORKSPACE_FILE),
          menu: (e) => {
            this.stop(e)
            this.setState({
              menuFor: s.menuFor === p[0] ? null : p[0],
            })
          },
          items: ['Open', 'Duplicate', 'Rename', 'Pause', 'Delete'].map((label) => ({
            label,
            color: label === 'Delete' ? '#B91C1C' : '#3F3F46',
            act: (e) => {
              this.stop(e)
              this.setState({
                menuFor: null,
              })
              this.flash(label + ' — “' + p[0] + '”')
            },
          })),
        })),
      q: s.q,
      onQ: (e) =>
        this.setState({
          q: e.target.value,
        }),
      statusChips: ['All', 'Live', 'Complete', 'Paused', 'Draft'].map((k) => ({
        label: k,
        style: chip(s.statusFilter === k),
        pick: () =>
          this.setState({
            statusFilter: k,
          }),
      })),
      sortLabel: 'Sort: ' + s.sort,
      toggleSort: () =>
        this.setState((st) => ({
          sort:
            st.sort === 'Last run'
              ? 'Credits used'
              : st.sort === 'Credits used'
                ? 'Companies'
                : 'Last run',
        })),
      filterMore: () => this.flash('Filter by date, type, credits used and last run'),
      catChips: [
        'All',
        'Accounts',
        'People',
        'Signals',
        'Research',
        'Technology',
        'GTM',
        'Lists',
      ].map((k) => ({
        label: k,
        style: chip(s.cat === k),
        pick: () =>
          this.setState({
            cat: k,
          }),
      })),
      workflowRows: WORKFLOWS.filter((w) => s.cat === 'All' || w[2] === s.cat)
        .filter(
          (w) =>
            !s.q.trim() || (w[0] + ' ' + w[1]).toLowerCase().indexOf(s.q.trim().toLowerCase()) > -1,
        )
        .map((w) => ({
          name: w[0],
          desc: w[1],
          cat: w[2],
          cost: w[3] + ' credits / row',
          path: w[4],
          used: w[5],
          run: (e) => {
            this.stop(e)
            this.setState(
              this.closeAll({
                page: 'Home',
                draft: w[1],
              }),
            )
            this.flash('“' + w[0] + '” running · ' + w[3] + ' credits / row')
          },
          preview: (e) => {
            this.stop(e)
            this.flash('Preview — ' + w[0])
          },
          duplicate: (e) => {
            this.stop(e)
            this.flash('“' + w[0] + '” duplicated')
          },
        })),
      researchChips: ['All', 'Active', 'Completed', 'Paused', 'Recently updated'].map((k) => ({
        label: k,
        style: chip(s.researchFilter === k),
        pick: () =>
          this.setState({
            researchFilter: k,
          }),
      })),
      researchCols: [
        'Research',
        'Type',
        'Companies',
        'Leaders',
        'Signals',
        'Enriched',
        'Credits',
        'Updated',
        'Status',
        '',
      ],
      researchGrid: '1.5fr .9fr .8fr .7fr .7fr .74fr .7fr .8fr .8fr 62px',
      researchRows: PROJECTS.filter(
        (p) =>
          s.researchFilter === 'All' ||
          (s.researchFilter === 'Active' && p[1] === 'Live') ||
          (s.researchFilter === 'Completed' && p[1] === 'Complete') ||
          (s.researchFilter === 'Paused' && p[1] === 'Paused') ||
          s.researchFilter === 'Recently updated',
      )
        .filter((p) => !s.q.trim() || p[0].toLowerCase().indexOf(s.q.trim().toLowerCase()) > -1)
        .map((p) => ({
          name: p[0],
          type: p[8],
          companies: p[2],
          leaders: p[3],
          signals: p[4],
          enriched: p[5],
          creditsUsed: p[6],
          updated: p[7],
          status: p[1],
          statusStyle: statusPill(p[1]),
          act: () => this.goFile(WORKSPACE_FILE),
        })),
      listCols: [
        'List',
        'Companies',
        'Leaders',
        'Signals',
        'Created',
        'Updated',
        'Source research',
        '',
      ],
      listGrid: '1.3fr .78fr .7fr .7fr .74fr .74fr 1.3fr 40px',
      listRows: LISTS.filter(
        (l) => !s.q.trim() || l[0].toLowerCase().indexOf(s.q.trim().toLowerCase()) > -1,
      ).map((l) => ({
        name: l[0],
        companies: l[1],
        leaders: l[2],
        signals: l[3],
        created: l[4],
        updated: l[5],
        source: l[6],
        menuOpen: s.menuFor === l[0],
        act: () => this.goFile(WORKSPACE_FILE),
        menu: (e) => {
          this.stop(e)
          this.setState({
            menuFor: s.menuFor === l[0] ? null : l[0],
          })
        },
        items: ['Open', 'Rename', 'Duplicate', 'Export', 'Delete'].map((label) => ({
          label,
          color: label === 'Delete' ? '#B91C1C' : '#3F3F46',
          act: (e) => {
            this.stop(e)
            this.setState({
              menuFor: null,
            })
            this.flash(label + ' — “' + l[0] + '”')
          },
        })),
      })),
      isPage: !!PAGES[s.page],
      pageBlurb: (PAGES[s.page] || {}).blurb || 'Everything in this workspace.',
      pageActionLabel: (PAGES[s.page] || {}).action || 'New research',
      pageAction: () => {
        const p = PAGES[s.page] || {}
        if (p.action) {
          this.flash(p.action)
          return
        }
        this.setState(
          this.closeAll({
            page: 'Home',
          }),
        )
      },
      pageHasTable: !!(PAGES[s.page] || {}).cols,
      pageHasCards: !!(PAGES[s.page] || {}).cards,
      pageEmpty: !!(PAGES[s.page] || {}).empty,
      emptyTitle: ((PAGES[s.page] || {}).empty || ['', ''])[0],
      emptyBody: ((PAGES[s.page] || {}).empty || ['', ''])[1],
      pageCols: (PAGES[s.page] || {}).cols || [],
      pageGrid: (PAGES[s.page] || {}).grid || '1fr',
      pageRows: ((PAGES[s.page] || {}).rows || []).map((cells) => ({
        cells,
        act: () => this.flash(cells[0] + ' opened'),
      })),
      pageCards: ((PAGES[s.page] || {}).cards || []).map((c) => ({
        name: c[0],
        desc: c[1],
        mark: c[2],
        bg: c[3],
        state: c[4],
        stateStyle:
          'flex:none; padding:2px 7px; border-radius:5px; font-size:10px; font-weight:650; ' +
          (c[4] === 'Connected' || c[4] === 'Enabled'
            ? 'background:#ECFDF3; color:#15803D'
            : 'background:#F4F4F6; color:#71717A'),
        act: () =>
          this.flash(
            c[0] + ' — ' + (c[4] === 'Connected' || c[4] === 'Enabled' ? 'configure' : 'connect'),
          ),
      })),
      morePrompts: () => this.flash('Prompt library opened'),
      allTemplates: () =>
        this.setState(
          this.closeAll({
            page: 'Templates',
          }),
        ),
      goProjects: () =>
        this.setState(
          this.closeAll({
            page: 'Projects',
          }),
        ),
      prompts: [
        [
          'Find B2B SaaS companies with 50–500 employees using HubSpot but without a unified GTM platform.',
          'M9 4.5a5 5 0 100 10 5 5 0 000-10zM13 13l3.5 3.5',
        ],
        [
          'Find VP Sales and RevOps leaders at recently funded SaaS companies.',
          'M7.5 9.5a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4zM3.5 16c0-2.2 1.8-3.6 4-3.6s4 1.4 4 3.6M13.2 6.2a2 2 0 010 4M14 12.6c1.6.3 2.6 1.5 2.6 3.4',
        ],
        [
          'Find companies showing hiring and website intent signals in the last 7 days.',
          'M3.5 12.5l3-5 3 3 3-6 4 8',
        ],
        [
          'Find companies using Salesforce that are actively evaluating alternatives.',
          'M10 3.5l6 3v7l-6 3-6-3v-7zM10 9.5V16M4 6.5l6 3 6-3',
        ],
      ].map((p) => ({
        text: p[0],
        path: p[1],
        use: () => {
          this.setState(
            this.closeAll({
              draft: p[0],
            }),
          )
          this.flash('Prompt loaded — press send to run')
        },
      })),
      workflows: WORKFLOWS.slice(0, 10).map((t) => ({
        name: t[0],
        desc: t[1],
        cost: t[3] + ' / row',
        path: t[4],
        run: (e) => {
          this.stop(e)
          this.setState(
            this.closeAll({
              draft: t[1],
            }),
          )
          this.flash('“' + t[0] + '” running · ' + t[3] + ' credits / row')
        },
      })),
      research: PROJECTS.slice(0, 4).map((p) => ({
        name: p[0],
        status: p[1],
        type: p[8],
        stats: p[2] + ' companies · ' + p[3] + ' leaders · ' + p[4] + ' signals',
        spend: p[5] + ' cells enriched · ' + p[6] + ' credits · last run ' + p[7],
        updated: p[7],
        owner: p[9],
        ownerBg: p[10],
        ownerFg: p[11],
        r: p,
        statusStyle: statusPill(p[1]),
        menuOpen: s.menuFor === p[0],
        open: () => this.goFile(WORKSPACE_FILE),
        openIt: (e) => {
          this.stop(e)
          this.goFile(WORKSPACE_FILE)
        },
        menu: (e) => {
          this.stop(e)
          this.setState({
            menuFor: s.menuFor === p[0] ? null : p[0],
          })
        },
        items: ['Open', 'Duplicate', 'Rename', 'Pause', 'Delete'].map((label) => ({
          label,
          color: label === 'Delete' ? '#B91C1C' : '#3F3F46',
          act: (e) => {
            this.stop(e)
            this.setState({
              menuFor: null,
            })
            this.flash(label + ' — “' + p[0] + '”')
          },
        })),
      })),
      sheets: [
        [
          'B2B SaaS GTM Platform Gap Analysis',
          '400 rows · 1h ago',
          ['Company Name', 'Domain', 'CRM'],
          [
            ['Jonas Fitness, Inc.', 'jonasfitness.com', 'HubSpot'],
            ['Canidium', 'canidium.com', 'Salesforce'],
            ['SP6', 'sp6.io', 'HubSpot'],
            ['SwiftSoft', 'swiftsoft.us', 'None'],
            ['Athena EdTech', 'athena-edtech.com', 'Salesforce'],
            ['MEDIATRENZ', 'mediatrenz.com', 'HubSpot'],
          ],
        ],
        [
          'RevOps leadership search',
          '86 rows · 20h ago',
          ['Person', 'Title', 'Company'],
          [
            ['Sarah Chen', 'VP Sales', 'Acme'],
            ['David Kim', 'CRO', 'RevenueFlow'],
            ['Ana Torres', 'VP RevOps', 'Cadence HQ'],
            ['Priya Raman', 'RevOps Lead', 'Northwind'],
            ['Marcus Webb', 'VP Sales', 'Loop Systems'],
            ['Ruth Alvarez', 'Dir. RevOps', 'Sequent'],
          ],
        ],
        [
          'Series B MarTech accounts',
          '128 rows · 1d ago',
          ['Company Name', 'Funding', 'Intent'],
          [
            ['RevenueFlow', 'Series B · $34M', '92'],
            ['Cadence HQ', 'Series C · $46M', '84'],
            ['Osano', 'Series B · $21M', '71'],
            ['HeadLight', 'Series A · $11M', '68'],
            ['Brightpath', 'Seed · $4M', '63'],
            ['Strata', 'Pre-seed', '52'],
          ],
        ],
      ].map((x) => ({
        name: x[0],
        meta: x[1],
        cols: x[2],
        rows: x[3].map((cells) => ({
          cells,
        })),
        open: () => this.goFile(WORKSPACE_FILE),
      })),
      connectors: [
        ['HubSpot', 'hs', '#EA580C'],
        ['Gmail', 'gm', '#DC2626'],
        ['Slack', 'sl', '#4A154B'],
        ['Salesforce', 'sf', '#0B66C3'],
        ['LinkedIn', 'in', '#0A66C2'],
        ['MCP', 'mcp', '#18181B'],
      ].map((c) => {
        const on = s.connected[c[0]]
        return {
          label: on ? c[0] : 'Connect ' + c[0],
          mark: c[1],
          bg: c[2],
          state: on ? 'Connected' : 'Not connected',
          stateColor: on ? '#15803D' : '#A1A1AA',
          border: on ? '#CDEBD8' : '#E4E4E8',
          act: () => {
            this.setState((st) => ({
              connected: Object.assign({}, st.connected, {
                [c[0]]: !on,
              }),
            }))
            this.flash(on ? c[0] + ' disconnected' : c[0] + ' connected')
          },
        }
      }),
    }
  }
}
