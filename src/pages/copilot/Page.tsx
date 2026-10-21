import { Fragment } from 'react'
import { useModel } from '../../lib/model'
import { cssToObj } from '../../lib/css'
import styles from '../../styles/pages/copilot.css?raw'
import { CopilotModel } from './model'

export function CopilotPage() {
  const {
    isCopilot,
    isRadar,
    goCopilot,
    goRadar,
    copilotTabStyle,
    radarTabStyle,
    convTitle,
    showSidebar,
    showChat,
    expanded,
    scrollPad,
    colWidth,
    toggleExpand,
    collapseTable,
    expandLabel,
    creditsNum,
    creditsLabel,
    creditsWarn,
    creditsColor,
    creditBg,
    creditBorder,
    creditFg,
    afterRun,
    afterColor,
    creditsOpen,
    openCredits,
    closeCredits,
    topUp,
    usage,
    showTopUpCard,
    dismissTopUp,
    agent,
    agentOpen,
    toolsOpen,
    enrichMenuOpen,
    toggleAgent,
    toggleTools,
    toggleEnrichMenu,
    agents,
    tools,
    enrichments,
    settingsOpen,
    toggleSettings,
    settings,
    notifsOpen,
    toggleNotifs,
    notifications,
    contextOpen,
    toggleContext,
    noSelection,
    hasSelectedCompany,
    recentAccounts,
    tabs,
    tabOverview,
    tabSignals,
    tabPeople,
    tabSocial,
    tabStack,
    sel,
    gtmRows,
    actions,
    stack,
    missing,
    signalCards,
    people,
    social,
    historyToday,
    historyYesterday,
    todayCount,
    convSearch,
    onSearchConv,
    newChat,
    reasons,
    overview,
    tableTitle,
    tableCount,
    sheetTabs,
    sheetCompanies,
    sheetLeaders,
    sheetSignals,
    gridCols,
    tableMinWidth,
    headCells,
    rows,
    columnToggles,
    hasSelection,
    selectionLabel,
    clearSelection,
    rowSearch,
    onRowSearch,
    filterOpen,
    sortOpen,
    columnsOpen,
    toggleFilter,
    toggleSort,
    toggleColumns,
    filterBadge,
    filterBtnStyle,
    sortLabel,
    filters,
    sorts,
    quickChips,
    importOpen,
    exportOpen,
    toggleImport,
    toggleExport,
    importItems,
    exportItems,
    enrich,
    runPanelOpen,
    toggleRunPanel,
    runSteps,
    leaderCols,
    leaders,
    signalCols,
    signalRows,
    radarFilters,
    gridCells,
    bubbles,
    likeColor,
    dislikeColor,
    like,
    dislike,
    copyLabel,
    copy,
    regenLabel,
    regenerate,
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
    composerMargin,
    toast,
    toastText,
  } = useModel(
    () => new CopilotModel(),
    (m) => m.renderVals(),
  )

  return (
    <>
      <style>{styles}</style>
      <div
        data-page="copilot"
        className="relative w-full h-[1024px] overflow-hidden flex flex-col bg-[#F7F7F8]"
      >
        {'\n\n  '}
        <header className="h-[52px] flex-none flex items-center justify-between pt-[0] pr-[14px] pb-[0] pl-[16px] bg-[#FFFFFF] [border-bottom:1px_solid_#E8E8EC] z-[20]">
          {'\n    '}
          <div className="flex items-center gap-[14px] [min-width:0]">
            {'\n      '}
            <div className="flex items-center gap-[8px]">
              {'\n        '}
              <svg width="20" height="20" viewBox="0 0 20 20">
                <rect width="20" height="20" rx="6" fill="#6D28D9"></rect>
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
              <span className="text-[14px] font-[650] tracking-[-0.015em]">{'Outmate'}</span>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="w-[1px] h-[20px] bg-[#E8E8EC]"></div>
            {'\n      '}
            <div className="flex items-center gap-[2px] bg-[#F4F4F6] rounded-[8px] p-[2px]">
              {'\n        '}
              <span onClick={goCopilot} style={cssToObj(copilotTabStyle)}>
                {'\n          '}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M10 2.6l1.9 4.5 4.5 1.9-4.5 1.9L10 15.4l-1.9-4.5L3.6 9l4.5-1.9z"></path>
                </svg>
                {'\n          Copilot\n        '}
              </span>
              {'\n        '}
              <span onClick={goRadar} style={cssToObj(radarTabStyle)}>
                {'\n          '}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="10" cy="10" r="7.4"></circle>
                  <circle cx="10" cy="10" r="3.2"></circle>
                </svg>
                {'\n          Radar\n        '}
              </span>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="w-[1px] h-[20px] bg-[#E8E8EC]"></div>
            {'\n      '}
            <span className="text-[12.5px] text-[#3F3F46] font-[550] whitespace-nowrap overflow-hidden text-ellipsis [max-width:300px]">
              <span>{convTitle}</span>
            </span>
            {'\n      '}
            <span className="flex items-center gap-[5px] py-[3px] px-[7px] rounded-[5px] bg-[#ECFDF3] text-[#15803D] text-[11px] font-[600]">
              {'\n        '}
              <span className="w-[5px] h-[5px] rounded-full bg-[#22A15D] [animation:pulse_1.8s_ease-in-out_infinite]"></span>
              {'Live\n      '}
            </span>
            {'\n    '}
          </div>
          {'\n\n    '}
          <div className="flex items-center gap-[8px]">
            {'\n      '}
            <div className="flex items-center gap-[7px] h-[30px] py-[0] px-[10px] [border:1px_solid_#E8E8EC] rounded-[7px] bg-[#FBFBFC] w-[196px] cursor-pointer hv-u45kwi">
              {'\n        '}
              <svg
                width="13"
                height="13"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#A1A1AA"
                strokeWidth="1.7"
              >
                <circle cx="9" cy="9" r="5.6"></circle>
                <path d="M13.2 13.2L17 17"></path>
              </svg>
              {'\n        '}
              <span className="text-[12px] text-[#A1A1AA]">{'Search conversations'}</span>
              {'\n        '}
              <span className="ml-[auto] text-[10px] text-[#B4B4BB] [border:1px_solid_#E8E8EC] rounded-[4px] py-[1px] px-[4px] bg-[#FFFFFF]">
                {'⌘K'}
              </span>
              {'\n      '}
            </div>
            {'\n      '}
            <div
              onClick={openCredits}
              className="hv-1a8qwwd"
              style={cssToObj(
                `display:flex; align-items:center; gap:6px; height:30px; padding:0 10px; border-radius:7px; cursor:pointer; font-size:12px; font-weight:600; border:1px solid ${creditBorder}; background:${creditBg}; color:${creditFg}`,
              )}
            >
              {'\n        '}
              <svg
                width="13"
                height="13"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
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
              className="h-[30px] w-[30px] flex items-center justify-center [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[7px] cursor-pointer relative hv-u69wm2"
            >
              {'\n        '}
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#52525B"
                strokeWidth="1.5"
              >
                <path d="M10 3a4.6 4.6 0 00-4.6 4.6c0 3.6-1.4 4.7-1.4 4.7h12s-1.4-1.1-1.4-4.7A4.6 4.6 0 0010 3z"></path>
                <path d="M8.6 15.2a1.6 1.6 0 002.8 0"></path>
              </svg>
              {'\n        '}
              <span className="absolute top-[5px] right-[5px] w-[6px] h-[6px] rounded-full bg-[#EA580C] [border:1.5px_solid_#FFFFFF]"></span>
              {'\n      '}
            </button>
            {'\n      '}
            <button
              onClick={toggleSettings}
              className="h-[30px] w-[30px] flex items-center justify-center [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[7px] cursor-pointer hv-u69wm2"
            >
              {'\n        '}
              <svg
                width="15"
                height="15"
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
            <div className="w-[28px] h-[28px] rounded-full bg-[#EDE4FD] text-[#5B21B6] text-[10.5px] font-[650] flex items-center justify-center cursor-pointer">
              {'GA'}
            </div>
            {'\n    '}
          </div>
          {'\n  '}
        </header>
        {'\n\n  '}
        <div className="flex-1 flex [min-height:0]">
          {'\n\n    '}
          {showSidebar ? (
            <>
              {'\n      '}
              <aside className="w-[230px] flex-none bg-[#FBFBFC] [border-right:1px_solid_#E8E8EC] flex flex-col [min-height:0]">
                {'\n        '}
                <div className="pt-[12px] px-[12px] pb-[10px] flex flex-col gap-[9px]">
                  {'\n          '}
                  <button
                    onClick={newChat}
                    className="flex items-center justify-center gap-[7px] h-[32px] [border:1px_solid_#DDD6F3] bg-[#F5F1FD] text-[#5B21B6] rounded-[8px] text-[12.5px] font-[600] cursor-pointer hv-ttjng3"
                  >
                    {'\n            '}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M10 4.5v11M4.5 10h11"></path>
                    </svg>
                    {'\n            New chat\n          '}
                  </button>
                  {'\n          '}
                  <div className="flex items-center gap-[6px] h-[29px] py-[0] px-[9px] [border:1px_solid_#E8E8EC] rounded-[7px] bg-[#FFFFFF]">
                    {'\n            '}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="#A1A1AA"
                      strokeWidth="1.7"
                    >
                      <circle cx="9" cy="9" r="5.6"></circle>
                      <path d="M13.2 13.2L17 17"></path>
                    </svg>
                    {'\n            '}
                    <input
                      onChange={onSearchConv}
                      value={convSearch}
                      placeholder="Search conversations"
                      className="[border:none] outline-none bg-transparent text-[11.5px] w-full text-[#3F3F46]"
                    />
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div className="pt-[0] px-[8px] pb-[12px] overflow-y-auto [min-height:0] flex-1">
                  {'\n          '}
                  <div className="flex items-center justify-between pt-[8px] px-[8px] pb-[5px]">
                    {'\n            '}
                    <span className="text-[10.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                      {'Today'}
                    </span>
                    {'\n            '}
                    <span className="text-[10px] text-[#B4B4BB] tabular-nums">
                      <span>{todayCount}</span>
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  {(historyToday ?? []).map((h: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={h.open}
                        className="hv-u2196x"
                        style={cssToObj(
                          `position:relative; display:flex; align-items:flex-start; gap:8px; padding:7px 8px; border-radius:7px; cursor:pointer; margin-bottom:1px; background:${h.bg}`,
                        )}
                      >
                        {'\n              '}
                        <div
                          style={cssToObj(
                            `width:3px; align-self:stretch; border-radius:2px; margin-top:1px; background:${h.bar}`,
                          )}
                        ></div>
                        {'\n              '}
                        <div className="[min-width:0] flex-1">
                          {'\n                '}
                          <div
                            style={cssToObj(
                              `font-size:12px; font-weight:${h.weight}; color:${h.color}; line-height:1.35; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                            )}
                          >
                            <span>{h.title}</span>
                          </div>
                          {'\n                '}
                          <div className="flex items-center gap-[5px] mt-[2px]">
                            {'\n                  '}
                            {h.running ? (
                              <>
                                {'\n                    '}
                                <span className="w-[5px] h-[5px] rounded-full bg-[#22A15D] [animation:pulse_1.6s_ease-in-out_infinite]"></span>
                                {'\n                  '}
                              </>
                            ) : null}
                            {'\n                  '}
                            <span className="text-[10.5px] text-[#A1A1AA]">
                              <span>{h.meta}</span>
                            </span>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        <span
                          onClick={h.menu}
                          className="w-[18px] h-[18px] flex items-center justify-center rounded-[4px] text-[#B4B4BB] text-[13px] leading-[1] flex-none hv-1wubm68"
                        >
                          {'⋯'}
                        </span>
                        {'\n              '}
                        {h.menuOpen ? (
                          <>
                            {'\n                '}
                            <div className="absolute top-[30px] right-[6px] w-[136px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_10px_26px_rgba(24,24,27,.14)] p-[4px] z-[30] [animation:pop_.12s_ease-out]">
                              {'\n                  '}
                              <div
                                onClick={h.closeMenu}
                                className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                              >
                                {'Rename'}
                              </div>
                              {'\n                  '}
                              <div
                                onClick={h.closeMenu}
                                className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                              >
                                {'Duplicate'}
                              </div>
                              {'\n                  '}
                              <div
                                onClick={h.closeMenu}
                                className="py-[6px] px-[8px] rounded-[5px] text-[11.5px] text-[#B91C1C] cursor-pointer hv-ug5na5"
                              >
                                {'Delete'}
                              </div>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n          '}
                  <div className="pt-[12px] px-[8px] pb-[5px] text-[10.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                    {'Yesterday'}
                  </div>
                  {'\n          '}
                  {(historyYesterday ?? []).map((h: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={h.open}
                        className="hv-u2196x"
                        style={cssToObj(
                          `display:flex; align-items:flex-start; gap:8px; padding:7px 8px; border-radius:7px; cursor:pointer; margin-bottom:1px; background:${h.bg}`,
                        )}
                      >
                        {'\n              '}
                        <div
                          style={cssToObj(
                            `width:3px; align-self:stretch; border-radius:2px; margin-top:1px; background:${h.bar}`,
                          )}
                        ></div>
                        {'\n              '}
                        <div className="[min-width:0] flex-1">
                          {'\n                '}
                          <div
                            style={cssToObj(
                              `font-size:12px; font-weight:${h.weight}; color:${h.color}; line-height:1.35; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                            )}
                          >
                            <span>{h.title}</span>
                          </div>
                          {'\n                '}
                          <div className="text-[10.5px] text-[#A1A1AA] mt-[2px]">
                            <span>{h.meta}</span>
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div className="[border-top:1px_solid_#EDEDF0] py-[10px] px-[12px] flex flex-col gap-[7px]">
                  {'\n          '}
                  <div className="flex items-center justify-between">
                    {'\n            '}
                    <span className="text-[10.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                      {'Radar'}
                    </span>
                    {'\n            '}
                    <span
                      onClick={goRadar}
                      className="text-[10.5px] text-[#6D28D9] font-[600] cursor-pointer"
                    >
                      {'Open'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex justify-between text-[11.5px] text-[#52525B]">
                    <span>{'Accounts tracked'}</span>
                    <span className="font-[600] text-[#18181B] tabular-nums">{'1,284'}</span>
                  </div>
                  {'\n          '}
                  <div className="flex justify-between text-[11.5px] text-[#52525B]">
                    <span>{'Signals · 7d'}</span>
                    <span className="font-[600] text-[#18181B] tabular-nums">{'642'}</span>
                  </div>
                  {'\n          '}
                  <div className="flex justify-between text-[11.5px] text-[#52525B]">
                    <span>{'High intent'}</span>
                    <span className="font-[600] text-[#15803D] tabular-nums">{'42'}</span>
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </aside>
              {'\n    '}
            </>
          ) : null}
          {'\n\n    '}
          <main className="flex-1 [min-width:0] flex flex-col bg-[#FFFFFF] relative">
            {'\n\n      '}
            {isCopilot ? (
              <>
                {'\n        '}
                <div className="flex-1 [min-height:0] flex flex-col">
                  {'\n\n          '}
                  {showChat ? (
                    <>
                      {'\n            '}
                      <div className="flex-none h-[50px] flex items-center justify-between py-[0] px-[22px] [border-bottom:1px_solid_#EFEFF2]">
                        {'\n              '}
                        <div className="flex flex-col">
                          {'\n                '}
                          <span className="text-[13px] font-[650] tracking-[-0.01em]">
                            {'Ask Outmate'}
                          </span>
                          {'\n                '}
                          <span className="text-[11px] text-[#8E8E96]">
                            {'Research companies, people, signals and GTM opportunities.'}
                          </span>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        <div className="flex items-center gap-[6px] relative">
                          {'\n                '}
                          <div
                            onClick={toggleAgent}
                            className="flex items-center gap-[7px] h-[28px] py-[0] px-[9px] [border:1px_solid_#E8E8EC] rounded-[7px] bg-[#FFFFFF] cursor-pointer text-[12px] font-[550] text-[#3F3F46] hv-u69wm2"
                          >
                            {'\n                  '}
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#6D28D9"
                              strokeWidth="1.6"
                            >
                              <rect x="3.5" y="6" width="13" height="10" rx="3"></rect>
                              <path d="M10 3v3"></path>
                              <circle cx="7.6" cy="11" r="1"></circle>
                              <circle cx="12.4" cy="11" r="1"></circle>
                            </svg>
                            {'\n                  '}
                            <span>{agent}</span>
                            {'\n                  '}
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#A1A1AA"
                              strokeWidth="2"
                            >
                              <path d="M5 8l5 5 5-5"></path>
                            </svg>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <button
                            onClick={toggleTools}
                            className="h-[28px] w-[28px] flex items-center justify-center [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[7px] cursor-pointer hv-u69wm2"
                          >
                            {'\n                  '}
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#52525B"
                              strokeWidth="1.5"
                            >
                              <path d="M13.4 3.4a4 4 0 00-5 5L3.6 13.2a1.6 1.6 0 002.2 2.2l4.8-4.8a4 4 0 005-5l-2.3 2.3-2.1-.6-.6-2.1z"></path>
                            </svg>
                            {'\n                '}
                          </button>
                          {'\n                '}
                          <button
                            onClick={toggleContext}
                            className="h-[28px] flex items-center gap-[6px] py-[0] px-[9px] [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[7px] cursor-pointer text-[12px] text-[#52525B] font-[550] hv-u69wm2"
                          >
                            {'\n                  '}
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <rect x="3" y="4" width="14" height="12" rx="2.5"></rect>
                              <path d="M12.4 4v12"></path>
                            </svg>
                            {'\n                  Context\n                '}
                          </button>
                          {'\n\n                '}
                          {agentOpen ? (
                            <>
                              {'\n                  '}
                              <div className="absolute top-[34px] right-[64px] w-[236px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_12px_32px_rgba(24,24,27,.12)] p-[5px] z-[40] [animation:pop_.13s_ease-out]">
                                {'\n                    '}
                                {(agents ?? []).map((a: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <div
                                      onClick={a.pick}
                                      className="hv-u4v0t1"
                                      style={cssToObj(
                                        `display:flex; align-items:flex-start; gap:9px; padding:7px 8px; border-radius:7px; cursor:pointer; background:${a.bg}`,
                                      )}
                                    >
                                      {'\n                        '}
                                      <div
                                        style={cssToObj(
                                          `width:22px; height:22px; border-radius:6px; flex:none; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; background:${a.chipBg}; color:${a.chipFg}`,
                                        )}
                                      >
                                        <span>{a.abbr}</span>
                                      </div>
                                      {'\n                        '}
                                      <div className="[min-width:0]">
                                        {'\n                          '}
                                        <div className="text-[12px] font-[600] text-[#18181B]">
                                          <span>{a.name}</span>
                                        </div>
                                        {'\n                          '}
                                        <div className="text-[10.5px] text-[#8E8E96] leading-[1.35]">
                                          <span>{a.desc}</span>
                                        </div>
                                        {'\n                        '}
                                      </div>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n\n                '}
                          {toolsOpen ? (
                            <>
                              {'\n                  '}
                              <div className="absolute top-[34px] right-[34px] w-[224px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_12px_32px_rgba(24,24,27,.12)] p-[5px] z-[40] [animation:pop_.13s_ease-out]">
                                {'\n                    '}
                                <div className="pt-[6px] px-[8px] pb-[4px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                  {'GTM tools'}
                                </div>
                                {'\n                    '}
                                {(tools ?? []).map((t: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <div
                                      onClick={t.pick}
                                      className="flex items-center justify-between gap-[8px] py-[6px] px-[8px] rounded-[6px] cursor-pointer text-[12px] text-[#3F3F46] hv-u4v0t1"
                                    >
                                      {'\n                        '}
                                      <span>
                                        <span>{t.name}</span>
                                      </span>
                                      {'\n                        '}
                                      <span className="text-[10px] text-[#A1A1AA] tabular-nums">
                                        <span>{t.cost}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n\n          '}
                  {expanded ? (
                    <>
                      {'\n            '}
                      <div className="flex-none h-[44px] flex items-center justify-between py-[0] px-[18px] [border-bottom:1px_solid_#EFEFF2] bg-[#FBFBFC]">
                        {'\n              '}
                        <div className="flex items-center gap-[10px]">
                          {'\n                '}
                          <button
                            onClick={collapseTable}
                            className="h-[27px] flex items-center gap-[6px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[12px] text-[#3F3F46] font-[550] cursor-pointer hv-u4v0t1"
                          >
                            {'\n                  '}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M16 10H5M9 6l-4 4 4 4"></path>
                            </svg>
                            {'\n                  Back to Copilot\n                '}
                          </button>
                          {'\n                '}
                          <span className="text-[12.5px] font-[650]">{'Full database view'}</span>
                          {'\n                '}
                          <span className="text-[11px] text-[#8E8E96]">
                            {'B2B SaaS · HubSpot & Salesforce gap'}
                          </span>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        <span className="text-[11px] text-[#8E8E96]">
                          {'Same account context as the conversation'}
                        </span>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n\n          '}
                  <div
                    style={cssToObj(`flex:1; min-height:0; overflow-y:auto; padding:${scrollPad}`)}
                  >
                    {'\n            '}
                    <div
                      style={cssToObj(
                        `max-width:${colWidth}; margin:0 auto; display:flex; flex-direction:column; gap:18px`,
                      )}
                    >
                      {'\n\n              '}
                      {showChat ? (
                        <>
                          {'\n                '}
                          <div className="flex flex-col gap-[18px]">
                            {'\n                  '}
                            <div className="flex justify-end">
                              {'\n                    '}
                              <div className="[max-width:80%] bg-[#F4F4F6] [border:1px_solid_#EAEAEE] rounded-[12px_12px_4px_12px] py-[10px] px-[13px] text-[13px] leading-[1.55] text-[#27272A]">
                                {
                                  "Find B2B SaaS companies with 50–500 employees that currently use HubSpot or Salesforce but don't have a unified GTM platform."
                                }
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n\n                  '}
                            <div className="flex gap-[11px]">
                              {'\n                    '}
                              <div className="w-[24px] h-[24px] flex-none rounded-[7px] bg-[#F1EDFC] flex items-center justify-center mt-[2px]">
                                {'\n                      '}
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="#6D28D9"
                                  strokeWidth="1.7"
                                >
                                  <path d="M10 2.6l1.9 4.5 4.5 1.9-4.5 1.9L10 15.4l-1.9-4.5L3.6 9l4.5-1.9z"></path>
                                </svg>
                                {'\n                    '}
                              </div>
                              {'\n                    '}
                              <div className="flex-1 [min-width:0] flex flex-col gap-[13px]">
                                {'\n                      '}
                                <p className="m-[0] text-[13.5px] leading-[1.6] text-[#27272A]">
                                  <strong className="font-[650]">
                                    {'Found 42 qualifying accounts'}
                                  </strong>
                                  {
                                    ' from 1,284 tracked companies. I scanned CRM fingerprints, hiring boards, website intent and social activity from the last 7 days.'
                                  }
                                </p>
                                {'\n\n                      '}
                                <div className="[border:1px_solid_#E8E8EC] rounded-[12px] bg-[#FBFBFC] py-[13px] px-[14px]">
                                  {'\n                        '}
                                  <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[10px]">
                                    {'Why these accounts?'}
                                  </div>
                                  {'\n                        '}
                                  <div className="flex flex-col gap-[6px]">
                                    {'\n                          '}
                                    {(reasons ?? []).map((r: any, __i: number) => (
                                      <Fragment key={__i}>
                                        {'\n                            '}
                                        <div className="flex items-start gap-[8px] text-[12.5px] text-[#52525B] leading-[1.5]">
                                          {'\n                              '}
                                          <span className="w-[4px] h-[4px] rounded-full bg-[#C4B5FD] mt-[7px] flex-none"></span>
                                          {'\n                              '}
                                          <span>
                                            <span>{r}</span>
                                          </span>
                                          {'\n                            '}
                                        </div>
                                        {'\n                          '}
                                      </Fragment>
                                    ))}
                                    {'\n                        '}
                                  </div>
                                  {'\n                        '}
                                  <div className="grid [grid-template-columns:repeat(4,1fr)] gap-[9px] mt-[12px] pt-[12px] [border-top:1px_solid_#EDEDF0]">
                                    {'\n                          '}
                                    {(overview ?? []).map((o: any, __i: number) => (
                                      <Fragment key={__i}>
                                        {'\n                            '}
                                        <div>
                                          {'\n                              '}
                                          <div className="text-[17px] font-[650] tracking-[-0.02em] tabular-nums">
                                            <span>{o.value}</span>
                                          </div>
                                          {'\n                              '}
                                          <div className="text-[10.5px] text-[#8E8E96] leading-[1.3] mt-[1px]">
                                            <span>{o.label}</span>
                                          </div>
                                          {'\n                            '}
                                        </div>
                                        {'\n                          '}
                                      </Fragment>
                                    ))}
                                    {'\n                        '}
                                  </div>
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </>
                      ) : null}
                      {'\n\n              '}
                      <div className="[border:1px_solid_#E8E8EC] rounded-[12px] bg-[#FFFFFF] overflow-hidden shadow-[0_1px_2px_rgba(24,24,27,.04)]">
                        {'\n\n                '}
                        <div className="flex items-center justify-between py-[10px] px-[12px] [border-bottom:1px_solid_#EFEFF2]">
                          {'\n                  '}
                          <div className="flex items-center gap-[9px] [min-width:0]">
                            {'\n                    '}
                            <span className="text-[12.5px] font-[650]">
                              <span>{tableTitle}</span>
                            </span>
                            {'\n                    '}
                            <span className="text-[10.5px] text-[#8E8E96] bg-[#F4F4F6] rounded-[5px] py-[2px] px-[6px] tabular-nums whitespace-nowrap">
                              <span>{tableCount}</span>
                            </span>
                            {'\n                    '}
                            {hasSelection ? (
                              <>
                                {'\n                      '}
                                <span className="flex items-center gap-[7px] text-[11px] text-[#5B21B6] bg-[#F5F1FD] [border:1px_solid_#E6DDFB] rounded-[6px] py-[2px] px-[8px] whitespace-nowrap">
                                  {'\n                        '}
                                  <span>{selectionLabel}</span>
                                  {'\n                        '}
                                  <span
                                    onClick={clearSelection}
                                    className="cursor-pointer text-[#8B72C7]"
                                  >
                                    {'clear'}
                                  </span>
                                  {'\n                      '}
                                </span>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                  '}
                          </div>
                          {'\n                  '}
                          <div className="flex items-center gap-[6px] relative">
                            {'\n                    '}
                            <button
                              onClick={enrich}
                              className="h-[27px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                            >
                              {'\n                      '}
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="#6D28D9"
                                strokeWidth="1.8"
                              >
                                <path d="M10 3.4l1.6 3.8 3.8 1.6-3.8 1.6L10 14.2l-1.6-3.8L4.6 8.8l3.8-1.6z"></path>
                              </svg>
                              {'\n                      Enrich\n                    '}
                            </button>
                            {'\n                    '}
                            <button
                              onClick={toggleImport}
                              className="h-[27px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                            >
                              {'\n                      Import\n                      '}
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
                              {'\n                    '}
                            </button>
                            {'\n                    '}
                            <button
                              onClick={toggleExport}
                              className="h-[27px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] font-[550] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                            >
                              {'\n                      Export\n                      '}
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
                              {'\n                    '}
                            </button>
                            {'\n                    '}
                            <button
                              onClick={goRadar}
                              className="h-[27px] py-[0] px-[10px] [border:1px_solid_#DDD6F3] bg-[#F5F1FD] rounded-[6px] text-[11.5px] text-[#5B21B6] font-[600] cursor-pointer flex items-center gap-[5px] hv-ttjng3"
                            >
                              {'\n                      Open in Radar\n                      '}
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M7 13l6-6M8 7h5v5"></path>
                              </svg>
                              {'\n                    '}
                            </button>
                            {'\n                    '}
                            {importOpen ? (
                              <>
                                {'\n                      '}
                                <div className="absolute top-[32px] right-[206px] w-[170px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_12px_30px_rgba(24,24,27,.13)] p-[4px] z-[30] [animation:pop_.13s_ease-out]">
                                  {'\n                        '}
                                  {(importItems ?? []).map((e: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div
                                        onClick={e.pick}
                                        className="py-[6px] px-[8px] rounded-[6px] text-[12px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                                      >
                                        <span>{e.label}</span>
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            {exportOpen ? (
                              <>
                                {'\n                      '}
                                <div className="absolute top-[32px] right-[132px] w-[174px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_12px_30px_rgba(24,24,27,.13)] p-[4px] z-[30] [animation:pop_.13s_ease-out]">
                                  {'\n                        '}
                                  {(exportItems ?? []).map((e: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div
                                        onClick={e.pick}
                                        className="py-[6px] px-[8px] rounded-[6px] text-[12px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                                      >
                                        <span>{e.label}</span>
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                  '}
                          </div>
                          {'\n                '}
                        </div>
                        {'\n\n                '}
                        <div className="flex items-center gap-[2px] py-[0] px-[12px] [border-bottom:1px_solid_#EFEFF2] bg-[#FBFBFC]">
                          {'\n                  '}
                          {(sheetTabs ?? []).map((t: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                    '}
                              <div onClick={t.pick} style={cssToObj(t.style)}>
                                {'\n                      '}
                                <span>{t.name}</span>
                                {'\n                      '}
                                <span className="text-[10px] text-[#A1A1AA] tabular-nums">
                                  <span>{t.count}</span>
                                </span>
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </Fragment>
                          ))}
                          {'\n                  '}
                          <div className="ml-[auto] flex items-center gap-[6px] relative">
                            {'\n                    '}
                            <div
                              onClick={toggleRunPanel}
                              className="flex items-center gap-[6px] h-[24px] py-[0] px-[8px] rounded-[6px] bg-[#ECFDF3] [border:1px_solid_#C6EFD8] cursor-pointer text-[11px] text-[#15803D] font-[600] hv-t69kef"
                            >
                              {'\n                      '}
                              <span className="w-[6px] h-[6px] rounded-full bg-[#22A15D] [animation:pulse_1.4s_ease-in-out_infinite]"></span>
                              {
                                '\n                      Running 364 / 2,370 cells\n                    '
                              }
                            </div>
                            {'\n                    '}
                            {runPanelOpen ? (
                              <>
                                {'\n                      '}
                                <div className="absolute top-[30px] right-[0] w-[288px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[11px] shadow-[0_16px_40px_rgba(24,24,27,.15)] z-[40] [animation:pop_.13s_ease-out] overflow-hidden">
                                  {'\n                        '}
                                  <div className="py-[11px] px-[13px] [border-bottom:1px_solid_#F1F1F3] flex items-center justify-between">
                                    {'\n                          '}
                                    <span className="text-[12px] font-[650]">{'Run progress'}</span>
                                    {'\n                          '}
                                    <span className="text-[11px] text-[#8E8E96] tabular-nums">
                                      {'364 / 2,370 cells'}
                                    </span>
                                    {'\n                        '}
                                  </div>
                                  {'\n                        '}
                                  <div className="py-[11px] px-[13px] flex flex-col gap-[9px]">
                                    {'\n                          '}
                                    {(runSteps ?? []).map((s: any, __i: number) => (
                                      <Fragment key={__i}>
                                        {'\n                            '}
                                        <div className="flex items-center gap-[9px]">
                                          {'\n                              '}
                                          <span
                                            style={cssToObj(
                                              `font-size:12px; color:${s.iconColor}; width:13px; text-align:center`,
                                            )}
                                          >
                                            <span>{s.icon}</span>
                                          </span>
                                          {'\n                              '}
                                          <span
                                            style={cssToObj(
                                              `font-size:12px; color:${s.color}; font-weight:${s.weight}`,
                                            )}
                                          >
                                            <span>{s.label}</span>
                                          </span>
                                          {'\n                              '}
                                          <span className="ml-[auto] text-[11px] text-[#A1A1AA] tabular-nums">
                                            <span>{s.meta}</span>
                                          </span>
                                          {'\n                            '}
                                        </div>
                                        {'\n                          '}
                                      </Fragment>
                                    ))}
                                    {'\n                          '}
                                    <div className="h-[4px] rounded-[3px] bg-[#F1F1F3] overflow-hidden mt-[2px]">
                                      {'\n                            '}
                                      <div className="h-full w-[15.4%] rounded-[3px] bg-[#6D28D9]"></div>
                                      {'\n                          '}
                                    </div>
                                    {'\n                          '}
                                    <div className="grid [grid-template-columns:1fr_1fr] gap-[7px] mt-[3px]">
                                      {'\n                            '}
                                      <div className="[border:1px_solid_#EDEDF0] rounded-[7px] py-[7px] px-[9px]">
                                        <div className="text-[10px] text-[#A1A1AA]">
                                          {'Credits consumed'}
                                        </div>
                                        <div className="text-[13px] font-[650] tabular-nums">
                                          {'64'}
                                        </div>
                                      </div>
                                      {'\n                            '}
                                      <div className="[border:1px_solid_#EDEDF0] rounded-[7px] py-[7px] px-[9px]">
                                        <div className="text-[10px] text-[#A1A1AA]">
                                          {'Est. remaining'}
                                        </div>
                                        <div className="text-[13px] font-[650] tabular-nums">
                                          {'~4 min'}
                                        </div>
                                      </div>
                                      {'\n                          '}
                                    </div>
                                    {'\n                          '}
                                    <div className="flex items-center justify-between text-[11px] text-[#8E8E96] pt-[3px]">
                                      {'\n                            '}
                                      <span>{'1 failed cell · retry queued'}</span>
                                      {'\n                            '}
                                      <span className="flex gap-[6px]">
                                        {'\n                              '}
                                        <span className="text-[#52525B] cursor-pointer font-[600]">
                                          {'Pause'}
                                        </span>
                                        {'\n                              '}
                                        <span className="text-[#B91C1C] cursor-pointer font-[600]">
                                          {'Stop'}
                                        </span>
                                        {'\n                            '}
                                      </span>
                                      {'\n                          '}
                                    </div>
                                    {'\n                        '}
                                  </div>
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            <button
                              onClick={toggleExpand}
                              className="w-[24px] h-[24px] flex items-center justify-center [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] cursor-pointer hv-u4v0t1"
                            >
                              {'\n                      '}
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="#52525B"
                                strokeWidth="1.7"
                              >
                                <path d="M12 3h5v5M8 17H3v-5M17 3l-6 6M3 17l6-6"></path>
                              </svg>
                              {'\n                    '}
                            </button>
                            {'\n                  '}
                          </div>
                          {'\n                '}
                        </div>
                        {'\n\n                '}
                        <div className="flex items-center gap-[7px] py-[8px] px-[12px] [border-bottom:1px_solid_#EFEFF2]">
                          {'\n                  '}
                          <div className="flex items-center gap-[6px] h-[26px] py-[0] px-[8px] [border:1px_solid_#E8E8EC] rounded-[6px] bg-[#FBFBFC] w-[168px]">
                            {'\n                    '}
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#A1A1AA"
                              strokeWidth="1.8"
                            >
                              <circle cx="9" cy="9" r="5.6"></circle>
                              <path d="M13.2 13.2L17 17"></path>
                            </svg>
                            {'\n                    '}
                            <input
                              onChange={onRowSearch}
                              value={rowSearch}
                              placeholder="Search rows"
                              className="[border:none] outline-none bg-transparent text-[11.5px] w-full text-[#3F3F46]"
                            />
                            {'\n                  '}
                          </div>
                          {'\n                  '}
                          <div className="relative flex gap-[6px]">
                            {'\n                    '}
                            <button onClick={toggleFilter} style={cssToObj(filterBtnStyle)}>
                              {'\n                      '}
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
                              {'\n                      Filter '}
                              <span>{filterBadge}</span>
                              {'\n                    '}
                            </button>
                            {'\n                    '}
                            <button
                              onClick={toggleSort}
                              className="h-[26px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                            >
                              {'\n                      '}
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
                              {'\n                      '}
                              <span>{sortLabel}</span>
                              {'\n                    '}
                            </button>
                            {'\n                    '}
                            <button
                              onClick={toggleColumns}
                              className="h-[26px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer flex items-center gap-[5px] hv-u4v0t1"
                            >
                              {'\n                      '}
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                              >
                                <rect x="3" y="4" width="14" height="12" rx="2"></rect>
                                <path d="M8 4v12M13 4v12"></path>
                              </svg>
                              {'\n                      Columns\n                    '}
                            </button>
                            {'\n                    '}
                            {filterOpen ? (
                              <>
                                {'\n                      '}
                                <div className="absolute top-[31px] left-[0] w-[204px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_12px_30px_rgba(24,24,27,.13)] p-[5px] z-[35] [animation:pop_.13s_ease-out]">
                                  {'\n                        '}
                                  <div className="pt-[6px] px-[8px] pb-[4px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                    {'Quick filters'}
                                  </div>
                                  {'\n                        '}
                                  {(filters ?? []).map((f: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div
                                        onClick={f.pick}
                                        className="hv-u4v0t1"
                                        style={cssToObj(
                                          `display:flex; align-items:center; justify-content:space-between; padding:6px 8px; border-radius:6px; cursor:pointer; font-size:12px; color:${f.color}; font-weight:${f.weight}`,
                                        )}
                                      >
                                        {'\n                            '}
                                        <span>
                                          <span>{f.label}</span>
                                        </span>
                                        {'\n                            '}
                                        <span className="text-[10.5px] text-[#A1A1AA] tabular-nums">
                                          <span>{f.count}</span>
                                        </span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            {sortOpen ? (
                              <>
                                {'\n                      '}
                                <div className="absolute top-[31px] left-[78px] w-[180px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_12px_30px_rgba(24,24,27,.13)] p-[5px] z-[35] [animation:pop_.13s_ease-out]">
                                  {'\n                        '}
                                  {(sorts ?? []).map((f: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div
                                        onClick={f.pick}
                                        className="hv-u4v0t1"
                                        style={cssToObj(
                                          `display:flex; align-items:center; justify-content:space-between; padding:6px 8px; border-radius:6px; cursor:pointer; font-size:12px; color:${f.color}; font-weight:${f.weight}`,
                                        )}
                                      >
                                        {'\n                            '}
                                        <span>
                                          <span>{f.label}</span>
                                        </span>
                                        {'\n                            '}
                                        <span className="text-[#6D28D9] text-[11px]">
                                          <span>{f.check}</span>
                                        </span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            {columnsOpen ? (
                              <>
                                {'\n                      '}
                                <div className="absolute top-[31px] left-[160px] w-[196px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_12px_30px_rgba(24,24,27,.13)] p-[5px] z-[35] [animation:pop_.13s_ease-out] [max-height:280px] overflow-y-auto">
                                  {'\n                        '}
                                  <div className="pt-[6px] px-[8px] pb-[4px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                    {'Visible columns'}
                                  </div>
                                  {'\n                        '}
                                  {(columnToggles ?? []).map((c: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div
                                        onClick={c.pick}
                                        className="flex items-center gap-[8px] py-[6px] px-[8px] rounded-[6px] cursor-pointer text-[12px] text-[#3F3F46] hv-u4v0t1"
                                      >
                                        {'\n                            '}
                                        <span
                                          style={cssToObj(
                                            `width:14px; height:14px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#FFFFFF; border:1px solid ${c.boxBorder}; background:${c.boxBg}`,
                                          )}
                                        >
                                          <span>{c.check}</span>
                                        </span>
                                        {'\n                            '}
                                        <span>{c.label}</span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                  '}
                          </div>
                          {'\n                  '}
                          <div className="ml-[auto] flex items-center gap-[5px] overflow-x-auto">
                            {'\n                    '}
                            {(quickChips ?? []).map((f: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                      '}
                                <span onClick={f.pick} style={cssToObj(f.style)}>
                                  <span>{f.label}</span>
                                </span>
                                {'\n                    '}
                              </Fragment>
                            ))}
                            {'\n                  '}
                          </div>
                          {'\n                '}
                        </div>
                        {'\n\n                '}
                        {sheetCompanies ? (
                          <>
                            {'\n                  '}
                            <div className="overflow-x-auto">
                              {'\n                    '}
                              <div style={cssToObj(`min-width:${tableMinWidth}`)}>
                                {'\n                      '}
                                <div
                                  style={cssToObj(
                                    `display:grid; grid-template-columns:${gridCols}; background:#F7F7F9; border-bottom:1px solid #EFEFF2; position:sticky; top:0`,
                                  )}
                                >
                                  {'\n                        '}
                                  {(headCells ?? []).map((c: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div className="py-[7px] px-[10px] text-[10px] font-[650] text-[#71717A] tracking-[.04em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span>{c.label}</span>
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                      '}
                                {(rows ?? []).map((r: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <div
                                      onClick={r.open}
                                      className="hv-udcbnc"
                                      style={cssToObj(
                                        `display:grid; grid-template-columns:${gridCols}; border-bottom:1px solid #F4F4F6; cursor:pointer; background:${r.rowBg}`,
                                      )}
                                    >
                                      {'\n                          '}
                                      {(r.cells ?? []).map((c: any, __i: number) => (
                                        <Fragment key={__i}>
                                          {'\n                            '}
                                          <div className="py-[8px] px-[10px] flex items-center [min-width:0] gap-[7px]">
                                            {'\n\n                              '}
                                            {c.isCheck ? (
                                              <>
                                                {'\n                                '}
                                                <span
                                                  onClick={c.toggle}
                                                  style={cssToObj(
                                                    `width:14px; height:14px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:9px; color:#FFFFFF; border:1px solid ${c.boxBorder}; background:${c.boxBg}`,
                                                  )}
                                                >
                                                  <span>{c.check}</span>
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isCompany ? (
                                              <>
                                                {'\n                                '}
                                                <span className="flex items-center gap-[8px] [min-width:0]">
                                                  {'\n                                  '}
                                                  <span
                                                    style={cssToObj(
                                                      `width:22px; height:22px; border-radius:6px; flex:none; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:#FFFFFF; background:${c.logoBg}`,
                                                    )}
                                                  >
                                                    <span>{c.logo}</span>
                                                  </span>
                                                  {'\n                                  '}
                                                  <span className="[min-width:0] flex flex-col">
                                                    {'\n                                    '}
                                                    <span className="text-[12.5px] font-[600] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                                                      <span>{c.name}</span>
                                                    </span>
                                                    {'\n                                    '}
                                                    <span className="text-[10.5px] text-[#A1A1AA] overflow-hidden text-ellipsis whitespace-nowrap">
                                                      <span>{c.domain}</span>
                                                      {' · '}
                                                      <span>{c.size}</span>
                                                    </span>
                                                    {'\n                                  '}
                                                  </span>
                                                  {'\n                                '}
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isPerson ? (
                                              <>
                                                {'\n                                '}
                                                <span className="flex items-center gap-[7px] [min-width:0]">
                                                  {'\n                                  '}
                                                  <span
                                                    style={cssToObj(
                                                      `width:20px; height:20px; border-radius:50%; flex:none; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:650; color:#3F3F46; background:${c.avBg}`,
                                                    )}
                                                  >
                                                    <span>{c.initials}</span>
                                                  </span>
                                                  {'\n                                  '}
                                                  <span className="[min-width:0] flex flex-col">
                                                    {'\n                                    '}
                                                    <span className="text-[12px] font-[550] text-[#27272A] overflow-hidden text-ellipsis whitespace-nowrap">
                                                      <span>{c.name}</span>
                                                    </span>
                                                    {'\n                                    '}
                                                    <span className="text-[10.5px] text-[#A1A1AA] overflow-hidden text-ellipsis whitespace-nowrap">
                                                      <span>{c.role}</span>
                                                    </span>
                                                    {'\n                                  '}
                                                  </span>
                                                  {'\n                                '}
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isEmail ? (
                                              <>
                                                {'\n                                '}
                                                <span className="flex items-center gap-[6px] [min-width:0]">
                                                  {'\n                                  '}
                                                  <span className="text-[11px] text-[#52525B] [font-family:'JetBrains_Mono',_monospace] overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <span>{c.value}</span>
                                                  </span>
                                                  {'\n                                  '}
                                                  <span style={cssToObj(c.statusStyle)}>
                                                    <span>{c.status}</span>
                                                  </span>
                                                  {'\n                                '}
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isSignals ? (
                                              <>
                                                {'\n                                '}
                                                <span className="flex items-center gap-[4px] flex-wrap">
                                                  {'\n                                  '}
                                                  {(c.list ?? []).map((s: any, __i: number) => (
                                                    <Fragment key={__i}>
                                                      {'\n                                    '}
                                                      <span style={cssToObj(s.style)}>
                                                        <span>{s.label}</span>
                                                      </span>
                                                      {'\n                                  '}
                                                    </Fragment>
                                                  ))}
                                                  {'\n                                '}
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isScore ? (
                                              <>
                                                {'\n                                '}
                                                <span className="flex flex-col gap-[3px] w-full">
                                                  {'\n                                  '}
                                                  <span
                                                    style={cssToObj(
                                                      `font-size:11.5px; font-weight:600; color:${c.color}; font-variant-numeric:tabular-nums`,
                                                    )}
                                                  >
                                                    <span>{c.value}</span>
                                                  </span>
                                                  {'\n                                  '}
                                                  <span className="h-[3px] rounded-[2px] bg-[#F1F1F3] overflow-hidden w-full">
                                                    {'\n                                    '}
                                                    <span
                                                      style={cssToObj(
                                                        `display:block; height:100%; border-radius:2px; background:${c.color}; width:${c.pct}`,
                                                      )}
                                                    ></span>
                                                    {'\n                                  '}
                                                  </span>
                                                  {'\n                                '}
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isText ? (
                                              <>
                                                {'\n                                '}
                                                <span
                                                  style={cssToObj(
                                                    `font-size:11.5px; color:${c.color}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap`,
                                                  )}
                                                >
                                                  <span>{c.value}</span>
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isBadge ? (
                                              <>
                                                {'\n                                '}
                                                <span style={cssToObj(c.badgeStyle)}>
                                                  <span>{c.value}</span>
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n\n                              '}
                                            {c.isActions ? (
                                              <>
                                                {'\n                                '}
                                                <span className="flex items-center gap-[4px]">
                                                  {'\n                                  '}
                                                  <span
                                                    onClick={c.preview}
                                                    title="Preview"
                                                    className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer bg-[#FFFFFF] hv-16bx3qz"
                                                  >
                                                    {'\n                                    '}
                                                    <svg
                                                      width="11"
                                                      height="11"
                                                      viewBox="0 0 20 20"
                                                      fill="none"
                                                      stroke="#6D28D9"
                                                      strokeWidth="1.6"
                                                    >
                                                      <path d="M2.5 10S5.4 5 10 5s7.5 5 7.5 5-2.9 5-7.5 5-7.5-5-7.5-5z"></path>
                                                      <circle cx="10" cy="10" r="2"></circle>
                                                    </svg>
                                                    {'\n                                  '}
                                                  </span>
                                                  {'\n                                  '}
                                                  <span
                                                    onClick={c.enrich}
                                                    title="Enrich"
                                                    className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer bg-[#FFFFFF] hv-16bx3qz"
                                                  >
                                                    {'\n                                    '}
                                                    <svg
                                                      width="11"
                                                      height="11"
                                                      viewBox="0 0 20 20"
                                                      fill="none"
                                                      stroke="#52525B"
                                                      strokeWidth="1.7"
                                                    >
                                                      <path d="M10 3.4l1.6 3.8 3.8 1.6-3.8 1.6L10 14.2l-1.6-3.8L4.6 8.8l3.8-1.6z"></path>
                                                    </svg>
                                                    {'\n                                  '}
                                                  </span>
                                                  {'\n                                  '}
                                                  <span
                                                    onClick={c.add}
                                                    title="Add to list"
                                                    className="w-[22px] h-[22px] rounded-[5px] [border:1px_solid_#E8E8EC] flex items-center justify-center cursor-pointer bg-[#FFFFFF] hv-16bx3qz"
                                                  >
                                                    {'\n                                    '}
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
                                                    {'\n                                  '}
                                                  </span>
                                                  {'\n                                '}
                                                </span>
                                                {'\n                              '}
                                              </>
                                            ) : null}
                                            {'\n                            '}
                                          </div>
                                          {'\n                          '}
                                        </Fragment>
                                      ))}
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </>
                        ) : null}
                        {'\n\n                '}
                        {sheetLeaders ? (
                          <>
                            {'\n                  '}
                            <div className="overflow-x-auto">
                              {'\n                    '}
                              <div className="[min-width:860px]">
                                {'\n                      '}
                                <div className="grid [grid-template-columns:184px_178px_158px_200px_108px_92px] bg-[#F7F7F9] [border-bottom:1px_solid_#EFEFF2]">
                                  {'\n                        '}
                                  {(leaderCols ?? []).map((c: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div className="py-[7px] px-[10px] text-[10px] font-[650] text-[#71717A] tracking-[.04em] uppercase whitespace-nowrap">
                                        <span>{c}</span>
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                      '}
                                {(leaders ?? []).map((p: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <div
                                      onClick={p.open}
                                      className="grid [grid-template-columns:184px_178px_158px_200px_108px_92px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer bg-[#FFFFFF] hv-udcbnc"
                                    >
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center gap-[8px] [min-width:0]">
                                        {'\n                            '}
                                        <span
                                          style={cssToObj(
                                            `width:22px; height:22px; border-radius:50%; flex:none; display:flex; align-items:center; justify-content:center; font-size:9.5px; font-weight:650; color:#3F3F46; background:${p.bg}`,
                                          )}
                                        >
                                          <span>{p.initials}</span>
                                        </span>
                                        {'\n                            '}
                                        <span className="[min-width:0] flex flex-col">
                                          {'\n                              '}
                                          <span className="text-[12.5px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                                            <span>{p.name}</span>
                                          </span>
                                          {'\n                              '}
                                          <span className="text-[10.5px] text-[#A1A1AA]">
                                            <span>{p.seniority}</span>
                                          </span>
                                          {'\n                            '}
                                        </span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center text-[11.5px] text-[#52525B] overflow-hidden text-ellipsis whitespace-nowrap">
                                        <span>{p.title}</span>
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center gap-[7px] [min-width:0]">
                                        {'\n                            '}
                                        <span
                                          style={cssToObj(
                                            `width:18px; height:18px; border-radius:5px; flex:none; display:flex; align-items:center; justify-content:center; font-size:8.5px; font-weight:700; color:#FFFFFF; background:${p.logoBg}`,
                                          )}
                                        >
                                          <span>{p.logo}</span>
                                        </span>
                                        {'\n                            '}
                                        <span className="text-[11.5px] text-[#3F3F46] overflow-hidden text-ellipsis whitespace-nowrap">
                                          <span>{p.company}</span>
                                        </span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center gap-[6px] [min-width:0]">
                                        {'\n                            '}
                                        <span className="text-[11px] [font-family:'JetBrains_Mono',_monospace] text-[#52525B] overflow-hidden text-ellipsis whitespace-nowrap">
                                          <span>{p.email}</span>
                                        </span>
                                        {'\n                            '}
                                        <span style={cssToObj(p.statusStyle)}>
                                          <span>{p.status}</span>
                                        </span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center">
                                        <span style={cssToObj(p.roleStyle)}>
                                          <span>{p.persona}</span>
                                        </span>
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center text-[11px] text-[#A1A1AA]">
                                        <span>{p.active}</span>
                                      </div>
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </>
                        ) : null}
                        {'\n\n                '}
                        {sheetSignals ? (
                          <>
                            {'\n                  '}
                            <div className="overflow-x-auto">
                              {'\n                    '}
                              <div className="[min-width:860px]">
                                {'\n                      '}
                                <div className="grid [grid-template-columns:150px_168px_240px_118px_100px_104px] bg-[#F7F7F9] [border-bottom:1px_solid_#EFEFF2]">
                                  {'\n                        '}
                                  {(signalCols ?? []).map((c: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <div className="py-[7px] px-[10px] text-[10px] font-[650] text-[#71717A] tracking-[.04em] uppercase whitespace-nowrap">
                                        <span>{c}</span>
                                      </div>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                      '}
                                {(signalRows ?? []).map((s: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                        '}
                                    <div
                                      onClick={s.open}
                                      className="grid [grid-template-columns:150px_168px_240px_118px_100px_104px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer bg-[#FFFFFF] hv-udcbnc"
                                    >
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center gap-[7px] [min-width:0]">
                                        {'\n                            '}
                                        <span
                                          style={cssToObj(
                                            `width:20px; height:20px; border-radius:5px; flex:none; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; color:#FFFFFF; background:${s.logoBg}`,
                                          )}
                                        >
                                          <span>{s.logo}</span>
                                        </span>
                                        {'\n                            '}
                                        <span className="text-[12px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                                          <span>{s.company}</span>
                                        </span>
                                        {'\n                          '}
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center gap-[6px]">
                                        <span className="text-[12px]">
                                          <span>{s.icon}</span>
                                        </span>
                                        <span className="text-[11.5px] text-[#3F3F46] font-[550]">
                                          <span>{s.type}</span>
                                        </span>
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center text-[11.5px] text-[#52525B] overflow-hidden text-ellipsis whitespace-nowrap">
                                        <span>{s.detail}</span>
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center text-[11.5px] text-[#71717A]">
                                        <span>{s.source}</span>
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center text-[11.5px] text-[#A1A1AA]">
                                        <span>{s.time}</span>
                                      </div>
                                      {'\n                          '}
                                      <div className="py-[8px] px-[10px] flex items-center">
                                        <span style={cssToObj(s.confStyle)}>
                                          <span>{s.conf}</span>
                                        </span>
                                      </div>
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </Fragment>
                                ))}
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </>
                        ) : null}
                        {'\n\n                '}
                        <div className="py-[8px] px-[12px] flex items-center justify-between bg-[#FBFBFC] [border-top:1px_solid_#EFEFF2]">
                          {'\n                  '}
                          <span className="text-[11px] text-[#8E8E96]">
                            {
                              'Sources: LinkedIn, Crunchbase, website intent, BuiltWith · confidence '
                            }
                            <span className="text-[#15803D] font-[600]">{'high'}</span>
                          </span>
                          {'\n                  '}
                          <span
                            onClick={toggleExpand}
                            className="text-[11.5px] text-[#6D28D9] font-[600] cursor-pointer"
                          >
                            <span>{expandLabel}</span>
                          </span>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </div>
                      {'\n\n              '}
                      {showChat ? (
                        <>
                          {'\n                '}
                          <div className="flex flex-col gap-[13px] pl-[35px]">
                            {'\n                  '}
                            <div className="flex items-center gap-[2px]">
                              {'\n                    '}
                              <button
                                onClick={like}
                                className="w-[26px] h-[26px] flex items-center justify-center [border:none] bg-transparent rounded-[6px] cursor-pointer hv-u45kwi"
                              >
                                {'\n                      '}
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke={likeColor}
                                  strokeWidth="1.5"
                                >
                                  <path d="M6.5 17V8.4l3.4-5a1.4 1.4 0 012.5.8v3.4h3.2a1.5 1.5 0 011.5 1.8l-1.1 5.4A1.9 1.9 0 0114.1 17z"></path>
                                  <path d="M6.5 8.6H3.8V17h2.7"></path>
                                </svg>
                                {'\n                    '}
                              </button>
                              {'\n                    '}
                              <button
                                onClick={dislike}
                                className="w-[26px] h-[26px] flex items-center justify-center [border:none] bg-transparent rounded-[6px] cursor-pointer hv-u45kwi"
                              >
                                {'\n                      '}
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke={dislikeColor}
                                  strokeWidth="1.5"
                                >
                                  <path d="M13.5 3v8.6l-3.4 5a1.4 1.4 0 01-2.5-.8v-3.4H4.4a1.5 1.5 0 01-1.5-1.8l1.1-5.4A1.9 1.9 0 015.9 3z"></path>
                                  <path d="M13.5 11.4h2.7V3h-2.7"></path>
                                </svg>
                                {'\n                    '}
                              </button>
                              {'\n                    '}
                              <div className="w-[1px] h-[15px] bg-[#EAEAEE] my-[0] mx-[5px]"></div>
                              {'\n                    '}
                              <button
                                onClick={copy}
                                className="h-[26px] py-[0] px-[8px] flex items-center gap-[5px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[11.5px] text-[#8E8E96] hv-jj6th"
                              >
                                {'\n                      '}
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                >
                                  <rect x="7" y="7" width="9.5" height="9.5" rx="2"></rect>
                                  <path d="M13 4.5H5.5a2 2 0 00-2 2V14"></path>
                                </svg>
                                {'\n                      '}
                                <span>{copyLabel}</span>
                                {'\n                    '}
                              </button>
                              {'\n                    '}
                              <button
                                onClick={regenerate}
                                className="h-[26px] py-[0] px-[8px] flex items-center gap-[5px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[11.5px] text-[#8E8E96] hv-jj6th"
                              >
                                {'\n                      '}
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                >
                                  <path d="M16 10a6 6 0 11-1.9-4.4M16 3.4V7h-3.6"></path>
                                </svg>
                                {'\n                      '}
                                <span>{regenLabel}</span>
                                {'\n                    '}
                              </button>
                              {'\n                    '}
                              <button className="h-[26px] py-[0] px-[8px] flex items-center gap-[5px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[11.5px] text-[#8E8E96] hv-jj6th">
                                {'\n                      '}
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                >
                                  <circle cx="15" cy="5" r="2.2"></circle>
                                  <circle cx="5" cy="10" r="2.2"></circle>
                                  <circle cx="15" cy="15" r="2.2"></circle>
                                  <path d="M7 8.9l6-2.8M7 11.1l6 2.8"></path>
                                </svg>
                                {'\n                      Share\n                    '}
                              </button>
                              {'\n                  '}
                            </div>
                            {'\n\n                  '}
                            <div className="[border-top:1px_solid_#F1F1F3] pt-[11px]">
                              {'\n                    '}
                              <div className="text-[11px] font-[650] text-[#A1A1AA] tracking-[.04em] uppercase mb-[5px]">
                                {'Suggested follow-ups'}
                              </div>
                              {'\n                    '}
                              {(followUps ?? []).map((f: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                      '}
                                  <div
                                    onClick={f.pick}
                                    className="flex items-center gap-[10px] py-[9px] px-[8px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer rounded-[6px] hv-udcbnc"
                                  >
                                    {'\n                        '}
                                    <span className="w-[16px] flex-none flex items-center justify-center">
                                      {'\n                          '}
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="#A78BFA"
                                        strokeWidth="1.6"
                                      >
                                        <path d="M10 3l1.7 4 4 1.7-4 1.7L10 14.4l-1.7-4-4-1.7 4-1.7z"></path>
                                      </svg>
                                      {'\n                        '}
                                    </span>
                                    {'\n                        '}
                                    <span className="flex-1 text-[12.5px] text-[#3F3F46] leading-[1.45]">
                                      <span>{f.text}</span>
                                    </span>
                                    {'\n                        '}
                                    <svg
                                      width="13"
                                      height="13"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      stroke="#C4C4CB"
                                      strokeWidth="1.8"
                                    >
                                      <path d="M4 10h11M11 6l4 4-4 4"></path>
                                    </svg>
                                    {'\n                      '}
                                  </div>
                                  {'\n                    '}
                                </Fragment>
                              ))}
                              {'\n                  '}
                            </div>
                            {'\n\n                  '}
                            {showTopUpCard ? (
                              <>
                                {'\n                    '}
                                <div className="[border:1px_solid_#FED7AA] bg-[#FFF8F1] rounded-[10px] py-[12px] px-[13px] flex items-start gap-[10px]">
                                  {'\n                      '}
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#EA580C"
                                    strokeWidth="1.7"
                                    className="mt-[1px] flex-none"
                                  >
                                    <path d="M10 3.2l7 12.4H3z"></path>
                                    <path d="M10 8v3.4"></path>
                                    <circle
                                      cx="10"
                                      cy="13.6"
                                      r=".7"
                                      fill="#EA580C"
                                      stroke="none"
                                    ></circle>
                                  </svg>
                                  {'\n                      '}
                                  <div className="flex-1 [min-width:0]">
                                    {'\n                        '}
                                    <div className="text-[12.5px] font-[650] text-[#9A3412]">
                                      {'Not enough credits to complete this enrichment'}
                                    </div>
                                    {'\n                        '}
                                    <div className="text-[12px] text-[#B45309] leading-[1.5] mt-[2px]">
                                      {'Enriching all 42 accounts requires '}
                                      <strong className="font-[650]">{'420 credits'}</strong>
                                      {'. You currently have '}
                                      <span>{creditsNum}</span>
                                      {'. The run resumes automatically once you top up.'}
                                    </div>
                                    {'\n                        '}
                                    <div className="flex gap-[7px] mt-[9px]">
                                      {'\n                          '}
                                      <button
                                        onClick={openCredits}
                                        className="h-[27px] py-[0] px-[11px] [border:1px_solid_#EA580C] bg-[#EA580C] text-[#FFFFFF] rounded-[7px] text-[11.5px] font-[600] cursor-pointer hv-s4gde7"
                                      >
                                        {'Top up credits'}
                                      </button>
                                      {'\n                          '}
                                      <button
                                        onClick={dismissTopUp}
                                        className="h-[27px] py-[0] px-[11px] [border:1px_solid_#F3D3B3] bg-[#FFFFFF] text-[#9A3412] rounded-[7px] text-[11.5px] font-[550] cursor-pointer hv-ugv405"
                                      >
                                        {'Cancel'}
                                      </button>
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </div>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </>
                            ) : null}
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </>
                      ) : null}
                      {'\n\n              '}
                      <div className="h-[2px]"></div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  {showChat ? (
                    <>
                      {'\n            '}
                      <div className="flex-none [border-top:1px_solid_#EFEFF2] bg-[#FFFFFF] pt-[0] px-[22px] pb-[14px]">
                        {'\n              '}
                        <div className="[max-width:800px] my-[0] mx-[auto]">
                          {'\n                '}
                          {hasAttachment ? (
                            <>
                              {'\n                  '}
                              <div className="mt-[12px] flex items-center gap-[10px] [border:1px_solid_#E4E4E8] rounded-[9px] py-[9px] px-[11px] bg-[#FBFBFC]">
                                {'\n                    '}
                                <div className="w-[26px] h-[26px] rounded-[6px] bg-[#ECFDF3] flex items-center justify-center flex-none">
                                  {'\n                      '}
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#15803D"
                                    strokeWidth="1.6"
                                  >
                                    <path d="M5 4.5h6l4 4V16a1 1 0 01-1 1H6a1 1 0 01-1-1z"></path>
                                    <path d="M11 4.5v4h4"></path>
                                  </svg>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="[min-width:0] flex-1">
                                  {'\n                      '}
                                  <div className="text-[12px] font-[600]">
                                    {'target_accounts.csv'}
                                  </div>
                                  {'\n                      '}
                                  <div className="text-[10.5px] text-[#A1A1AA]">
                                    {'1,284 rows · ready to analyze'}
                                  </div>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <button className="h-[25px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1">
                                  {'Analyze'}
                                </button>
                                {'\n                    '}
                                <button
                                  onClick={enrich}
                                  className="h-[25px] py-[0] px-[9px] [border:1px_solid_#DDD6F3] bg-[#F5F1FD] text-[#5B21B6] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-ttjng3"
                                >
                                  {'Enrich'}
                                </button>
                                {'\n                    '}
                                <button
                                  onClick={clearAttachment}
                                  className="w-[25px] h-[25px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[#A1A1AA] text-[14px] leading-[1] hv-u2196x"
                                >
                                  {'×'}
                                </button>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n\n                '}
                          {creditsWarn ? (
                            <>
                              {'\n                  '}
                              <div
                                style={cssToObj(
                                  'margin-top:12px; display:flex; align-items:center; justify-content:space-between; border:1px solid #FED7AA; border-bottom:none; border-radius:10px 10px 0 0; background:#FFF8F1; padding:8px 12px',
                                )}
                              >
                                {'\n                    '}
                                <span className="flex items-center gap-[7px] text-[12px] font-[600] text-[#C2410C]">
                                  {'\n                      '}
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#EA580C"
                                    strokeWidth="1.8"
                                  >
                                    <path d="M11 2.5L4.5 11.5H9l-.6 6 6.6-9H10.4z"></path>
                                  </svg>
                                  {'\n                      '}
                                  <span>{creditsLabel}</span>
                                  {' remaining\n                    '}
                                </span>
                                {'\n                    '}
                                <button
                                  onClick={openCredits}
                                  className="h-[25px] py-[0] px-[10px] [border:1px_solid_#F3C99B] bg-[#FFFFFF] text-[#C2410C] rounded-[6px] text-[11.5px] font-[600] cursor-pointer hv-ugv1h8"
                                >
                                  {'Top up'}
                                </button>
                                {'\n                  '}
                              </div>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n\n                '}
                          <div
                            style={cssToObj(
                              `border:1px solid #E4E4E8; border-radius:${composerRadius}; background:#FFFFFF; box-shadow:0 1px 3px rgba(24,24,27,.05); margin-top:${composerMargin}`,
                            )}
                          >
                            {'\n                  '}
                            {voiceMode ? (
                              <>
                                {'\n                    '}
                                <div className="pt-[15px] px-[14px] pb-[11px] flex items-center gap-[14px]">
                                  {'\n                      '}
                                  <span className="flex items-center gap-[7px] text-[12.5px] font-[600] text-[#B91C1C] whitespace-nowrap">
                                    <span className="w-[7px] h-[7px] rounded-full bg-[#DC2626] [animation:pulse_1.2s_ease-in-out_infinite]"></span>
                                    {'Listening…'}
                                  </span>
                                  {'\n                      '}
                                  <div className="flex-1 flex items-center gap-[3px] h-[26px]">
                                    {'\n                        '}
                                    {(waveBars ?? []).map((w: any, __i: number) => (
                                      <Fragment key={__i}>
                                        {'\n                          '}
                                        <span
                                          style={cssToObj(
                                            `flex:1; height:22px; border-radius:2px; background:#DDD6F3; transform-origin:center; animation:bar ${w.dur} ease-in-out infinite; animation-delay:${w.delay}`,
                                          )}
                                        ></span>
                                        {'\n                        '}
                                      </Fragment>
                                    ))}
                                    {'\n                      '}
                                  </div>
                                  {'\n                      '}
                                  <span className="text-[11.5px] text-[#A1A1AA] tabular-nums">
                                    {'0:07'}
                                  </span>
                                  {'\n                      '}
                                  <div className="flex gap-[6px]">
                                    {'\n                        '}
                                    <button className="h-[27px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[11.5px] text-[#52525B] cursor-pointer hv-u4v0t1">
                                      {'Pause'}
                                    </button>
                                    {'\n                        '}
                                    <button
                                      onClick={cancelVoice}
                                      className="h-[27px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[11.5px] text-[#52525B] cursor-pointer hv-u4v0t1"
                                    >
                                      {'Discard'}
                                    </button>
                                    {'\n                        '}
                                    <button
                                      onClick={useVoice}
                                      className="h-[27px] py-[0] px-[11px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[11.5px] font-[600] cursor-pointer whitespace-nowrap hv-jdi8ic"
                                    >
                                      {'Use voice message'}
                                    </button>
                                    {'\n                      '}
                                  </div>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </>
                            ) : null}
                            {'\n\n                  '}
                            {typingMode ? (
                              <>
                                {'\n                    '}
                                <div className="pt-[12px] px-[14px] pb-[0]">
                                  {'\n                      '}
                                  <textarea
                                    onChange={onInput}
                                    value={draft}
                                    placeholder="Find leads, enrich data, analyze signals…"
                                    className="w-full [border:none] outline-none resize-none text-[13.5px] leading-[1.55] text-[#27272A] [min-height:44px] bg-transparent"
                                  ></textarea>
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </>
                            ) : null}
                            {'\n\n                  '}
                            <div className="flex items-center justify-between pt-[8px] px-[10px] pb-[9px] relative">
                              {'\n                    '}
                              <div className="flex items-center gap-[4px]">
                                {'\n                      '}
                                <div
                                  onClick={toggleAgent}
                                  className="flex items-center gap-[6px] h-[27px] py-[0] px-[8px] rounded-[7px] cursor-pointer text-[12px] text-[#52525B] font-[550] hv-u45kwi"
                                >
                                  {'\n                        '}
                                  <svg
                                    width="13"
                                    height="13"
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
                                  {'\n                        '}
                                  <span>{agent}</span>
                                  {'\n                        '}
                                  <svg
                                    width="9"
                                    height="9"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#A1A1AA"
                                    strokeWidth="2.2"
                                  >
                                    <path d="M5 8l5 5 5-5"></path>
                                  </svg>
                                  {'\n                      '}
                                </div>
                                {'\n                      '}
                                <button
                                  onClick={toggleTools}
                                  className="flex items-center gap-[6px] h-[27px] py-[0] px-[8px] [border:none] bg-transparent rounded-[7px] cursor-pointer text-[12px] text-[#52525B] font-[550] hv-u45kwi"
                                >
                                  {'\n                        '}
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  >
                                    <path d="M13.4 3.4a4 4 0 00-5 5L3.6 13.2a1.6 1.6 0 002.2 2.2l4.8-4.8a4 4 0 005-5l-2.3 2.3-2.1-.6-.6-2.1z"></path>
                                  </svg>
                                  {'\n                        Tools\n                      '}
                                </button>
                                {'\n                      '}
                                <button
                                  onClick={toggleEnrichMenu}
                                  className="flex items-center gap-[6px] h-[27px] py-[0] px-[8px] [border:none] bg-transparent rounded-[7px] cursor-pointer text-[12px] text-[#52525B] font-[550] hv-u45kwi"
                                >
                                  {'\n                        '}
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                  >
                                    <path d="M10 3.4l1.6 3.8 3.8 1.6-3.8 1.6L10 14.2l-1.6-3.8L4.6 8.8l3.8-1.6z"></path>
                                  </svg>
                                  {'\n                        Enrichment\n                      '}
                                </button>
                                {'\n                      '}
                                {enrichMenuOpen ? (
                                  <>
                                    {'\n                        '}
                                    <div className="absolute bottom-[36px] left-[104px] w-[246px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[10px] shadow-[0_14px_34px_rgba(24,24,27,.14)] p-[5px] z-[40] [animation:pop_.13s_ease-out]">
                                      {'\n                          '}
                                      <div className="pt-[6px] px-[8px] pb-[4px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                                        {'Enrichment actions'}
                                      </div>
                                      {'\n                          '}
                                      {(enrichments ?? []).map((e: any, __i: number) => (
                                        <Fragment key={__i}>
                                          {'\n                            '}
                                          <div
                                            onClick={e.pick}
                                            className="flex items-center justify-between gap-[10px] py-[6px] px-[8px] rounded-[6px] cursor-pointer text-[12px] text-[#3F3F46] hv-u4v0t1"
                                          >
                                            {'\n                              '}
                                            <span>
                                              <span>{e.label}</span>
                                            </span>
                                            {'\n                              '}
                                            <span className="text-[10.5px] text-[#A1A1AA] whitespace-nowrap">
                                              <span>{e.cost}</span>
                                            </span>
                                            {'\n                            '}
                                          </div>
                                          {'\n                          '}
                                        </Fragment>
                                      ))}
                                      {'\n                        '}
                                    </div>
                                    {'\n                      '}
                                  </>
                                ) : null}
                                {'\n                    '}
                              </div>
                              {'\n                    '}
                              <div className="flex items-center gap-[4px]">
                                {'\n                      '}
                                <button
                                  onClick={addAttachment}
                                  className="w-[28px] h-[28px] flex items-center justify-center [border:none] bg-transparent rounded-[7px] cursor-pointer hv-u45kwi"
                                >
                                  {'\n                        '}
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#71717A"
                                    strokeWidth="1.5"
                                  >
                                    <path d="M14.5 9.2l-5.2 5.2a3.2 3.2 0 01-4.5-4.5l5.7-5.7a2.1 2.1 0 013 3l-5.7 5.7a1 1 0 01-1.5-1.5l5.2-5.2"></path>
                                  </svg>
                                  {'\n                      '}
                                </button>
                                {'\n                      '}
                                <button
                                  onClick={startVoice}
                                  className="w-[28px] h-[28px] flex items-center justify-center [border:none] bg-transparent rounded-[7px] cursor-pointer hv-u45kwi"
                                >
                                  {'\n                        '}
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke={micColor}
                                    strokeWidth="1.5"
                                  >
                                    <rect x="7.6" y="3" width="4.8" height="9" rx="2.4"></rect>
                                    <path d="M4.8 9.6a5.2 5.2 0 0010.4 0M10 14.8V17"></path>
                                  </svg>
                                  {'\n                      '}
                                </button>
                                {'\n                      '}
                                <button
                                  onClick={send}
                                  className="hv-1a8qwtm"
                                  style={cssToObj(
                                    `width:30px; height:30px; display:flex; align-items:center; justify-content:center; border:none; background:${sendBg}; border-radius:8px; cursor:pointer; margin-left:2px`,
                                  )}
                                >
                                  {'\n                        '}
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="2"
                                  >
                                    <path d="M10 16V5M5.5 9.5L10 5l4.5 4.5"></path>
                                  </svg>
                                  {'\n                      '}
                                </button>
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="flex items-center justify-between mt-[6px]">
                            {'\n                  '}
                            <span className="text-[10.5px] text-[#B4B4BB]">
                              {
                                'Outmate reads your Radar signals, CRM and enrichment history for context.'
                              }
                            </span>
                            {'\n                  '}
                            <span className="text-[10.5px] text-[#B4B4BB]">
                              {'Enter to send · Shift+Enter for newline'}
                            </span>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isRadar ? (
              <>
                {'\n        '}
                <div className="flex-1 [min-height:0] flex flex-col">
                  {'\n          '}
                  <div className="flex-none h-[50px] flex items-center justify-between py-[0] px-[20px] [border-bottom:1px_solid_#EFEFF2]">
                    {'\n            '}
                    <div className="flex flex-col">
                      {'\n              '}
                      <span className="text-[13px] font-[650] tracking-[-0.01em]">
                        {'GTM Radar'}
                      </span>
                      {'\n              '}
                      <span className="text-[11px] text-[#8E8E96]">
                        {'Accounts plotted by intent and ICP fit · bubble size = signal strength'}
                      </span>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="flex items-center gap-[6px]">
                      {'\n              '}
                      <button
                        onClick={goCopilot}
                        className="h-[28px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[12px] text-[#3F3F46] font-[550] cursor-pointer hv-u4v0t1"
                      >
                        {'Back to Copilot'}
                      </button>
                      {'\n              '}
                      <button
                        onClick={toggleContext}
                        className="h-[28px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] text-[12px] text-[#52525B] font-[550] cursor-pointer hv-u4v0t1"
                      >
                        {'Context'}
                      </button>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="flex-none flex items-center gap-[5px] py-[9px] px-[20px] [border-bottom:1px_solid_#EFEFF2] flex-wrap">
                    {'\n            '}
                    {(radarFilters ?? []).map((f: any, __i: number) => (
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
                  {'\n\n          '}
                  <div className="flex-1 [min-height:0] pt-[20px] px-[24px] pb-[16px] flex flex-col">
                    {'\n            '}
                    <div className="flex-1 [min-height:0] relative [border:1px_solid_#EDEDF0] rounded-[12px] bg-[#FCFCFD]">
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
                      <div className="absolute right-[14px] top-[12px] text-[10px] font-[650] text-[#B9A9E8] tracking-[.05em] uppercase">
                        {'Act now'}
                      </div>
                      {'\n              '}
                      <div className="absolute left-[14px] bottom-[12px] text-[10px] font-[650] text-[#C9C9D0] tracking-[.05em] uppercase">
                        {'Monitor'}
                      </div>
                      {'\n              '}
                      {(bubbles ?? []).map((b: any, __i: number) => (
                        <Fragment key={__i}>
                          {'\n                '}
                          <div
                            onClick={b.open}
                            title={b.title}
                            className="hv-1a8qwuj"
                            style={cssToObj(
                              `position:absolute; left:${b.x}; bottom:${b.y}; width:${b.size}; height:${b.size}; margin-left:${b.off}; margin-bottom:${b.off}; border-radius:50%; background:${b.bg}; border:1.5px solid ${b.border}; opacity:${b.opacity}; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:9.5px; font-weight:700; color:${b.fg}`,
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
                    <div className="flex items-center justify-between pt-[10px]">
                      {'\n              '}
                      <span className="text-[11px] text-[#8E8E96]">{'Intent score →'}</span>
                      {'\n              '}
                      <span className="text-[11px] text-[#8E8E96]">
                        {'Opacity = signal freshness · click a bubble to inspect the account'}
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
            {'\n    '}
          </main>
          {'\n\n    '}
          {contextOpen ? (
            <>
              {'\n      '}
              <aside className="w-[352px] flex-none bg-[#FBFBFC] [border-left:1px_solid_#E8E8EC] flex flex-col [min-height:0] [animation:slidein_.16s_ease-out]">
                {'\n\n        '}
                {noSelection ? (
                  <>
                    {'\n          '}
                    <div className="flex-1 flex flex-col [min-height:0]">
                      {'\n            '}
                      <div className="pt-[14px] px-[16px] pb-[12px] bg-[#FFFFFF] [border-bottom:1px_solid_#EFEFF2] flex items-center justify-between">
                        {'\n              '}
                        <span className="text-[10.5px] font-[650] text-[#A1A1AA] tracking-[.05em] uppercase">
                          {'Target account context'}
                        </span>
                        {'\n              '}
                        <button
                          onClick={toggleContext}
                          className="w-[22px] h-[22px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[#A1A1AA] text-[14px] leading-[1] hv-u2196x"
                        >
                          {'×'}
                        </button>
                        {'\n            '}
                      </div>
                      {'\n            '}
                      <div className="py-[26px] px-[18px] text-center [border-bottom:1px_solid_#EFEFF2]">
                        {'\n              '}
                        <div className="w-[34px] h-[34px] rounded-[9px] bg-[#F1EDFC] flex items-center justify-center mt-[0] mx-[auto] mb-[9px]">
                          {'\n                '}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#8B72C7"
                            strokeWidth="1.6"
                          >
                            <circle cx="10" cy="10" r="7"></circle>
                            <circle cx="10" cy="10" r="2.6"></circle>
                          </svg>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        <div className="text-[12.5px] font-[600] text-[#3F3F46]">
                          {'Select an account to inspect'}
                        </div>
                        {'\n              '}
                        <div className="text-[11.5px] text-[#A1A1AA] leading-[1.5] mt-[3px]">
                          {'Click any row, preview icon or Radar bubble.'}
                        </div>
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
                              className="flex items-center gap-[9px] py-[8px] px-[9px] [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[9px] mb-[6px] cursor-pointer hv-17mkows"
                            >
                              {'\n                  '}
                              <span
                                style={cssToObj(
                                  `width:24px; height:24px; border-radius:7px; flex:none; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:#FFFFFF; background:${a.logoBg}`,
                                )}
                              >
                                <span>{a.logo}</span>
                              </span>
                              {'\n                  '}
                              <span className="[min-width:0] flex-1 flex flex-col">
                                {'\n                    '}
                                <span className="text-[12px] font-[600] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{a.name}</span>
                                </span>
                                {'\n                    '}
                                <span className="text-[10.5px] text-[#A1A1AA]">
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
                      <div className="flex-none pt-[14px] px-[16px] pb-[12px] bg-[#FFFFFF] [border-bottom:1px_solid_#EFEFF2]">
                        {'\n              '}
                        <div className="flex items-start gap-[11px]">
                          {'\n                '}
                          <div
                            style={cssToObj(
                              `width:36px; height:36px; border-radius:9px; color:#FFFFFF; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; flex:none; background:${sel.logoBg}`,
                            )}
                          >
                            <span>{sel.logo}</span>
                          </div>
                          {'\n                '}
                          <div className="flex-1 [min-width:0]">
                            {'\n                  '}
                            <div className="flex items-center gap-[6px]">
                              {'\n                    '}
                              <span className="text-[14px] font-[650] tracking-[-0.01em]">
                                <span>{sel.name}</span>
                              </span>
                              {'\n                    '}
                              <span style={cssToObj(sel.intentBadge)}>
                                <span>{sel.intentLabel}</span>
                              </span>
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            <div className="text-[11.5px] text-[#8E8E96] mt-[2px]">
                              <span>{sel.meta}</span>
                            </div>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <button
                            onClick={toggleContext}
                            className="w-[24px] h-[24px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[#A1A1AA] text-[15px] leading-[1] flex-none hv-u2196x"
                          >
                            {'×'}
                          </button>
                          {'\n              '}
                        </div>
                        {'\n              '}
                        <div className="flex gap-[1px] mt-[12px] [border-bottom:1px_solid_#EFEFF2] mb-[-12px] overflow-x-auto">
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
                      <div className="flex-1 [min-height:0] overflow-y-auto pt-[14px] px-[16px] pb-[18px]">
                        {'\n\n              '}
                        {tabOverview ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col gap-[14px]">
                              {'\n                  '}
                              <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[10px] py-[12px] px-[13px]">
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[10px]">
                                  {'GTM overview'}
                                </div>
                                {'\n                    '}
                                <div className="flex flex-col gap-[9px]">
                                  {'\n                      '}
                                  {(gtmRows ?? []).map((g: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                        '}
                                      <div className="flex items-center justify-between gap-[10px]">
                                        {'\n                          '}
                                        <span className="text-[12px] text-[#71717A]">
                                          <span>{g.label}</span>
                                        </span>
                                        {'\n                          '}
                                        <span
                                          style={cssToObj(
                                            `font-size:12px; font-weight:600; color:${g.color}`,
                                          )}
                                        >
                                          <span>{g.value}</span>
                                        </span>
                                        {'\n                        '}
                                      </div>
                                      {'\n                      '}
                                    </Fragment>
                                  ))}
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <div className="h-[5px] rounded-[3px] bg-[#F1F1F3] overflow-hidden mt-[11px]">
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
                              <div className="bg-[#F8F5FF] [border:1px_solid_#E6DDFB] rounded-[10px] py-[12px] px-[13px]">
                                {'\n                    '}
                                <div className="flex items-center gap-[6px] mb-[6px]">
                                  {'\n                      '}
                                  <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="#6D28D9"
                                    strokeWidth="1.7"
                                  >
                                    <path d="M10 2.6l1.9 4.5 4.5 1.9-4.5 1.9L10 15.4l-1.9-4.5L3.6 9l4.5-1.9z"></path>
                                  </svg>
                                  {'\n                      '}
                                  <span className="text-[11.5px] font-[650] text-[#5B21B6]">
                                    {'Why this account matters'}
                                  </span>
                                  {'\n                    '}
                                </div>
                                {'\n                    '}
                                <p className="m-[0] text-[12px] leading-[1.55] text-[#4C3A7A]">
                                  <span>{sel.insight}</span>
                                </p>
                                {'\n                    '}
                                <div className="mt-[9px] pt-[9px] [border-top:1px_solid_#E6DDFB] text-[11.5px] text-[#5B21B6]">
                                  <strong className="font-[650]">{'Recommendation:'}</strong>{' '}
                                  <span>{sel.recommendation}</span>
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n\n                  '}
                              <div>
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[8px]">
                                  {'GTM gap'}
                                </div>
                                {'\n                    '}
                                <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[10px] py-[11px] px-[12px] text-[12px] text-[#52525B] leading-[1.5]">
                                  <span>{sel.gap}</span>
                                </div>
                                {'\n                  '}
                              </div>
                              {'\n\n                  '}
                              <div>
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[8px]">
                                  {'Recommended actions'}
                                </div>
                                {'\n                    '}
                                <div className="flex flex-col gap-[6px]">
                                  {'\n                      '}
                                  {(actions ?? []).map((a: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                        '}
                                      <div
                                        onClick={a.pick}
                                        className="flex items-center justify-between gap-[8px] py-[9px] px-[11px] bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[8px] cursor-pointer hv-17mkows"
                                      >
                                        {'\n                          '}
                                        <span className="text-[12px] font-[550] text-[#27272A]">
                                          <span>{a.label}</span>
                                        </span>
                                        {'\n                          '}
                                        <span className="text-[10.5px] text-[#A1A1AA]">
                                          <span>{a.cost}</span>
                                        </span>
                                        {'\n                        '}
                                      </div>
                                      {'\n                      '}
                                    </Fragment>
                                  ))}
                                  {'\n                    '}
                                </div>
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
                            <div className="flex flex-col gap-[8px]">
                              {'\n                  '}
                              {(signalCards ?? []).map((s: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[10px] py-[11px] px-[12px]">
                                    {'\n                      '}
                                    <div className="flex items-center justify-between gap-[8px]">
                                      {'\n                        '}
                                      <span className="flex items-center gap-[7px] text-[12px] font-[650] text-[#18181B]">
                                        {'\n                          '}
                                        <span className="text-[12px]">
                                          <span>{s.icon}</span>
                                        </span>
                                        <span>{s.type}</span>
                                        {'\n                        '}
                                      </span>
                                      {'\n                        '}
                                      <span style={cssToObj(s.strengthStyle)}>
                                        <span>{s.strength}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <div className="text-[12px] text-[#52525B] mt-[5px] leading-[1.45]">
                                      <span>{s.detail}</span>
                                    </div>
                                    {'\n                      '}
                                    <div className="text-[11.5px] text-[#8E8E96] mt-[6px] leading-[1.45] italic">
                                      <span>{s.why}</span>
                                    </div>
                                    {'\n                      '}
                                    <div className="flex items-center gap-[8px] mt-[8px] pt-[8px] [border-top:1px_solid_#F4F4F6]">
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#71717A]">
                                        <span>{s.source}</span>
                                      </span>
                                      {'\n                        '}
                                      <span className="w-[3px] h-[3px] rounded-full bg-[#D4D4D8]"></span>
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#A1A1AA]">
                                        <span>{s.time}</span>
                                      </span>
                                      {'\n                        '}
                                      <span
                                        style={cssToObj(
                                          `margin-left:auto; font-size:10.5px; font-weight:600; color:${s.confColor}`,
                                        )}
                                      >
                                        <span>{s.confidence}</span>
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
                        {tabPeople ? (
                          <>
                            {'\n                '}
                            <div className="flex flex-col gap-[6px]">
                              {'\n                  '}
                              {(people ?? []).map((p: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div className="flex items-center gap-[10px] bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[10px] py-[10px] px-[11px]">
                                    {'\n                      '}
                                    <div
                                      style={cssToObj(
                                        `width:30px; height:30px; border-radius:50%; flex:none; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:650; color:#3F3F46; background:${p.bg}`,
                                      )}
                                    >
                                      <span>{p.initials}</span>
                                    </div>
                                    {'\n                      '}
                                    <div className="flex-1 [min-width:0]">
                                      {'\n                        '}
                                      <div className="flex items-center gap-[6px]">
                                        {'\n                          '}
                                        <span className="text-[12.5px] font-[600]">
                                          <span>{p.name}</span>
                                        </span>
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
                                      </div>
                                      {'\n                        '}
                                      <div className="text-[11px] text-[#8E8E96]">
                                        <span>{p.title}</span>
                                      </div>
                                      {'\n                        '}
                                      <div className="text-[10.5px] text-[#A1A1AA] [font-family:'JetBrains_Mono',_monospace] mt-[2px]">
                                        <span>{p.email}</span>
                                      </div>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <span style={cssToObj(p.badgeStyle)}>
                                      <span>{p.badge}</span>
                                    </span>
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
                            <div className="flex flex-col gap-[8px]">
                              {'\n                  '}
                              {(social ?? []).map((s: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[10px] py-[11px] px-[12px]">
                                    {'\n                      '}
                                    <div className="flex items-center justify-between">
                                      {'\n                        '}
                                      <span className="text-[11.5px] font-[650] text-[#3F3F46]">
                                        <span>{s.platform}</span>
                                      </span>
                                      {'\n                        '}
                                      <span className="text-[10.5px] text-[#A1A1AA]">
                                        <span>{s.time}</span>
                                      </span>
                                      {'\n                      '}
                                    </div>
                                    {'\n                      '}
                                    <p className="mt-[6px] mx-[0] mb-[0] text-[12px] leading-[1.5] text-[#52525B]">
                                      <span>{s.text}</span>
                                    </p>
                                    {'\n                      '}
                                    <div className="text-[10.5px] text-[#A1A1AA] mt-[7px]">
                                      <span>{s.author}</span>
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
                            <div className="flex flex-col gap-[12px]">
                              {'\n                  '}
                              <div className="flex flex-wrap gap-[6px]">
                                {'\n                    '}
                                {(stack ?? []).map((s: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <span className="inline-flex items-center gap-[6px] py-[5px] px-[9px] [border:1px_solid_#E8E8EC] bg-[#FFFFFF] rounded-[7px] text-[11.5px] text-[#3F3F46]">
                                      {'\n                        '}
                                      <span
                                        style={cssToObj(
                                          `width:5px; height:5px; border-radius:50%; background:${s.dot}`,
                                        )}
                                      ></span>
                                      <span>{s.name}</span>
                                      {'\n                      '}
                                    </span>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </div>
                              {'\n                  '}
                              <div className="bg-[#FFFFFF] [border:1px_solid_#E8E8EC] rounded-[10px] py-[11px] px-[12px]">
                                {'\n                    '}
                                <div className="text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase mb-[8px]">
                                  {'Missing layers'}
                                </div>
                                {'\n                    '}
                                <div className="flex flex-col gap-[7px]">
                                  {'\n                      '}
                                  {(missing ?? []).map((m: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                        '}
                                      <div className="flex items-center gap-[8px] text-[12px] text-[#52525B]">
                                        {'\n                          '}
                                        <span className="w-[5px] h-[5px] rounded-full bg-[#EA580C]"></span>
                                        <span>{m}</span>
                                        {'\n                        '}
                                      </div>
                                      {'\n                      '}
                                    </Fragment>
                                  ))}
                                  {'\n                    '}
                                </div>
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
            <div className="absolute top-[48px] right-[88px] w-[290px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[11px] shadow-[0_18px_44px_rgba(24,24,27,.16)] z-[60] [animation:pop_.14s_ease-out] overflow-hidden">
              {'\n      '}
              <div className="py-[11px] px-[13px] [border-bottom:1px_solid_#F1F1F3] text-[12px] font-[650]">
                {'Notifications'}
              </div>
              {'\n      '}
              {(notifications ?? []).map((n: any, __i: number) => (
                <Fragment key={__i}>
                  {'\n        '}
                  <div className="py-[10px] px-[13px] [border-bottom:1px_solid_#F7F7F9] flex gap-[9px]">
                    {'\n          '}
                    <span
                      style={cssToObj(
                        `width:6px; height:6px; border-radius:50%; margin-top:5px; flex:none; background:${n.dot}`,
                      )}
                    ></span>
                    {'\n          '}
                    <div className="[min-width:0]">
                      {'\n            '}
                      <div className="text-[12px] text-[#27272A] leading-[1.45]">
                        <span>{n.text}</span>
                      </div>
                      {'\n            '}
                      <div className="text-[10.5px] text-[#A1A1AA] mt-[2px]">
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
            <div className="absolute top-[48px] right-[52px] w-[288px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[11px] shadow-[0_18px_44px_rgba(24,24,27,.16)] z-[60] [animation:pop_.14s_ease-out] overflow-hidden">
              {'\n      '}
              <div className="py-[11px] px-[13px] [border-bottom:1px_solid_#F1F1F3] text-[12px] font-[650]">
                {'Copilot settings'}
              </div>
              {'\n      '}
              <div className="pt-[6px] px-[13px] pb-[11px]">
                {'\n        '}
                {(settings ?? []).map((s: any, __i: number) => (
                  <Fragment key={__i}>
                    {'\n          '}
                    <div
                      onClick={s.cycle}
                      className="flex items-center justify-between gap-[10px] py-[7px] px-[0] [border-bottom:1px_solid_#F7F7F9] cursor-pointer"
                    >
                      {'\n            '}
                      <span className="text-[12px] text-[#52525B]">
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
              className="absolute [inset:0] bg-[rgba(24,24,27,.28)] z-[70] flex items-center justify-center"
            >
              {'\n      '}
              <div className="w-[428px] bg-[#FFFFFF] rounded-[14px] shadow-[0_24px_60px_rgba(24,24,27,.24)] overflow-hidden [animation:pop_.16s_ease-out]">
                {'\n        '}
                <div className="pt-[16px] px-[18px] pb-[14px] [border-bottom:1px_solid_#F1F1F3] flex items-center justify-between">
                  {'\n          '}
                  <span className="text-[14px] font-[650]">{'Credits'}</span>
                  {'\n          '}
                  <button
                    onClick={closeCredits}
                    className="w-[26px] h-[26px] [border:none] bg-transparent rounded-[6px] cursor-pointer text-[#A1A1AA] text-[16px] leading-[1] hv-u45kwi"
                  >
                    {'×'}
                  </button>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="py-[16px] px-[18px]">
                  {'\n          '}
                  <div className="grid [grid-template-columns:1fr_1fr_1fr] gap-[10px]">
                    {'\n            '}
                    <div className="[border:1px_solid_#EDEDF0] rounded-[9px] py-[10px] px-[11px]">
                      {'\n              '}
                      <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                        {'Remaining'}
                      </div>
                      {'\n              '}
                      <div
                        style={cssToObj(
                          `font-size:18px; font-weight:650; margin-top:3px; color:${creditsColor}; font-variant-numeric:tabular-nums`,
                        )}
                      >
                        <span>{creditsNum}</span>
                      </div>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="[border:1px_solid_#EDEDF0] rounded-[9px] py-[10px] px-[11px]">
                      {'\n              '}
                      <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                        {'Est. cost'}
                      </div>
                      {'\n              '}
                      <div className="text-[18px] font-[650] mt-[3px] tabular-nums">{'420'}</div>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="[border:1px_solid_#EDEDF0] rounded-[9px] py-[10px] px-[11px]">
                      {'\n              '}
                      <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[.05em] font-[650]">
                        {'After run'}
                      </div>
                      {'\n              '}
                      <div
                        style={cssToObj(
                          `font-size:18px; font-weight:650; margin-top:3px; color:${afterColor}; font-variant-numeric:tabular-nums`,
                        )}
                      >
                        <span>{afterRun}</span>
                      </div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[15px] text-[10px] font-[650] text-[#A1A1AA] tracking-[.06em] uppercase">
                    {'Usage breakdown'}
                  </div>
                  {'\n          '}
                  <div className="mt-[8px] flex flex-col">
                    {'\n            '}
                    {(usage ?? []).map((u: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="flex items-center justify-between py-[7px] px-[0] [border-bottom:1px_solid_#F4F4F6]">
                          {'\n                '}
                          <span className="text-[12px] text-[#52525B]">
                            <span>{u.label}</span>
                          </span>
                          {'\n                '}
                          <span className="text-[12px] font-[600] tabular-nums">
                            <span>{u.cost}</span>
                          </span>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="pt-[13px] px-[18px] pb-[16px] bg-[#FBFBFC] [border-top:1px_solid_#F1F1F3] flex gap-[8px] justify-end">
                  {'\n          '}
                  <button
                    onClick={closeCredits}
                    className="h-[32px] py-[0] px-[13px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[8px] text-[12.5px] text-[#52525B] font-[550] cursor-pointer hv-u4v0t1"
                  >
                    {'Close'}
                  </button>
                  {'\n          '}
                  <button
                    onClick={topUp}
                    className="h-[32px] py-[0] px-[15px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[8px] text-[12.5px] font-[600] cursor-pointer hv-jdi8ic"
                  >
                    {'Top up 5,000 credits'}
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
        {toast ? (
          <>
            {'\n    '}
            <div className="absolute bottom-[22px] left-[50%] ml-[-120px] w-[240px] bg-[#18181B] text-[#FFFFFF] rounded-[9px] py-[9px] px-[13px] text-[12px] text-center z-[80] [animation:pop_.14s_ease-out]">
              <span>{toastText}</span>
            </div>
            {'\n  '}
          </>
        ) : null}
      </div>
    </>
  )
}
