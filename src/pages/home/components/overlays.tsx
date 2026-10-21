import { Fragment } from 'react'
import { cssToObj } from '../../../lib/css'
import type { HomeValues } from '../types'

export function Toast({ m }: { m: HomeValues }) {
  const { toast } = m
  return (
    <>
                {'\n    '}
                <div className="absolute bottom-[22px] left-[50%] [transform:translateX(-50%)] z-[90] py-[8px] px-[14px] rounded-[8px] bg-[#18181B] text-[#FFFFFF] text-[11.5px] font-[550] shadow-[0_12px_30px_rgba(24,24,27,.28)] [animation:pop_.14s_ease-out] whitespace-nowrap">
                  <span>{toast}</span>
                </div>
                {'\n  '}
              </>
  )
}

export function CreditsModal({ m }: { m: HomeValues }) {
  const { closeCredits, creditsLeft, creditsUsed, packs, rates, usedPct } = m
  return (
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
  )
}

export function EnrichmentDrawer({ m }: { m: HomeValues }) {
  const { closeDrawer, createEnrich, creditsLeft, enrichPrompt, enrichments, onEnrichPrompt } = m
  return (
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
  )
}
