import { Fragment } from 'react'
import { cssToObj } from '../../../../lib/css'
import type { HomeValues } from '../../types'

export function ResearchView({ m }: { m: HomeValues }) {
  const { newResearch, onQ, q, researchChips, researchCols, researchGrid, researchRows } = m
  return (
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
  )
}
