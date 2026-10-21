import { Fragment } from 'react'
import { useModel } from '../../lib/model'
import { cssToObj } from '../../lib/css'
import styles from '../../styles/pages/home.css?raw'
import { HomeModel } from './model'

export function HomePage() {
  const {
    plan,
    pageTitle,
    isHome,
    creditsLeft,
    creditsUsed,
    creditColor,
    remainPct,
    settingsNavStyle,
    workspaceOpen,
    toggleWorkspace,
    workspaces,
    navGroups,
    recents,
    resources,
    upgrade,
    openCredits,
    newResearch,
    openSearch,
    goSettings,
    notifsOpen,
    toggleNotifs,
    notifications,
    userOpen,
    toggleUser,
    userMenu,
    draft,
    onDraft,
    estimateLabel,
    agent,
    agentOpen,
    toggleAgent,
    agents,
    toolsOpen,
    toggleTools,
    tools,
    attach,
    voice,
    voiceBg,
    voiceBorder,
    voiceFg,
    send,
    buildEnrichment,
    toast,
    drawerOpen,
    closeDrawer,
    enrichPrompt,
    onEnrichPrompt,
    createEnrich,
    enrichments,
    creditsOpen,
    closeCredits,
    usedPct,
    rates,
    packs,
    newTemplate,
    newList,
    isProjects,
    isTemplates,
    isResearchPage,
    isLists,
    projectSummary,
    projectCols,
    projectGrid,
    projectRows,
    q,
    onQ,
    statusChips,
    sortLabel,
    toggleSort,
    filterMore,
    catChips,
    workflowRows,
    researchChips,
    researchCols,
    researchGrid,
    researchRows,
    listCols,
    listGrid,
    listRows,
    isPage,
    pageBlurb,
    pageActionLabel,
    pageAction,
    pageHasTable,
    pageHasCards,
    pageEmpty,
    emptyTitle,
    emptyBody,
    pageCols,
    pageGrid,
    pageRows,
    pageCards,
    morePrompts,
    allTemplates,
    goProjects,
    prompts,
    workflows,
    research,
    sheets,
    connectors,
  } = useModel(
    () => new HomeModel(),
    (m) => m.renderVals(),
  )

  return (
    <>
      <style>{styles}</style>
      <div
        data-page="home"
        className="flex h-screen w-full bg-[#FFFFFF] overflow-hidden text-[13px]"
      >
        {'\n\n  '}
        <aside className="flex-none w-[248px] [border-right:1px_solid_#E5E5EA] bg-[#FCFCFD] flex flex-col">
          {'\n    '}
          <div className="flex-none py-[11px] px-[12px] [border-bottom:1px_solid_#EFEFF2]">
            {'\n      '}
            <div
              onClick={toggleWorkspace}
              className="flex items-center gap-[9px] py-[6px] px-[8px] rounded-[7px] cursor-pointer relative hv-u2qp3h"
            >
              {'\n        '}
              <span className="flex-none w-[26px] h-[26px] rounded-[6px] bg-[#18181B] text-[#FFFFFF] flex items-center justify-center text-[13px] font-[700]">
                {'O'}
              </span>
              {'\n        '}
              <span className="flex-1 [min-width:0]">
                {'\n          '}
                <span className="block text-[12.5px] font-[650] text-[#18181B]">{'Outmate'}</span>
                {'\n          '}
                <span className="block text-[10.5px] text-[#8E8E96] mt-[1px]">
                  <span>{plan}</span>
                </span>
                {'\n        '}
              </span>
              {'\n        '}
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#A1A1AA"
                strokeWidth="2"
              >
                <path d="M5 8l5 5 5-5"></path>
              </svg>
              {'\n        '}
              {workspaceOpen ? (
                <>
                  {'\n          '}
                  <span className="absolute top-[38px] left-[6px] w-[212px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[60] flex flex-col [animation:pop_.12s_ease-out]">
                    {'\n            '}
                    {(workspaces ?? []).map((w: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <span
                          onClick={w.pick}
                          className="flex items-center justify-between py-[7px] px-[8px] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                        >
                          {'\n                '}
                          <span>{w.name}</span>
                          {'\n                '}
                          <span className="text-[10.5px] text-[#6D28D9] font-[650]">
                            <span>{w.mark}</span>
                          </span>
                          {'\n              '}
                        </span>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </span>
                  {'\n        '}
                </>
              ) : null}
              {'\n      '}
            </div>
            {'\n      '}
            <button
              onClick={newResearch}
              className="w-full mt-[8px] h-[32px] flex items-center justify-center gap-[6px] [border:1px_dashed_#D4C7F5] bg-[#FFFFFF] text-[#5B21B6] rounded-[7px] text-[12px] font-[650] cursor-pointer [font-family:inherit] hv-5zz9n7"
            >
              {'\n        '}
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M10 4.5v11M4.5 10h11"></path>
              </svg>
              {'\n        New research\n      '}
            </button>
            {'\n    '}
          </div>
          {'\n\n    '}
          <div className="flex-1 [min-height:0] overflow-y-auto pt-[8px] px-[8px] pb-[4px]">
            {'\n      '}
            {(navGroups ?? []).map((g: any, __i: number) => (
              <Fragment key={__i}>
                {'\n        '}
                <div className="mb-[9px]">
                  {'\n          '}
                  {g.hasLabel ? (
                    <>
                      {'\n            '}
                      <div className="pt-[5px] px-[9px] pb-[4px] text-[9.5px] font-[700] text-[#A1A1AA] tracking-[.07em] uppercase">
                        <span>{g.label}</span>
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n          '}
                  {(g.items ?? []).map((i: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div onClick={i.go} style={cssToObj(i.style)}>
                        {'\n              '}
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none opacity-[.85]"
                        >
                          <path d={i.path}></path>
                        </svg>
                        {'\n              '}
                        <span className="flex-1 [min-width:0] overflow-hidden text-ellipsis whitespace-nowrap">
                          <span>{i.label}</span>
                        </span>
                        {'\n              '}
                        {i.hasTag ? (
                          <>
                            {'\n                '}
                            <span className="flex-none text-[9px] font-[650] text-[#A1A1AA] tracking-[.03em]">
                              <span>{i.tag}</span>
                            </span>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n        '}
                </div>
                {'\n      '}
              </Fragment>
            ))}
            {'\n\n      '}
            <div className="[border-top:1px_solid_#EFEFF2] pt-[8px] mt-[2px]">
              {'\n        '}
              <div className="pt-[5px] px-[9px] pb-[4px] text-[9.5px] font-[700] text-[#A1A1AA] tracking-[.07em] uppercase">
                {'Recents'}
              </div>
              {'\n        '}
              {(recents ?? []).map((r: any, __i: number) => (
                <Fragment key={__i}>
                  {'\n          '}
                  <div
                    onClick={r.open}
                    className="flex items-center gap-[8px] py-[6px] px-[9px] rounded-[6px] cursor-pointer text-[#52525B] text-[12px] hv-yaoyuh"
                  >
                    {'\n            '}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="flex-none opacity-[.7]"
                    >
                      <path d="M4.5 4.5h11v11h-11zM4.5 8h11M8 8v7.5"></path>
                    </svg>
                    {'\n            '}
                    <span className="flex-1 [min-width:0] overflow-hidden text-ellipsis whitespace-nowrap">
                      <span>{r.name}</span>
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
          {'\n\n    '}
          <div className="flex-none [border-top:1px_solid_#EFEFF2] p-[8px]">
            {'\n      '}
            {(resources ?? []).map((r: any, __i: number) => (
              <Fragment key={__i}>
                {'\n        '}
                <div
                  onClick={r.act}
                  className="flex items-center gap-[8px] py-[6px] px-[9px] rounded-[6px] cursor-pointer text-[#52525B] text-[12px] hv-yaoyuh"
                >
                  {'\n          '}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    className="flex-none opacity-[.75]"
                  >
                    <path d={r.path}></path>
                  </svg>
                  {'\n          '}
                  <span>{r.label}</span>
                  {'\n        '}
                </div>
                {'\n      '}
              </Fragment>
            ))}
            {'\n      '}
            <button
              onClick={upgrade}
              className="w-full mt-[6px] h-[30px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12px] font-[650] cursor-pointer [font-family:inherit] flex items-center justify-center gap-[6px] hv-jdi8ic"
            >
              {'\n        Upgrade plan\n      '}
            </button>
            {'\n      '}
            <div
              onClick={openCredits}
              className="mt-[7px] py-[9px] px-[10px] [border:1px_solid_#E5E5EA] rounded-[7px] cursor-pointer bg-[#FFFFFF] hv-x0ddlt"
            >
              {'\n        '}
              <div className="flex items-center gap-[8px]">
                {'\n          '}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#6D28D9"
                  strokeWidth="1.6"
                  className="flex-none"
                >
                  <circle cx="8" cy="10" r="4.2"></circle>
                  <path d="M12 6.2a4.2 4.2 0 010 7.6"></path>
                </svg>
                {'\n          '}
                <span className="flex-1 text-[12.5px] font-[700] text-[#18181B] tabular-nums">
                  <span>{creditsLeft}</span>
                </span>
                {'\n          '}
                <span className="text-[10.5px] text-[#8E8E96]">{'available'}</span>
                {'\n        '}
              </div>
              {'\n        '}
              <div className="h-[4px] rounded-[2px] bg-[#F1F1F3] overflow-hidden mt-[8px]">
                {'\n          '}
                <div
                  style={cssToObj(
                    `height:100%; border-radius:2px; background:#6D28D9; width:${remainPct}`,
                  )}
                ></div>
                {'\n        '}
              </div>
              {'\n        '}
              <div className="text-[10px] text-[#8E8E96] mt-[6px] tabular-nums">
                <span>{creditsUsed}</span>
                {' used this cycle'}
              </div>
              {'\n      '}
            </div>
            {'\n      '}
            <div onClick={goSettings} style={cssToObj(settingsNavStyle)}>
              {'\n        '}
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="flex-none opacity-[.85]"
              >
                <path d="M10 7.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zM10 3.5v2M10 14.5v2M3.5 10h2M14.5 10h2M5.4 5.4l1.4 1.4M13.2 13.2l1.4 1.4M14.6 5.4l-1.4 1.4M6.8 13.2l-1.4 1.4"></path>
              </svg>
              {'\n        '}
              <span className="flex-1">{'Settings'}</span>
              {'\n        '}
              <svg
                width="13"
                height="13"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#A1A1AA"
                strokeWidth="1.7"
                className="flex-none"
              >
                <path d="M7.5 9.5a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4zM3.8 15.5c0-2 1.7-3.3 3.7-3.3s3.7 1.3 3.7 3.3M14 6.5v3.5M12.4 8.2h3.2"></path>
              </svg>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n  '}
        </aside>
        {'\n\n  '}
        <div className="flex-1 [min-width:0] flex flex-col">
          {'\n    '}
          <header className="flex-none h-[48px] [border-bottom:1px_solid_#E5E5EA] flex items-center gap-[10px] py-[0] px-[16px] bg-[#FFFFFF]">
            {'\n      '}
            <span className="text-[12.5px] text-[#A1A1AA]">{'Outmate'}</span>
            {'\n      '}
            <span className="text-[12.5px] text-[#D4D4D8]">{'/'}</span>
            {'\n      '}
            <span className="text-[12.5px] font-[650] text-[#18181B]">
              <span>{pageTitle}</span>
            </span>
            {'\n\n      '}
            <div
              onClick={openSearch}
              className="ml-[auto] flex items-center gap-[7px] w-[264px] h-[30px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[7px] cursor-text bg-[#FCFCFD] hv-lhzfiw"
            >
              {'\n        '}
              <svg
                width="13"
                height="13"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#A1A1AA"
                strokeWidth="1.8"
                className="flex-none"
              >
                <circle cx="9" cy="9" r="5.6"></circle>
                <path d="M13.2 13.2L17 17"></path>
              </svg>
              {'\n        '}
              <span className="flex-1 text-[12px] text-[#A1A1AA]">
                {'Search companies, people, sheets'}
              </span>
              {'\n        '}
              <span className="flex-none text-[10px] text-[#A1A1AA] [border:1px_solid_#E4E4E8] rounded-[4px] py-[1px] px-[4px] [font-family:'JetBrains_Mono',_monospace]">
                {'⌘K'}
              </span>
              {'\n      '}
            </div>
            {'\n\n      '}
            <div
              onClick={openCredits}
              className="flex items-center gap-[7px] h-[30px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] rounded-[7px] cursor-pointer bg-[#FFFFFF] hv-u69wm3"
            >
              {'\n        '}
              <span className="text-[11.5px] text-[#71717A] tabular-nums">
                <span>{creditsUsed}</span>
                {' used'}
              </span>
              {'\n        '}
              <span className="w-[1px] h-[13px] bg-[#EAEAEE]"></span>
              {'\n        '}
              <span
                style={cssToObj(
                  `font-size:11.5px; font-weight:650; color:${creditColor}; font-variant-numeric:tabular-nums`,
                )}
              >
                <span>{creditsLeft}</span>
                {' left'}
              </span>
              {'\n      '}
            </div>
            {'\n\n      '}
            <button
              onClick={toggleNotifs}
              title="Notifications"
              className="relative w-[30px] h-[30px] flex items-center justify-center [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] cursor-pointer hv-u69wm3"
            >
              {'\n        '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#52525B"
                strokeWidth="1.7"
              >
                <path d="M6 8.5a4 4 0 018 0c0 3 1 4 1.5 4.5h-11C5 12.5 6 11.5 6 8.5zM8.5 15.5a1.7 1.7 0 003 0"></path>
              </svg>
              {'\n        '}
              <span className="absolute top-[5px] right-[5px] w-[6px] h-[6px] rounded-full bg-[#DC2626] [border:1.5px_solid_#FFFFFF]"></span>
              {'\n      '}
            </button>
            {'\n      '}
            {notifsOpen ? (
              <>
                {'\n        '}
                <div className="absolute top-[44px] right-[58px] w-[288px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_16px_40px_rgba(24,24,27,.16)] z-[60] overflow-hidden [animation:pop_.12s_ease-out]">
                  {'\n          '}
                  <div className="py-[9px] px-[12px] [border-bottom:1px_solid_#F1F1F3] text-[11.5px] font-[650]">
                    {'Notifications'}
                  </div>
                  {'\n          '}
                  {(notifications ?? []).map((n: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={n.act}
                        className="flex gap-[8px] py-[9px] px-[12px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer hv-udcbnc"
                      >
                        {'\n              '}
                        <span
                          style={cssToObj(
                            `flex:none; width:6px; height:6px; border-radius:50%; margin-top:5px; background:${n.dot}`,
                          )}
                        ></span>
                        {'\n              '}
                        <span className="flex-1 [min-width:0]">
                          {'\n                '}
                          <span className="block text-[11.5px] text-[#3F3F46] leading-[1.45]">
                            <span>{n.text}</span>
                          </span>
                          {'\n                '}
                          <span className="block text-[10px] text-[#A1A1AA] mt-[2px]">
                            <span>{n.time}</span>
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
              </>
            ) : null}
            {'\n\n      '}
            <button
              onClick={goSettings}
              title="Settings"
              className="w-[30px] h-[30px] flex items-center justify-center [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[7px] cursor-pointer hv-u69wm3"
            >
              {'\n        '}
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#52525B"
                strokeWidth="1.7"
              >
                <circle cx="10" cy="10" r="2.4"></circle>
                <path d="M10 3.5v2M10 14.5v2M3.5 10h2M14.5 10h2M5.4 5.4l1.4 1.4M13.2 13.2l1.4 1.4M14.6 5.4l-1.4 1.4M6.8 13.2l-1.4 1.4"></path>
              </svg>
              {'\n      '}
            </button>
            {'\n      '}
            <div
              onClick={toggleUser}
              title="Account"
              className="w-[30px] h-[30px] rounded-[7px] bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center text-[11.5px] font-[700] cursor-pointer"
            >
              {'AK'}
            </div>
            {'\n      '}
            {userOpen ? (
              <>
                {'\n        '}
                <div className="absolute top-[44px] right-[16px] w-[196px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[9px] shadow-[0_16px_40px_rgba(24,24,27,.16)] p-[4px] z-[60] [animation:pop_.12s_ease-out]">
                  {'\n          '}
                  <div className="py-[7px] px-[9px] [border-bottom:1px_solid_#F1F1F3] mb-[3px]">
                    {'\n            '}
                    <div className="text-[11.5px] font-[650]">{'Aarav Kapoor'}</div>
                    {'\n            '}
                    <div className="text-[10.5px] text-[#8E8E96] mt-[1px]">
                      {'aarav@outmate.ai'}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  {(userMenu ?? []).map((u: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={u.act}
                        className="py-[7px] px-[9px] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                      >
                        <span>{u.label}</span>
                      </div>
                      {'\n          '}
                    </Fragment>
                  ))}
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n    '}
          </header>
          {'\n\n    '}
          <main id="scroller" className="flex-1 [min-height:0] overflow-y-auto bg-[#FFFFFF]">
            {'\n      '}
            {isHome ? (
              <>
                {'\n        '}
                <div className="[max-width:1000px] my-[0] mx-[auto] pt-[40px] px-[32px] pb-[56px]">
                  {'\n\n          '}
                  <div className="text-center">
                    {'\n            '}
                    <h1 className="m-[0] text-[34px] font-[700] tracking-[-.02em] text-[#18181B]">
                      {"Let's find your next customer"}
                    </h1>
                    {'\n            '}
                    <p className="mt-[9px] mx-[0] mb-[0] text-[14.5px] text-[#71717A]">
                      {"Tell us what you need and we'll handle the research."}
                    </p>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[24px] [border:1px_solid_#D9D9DF] rounded-[10px] bg-[#FFFFFF] shadow-[0_1px_2px_rgba(24,24,27,.04)]">
                    {'\n            '}
                    <textarea
                      onChange={onDraft}
                      value={draft}
                      placeholder="Find leads, enrich data, research companies, build lists…"
                      className="w-full h-[96px] resize-none [border:none] outline-none bg-transparent pt-[14px] px-[15px] pb-[6px] [font-family:inherit] text-[13.5px] text-[#18181B] leading-[1.55]"
                    ></textarea>
                    {'\n            '}
                    <div className="flex items-center gap-[7px] py-[9px] px-[11px] [border-top:1px_solid_#F1F1F3]">
                      {'\n              '}
                      <div
                        onClick={toggleAgent}
                        className="relative flex items-center gap-[6px] h-[28px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[7px] cursor-pointer bg-[#FFFFFF] hv-u69wm3"
                      >
                        {'\n                '}
                        <span className="w-[16px] h-[16px] rounded-[4px] bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center text-[8.5px] font-[700]">
                          {'OA'}
                        </span>
                        {'\n                '}
                        <span className="text-[11.5px] font-[600] text-[#3F3F46]">
                          <span>{agent}</span>
                        </span>
                        {'\n                '}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#A1A1AA"
                          strokeWidth="2.2"
                        >
                          <path d="M5 8l5 5 5-5"></path>
                        </svg>
                        {'\n                '}
                        {agentOpen ? (
                          <>
                            {'\n                  '}
                            <span className="absolute bottom-[34px] left-[0] w-[226px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[30] flex flex-col [animation:pop_.12s_ease-out]">
                              {'\n                    '}
                              {(agents ?? []).map((a: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                      '}
                                  <span
                                    onClick={a.pick}
                                    className="py-[7px] px-[8px] rounded-[6px] cursor-pointer hv-u4v0t1"
                                  >
                                    {'\n                        '}
                                    <span className="block text-[11.5px] font-[600] text-[#18181B]">
                                      <span>{a.name}</span>
                                    </span>
                                    {'\n                        '}
                                    <span className="block text-[10.5px] text-[#8E8E96] mt-[1px]">
                                      <span>{a.desc}</span>
                                    </span>
                                    {'\n                      '}
                                  </span>
                                  {'\n                    '}
                                </Fragment>
                              ))}
                              {'\n                  '}
                            </span>
                            {'\n                '}
                          </>
                        ) : null}
                        {'\n              '}
                      </div>
                      {'\n\n              '}
                      <div
                        onClick={toggleTools}
                        className="relative flex items-center gap-[6px] h-[28px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[7px] cursor-pointer bg-[#FFFFFF] hv-u69wm3"
                      >
                        {'\n                '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#52525B"
                          strokeWidth="1.7"
                        >
                          <path d="M12.4 3.6a3.4 3.4 0 00-4 4.4L4 12.4V16h3.6l4.4-4.4a3.4 3.4 0 004.4-4l-2.2 2.2-2.2-.6-.6-2.2z"></path>
                        </svg>
                        {'\n                '}
                        <span className="text-[11.5px] text-[#3F3F46] font-[550]">{'Tools'}</span>
                        {'\n                '}
                        {toolsOpen ? (
                          <>
                            {'\n                  '}
                            <span className="absolute bottom-[34px] left-[0] w-[216px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[30] flex flex-col [animation:pop_.12s_ease-out]">
                              {'\n                    '}
                              {(tools ?? []).map((t: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                      '}
                                  <span
                                    onClick={t.pick}
                                    className="flex items-center justify-between gap-[8px] py-[7px] px-[8px] rounded-[6px] text-[11.5px] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                                  >
                                    {'\n                        '}
                                    <span>{t.label}</span>
                                    {'\n                        '}
                                    <span className="text-[10px] text-[#A1A1AA] whitespace-nowrap">
                                      <span>{t.cost}</span>
                                    </span>
                                    {'\n                      '}
                                  </span>
                                  {'\n                    '}
                                </Fragment>
                              ))}
                              {'\n                  '}
                            </span>
                            {'\n                '}
                          </>
                        ) : null}
                        {'\n              '}
                      </div>
                      {'\n\n              '}
                      <button
                        onClick={buildEnrichment}
                        className="flex items-center gap-[6px] h-[28px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[7px] cursor-pointer bg-[#FFFFFF] [font-family:inherit] text-[11.5px] text-[#3F3F46] font-[550] hv-u69wm3"
                      >
                        {'\n                '}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#6D28D9"
                          strokeWidth="1.9"
                        >
                          <path d="M11 2.5L4.5 11.5H9l-.6 6 6.6-9H10.4z"></path>
                        </svg>
                        {'\n                Build an enrichment\n              '}
                      </button>
                      {'\n              '}
                      <button
                        onClick={attach}
                        title="Attach a file"
                        className="w-[28px] h-[28px] flex items-center justify-center [border:1px_solid_#E4E4E8] rounded-[7px] bg-[#FFFFFF] cursor-pointer hv-u69wm3"
                      >
                        {'\n                '}
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#52525B"
                          strokeWidth="1.7"
                        >
                          <path d="M13.5 9l-4.6 4.6a2.6 2.6 0 01-3.7-3.7l5.4-5.4a3.4 3.4 0 014.8 4.8L9.6 15"></path>
                        </svg>
                        {'\n              '}
                      </button>
                      {'\n              '}
                      <button
                        onClick={voice}
                        title="Voice input"
                        className="hv-u69wm3"
                        style={cssToObj(
                          `width:28px; height:28px; display:flex; align-items:center; justify-content:center; border:1px solid ${voiceBorder}; border-radius:7px; background:${voiceBg}; cursor:pointer`,
                        )}
                      >
                        {'\n                '}
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke={voiceFg}
                          strokeWidth="1.7"
                        >
                          <rect x="8" y="3.5" width="4" height="8" rx="2"></rect>
                          <path d="M5.5 9.5a4.5 4.5 0 009 0M10 14v2.5"></path>
                        </svg>
                        {'\n              '}
                      </button>
                      {'\n              '}
                      <span className="ml-[auto] text-[10.5px] text-[#A1A1AA]">
                        <span>{estimateLabel}</span>
                      </span>
                      {'\n              '}
                      <button
                        onClick={send}
                        title="Start research"
                        className="w-[30px] h-[30px] flex items-center justify-center [border:1px_solid_#6D28D9] bg-[#6D28D9] rounded-[7px] cursor-pointer hv-jdi8ic"
                      >
                        {'\n                '}
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
                        {'\n              '}
                      </button>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[14px] flex items-center gap-[8px] flex-wrap">
                    {'\n            '}
                    {(connectors ?? []).map((c: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={c.act}
                          className="hv-udcbnc"
                          style={cssToObj(
                            `display:flex; align-items:center; gap:8px; height:34px; padding:0 11px; border:1px solid ${c.border}; border-radius:7px; cursor:pointer; background:#FFFFFF`,
                          )}
                        >
                          {'\n                '}
                          <span
                            style={cssToObj(
                              `flex:none; width:18px; height:18px; border-radius:4px; display:flex; align-items:center; justify-content:center; font-size:8.5px; font-weight:700; color:#FFFFFF; background:${c.bg}`,
                            )}
                          >
                            <span>{c.mark}</span>
                          </span>
                          {'\n                '}
                          <span className="text-[12px] font-[600] text-[#18181B] whitespace-nowrap">
                            <span>{c.label}</span>
                          </span>
                          {'\n                '}
                          <span
                            style={cssToObj(
                              `font-size:10.5px; color:${c.stateColor}; white-space:nowrap`,
                            )}
                          >
                            <span>{c.state}</span>
                          </span>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n            '}
                    <span className="text-[11px] text-[#A1A1AA] ml-[2px]">
                      {'Connect your stack to unlock richer research'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[34px] flex items-baseline justify-between">
                    {'\n            '}
                    <h2 className="m-[0] text-[14px] font-[650]">{'Popular research prompts'}</h2>
                    {'\n            '}
                    <span
                      onClick={morePrompts}
                      className="text-[11.5px] text-[#5B21B6] font-[600] cursor-pointer"
                    >
                      {'Browse prompt library'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] [border:1px_solid_#E5E5EA] rounded-[8px] overflow-hidden">
                    {'\n            '}
                    {(prompts ?? []).map((p: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={p.use}
                          className="flex items-center gap-[11px] py-[11px] px-[13px] [border-bottom:1px_solid_#F1F1F3] cursor-pointer bg-[#FFFFFF] hv-udcbnc"
                        >
                          {'\n                '}
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#8E8E96"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            className="flex-none"
                          >
                            <path d={p.path}></path>
                          </svg>
                          {'\n                '}
                          <span className="flex-1 [min-width:0] text-[12.5px] text-[#3F3F46] leading-[1.5]">
                            <span>{p.text}</span>
                          </span>
                          {'\n                '}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#C4C4CB"
                            strokeWidth="1.8"
                            className="flex-none"
                          >
                            <path d="M4 10h11M11 6l4 4-4 4"></path>
                          </svg>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[32px] flex items-baseline justify-between">
                    {'\n            '}
                    <h2 className="m-[0] text-[15px] font-[650]">{'Start with a workflow'}</h2>
                    {'\n            '}
                    <span
                      onClick={allTemplates}
                      className="text-[12px] text-[#5B21B6] font-[600] cursor-pointer"
                    >
                      {'View all workflows'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] grid [grid-template-columns:repeat(2,_1fr)] gap-[8px]">
                    {'\n            '}
                    {(workflows ?? []).map((t: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="flex items-center gap-[11px] py-[12px] px-[13px] [border:1px_solid_#E5E5EA] rounded-[6px] bg-[#FFFFFF] hv-x2hwvk">
                          {'\n                '}
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#6D28D9"
                            strokeWidth="1.55"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-none"
                          >
                            <path d={t.path}></path>
                          </svg>
                          {'\n                '}
                          <span className="flex-1 [min-width:0]">
                            {'\n                  '}
                            <span className="block text-[13px] font-[650] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                              <span>{t.name}</span>
                            </span>
                            {'\n                  '}
                            <span className="block text-[12px] text-[#71717A] mt-[3px] overflow-hidden text-ellipsis whitespace-nowrap">
                              <span>{t.desc}</span>
                            </span>
                            {'\n                '}
                          </span>
                          {'\n                '}
                          <span className="flex-none text-[11px] text-[#71717A] font-[550] whitespace-nowrap">
                            <span>{t.cost}</span>
                          </span>
                          {'\n                '}
                          <span
                            onClick={t.run}
                            className="flex-none h-[26px] py-[0] px-[11px] [border:1px_solid_#E4E4E8] rounded-[5px] flex items-center text-[11.5px] font-[650] text-[#3F3F46] bg-[#FFFFFF] cursor-pointer hv-bgqo4e"
                          >
                            {'Run'}
                          </span>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[32px] flex items-baseline justify-between">
                    {'\n            '}
                    <h2 className="m-[0] text-[15px] font-[650]">{'Continue working'}</h2>
                    {'\n            '}
                    <span
                      onClick={goProjects}
                      className="text-[12px] text-[#5B21B6] font-[600] cursor-pointer"
                    >
                      {'All projects'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] [border:1px_solid_#E5E5EA] rounded-[8px] overflow-hidden">
                    {'\n            '}
                    {(research ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={r.open}
                          className="flex items-center gap-[12px] py-[12px] px-[13px] [border-bottom:1px_solid_#F1F1F3] cursor-pointer bg-[#FFFFFF] relative hv-udcbnc"
                        >
                          {'\n                '}
                          <span className="flex-1 [min-width:0]">
                            {'\n                  '}
                            <span className="flex items-center gap-[8px]">
                              {'\n                    '}
                              <span className="text-[13px] font-[650] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                                <span>{r.name}</span>
                              </span>
                              {'\n                    '}
                              <span style={cssToObj(r.statusStyle)}>
                                <span>{r.status}</span>
                              </span>
                              {'\n                    '}
                              <span className="text-[10.5px] text-[#A1A1AA] whitespace-nowrap">
                                <span>{r.type}</span>
                              </span>
                              {'\n                  '}
                            </span>
                            {'\n                  '}
                            <span className="block text-[12px] text-[#71717A] mt-[3px] tabular-nums">
                              <span>{r.stats}</span>
                            </span>
                            {'\n                  '}
                            <span className="block text-[11px] text-[#A1A1AA] mt-[2px] tabular-nums">
                              <span>{r.spend}</span>
                            </span>
                            {'\n                '}
                          </span>
                          {'\n                '}
                          <span className="flex-none text-[11px] text-[#A1A1AA] whitespace-nowrap">
                            <span>{r.updated}</span>
                          </span>
                          {'\n                '}
                          <span
                            style={cssToObj(
                              `flex:none; width:22px; height:22px; border-radius:5px; background:${r.ownerBg}; color:${r.ownerFg}; display:flex; align-items:center; justify-content:center; font-size:9.5px; font-weight:700`,
                            )}
                          >
                            <span>{r.owner}</span>
                          </span>
                          {'\n                '}
                          <span
                            onClick={r.openIt}
                            className="flex-none h-[26px] py-[0] px-[11px] [border:1px_solid_#E4E4E8] rounded-[5px] flex items-center gap-[5px] text-[11.5px] font-[650] text-[#3F3F46] bg-[#FFFFFF] hv-bgqo4e"
                          >
                            {'Open research →'}
                          </span>
                          {'\n                '}
                          <span
                            onClick={r.menu}
                            title="More actions"
                            className="flex-none w-[24px] h-[24px] flex items-center justify-center rounded-[5px] text-[#B4B4BB] text-[12px] hv-q1v9ly"
                          >
                            {'•••'}
                          </span>
                          {'\n                '}
                          {r.menuOpen ? (
                            <>
                              {'\n                  '}
                              <span className="absolute top-[40px] right-[12px] w-[164px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[8px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[30] flex flex-col [animation:pop_.12s_ease-out]">
                                {'\n                    '}
                                {(r.items ?? []).map((i: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <span
                                      onClick={i.act}
                                      className="hv-u4v0t1"
                                      style={cssToObj(
                                        `padding:7px 8px; border-radius:6px; font-size:11.5px; color:${i.color}; cursor:pointer`,
                                      )}
                                    >
                                      <span>{i.label}</span>
                                    </span>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </span>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[32px] flex items-baseline justify-between">
                    {'\n            '}
                    <h2 className="m-[0] text-[14px] font-[650]">{'Recent sheets'}</h2>
                    {'\n            '}
                    <span
                      onClick={goProjects}
                      className="text-[11.5px] text-[#5B21B6] font-[600] cursor-pointer"
                    >
                      {'View all sheets'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] grid [grid-template-columns:repeat(3,_1fr)] gap-[10px]">
                    {'\n            '}
                    {(sheets ?? []).map((sh: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={sh.open}
                          className="[border:1px_solid_#E5E5EA] rounded-[8px] overflow-hidden cursor-pointer bg-[#FFFFFF] hv-lhyqd5"
                        >
                          {'\n                '}
                          <div className="h-[132px] overflow-hidden bg-[#FFFFFF] [border-bottom:1px_solid_#EFEFF2]">
                            {'\n                  '}
                            <div className="grid [grid-template-columns:1.35fr_1.15fr_.8fr] bg-[#F7F7F9] [border-bottom:1px_solid_#EAEAEE]">
                              {'\n                    '}
                              {(sh.cols ?? []).map((c: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                      '}
                                  <span className="py-[5px] px-[7px] text-[9px] font-[650] text-[#71717A] whitespace-nowrap overflow-hidden text-ellipsis [border-right:1px_solid_#EFEFF2]">
                                    <span>{c}</span>
                                  </span>
                                  {'\n                    '}
                                </Fragment>
                              ))}
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            {(sh.rows ?? []).map((row: any, __i: number) => (
                              <Fragment key={__i}>
                                {'\n                    '}
                                <div className="grid [grid-template-columns:1.35fr_1.15fr_.8fr] [border-bottom:1px_solid_#F4F4F6]">
                                  {'\n                      '}
                                  {(row.cells ?? []).map((v: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                        '}
                                      <span className="py-[5px] px-[7px] text-[9.5px] text-[#52525B] whitespace-nowrap overflow-hidden text-ellipsis [border-right:1px_solid_#F6F6F8]">
                                        <span>{v}</span>
                                      </span>
                                      {'\n                      '}
                                    </Fragment>
                                  ))}
                                  {'\n                    '}
                                </div>
                                {'\n                  '}
                              </Fragment>
                            ))}
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="py-[9px] px-[11px]">
                            {'\n                  '}
                            <div className="text-[12px] font-[650] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                              <span>{sh.name}</span>
                            </div>
                            {'\n                  '}
                            <div className="flex items-center justify-between mt-[4px]">
                              {'\n                    '}
                              <span className="text-[10.5px] text-[#8E8E96] tabular-nums">
                                <span>{sh.meta}</span>
                              </span>
                              {'\n                    '}
                              <span
                                onClick={sh.open}
                                className="text-[10.5px] font-[650] text-[#5B21B6]"
                              >
                                {'Open'}
                              </span>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isProjects ? (
              <>
                {'\n        '}
                <div className="[max-width:1120px] my-[0] mx-[auto] pt-[26px] px-[32px] pb-[56px]">
                  {'\n          '}
                  <div className="flex items-start justify-between gap-[16px]">
                    {'\n            '}
                    <div>
                      {'\n              '}
                      <h1 className="m-[0] text-[22px] font-[700] tracking-[-.01em]">
                        {'Projects'}
                      </h1>
                      {'\n              '}
                      <p className="mt-[6px] mx-[0] mb-[0] text-[13px] text-[#71717A]">
                        {'Manage your GTM research workflows, datasets and enrichment runs.'}
                      </p>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <button
                      onClick={newResearch}
                      className="flex-none h-[32px] py-[0] px-[13px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[12.5px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                    >
                      {'+ New project'}
                    </button>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[16px] flex [border:1px_solid_#E5E5EA] rounded-[6px] overflow-hidden">
                    {'\n            '}
                    {(projectSummary ?? []).map((k: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="flex-1 py-[10px] px-[13px] [border-right:1px_solid_#EFEFF2]">
                          {'\n                '}
                          <div className="text-[17px] font-[700] text-[#18181B] tabular-nums">
                            <span>{k.value}</span>
                          </div>
                          {'\n                '}
                          <div className="text-[11.5px] text-[#8E8E96] mt-[2px]">
                            <span>{k.label}</span>
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[14px] flex items-center gap-[7px] flex-wrap">
                    {'\n            '}
                    <div className="flex items-center gap-[6px] h-[30px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] rounded-[6px] w-[216px]">
                      {'\n              '}
                      <svg
                        width="13"
                        height="13"
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
                        onChange={onQ}
                        value={q}
                        placeholder="Search projects"
                        className="[border:none] outline-none bg-transparent text-[12px] w-full [min-width:0] text-[#3F3F46] [font-family:inherit]"
                      />
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(statusChips ?? []).map((c: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <span onClick={c.pick} style={cssToObj(c.style)}>
                          <span>{c.label}</span>
                        </span>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n            '}
                    <button
                      onClick={filterMore}
                      className="h-[30px] py-[0] px-[11px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[12px] text-[#3F3F46] font-[550] cursor-pointer [font-family:inherit]"
                    >
                      {'More filters'}
                    </button>
                    {'\n            '}
                    <button
                      onClick={toggleSort}
                      className="ml-[auto] h-[30px] py-[0] px-[11px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] text-[12px] text-[#3F3F46] font-[550] cursor-pointer [font-family:inherit]"
                    >
                      <span>{sortLabel}</span>
                    </button>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[12px] [border:1px_solid_#E5E5EA] rounded-[6px] overflow-hidden">
                    {'\n            '}
                    <div
                      style={cssToObj(
                        `display:grid; grid-template-columns:${projectGrid}; background:#F7F7F9; border-bottom:1px solid #E5E5EA`,
                      )}
                    >
                      {'\n              '}
                      {(projectCols ?? []).map((c: any, __i: number) => (
                        <Fragment key={__i}>
                          {'\n                '}
                          <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] whitespace-nowrap [border-right:1px_solid_#EDEDF0]">
                            <span>{c}</span>
                          </span>
                          {'\n              '}
                        </Fragment>
                      ))}
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(projectRows ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={r.act}
                          className="hv-udcbnc"
                          style={cssToObj(
                            `display:grid; grid-template-columns:${projectGrid}; border-bottom:1px solid #F1F1F3; cursor:pointer; background:#FFFFFF; position:relative`,
                          )}
                        >
                          {'\n                '}
                          <span className="py-[10px] px-[11px] [min-width:0] [border-right:1px_solid_#F6F6F8]">
                            {'\n                  '}
                            <span className="block text-[12.5px] font-[650] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                              <span>{r.name}</span>
                            </span>
                            {'\n                  '}
                            <span className="block text-[11px] text-[#A1A1AA] mt-[2px]">
                              <span>{r.type}</span>
                            </span>
                            {'\n                '}
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] flex items-center [border-right:1px_solid_#F6F6F8]">
                            <span style={cssToObj(r.statusStyle)}>
                              <span>{r.status}</span>
                            </span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.companies}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.leaders}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.signals}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.enriched}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#71717A] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{r.lastRun}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.creditsUsed}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#71717A] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{r.updated}</span>
                          </span>
                          {'\n                '}
                          <span
                            onClick={r.menu}
                            title="Actions"
                            className="flex items-center justify-center text-[#B4B4BB] text-[12px] hv-1jfh4w6"
                          >
                            {'•••'}
                          </span>
                          {'\n                '}
                          {r.menuOpen ? (
                            <>
                              {'\n                  '}
                              <span className="absolute top-[38px] right-[10px] w-[150px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[7px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[30] flex flex-col [animation:pop_.12s_ease-out]">
                                {'\n                    '}
                                {(r.items ?? []).map((i: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <span
                                      onClick={i.act}
                                      className="hv-u4v0t1"
                                      style={cssToObj(
                                        `padding:7px 8px; border-radius:5px; font-size:12px; color:${i.color}; cursor:pointer`,
                                      )}
                                    >
                                      <span>{i.label}</span>
                                    </span>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </span>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isTemplates ? (
              <>
                {'\n        '}
                <div className="[max-width:1120px] my-[0] mx-[auto] pt-[26px] px-[32px] pb-[56px]">
                  {'\n          '}
                  <div className="flex items-start justify-between gap-[16px]">
                    {'\n            '}
                    <div>
                      {'\n              '}
                      <h1 className="m-[0] text-[22px] font-[700] tracking-[-.01em]">
                        {'Templates'}
                      </h1>
                      {'\n              '}
                      <p className="mt-[6px] mx-[0] mb-[0] text-[13px] text-[#71717A]">
                        {'Pre-built GTM intelligence workflows you can run and customize.'}
                      </p>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <button
                      onClick={newTemplate}
                      className="flex-none h-[32px] py-[0] px-[13px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[12.5px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                    >
                      {'+ New template'}
                    </button>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[16px] flex items-center gap-[7px] flex-wrap">
                    {'\n            '}
                    <div className="flex items-center gap-[6px] h-[30px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] rounded-[6px] w-[220px]">
                      {'\n              '}
                      <svg
                        width="13"
                        height="13"
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
                        onChange={onQ}
                        value={q}
                        placeholder="Search workflows..."
                        className="[border:none] outline-none bg-transparent text-[12px] w-full [min-width:0] text-[#3F3F46] [font-family:inherit]"
                      />
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(catChips ?? []).map((c: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <span onClick={c.pick} style={cssToObj(c.style)}>
                          <span>{c.label}</span>
                        </span>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  <div className="mt-[12px] [border:1px_solid_#E5E5EA] rounded-[6px] overflow-hidden">
                    {'\n            '}
                    <div className="grid [grid-template-columns:1.3fr_1.9fr_.8fr_.9fr_.7fr_178px] bg-[#F7F7F9] [border-bottom:1px_solid_#E5E5EA]">
                      {'\n              '}
                      <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] [border-right:1px_solid_#EDEDF0]">
                        {'Template'}
                      </span>
                      {'\n              '}
                      <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] [border-right:1px_solid_#EDEDF0]">
                        {'What it does'}
                      </span>
                      {'\n              '}
                      <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] [border-right:1px_solid_#EDEDF0]">
                        {'Category'}
                      </span>
                      {'\n              '}
                      <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] [border-right:1px_solid_#EDEDF0]">
                        {'Est. credits'}
                      </span>
                      {'\n              '}
                      <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] [border-right:1px_solid_#EDEDF0]">
                        {'Last used'}
                      </span>
                      {'\n              '}
                      <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B]">
                        {'Actions'}
                      </span>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(workflowRows ?? []).map((w: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="grid [grid-template-columns:1.3fr_1.9fr_.8fr_.9fr_.7fr_178px] [border-bottom:1px_solid_#F1F1F3] bg-[#FFFFFF] hv-udcbnc">
                          {'\n                '}
                          <span className="py-[10px] px-[11px] flex items-center gap-[9px] [min-width:0] [border-right:1px_solid_#F6F6F8]">
                            {'\n                  '}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#6D28D9"
                              strokeWidth="1.55"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="flex-none"
                            >
                              <path d={w.path}></path>
                            </svg>
                            {'\n                  '}
                            <span className="text-[12.5px] font-[650] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                              <span>{w.name}</span>
                            </span>
                            {'\n                '}
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#52525B] [border-right:1px_solid_#F6F6F8] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{w.desc}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#71717A] [border-right:1px_solid_#F6F6F8]">
                            <span>{w.cat}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#3F3F46] font-[550] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{w.cost}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#A1A1AA] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{w.used}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[7px] px-[9px] flex items-center gap-[6px]">
                            {'\n                  '}
                            <span
                              onClick={w.run}
                              className="h-[25px] py-[0] px-[9px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[5px] flex items-center text-[11.5px] font-[650] cursor-pointer hv-jdi8ic"
                            >
                              {'Run'}
                            </span>
                            {'\n                  '}
                            <span
                              onClick={w.preview}
                              className="h-[25px] py-[0] px-[9px] [border:1px_solid_#E4E4E8] rounded-[5px] flex items-center text-[11.5px] font-[600] text-[#3F3F46] cursor-pointer hv-u4v0t1"
                            >
                              {'Preview'}
                            </span>
                            {'\n                  '}
                            <span
                              onClick={w.duplicate}
                              title="Duplicate"
                              className="w-[25px] h-[25px] [border:1px_solid_#E4E4E8] rounded-[5px] flex items-center justify-center text-[#71717A] cursor-pointer hv-u4v0t1"
                            >
                              {'\n                    '}
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                              >
                                <rect x="7" y="7" width="9" height="9" rx="2"></rect>
                                <path d="M13 7V6a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2h1"></path>
                              </svg>
                              {'\n                  '}
                            </span>
                            {'\n                '}
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
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isResearchPage ? (
              <>
                {'\n        '}
                <div className="[max-width:1120px] my-[0] mx-[auto] pt-[26px] px-[32px] pb-[56px]">
                  {'\n          '}
                  <div className="flex items-start justify-between gap-[16px]">
                    {'\n            '}
                    <div>
                      {'\n              '}
                      <h1 className="m-[0] text-[22px] font-[700] tracking-[-.01em]">
                        {'Recent Research'}
                      </h1>
                      {'\n              '}
                      <p className="mt-[6px] mx-[0] mb-[0] text-[13px] text-[#71717A]">
                        {'Pick up your previous GTM research exactly where you left off.'}
                      </p>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <button
                      onClick={newResearch}
                      className="flex-none h-[32px] py-[0] px-[13px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[12.5px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                    >
                      {'+ New research'}
                    </button>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[16px] flex items-center gap-[7px] flex-wrap">
                    {'\n            '}
                    <div className="flex items-center gap-[6px] h-[30px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] rounded-[6px] w-[216px]">
                      {'\n              '}
                      <svg
                        width="13"
                        height="13"
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
                        onChange={onQ}
                        value={q}
                        placeholder="Search research"
                        className="[border:none] outline-none bg-transparent text-[12px] w-full [min-width:0] text-[#3F3F46] [font-family:inherit]"
                      />
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(researchChips ?? []).map((c: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <span onClick={c.pick} style={cssToObj(c.style)}>
                          <span>{c.label}</span>
                        </span>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[12px] [border:1px_solid_#E5E5EA] rounded-[6px] overflow-hidden">
                    {'\n            '}
                    <div
                      style={cssToObj(
                        `display:grid; grid-template-columns:${researchGrid}; background:#F7F7F9; border-bottom:1px solid #E5E5EA`,
                      )}
                    >
                      {'\n              '}
                      {(researchCols ?? []).map((c: any, __i: number) => (
                        <Fragment key={__i}>
                          {'\n                '}
                          <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] whitespace-nowrap [border-right:1px_solid_#EDEDF0]">
                            <span>{c}</span>
                          </span>
                          {'\n              '}
                        </Fragment>
                      ))}
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(researchRows ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={r.act}
                          className="hv-udcbnc"
                          style={cssToObj(
                            `display:grid; grid-template-columns:${researchGrid}; border-bottom:1px solid #F1F1F3; cursor:pointer; background:#FFFFFF`,
                          )}
                        >
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] font-[650] text-[#18181B] [border-right:1px_solid_#F6F6F8] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{r.name}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#71717A] [border-right:1px_solid_#F6F6F8] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{r.type}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.companies}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.leaders}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.signals}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.enriched}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.creditsUsed}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#71717A] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{r.updated}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] flex items-center [border-right:1px_solid_#F6F6F8]">
                            <span style={cssToObj(r.statusStyle)}>
                              <span>{r.status}</span>
                            </span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] font-[650] text-[#5B21B6] whitespace-nowrap">
                            {'Open →'}
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
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isLists ? (
              <>
                {'\n        '}
                <div className="[max-width:1120px] my-[0] mx-[auto] pt-[26px] px-[32px] pb-[56px]">
                  {'\n          '}
                  <div className="flex items-start justify-between gap-[16px]">
                    {'\n            '}
                    <div>
                      {'\n              '}
                      <h1 className="m-[0] text-[22px] font-[700] tracking-[-.01em]">
                        {'Saved lists'}
                      </h1>
                      {'\n              '}
                      <p className="mt-[6px] mx-[0] mb-[0] text-[13px] text-[#71717A]">
                        {'Subsets of research you have qualified and handed to outreach.'}
                      </p>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <button
                      onClick={newList}
                      className="flex-none h-[32px] py-[0] px-[13px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[6px] text-[12.5px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                    >
                      {'+ New list'}
                    </button>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[16px] flex items-center gap-[6px] h-[30px] py-[0] px-[10px] [border:1px_solid_#E4E4E8] rounded-[6px] w-[216px]">
                    {'\n            '}
                    <svg
                      width="13"
                      height="13"
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
                      onChange={onQ}
                      value={q}
                      placeholder="Search lists"
                      className="[border:none] outline-none bg-transparent text-[12px] w-full [min-width:0] text-[#3F3F46] [font-family:inherit]"
                    />
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[12px] [border:1px_solid_#E5E5EA] rounded-[6px] overflow-hidden">
                    {'\n            '}
                    <div
                      style={cssToObj(
                        `display:grid; grid-template-columns:${listGrid}; background:#F7F7F9; border-bottom:1px solid #E5E5EA`,
                      )}
                    >
                      {'\n              '}
                      {(listCols ?? []).map((c: any, __i: number) => (
                        <Fragment key={__i}>
                          {'\n                '}
                          <span className="py-[8px] px-[11px] text-[11.5px] font-[650] text-[#52525B] whitespace-nowrap [border-right:1px_solid_#EDEDF0]">
                            <span>{c}</span>
                          </span>
                          {'\n              '}
                        </Fragment>
                      ))}
                      {'\n            '}
                    </div>
                    {'\n            '}
                    {(listRows ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div
                          onClick={r.act}
                          className="hv-udcbnc"
                          style={cssToObj(
                            `display:grid; grid-template-columns:${listGrid}; border-bottom:1px solid #F1F1F3; cursor:pointer; background:#FFFFFF; position:relative`,
                          )}
                        >
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] font-[650] text-[#18181B] [border-right:1px_solid_#F6F6F8] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{r.name}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.companies}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.leaders}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12.5px] text-[#3F3F46] [border-right:1px_solid_#F6F6F8] tabular-nums">
                            <span>{r.signals}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#71717A] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{r.created}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#71717A] [border-right:1px_solid_#F6F6F8] whitespace-nowrap">
                            <span>{r.updated}</span>
                          </span>
                          {'\n                '}
                          <span className="py-[10px] px-[11px] text-[12px] text-[#5B21B6] [border-right:1px_solid_#F6F6F8] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{r.source}</span>
                          </span>
                          {'\n                '}
                          <span
                            onClick={r.menu}
                            title="Actions"
                            className="flex items-center justify-center text-[#B4B4BB] text-[12px] hv-1jfh4w6"
                          >
                            {'•••'}
                          </span>
                          {'\n                '}
                          {r.menuOpen ? (
                            <>
                              {'\n                  '}
                              <span className="absolute top-[38px] right-[10px] w-[150px] bg-[#FFFFFF] [border:1px_solid_#E4E4E8] rounded-[7px] shadow-[0_14px_34px_rgba(24,24,27,.16)] p-[4px] z-[30] flex flex-col [animation:pop_.12s_ease-out]">
                                {'\n                    '}
                                {(r.items ?? []).map((i: any, __i: number) => (
                                  <Fragment key={__i}>
                                    {'\n                      '}
                                    <span
                                      onClick={i.act}
                                      className="hv-u4v0t1"
                                      style={cssToObj(
                                        `padding:7px 8px; border-radius:5px; font-size:12px; color:${i.color}; cursor:pointer`,
                                      )}
                                    >
                                      <span>{i.label}</span>
                                    </span>
                                    {'\n                    '}
                                  </Fragment>
                                ))}
                                {'\n                  '}
                              </span>
                              {'\n                '}
                            </>
                          ) : null}
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </>
            ) : null}
            {'\n\n      '}
            {isPage ? (
              <>
                {'\n        '}
                <div className="[max-width:1080px] my-[0] mx-[auto] pt-[26px] px-[32px] pb-[56px]">
                  {'\n          '}
                  <div className="flex items-start justify-between gap-[16px]">
                    {'\n            '}
                    <div>
                      {'\n              '}
                      <h1 className="m-[0] text-[21px] font-[700] tracking-[-.01em]">
                        <span>{pageTitle}</span>
                      </h1>
                      {'\n              '}
                      <p className="mt-[6px] mx-[0] mb-[0] text-[12.5px] text-[#71717A]">
                        <span>{pageBlurb}</span>
                      </p>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <button
                      onClick={pageAction}
                      className="flex-none h-[31px] py-[0] px-[13px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                    >
                      <span>{pageActionLabel}</span>
                    </button>
                    {'\n          '}
                  </div>
                  {'\n\n          '}
                  {pageHasTable ? (
                    <>
                      {'\n            '}
                      <div className="mt-[16px] [border:1px_solid_#E5E5EA] rounded-[8px] overflow-hidden">
                        {'\n              '}
                        <div
                          style={cssToObj(
                            `display:grid; grid-template-columns:${pageGrid}; background:#F7F7F9; border-bottom:1px solid #E5E5EA`,
                          )}
                        >
                          {'\n                '}
                          {(pageCols ?? []).map((c: any, __i: number) => (
                            <Fragment key={__i}>
                              {'\n                  '}
                              <span className="py-[7px] px-[11px] text-[10.5px] font-[650] text-[#71717A] whitespace-nowrap [border-right:1px_solid_#EDEDF0]">
                                <span>{c}</span>
                              </span>
                              {'\n                '}
                            </Fragment>
                          ))}
                          {'\n              '}
                        </div>
                        {'\n              '}
                        {(pageRows ?? []).map((r: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                '}
                            <div
                              onClick={r.act}
                              className="hv-udcbnc"
                              style={cssToObj(
                                `display:grid; grid-template-columns:${pageGrid}; border-bottom:1px solid #F1F1F3; cursor:pointer; background:#FFFFFF`,
                              )}
                            >
                              {'\n                  '}
                              {(r.cells ?? []).map((v: any, __i: number) => (
                                <Fragment key={__i}>
                                  {'\n                    '}
                                  <span className="py-[9px] px-[11px] text-[12px] text-[#3F3F46] overflow-hidden text-ellipsis whitespace-nowrap [border-right:1px_solid_#F6F6F8] tabular-nums">
                                    <span>{v}</span>
                                  </span>
                                  {'\n                  '}
                                </Fragment>
                              ))}
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </Fragment>
                        ))}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n\n          '}
                  {pageHasCards ? (
                    <>
                      {'\n            '}
                      <div className="mt-[16px] grid [grid-template-columns:repeat(2,_1fr)] gap-[8px]">
                        {'\n              '}
                        {(pageCards ?? []).map((c: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                '}
                            <div
                              onClick={c.act}
                              className="flex items-center gap-[11px] py-[12px] px-[13px] [border:1px_solid_#E5E5EA] rounded-[8px] cursor-pointer bg-[#FFFFFF] hv-x2hwvk"
                            >
                              {'\n                  '}
                              <span
                                style={cssToObj(
                                  `flex:none; width:26px; height:26px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:9.5px; font-weight:700; color:#FFFFFF; background:${c.bg}`,
                                )}
                              >
                                <span>{c.mark}</span>
                              </span>
                              {'\n                  '}
                              <span className="flex-1 [min-width:0]">
                                {'\n                    '}
                                <span className="block text-[12.5px] font-[650] text-[#18181B]">
                                  <span>{c.name}</span>
                                </span>
                                {'\n                    '}
                                <span className="block text-[11.5px] text-[#71717A] mt-[2px] overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span>{c.desc}</span>
                                </span>
                                {'\n                  '}
                              </span>
                              {'\n                  '}
                              <span style={cssToObj(c.stateStyle)}>
                                <span>{c.state}</span>
                              </span>
                              {'\n                '}
                            </div>
                            {'\n              '}
                          </Fragment>
                        ))}
                        {'\n            '}
                      </div>
                      {'\n          '}
                    </>
                  ) : null}
                  {'\n\n          '}
                  {pageEmpty ? (
                    <>
                      {'\n            '}
                      <div className="mt-[16px] [border:1px_solid_#E5E5EA] rounded-[8px] py-[44px] px-[24px] flex flex-col items-center gap-[9px] bg-[#FCFCFD]">
                        {'\n              '}
                        <div className="text-[13px] font-[650] text-[#3F3F46]">
                          <span>{emptyTitle}</span>
                        </div>
                        {'\n              '}
                        <div className="text-[11.5px] text-[#8E8E96] text-center [max-width:340px] leading-[1.55]">
                          <span>{emptyBody}</span>
                        </div>
                        {'\n              '}
                        <button
                          onClick={pageAction}
                          className="mt-[4px] h-[29px] py-[0] px-[12px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[11.5px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                        >
                          <span>{pageActionLabel}</span>
                        </button>
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
            {'\n    '}
          </main>
          {'\n  '}
        </div>
        {'\n\n  '}
        {drawerOpen ? (
          <>
            {'\n    '}
            <div
              onClick={closeDrawer}
              className="absolute [inset:0] bg-[rgba(24,24,27,.24)] z-[74] flex justify-end"
            >
              {'\n      '}
              <div className="w-[400px] h-full bg-[#FFFFFF] [border-left:1px_solid_#E5E5EA] flex flex-col shadow-[-16px_0_40px_rgba(24,24,27,.12)]">
                {'\n        '}
                <div className="flex-none flex items-center justify-between py-[12px] px-[16px] [border-bottom:1px_solid_#EFEFF2]">
                  {'\n          '}
                  <div className="text-[13.5px] font-[650]">{'Build an enrichment'}</div>
                  {'\n          '}
                  <button
                    onClick={closeDrawer}
                    className="w-[26px] h-[26px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[6px] cursor-pointer text-[#52525B] text-[14px] leading-[1] hv-u4v0t1"
                  >
                    {'×'}
                  </button>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="flex-none py-[13px] px-[16px] [border-bottom:1px_solid_#EFEFF2]">
                  {'\n          '}
                  <textarea
                    onChange={onEnrichPrompt}
                    value={enrichPrompt}
                    placeholder="What should this column do? e.g., Find whether the company is B2B or B2C"
                    className="w-full h-[64px] resize-none [border:1px_solid_#D9D9DF] rounded-[7px] py-[9px] px-[10px] text-[12px] [font-family:inherit] text-[#3F3F46] outline-none leading-[1.5]"
                  ></textarea>
                  {'\n          '}
                  <button
                    onClick={createEnrich}
                    className="w-full mt-[9px] h-[32px] [border:1px_solid_#6D28D9] bg-[#6D28D9] text-[#FFFFFF] rounded-[7px] text-[12.5px] font-[650] cursor-pointer [font-family:inherit] hv-jdi8ic"
                  >
                    {'Add column'}
                  </button>
                  {'\n          '}
                  <div className="text-[10.5px] text-[#8E8E96] mt-[8px]">
                    {'AI column · ~3 credits / cell · '}
                    <span>{creditsLeft}</span>
                    {' available'}
                  </div>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="flex-1 [min-height:0] overflow-auto pt-[4px] px-[16px] pb-[16px]">
                  {'\n          '}
                  {(enrichments ?? []).map((e: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n            '}
                      <div
                        onClick={e.add}
                        className="flex items-center gap-[11px] py-[10px] px-[2px] [border-bottom:1px_solid_#F4F4F6] cursor-pointer hv-udcbnc"
                      >
                        {'\n              '}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#71717A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-none"
                        >
                          <path d={e.path}></path>
                        </svg>
                        {'\n              '}
                        <span className="flex-1 [min-width:0]">
                          {'\n                '}
                          <span className="block text-[12.5px] font-[600] text-[#18181B] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{e.name}</span>
                          </span>
                          {'\n                '}
                          <span className="block text-[11px] text-[#8E8E96] mt-[2px] overflow-hidden text-ellipsis whitespace-nowrap">
                            <span>{e.desc}</span>
                          </span>
                          {'\n              '}
                        </span>
                        {'\n              '}
                        {e.hasSrc ? (
                          <>
                            {'\n                '}
                            <span style={cssToObj(e.srcStyle)}>
                              <span>{e.src}</span>
                            </span>
                            {'\n              '}
                          </>
                        ) : null}
                        {'\n              '}
                        <span className="flex-none text-[11px] text-[#71717A] font-[550] whitespace-nowrap">
                          <span>{e.cost}</span>
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
        {creditsOpen ? (
          <>
            {'\n    '}
            <div
              onClick={closeCredits}
              className="absolute [inset:0] bg-[rgba(24,24,27,.3)] z-[76] flex items-center justify-center"
            >
              {'\n      '}
              <div className="w-[404px] bg-[#FFFFFF] rounded-[12px] shadow-[0_24px_60px_rgba(24,24,27,.24)] overflow-hidden [animation:pop_.16s_ease-out]">
                {'\n        '}
                <div className="pt-[15px] px-[17px] pb-[12px] [border-bottom:1px_solid_#F1F1F3] flex items-center justify-between">
                  {'\n          '}
                  <span className="text-[13.5px] font-[650]">{'Credits & billing'}</span>
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
                <div className="py-[14px] px-[17px]">
                  {'\n          '}
                  <div className="flex items-baseline gap-[8px]">
                    {'\n            '}
                    <span className="text-[24px] font-[700] tabular-nums">
                      <span>{creditsLeft}</span>
                    </span>
                    {'\n            '}
                    <span className="text-[11.5px] text-[#8E8E96]">
                      {'credits available · '}
                      <span>{creditsUsed}</span>
                      {' used this cycle'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="h-[5px] rounded-[3px] bg-[#F1F1F3] overflow-hidden mt-[10px]">
                    {'\n            '}
                    <div
                      style={cssToObj(
                        `height:100%; border-radius:3px; background:#6D28D9; width:${usedPct}`,
                      )}
                    ></div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[13px] [border:1px_solid_#EDEDF0] rounded-[8px] overflow-hidden">
                    {'\n            '}
                    {(rates ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="flex items-center justify-between py-[8px] px-[11px] [border-bottom:1px_solid_#F4F4F6]">
                          {'\n                '}
                          <span className="text-[11.5px] text-[#52525B]">
                            <span>{r.label}</span>
                          </span>
                          {'\n                '}
                          <span className="text-[11.5px] font-[650] text-[#3F3F46] tabular-nums">
                            <span>{r.cost}</span>
                          </span>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex gap-[8px] mt-[13px]">
                    {'\n            '}
                    {(packs ?? []).map((p: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <button
                          onClick={p.buy}
                          className="flex-1 h-[56px] [border:1px_solid_#E4E4E8] bg-[#FFFFFF] rounded-[8px] cursor-pointer [font-family:inherit] flex flex-col items-center justify-center gap-[2px] hv-3xensl"
                        >
                          {'\n                '}
                          <span className="text-[12.5px] font-[700] text-[#18181B] tabular-nums">
                            <span>{p.amount}</span>
                          </span>
                          {'\n                '}
                          <span className="text-[10.5px] text-[#8E8E96]">
                            <span>{p.price}</span>
                          </span>
                          {'\n              '}
                        </button>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
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
            <div className="absolute bottom-[22px] left-[50%] [transform:translateX(-50%)] z-[90] py-[8px] px-[14px] rounded-[8px] bg-[#18181B] text-[#FFFFFF] text-[11.5px] font-[550] shadow-[0_12px_30px_rgba(24,24,27,.28)] [animation:pop_.14s_ease-out] whitespace-nowrap">
              <span>{toast}</span>
            </div>
            {'\n  '}
          </>
        ) : null}
      </div>
    </>
  )
}
