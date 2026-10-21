import { Fragment } from 'react'
import { cssToObj } from '../../../../lib/css'
import type { WorkspaceValues } from '../../types'

export function LeadersSheet({ m }: { m: WorkspaceValues }) {
  const { leaderCols, leaders } = m
  return (
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
  )
}
