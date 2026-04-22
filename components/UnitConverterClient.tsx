"use client";
import { useState } from "react";

const tempConvert = (v: number, from: string, to: string): number => {
  let c = from === "°C" ? v : from === "°F" ? (v - 32) * 5 / 9 : v - 273.15;
  return to === "°C" ? c : to === "°F" ? c * 9 / 5 + 32 : c + 273.15;
};

type Cat = { units: string[]; convert: (v: number, f: string, t: string) => number };
const CATS: Record<string, Cat> = {
  "길이": { units: ["m","km","cm","mm","inch","ft","yard","mile"], convert: (v,f,t) => { const m: Record<string,number>={m:1,km:1000,cm:.01,mm:.001,inch:.0254,ft:.3048,yard:.9144,mile:1609.344}; return v*m[f]/m[t]; } },
  "무게": { units: ["kg","g","mg","lb","oz","t"],     convert: (v,f,t) => { const m: Record<string,number>={kg:1,g:.001,mg:1e-6,lb:.453592,oz:.0283495,t:1000}; return v*m[f]/m[t]; } },
  "온도": { units: ["°C","°F","K"],                   convert: tempConvert },
  "넓이": { units: ["m²","km²","ha","acre","ft²"],    convert: (v,f,t) => { const m: Record<string,number>={"m²":1,"km²":1e6,ha:10000,acre:4046.86,"ft²":.092903}; return v*m[f]/m[t]; } },
  "부피": { units: ["L","mL","m³","gal","fl oz"],     convert: (v,f,t) => { const m: Record<string,number>={L:1,mL:.001,"m³":1000,gal:3.78541,"fl oz":.0295735}; return v*m[f]/m[t]; } },
  "속도": { units: ["m/s","km/h","mph","knot"],       convert: (v,f,t) => { const m: Record<string,number>={"m/s":1,"km/h":1/3.6,mph:.44704,knot:.514444}; return v*m[f]/m[t]; } },
};

export default function UnitConverterClient() {
  const [cat, setCat] = useState("길이");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("km");
  const [val, setVal] = useState("1");

  const changeCat = (c: string) => { setCat(c); setFrom(CATS[c].units[0]); setTo(CATS[c].units[1]); };

  const result = (() => {
    const v = parseFloat(val);
    if (isNaN(v)) return "—";
    const r = CATS[cat].convert(v, from, to);
    if (r !== 0 && Math.abs(r) < 0.0001) return r.toExponential(4);
    const s = +r.toFixed(8) + "";
    return s;
  })();

  return (
    <div className="max-w-lg mx-auto pt-10">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📐</div>
        <h1 className="text-3xl font-bold tracking-tight">단위 변환기</h1>
        <p className="text-gray-400 mt-1 text-sm">Unit Converter</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {Object.keys(CATS).map(c => (
          <button key={c} onClick={() => changeCat(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 space-y-5">
        <div>
          <label className="text-xs text-gray-400 mb-1.5 block">변환할 값</label>
          <input type="number" value={val} onChange={e => setVal(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-xl font-mono focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="0" />
        </div>

        <div className="grid grid-cols-[1fr,40px,1fr] items-end gap-3">
          <div>
            <label className="text-xs text-gray-400 mb-1.5 block">FROM</label>
            <select value={from} onChange={e => setFrom(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-3 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
              {CATS[cat].units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <button onClick={() => { setFrom(to); setTo(from); }}
            className="mb-0.5 bg-gray-700 hover:bg-gray-600 rounded-full w-9 h-9 flex items-center justify-center text-base transition-colors">
            ⇄
          </button>
          <div>
            <label className="text-xs text-gray-400 mb-1.5 block">TO</label>
            <select value={to} onChange={e => setTo(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-3 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
              {CATS[cat].units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-5 text-center">
          <p className="text-xs text-gray-500 mb-1">{val || "0"} {from} =</p>
          <p className="text-4xl font-bold text-emerald-400 font-mono">{result}</p>
          <p className="text-gray-400 mt-1">{to}</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-600 mt-10">
        <a href="https://moneystom7.com" className="hover:text-gray-400 transition-colors">← MoneyStom7 홈으로</a>
      </p>
    </div>
  );
}
