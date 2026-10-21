import { Fragment } from 'react'
import { cssToObj } from '../../../../lib/css'
import type { HomeValues } from '../../types'

export function HomeView({ m }: { m: HomeValues }) {
  const { agent, agentOpen, agents, allTemplates, attach, buildEnrichment, connectors, draft, estimateLabel, goProjects, morePrompts, onDraft, prompts, research, send, sheets, toggleAgent, toggleTools, tools, toolsOpen, voice, voiceBg, voiceBorder, voiceFg, workflows } = m
  return (
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
  )
}
