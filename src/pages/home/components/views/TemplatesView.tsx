import { Fragment } from 'react'
import { cssToObj } from '../../../../lib/css'
import type { HomeValues } from '../../types'

export function TemplatesView({ m }: { m: HomeValues }) {
  const { catChips, newTemplate, onQ, q, workflowRows } = m
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
  )
}
