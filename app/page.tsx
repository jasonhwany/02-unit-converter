import UnitConverterClient from "@/components/UnitConverterClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "단위 변환기 (Unit Converter)",
  url: "https://unit.moneystom7.com",
  description: "길이·무게·온도 등 모든 단위를 빠르게 변환하는 무료 계산기",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: ["ko", "en"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <Script id="json-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <UnitConverterClient />

      <section className="max-w-lg mx-auto mt-16 space-y-10 text-sm text-gray-400 pb-16">
        <div>
          <h2 className="text-white text-base font-semibold mb-3">단위 변환기란?</h2>
          <p>
            단위 변환기(Unit Converter)는 길이·무게·온도·넓이·부피·속도 등 6가지 카테고리의 단위를
            즉시 변환하는 무료 온라인 도구입니다. cm를 inch로, kg를 lb로, °C를 °F로 변환할 때
            공식을 외울 필요 없이 값을 입력하면 바로 결과가 표시됩니다.
          </p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">지원 단위 목록</h2>
          <ul className="space-y-1.5 list-disc list-inside">
            <li><strong className="text-gray-300">길이</strong> — m, km, cm, mm, inch, ft, yard, mile</li>
            <li><strong className="text-gray-300">무게</strong> — kg, g, mg, lb, oz, t(톤)</li>
            <li><strong className="text-gray-300">온도</strong> — °C (섭씨), °F (화씨), K (켈빈)</li>
            <li><strong className="text-gray-300">넓이</strong> — m², km², ha, acre, ft²</li>
            <li><strong className="text-gray-300">부피</strong> — L, mL, m³, gal, fl oz</li>
            <li><strong className="text-gray-300">속도</strong> — m/s, km/h, mph, knot</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-300 font-medium">1인치(inch)는 몇 cm인가요?</dt>
              <dd className="mt-1">1인치 = 2.54cm입니다. 위 변환기에서 길이 카테고리를 선택하고 inch → cm로 설정하면 정확한 값을 바로 확인할 수 있습니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">화씨(°F)를 섭씨(°C)로 변환하는 공식은?</dt>
              <dd className="mt-1">°C = (°F - 32) × 5 ÷ 9 입니다. 예를 들어 98.6°F = 37°C(체온)입니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">1파운드(lb)는 몇 kg인가요?</dt>
              <dd className="mt-1">1lb = 약 0.4536kg입니다. 미국에서는 체중을 파운드로 표기하는 경우가 많습니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">계산 결과는 얼마나 정확한가요?</dt>
              <dd className="mt-1">소수점 8자리까지 계산하며 국제 표준 변환 계수를 사용합니다. 과학적 용도로도 사용 가능합니다.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
