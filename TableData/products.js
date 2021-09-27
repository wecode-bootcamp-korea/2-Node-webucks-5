app.post("/product", async (req, res) => {
  const product = await prisma.$queryRaw`
  INSERT INTO products (korean_name, english_name, descriptions, category_id)
  VALUES  ('시그니처 더 블랙 콜드 브루', 'Signnature The Black Cold Brew', '콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 진한 풍미의 콜드브루를 딜리버리로 원하는 곳애서 편하게 즐겨보세요 (전용 리유저블 보틍 /500ml)', 1),
          ('나이트로 바닐라 크림', 'Nitro Vanilla Cream', '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!', 1),
          ('나이트로 콜드 브루', 'Nitro Cold Brew', '나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마! 부드러운 목 넘김과 완벽한 밸런스에 커피 본연의 단맛을 경험할 수 있습니다.', 1),
          ('돌체 콜드 브루', 'Dolce Cold Brew', '무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!', 1),
          ('바닐라 크림 콜드 브루', 'Vanilla Cream Cold Brew', '콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.', 1),
          ('벨벳 다크 모카 나이트로', 'Velvet Dark Mocha Nitro', '다크 초콜릿 모카의 진한 바디감과 함께 헤이즐넛 향과 달콤한 카라멜 크림 폼으로 벨벳같은 부드러움까지 살린 리저브 나이트로 커피', 1),
          ('제주 비자림 콜드 브루', 'Jeju Forest Cold Brew', '[제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는 음료로 제주에서 유기농 말차로 만든 파우더와 Cold Brew를 활용한 음료.', 1),
          ('콜드 브루', 'Cold Brew', '스타벅스 바리스타의 정성으로 탄생한 콜드 브루! 콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.', 1),
          ('콜드 브루 몰트', 'Cold Brew Malt', '[리저브 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크', 1),
          ('콜드 브루 오트 라떼', 'Cold Brew Oat Latte', '콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼. 식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료', 1),
          ('콜드 브루 플로트', 'Cold Brew Float', '[리저브 전용음료] 리저브 콜드 브루 위에 녹아 내리는 한 스쿱의 바닐라 아이스크림', 1),
          ('프랜치 애플 타르트 나이트로', 'French Apple Tarte Nitro', '카라멜향을 머금은 애플의 달콤함과 부드러운 콜드 크레마를 조화롭게 느낄 수 있는 리저브 나이트로 음료', 1),
          ('아이스 커피', 'Iced Coffee', '깔끔하고 상큼함이 특징인 시원한 아이스 커피', 2),
          ('오늘의 커피', 'Brewed Coffee', '신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피', 2);
          `;

  res.json({ message: 'products res SUCCESS'});
});