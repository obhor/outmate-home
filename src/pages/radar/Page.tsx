import { Fragment } from 'react'
import { useModel } from '../../lib/model'
import { cssToObj } from '../../lib/css'
import styles from '../../styles/pages/radar.css?raw'
import { RadarModel } from './model'

export function RadarPage() {
  const {
    chips,
    weights,
    ranges,
    bubbles,
    hover,
    feed,
    prompts,
    answer,
    selected,
    feedCount,
    query,
    showZoneLabels,
    showAiInsight,
    mix,
    onQueryChange,
    onQueryKey,
    closeDrawer,
  } = useModel(
    () => new RadarModel(),
    (m) => m.renderVals(),
  )

  return (
    <>
      <style>{styles}</style>
      <div
        data-page="radar"
        className="grid [grid-template-columns:216px_1fr] w-full [min-height:1024px] bg-[#FFFFFF] relative overflow-hidden"
      >
        {'\n\n  '}
        <aside className="[border-right:1px_solid_#E5E7EB] bg-[#FCFCFD] flex flex-col justify-between pt-[22px] px-[14px] pb-[18px]">
          {'\n    '}
          <div className="flex flex-col gap-[26px]">
            {'\n      '}
            <div className="flex items-center gap-[9px] py-[0] px-[8px]">
              {'\n        '}
              <div className="w-[22px] h-[22px] rounded-[7px] bg-[#6D28D9] flex items-center justify-center">
                {'\n          '}
                <div className="w-[7px] h-[7px] rounded-full bg-[#FFFFFF]"></div>
                {'\n        '}
              </div>
              {'\n        '}
              <span className="text-[14px] font-[600] tracking-[-0.01em]">{'Outmate'}</span>
              {'\n      '}
            </div>
            {'\n      '}
            <nav className="flex flex-col gap-[2px]">
              {'\n        '}
              <div className="flex items-center gap-[10px] py-[8px] px-[10px] rounded-[8px] bg-[#F5F3FF] text-[#5B21B6] text-[13.5px] font-[600]">
                {'\n          '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="8" cy="8" r="6.4"></circle>
                  <circle cx="8" cy="8" r="3.1"></circle>
                  <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none"></circle>
                </svg>
                {'\n          Radar\n        '}
              </div>
              {'\n        '}
              <div className="flex items-center gap-[10px] py-[8px] px-[10px] rounded-[8px] text-[#52525B] text-[13.5px] font-[500] hv-u45kwh">
                {'\n          '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M8 1.8l1.6 3.9 3.9 1.6-3.9 1.6L8 12.8 6.4 8.9 2.5 7.3l3.9-1.6z"></path>
                </svg>
                {'\n          Copilot\n        '}
              </div>
              {'\n      '}
            </nav>
            {'\n    '}
          </div>
          {'\n    '}
          <div className="flex flex-col gap-[2px]">
            {'\n      '}
            <div className="py-[7px] px-[10px] rounded-[8px] text-[#71717A] text-[13px]">
              {'Help'}
            </div>
            {'\n      '}
            <div className="py-[7px] px-[10px] rounded-[8px] text-[#71717A] text-[13px]">
              {'Settings'}
            </div>
            {'\n      '}
            <div className="flex items-center gap-[9px] py-[9px] px-[10px] mt-[6px] [border-top:1px_solid_#EFEFF1]">
              {'\n        '}
              <div className="w-[26px] h-[26px] rounded-full bg-[#E9D5FF] text-[#5B21B6] text-[11px] font-[600] flex items-center justify-center">
                {'GA'}
              </div>
              {'\n        '}
              <div className="flex flex-col">
                {'\n          '}
                <span className="text-[12.5px] font-[500]">{'Gaurav A.'}</span>
                {'\n          '}
                <span className="text-[11px] text-[#A1A1AA]">{'Head of GTM'}</span>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n  '}
        </aside>
        {'\n\n  '}
        <main className="[min-width:0] flex flex-col">
          {'\n\n    '}
          <header className="flex items-start justify-between pt-[24px] px-[28px] pb-[18px] [border-bottom:1px_solid_#E5E7EB]">
            {'\n      '}
            <div>
              {'\n        '}
              <h1 className="m-[0] text-[22px] font-[600] tracking-[-0.02em]">{'Revenue Radar'}</h1>
              {'\n        '}
              <p className="mt-[5px] mx-[0] mb-[0] text-[13.5px] text-[#71717A]">
                {'See what changed across your target accounts.'}
              </p>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="flex items-center gap-[10px]">
              {'\n        '}
              <div className="flex items-center gap-[8px] w-[268px] h-[34px] py-[0] px-[11px] [border:1px_solid_#E5E7EB] rounded-[9px] bg-[#FAFAFA]">
                {'\n          '}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="1.4"
                >
                  <path d="M8 2l1.5 3.6L13 7.1 9.5 8.6 8 12.2 6.5 8.6 3 7.1l3.5-1.5z"></path>
                </svg>
                {'\n          '}
                <span className="text-[12.5px] text-[#A1A1AA]">{'Ask Outmate…'}</span>
                {'\n          '}
                <span className="ml-[auto] [font-family:'IBM_Plex_Mono',monospace] text-[10.5px] text-[#A1A1AA] [border:1px_solid_#E5E7EB] rounded-[5px] py-[1px] px-[5px] bg-[#FFFFFF]">
                  {'⌘K'}
                </span>
                {'\n        '}
              </div>
              {'\n        '}
              <div className="relative w-[34px] h-[34px] [border:1px_solid_#E5E7EB] rounded-[9px] flex items-center justify-center">
                {'\n          '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#52525B"
                  strokeWidth="1.4"
                >
                  <path d="M4 6.5a4 4 0 018 0c0 3 1 4 1 4H3s1-1 1-4z"></path>
                  <path d="M6.6 13a1.6 1.6 0 002.8 0"></path>
                </svg>
                {'\n          '}
                <span className="absolute top-[6px] right-[7px] w-[6px] h-[6px] rounded-full bg-[#7C3AED] [border:1.5px_solid_#FFFFFF]"></span>
                {'\n        '}
              </div>
              {'\n        '}
              <div className="w-[34px] h-[34px] rounded-full bg-[#E9D5FF] text-[#5B21B6] text-[12px] font-[600] flex items-center justify-center">
                {'GA'}
              </div>
              {'\n      '}
            </div>
            {'\n    '}
          </header>
          {'\n\n    '}
          <div className="grid [grid-template-columns:repeat(5,_1fr)] gap-[10px] pt-[16px] px-[28px] pb-[0]">
            {'\n      '}
            <div className="[border:1px_solid_#E5E7EB] rounded-[10px] py-[11px] px-[13px] bg-[#FFFFFF]">
              {'\n        '}
              <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                {'Tracked accounts'}
              </div>
              {'\n        '}
              <div className="mt-[6px] [font-family:'IBM_Plex_Mono',monospace] text-[20px] font-[600] tracking-[-0.02em]">
                {'1,284'}
              </div>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="[border:1px_solid_#DDD6FE] rounded-[10px] py-[11px] px-[13px] bg-[#FBFAFF]">
              {'\n        '}
              <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#7C3AED] font-[600]">
                {'High intent'}
              </div>
              {'\n        '}
              <div className="mt-[6px] flex items-baseline gap-[7px]">
                {'\n          '}
                <span className="[font-family:'IBM_Plex_Mono',monospace] text-[20px] font-[600] text-[#5B21B6] tracking-[-0.02em]">
                  {'42'}
                </span>
                {'\n          '}
                <span className="text-[11.5px] font-[600] text-[#15803D]">{'↑ 18%'}</span>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="[border:1px_solid_#E5E7EB] rounded-[10px] py-[11px] px-[13px] bg-[#FFFFFF]">
              {'\n        '}
              <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                {'New signals'}
              </div>
              {'\n        '}
              <div className="mt-[6px] flex items-baseline gap-[6px]">
                {'\n          '}
                <span className="[font-family:'IBM_Plex_Mono',monospace] text-[20px] font-[600] tracking-[-0.02em]">
                  {'186'}
                </span>
                {'\n          '}
                <span className="text-[11.5px] text-[#A1A1AA]">{'today'}</span>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="[border:1px_solid_#E5E7EB] rounded-[10px] py-[11px] px-[13px] bg-[#FFFFFF]">
              {'\n        '}
              <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                {'Requires action'}
              </div>
              {'\n        '}
              <div className="mt-[6px] flex items-baseline gap-[7px]">
                {'\n          '}
                <span className="[font-family:'IBM_Plex_Mono',monospace] text-[20px] font-[600] tracking-[-0.02em]">
                  {'17'}
                </span>
                {'\n          '}
                <span className="text-[11px] text-[#B45309] bg-[#FEF3C7] rounded-[5px] py-[1px] px-[6px] font-[600]">
                  {'review'}
                </span>
                {'\n        '}
              </div>
              {'\n      '}
            </div>
            {'\n      '}
            <div className="[border:1px_solid_#E5E7EB] rounded-[10px] py-[11px] px-[13px] bg-[#FFFFFF]">
              {'\n        '}
              <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                {'Signals this week'}
              </div>
              {'\n        '}
              <div className="mt-[6px] [font-family:'IBM_Plex_Mono',monospace] text-[20px] font-[600] tracking-[-0.02em]">
                {'642'}
              </div>
              {'\n      '}
            </div>
            {'\n    '}
          </div>
          {'\n\n    '}
          <div className="grid [grid-template-columns:1fr_360px] gap-[16px] pt-[16px] px-[28px] pb-[28px] [align-items:start]">
            {'\n\n      '}
            <div className="flex flex-col gap-[16px] [min-width:0]">
              {'\n\n        '}
              <section className="[border:1px_solid_#E5E7EB] rounded-[12px] bg-[#FFFFFF] overflow-hidden">
                {'\n          '}
                <div className="flex items-start justify-between pt-[15px] px-[16px] pb-[12px]">
                  {'\n            '}
                  <div>
                    {'\n              '}
                    <div className="text-[14.5px] font-[600] tracking-[-0.01em]">{'GTM Radar'}</div>
                    {'\n              '}
                    <div className="mt-[3px] text-[12.5px] text-[#71717A]">
                      {'Accounts ranked by fit, intent and freshness.'}
                    </div>
                    {'\n            '}
                  </div>
                  {'\n            '}
                  <div className="flex gap-[6px]">
                    {'\n              '}
                    {(ranges ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n                '}
                        <button onClick={r.onClick} style={cssToObj(r.style)}>
                          <span>{r.label}</span>
                        </button>
                        {'\n              '}
                      </Fragment>
                    ))}
                    {'\n            '}
                  </div>
                  {'\n          '}
                </div>
                {'\n\n          '}
                <div className="flex flex-wrap gap-[6px] pt-[0] px-[16px] pb-[12px]">
                  {'\n            '}
                  {(chips ?? []).map((c: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n              '}
                      <button onClick={c.onClick} style={cssToObj(c.style)}>
                        <span>{c.label}</span>
                      </button>
                      {'\n            '}
                    </Fragment>
                  ))}
                  {'\n          '}
                </div>
                {'\n\n          '}
                <div className="flex items-center gap-[14px] pt-[0] px-[16px] pb-[12px] [border-bottom:1px_solid_#F1F1F3]">
                  {'\n            '}
                  <span className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                    {'Weight'}
                  </span>
                  {'\n            '}
                  {(weights ?? []).map((w: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n              '}
                      <button onClick={w.onClick} style={cssToObj(w.style)}>
                        <span>{w.label}</span>
                      </button>
                      {'\n            '}
                    </Fragment>
                  ))}
                  {'\n            '}
                  <div className="ml-[auto] flex items-center gap-[14px] text-[11px] text-[#A1A1AA]">
                    {'\n              '}
                    <span>{'Bubble size = signal strength'}</span>
                    {'\n              '}
                    <span>{'Opacity = freshness'}</span>
                    {'\n            '}
                  </div>
                  {'\n          '}
                </div>
                {'\n\n          '}
                <div className="relative pt-[18px] pr-[20px] pb-[30px] pl-[44px]">
                  {'\n            '}
                  <div className="relative h-[352px] [border-left:1px_solid_#E5E7EB] [border-bottom:1px_solid_#E5E7EB]">
                    {'\n              '}
                    <div className="absolute [inset:0] [background-image:linear-gradient(to_right,_#F4F4F5_1px,_transparent_1px),_linear-gradient(to_top,_#F4F4F5_1px,_transparent_1px)] [background-size:12.5%_25%]"></div>
                    {'\n              '}
                    <div className="absolute left-[55%] right-[0] top-[0] bottom-[45%] [background:linear-gradient(135deg,_rgba(124,58,237,0.09),_rgba(124,58,237,0.03))] [border-left:1px_dashed_#C4B5FD] [border-bottom:1px_dashed_#C4B5FD]"></div>
                    {'\n\n              '}
                    {showZoneLabels ? (
                      <>
                        {'\n                '}
                        <div className="absolute [inset:0] pointer-events-none">
                          {'\n                  '}
                          <span className="absolute left-[12px] bottom-[10px] text-[10.5px] tracking-[0.08em] uppercase text-[#D4D4D8] font-[600]">
                            {'Low priority'}
                          </span>
                          {'\n                  '}
                          <span className="absolute left-[12px] top-[10px] text-[10.5px] tracking-[0.08em] uppercase text-[#C7C7CC] font-[600]">
                            {'Watch'}
                          </span>
                          {'\n                  '}
                          <span className="absolute right-[14px] bottom-[10px] text-[10.5px] tracking-[0.08em] uppercase text-[#A78BFA] font-[600]">
                            {'High intent'}
                          </span>
                          {'\n                  '}
                          <span className="absolute right-[14px] top-[10px] flex items-center gap-[6px] text-[10.5px] tracking-[0.08em] uppercase text-[#6D28D9] font-[700]">
                            {'\n                    '}
                            <span className="w-[6px] h-[6px] rounded-full bg-[#7C3AED]"></span>
                            {'Act now\n                  '}
                          </span>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </>
                    ) : null}
                    {'\n\n              '}
                    {(bubbles ?? []).map((b: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n                '}
                        <div
                          onMouseEnter={b.onEnter}
                          onMouseLeave={b.onLeave}
                          onClick={b.onClick}
                          style={cssToObj(b.wrapStyle)}
                        >
                          {'\n                  '}
                          <div style={cssToObj(b.dotStyle)}></div>
                          {'\n                  '}
                          <span style={cssToObj(b.labelStyle)}>
                            <span>{b.name}</span>
                          </span>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </Fragment>
                    ))}
                    {'\n\n              '}
                    {hover ? (
                      <>
                        {'\n                '}
                        <div style={cssToObj(hover.tipStyle)}>
                          {'\n                  '}
                          <div className="flex items-center justify-between gap-[12px]">
                            {'\n                    '}
                            <span className="text-[12.5px] font-[600] tracking-[0.02em]">
                              <span>{hover.name}</span>
                            </span>
                            {'\n                    '}
                            <span className="text-[10px] font-[700] tracking-[0.06em] uppercase text-[#6D28D9] bg-[#F5F3FF] rounded-[5px] py-[2px] px-[6px]">
                              <span>{hover.zone}</span>
                            </span>
                            {'\n                  '}
                          </div>
                          {'\n                  '}
                          <div className="grid [grid-template-columns:repeat(4,1fr)] gap-[8px] mt-[9px]">
                            {'\n                    '}
                            <div>
                              <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                                {'ICP fit'}
                              </div>
                              <div className="[font-family:'IBM_Plex_Mono',monospace] text-[14px] font-[600]">
                                <span>{hover.fit}</span>
                              </div>
                            </div>
                            {'\n                    '}
                            <div>
                              <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                                {'Intent'}
                              </div>
                              <div className="[font-family:'IBM_Plex_Mono',monospace] text-[14px] font-[600]">
                                <span>{hover.intent}</span>
                              </div>
                            </div>
                            {'\n                    '}
                            <div>
                              <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                                {'Fresh'}
                              </div>
                              <div className="[font-family:'IBM_Plex_Mono',monospace] text-[14px] font-[600]">
                                <span>{hover.fresh}</span>
                              </div>
                            </div>
                            {'\n                    '}
                            <div>
                              <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                                {'Signals'}
                              </div>
                              <div className="[font-family:'IBM_Plex_Mono',monospace] text-[14px] font-[600]">
                                <span>{hover.signals}</span>
                              </div>
                            </div>
                            {'\n                  '}
                          </div>
                          {'\n                  '}
                          <div className="mt-[9px] pt-[8px] [border-top:1px_solid_#F1F1F3] text-[11.5px] text-[#52525B]">
                            {'Latest: '}
                            <span className="text-[#18181B] font-[500]">
                              <span>{hover.latest}</span>
                            </span>
                          </div>
                          {'\n                  '}
                          <div className="mt-[9px] text-center text-[11.5px] font-[600] text-[#6D28D9] bg-[#F5F3FF] rounded-[7px] p-[6px]">
                            {'View intelligence'}
                          </div>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </>
                    ) : null}
                    {'\n            '}
                  </div>
                  {'\n\n            '}
                  <div className="absolute left-[0] top-[0] bottom-[30px] flex items-center">
                    {'\n              '}
                    <span className="text-[10.5px] tracking-[0.08em] uppercase text-[#A1A1AA] font-[600] [transform:rotate(-90deg)] whitespace-nowrap">
                      {'ICP fit →'}
                    </span>
                    {'\n            '}
                  </div>
                  {'\n            '}
                  <div className="flex justify-between pt-[8px] pr-[0] pb-[0] pl-[0]">
                    {'\n              '}
                    <span className="[font-family:'IBM_Plex_Mono',monospace] text-[10.5px] text-[#A1A1AA]">
                      {'0'}
                    </span>
                    {'\n              '}
                    <span className="text-[10.5px] tracking-[0.08em] uppercase text-[#A1A1AA] font-[600]">
                      {'Intent →'}
                    </span>
                    {'\n              '}
                    <span className="[font-family:'IBM_Plex_Mono',monospace] text-[10.5px] text-[#A1A1AA]">
                      {'100'}
                    </span>
                    {'\n            '}
                  </div>
                  {'\n          '}
                </div>
                {'\n        '}
              </section>
              {'\n\n        '}
              <section className="[border:1px_solid_#E5E7EB] rounded-[12px] bg-[#FFFFFF]">
                {'\n          '}
                <div className="flex items-center justify-between py-[14px] px-[16px] [border-bottom:1px_solid_#F1F1F3]">
                  {'\n            '}
                  <div className="flex items-baseline gap-[9px]">
                    {'\n              '}
                    <span className="text-[14.5px] font-[600] tracking-[-0.01em]">
                      {"What's changing?"}
                    </span>
                    {'\n              '}
                    <span className="text-[12px] text-[#A1A1AA]">
                      <span>{feedCount}</span>
                      {' signals · live'}
                    </span>
                    {'\n            '}
                  </div>
                  {'\n            '}
                  <div className="flex items-center gap-[6px] text-[11.5px] text-[#71717A]">
                    {'\n              '}
                    <span className="w-[6px] h-[6px] rounded-full bg-[#22C55E]"></span>
                    {'Streaming\n            '}
                  </div>
                  {'\n          '}
                </div>
                {'\n\n          '}
                <div className="flex flex-col">
                  {'\n            '}
                  {(feed ?? []).map((s: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n              '}
                      <article style={cssToObj(s.cardStyle)}>
                        {'\n                '}
                        <div className="flex gap-[12px]">
                          {'\n                  '}
                          <div style={cssToObj(s.avatarStyle)}>
                            <span>{s.initials}</span>
                          </div>
                          {'\n                  '}
                          <div className="flex-1 [min-width:0]">
                            {'\n                    '}
                            <div className="flex items-center gap-[8px] flex-wrap">
                              {'\n                      '}
                              <span className="text-[13.5px] font-[600]">
                                <span>{s.company}</span>
                              </span>
                              {'\n                      '}
                              <span style={cssToObj(s.tagStyle)}>
                                <span>{s.tag}</span>
                              </span>
                              {'\n                      '}
                              <span className="text-[11.5px] text-[#A1A1AA]">
                                <span>{s.meta}</span>
                              </span>
                              {'\n                      '}
                              <span className="ml-[auto] [font-family:'IBM_Plex_Mono',monospace] text-[11px] text-[#A1A1AA]">
                                <span>{s.time}</span>
                              </span>
                              {'\n                    '}
                            </div>
                            {'\n                    '}
                            <div className="mt-[6px] text-[14px] font-[500] tracking-[-0.01em] text-[#18181B]">
                              <span>{s.headline}</span>
                            </div>
                            {'\n                    '}
                            {s.quote ? (
                              <>
                                {'\n                      '}
                                <div className="mt-[8px] py-[9px] px-[11px] [border-left:2px_solid_#E4E4E7] bg-[#FAFAFA] rounded-[0_8px_8px_0] text-[12.5px] text-[#3F3F46] leading-[1.5]">
                                  <span>{s.quote}</span>
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            {s.badges ? (
                              <>
                                {'\n                      '}
                                <div className="flex gap-[6px] mt-[8px] flex-wrap">
                                  {'\n                        '}
                                  {(s.badges ?? []).map((bd: any, __i: number) => (
                                    <Fragment key={__i}>
                                      {'\n                          '}
                                      <span style={cssToObj(bd.style)}>
                                        <span>{bd.label}</span>
                                      </span>
                                      {'\n                        '}
                                    </Fragment>
                                  ))}
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            {showAiInsight ? (
                              <>
                                {'\n                      '}
                                <div className="mt-[10px] [border:1px_solid_#EDE9FE] bg-[#FBFAFF] rounded-[9px] py-[10px] px-[11px]">
                                  {'\n                        '}
                                  <div className="flex items-center gap-[6px]">
                                    {'\n                          '}
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      stroke="#7C3AED"
                                      strokeWidth="1.5"
                                    >
                                      <path d="M8 2l1.5 3.6L13 7.1 9.5 8.6 8 12.2 6.5 8.6 3 7.1l3.5-1.5z"></path>
                                    </svg>
                                    {'\n                          '}
                                    <span className="text-[10px] tracking-[0.08em] uppercase text-[#6D28D9] font-[700]">
                                      {'AI insight'}
                                    </span>
                                    {'\n                        '}
                                  </div>
                                  {'\n                        '}
                                  <div className="mt-[6px] text-[12.5px] leading-[1.55] text-[#3F3F46]">
                                    <span>{s.insight}</span>
                                  </div>
                                  {'\n                        '}
                                  <div className="mt-[8px] text-[12px] text-[#52525B]">
                                    <span className="text-[#A1A1AA]">{'Recommends:'}</span>{' '}
                                    <span>{s.recommend}</span>
                                  </div>
                                  {'\n                      '}
                                </div>
                                {'\n                    '}
                              </>
                            ) : null}
                            {'\n                    '}
                            <div className="flex items-center gap-[8px] mt-[11px]">
                              {'\n                      '}
                              <button
                                onClick={s.onOpen}
                                className="h-[29px] py-[0] px-[12px] [border:1px_solid_#E5E7EB] rounded-[8px] bg-[#FFFFFF] [font-family:inherit] text-[12px] font-[500] text-[#3F3F46] cursor-pointer hv-udcbnb"
                              >
                                {'View account'}
                              </button>
                              {'\n                      '}
                              <button className="h-[29px] py-[0] px-[12px] [border:1px_solid_#6D28D9] rounded-[8px] bg-[#6D28D9] [font-family:inherit] text-[12px] font-[600] text-[#FFFFFF] cursor-pointer hv-jdi8ic">
                                {'Create action'}
                              </button>
                              {'\n                      '}
                              <span className="ml-[auto] flex items-center gap-[6px] text-[11px] text-[#A1A1AA]">
                                {'Impact '}
                                <span style={cssToObj(s.impactStyle)}>
                                  <span>{s.impact}</span>
                                </span>
                              </span>
                              {'\n                    '}
                            </div>
                            {'\n                  '}
                          </div>
                          {'\n                '}
                        </div>
                        {'\n              '}
                      </article>
                      {'\n            '}
                    </Fragment>
                  ))}
                  {'\n          '}
                </div>
                {'\n        '}
              </section>
              {'\n      '}
            </div>
            {'\n\n      '}
            <aside className="sticky top-[16px] flex flex-col gap-[12px]">
              {'\n        '}
              <section className="[border:1px_solid_#DDD6FE] rounded-[12px] bg-[#FBFAFF] overflow-hidden">
                {'\n          '}
                <div className="pt-[13px] px-[14px] pb-[0] flex items-center gap-[7px]">
                  {'\n            '}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  >
                    <path d="M8 2l1.5 3.6L13 7.1 9.5 8.6 8 12.2 6.5 8.6 3 7.1l3.5-1.5z"></path>
                  </svg>
                  {'\n            '}
                  <span className="text-[13.5px] font-[600] tracking-[-0.01em]">
                    {'Ask Outmate'}
                  </span>
                  {'\n          '}
                </div>
                {'\n          '}
                <div className="pt-[10px] px-[14px] pb-[12px]">
                  {'\n            '}
                  <input
                    value={query}
                    onChange={onQueryChange}
                    onKeyDown={onQueryKey}
                    placeholder="Ask Outmate about your revenue..."
                    className="w-full h-[36px] py-[0] px-[11px] [border:1px_solid_#DDD6FE] rounded-[9px] bg-[#FFFFFF] [font-family:inherit] text-[12.5px] text-[#18181B] outline-none"
                  />
                  {'\n            '}
                  <div className="flex flex-col gap-[5px] mt-[10px]">
                    {'\n              '}
                    {(prompts ?? []).map((p: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n                '}
                        <button
                          onClick={p.onClick}
                          className="text-left py-[7px] px-[10px] [border:1px_solid_#EDE9FE] rounded-[8px] bg-[#FFFFFF] [font-family:inherit] text-[12px] text-[#3F3F46] cursor-pointer hv-1aor8ml"
                        >
                          <span>{p.label}</span>
                        </button>
                        {'\n              '}
                      </Fragment>
                    ))}
                    {'\n            '}
                  </div>
                  {'\n          '}
                </div>
                {'\n\n          '}
                {answer ? (
                  <>
                    {'\n            '}
                    <div className="[border-top:1px_solid_#EDE9FE] bg-[#FFFFFF] pt-[13px] px-[14px] pb-[14px]">
                      {'\n              '}
                      <div className="text-[11.5px] text-[#A1A1AA]">{'You asked'}</div>
                      {'\n              '}
                      <div className="mt-[3px] text-[12.5px] font-[500] text-[#18181B]">
                        <span>{answer.question}</span>
                      </div>
                      {'\n              '}
                      <div className="mt-[11px] text-[13px] font-[600] text-[#5B21B6]">
                        <span>{answer.summary}</span>
                      </div>
                      {'\n              '}
                      <div className="flex flex-col mt-[9px] [border:1px_solid_#F1F1F3] rounded-[10px] overflow-hidden">
                        {'\n                '}
                        {(answer.rows ?? []).map((r: any, __i: number) => (
                          <Fragment key={__i}>
                            {'\n                  '}
                            <div
                              onClick={r.onClick}
                              className="flex gap-[10px] py-[9px] px-[11px] [border-bottom:1px_solid_#F4F4F5] cursor-pointer hv-udcbnb"
                            >
                              {'\n                    '}
                              <span className="[font-family:'IBM_Plex_Mono',monospace] text-[11px] text-[#C4B5FD] font-[600] pt-[2px]">
                                <span>{r.rank}</span>
                              </span>
                              {'\n                    '}
                              <div className="flex-1 [min-width:0]">
                                {'\n                      '}
                                <div className="flex items-baseline justify-between gap-[8px]">
                                  {'\n                        '}
                                  <span className="text-[12.5px] font-[600]">
                                    <span>{r.name}</span>
                                  </span>
                                  {'\n                        '}
                                  <span className="[font-family:'IBM_Plex_Mono',monospace] text-[11.5px] font-[600] text-[#6D28D9]">
                                    <span>{r.score}</span>
                                  </span>
                                  {'\n                      '}
                                </div>
                                {'\n                      '}
                                <div className="mt-[2px] text-[11.5px] text-[#71717A] leading-[1.4]">
                                  <span>{r.why}</span>
                                </div>
                                {'\n                    '}
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </Fragment>
                        ))}
                        {'\n              '}
                      </div>
                      {'\n              '}
                      <div className="flex gap-[7px] mt-[11px]">
                        {'\n                '}
                        <button className="flex-1 h-[31px] [border:1px_solid_#6D28D9] rounded-[8px] bg-[#6D28D9] text-[#FFFFFF] [font-family:inherit] text-[12px] font-[600] cursor-pointer hv-jdi8ic">
                          {'View priority accounts'}
                        </button>
                        {'\n                '}
                        <button className="flex-1 h-[31px] [border:1px_solid_#E5E7EB] rounded-[8px] bg-[#FFFFFF] text-[#3F3F46] [font-family:inherit] text-[12px] font-[500] cursor-pointer hv-udcbnb">
                          {'Create outreach'}
                        </button>
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </>
                ) : null}
                {'\n        '}
              </section>
              {'\n\n        '}
              <section className="[border:1px_solid_#E5E7EB] rounded-[12px] bg-[#FFFFFF] py-[13px] px-[14px]">
                {'\n          '}
                <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                  {'Signal mix · 7 days'}
                </div>
                {'\n          '}
                <div className="flex flex-col gap-[8px] mt-[11px]">
                  {'\n            '}
                  {(mix ?? []).map((m: any, __i: number) => (
                    <Fragment key={__i}>
                      {'\n              '}
                      <div className="flex items-center gap-[9px]">
                        {'\n                '}
                        <span className="w-[96px] text-[12px] text-[#52525B]">
                          <span>{m.label}</span>
                        </span>
                        {'\n                '}
                        <div className="flex-1 h-[5px] rounded-[4px] bg-[#F4F4F5] overflow-hidden">
                          {'\n                  '}
                          <div style={cssToObj(m.barStyle)}></div>
                          {'\n                '}
                        </div>
                        {'\n                '}
                        <span className="w-[30px] text-right [font-family:'IBM_Plex_Mono',monospace] text-[11px] text-[#71717A]">
                          <span>{m.value}</span>
                        </span>
                        {'\n              '}
                      </div>
                      {'\n            '}
                    </Fragment>
                  ))}
                  {'\n          '}
                </div>
                {'\n        '}
              </section>
              {'\n      '}
            </aside>
            {'\n    '}
          </div>
          {'\n  '}
        </main>
        {'\n\n  '}
        {selected ? (
          <>
            {'\n    '}
            <div
              onClick={closeDrawer}
              className="absolute [inset:0] bg-[rgba(24,24,27,0.18)]"
            ></div>
            {'\n  '}
          </>
        ) : null}
        {'\n  '}
        {selected ? (
          <>
            {'\n    '}
            <div className="absolute top-[0] right-[0] bottom-[0] w-[468px] bg-[#FFFFFF] [border-left:1px_solid_#E5E7EB] shadow-[-14px_0_40px_rgba(24,24,27,0.10)] flex flex-col">
              {'\n\n      '}
              <div className="pt-[18px] px-[20px] pb-[14px] [border-bottom:1px_solid_#F1F1F3]">
                {'\n        '}
                <div className="flex items-start gap-[12px]">
                  {'\n          '}
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-[#F5F3FF] text-[#6D28D9] text-[14px] font-[700] flex items-center justify-center">
                    <span>{selected.initials}</span>
                  </div>
                  {'\n          '}
                  <div className="flex-1">
                    {'\n            '}
                    <div className="flex items-center gap-[8px]">
                      {'\n              '}
                      <span className="text-[17px] font-[600] tracking-[-0.01em]">
                        <span>{selected.name}</span>
                      </span>
                      {'\n              '}
                      <span className="text-[10px] font-[700] tracking-[0.06em] uppercase text-[#6D28D9] bg-[#F5F3FF] rounded-[5px] py-[2px] px-[7px]">
                        <span>{selected.zone}</span>
                      </span>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="mt-[3px] text-[12.5px] text-[#71717A]">
                      {'B2B SaaS · 201–500 employees · San Francisco'}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <button
                    onClick={closeDrawer}
                    className="w-[28px] h-[28px] [border:1px_solid_#E5E7EB] rounded-[8px] bg-[#FFFFFF] text-[#71717A] [font-family:inherit] text-[14px] leading-[1] cursor-pointer hv-udcbnb"
                  >
                    {'×'}
                  </button>
                  {'\n        '}
                </div>
                {'\n        '}
                <div className="grid [grid-template-columns:repeat(4,1fr)] gap-[8px] mt-[14px]">
                  {'\n          '}
                  <div className="[border:1px_solid_#E5E7EB] rounded-[9px] py-[8px] px-[10px]">
                    {'\n            '}
                    <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                      {'ICP fit'}
                    </div>
                    {'\n            '}
                    <div className="[font-family:'IBM_Plex_Mono',monospace] text-[17px] font-[600]">
                      <span>{selected.fit}</span>
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="[border:1px_solid_#E5E7EB] rounded-[9px] py-[8px] px-[10px]">
                    {'\n            '}
                    <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                      {'Intent'}
                    </div>
                    {'\n            '}
                    <div className="[font-family:'IBM_Plex_Mono',monospace] text-[17px] font-[600]">
                      <span>{selected.intent}</span>
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="[border:1px_solid_#E5E7EB] rounded-[9px] py-[8px] px-[10px]">
                    {'\n            '}
                    <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                      {'Freshness'}
                    </div>
                    {'\n            '}
                    <div className="[font-family:'IBM_Plex_Mono',monospace] text-[17px] font-[600]">
                      <span>{selected.fresh}</span>
                    </div>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="[border:1px_solid_#DDD6FE] bg-[#FBFAFF] rounded-[9px] py-[8px] px-[10px]">
                    {'\n            '}
                    <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#7C3AED] font-[600]">
                      {'Signal'}
                    </div>
                    {'\n            '}
                    <div className="[font-family:'IBM_Plex_Mono',monospace] text-[17px] font-[600] text-[#5B21B6]">
                      <span>{selected.score}</span>
                    </div>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n      '}
              </div>
              {'\n\n      '}
              <div className="flex-1 overflow-y-auto pt-[16px] px-[20px] pb-[20px] flex flex-col gap-[18px]">
                {'\n\n        '}
                <div className="[border:1px_solid_#DDD6FE] bg-[#FBFAFF] rounded-[11px] py-[13px] px-[14px]">
                  {'\n          '}
                  <div className="flex items-center gap-[7px]">
                    {'\n            '}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#7C3AED"
                      strokeWidth="1.5"
                    >
                      <path d="M8 2l1.5 3.6L13 7.1 9.5 8.6 8 12.2 6.5 8.6 3 7.1l3.5-1.5z"></path>
                    </svg>
                    {'\n            '}
                    <span className="text-[10.5px] tracking-[0.08em] uppercase text-[#6D28D9] font-[700]">
                      {'Why now?'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <p className="mt-[8px] mx-[0] mb-[0] text-[13px] leading-[1.6] text-[#3F3F46]">
                    <span>{selected.whyNow}</span>
                  </p>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div>
                  {'\n          '}
                  <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                    {'Recent signals'}
                  </div>
                  {'\n          '}
                  <div className="mt-[11px] flex flex-col">
                    {'\n            '}
                    {(selected.timeline ?? []).map((t: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="grid [grid-template-columns:74px_1fr] gap-[12px] pb-[12px]">
                          {'\n                '}
                          <span className="[font-family:'IBM_Plex_Mono',monospace] text-[11px] text-[#A1A1AA] pt-[1px]">
                            <span>{t.when}</span>
                          </span>
                          {'\n                '}
                          <div className="[border-left:1px_solid_#E5E7EB] pt-[0] pr-[0] pb-[0] pl-[13px] relative">
                            {'\n                  '}
                            <span style={cssToObj(t.dotStyle)}></span>
                            {'\n                  '}
                            <div className="text-[13px] font-[500]">
                              <span>{t.title}</span>
                            </div>
                            {'\n                  '}
                            <div className="mt-[2px] text-[11.5px] text-[#A1A1AA]">
                              <span>{t.source}</span>
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
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div>
                  {'\n          '}
                  <div className="flex items-center justify-between">
                    {'\n            '}
                    <span className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                      {'People'}
                    </span>
                    {'\n            '}
                    <span className="text-[11.5px] text-[#A1A1AA]">{'3 of 14 relevant'}</span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] flex flex-col gap-[8px]">
                    {'\n            '}
                    {(selected.people ?? []).map((p: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="[border:1px_solid_#E5E7EB] rounded-[10px] py-[10px] px-[11px]">
                          {'\n                '}
                          <div className="flex items-center gap-[10px]">
                            {'\n                  '}
                            <div className="w-[30px] h-[30px] rounded-full bg-[#F4F4F5] text-[#52525B] text-[11px] font-[600] flex items-center justify-center">
                              <span>{p.initials}</span>
                            </div>
                            {'\n                  '}
                            <div className="flex-1 [min-width:0]">
                              {'\n                    '}
                              <div className="text-[13px] font-[600]">
                                <span>{p.name}</span>
                              </div>
                              {'\n                    '}
                              <div className="text-[11.5px] text-[#71717A]">
                                <span>{p.role}</span>
                                {' · '}
                                <span>{p.seniority}</span>
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                  '}
                            <div className="text-right">
                              {'\n                    '}
                              <div className="text-[9.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                                {'Intent'}
                              </div>
                              {'\n                    '}
                              <div className="[font-family:'IBM_Plex_Mono',monospace] text-[13px] font-[600] text-[#6D28D9]">
                                <span>{p.intent}</span>
                              </div>
                              {'\n                  '}
                            </div>
                            {'\n                '}
                          </div>
                          {'\n                '}
                          <div className="mt-[8px] text-[11.5px] text-[#52525B]">
                            <span>{p.activity}</span>
                          </div>
                          {'\n                '}
                          <div className="flex gap-[6px] mt-[9px]">
                            {'\n                  '}
                            <button className="h-[26px] py-[0] px-[10px] [border:1px_solid_#E5E7EB] rounded-[7px] bg-[#FFFFFF] [font-family:inherit] text-[11.5px] text-[#3F3F46] cursor-pointer hv-udcbnb">
                              {'Research'}
                            </button>
                            {'\n                  '}
                            <button className="h-[26px] py-[0] px-[10px] [border:1px_solid_#E5E7EB] rounded-[7px] bg-[#FFFFFF] [font-family:inherit] text-[11.5px] text-[#3F3F46] cursor-pointer hv-udcbnb">
                              {'Find email'}
                            </button>
                            {'\n                  '}
                            <button className="h-[26px] py-[0] px-[10px] [border:1px_solid_#E5E7EB] rounded-[7px] bg-[#FFFFFF] [font-family:inherit] text-[11.5px] text-[#3F3F46] cursor-pointer hv-udcbnb">
                              {'Add note'}
                            </button>
                            {'\n                  '}
                            <span className="ml-[auto] text-[11.5px] text-[#A1A1AA]">
                              {'LinkedIn · Email ✓'}
                            </span>
                            {'\n                '}
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div>
                  {'\n          '}
                  <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                    {'Tech stack'}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] grid [grid-template-columns:1fr_1fr] gap-[8px]">
                    {'\n            '}
                    {(selected.stack ?? []).map((t: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="[border:1px_solid_#E5E7EB] rounded-[9px] py-[9px] px-[11px]">
                          {'\n                '}
                          <div className="text-[10px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                            <span>{t.category}</span>
                          </div>
                          {'\n                '}
                          <div className="mt-[3px] text-[13px] font-[500]">
                            <span>{t.tool}</span>
                          </div>
                          {'\n              '}
                        </div>
                        {'\n            '}
                      </Fragment>
                    ))}
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex gap-[7px] mt-[9px]">
                    {'\n            '}
                    <span className="text-[11.5px] font-[600] text-[#15803D] bg-[#F0FDF4] [border:1px_solid_#BBF7D0] rounded-[6px] py-[3px] px-[8px]">
                      {'+ Outreach'}
                    </span>
                    {'\n            '}
                    <span className="text-[11.5px] font-[600] text-[#B91C1C] bg-[#FEF2F2] [border:1px_solid_#FECACA] rounded-[6px] py-[3px] px-[8px]">
                      {'− Salesforce'}
                    </span>
                    {'\n            '}
                    <span className="text-[11.5px] text-[#A1A1AA] py-[3px] px-[0]">
                      {'detected 8 days ago'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div>
                  {'\n          '}
                  <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                    {'Social'}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] [border:1px_solid_#E5E7EB] rounded-[10px] py-[11px] px-[12px]">
                    {'\n            '}
                    <div className="flex items-center gap-[9px]">
                      {'\n              '}
                      <div className="w-[28px] h-[28px] rounded-full bg-[#F4F4F5] text-[#52525B] text-[11px] font-[600] flex items-center justify-center">
                        {'SC'}
                      </div>
                      {'\n              '}
                      <div className="flex-1">
                        {'\n                '}
                        <div className="text-[12.5px] font-[600]">{'Sarah Chen'}</div>
                        {'\n                '}
                        <div className="text-[11.5px] text-[#71717A]">
                          {'VP Sales · LinkedIn · 3h ago'}
                        </div>
                        {'\n              '}
                      </div>
                      {'\n              '}
                      <span className="text-[11px] text-[#A1A1AA]">
                        {'42 reactions · 8 comments'}
                      </span>
                      {'\n            '}
                    </div>
                    {'\n            '}
                    <div className="mt-[9px] py-[9px] px-[11px] [border-left:2px_solid_#E4E4E7] bg-[#FAFAFA] rounded-[0_8px_8px_0] text-[12.5px] text-[#3F3F46] leading-[1.5]">
                      {'"We need to rethink how our GTM team operates as we scale."'}
                    </div>
                    {'\n            '}
                    <div className="mt-[9px] text-[12px] text-[#52525B]">
                      <span className="text-[#6D28D9] font-[600]">{'AI signal:'}</span>
                      {' Strong pain / change signal from the economic buyer.'}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div>
                  {'\n          '}
                  <div className="text-[10.5px] tracking-[0.06em] uppercase text-[#A1A1AA] font-[600]">
                    {'Notes'}
                  </div>
                  {'\n          '}
                  <div className="mt-[10px] [border:1px_solid_#E5E7EB] rounded-[10px] py-[10px] px-[11px]">
                    {'\n            '}
                    <input
                      placeholder="Add note…"
                      className="w-full [border:none] outline-none [font-family:inherit] text-[12.5px] text-[#18181B] bg-transparent"
                    />
                    {'\n            '}
                    <div className="flex items-center gap-[7px] mt-[9px] pt-[9px] [border-top:1px_solid_#F4F4F5]">
                      {'\n              '}
                      <span className="text-[11.5px] text-[#71717A]">{'Pin'}</span>
                      {'\n              '}
                      <span className="text-[11.5px] text-[#71717A]">{'Tag'}</span>
                      {'\n              '}
                      <span className="text-[11.5px] text-[#71717A]">{'Convert to task'}</span>
                      {'\n              '}
                      <span className="ml-[auto] text-[11px] text-[#A1A1AA]">{'GA · today'}</span>
                      {'\n            '}
                    </div>
                    {'\n          '}
                  </div>
                  {'\n        '}
                </div>
                {'\n\n        '}
                <div className="[border:1px_solid_#DDD6FE] rounded-[11px] overflow-hidden">
                  {'\n          '}
                  <div className="flex items-center gap-[7px] py-[11px] px-[13px] bg-[#F5F3FF] [border-bottom:1px_solid_#EDE9FE]">
                    {'\n            '}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#6D28D9"
                      strokeWidth="1.5"
                    >
                      <path d="M8 2l1.5 3.6L13 7.1 9.5 8.6 8 12.2 6.5 8.6 3 7.1l3.5-1.5z"></path>
                    </svg>
                    {'\n            '}
                    <span className="text-[10.5px] tracking-[0.08em] uppercase text-[#5B21B6] font-[700]">
                      {'Outmate recommends'}
                    </span>
                    {'\n          '}
                  </div>
                  {'\n          '}
                  <div className="flex flex-col">
                    {'\n            '}
                    {(selected.recs ?? []).map((r: any, __i: number) => (
                      <Fragment key={__i}>
                        {'\n              '}
                        <div className="py-[12px] px-[13px] [border-bottom:1px_solid_#F4F4F5] flex gap-[11px]">
                          {'\n                '}
                          <span className="[font-family:'IBM_Plex_Mono',monospace] text-[11px] text-[#C4B5FD] font-[600] pt-[2px]">
                            <span>{r.rank}</span>
                          </span>
                          {'\n                '}
                          <div className="flex-1">
                            {'\n                  '}
                            <div className="text-[13px] font-[600]">
                              <span>{r.title}</span>
                            </div>
                            {'\n                  '}
                            <div className="mt-[3px] text-[11.5px] text-[#71717A] leading-[1.45]">
                              <span>{r.reason}</span>
                            </div>
                            {'\n                  '}
                            <div className="flex gap-[6px] mt-[9px]">
                              {'\n                    '}
                              <button className="h-[27px] py-[0] px-[12px] [border:1px_solid_#6D28D9] rounded-[7px] bg-[#6D28D9] text-[#FFFFFF] [font-family:inherit] text-[11.5px] font-[600] cursor-pointer hv-jdi8ic">
                                {'Do it'}
                              </button>
                              {'\n                    '}
                              <button className="h-[27px] py-[0] px-[11px] [border:1px_solid_#E5E7EB] rounded-[7px] bg-[#FFFFFF] text-[#3F3F46] [font-family:inherit] text-[11.5px] cursor-pointer hv-udcbnb">
                                {'Review'}
                              </button>
                              {'\n                    '}
                              <button className="h-[27px] py-[0] px-[11px] [border:none] bg-transparent text-[#A1A1AA] [font-family:inherit] text-[11.5px] cursor-pointer hv-1kpeumh">
                                {'Dismiss'}
                              </button>
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
                  {'\n        '}
                </div>
                {'\n      '}
              </div>
              {'\n    '}
            </div>
            {'\n  '}
          </>
        ) : null}
      </div>
    </>
  )
}
