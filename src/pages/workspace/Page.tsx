import { Fragment } from 'react'
import { useModel } from '../../lib/model'
import { cssToObj } from '../../lib/css'
import styles from '../../styles/pages/workspace.css?raw'
import { WorkspaceModel } from './model'

export function WorkspacePage() {
  const {
    projectName,
    sheet,
    isTable,
    isRadar,
    goCopilot,
    goRadar,
    copilotTabStyle,
    radarTabStyle,
    headerStats,
    paneChat,
    paneHistory,
    chatPaneStyle,
    historyPaneStyle,
    showChatPane,
    showHistoryPane,
    newChat,
    convSearch,
    onSearchConv,
    historyGroups,
    questions,
    buildList,
    reasons,
    answerStats,
    agent,
    agentShort,
    agentOpen,
    toolsOpen,
    enrichMenuOpen,
    toggleAgent,
    toggleTools,
    toggleEnrichMenu,
    agents,
    tools,
    enrichments,
    browseEnrichments,
    addAutomation,
    creditsNum,
    creditsLabel,
    creditsWarn,
    creditsColor,
    creditBg,
    creditBorder,
    creditFg,
    creditsOpen,
    openCredits,
    closeCredits,
    topUp,
    usage,
    enrich,
    importOpen,
    exportOpen,
    toggleImport,
    toggleExport,
    importItems,
    exportItems,
    columnsOpen,
    colsBtnStyle,
    toggleColumns,
    showAllCols,
    hideAllCols,
    columnToggles,
    filterOpen,
    filterBadge,
    filterBtnStyle,
    toggleFilter,
    filterRules,
    filterSummary,
    clearFilters,
    sortOpen,
    sortBtnStyle,
    toggleSort,
    sorts,
    sortDirLabel,
    toggleSortDir,
    runPanelOpen,
    runState,
    runStateColor,
    runLabel,
    runPillStyle,
    runDotStyle,
    toggleRunPanel,
    runPct,
    runStats,
    runSteps,
    pauseLabel,
    pauseRun,
    cancelRun,
    sheetTabs,
    renameDraft,
    onRenameDraft,
    commitRename,
    addSheet,
    sheetCompanies,
    sheetLeaders,
    sheetSignals,
    sheetCustom,
    customSheetName,
    seedFromResearch,
    viewChips,
    canSaveView,
    saveView,
    gridCols,
    tableMinWidth,
    rowHeight,
    headCells,
    addColOpen,
    openAddCol,
    closeAddCol,
    colSearch,
    onColSearch,
    colPrompt,
    onColPrompt,
    colTypes,
    colTools,
    colToolsOpen,
    toggleColTools,
    addPromptCol,
    selectAllMark,
    selectAllBg,
    selectAllBorder,
    toggleSelectAll,
    rows,
    rowsFooter,
    tableSearch,
    onTableSearch,
    clearTableSearch,
    hasTableSearch,
    runCellsBtnStyle,
    runCellsCount,
    openRunCells,
    closeRunCells,
    runCellsOpen,
    runCellsConfirm,
    runCellsActive,
    runCellsComplete,
    runCellsRows,
    runCellsTotalLabel,
    runCellsCost,
    runCellsProgress,
    runCellsPct,
    runCellsAffordable,
    confirmRunCells,
    finishRunCells,
    shareOpen,
    openShare,
    closeShare,
    shareLink,
    copyShareLink,
    shareTargets,
    hasSelection,
    selectionLabel,
    footerStats,
    footerRun,
    clearSelection,
    exportSelected,
    showActionBar,
    barIdle,
    barRunning,
    barDone,
    barRows,
    barCostLabel,
    barCost,
    barInsufficient,
    runRowsStyle,
    runSelected,
    deleteSelected,
    cancelJob,
    dismissJob,
    jobPct,
    jobProgress,
    jobRemaining,
    jobSpent,
    jobSummary,
    jobHasFailed,
    jobFailedLabel,
    retryFailed,
    addSelectedToList,
    leaderCols,
    leaders,
    signalCols,
    signalRows,
    contextOpen,
    toggleContext,
    closePanel,
    noSelection,
    hasSelectedCompany,
    emptyBullets,
    recentAccounts,
    tabs,
    tabOverview,
    tabSignals,
    tabPeople,
    tabSocial,
    tabStack,
    sel,
    openDomain,
    openLinkedIn,
    explainGap,
    gtmRows,
    actions,
    signalCards,
    people,
    social,
    stackRows,
    missing,
    notifsOpen,
    toggleNotifs,
    notifications,
    settingsOpen,
    toggleSettings,
    settings,
    likeColor,
    dislikeColor,
    like,
    dislike,
    copyLabel,
    copy,
    regenLabel,
    regenerate,
    share,
    followUps,
    draft,
    onInput,
    send,
    voiceMode,
    typingMode,
    startVoice,
    cancelVoice,
    useVoice,
    micColor,
    waveBars,
    hasAttachment,
    addAttachment,
    clearAttachment,
    sendBg,
    composerRadius,
    gridCells,
    bubbles,
    toast,
    toastText,
  } = useModel(
    () => new WorkspaceModel(),
    (m) => m.renderVals(),
  )

  return (
    <>
      <style>{styles}</style>
      <div
        data-page="workspace"
        className="relative w-full h-[1024px] overflow-hidden flex flex-col bg-[#F5F5F7]"
      >
        {'\n\n  '}
        <header className="h-[46px] flex-none flex items-center justify-between pt-[0] pr-[12px] pb-[0] pl-[14px] bg-[#FFFFFF] [border-bottom:1px_solid_#E5E5EA] z-[30]">
          {'\n    '}
          <div className="flex items-center gap-[12px] [min-width:0]">
            {'\n      '}
            <a
              href="/"
              title="Back to home"
              className="flex items-center gap-[7px] no-underline py-[4px] px-[6px] ml-[-6px] rounded-[6px] hv-u45kwi"
            >
              {'\n        '}
              <svg width="19" height="19" viewBox="0 0 20 20">
                <rect width="20" height="20" rx="5.5" fill="#6D28D9"></rect>
                <circle
                  cx="10"
                  cy="10"
                  r="5.2"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.4"
                ></circle>
                <circle cx="10" cy="10" r="1.6" fill="#FFFFFF"></circle>
              </svg>
              {'\n        '}
              <span className="text-[13.5px] font-[650] tracking-[-0.015em] text-[#18181B]">
                {'Outmate'}
              </span>
              {'\n      '}
            </a>
            {'\n      '}
            <div className="flex items-center gap-[1px] bg-[#F1F1F4] rounded-[7px] p-[2px]">
              {'\n        '}
              <span onClick={goCopilot} style={cssToObj(copilotTabStyle)}>
                {'Copilot'}
              </span>
              {'\n        '}
              <span onClick={goRadar} style={cssToObj(radarTabStyle)}>
                {'Radar'}
              </span>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="w-[1px] h-[18px] bg-[#E5E5EA]"></div>
            {'\n      '}
            <div className="flex items-center gap-[7px] text-[12.5px] [min-width:0]">
              {'\n        '}
              <span className="text-[#3F3F46] font-[600] whitespace-nowrap overflow-hidden text-ellipsis [max-width:250px]">
                <span>{projectName}</span>
              </span>
              {'\n        '}
              <span className="text-[#C4C4CB]">{'/'}</span>
              {'\n        '}
              <span className="text-[#71717A] whitespace-nowrap">
                <span>{sheet}</span>
              </span>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n\n    '}
          <div className="flex items-center gap-[7px]">
            {'\n      '}
            <div className="flex items-center gap-[6px] h-[28px] py-[0] px-[9px] [border:1px_solid_#E5E5EA] rounded-[6px] bg-[#FAFAFB] w-[180px] cursor-pointer hv-u2196y">
              {'\n        '}
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#A1A1AA"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="9" r="5.6"></circle>
                <path d="M13.2 13.2L17 17"></path>
              </svg>
              {'\n        '}
              <span className="text-[11.5px] text-[#A1A1AA]">{'Search'}</span>
              {'\n        '}
              <span className="ml-[auto] text-[9.5px] text-[#B4B4BB] [border:1px_solid_#E5E5EA] rounded-[3px] py-[1px] px-[4px] bg-[#FFFFFF]">
                {'⌘K'}
              </span>
              {'\n      '}
            </div>
            {'\n      '}
            <div
              onClick={openCredits}
              className="hv-1a8qwwd"
              style={cssToObj(
                `display:flex; align-items:center; gap:6px; height:28px; padding:0 9px; border-radius:6px; cursor:pointer; font-size:11.5px; font-weight:600; border:1px solid ${creditBorder}; background:${creditBg}; color:${creditFg}`,
              )}
            >
              {'\n        '}
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M11 2.5L4.5 11.5H9l-.6 6 6.6-9H10.4z"></path>
              </svg>
              {'\n        '}
              <span>{creditsLabel}</span>
              {'\n      '}
            </div>
            {'\n      '}
            <button
              onClick={toggleNotifs}
              className="h-[28px] w-[28px] flex items-center justify-center [border:1px_solid_#E5E5EA] bg-[#FFFFFF] rounded-[6px] cursor-pointer relative hv-u69wm2"
            >
              {'\n        '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#52525B"
                strokeWidth="1.5"
              >
                <path d="M10 3a4.6 4.6 0 00-4.6 4.6c0 3.6-1.4 4.7-1.4 4.7h12s-1.4-1.1-1.4-4.7A4.6 4.6 0 0010 3z"></path>
                <path d="M8.6 15.2a1.6 1.6 0 002.8 0"></path>
              </svg>
              {'\n        '}
              <span className="absolute top-[4px] right-[4px] w-[6px] h-[6px] rounded-full bg-[#EA580C] [border:1.5px_solid_#FFFFFF]"></span>
              {'\n      '}
            </button>
            {'\n      '}
            <button
              onClick={toggleSettings}
              className="h-[28px] w-[28px] flex items-center justify-center [border:1px_solid_#E5E5EA] bg-[#FFFFFF] rounded-[6px] cursor-pointer hv-u69wm2"
            >
              {'\n        '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#52525B"
                strokeWidth="1.5"
              >
                <circle cx="10" cy="10" r="2.6"></circle>
                <path d="M16.2 12.1a1.4 1.4 0 00.3 1.5l.1.1a1.7 1.7 0 11-2.4 2.4l-.1-.1a1.4 1.4 0 00-2.3 1v.2a1.7 1.7 0 11-3.4 0v-.1a1.4 1.4 0 00-2.4-.9l-.1.1A1.7 1.7 0 113.4 14l.1-.1a1.4 1.4 0 00-1-2.3H2.3a1.7 1.7 0 110-3.4h.1a1.4 1.4 0 001-2.4l-.1-.1A1.7 1.7 0 015.7 3.3l.1.1a1.4 1.4 0 002.3-1V2.3a1.7 1.7 0 113.4 0v.1a1.4 1.4 0 002.3 1l.1-.1a1.7 1.7 0 112.4 2.4l-.1.1a1.4 1.4 0 001 2.3h.2a1.7 1.7 0 010 3.4h-.1a1.4 1.4 0 00-1.1.6z"></path>
              </svg>
              {'\n      '}
            </button>
            {'\n      '}
            <div className="w-[26px] h-[26px] rounded-full bg-[#EDE4FD] text-[#5B21B6] text-[10px] font-[650] flex items-center justify-center cursor-pointer">
              {'GA'}
            </div>
            {'\n    '}
          </div>
          {'\n  '}
        </header>
        {'\n\n  '}
        <div className="flex-1 flex [min-height:0]">
          {'\n\n    '}
          <aside className="w-[306px] flex-none bg-[#FFFFFF] [border-right:1px_solid_#E5E5EA] flex flex-col [min-height:0]">
            {'\n      '}
            <div className="flex-none h-[38px] flex items-center gap-[2px] py-[0] px-[8px] [border-bottom:1px_solid_#EFEFF2]">
              {'\n        '}
              <span onClick={showChatPane} style={cssToObj(chatPaneStyle)}>
                {'Copilot'}
              </span>
              {'\n        '}
              <span onClick={showHistoryPane} style={cssToObj(historyPaneStyle)}>
                {'History'}
              </span>
              {'\n        '}
              <button
                onClick={newChat}
                className="ml-[auto] h-[24px] flex items-center gap-[5px] py-[0] px-[8px] [border:1px_solid_#DDD6F3] bg-[#F5F1FD] text-[#5B21B6] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-ttjng3"
              >
                {'\n          '}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10 4.5v11M4.5 10h11"></path>
                </svg>
                {'\n          New\n        '}
              </button>
              {'\n      '}
            </div>
            {'\n\n      '}
            {paneHistory ? (
              <>
                {'\n        '}
                <div className="flex-1 [min-height:0] flex flex-col">
                  {'\n          '}
                  <div className="pt-[10px] px-[10px] pb-[8px]">
                    {'\n            '}
                    <div className="flex items-center gap-[6px] h-[28px] py-[0] px-[9px] [border:1px_solid_#E5E5EA] rounded-[6px] bg-[#FAFAFB]">
                      {'\n              '}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#A1A1AA"
                        strokeWidth="1.8"
                      >
                        <circle cx="9" cy="9" r="5.6"></circle>
                        <path d="M13.2 13.2L17 17"></path>
                      </svg>
                      {'\n              '}
                      <input
                        onChange={onSearchConv}
                        value={convSearch}
                        placeholder="Search conversations"
                        className="[border:none] outline-none bg-transparent text-[11.5px] w-full text-[#3F3F46]"
                      />
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex-1 [min-height:0] overflow-y-auto pt-[0] px-[8px] pb-[10px]">
                    {'\n            '}
                    {(historyGroups ?? []).map((g: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div>
                          {'\n                '}
                          <div className="pt-[9px] px-[7px] pb-[5px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase">
                            <span>{g.label}</span>
                          </div>
                          {'\n                '}
                          {(g.items ?? []).map((h: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={h.open}
                                className="hv-u4v0t1"
                                style={cssToObj(
                                  `position:relative; display:flex; align-items:flex-start; gap:8px; padding:7px 8px; border-radius:6px; cursor:pointer; margin-bottom:1px; background:${h.bg}`,
                                )}
                              >
                                {'\n                    '}
                                <div
                                  style={cssToObj(
                                    `width:2px; align-self:stretch; border-radius:2px; background:${h.bar}`,
                                  )}
                                ></div>
                                {'\n                    '}
                                <div className="[min-width:0] flex-1">
                                  {'\n                      '}
                                  <div
                                    style={cssToObj(
                                      `font-size:12px; font-weight:${h.weight}; color:${h.color}; line-height:1.35; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                                    )}
                                  >
                                    <span>{h.title}</span>
                                  </div>
                                  {'\n                      '}
                                  <div className="flex items-center gap-[5px] mt-[2px]">
                                    {'\n                        '}
                                    {h.running ? (
                                      <>
                                        {'\n                          '}
                                        <span className="w-[5px] h-[5px] rounded-full bg-[#22A15D] [animation:pulse_1.6s_ease-in-out_infinite]"></span>
                                        {'\n                        '}
                                      </>
                                    ) : null}
                                    {'\n                        '}
                                    <span className="text-[10.5px] text-[#A1A1AA]">
                                      <span>{h.meta}</span>
                                    </span>
                                    {'\n                      '}
                                  </div>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <span
                                  onClick={h.menu}
                                  className="w-[18px] h-[18px] flex items-center justify-center rounded-[4px] text-[#B4B4BB] text-[13px] leading-[1] flex-none hv-1wubm68"
                                >
                                  {'⋯'}
                                </span>
                                {'\n                    '}
                                {h.menuOpen ? (
                                  <>
                                    {'\n                      '}
                                    <div className="absolute top-[28px] right-[6px] w-[134px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_10px_26px_rgba(24,24,27,.14)] p-[4px] z-[30] [animation:pop_.12s_ease-out]">
                                      {'\n                        '}
                                      <div
                                        onClick={h.act}
                                        className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                                      >
                                        {'Rename'}
                                      </div>
                                      {'\n                        '}
                                      <div
                                        onClick={h.act}
                                        className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                                      >
                                        {'Archive'}
                                      </div>
                                      {'\n                        '}
                                      <div
                                        onClick={h.act}
                                        className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#B91C1C] cursor-pointer hv-ug5na5"
                                      >
                                        {'Delete'}
                                      </div>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </>
                                ) : null}
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex-none [border-top:1px_solid_#EFEFF2] py-[10px] px-[12px] flex flex-col gap-[6px] bg-[#FAFAFB]">
                    {'\n            '}
                    <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase">
                      {'Radar summary'}
                    </div>
                    {'\n            '}
                    <div className="flex justify-between text-[11.5px] text-[#52525B]">
                      <span>{'Accounts tracked'}</span>
                      <span className="font-[600] text-[#18181B] tabular-nums">{'1,284'}</span>
                    </div>
                    {'\n            '}
                    <div className="flex justify-between text-[11.5px] text-[#52525B]">
                      <span>{'Signals · 7d'}</span>
                      <span className="font-[600] text-[#18181B] tabular-nums">{'642'}</span>
                    </div>
                    {'\n            '}
                    <div className="flex justify-between text-[11.5px] text-[#52525B]">
                      <span>{'High intent'}</span>
                      <span className="font-[600] text-[#15803D] tabular-nums">{'42'}</span>
                    </div>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {paneChat ? (
              <>
                {'\n        '}
                <div className="flex-1 [min-height:0] flex flex-col">
                  {'\n          '}
                  <div className="flex-1 [min-height:0] overflow-y-auto pt-[12px] px-[12px] pb-[6px] flex flex-col gap-[13px]">
                    {'\n\n            '}
                    <div className="flex justify-end">
                      {'\n              '}
                      <div className="[max-width:88%] bg-[#F4F4F6] [border:1px_solid_#EAEAEE] rounded-[10px_10px_3px_10px] py-[9px] px-[11px] text-[12.5px] leading-[1.5] text-[#27272A]">
                        {
                          "Find B2B SaaS companies with 50–500 employees that currently use HubSpot or Salesforce but don't have a unified GTM platform."
                        }
                      </div>
                      {'\n            '}
                    </div>
                    {'\n\n            '}
                    <div className="flex flex-col gap-[9px]">
                      {'\n              '}
                      <div className="text-[12.5px] leading-[1.55] text-[#27272A]">
                        {'Before I build the list — six quick calls:'}
                      </div>
                      {'\n              '}
                      <div className="[border:1px_solid_#E8E8EC] rounded-[9px] overflow-hidden">
                        {'\n                '}
                        {(questions ?? []).map((q: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <div className="py-[9px] px-[10px] [border-bottom:1px_solid_#F3F3F5]">
                              {'\n                    '}
                              <div className="flex items-center gap-[7px] mb-[6px]">
                                {'\n                      '}
                                <span className="text-[10px] font-[650] text-[#B4B4BB] tabular-nums">
                                  <span>{q.n}</span>
                                </span>
                                {'\n                      '}
                                <span className="text-[11px] font-[600] text-[#52525B]">
                                  <span>{q.label}</span>
                                </span>
                                {'\n                    '}
                              </div>
                              {'\n                    '}
                              <div className="flex flex-wrap gap-[5px]">
                                {'\n                      '}
                                {(q.chips ?? []).map((c: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <span onClick={c.toggle} style={cssToObj(c.style)}>
                                      <span>{c.v}</span>
                                    </span>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n                '}
                        <div className="flex items-center justify-between py-[9px] px-[10px] bg-[#FAFAFB]">
                          {'\n                  '}
                          <span className="text-[10.5px] text-[#8E8E96]">{'Est. 420 credits'}</span>
                          {'\n                  '}
                          <button
                            onClick={buildList}
                            className="h-[26px] py-[0] px-[11px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-jdi8ic"
                          >
                            {'Build target list'}
                          </button>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n\n            '}
                    <div className="flex flex-col gap-[10px]">
                      {'\n              '}
                      <p className="m-[0] text-[12.5px] leading-[1.6] text-[#27272A]">
                        <strong className="font-[650]">{'Found 42 qualifying accounts'}</strong>
                        {
                          ' from 1,284 tracked companies. 2,370 cells enriched across firmographics, contacts, CRM fingerprints and signals.'
                        }
                      </p>
                      {'\n              '}
                      <div className="[border:1px_solid_#E8E8EC] rounded-[9px] bg-[#FAFAFB] py-[10px] px-[11px]">
                        {'\n                '}
                        <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[7px]">
                          {'Why these accounts?'}
                        </div>
                        {'\n                '}
                        {(reasons ?? []).map((r: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <div className="flex items-start gap-[7px] text-[11.5px] text-[#52525B] leading-[1.45] mb-[4px]">
                              {'\n                    '}
                              <span className="w-[4px] h-[4px] rounded-full bg-[#C4B5FD] mt-[6px] flex-none"></span>
                              {'\n                    '}
                              <span>
                                <span>{r}</span>
                              </span>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n              '}
                      </div>
                      {'\n              '}
                      <div className="flex gap-[6px]">
                        {'\n                '}
                        {(answerStats ?? []).map((a: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <div className="flex-1 [border:1px_solid_#EDEDF0] rounded-[8px] py-[7px] px-[9px]">
                              {'\n                    '}
                              <div className="text-[14px] font-[650] tabular-nums">
                                <span>{a.value}</span>
                              </div>
                              {'\n                    '}
                              <div className="text-[10px] text-[#8E8E96] leading-[1.3]">
                                <span>{a.label}</span>
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n              '}
                      </div>
                      {'\n\n              '}
                      <div className="flex items-center gap-[1px]">
                        {'\n                '}
                        <button
                          onClick={like}
                          className="w-[25px] h-[25px] flex items-center justify-center [border:none] bg-transparent rounded-[5px] cursor-pointer hv-u45kwi"
                        >
                          {'\n                  '}
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke={likeColor}
                            strokeWidth="1.5"
                          >
                            <path d="M6.5 17V8.4l3.4-5a1.4 1.4 0 012.5.8v3.4h3.2a1.5 1.5 0 011.5 1.8l-1.1 5.4A1.9 1.9 0 0114.1 17z"></path>
                            <path d="M6.5 8.6H3.8V17h2.7"></path>
                          </svg>
                          {'\n                '}
                        </button>
                        {'\n                '}
                        <button
                          onClick={dislike}
                          className="w-[25px] h-[25px] flex items-center justify-center [border:none] bg-transparent rounded-[5px] cursor-pointer hv-u45kwi"
                        >
                          {'\n                  '}
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke={dislikeColor}
                            strokeWidth="1.5"
                          >
                            <path d="M13.5 3v8.6l-3.4 5a1.4 1.4 0 01-2.5-.8v-3.4H4.4a1.5 1.5 0 01-1.5-1.8l1.1-5.4A1.9 1.9 0 015.9 3z"></path>
                            <path d="M13.5 11.4h2.7V3h-2.7"></path>
                          </svg>
                          {'\n                '}
                        </button>
                        {'\n                '}
                        <div className="w-[1px] h-[14px] bg-[#EAEAEE] my-[0] mx-[4px]"></div>
                        {'\n                '}
                        <button
                          onClick={copy}
                          className="h-[25px] py-[0] px-[7px] flex items-center gap-[4px] [border:none] bg-transparent rounded-[5px] cursor-pointer text-[11px] text-[#8E8E96] hv-jj6th"
                        >
                          <span>{copyLabel}</span>
                        </button>
                        {'\n                '}
                        <button
                          onClick={regenerate}
                          className="h-[25px] py-[0] px-[7px] flex items-center gap-[4px] [border:none] bg-transparent rounded-[5px] cursor-pointer text-[11px] text-[#8E8E96] hv-jj6th"
                        >
                          <span>{regenLabel}</span>
                        </button>
                        {'\n                '}
                        <button
                          onClick={share}
                          className="h-[25px] py-[0] px-[7px] flex items-center gap-[4px] [border:none] bg-transparent rounded-[5px] cursor-pointer text-[11px] text-[#8E8E96] hv-jj6th"
                        >
                          {'Share'}
                        </button>
                        {'\n              '}
                      </div>
                      {'\n\n              '}
                      <div className="[border-top:1px_solid_#F1F1F3] pt-[9px]">
                        {'\n                '}
                        <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase mb-[4px]">
                          {'Suggested follow-ups'}
                        </div>
                        {'\n                '}
                        {(followUps ?? []).map((f: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <div
                              onClick={f.pick}
                              className="flex items-center gap-[8px] py-[8px] px-[6px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer rounded-[5px] hv-udcbnc"
                            >
                              {'\n                    '}
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="#A78BFA"
                                strokeWidth="1.6"
                                className="flex-none"
                              >
                                <path d="M10 3l1.7 4 4 1.7-4 1.7L10 14.4l-1.7-4-4-1.7 4-1.7z"></path>
                              </svg>
                              {'\n                    '}
                              <span className="flex-1 text-[11.5px] text-[#3F3F46] leading-[1.4]">
                                <span>{f.text}</span>
                              </span>
                              {'\n                    '}
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="#C4C4CB"
                                strokeWidth="1.8"
                                className="flex-none"
                              >
                                <path d="M4 10h11M11 6l4 4-4 4"></path>
                              </svg>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="flex-none pt-[0] px-[12px] pb-[12px]">
                    {'\n            '}
                    {hasAttachment ? (
                      <>
                        {'\n              '}
                        <div className="mb-[8px] flex items-center gap-[8px] [border:1px_solid_#E4E4E8] rounded-[8px] py-[8px] px-[9px] bg-[#FAFAFB]">
                          {'\n                '}
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#15803D"
                            strokeWidth="1.6"
                            className="flex-none"
                          >
                            <path d="M5 4.5h6l4 4V16a1 1 0 01-1 1H6a1 1 0 01-1-1z"></path>
                            <path d="M11 4.5v4h4"></path>
                          </svg>
                          {'\n                '}
                          <div className="[min-width:0] flex-1">
                            {'\n                  '}
                            <div className="text-[11.5px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                              {'target_accounts.csv'}
                            </div>
                            {'\n                  '}
                            <div className="text-[10px] text-[#A1A1AA]">{'1,284 rows · ready'}</div>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <button
                            onClick={enrich}
                            className="h-[23px] py-[0] px-[8px] [border:1px_solid_#DDD6F3] bg-[#F5F1FD] text-[#5B21B6] rounded-[5px] text-[11px] font-[600] cursor-pointer hv-ttjng3"
                          >
                            {'Enrich'}
                          </button>
                          {'\n                '}
                          <button
                            onClick={clearAttachment}
                            className="w-[22px] h-[22px] [border:none] bg-transparent rounded-[5px] cursor-pointer text-[#A1A1AA] text-[13px] leading-[1] hv-u2196x"
                          >
                            {'×'}
                          </button>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {creditsWarn ? (
                      <>
                        {'\n              '}
                        <div
                          style={cssToObj(
                            'display:flex; align-items:center; justify-content:space-between; border:1px solid #FED7AA; border-bottom:none; border-radius:9px 9px 0 0; background:#FFF8F1; padding:7px 10px',
                          )}
                        >
                          {'\n                '}
                          <span className="flex items-center gap-[6px] text-[11.5px] font-[600] text-[#C2410C]">
                            {'\n                  '}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#EA580C"
                              strokeWidth="1.9"
                            >
                              <path d="M11 2.5L4.5 11.5H9l-.6 6 6.6-9H10.4z"></path>
                            </svg>
                            {'\n                  '}
                            <span>{creditsLabel}</span>
                            {' remaining\n                '}
                          </span>
                          {'\n                '}
                          <button
                            onClick={openCredits}
                            className="h-[23px] py-[0] px-[9px] [border:1px_solid_#F3C99B] bg-[#FFFFFF] text-[#C2410C] rounded-[5px] text-[11px] font-[600] cursor-pointer hv-ugv1h8"
                          >
                            {'Top up'}
                          </button>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    <div
                      style={cssToObj(
                        `border:1px solid #E4E4E8; border-radius:${composerRadius}; background:#FFFFFF; box-shadow:0 1px 2px rgba(24,24,27,.05)`,
                      )}
                    >
                      {'\n              '}
                      {voiceMode ? (
                        <>
                          {'\n                '}
                          <div className="pt-[12px] px-[11px] pb-[8px] flex flex-col gap-[9px]">
                            {'\n                  '}
                            <div className="flex items-center gap-[9px]">
                              {'\n                    '}
                              <span className="flex items-center gap-[6px] text-[11.5px] font-[600] text-[#B91C1C] whitespace-nowrap">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#DC2626] [animation:pulse_1.2s_ease-in-out_infinite]"></span>
                                {'Listening…'}
                              </span>
                              {'\n                    '}
                              <div className="flex-1 flex items-center gap-[2px] h-[22px]">
                                {'\n                      '}
                                {(waveBars ?? []).map((w: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <span
                                      style={cssToObj(
                                        `flex:1; height:18px; border-radius:2px; background:#DDD6F3; transform-origin:center; animation:bar ${w.dur} ease-in-out infinite; animation-delay:${w.delay}`,
                                      )}
                                    ></span>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                    '}
                              <span className="text-[11px] text-[#A1A1AA] tabular-nums">
                                {'0:07'}
                              </span>
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            <div className="flex gap-[6px] justify-end">
                              {'\n                    '}
                              <button
                                onClick={cancelVoice}
                                className="h-[25px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11px] text-[#52525B] cursor-pointer hv-u4v0t1"
                              >
                                {'Discard'}
                              </button>
                              {'\n                    '}
                              <button
                                onClick={useVoice}
                                className="h-[25px] py-[0] px-[10px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[11px] font-[600] cursor-pointer hv-jdi8ic"
                              >
                                {'Use recording'}
                              </button>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </>
                      ) : null}
                      {'\n\n              '}
                      {typingMode ? (
                        <>
                          {'\n                '}
                          <div className="pt-[10px] px-[11px] pb-[0]">
                            {'\n                  '}
                            <textarea
                              onChange={onInput}
                              value={draft}
                              placeholder="Find leads, enrich data, analyze signals…"
                              className="w-full [border:none] outline-none resize-none text-[12.5px] leading-[1.5] text-[#27272A] [min-height:40px] bg-transparent"
                            ></textarea>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </>
                      ) : null}
                      {'\n\n              '}
                      <div className="flex items-center justify-between pt-[6px] px-[8px] pb-[7px] relative">
                        {'\n                '}
                        <div className="flex items-center gap-[2px]">
                          {'\n                  '}
                          <div
                            onClick={toggleAgent}
                            className="flex items-center gap-[5px] h-[25px] py-[0] px-[7px] rounded-[6px] cursor-pointer text-[11.5px] text-[#52525B] font-[550] hv-u45kwi"
                          >
                            {'\n                    '}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                            >
                              <rect x="3.5" y="6" width="13" height="10" rx="3"></rect>
                              <path d="M10 3v3"></path>
                              <circle cx="7.6" cy="11" r="1"></circle>
                              <circle cx="12.4" cy="11" r="1"></circle>
                            </svg>
                            {'\n                    '}
                            <span>{agentShort}</span>
                            {'\n                    '}
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#A1A1AA"
                              strokeWidth="2.4"
                            >
                              <path d="M5 8l5 5 5-5"></path>
                            </svg>
                            {'\n                  '}
                          </div>
                          {'\n                  '}
                          <button
                            onClick={toggleTools}
                            title="Tools"
                            className="w-[25px] h-[25px] flex items-center justify-center [border:none] bg-transparent rounded-[6px] cursor-pointer hv-u45kwi"
                          >
                            {'\n                    '}
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#52525B"
                              strokeWidth="1.5"
                            >
                              <path d="M13.4 3.4a4 4 0 00-5 5L3.6 13.2a1.6 1.6 0 002.2 2.2l4.8-4.8a4 4 0 005-5l-2.3 2.3-2.1-.6-.6-2.1z"></path>
                            </svg>
                            {'\n                  '}
                          </button>
                          {'\n                  '}
                          <button
                            onClick={toggleEnrichMenu}
                            title="Enrichment"
                            className="w-[25px] h-[25px] flex items-center justify-center [border:none] bg-transparent rounded-[6px] cursor-pointer hv-u45kwi"
                          >
                            {'\n                    '}
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#52525B"
                              strokeWidth="1.6"
                            >
                              <path d="M10 3.4l1.6 3.8 3.8 1.6-3.8 1.6L10 14.2l-1.6-3.8L4.6 8.8l3.8-1.6z"></path>
                            </svg>
                            {'\n                  '}
                          </button>
                          {'\n                  '}
                          {agentOpen ? (
                            <>
                              {'\n                    '}
                              <div className="absolute bottom-[32px] left-[0] w-[230px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_14px_34px_rgba(24,24,27,.14)] p-[5px] z-[40] [animation:pop_.13s_ease-out]">
                                {'\n                      '}
                                {(agents ?? []).map((a: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <div
                                      onClick={a.pick}
                                      className="hv-u4v0t1"
                                      style={cssToObj(
                                        `display:flex; align-items:flex-start; gap:8px; padding:6px 7px; border-radius:6px; cursor:pointer; background:${a.bg}`,
                                      )}
                                    >
                                      {'\n                          '}
                                      <div
                                        style={cssToObj(
                                          `width:20px; height:20px; border-radius:5px; flex:none; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; background:${a.chipBg}; color:${a.chipFg}`,
                                        )}
                                      >
                                        <span>{a.abbr}</span>
                                      </div>
                                      {'\n                          '}
                                      <div className="[min-width:0]">
                                        {'\n                            '}
                                        <div className="text-[11.5px] font-[600] text-[#18181B]">
                                          <span>{a.name}</span>
                                        </div>
                                        {'\n                            '}
                                        <div className="text-[10px] text-[#8E8E96] leading-[1.35]">
                                          <span>{a.desc}</span>
                                        </div>
                                        {'\n                          '}
                                      </div>
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </>
                          ) : null}
                          {'\n                  '}
                          {toolsOpen ? (
                            <>
                              {'\n                    '}
                              <div className="absolute bottom-[32px] left-[26px] w-[216px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_14px_34px_rgba(24,24,27,.14)] p-[5px] z-[40] [animation:pop_.13s_ease-out]">
                                {'\n                      '}
                                <div className="pt-[5px] px-[7px] pb-[3px] text-[9.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                  {'Research tools'}
                                </div>
                                {'\n                      '}
                                {(tools ?? []).map((t: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <div
                                      onClick={t.pick}
                                      className="flex items-center justify-between gap-[8px] py-[5px] px-[7px] rounded-[5px] cursor-pointer text-[11.5px] text-[#3F3F46] hv-u4v0t1"
                                    >
                                      {'\n                          '}
                                      <span>
                                        <span>{t.name}</span>
                                      </span>
                                      <span className="text-[10px] text-[#A1A1AA]">
                                        <span>{t.cost}</span>
                                      </span>
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </>
                          ) : null}
                          {'\n                  '}
                          {enrichMenuOpen ? (
                            <>
                              {'\n                    '}
                              <div className="absolute bottom-[32px] left-[52px] w-[222px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_14px_34px_rgba(24,24,27,.14)] p-[5px] z-[40] [animation:pop_.13s_ease-out]">
                                {'\n                      '}
                                <div className="pt-[5px] px-[7px] pb-[3px] text-[9.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                  {'Enrichment'}
                                </div>
                                {'\n                      '}
                                {(enrichments ?? []).map((e: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <div
                                      onClick={e.pick}
                                      className="flex items-center justify-between gap-[8px] py-[5px] px-[7px] rounded-[5px] cursor-pointer text-[11.5px] text-[#3F3F46] hv-u4v0t1"
                                    >
                                      {'\n                          '}
                                      <span>
                                        <span>{e.label}</span>
                                      </span>
                                      <span className="text-[10px] text-[#A1A1AA]">
                                        <span>{e.cost}</span>
                                      </span>
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </>
                          ) : null}
                          {'\n                '}
                        </div>
                        {'\n                '}
                        <div className="flex items-center gap-[2px]">
                          {'\n                  '}
                          <button
                            onClick={startVoice}
                            className="w-[26px] h-[26px] flex items-center justify-center [border:none] bg-transparent rounded-[6px] cursor-pointer hv-u45kwi"
                          >
                            {'\n                    '}
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke={micColor}
                              strokeWidth="1.5"
                            >
                              <rect x="7.6" y="3" width="4.8" height="9" rx="2.4"></rect>
                              <path d="M4.8 9.6a5.2 5.2 0 0010.4 0M10 14.8V17"></path>
                            </svg>
                            {'\n                  '}
                          </button>
                          {'\n                  '}
                          <button
                            onClick={addAttachment}
                            className="w-[26px] h-[26px] flex items-center justify-center [border:none] bg-transparent rounded-[6px] cursor-pointer hv-u45kwi"
                          >
                            {'\n                    '}
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#71717A"
                              strokeWidth="1.5"
                            >
                              <path d="M14.5 9.2l-5.2 5.2a3.2 3.2 0 01-4.5-4.5l5.7-5.7a2.1 2.1 0 013 3l-5.7 5.7a1 1 0 01-1.5-1.5l5.2-5.2"></path>
                            </svg>
                            {'\n                  '}
                          </button>
                          {'\n                  '}
                          <button
                            onClick={send}
                            className="hv-1a8qwtm"
                            style={cssToObj(
                              `width:28px; height:28px; display:flex; align-items:center; justify-content:center; border:none; background:${sendBg}; border-radius:7px; cursor:pointer; margin-left:2px`,
                            )}
                          >
                            {'\n                    '}
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            >
                              <path d="M10 16V5M5.5 9.5L10 5l4.5 4.5"></path>
                            </svg>
                            {'\n                  '}
                          </button>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n    '}
          </aside>
          {'\n\n    '}
          <main className="flex-1 [min-width:0] flex flex-col bg-[#FFFFFF] relative">
            {'\n\n      '}
            {isRadar ? (
              <>
                {'\n        '}
                <div className="flex-1 [min-height:0] flex flex-col">
                  {'\n          '}
                  <div className="flex-none pt-[12px] px-[16px] pb-[10px] [border-bottom:1px_solid_#EFEFF2] flex items-center justify-between">
                    {'\n            '}
                    <div>
                      {'\n              '}
                      <div className="text-[13px] font-[650]">{'GTM Radar'}</div>
                      {'\n              '}
                      <div className="text-[11px] text-[#8E8E96]">
                        {'Intent × ICP fit · bubble size = signal count · opacity = freshness'}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <button
                      onClick={goCopilot}
                      className="h-[27px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer hv-u4v0t1"
                    >
                      {'Back to table'}
                    </button>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex-none flex items-center gap-[5px] py-[8px] px-[16px] [border-bottom:1px_solid_#EFEFF2] flex-wrap">
                    {'\n            '}
                    {(viewChips ?? []).map((f: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <span onClick={f.pick} style={cssToObj(f.style)}>
                          <span>{f.label}</span>
                        </span>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex-1 [min-height:0] pt-[18px] px-[20px] pb-[14px] flex flex-col">
                    {'\n            '}
                    <div className="flex-1 [min-height:0] relative [border:1px_solid_#EDEDF0] rounded-[10px] bg-[#FCFCFD]">
                      {'\n              '}
                      <div className="absolute [inset:0] grid [grid-template-columns:repeat(4,1fr)] [grid-template-rows:repeat(4,1fr)]">
                        {'\n                '}
                        {(gridCells ?? []).map((g: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <div className="[border-right:1px_solid_#F3F3F5] [border-bottom:1px_solid_#F3F3F5]"></div>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n              '}
                      </div>
                      {'\n              '}
                      <div className="absolute right-[12px] top-[10px] text-[10px] font-[650] text-[#BCACE9] tracking-[.05em] uppercase">
                        {'Act now'}
                      </div>
                      {'\n              '}
                      <div className="absolute left-[12px] bottom-[10px] text-[10px] font-[650] text-[#C9C9D0] tracking-[.05em] uppercase">
                        {'Monitor'}
                      </div>
                      {'\n              '}
                      {(bubbles ?? []).map((b: any, __i: number) => (
                        <Fragment key={__i}>
                          {'\n                '}
                          <div
                            onClick={b.open}
                            title={b.title}
                            className="hv-1a8qwrs"
                            style={cssToObj(
                              `position:absolute; left:${b.x}; bottom:${b.y}; width:${b.size}; height:${b.size}; margin-left:${b.off}; margin-bottom:${b.off}; border-radius:50%; background:${b.bg}; border:1.5px solid #FFFFFF; opacity:${b.opacity}; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; color:#FFFFFF`,
                            )}
                          >
                            <span>{b.logo}</span>
                          </div>
                          {'\n              '}
                        </Fragment>
                      ))}
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="flex justify-between pt-[8px]">
                      {'\n              '}
                      <span className="text-[10.5px] text-[#8E8E96]">{'Intent score →'}</span>
                      {'\n              '}
                      <span className="text-[10.5px] text-[#8E8E96]">
                        {'Click a bubble to open the account panel'}
                      </span>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isTable ? (
              <>
                {'\n        '}
                <div className="flex-1 [min-height:0] flex flex-col relative">
                  {'\n\n          '}
                  <div className="flex-none pt-[11px] px-[16px] pb-[10px] [border-bottom:1px_solid_#EFEFF2]">
                    {'\n            '}
                    <div className="flex items-center gap-[9px]">
                      {'\n              '}
                      <span className="text-[14px] font-[650] tracking-[-0.015em]">
                        <span>{projectName}</span>
                      </span>
                      {'\n              '}
                      <span className="flex items-center gap-[5px] py-[2px] px-[7px] rounded-[5px] bg-[#ECFDF3] text-[#15803D] text-[10.5px] font-[600]">
                        {'\n                '}
                        <span className="w-[5px] h-[5px] rounded-full bg-[#22A15D] [animation:pulse_1.8s_ease-in-out_infinite]"></span>
                        {'Live\n              '}
                      </span>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="flex items-center gap-[10px] mt-[6px]">
                      {'\n              '}
                      <span className="text-[11.5px] text-[#71717A] leading-[1.45] overflow-hidden text-ellipsis whitespace-nowrap [max-width:560px]">
                        {
                          "“Find B2B SaaS companies with 50–500 employees that currently use HubSpot or Salesforce but don't have a unified GTM platform.”"
                        }
                      </span>
                      {'\n              '}
                      <div className="ml-[auto] flex items-center gap-[12px] whitespace-nowrap">
                        {'\n                '}
                        {(headerStats ?? []).map((h: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <span className="text-[11px] text-[#8E8E96]">
                              <strong className="font-[650] text-[#18181B] tabular-nums">
                                <span>{h.value}</span>
                              </strong>{' '}
                              <span>{h.label}</span>
                            </span>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div
                    style={cssToObj(
                      'flex:none; display:flex; flex-wrap:wrap; align-items:center; gap:6px; row-gap:7px; padding:8px 16px; border-bottom:1px solid #EFEFF2; position:relative',
                    )}
                  >
                    {'\n            '}
                    <button
                      onClick={addAutomation}
                      className="flex-none whitespace-nowrap h-[27px] py-[0] px-[10px] [border:1px_solid_#DDD6F3] bg-[#F5F1FD] text-[#5B21B6] rounded-[6px] text-[11.5px] font-[600] cursor-pointer flex items-center gap-[5px] hv-ttjng3"
                    >
                      {'\n              '}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                      >
                        <path d="M6 4l9 6-9 6z"></path>
                      </svg>
                      {'\n              Add automation\n            '}
                    </button>
                    {'\n            '}
                    <button
                      onClick={openAddCol}
                      className="flex-none whitespace-nowrap h-[27px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] text-[#3F3F46] rounded-[6px] text-[11.5px] font-[600] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                    >
                      {'\n              '}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#6D28D9"
                        strokeWidth="1.9"
                      >
                        <path d="M11 2.5L4.5 11.5H9l-.6 6 6.6-9H10.4z"></path>
                      </svg>
                      {'\n              Add enrichment\n            '}
                    </button>
                    {'\n            '}
                    <div className="w-[1px] h-[18px] bg-[#EAEAEE] my-[0] mx-[2px]"></div>
                    {'\n            '}
                    <button
                      onClick={toggleImport}
                      className="flex-none whitespace-nowrap h-[27px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                    >
                      {'\n              '}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#71717A"
                        strokeWidth="1.8"
                      >
                        <path d="M10 13V4M6 8l4-4 4 4M4 15.5h12"></path>
                      </svg>
                      {'\n              Import\n              '}
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#A1A1AA"
                        strokeWidth="2.4"
                      >
                        <path d="M5 8l5 5 5-5"></path>
                      </svg>
                      {'\n            '}
                    </button>
                    {'\n            '}
                    <button
                      onClick={toggleExport}
                      className="flex-none whitespace-nowrap h-[27px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                    >
                      {'\n              '}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#71717A"
                        strokeWidth="1.8"
                      >
                        <path d="M10 4v9M6 9l4 4 4-4M4 15.5h12"></path>
                      </svg>
                      {'\n              Export\n              '}
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#A1A1AA"
                        strokeWidth="2.4"
                      >
                        <path d="M5 8l5 5 5-5"></path>
                      </svg>
                      {'\n            '}
                    </button>
                    {'\n            '}
                    <div className="w-[1px] h-[18px] bg-[#EAEAEE] my-[0] mx-[2px]"></div>
                    {'\n            '}
                    <div className="flex flex-none items-center gap-[6px] h-[27px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[6px] bg-[#FFFFFF] w-[142px]">
                      {'\n              '}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#A1A1AA"
                        strokeWidth="1.8"
                        className="flex-none"
                      >
                        <circle cx="9" cy="9" r="5.6"></circle>
                        <path d="M13.2 13.2L17 17"></path>
                      </svg>
                      {'\n              '}
                      <input
                        onChange={onTableSearch}
                        value={tableSearch}
                        placeholder="Search rows"
                        className="[border:none] outline-none bg-transparent text-[11.5px] w-full [min-width:0] text-[#3F3F46]"
                      />
                      {'\n              '}
                      {hasTableSearch ? (
                        <>
                          {'\n                '}
                          <span
                            onClick={clearTableSearch}
                            className="flex-none text-[#A1A1AA] text-[13px] leading-[1] cursor-pointer"
                          >
                            {'×'}
                          </span>
                          {'\n              '}
                        </>
                      ) : null}
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="ml-[auto] flex items-center gap-[6px]">
                      {'\n              '}
                      <button onClick={openRunCells} style={cssToObj(runCellsBtnStyle)}>
                        {'\n                '}
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.9"
                        >
                          <path d="M6 4l9 6-9 6z"></path>
                        </svg>
                        {'\n                Run cells'}
                        <span>{runCellsCount}</span>
                        {'\n              '}
                      </button>
                      {'\n              '}
                      <button
                        onClick={toggleColumns}
                        title="Column visibility"
                        style={cssToObj(colsBtnStyle)}
                      >
                        {'\n                '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <rect x="3" y="4" width="14" height="12" rx="2"></rect>
                          <path d="M8 4v12M13 4v12"></path>
                        </svg>
                        {'\n              '}
                      </button>
                      {'\n              '}
                      <button onClick={toggleFilter} style={cssToObj(filterBtnStyle)}>
                        {'\n                '}
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M3 5h14l-5.4 6v5l-3.2 1.6V11z"></path>
                        </svg>
                        {'\n                Filter '}
                        <span>{filterBadge}</span>
                        {'\n              '}
                      </button>
                      {'\n              '}
                      <button onClick={toggleSort} style={cssToObj(sortBtnStyle)}>
                        {'\n                '}
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M6 4v12M3 13l3 3 3-3M14 16V4M11 7l3-3 3 3"></path>
                        </svg>
                        {'\n                Sort\n              '}
                      </button>
                      {'\n              '}
                      <div onClick={toggleRunPanel} style={cssToObj(runPillStyle)}>
                        {'\n                '}
                        <span style={cssToObj(runDotStyle)}></span>
                        {'\n                '}
                        <span>{runLabel}</span>
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n\n            '}
                    {importOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[calc(100%_+_2px)] left-[216px] w-[176px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_14px_34px_rgba(24,24,27,.14)] p-[4px] z-[45] [animation:pop_.13s_ease-out]">
                          {'\n                '}
                          {(importItems ?? []).map((e: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={e.pick}
                                className="py-[6px] px-[8px] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                              >
                                <span>{e.label}</span>
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n            '}
                    {exportOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[calc(100%_+_2px)] left-[300px] w-[180px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_14px_34px_rgba(24,24,27,.14)] p-[4px] z-[45] [animation:pop_.13s_ease-out]">
                          {'\n                '}
                          {(exportItems ?? []).map((e: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={e.pick}
                                className="py-[6px] px-[8px] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                              >
                                <span>{e.label}</span>
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {columnsOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[calc(100%_+_2px)] right-[16px] w-[264px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_16px_40px_rgba(24,24,27,.15)] z-[45] [animation:pop_.13s_ease-out] overflow-hidden">
                          {'\n                '}
                          <div className="flex items-center justify-between py-[9px] px-[11px] [border-bottom:1px_solid_#F1F1F3]">
                            {'\n                  '}
                            <span className="text-[11.5px] font-[650]">{'Column visibility'}</span>
                            {'\n                  '}
                            <span className="flex gap-[8px]">
                              {'\n                    '}
                              <span
                                onClick={showAllCols}
                                className="text-[11px] text-[#6D28D9] font-[600] cursor-pointer"
                              >
                                {'Show all'}
                              </span>
                              {'\n                    '}
                              <span
                                onClick={hideAllCols}
                                className="text-[11px] text-[#8E8E96] font-[600] cursor-pointer"
                              >
                                {'Hide all'}
                              </span>
                              {'\n                  '}
                            </span>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="[max-height:300px] overflow-y-auto p-[4px]">
                            {'\n                  '}
                            {(columnToggles ?? []).map((c: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div className="flex items-center gap-[7px] py-[5px] px-[7px] rounded-[6px] hv-u69wm2">
                                  {'\n                      '}
                                  <span className="text-[#C4C4CB] text-[11px] cursor-grab">
                                    {'⠿'}
                                  </span>
                                  {'\n                      '}
                                  <span
                                    onClick={c.pick}
                                    style={cssToObj(
                                      `flex:1; font-size:11.5px; color:${c.color}; cursor:pointer`,
                                    )}
                                  >
                                    <span>{c.label}</span>
                                  </span>
                                  {'\n                      '}
                                  <span
                                    onClick={c.up}
                                    className="w-[16px] h-[16px] flex items-center justify-center rounded-[4px] text-[#A1A1AA] text-[9px] cursor-pointer hv-p5cy1p"
                                  >
                                    {'▲'}
                                  </span>
                                  {'\n                      '}
                                  <span
                                    onClick={c.down}
                                    className="w-[16px] h-[16px] flex items-center justify-center rounded-[4px] text-[#A1A1AA] text-[9px] cursor-pointer hv-p5cy1p"
                                  >
                                    {'▼'}
                                  </span>
                                  {'\n                      '}
                                  <span
                                    onClick={c.pick}
                                    className="w-[18px] h-[18px] flex items-center justify-center cursor-pointer"
                                  >
                                    {'\n                        '}
                                    <svg
                                      width="13"
                                      height="13"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      stroke={c.eyeColor}
                                      strokeWidth="1.6"
                                    >
                                      <path d="M2.5 10S5.4 5 10 5s7.5 5 7.5 5-2.9 5-7.5 5-7.5-5-7.5-5z"></path>
                                      <circle cx="10" cy="10" r="2"></circle>
                                    </svg>
                                    {'\n                      '}
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {filterOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[calc(100%_+_2px)] right-[150px] w-[264px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_16px_40px_rgba(24,24,27,.15)] z-[45] [animation:pop_.13s_ease-out] overflow-hidden">
                          {'\n                '}
                          <div className="py-[9px] px-[11px] [border-bottom:1px_solid_#F1F1F3] text-[11.5px] font-[650]">
                            {'Filters'}
                          </div>
                          {'\n                '}
                          <div className="p-[5px]">
                            {'\n                  '}
                            {(filterRules ?? []).map((f: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div
                                  onClick={f.pick}
                                  className="flex items-center gap-[8px] py-[6px] px-[7px] rounded-[6px] cursor-pointer hv-u69wm2"
                                >
                                  {'\n                      '}
                                  <span
                                    style={cssToObj(
                                      `width:14px; height:14px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#FFFFFF; border:1px solid ${f.boxBorder}; background:${f.boxBg}`,
                                    )}
                                  >
                                    <span>{f.check}</span>
                                  </span>
                                  {'\n                      '}
                                  <span className="flex-1 text-[11.5px] text-[#3F3F46]">
                                    <span>{f.label}</span>
                                  </span>
                                  {'\n                      '}
                                  <span className="text-[10.5px] text-[#A1A1AA] tabular-nums">
                                    <span>{f.count}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="py-[8px] px-[11px] [border-top:1px_solid_#F1F1F3] bg-[#FAFAFB] flex justify-between items-center">
                            {'\n                  '}
                            <span className="text-[10.5px] text-[#8E8E96]">
                              <span>{filterSummary}</span>
                            </span>
                            {'\n                  '}
                            <span
                              onClick={clearFilters}
                              className="text-[11px] text-[#6D28D9] font-[600] cursor-pointer"
                            >
                              {'Clear'}
                            </span>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {sortOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[calc(100%_+_2px)] right-[90px] w-[220px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_16px_40px_rgba(24,24,27,.15)] z-[45] [animation:pop_.13s_ease-out] overflow-hidden">
                          {'\n                '}
                          <div className="p-[5px]">
                            {'\n                  '}
                            {(sorts ?? []).map((f: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div
                                  onClick={f.pick}
                                  className="hv-u69wm2"
                                  style={cssToObj(
                                    `display:flex; align-items:center; justify-content:space-between; padding:6px 8px; border-radius:6px; cursor:pointer; font-size:11.5px; color:${f.color}; font-weight:${f.weight}`,
                                  )}
                                >
                                  {'\n                      '}
                                  <span>
                                    <span>{f.label}</span>
                                  </span>
                                  <span className="text-[#6D28D9]">
                                    <span>{f.check}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div
                            onClick={toggleSortDir}
                            className="py-[8px] px-[11px] [border-top:1px_solid_#F1F1F3] bg-[#FAFAFB] flex justify-between cursor-pointer text-[11px] text-[#3F3F46] hv-u45kwi"
                          >
                            {'\n                  '}
                            <span>{'Direction'}</span>
                            <span className="font-[650] text-[#5B21B6]">
                              <span>{sortDirLabel}</span>
                            </span>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {runPanelOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[calc(100%_+_2px)] right-[16px] w-[284px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[11px] shadow-[0_16px_40px_rgba(24,24,27,.15)] z-[46] [animation:pop_.13s_ease-out] overflow-hidden">
                          {'\n                '}
                          <div className="py-[10px] px-[12px] [border-bottom:1px_solid_#F1F1F3] flex items-center justify-between">
                            {'\n                  '}
                            <span className="text-[11.5px] font-[650]">{'Pipeline status'}</span>
                            {'\n                  '}
                            <span
                              style={cssToObj(
                                `font-size:10.5px; color:${runStateColor}; font-weight:650`,
                              )}
                            >
                              <span>{runState}</span>
                            </span>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="py-[10px] px-[12px] flex flex-col gap-[9px]">
                            {'\n                  '}
                            <div className="grid [grid-template-columns:1fr_1fr] gap-[7px]">
                              {'\n                    '}
                              {(runStats ?? []).map((r: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                      '}
                                  <div className="[border:1px_solid_#EDEDF0] rounded-[7px] py-[7px] px-[9px]">
                                    {'\n                        '}
                                    <div className="text-[9.5px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                                      <span>{r.label}</span>
                                    </div>
                                    {'\n                        '}
                                    <div
                                      style={cssToObj(
                                        `font-size:13px; font-weight:650; font-variant-numeric:tabular-nums; color:${r.color}`,
                                      )}
                                    >
                                      <span>{r.value}</span>
                                    </div>
                                    {'\n                      '}
                                  </div>
                                  {'\n                    '}
                                </Fragment>
                              ))}
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            <div className="h-[4px] rounded-[3px] bg-[#F1F1F3] overflow-hidden">
                              {'\n                    '}
                              <div
                                style={cssToObj(
                                  `height:100%; border-radius:3px; background:#6D28D9; width:${runPct}`,
                                )}
                              ></div>
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            {(runSteps ?? []).map((s: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div className="flex items-center gap-[8px]">
                                  {'\n                      '}
                                  <span
                                    style={cssToObj(
                                      `font-size:11px; color:${s.iconColor}; width:12px; text-align:center`,
                                    )}
                                  >
                                    <span>{s.icon}</span>
                                  </span>
                                  {'\n                      '}
                                  <span
                                    style={cssToObj(
                                      `font-size:11.5px; color:${s.color}; font-weight:${s.weight}`,
                                    )}
                                  >
                                    <span>{s.label}</span>
                                  </span>
                                  {'\n                      '}
                                  <span className="ml-[auto] text-[10.5px] text-[#A1A1AA] tabular-nums">
                                    <span>{s.meta}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                  '}
                            <div className="flex gap-[6px] pt-[3px]">
                              {'\n                    '}
                              <button
                                onClick={pauseRun}
                                className="flex-1 h-[26px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11px] text-[#3F3F46] cursor-pointer font-[550] hv-u4v0t1"
                              >
                                <span>{pauseLabel}</span>
                              </button>
                              {'\n                    '}
                              <button
                                onClick={cancelRun}
                                className="flex-1 h-[26px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11px] text-[#B91C1C] cursor-pointer font-[550] hv-ug5na5"
                              >
                                {'Cancel'}
                              </button>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="flex-none flex items-center gap-[2px] py-[0] px-[16px] [border-bottom:1px_solid_#E5E5EA] bg-[#FAFAFB]">
                    {'\n            '}
                    {(sheetTabs ?? []).map((t: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div onClick={t.pick} style={cssToObj(`${t.style}; position:relative`)}>
                          {'\n                '}
                          {t.renaming ? (
                            <>
                              {'\n                  '}
                              <input
                                onChange={onRenameDraft}
                                onBlur={commitRename}
                                value={renameDraft}
                                className="w-[88px] [border:1px_solid_#C9B6F5] rounded-[4px] outline-none text-[11.5px] py-[1px] px-[4px] text-[#18181B]"
                              />
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n                '}
                          {t.renaming ? (
                            <>
                              {'\n                  '}
                              <span
                                onClick={commitRename}
                                className="text-[11px] text-[#6D28D9] font-[600] cursor-pointer"
                              >
                                {'Save'}
                              </span>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n                '}
                          {t.menuOpen ? (
                            <>
                              {'\n                  '}
                              <div className="absolute top-[32px] left-[0] w-[128px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_12px_30px_rgba(24,24,27,.15)] p-[4px] z-[40] [animation:pop_.12s_ease-out]">
                                {'\n                    '}
                                <div
                                  onClick={t.startRename}
                                  className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                                >
                                  {'Rename'}
                                </div>
                                {'\n                    '}
                                <div
                                  onClick={t.del}
                                  className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#B91C1C] cursor-pointer hv-ug5na5"
                                >
                                  {'Delete'}
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n                '}
                          <span>{t.name}</span>
                          {'\n                '}
                          <span className="text-[9.5px] text-[#A1A1AA] tabular-nums">
                            <span>{t.count}</span>
                          </span>
                          {'\n                '}
                          {t.custom ? (
                            <>
                              {'\n                  '}
                              <span
                                onClick={t.menu}
                                className="w-[16px] h-[16px] flex items-center justify-center rounded-[4px] text-[#B4B4BB] text-[12px] leading-[1] hv-q1v9ly"
                              >
                                {'⋯'}
                              </span>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n            '}
                    <span
                      onClick={addSheet}
                      title="New table"
                      className="ml-[6px] w-[20px] h-[20px] flex items-center justify-center rounded-[5px] text-[#A1A1AA] text-[14px] cursor-pointer hv-q1v9ly"
                    >
                      {'+'}
                    </span>
                    {'\n            '}
                    <div className="ml-[auto] flex items-center gap-[5px] py-[5px] px-[0] overflow-x-auto">
                      {'\n              '}
                      {(viewChips ?? []).map((f: any, __i: number) => (
                        <Fragment key={__i}>
                          {'\n                '}
                          <span
                            onClick={f.pick}
                            style={cssToObj(
                              `${f.style}; display:inline-flex; align-items:center; gap:4px`,
                            )}
                          >
                            {'\n                  '}
                            <span>{f.label}</span>
                            {'\n                  '}
                            {f.custom ? (
                              <>
                                {'\n                    '}
                                <span
                                  onClick={f.remove}
                                  className="text-[#A1A1AA] text-[11px] leading-[1]"
                                >
                                  {'×'}
                                </span>
                                {'\n                  '}
                              </>
                            ) : null}
                            {'\n                '}
                          </span>
                          {'\n              '}
                        </Fragment>
                      ))}
                      {'\n              '}
                      {canSaveView ? (
                        <>
                          {'\n                '}
                          <span
                            onClick={saveView}
                            className="py-[3px] px-[8px] rounded-[5px] text-[10.5px] font-[600] cursor-pointer whitespace-nowrap [border:1px_dashed_#C9B6F5] text-[#5B21B6] bg-[#FFFFFF]"
                          >
                            {'+ Save view'}
                          </span>
                          {'\n              '}
                        </>
                      ) : null}
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  {showActionBar ? (
                    <>
                      {'\n            '}
                      <div className="absolute left-[50%] bottom-[20px] [transform:translateX(-50%)] z-[58] [min-width:520px] bg-[#FFFFFF] [border:1px_solid_#E1E1E6] rounded-[10px] shadow-[0_18px_44px_rgba(24,24,27,.20)] overflow-hidden">
                        {'\n\n              '}
                        {barIdle ? (
                          <>
                            {'\n                '}
                            <div className="flex items-center gap-[11px] py-[9px] px-[11px]">
                              {'\n                  '}
                              <span className="text-[12px] text-[#71717A]">
                                <strong className="font-[650] text-[#18181B] tabular-nums">
                                  <span>{barRows}</span>
                                </strong>
                                {' rows'}
                              </span>
                              {'\n                  '}
                              <span className="w-[1px] h-[18px] bg-[#EDEDF0]"></span>
                              {'\n                  '}
                              <span className="text-[11px] text-[#8E8E96] tabular-nums whitespace-nowrap">
                                <span>{barCostLabel}</span>
                              </span>
                              {'\n                  '}
                              <span className="w-[1px] h-[18px] bg-[#EDEDF0] ml-[auto]"></span>
                              {'\n                  '}
                              <button
                                onClick={exportSelected}
                                className="h-[27px] py-[0] px-[9px] [border:1px_solid_transparent] bg-transparent text-[#71717A] rounded-[6px] text-[11.5px] font-[550] cursor-pointer hv-1jlrkq0"
                              >
                                {'Export'}
                              </button>
                              {'\n                  '}
                              <button
                                onClick={clearSelection}
                                className="flex items-center gap-[6px] h-[27px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] text-[#3F3F46] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-u4v0t1"
                              >
                                {'\n                    '}
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                >
                                  <rect x="3.5" y="3.5" width="13" height="13" rx="2.5"></rect>
                                </svg>
                                {'\n                    Cancel\n                  '}
                              </button>
                              {'\n                  '}
                              <button
                                onClick={deleteSelected}
                                className="flex items-center gap-[6px] h-[27px] py-[0] px-[10px] [border:1px_solid_#FADCDC] bg-[#FFFFFF] text-[#DC2626] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-ug5na5"
                              >
                                {'\n                    '}
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.7"
                                >
                                  <path d="M4.5 6h11M8 6V4.5h4V6M6 6l.7 9.5h6.6L14 6"></path>
                                </svg>
                                {'\n                    Delete\n                  '}
                              </button>
                              {'\n                  '}
                              <button onClick={runSelected} style={cssToObj(runRowsStyle)}>
                                {'\n                    '}
                                <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M6 4l9 6-9 6z"></path>
                                </svg>
                                {'\n                    Run rows\n                  '}
                              </button>
                              {'\n                '}
                            </div>
                            {'\n                '}
                            {barInsufficient ? (
                              <>
                                {'\n                  '}
                                <div className="flex items-center gap-[9px] py-[7px] px-[11px] bg-[#FFF8F1] [border-top:1px_solid_#FDE4CB]">
                                  {'\n                    '}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#EA580C"
                                    strokeWidth="1.9"
                                    className="flex-none"
                                  >
                                    <path d="M11 2.5L4.5 11.5H9l-.6 6 6.6-9H10.4z"></path>
                                  </svg>
                                  {'\n                    '}
                                  <span className="text-[11px] text-[#C2410C]">
                                    {'Not enough credits — '}
                                    <span>{barCost}</span>
                                    {' needed, '}
                                    <span>{creditsNum}</span>
                                    {' available. Nothing will run.'}
                                  </span>
                                  {'\n                    '}
                                  <button
                                    onClick={openCredits}
                                    className="ml-[auto] h-[24px] py-[0] px-[9px] [border:1px_solid_#F3C99B] bg-[#FFFFFF] text-[#C2410C] rounded-[5px] text-[11px] font-[600] cursor-pointer hv-ugv35u"
                                  >
                                    {'Top up credits'}
                                  </button>
                                  {'\n                  '}
                                </div>
                                {'\n                '}
                              </>
                            ) : null}
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n\n              '}
                        {barRunning ? (
                          <>
                            {'\n                '}
                            <div>
                              {'\n                  '}
                              <div className="flex items-center gap-[11px] py-[9px] px-[11px]">
                                {'\n                    '}
                                <span className="w-[7px] h-[7px] rounded-full bg-[#2563EB] [animation:pulse_1.1s_ease-in-out_infinite] flex-none"></span>
                                {'\n                    '}
                                <span className="text-[12px] font-[650] text-[#18181B] tabular-nums whitespace-nowrap">
                                  <span>{jobProgress}</span>
                                </span>
                                {'\n                    '}
                                <span className="text-[11px] text-[#8E8E96] tabular-nums whitespace-nowrap">
                                  <span>{jobRemaining}</span>
                                </span>
                                {'\n                    '}
                                <span className="w-[1px] h-[18px] bg-[#EDEDF0] ml-[auto]"></span>
                                {'\n                    '}
                                <span className="text-[11px] text-[#8E8E96] whitespace-nowrap">
                                  <span>{jobSpent}</span>
                                </span>
                                {'\n                    '}
                                <button
                                  onClick={cancelJob}
                                  className="h-[27px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] text-[#3F3F46] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-u4v0t1"
                                >
                                  {'Cancel run'}
                                </button>
                                {'\n                  '}
                              </div>
                              {'\n                  '}
                              <div className="h-[2px] bg-[#F1F1F3]">
                                {'\n                    '}
                                <div
                                  style={cssToObj(
                                    `height:100%; background:#2563EB; width:${jobPct}; transition:width .25s ease-out`,
                                  )}
                                ></div>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n\n              '}
                        {barDone ? (
                          <>
                            {'\n                '}
                            <div className="flex items-center gap-[11px] py-[9px] px-[11px]">
                              {'\n                  '}
                              <span className="text-[12px] font-[650] text-[#18181B] tabular-nums whitespace-nowrap">
                                <span>{jobSummary}</span>
                              </span>
                              {'\n                  '}
                              <span className="text-[11px] text-[#8E8E96] whitespace-nowrap">
                                <span>{jobSpent}</span>
                              </span>
                              {'\n                  '}
                              <span className="w-[1px] h-[18px] bg-[#EDEDF0] ml-[auto]"></span>
                              {'\n                  '}
                              {jobHasFailed ? (
                                <>
                                  {'\n                    '}
                                  <button
                                    onClick={retryFailed}
                                    className="h-[27px] py-[0] px-[10px] [border:1px_solid_#FADCDC] bg-[#FFFFFF] text-[#B91C1C] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-ug5na5"
                                  >
                                    <span>{jobFailedLabel}</span>
                                  </button>
                                  {'\n                  '}
                                </>
                              ) : null}
                              {'\n                  '}
                              <button
                                onClick={dismissJob}
                                className="h-[27px] py-[0] px-[12px] [border:1px_solid_#18181B] bg-[#18181B] text-[#FFFFFF] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-fs93b6"
                              >
                                {'Done'}
                              </button>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n\n          '}
                  <div className="flex-1 [min-height:0] overflow-auto">
                    {'\n            '}
                    {sheetCompanies ? (
                      <>
                        {'\n              '}
                        <div style={cssToObj(`min-width:${tableMinWidth}`)}>
                          {'\n                '}
                          <div
                            style={cssToObj(
                              `display:grid; grid-template-columns:${gridCols}; background:#F7F7F9; border-bottom:1px solid #E5E5EA; position:sticky; top:0; z-index:5`,
                            )}
                          >
                            {'\n                  '}
                            {(headCells ?? []).map((c: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[5px] text-[10.5px] font-[650] text-[#71717A] whitespace-nowrap overflow-visible [border-right:1px_solid_#EDEDF0]">
                                  {'\n                      '}
                                  {c.isCheck ? (
                                    <>
                                      {'\n                        '}
                                      <span
                                        onClick={toggleSelectAll}
                                        title="Select all rows"
                                        style={cssToObj(
                                          `width:14px; height:14px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#FFFFFF; cursor:pointer; border:1px solid ${selectAllBorder}; background:${selectAllBg}`,
                                        )}
                                      >
                                        <span>{selectAllMark}</span>
                                      </span>
                                      {'\n                      '}
                                    </>
                                  ) : null}
                                  {'\n                      '}
                                  <span className="overflow-hidden text-ellipsis">
                                    <span>{c.label}</span>
                                  </span>
                                  {'\n                      '}
                                  {c.isCustomHead ? (
                                    <>
                                      {'\n                        '}
                                      <span className="ml-[auto] relative flex items-center gap-[4px]">
                                        {'\n                          '}
                                        <span
                                          onClick={c.toggleMenu}
                                          title="Run this column"
                                          className="hv-ttjng3"
                                          style={cssToObj(
                                            `width:18px; height:18px; display:flex; align-items:center; justify-content:center; border-radius:4px; color:#6D28D9; cursor:pointer; background:${c.menuBg}`,
                                          )}
                                        >
                                          {'\n                            '}
                                          <svg
                                            width="9"
                                            height="9"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                          >
                                            <path d="M6 4l9 6-9 6z"></path>
                                          </svg>
                                          {'\n                          '}
                                        </span>
                                        {'\n                          '}
                                        <span
                                          onClick={c.remove}
                                          title="Delete column"
                                          className="text-[11px] text-[#B4B4BB] cursor-pointer leading-[1]"
                                        >
                                          {'×'}
                                        </span>
                                        {'\n                          '}
                                        {c.menuOpen ? (
                                          <>
                                            {'\n                            '}
                                            <span className="absolute top-[23px] right-[0] w-[226px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_16px_38px_rgba(24,24,27,.17)] p-[4px] z-[60] flex flex-col [animation:pop_.12s_ease-out]">
                                              {'\n                              '}
                                              <span className="pt-[5px] px-[8px] pb-[4px] text-[9.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                                <span>{c.cost}</span>
                                              </span>
                                              {'\n                              '}
                                              {(c.menuItems ?? []).map((it: any, __i: number) => (
                                                <Fragment key={__i}>
                                                  {'\n                                '}
                                                  <span
                                                    onClick={it.pick}
                                                    className="hv-u4v0t1"
                                                    style={cssToObj(
                                                      `display:flex; align-items:center; justify-content:space-between; gap:10px; padding:6px 8px; border-radius:5px; font-size:11.5px; font-weight:500; cursor:pointer; color:${it.color}`,
                                                    )}
                                                  >
                                                    {'\n                                  '}
                                                    <span>
                                                      <span>{it.label}</span>
                                                    </span>
                                                    {'\n                                  '}
                                                    <span className="text-[10px] font-[550] text-[#A1A1AA] tabular-nums">
                                                      <span>{it.hint}</span>
                                                    </span>
                                                    {'\n                                '}
                                                  </span>
                                                  {'\n                              '}
                                                </Fragment>
                                              ))}
                                              {'\n                            '}
                                            </span>
                                            {'\n                          '}
                                          </>
                                        ) : null}
                                        {'\n                        '}
                                      </span>
                                      {'\n                      '}
                                    </>
                                  ) : null}
                                  {'\n                      '}
                                  {c.isAdd ? (
                                    <>
                                      {'\n                        '}
                                      <span
                                        onClick={openAddCol}
                                        title="Add column"
                                        className="w-[18px] h-[18px] flex items-center justify-center rounded-[5px] [border:1px_dashed_#C9B6F5] text-[#6D28D9] text-[12px] cursor-pointer hv-u4uxge"
                                      >
                                        {'+'}
                                      </span>
                                      {'\n                      '}
                                    </>
                                  ) : null}
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n                '}
                          {(rows ?? []).map((r: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={r.open}
                                className="hv-udcbnc"
                                style={cssToObj(
                                  `display:grid; grid-template-columns:${gridCols}; border-bottom:1px solid #F1F1F3; cursor:pointer; background:${r.rowBg}`,
                                )}
                              >
                                {'\n                    '}
                                {(r.cells ?? []).map((c: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <div
                                      style={cssToObj(
                                        `padding:7px 9px; display:flex; align-items:center; min-width:0; gap:6px; border-right:1px solid #F4F4F6; height:${rowHeight}`,
                                      )}
                                    >
                                      {'\n\n                        '}
                                      {c.isNum ? (
                                        <>
                                          {'\n                          '}
                                          <span className="text-[10.5px] text-[#B4B4BB] tabular-nums">
                                            <span>{c.value}</span>
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isCustom ? (
                                        <>
                                          {'\n                          '}
                                          <span className="flex items-center gap-[6px] [min-width:0] w-full">
                                            {'\n                            '}
                                            {c.needsRun ? (
                                              <>
                                                {'\n                              '}
                                                <span
                                                  onClick={c.run}
                                                  className="flex items-center gap-[4px] h-[20px] py-[0] px-[7px] [border:1px_solid_#E4E4E8] rounded-[5px] bg-[#FFFFFF] text-[10.5px] text-[#52525B] font-[600] cursor-pointer whitespace-nowrap hv-iubl1z"
                                                >
                                                  {'\n                                '}
                                                  <svg
                                                    width="9"
                                                    height="9"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                  >
                                                    <path d="M6 4l9 6-9 6z"></path>
                                                  </svg>
                                                  {'\n                                Run · '}
                                                  <span>{c.cost}</span>
                                                  {'\n                              '}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                            {c.pending ? (
                                              <>
                                                {'\n                              '}
                                                <span className="flex items-center gap-[6px]">
                                                  {'\n                                '}
                                                  <span className="w-[6px] h-[6px] rounded-full bg-[#D4D4D8]"></span>
                                                  {'\n                                '}
                                                  <span className="text-[11.5px] text-[#B4B4BB]">
                                                    {'Queued'}
                                                  </span>
                                                  {'\n                              '}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                            {c.running ? (
                                              <>
                                                {'\n                              '}
                                                <span className="flex items-center gap-[7px]">
                                                  {'\n                                '}
                                                  <span className="w-[7px] h-[7px] rounded-full bg-[#2563EB] [animation:pulse_1.1s_ease-in-out_infinite]"></span>
                                                  {'\n                                '}
                                                  <span className="text-[11.5px] text-[#8E8E96]">
                                                    {'Generating…'}
                                                  </span>
                                                  {'\n                              '}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                            {c.failed ? (
                                              <>
                                                {'\n                              '}
                                                <span className="flex items-center gap-[6px]">
                                                  {'\n                                '}
                                                  <span className="w-[7px] h-[7px] rounded-full bg-[#DC2626]"></span>
                                                  {'\n                                '}
                                                  <span className="text-[11.5px] text-[#B91C1C]">
                                                    {'Failed'}
                                                  </span>
                                                  {'\n                                '}
                                                  <span className="text-[10px] text-[#E4E4E8]">
                                                    {'·'}
                                                  </span>
                                                  {'\n                                '}
                                                  <span
                                                    onClick={c.retry}
                                                    className="hv-vdm6bt"
                                                    style={cssToObj(
                                                      'font-size:11px; font-weight:600; color:#5B21B6; cursor:pointer; text-decoration:underline; text-decoration-color:#DDD6F3',
                                                    )}
                                                  >
                                                    {'Retry'}
                                                  </span>
                                                  {'\n                              '}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                            {c.cancelled ? (
                                              <>
                                                {'\n                              '}
                                                <span className="flex items-center gap-[6px]">
                                                  {'\n                                '}
                                                  <span className="w-[7px] h-[7px] rounded-full [border:1.4px_solid_#D4D4D8]"></span>
                                                  {'\n                                '}
                                                  <span className="text-[11.5px] text-[#A1A1AA]">
                                                    {'Cancelled'}
                                                  </span>
                                                  {'\n                                '}
                                                  <span className="text-[10px] text-[#E4E4E8]">
                                                    {'·'}
                                                  </span>
                                                  {'\n                                '}
                                                  <span
                                                    onClick={c.retry}
                                                    className="hv-vdm6bt"
                                                    style={cssToObj(
                                                      'font-size:11px; font-weight:600; color:#5B21B6; cursor:pointer; text-decoration:underline; text-decoration-color:#DDD6F3',
                                                    )}
                                                  >
                                                    {'Run'}
                                                  </span>
                                                  {'\n                              '}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                            {c.skipped ? (
                                              <>
                                                {'\n                              '}
                                                <span className="text-[11.5px] text-[#B4B4BB]">
                                                  {'Skipped'}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                            {c.hasVal ? (
                                              <>
                                                {'\n                              '}
                                                <span
                                                  style={cssToObj(
                                                    `font-size:11.5px; color:${c.color}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                                                  )}
                                                >
                                                  <span>{c.value}</span>
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isActions ? (
                                        <>
                                          {'\n                          '}
                                          <span className="relative flex">
                                            {'\n                            '}
                                            <span
                                              onClick={c.toggleMenu}
                                              title="Row actions"
                                              className="w-[20px] h-[20px] flex items-center justify-center rounded-[5px] text-[#B4B4BB] text-[12px] cursor-pointer hv-q1v9ly"
                                            >
                                              {'•••'}
                                            </span>
                                            {'\n                            '}
                                            {c.menuOpen ? (
                                              <>
                                                {'\n                              '}
                                                <span className="absolute top-[22px] right-[0] w-[184px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[45] flex flex-col [animation:pop_.12s_ease-out]">
                                                  {'\n                                '}
                                                  {(c.items ?? []).map((it: any, __i: number) => (
                                                    <Fragment key={__i}>
                                                      {'\n                                  '}
                                                      <span
                                                        onClick={it.pick}
                                                        className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#3F3F46] cursor-pointer whitespace-nowrap hv-u4v0t1"
                                                      >
                                                        <span>{it.label}</span>
                                                      </span>
                                                      {'\n                                '}
                                                    </Fragment>
                                                  ))}
                                                  {'\n                              '}
                                                </span>
                                                {'\n                            '}
                                              </>
                                            ) : null}
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isCheck ? (
                                        <>
                                          {'\n                          '}
                                          <span
                                            onClick={c.toggle}
                                            style={cssToObj(
                                              `width:14px; height:14px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#FFFFFF; border:1px solid ${c.boxBorder}; background:${c.boxBg}`,
                                            )}
                                          >
                                            <span>{c.check}</span>
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isCompany ? (
                                        <>
                                          {'\n                          '}
                                          <span className="flex items-center gap-[7px] [min-width:0]">
                                            {'\n                            '}
                                            <span
                                              style={cssToObj(
                                                `width:20px; height:20px; border-radius:5px; flex:none; display:flex; align-items:center; justify-content:center; font-size:9.5px; font-weight:700; color:#FFFFFF; background:${c.logoBg}`,
                                              )}
                                            >
                                              <span>{c.logo}</span>
                                            </span>
                                            {'\n                            '}
                                            <span className="text-[12px] font-[600] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                                              <span>{c.value}</span>
                                            </span>
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isLink ? (
                                        <>
                                          {'\n                          '}
                                          <span className="flex items-center gap-[6px] [min-width:0]">
                                            {'\n                            '}
                                            <span
                                              style={cssToObj(
                                                `width:15px; height:15px; border-radius:4px; flex:none; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:700; color:#FFFFFF; background:${c.logoBg}`,
                                              )}
                                            >
                                              <span>{c.logo}</span>
                                            </span>
                                            {'\n                            '}
                                            <span
                                              onClick={c.act}
                                              className="hv-18t8341"
                                              style={cssToObj(
                                                'font-size:11.5px; color:#3F3F46; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; text-decoration:underline; text-decoration-color:#D9D9DF; cursor:pointer',
                                              )}
                                            >
                                              <span>{c.value}</span>
                                            </span>
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isLinkedIn ? (
                                        <>
                                          {'\n                          '}
                                          <span
                                            onClick={c.act}
                                            className="flex items-center gap-[6px] [min-width:0] cursor-pointer"
                                          >
                                            {'\n                            '}
                                            <svg
                                              width="14"
                                              height="14"
                                              viewBox="0 0 20 20"
                                              fill="#0A66C2"
                                              className="flex-none"
                                            >
                                              <rect width="20" height="20" rx="3"></rect>
                                              <path
                                                d="M5 8h2v7H5zM6 4.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM9 8h2v1a2.6 2.6 0 014 2.3V15h-2v-3.3c0-.9-.5-1.4-1.2-1.4S10 10.9 10 11.8V15H9z"
                                                fill="#FFFFFF"
                                              ></path>
                                            </svg>
                                            {'\n                            '}
                                            <span
                                              className="hv-1kffbb6"
                                              style={cssToObj(
                                                'font-size:11.5px; color:#3F3F46; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; text-decoration:underline; text-decoration-color:#D9D9DF',
                                              )}
                                            >
                                              <span>{c.value}</span>
                                            </span>
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isContact ? (
                                        <>
                                          {'\n                          '}
                                          <span
                                            onClick={c.act}
                                            className="flex items-center gap-[7px] [min-width:0] cursor-pointer"
                                          >
                                            {'\n                            '}
                                            <span
                                              style={cssToObj(
                                                `width:20px; height:20px; border-radius:50%; flex:none; display:flex; align-items:center; justify-content:center; font-size:8.5px; font-weight:650; color:#3F3F46; background:${c.avBg}`,
                                              )}
                                            >
                                              <span>{c.initials}</span>
                                            </span>
                                            {'\n                            '}
                                            <span className="[min-width:0] flex flex-col">
                                              {'\n                              '}
                                              <span className="text-[11.5px] font-[550] text-[#27272A] overflow-hidden text-ellipsis whitespace-nowrap">
                                                <span>{c.value}</span>
                                              </span>
                                              {'\n                              '}
                                              <span className="text-[10px] text-[#A1A1AA] overflow-hidden text-ellipsis whitespace-nowrap">
                                                <span>{c.role}</span>
                                              </span>
                                              {'\n                            '}
                                            </span>
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isEmail ? (
                                        <>
                                          {'\n                          '}
                                          <span
                                            onClick={c.act}
                                            title="Copy email"
                                            className="flex items-center gap-[5px] [min-width:0] cursor-pointer"
                                          >
                                            {'\n                            '}
                                            <span className="text-[11px] text-[#52525B] [font-family:'JetBrains_Mono',_monospace] overflow-hidden text-ellipsis whitespace-nowrap">
                                              <span>{c.value}</span>
                                            </span>
                                            {'\n                            '}
                                            <span style={cssToObj(c.statusStyle)}>
                                              <span>{c.status}</span>
                                            </span>
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isChips ? (
                                        <>
                                          {'\n                          '}
                                          <span className="flex items-center gap-[4px] overflow-hidden">
                                            {'\n                            '}
                                            {(c.list ?? []).map((x: any, __i: number) => (
                                              <Fragment key={__i}>
                                                {'\n                              '}
                                                <span onClick={x.act} style={cssToObj(x.style)}>
                                                  <span>{x.label}</span>
                                                </span>
                                                {'\n                            '}
                                              </Fragment>
                                            ))}
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isScore ? (
                                        <>
                                          {'\n                          '}
                                          <span className="flex flex-col gap-[3px] w-full">
                                            {'\n                            '}
                                            <span
                                              style={cssToObj(
                                                `font-size:11.5px; font-weight:600; color:${c.color}; font-variant-numeric:tabular-nums`,
                                              )}
                                            >
                                              <span>{c.value}</span>
                                            </span>
                                            {'\n                            '}
                                            <span className="h-[3px] rounded-[2px] bg-[#F1F1F3] overflow-hidden w-full">
                                              {'\n                              '}
                                              <span
                                                style={cssToObj(
                                                  `display:block; height:100%; border-radius:2px; background:${c.color}; width:${c.pct}`,
                                                )}
                                              ></span>
                                              {'\n                            '}
                                            </span>
                                            {'\n                          '}
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isBadge ? (
                                        <>
                                          {'\n                          '}
                                          <span style={cssToObj(c.badgeStyle)}>
                                            <span>{c.value}</span>
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n\n                        '}
                                      {c.isText ? (
                                        <>
                                          {'\n                          '}
                                          <span
                                            onClick={c.act}
                                            style={cssToObj(
                                              `font-size:11.5px; color:${c.color}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                                            )}
                                          >
                                            <span>{c.value}</span>
                                          </span>
                                          {'\n                        '}
                                        </>
                                      ) : null}
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n                '}
                          <div className="py-[8px] px-[12px] text-[11px] text-[#A1A1AA] bg-[#FAFAFB] [border-bottom:1px_solid_#F1F1F3]">
                            <span>{rowsFooter}</span>
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {sheetLeaders ? (
                      <>
                        {'\n              '}
                        <div className="[min-width:1592px]">
                          {'\n                '}
                          <div className="grid [grid-template-columns:44px_186px_168px_160px_122px_206px_104px_138px_104px_138px_118px_104px] bg-[#F7F7F9] [border-bottom:1px_solid_#E5E5EA] sticky top-[0] z-[5]">
                            {'\n                  '}
                            {(leaderCols ?? []).map((c: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] text-[10.5px] font-[650] text-[#71717A] whitespace-nowrap [border-right:1px_solid_#EDEDF0]">
                                  <span>{c}</span>
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n                '}
                          {(leaders ?? []).map((p: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={p.open}
                                className="grid [grid-template-columns:44px_186px_168px_160px_122px_206px_104px_138px_104px_138px_118px_104px] [border-bottom:1px_solid_#F1F1F3] cursor-pointer bg-[#FFFFFF] hv-udcbnc"
                              >
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[10.5px] text-[#B4B4BB] [border-right:1px_solid_#F4F4F6] tabular-nums">
                                  <span>{p.n}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[7px] [min-width:0] [border-right:1px_solid_#F4F4F6]">
                                  {'\n                      '}
                                  <span
                                    style={cssToObj(
                                      `width:20px; height:20px; border-radius:50%; flex:none; display:flex; align-items:center; justify-content:center; font-size:8.5px; font-weight:650; color:#3F3F46; background:${p.bg}`,
                                    )}
                                  >
                                    <span>{p.initials}</span>
                                  </span>
                                  {'\n                      '}
                                  <span className="text-[11.5px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                                    <span>{p.name}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#52525B] [border-right:1px_solid_#F4F4F6] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{p.title}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[6px] [min-width:0] [border-right:1px_solid_#F4F4F6]">
                                  {'\n                      '}
                                  <span
                                    style={cssToObj(
                                      `width:17px; height:17px; border-radius:4px; flex:none; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:700; color:#FFFFFF; background:${p.logoBg}`,
                                    )}
                                  >
                                    <span>{p.logo}</span>
                                  </span>
                                  {'\n                      '}
                                  <span className="text-[11.5px] text-[#3F3F46] overflow-hidden text-ellipsis whitespace-nowrap">
                                    <span>{p.company}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[5px] [min-width:0] [border-right:1px_solid_#F4F4F6]">
                                  {'\n                      '}
                                  {p.hasLi ? (
                                    <>
                                      {'\n                        '}
                                      <span
                                        onClick={p.openLi}
                                        className="flex items-center gap-[5px] [min-width:0] cursor-pointer"
                                      >
                                        {'\n                          '}
                                        <svg
                                          width="13"
                                          height="13"
                                          viewBox="0 0 20 20"
                                          fill="#0A66C2"
                                          className="flex-none"
                                        >
                                          <rect width="20" height="20" rx="3"></rect>
                                          <path
                                            d="M5 8h2v7H5zM6 4.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM9 8h2v1a2.6 2.6 0 014 2.3V15h-2v-3.3c0-.9-.5-1.4-1.2-1.4S10 10.9 10 11.8V15H9z"
                                            fill="#FFFFFF"
                                          ></path>
                                        </svg>
                                        {'\n                          '}
                                        <span
                                          style={cssToObj(
                                            'font-size:11.5px; color:#3F3F46; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; text-decoration:underline; text-decoration-color:#D9D9DF',
                                          )}
                                        >
                                          <span>{p.li}</span>
                                        </span>
                                        {'\n                        '}
                                      </span>
                                      {'\n                      '}
                                    </>
                                  ) : null}
                                  {'\n                      '}
                                  {p.noLi ? (
                                    <>
                                      {'\n                        '}
                                      <span className="text-[11.5px] text-[#B4B4BB]">
                                        {'Not available'}
                                      </span>
                                      {'\n                      '}
                                    </>
                                  ) : null}
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center [min-width:0] [border-right:1px_solid_#F4F4F6]">
                                  {'\n                      '}
                                  <span
                                    onClick={p.copyEmail}
                                    style={cssToObj(
                                      `font-size:11px; font-family:'JetBrains Mono', monospace; color:${p.emailColor}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; cursor:pointer`,
                                    )}
                                  >
                                    <span>{p.email}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center [border-right:1px_solid_#F4F4F6]">
                                  <span style={cssToObj(p.statusStyle)}>
                                    <span>{p.status}</span>
                                  </span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#52525B] [border-right:1px_solid_#F4F4F6] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{p.dept}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#52525B] [border-right:1px_solid_#F4F4F6]">
                                  <span>{p.seniority}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#52525B] [border-right:1px_solid_#F4F4F6] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{p.loc}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center [border-right:1px_solid_#F4F4F6]">
                                  <span style={cssToObj(p.roleStyle)}>
                                    <span>{p.persona}</span>
                                  </span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[4px]">
                                  {'\n                      '}
                                  <span
                                    onClick={p.openLi}
                                    title="Open LinkedIn"
                                    className="w-[20px] h-[20px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer bg-[#FFFFFF] hv-8suzj2"
                                  >
                                    {'\n                        '}
                                    <svg width="10" height="10" viewBox="0 0 20 20" fill="#0A66C2">
                                      <rect width="20" height="20" rx="3"></rect>
                                      <path
                                        d="M5 8h2v7H5zM6 4.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM9 8h2v1a2.6 2.6 0 014 2.3V15h-2v-3.3c0-.9-.5-1.4-1.2-1.4S10 10.9 10 11.8V15H9z"
                                        fill="#FFFFFF"
                                      ></path>
                                    </svg>
                                    {'\n                      '}
                                  </span>
                                  {'\n                      '}
                                  <span
                                    onClick={p.copyEmail}
                                    title="Copy email"
                                    className="w-[20px] h-[20px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer bg-[#FFFFFF] hv-16bx3qz"
                                  >
                                    {'\n                        '}
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      stroke="#52525B"
                                      strokeWidth="1.6"
                                    >
                                      <rect x="7" y="7" width="9.5" height="9.5" rx="2"></rect>
                                      <path d="M13 4.5H5.5a2 2 0 00-2 2V14"></path>
                                    </svg>
                                    {'\n                      '}
                                  </span>
                                  {'\n                      '}
                                  <span
                                    onClick={p.addOutreach}
                                    title="Add to outreach"
                                    className="w-[20px] h-[20px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer bg-[#FFFFFF] hv-16bx3qz"
                                  >
                                    {'\n                        '}
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      stroke="#52525B"
                                      strokeWidth="1.9"
                                    >
                                      <path d="M10 4.5v11M4.5 10h11"></path>
                                    </svg>
                                    {'\n                      '}
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n\n            '}
                    {sheetSignals ? (
                      <>
                        {'\n              '}
                        <div className="[min-width:1594px]">
                          {'\n                '}
                          <div className="grid [grid-template-columns:44px_166px_148px_260px_262px_126px_100px_104px_106px_158px] bg-[#F7F7F9] [border-bottom:1px_solid_#E5E5EA] sticky top-[0] z-[5]">
                            {'\n                  '}
                            {(signalCols ?? []).map((c: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] text-[10.5px] font-[650] text-[#71717A] whitespace-nowrap [border-right:1px_solid_#EDEDF0]">
                                  <span>{c}</span>
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n                '}
                          {(signalRows ?? []).map((s: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={s.open}
                                className="grid [grid-template-columns:44px_166px_148px_260px_262px_126px_100px_104px_106px_158px] [border-bottom:1px_solid_#F1F1F3] cursor-pointer bg-[#FFFFFF] hv-udcbnc"
                              >
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[10.5px] text-[#B4B4BB] [border-right:1px_solid_#F4F4F6] tabular-nums">
                                  <span>{s.n}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[7px] [min-width:0] [border-right:1px_solid_#F4F4F6]">
                                  {'\n                      '}
                                  <span
                                    style={cssToObj(
                                      `width:19px; height:19px; border-radius:5px; flex:none; display:flex; align-items:center; justify-content:center; font-size:8.5px; font-weight:700; color:#FFFFFF; background:${s.logoBg}`,
                                    )}
                                  >
                                    <span>{s.logo}</span>
                                  </span>
                                  {'\n                      '}
                                  <span className="text-[11.5px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                                    <span>{s.company}</span>
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center gap-[6px] [border-right:1px_solid_#F4F4F6]">
                                  <span className="text-[11px]">
                                    <span>{s.icon}</span>
                                  </span>
                                  <span className="text-[11.5px] text-[#3F3F46] font-[550]">
                                    <span>{s.type}</span>
                                  </span>
                                </div>
                                {'\n                    '}
                                <div
                                  style={cssToObj(
                                    `padding:7px 9px; display:flex; align-items:center; font-size:11.5px; color:${s.detailColor}; border-right:1px solid #F4F4F6; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                                  )}
                                >
                                  <span>{s.detail}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#71717A] [border-right:1px_solid_#F4F4F6] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{s.evidence}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#71717A] [border-right:1px_solid_#F4F4F6]">
                                  <span>{s.source}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#A1A1AA] [border-right:1px_solid_#F4F4F6]">
                                  <span>{s.time}</span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center [border-right:1px_solid_#F4F4F6]">
                                  <span style={cssToObj(s.freshStyle)}>
                                    <span>{s.fresh}</span>
                                  </span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center [border-right:1px_solid_#F4F4F6]">
                                  <span style={cssToObj(s.confStyle)}>
                                    <span>{s.conf}</span>
                                  </span>
                                </div>
                                {'\n                    '}
                                <div className="py-[7px] px-[9px] flex items-center text-[11.5px] text-[#52525B] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{s.relevance}</span>
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n            '}
                    {sheetCustom ? (
                      <>
                        {'\n              '}
                        <div className="py-[56px] px-[24px] flex flex-col items-center gap-[10px]">
                          {'\n                '}
                          <div className="text-[13px] font-[650] text-[#3F3F46]">
                            <span>{customSheetName}</span>
                            {' is empty'}
                          </div>
                          {'\n                '}
                          <div className="text-[11.5px] text-[#8E8E96] text-center [max-width:330px] leading-[1.55]">
                            {
                              'Nothing has been imported or generated into this table yet. Import a file, or ask Copilot to build a list into it.'
                            }
                          </div>
                          {'\n                '}
                          <div className="flex gap-[7px] mt-[4px]">
                            {'\n                  '}
                            <button
                              onClick={toggleImport}
                              className="h-[28px] py-[0] px-[11px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer hv-u4v0t1"
                            >
                              {'Import data'}
                            </button>
                            {'\n                  '}
                            <button
                              onClick={seedFromResearch}
                              className="h-[28px] py-[0] px-[11px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-jdi8ic"
                            >
                              {'Copy from research'}
                            </button>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="flex-none flex items-center gap-[14px] py-[6px] px-[16px] [border-top:1px_solid_#E5E5EA] bg-[#FAFAFB]">
                    {'\n            '}
                    {(footerStats ?? []).map((f: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <span className="text-[11px] text-[#8E8E96] whitespace-nowrap">
                          <strong className="font-[650] text-[#3F3F46] tabular-nums">
                            <span>{f.value}</span>
                          </strong>{' '}
                          <span>{f.label}</span>
                        </span>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n            '}
                    <span className="ml-[auto] text-[11px] text-[#8E8E96] tabular-nums whitespace-nowrap">
                      <span>{footerRun}</span>
                    </span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n    '}
          </main>
          {'\n\n    '}
          {contextOpen ? (
            <>
              {'\n      '}
              <aside className="w-[348px] flex-none bg-[#FAFAFB] [border-left:1px_solid_#E5E5EA] flex flex-col [min-height:0] [animation:slidein_.16s_ease-out]">
                {'\n\n        '}
                {noSelection ? (
                  <>
                    {'\n          '}
                    <div className="flex-1 flex flex-col [min-height:0]">
                      {'\n            '}
                      <div className="py-[12px] px-[14px] bg-[#FFFFFF] [border-bottom:1px_solid_#EFEFF2] flex items-center justify-between">
                        {'\n              '}
                        <span className="text-[10.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                          {'Account overview'}
                        </span>
                        {'\n              '}
                        <button
                          onClick={toggleContext}
                          className="w-[22px] h-[22px] [border:none] bg-transparent rounded-[5px] cursor-pointer text-[#A1A1AA] text-[14px] leading-[1] hv-u2196x"
                        >
                          {'×'}
                        </button>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="py-[22px] px-[16px] [border-bottom:1px_solid_#EFEFF2]">
                        {'\n              '}
                        <div className="text-[12.5px] font-[600] text-[#3F3F46] mb-[8px]">
                          {'Select a company to see'}
                        </div>
                        {'\n              '}
                        {(emptyBullets ?? []).map((b: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                '}
                            <div className="flex items-center gap-[8px] text-[11.5px] text-[#8E8E96] py-[3px] px-[0]">
                              {'\n                  '}
                              <span className="w-[4px] h-[4px] rounded-full bg-[#D4D4D8]"></span>
                              <span>{b}</span>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </Fragment>
                        ))}
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="py-[12px] px-[14px] overflow-y-auto [min-height:0]">
                        {'\n              '}
                        <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[8px]">
                          {'Recent high-intent accounts'}
                        </div>
                        {'\n              '}
                        {(recentAccounts ?? []).map((a: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                '}
                            <div
                              onClick={a.open}
                              className="flex items-center gap-[9px] py-[8px] px-[9px] [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[8px] mb-[6px] cursor-pointer hv-17mkows"
                            >
                              {'\n                  '}
                              <span
                                style={cssToObj(
                                  `width:22px; height:22px; border-radius:6px; flex:none; display:flex; align-items:center; justify-content:center; font-size:9.5px; font-weight:700; color:#FFFFFF; background:${a.logoBg}`,
                                )}
                              >
                                <span>{a.logo}</span>
                              </span>
                              {'\n                  '}
                              <span className="[min-width:0] flex-1 flex flex-col">
                                {'\n                    '}
                                <span className="text-[11.5px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{a.name}</span>
                                </span>
                                {'\n                    '}
                                <span className="text-[10px] text-[#A1A1AA]">
                                  <span>{a.meta}</span>
                                </span>
                                {'\n                  '}
                              </span>
                              {'\n                  '}
                              <span className="text-[11px] font-[650] text-[#15803D] tabular-nums">
                                <span>{a.intent}</span>
                              </span>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </Fragment>
                        ))}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </>
                ) : null}
                {'\n\n        '}
                {hasSelectedCompany ? (
                  <>
                    {'\n          '}
                    <div className="flex-1 flex flex-col [min-height:0]">
                      {'\n            '}
                      <div className="flex-none pt-[12px] px-[14px] pb-[0] bg-[#FFFFFF] [border-bottom:1px_solid_#EFEFF2]">
                        {'\n              '}
                        <div className="flex items-start gap-[10px]">
                          {'\n                '}
                          <div
                            style={cssToObj(
                              `width:34px; height:34px; border-radius:8px; color:#FFFFFF; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; flex:none; background:${sel.logoBg}`,
                            )}
                          >
                            <span>{sel.logo}</span>
                          </div>
                          {'\n                '}
                          <div className="flex-1 [min-width:0]">
                            {'\n                  '}
                            <div className="flex items-center gap-[6px]">
                              {'\n                    '}
                              <span className="text-[13.5px] font-[650] tracking-[-0.01em]">
                                <span>{sel.name}</span>
                              </span>
                              {'\n                    '}
                              <span style={cssToObj(sel.intentBadge)}>
                                <span>{sel.intentLabel}</span>
                              </span>
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            <div className="text-[11px] text-[#8E8E96] mt-[2px]">
                              <span>{sel.meta}</span>
                            </div>
                            {'\n                  '}
                            <div className="flex items-center gap-[8px] mt-[5px]">
                              {'\n                    '}
                              <span
                                onClick={openDomain}
                                style={cssToObj(
                                  'font-size:11px; color:#6D28D9; cursor:pointer; text-decoration:underline; text-decoration-color:#DDD6F3',
                                )}
                              >
                                <span>{sel.domain}</span>
                              </span>
                              {'\n                    '}
                              <span
                                onClick={openLinkedIn}
                                className="flex items-center gap-[4px] text-[11px] text-[#3F3F46] cursor-pointer"
                              >
                                {'\n                      '}
                                <svg width="12" height="12" viewBox="0 0 20 20" fill="#0A66C2">
                                  <rect width="20" height="20" rx="3"></rect>
                                  <path
                                    d="M5 8h2v7H5zM6 4.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM9 8h2v1a2.6 2.6 0 014 2.3V15h-2v-3.3c0-.9-.5-1.4-1.2-1.4S10 10.9 10 11.8V15H9z"
                                    fill="#FFFFFF"
                                  ></path>
                                </svg>
                                {'\n                      LinkedIn\n                    '}
                              </span>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <button
                            onClick={closePanel}
                            className="w-[22px] h-[22px] [border:none] bg-transparent rounded-[5px] cursor-pointer text-[#A1A1AA] text-[14px] leading-[1] flex-none hv-u2196x"
                          >
                            {'×'}
                          </button>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        <div className="flex gap-[1px] mt-[10px] overflow-x-auto">
                          {'\n                '}
                          {(tabs ?? []).map((t: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div onClick={t.pick} style={cssToObj(t.style)}>
                                <span>{t.name}</span>
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </div>
                      {'\n\n            '}
                      <div className="flex-1 [min-height:0] overflow-y-auto pt-[13px] px-[14px] pb-[18px]">
                        {'\n\n              '}
                        {tabOverview ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col gap-[13px]">
                              {'\n                  '}
                              <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[9px] py-[11px] px-[12px]">
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[9px]">
                                  {'GTM overview'}
                                </div>
                                {'\n                    '}
                                {(gtmRows ?? []).map((g: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <div className="flex items-center justify-between gap-[10px] py-[3px] px-[0]">
                                      {'\n                        '}
                                      <span className="text-[11.5px] text-[#71717A]">
                                        <span>{g.label}</span>
                                      </span>
                                      {'\n                        '}
                                      <span
                                        style={cssToObj(
                                          `font-size:11.5px; font-weight:600; color:${g.color}`,
                                        )}
                                      >
                                        <span>{g.value}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                                <div className="h-[5px] rounded-[3px] bg-[#F1F1F3] overflow-hidden mt-[9px]">
                                  {'\n                      '}
                                  <div
                                    style={cssToObj(
                                      `height:100%; border-radius:3px; background:#22A15D; width:${sel.icpPct}`,
                                    )}
                                  ></div>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n\n                  '}
                              <div className="bg-[#F8F5FF] [border:1px_solid_#E6DDFB] rounded-[9px] py-[11px] px-[12px]">
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#5B21B6] tracking-[.05em] uppercase mb-[6px]">
                                  {'Why this account matters'}
                                </div>
                                {'\n                    '}
                                <p className="m-[0] text-[11.5px] leading-[1.55] text-[#4C3A7A]">
                                  <span>{sel.insight}</span>
                                </p>
                                {'\n                    '}
                                <div className="mt-[8px] pt-[8px] [border-top:1px_solid_#E6DDFB] text-[11.5px] text-[#5B21B6] leading-[1.5]">
                                  <strong className="font-[650]">{'Recommendation:'}</strong>{' '}
                                  <span>{sel.rec}</span>
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n\n                  '}
                              <div>
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[7px]">
                                  {'GTM gap'}
                                </div>
                                {'\n                    '}
                                <div
                                  onClick={explainGap}
                                  className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[9px] py-[10px] px-[11px] text-[11.5px] text-[#52525B] leading-[1.5] cursor-pointer hv-lta693"
                                >
                                  <span>{sel.gap}</span>
                                  {' — '}
                                  <span className="text-[#6D28D9]">{'why?'}</span>
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n\n                  '}
                              <div>
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[7px]">
                                  {'Recommended actions'}
                                </div>
                                {'\n                    '}
                                {(actions ?? []).map((a: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <div
                                      onClick={a.pick}
                                      className="flex items-center justify-between gap-[8px] py-[9px] px-[11px] bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[8px] cursor-pointer mb-[6px] hv-17mkows"
                                    >
                                      {'\n                        '}
                                      <span className="text-[11.5px] font-[550] text-[#27272A]">
                                        <span>{a.label}</span>
                                      </span>
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#A1A1AA]">
                                        <span>{a.cost}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n\n              '}
                        {tabSignals ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col">
                              {'\n                  '}
                              {(signalCards ?? []).map((s: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div onClick={s.open} className="flex gap-[10px] cursor-pointer">
                                    {'\n                      '}
                                    <div className="flex flex-col items-center flex-none w-[20px]">
                                      {'\n                        '}
                                      <span
                                        style={cssToObj(
                                          `width:9px; height:9px; border-radius:50%; margin-top:4px; background:${s.dot}`,
                                        )}
                                      ></span>
                                      {'\n                        '}
                                      <span className="flex-1 w-[1px] bg-[#EAEAEE]"></span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <div className="flex-1 [min-width:0] pb-[12px]">
                                      {'\n                        '}
                                      <div className="flex items-center justify-between gap-[8px]">
                                        {'\n                          '}
                                        <span className="flex items-center gap-[6px] text-[11.5px] font-[650]">
                                          <span>{s.icon}</span> <span>{s.type}</span>
                                        </span>
                                        {'\n                          '}
                                        <span className="text-[10.5px] text-[#A1A1AA]">
                                          <span>{s.time}</span>
                                        </span>
                                        {'\n                        '}
                                      </div>
                                      {'\n                        '}
                                      <div className="text-[11.5px] text-[#52525B] mt-[3px] leading-[1.45]">
                                        <span>{s.detail}</span>
                                      </div>
                                      {'\n                        '}
                                      <div className="text-[11px] text-[#8E8E96] mt-[4px] leading-[1.45] italic">
                                        <span>{s.why}</span>
                                      </div>
                                      {'\n                        '}
                                      <div className="flex items-center gap-[7px] mt-[6px]">
                                        {'\n                          '}
                                        <span className="text-[10.5px] text-[#71717A]">
                                          <span>{s.source}</span>
                                        </span>
                                        {'\n                          '}
                                        <span className="w-[3px] h-[3px] rounded-full bg-[#D4D4D8]"></span>
                                        {'\n                          '}
                                        <span
                                          style={cssToObj(
                                            `font-size:10.5px; font-weight:600; color:${s.confColor}`,
                                          )}
                                        >
                                          <span>{s.confidence}</span>
                                        </span>
                                        {'\n                          '}
                                        <span style={cssToObj(s.strengthStyle)}>
                                          <span>{s.strength}</span>
                                        </span>
                                        {'\n                        '}
                                      </div>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </div>
                                  {'\n                  '}
                                </Fragment>
                              ))}
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n\n              '}
                        {tabPeople ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col gap-[6px]">
                              {'\n                  '}
                              {(people ?? []).map((p: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[9px] py-[10px] px-[11px]">
                                    {'\n                      '}
                                    <div className="flex items-center gap-[9px]">
                                      {'\n                        '}
                                      <div
                                        style={cssToObj(
                                          `width:28px; height:28px; border-radius:50%; flex:none; display:flex; align-items:center; justify-content:center; font-size:10.5px; font-weight:650; color:#3F3F46; background:${p.bg}`,
                                        )}
                                      >
                                        <span>{p.initials}</span>
                                      </div>
                                      {'\n                        '}
                                      <div className="flex-1 [min-width:0]">
                                        {'\n                          '}
                                        <div className="text-[12px] font-[600]">
                                          <span>{p.name}</span>
                                        </div>
                                        {'\n                          '}
                                        <div className="text-[10.5px] text-[#8E8E96]">
                                          <span>{p.title}</span>
                                          {' · '}
                                          <span>{p.dept}</span>
                                        </div>
                                        {'\n                        '}
                                      </div>
                                      {'\n                        '}
                                      <span style={cssToObj(p.badgeStyle)}>
                                        <span>{p.badge}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <div className="flex items-center gap-[6px] mt-[8px] pt-[8px] [border-top:1px_solid_#F4F4F6]">
                                      {'\n                        '}
                                      <span className="text-[10.5px] [font-family:'JetBrains_Mono',_monospace] text-[#52525B] overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                                        <span>{p.email}</span>
                                      </span>
                                      {'\n                        '}
                                      <span
                                        onClick={p.research}
                                        title="Research person"
                                        className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer hv-16bx3qz"
                                      >
                                        {'\n                          '}
                                        <svg
                                          width="11"
                                          height="11"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          stroke="#6D28D9"
                                          strokeWidth="1.7"
                                        >
                                          <circle cx="9" cy="9" r="5.6"></circle>
                                          <path d="M13.2 13.2L17 17"></path>
                                        </svg>
                                        {'\n                        '}
                                      </span>
                                      {'\n                        '}
                                      <span
                                        onClick={p.openLi}
                                        title="Open LinkedIn"
                                        className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer hv-8suzj2"
                                      >
                                        {'\n                          '}
                                        <svg
                                          width="11"
                                          height="11"
                                          viewBox="0 0 20 20"
                                          fill="#0A66C2"
                                        >
                                          <rect width="20" height="20" rx="3"></rect>
                                          <path
                                            d="M5 8h2v7H5zM6 4.6a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM9 8h2v1a2.6 2.6 0 014 2.3V15h-2v-3.3c0-.9-.5-1.4-1.2-1.4S10 10.9 10 11.8V15H9z"
                                            fill="#FFFFFF"
                                          ></path>
                                        </svg>
                                        {'\n                        '}
                                      </span>
                                      {'\n                        '}
                                      <span
                                        onClick={p.copyEmail}
                                        title="Copy email"
                                        className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer hv-16bx3qz"
                                      >
                                        {'\n                          '}
                                        <svg
                                          width="11"
                                          height="11"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          stroke="#52525B"
                                          strokeWidth="1.6"
                                        >
                                          <rect x="7" y="7" width="9.5" height="9.5" rx="2"></rect>
                                          <path d="M13 4.5H5.5a2 2 0 00-2 2V14"></path>
                                        </svg>
                                        {'\n                        '}
                                      </span>
                                      {'\n                        '}
                                      <span
                                        onClick={p.addOutreach}
                                        title="Add to outreach"
                                        className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer hv-16bx3qz"
                                      >
                                        {'\n                          '}
                                        <svg
                                          width="11"
                                          height="11"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          stroke="#52525B"
                                          strokeWidth="1.9"
                                        >
                                          <path d="M10 4.5v11M4.5 10h11"></path>
                                        </svg>
                                        {'\n                        '}
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </div>
                                  {'\n                  '}
                                </Fragment>
                              ))}
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n\n              '}
                        {tabSocial ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col gap-[7px]">
                              {'\n                  '}
                              {(social ?? []).map((s: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[9px] py-[10px] px-[11px]">
                                    {'\n                      '}
                                    <div className="flex items-center justify-between">
                                      {'\n                        '}
                                      <span className="flex items-center gap-[6px] text-[11px] font-[650] text-[#3F3F46]">
                                        {'\n                          '}
                                        <span
                                          style={cssToObj(
                                            `width:6px; height:6px; border-radius:2px; background:${s.dot}`,
                                          )}
                                        ></span>
                                        <span>{s.platform}</span>
                                        {'\n                        '}
                                      </span>
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#A1A1AA]">
                                        <span>{s.time}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <p className="mt-[6px] mx-[0] mb-[0] text-[11.5px] leading-[1.5] text-[#52525B]">
                                      <span>{s.text}</span>
                                    </p>
                                    {'\n                      '}
                                    <div className="flex items-center justify-between mt-[7px]">
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#A1A1AA]">
                                        <span>{s.author}</span>
                                      </span>
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#8E8E96]">
                                        <span>{s.engagement}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </div>
                                  {'\n                  '}
                                </Fragment>
                              ))}
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n\n              '}
                        {tabStack ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col gap-[6px]">
                              {'\n                  '}
                              {(stackRows ?? []).map((t: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[9px] py-[10px] px-[11px]">
                                    {'\n                      '}
                                    <div className="flex items-center justify-between">
                                      {'\n                        '}
                                      <span className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                        <span>{t.category}</span>
                                      </span>
                                      {'\n                        '}
                                      <span style={cssToObj(t.confStyle)}>
                                        <span>{t.confidence}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <div className="flex items-center gap-[7px] mt-[6px]">
                                      {'\n                        '}
                                      <span
                                        style={cssToObj(
                                          `width:6px; height:6px; border-radius:50%; background:${t.dot}`,
                                        )}
                                      ></span>
                                      {'\n                        '}
                                      <span className="text-[12px] font-[600]">
                                        <span>{t.name}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <div className="flex items-center gap-[7px] mt-[6px] text-[10.5px] text-[#A1A1AA]">
                                      {'\n                        '}
                                      <span>
                                        <span>{t.source}</span>
                                      </span>
                                      {'\n                        '}
                                      <span className="w-[3px] h-[3px] rounded-full bg-[#D4D4D8]"></span>
                                      {'\n                        '}
                                      <span>
                                        {'last seen '}
                                        <span>{t.last}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </div>
                                  {'\n                  '}
                                </Fragment>
                              ))}
                              {'\n                  '}
                              <div className="bg-[#FFF8F1] [border:1px_solid_#FED7AA] rounded-[9px] py-[10px] px-[11px]">
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#C2410C] tracking-[.05em] uppercase mb-[6px]">
                                  {'Missing layers'}
                                </div>
                                {'\n                    '}
                                {(missing ?? []).map((m: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <div className="flex items-center gap-[7px] text-[11.5px] text-[#9A3412] py-[2px] px-[0]">
                                      {'\n                        '}
                                      <span className="w-[4px] h-[4px] rounded-full bg-[#EA580C]"></span>
                                      <span>{m}</span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </>
                ) : null}
                {'\n      '}
              </aside>
              {'\n    '}
            </>
          ) : null}
          {'\n  '}
        </div>
        {'\n\n  '}
        {notifsOpen ? (
          <>
            {'\n    '}
            <div className="absolute top-[44px] right-[76px] w-[286px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_18px_44px_rgba(24,24,27,.16)] z-[60] [animation:pop_.14s_ease-out] overflow-hidden">
              {'\n      '}
              <div className="py-[10px] px-[12px] [border-bottom:1px_solid_#F1F1F3] text-[11.5px] font-[650]">
                {'Notifications'}
              </div>
              {'\n      '}
              {(notifications ?? []).map((n: any, __i: number) => (
                <Fragment key={__i}>
                  {'\n        '}
                  <div className="py-[9px] px-[12px] [border-bottom:1px_solid_#F7F7F9] flex gap-[8px]">
                    {'\n          '}
                    <span
                      style={cssToObj(
                        `width:6px; height:6px; border-radius:50%; margin-top:5px; flex:none; background:${n.dot}`,
                      )}
                    ></span>
                    {'\n          '}
                    <div className="[min-width:0]">
                      {'\n            '}
                      <div className="text-[11.5px] text-[#27272A] leading-[1.45]">
                        <span>{n.text}</span>
                      </div>
                      {'\n            '}
                      <div className="text-[10px] text-[#A1A1AA] mt-[2px]">
                        <span>{n.time}</span>
                      </div>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </div>
                  {'\n      '}
                </Fragment>
              ))}
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
        {'\n\n  '}
        {settingsOpen ? (
          <>
            {'\n    '}
            <div className="absolute top-[44px] right-[44px] w-[282px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_18px_44px_rgba(24,24,27,.16)] z-[60] [animation:pop_.14s_ease-out] overflow-hidden">
              {'\n      '}
              <div className="py-[10px] px-[12px] [border-bottom:1px_solid_#F1F1F3] text-[11.5px] font-[650]">
                {'Workspace settings'}
              </div>
              {'\n      '}
              <div className="pt-[5px] px-[12px] pb-[10px]">
                {'\n        '}
                {(settings ?? []).map((s: any, __i: number) => (
                  <Fragment key={__i}>
                    {'\n          '}
                    <div
                      onClick={s.cycle}
                      className="flex items-center justify-between gap-[10px] py-[6px] px-[0] [border-bottom:1px_solid_#F7F7F9] cursor-pointer"
                    >
                      {'\n            '}
                      <span className="text-[11.5px] text-[#52525B]">
                        <span>{s.label}</span>
                      </span>
                      {'\n            '}
                      <span style={cssToObj(s.valStyle)}>
                        <span>{s.value}</span>
                      </span>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </Fragment>
                ))}
                {'\n      '}
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
        {'\n\n  '}
        {creditsOpen ? (
          <>
            {'\n    '}
            <div
              onClick={closeCredits}
              className="absolute [inset:0] bg-[rgba(24,24,27,.3)] z-[70] flex items-center justify-center"
            >
              {'\n      '}
              <div className="w-[432px] bg-[#FFFFFF] rounded-[13px] shadow-[0_24px_60px_rgba(24,24,27,.24)] overflow-hidden [animation:pop_.16s_ease-out]">
                {'\n        '}
                <div className="pt-[15px] px-[17px] pb-[13px] [border-bottom:1px_solid_#F1F1F3] flex items-center justify-between">
                  {'\n          '}
                  <span className="text-[13.5px] font-[650]">{'Credits'}</span>
                  {'\n          '}
                  <button
                    onClick={closeCredits}
                    className="w-[25px] h-[25px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[#A1A1AA] text-[15px] leading-[1] hv-u45kwi"
                  >
                    {'×'}
                  </button>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="py-[15px] px-[17px]">
                  {'\n          '}
                  {creditsWarn ? (
                    <>
                      {'\n            '}
                      <div className="[border:1px_solid_#FED7AA] bg-[#FFF8F1] rounded-[9px] py-[10px] px-[11px] mb-[13px]">
                        {'\n              '}
                        <div className="text-[12px] font-[650] text-[#9A3412]">
                          {'This run is paused'}
                        </div>
                        {'\n              '}
                        <div className="text-[11.5px] text-[#B45309] leading-[1.5] mt-[2px]">
                          {
                            'Enriching the remaining 395 companies needs 7,900 credits. Top up and the run resumes automatically.'
                          }
                        </div>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n          '}
                  <div className="grid [grid-template-columns:1fr_1fr_1fr] gap-[9px]">
                    {'\n            '}
                    <div className="[border:1px_solid_#EDEDF0] rounded-[8px] py-[9px] px-[10px]">
                      {'\n              '}
                      <div className="text-[9.5px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                        {'Remaining'}
                      </div>
                      {'\n              '}
                      <div
                        style={cssToObj(
                          `font-size:17px; font-weight:650; margin-top:3px; color:${creditsColor}; font-variant-numeric:tabular-nums`,
                        )}
                      >
                        <span>{creditsNum}</span>
                      </div>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="[border:1px_solid_#EDEDF0] rounded-[8px] py-[9px] px-[10px]">
                      {'\n              '}
                      <div className="text-[9.5px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                        {'Used this month'}
                      </div>
                      {'\n              '}
                      <div className="text-[17px] font-[650] mt-[3px] tabular-nums">{'18,240'}</div>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="[border:1px_solid_#EDEDF0] rounded-[8px] py-[9px] px-[10px]">
                      {'\n              '}
                      <div className="text-[9.5px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                        {'Next run cost'}
                      </div>
                      {'\n              '}
                      <div className="text-[17px] font-[650] mt-[3px] text-[#C2410C] tabular-nums">
                        {'7,900'}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[14px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase">
                    {'Recent usage'}
                  </div>
                  {'\n          '}
                  {(usage ?? []).map((u: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div className="flex items-center justify-between py-[7px] px-[0] [border-bottom:1px_solid_#F4F4F6]">
                        {'\n              '}
                        <span className="text-[11.5px] text-[#52525B]">
                          <span>{u.label}</span>
                        </span>
                        {'\n              '}
                        <span className="text-[11.5px] font-[600] tabular-nums">
                          <span>{u.cost}</span>
                        </span>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="pt-[12px] px-[17px] pb-[15px] bg-[#FAFAFB] [border-top:1px_solid_#F1F1F3] flex gap-[8px] justify-end">
                  {'\n          '}
                  <button
                    onClick={closeCredits}
                    className="h-[31px] py-[0] px-[12px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[12px] text-[#52525B] font-[550] cursor-pointer hv-u4v0t1"
                  >
                    {'Close'}
                  </button>
                  {'\n          '}
                  <button
                    onClick={topUp}
                    className="h-[31px] py-[0] px-[14px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12px] font-[600] cursor-pointer hv-jdi8ic"
                  >
                    {'Top up 10,000 credits'}
                  </button>
                  {'\n        '}
                </div>
                {'\n      '}
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
        {'\n\n  '}
        {runCellsOpen ? (
          <>
            {'\n    '}
            <div className="absolute [inset:0] bg-[rgba(24,24,27,.3)] z-[72] flex items-center justify-center">
              {'\n      '}
              <div className="w-[400px] bg-[#FFFFFF] rounded-[12px] shadow-[0_24px_60px_rgba(24,24,27,.24)] overflow-hidden [animation:pop_.16s_ease-out]">
                {'\n\n        '}
                {runCellsConfirm ? (
                  <>
                    {'\n          '}
                    <div>
                      {'\n            '}
                      <div className="pt-[15px] px-[17px] pb-[12px] [border-bottom:1px_solid_#F1F1F3] text-[13.5px] font-[650]">
                        {'Run selected cells?'}
                      </div>
                      {'\n            '}
                      <div className="py-[14px] px-[17px]">
                        {'\n              '}
                        <div className="text-[12px] text-[#52525B] leading-[1.6]">
                          {'This will execute '}
                          <strong className="text-[#18181B] font-[650]">{'1 enrichment'}</strong>
                          {' across '}
                          <strong className="text-[#18181B] font-[650]">
                            <span>{runCellsRows}</span>
                            {' rows × 2 columns'}
                          </strong>
                          {'.'}
                        </div>
                        {'\n              '}
                        <div className="mt-[12px] [border:1px_solid_#EDEDF0] rounded-[8px] overflow-hidden">
                          {'\n                '}
                          <div className="flex items-center justify-between py-[8px] px-[11px] [border-bottom:1px_solid_#F4F4F6]">
                            {'\n                  '}
                            <span className="text-[11.5px] text-[#71717A]">{'Cells to run'}</span>
                            {'\n                  '}
                            <span className="text-[11.5px] font-[650] tabular-nums">
                              <span>{runCellsTotalLabel}</span>
                            </span>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="flex items-center justify-between py-[8px] px-[11px] [border-bottom:1px_solid_#F4F4F6]">
                            {'\n                  '}
                            <span className="text-[11.5px] text-[#71717A]">{'Rate'}</span>
                            {'\n                  '}
                            <span className="text-[11.5px] font-[600] text-[#52525B]">
                              {'10 credits / cell'}
                            </span>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="flex items-center justify-between py-[8px] px-[11px] [border-bottom:1px_solid_#F4F4F6]">
                            {'\n                  '}
                            <span className="text-[11.5px] text-[#71717A]">{'Estimated cost'}</span>
                            {'\n                  '}
                            <span className="text-[12.5px] font-[650] text-[#C2410C] tabular-nums">
                              <span>{runCellsCost}</span>
                              {' credits'}
                            </span>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="flex items-center justify-between py-[8px] px-[11px] bg-[#FAFAFB]">
                            {'\n                  '}
                            <span className="text-[11.5px] text-[#71717A]">
                              {'Current balance'}
                            </span>
                            {'\n                  '}
                            <span
                              style={cssToObj(
                                `font-size:11.5px; font-weight:600; color:${creditsColor}; font-variant-numeric:tabular-nums`,
                              )}
                            >
                              <span>{creditsLabel}</span>
                            </span>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        {creditsWarn ? (
                          <>
                            {'\n                '}
                            <div className="mt-[10px] text-[11.5px] text-[#C2410C] leading-[1.5]">
                              {'You have '}
                              <span>{creditsLabel}</span>
                              {'. Running this will open the top-up dialog first.'}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="pt-[12px] px-[17px] pb-[15px] bg-[#FAFAFB] [border-top:1px_solid_#F1F1F3] flex gap-[8px] justify-end">
                        {'\n              '}
                        <button
                          onClick={closeRunCells}
                          className="h-[31px] py-[0] px-[12px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[12px] text-[#52525B] font-[550] cursor-pointer hv-u4v0t1"
                        >
                          {'Cancel'}
                        </button>
                        {'\n              '}
                        <button
                          onClick={confirmRunCells}
                          className="h-[31px] py-[0] px-[16px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12px] font-[600] cursor-pointer hv-jdi8ic"
                        >
                          {'Run'}
                        </button>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </>
                ) : null}
                {'\n\n        '}
                {runCellsActive ? (
                  <>
                    {'\n          '}
                    <div className="py-[20px] px-[17px]">
                      {'\n            '}
                      <div className="flex items-center gap-[8px]">
                        {'\n              '}
                        <span
                          style={cssToObj(
                            'width:13px; height:13px; border-radius:50%; border:2px solid #E6DDFB; border-top-color:#6D28D9; animation:spin .7s linear infinite',
                          )}
                        ></span>
                        {'\n              '}
                        <span className="text-[12.5px] font-[650]">
                          {'Running '}
                          <span>{runCellsProgress}</span>
                          {' cells'}
                        </span>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="h-[5px] rounded-[3px] bg-[#F1F1F3] overflow-hidden mt-[12px]">
                        {'\n              '}
                        <div
                          style={cssToObj(
                            `height:100%; border-radius:3px; background:#6D28D9; width:${runCellsPct}`,
                          )}
                        ></div>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="text-[11.5px] text-[#8E8E96] mt-[9px] leading-[1.5]">
                        {
                          'Writing results back to the table as each cell resolves. You can keep working — this runs in the background.'
                        }
                      </div>
                      {'\n            '}
                      <div className="flex justify-end mt-[14px]">
                        {'\n              '}
                        <button
                          onClick={closeRunCells}
                          className="h-[29px] py-[0] px-[12px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[12px] text-[#B91C1C] font-[550] cursor-pointer hv-ug5na5"
                        >
                          {'Stop run'}
                        </button>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </>
                ) : null}
                {'\n\n        '}
                {runCellsComplete ? (
                  <>
                    {'\n          '}
                    <div className="py-[20px] px-[17px]">
                      {'\n            '}
                      <div className="flex items-center gap-[8px]">
                        {'\n              '}
                        <span className="w-[15px] h-[15px] rounded-full bg-[#ECFDF3] text-[#15803D] flex items-center justify-center text-[9px] font-[700]">
                          {'✓'}
                        </span>
                        {'\n              '}
                        <span className="text-[12.5px] font-[650]">
                          {'Completed '}
                          <span>{runCellsProgress}</span>
                          {' cells'}
                        </span>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="h-[5px] rounded-[3px] bg-[#F1F1F3] overflow-hidden mt-[12px]">
                        {'\n              '}
                        <div className="h-full rounded-[3px] bg-[#22A15D] w-full"></div>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="flex gap-[14px] mt-[10px]">
                        {'\n              '}
                        <span className="text-[11px] text-[#8E8E96]">
                          <strong className="font-[650] text-[#15803D] tabular-nums">
                            <span>{runCellsTotalLabel}</span>
                          </strong>
                          {' completed'}
                        </span>
                        {'\n              '}
                        <span className="text-[11px] text-[#8E8E96]">
                          <strong className="font-[650] text-[#3F3F46]">{'0'}</strong>
                          {' failed'}
                        </span>
                        {'\n              '}
                        <span className="text-[11px] text-[#8E8E96]">
                          <strong className="font-[650] text-[#3F3F46]">{'0'}</strong>
                          {' skipped'}
                        </span>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="text-[11.5px] text-[#8E8E96] mt-[8px] leading-[1.5]">
                        <span>{runCellsCost}</span>
                        {' credits deducted. '}
                        <span>{creditsLabel}</span>
                        {' remaining.'}
                      </div>
                      {'\n            '}
                      <div className="flex justify-end mt-[14px]">
                        {'\n              '}
                        <button
                          onClick={finishRunCells}
                          className="h-[29px] py-[0] px-[14px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12px] font-[600] cursor-pointer hv-jdi8ic"
                        >
                          {'Done'}
                        </button>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </div>
                    {'\n        '}
                  </>
                ) : null}
                {'\n      '}
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
        {'\n\n  '}
        {addColOpen ? (
          <>
            {'\n    '}
            <div
              onClick={closeAddCol}
              className="absolute [inset:0] bg-[rgba(24,24,27,.24)] z-[74] flex justify-end"
            >
              {'\n      '}
              <div className="w-[396px] h-full bg-[#FFFFFF] [border-left:1px_solid_#E5E5EA] flex flex-col shadow-[-16px_0_40px_rgba(24,24,27,.12)]">
                {'\n        '}
                <div className="flex-none flex items-center justify-between py-[12px] px-[16px] [border-bottom:1px_solid_#EFEFF2]">
                  {'\n          '}
                  <div className="text-[13.5px] font-[650]">{'Create Column'}</div>
                  {'\n          '}
                  <button
                    onClick={closeAddCol}
                    title="Collapse panel"
                    className="w-[26px] h-[26px] flex items-center justify-center [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] cursor-pointer text-[#52525B] hv-u4v0t1"
                  >
                    {'\n            '}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect x="3.5" y="4" width="13" height="12" rx="2"></rect>
                      <path d="M13 4v12M6 10h4.5M9 8l2 2-2 2"></path>
                    </svg>
                    {'\n          '}
                  </button>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div className="flex-none pt-[13px] px-[16px] pb-[14px] [border-bottom:1px_solid_#EFEFF2]">
                  {'\n          '}
                  <textarea
                    onChange={onColPrompt}
                    value={colPrompt}
                    placeholder="What should this column do? e.g., Find whether the company is B2B or B2C"
                    className="w-full box-border h-[66px] resize-none [border:1px_solid_#D9D9DF] rounded-[7px] py-[9px] px-[10px] text-[12px] [font-family:inherit] text-[#3F3F46] outline-none leading-[1.5]"
                  ></textarea>
                  {'\n          '}
                  <div className="flex items-center gap-[8px] mt-[9px] relative">
                    {'\n            '}
                    <button
                      onClick={addPromptCol}
                      className="flex-1 h-[33px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12.5px] font-[650] cursor-pointer hv-jdi8ic"
                    >
                      {'Create Column'}
                    </button>
                    {'\n            '}
                    <button
                      onClick={toggleColTools}
                      className="flex-none h-[33px] py-[0] px-[13px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] text-[#3F3F46] rounded-[7px] text-[12.5px] font-[600] cursor-pointer flex items-center gap-[6px] hv-u4v0t1"
                    >
                      {'\n              '}
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#52525B"
                        strokeWidth="1.7"
                      >
                        <path d="M12.4 3.6a3.4 3.4 0 00-4 4.4L4 12.4V16h3.6l4.4-4.4a3.4 3.4 0 004.4-4l-2.2 2.2-2.2-.6-.6-2.2z"></path>
                      </svg>
                      {'\n              Tools\n            '}
                    </button>
                    {'\n            '}
                    {colToolsOpen ? (
                      <>
                        {'\n              '}
                        <div className="absolute top-[38px] right-[0] w-[216px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[10] [animation:pop_.12s_ease-out]">
                          {'\n                '}
                          {(colTools ?? []).map((t: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <div
                                onClick={t.pick}
                                className="py-[7px] px-[8px] rounded-[6px] cursor-pointer hv-u4v0t1"
                              >
                                {'\n                    '}
                                <div className="text-[11.5px] font-[600] text-[#18181B]">
                                  <span>{t.label}</span>
                                </div>
                                {'\n                    '}
                                <div className="text-[10.5px] text-[#8E8E96] mt-[1px]">
                                  <span>{t.desc}</span>
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </>
                    ) : null}
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="text-[10.5px] text-[#8E8E96] mt-[8px]">
                    {'AI column · ~3 credits / cell · '}
                    <span>{creditsLabel}</span>
                    {' available'}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div className="flex-none pt-[10px] px-[16px] pb-[8px]">
                  {'\n          '}
                  <div className="flex items-center gap-[6px] h-[29px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[6px]">
                    {'\n            '}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#A1A1AA"
                      strokeWidth="1.8"
                      className="flex-none"
                    >
                      <circle cx="9" cy="9" r="5.6"></circle>
                      <path d="M13.2 13.2L17 17"></path>
                    </svg>
                    {'\n            '}
                    <input
                      onChange={onColSearch}
                      value={colSearch}
                      placeholder="Search enrichments"
                      className="[border:none] outline-none bg-transparent text-[12px] w-full [min-width:0] text-[#3F3F46]"
                    />
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div className="flex-1 [min-height:0] overflow-auto pt-[0] px-[16px] pb-[16px]">
                  {'\n          '}
                  {(colTypes ?? []).map((t: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={t.add}
                        className="flex items-center gap-[11px] py-[10px] px-[2px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer hv-udcbnc"
                      >
                        {'\n              '}
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#71717A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <path d={t.path}></path>
                        </svg>
                        {'\n              '}
                        <span className="flex-1 [min-width:0]">
                          {'\n                '}
                          <span className="block text-[12.5px] font-[600] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{t.name}</span>
                          </span>
                          {'\n                '}
                          <span className="block text-[11px] text-[#8E8E96] mt-[2px] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{t.desc}</span>
                          </span>
                          {'\n              '}
                        </span>
                        {'\n              '}
                        {t.hasSrc ? (
                          <>
                            {'\n                '}
                            <span style={cssToObj(t.srcStyle)}>
                              <span>{t.src}</span>
                            </span>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n              '}
                        <span className="flex-none flex items-center gap-[4px] whitespace-nowrap">
                          {'\n                '}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#A1A1AA"
                            strokeWidth="1.6"
                          >
                            <circle cx="7.5" cy="10" r="4"></circle>
                            <path d="M11.5 6.4a4 4 0 010 7.2"></path>
                          </svg>
                          {'\n                '}
                          <span className="text-[11px] text-[#71717A] font-[550]">
                            <span>{t.cost}</span>
                          </span>
                          {'\n              '}
                        </span>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n        '}
                </div>
                {'\n      '}
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
        {'\n\n  '}
        {shareOpen ? (
          <>
            {'\n    '}
            <div
              onClick={closeShare}
              className="absolute [inset:0] bg-[rgba(24,24,27,.3)] z-[72] flex items-center justify-center"
            >
              {'\n      '}
              <div className="w-[396px] bg-[#FFFFFF] rounded-[12px] shadow-[0_24px_60px_rgba(24,24,27,.24)] overflow-hidden [animation:pop_.16s_ease-out]">
                {'\n        '}
                <div className="pt-[15px] px-[17px] pb-[12px] [border-bottom:1px_solid_#F1F1F3] flex items-center justify-between">
                  {'\n          '}
                  <span className="text-[13.5px] font-[650]">{'Share research'}</span>
                  {'\n          '}
                  <button
                    onClick={closeShare}
                    className="w-[25px] h-[25px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[#A1A1AA] text-[15px] leading-[1] hv-u45kwi"
                  >
                    {'×'}
                  </button>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="py-[14px] px-[17px]">
                  {'\n          '}
                  <div className="flex items-center gap-[7px] [border:1px_solid_#E4E4E8] rounded-[8px] py-[8px] px-[10px] bg-[#FAFAFB]">
                    {'\n            '}
                    <span className="flex-1 [min-width:0] text-[11.5px] [font-family:'JetBrains_Mono',_monospace] text-[#52525B] overflow-hidden text-ellipsis whitespace-nowrap">
                      <span>{shareLink}</span>
                    </span>
                    {'\n            '}
                    <button
                      onClick={copyShareLink}
                      className="h-[25px] py-[0] px-[10px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[11px] font-[600] cursor-pointer hv-jdi8ic"
                    >
                      {'Copy'}
                    </button>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[12px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase">
                    {'Share with'}
                  </div>
                  {'\n          '}
                  {(shareTargets ?? []).map((t: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={t.pick}
                        className="flex items-center justify-between py-[9px] px-[2px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer text-[11.5px] text-[#3F3F46] hv-1jqpi6r"
                      >
                        {'\n              '}
                        <span>
                          <span>{t.label}</span>
                        </span>
                        {'\n              '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#C4C4CB"
                          strokeWidth="1.8"
                        >
                          <path d="M4 10h11M11 6l4 4-4 4"></path>
                        </svg>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n        '}
                </div>
                {'\n      '}
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
        {'\n\n  '}
        {toast ? (
          <>
            {'\n    '}
            <div className="absolute bottom-[20px] left-[50%] ml-[-140px] w-[280px] bg-[#18181B] text-[#FFFFFF] rounded-[8px] py-[9px] px-[13px] text-[11.5px] text-center z-[80] [animation:pop_.14s_ease-out]">
              <span>{toastText}</span>
            </div>
            {'\n  '}
          </>
        ) : null}
      </div>
    </>
  )
}
