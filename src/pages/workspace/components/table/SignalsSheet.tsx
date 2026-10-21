import { Fragment } from 'react'
import { cssToObj } from '../../../../lib/css'
import type { WorkspaceValues } from '../../types'

export function SignalsSheet({ m }: { m: WorkspaceValues }) {
  const { signalCols, signalRows } = m
  return (
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
  )
}
