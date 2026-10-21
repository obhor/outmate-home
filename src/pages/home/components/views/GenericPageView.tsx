import { Fragment } from 'react'
import { cssToObj } from '../../../../lib/css'
import type { HomeValues } from '../../types'

export function GenericPageView({ m }: { m: HomeValues }) {
  const { emptyBody, emptyTitle, pageAction, pageActionLabel, pageBlurb, pageCards, pageCols, pageEmpty, pageGrid, pageHasCards, pageHasTable, pageRows, pageTitle } = m
  return (
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
  )
}
