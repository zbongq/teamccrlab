// TEAMCCR shared CMS data layer.
// Single source of default content for both index.html (public) and admin.html (management).
// This is a PROTOTYPE bridge: the "database" is the browser's localStorage on this device.
// Admin writes keys under "teamccr_cms_*"; index reads them (falling back to these defaults).
// NOTE: For a real deployment this must move to a server + auth + DB — client-side data is not secure.
(function(){
  const DEFAULTS = {
    PRODUCTS: [
  { id:'TC-101', brand:'Divesoft', model:'Liberty', mount:'BM', control:'eCCR', year:2019, hours:20, grade:'S', price:16800000, saleType:'위탁형', center:'센터', views:40, condition:'중고' , overhaul:'완료' },
  { id:'TC-102', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'eCCR', year:2020, hours:37, grade:'A', price:14600000, saleType:'매입형', center:'센터', views:63, condition:'중고' , overhaul:'완료' },
  { id:'TC-103', brand:'KISS', model:'Sidewinder', mount:'SM', control:'eCCR', year:2021, hours:54, grade:'A', price:11400000, saleType:'위탁형', center:'센터', views:86, condition:'중고' , overhaul:'완료' },
  { id:'TC-104', brand:'AP Diving', model:'Inspiration', mount:'BM', control:'mCCR', year:2022, hours:71, grade:'B', price:10100000, saleType:'매입형', center:'센터', views:109, condition:'중고' , overhaul:'완료' },
  { id:'TC-105', brand:'rEvo', model:'rEvo III Standard', mount:'BM', control:'Hybrid', year:2023, hours:88, grade:'B', price:19400000, saleType:'위탁형', center:'센터', views:132, condition:'중고' , overhaul:'완료' },
  { id:'TC-106', brand:'Halcyon', model:'Symbios', mount:'BM', control:'eCCR', year:2019, hours:105, grade:'C', price:19700000, saleType:'매입형', center:'센터', views:155, condition:'중고' , overhaul:'완료' },
  { id:'TC-107', brand:'iQsub', model:'X-CCR', mount:'BM', control:'eCCR', year:2020, hours:122, grade:'S', price:10200000, saleType:'위탁형', center:'센터', views:178, condition:'중고' , overhaul:'완료' },
  { id:'TC-108', brand:'SF2', model:'SF2 Backmount', mount:'BM', control:'eCCR', year:2021, hours:139, grade:'A', price:12700000, saleType:'매입형', center:'센터', views:201, condition:'중고' , overhaul:'완료' },
  { id:'TC-109', brand:'Dive Rite', model:'O2ptima CM', mount:'CM', control:'mCCR', year:2022, hours:156, grade:'A', price:4500000, saleType:'위탁형', center:'센터', views:224, condition:'중고' , overhaul:'완료' },
  { id:'TC-110', brand:'Divesoft', model:'Liberty Sidemount', mount:'SM', control:'Hybrid', year:2023, hours:173, grade:'B', price:17200000, saleType:'매입형', center:'센터', views:247, condition:'중고' , overhaul:'완료' },
  { id:'TC-111', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'eCCR', year:2019, hours:190, grade:'B', price:13000000, saleType:'위탁형', center:'센터', views:270, condition:'중고' , overhaul:'완료' },
  { id:'TC-112', brand:'KISS', model:'GEM', mount:'BM', control:'SCR', year:2020, hours:207, grade:'C', price:9700000, saleType:'매입형', center:'센터', views:293, condition:'중고' , overhaul:'필요' },
  { id:'TC-113', brand:'AP Diving', model:'Evolution', mount:'BM', control:'eCCR', year:2021, hours:224, grade:'S', price:8500000, saleType:'위탁형', center:'센터', views:316, condition:'중고' , overhaul:'완료' },
  { id:'TC-114', brand:'rEvo', model:'rEvo III Micro', mount:'BM', control:'Hybrid', year:2022, hours:241, grade:'A', price:17800000, saleType:'매입형', center:'센터', views:339, condition:'중고' , overhaul:'완료' },
  { id:'TC-115', brand:'Halcyon', model:'Symbios', mount:'BM', control:'Hybrid', year:2023, hours:258, grade:'A', price:20000000, saleType:'위탁형', center:'센터', views:362, condition:'중고' , overhaul:'완료' },
  { id:'TC-116', brand:'iQsub', model:'X-CCR', mount:'BM', control:'eCCR', year:2019, hours:275, grade:'B', price:8600000, saleType:'매입형', center:'센터', views:385, condition:'중고' , overhaul:'필요' },
  { id:'TC-117', brand:'SF2', model:'SF2 Sidemount', mount:'SM', control:'eCCR', year:2020, hours:292, grade:'B', price:11100000, saleType:'위탁형', center:'센터', views:408, condition:'중고' , overhaul:'필요' },
  { id:'TC-118', brand:'Dive Rite', model:'O2ptima FX', mount:'CM', control:'eCCR', year:2021, hours:309, grade:'C', price:2800000, saleType:'매입형', center:'센터', views:431, condition:'중고' , overhaul:'필요' },
  { id:'TC-119', brand:'Divesoft', model:'Liberty', mount:'BM', control:'mCCR', year:2022, hours:326, grade:'S', price:15600000, saleType:'위탁형', center:'센터', views:54, condition:'중고' , overhaul:'완료' },
  { id:'TC-120', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'Hybrid', year:2023, hours:343, grade:'A', price:13400000, saleType:'매입형', center:'센터', views:77, condition:'중고' , overhaul:'완료' },
  { id:'TC-121', brand:'KISS', model:'Classic', mount:'BM', control:'eCCR', year:2019, hours:360, grade:'A', price:8100000, saleType:'위탁형', center:'센터', views:100, condition:'중고' , overhaul:'완료' },
  { id:'TC-122', brand:'AP Diving', model:'Inspiration', mount:'BM', control:'eCCR', year:2020, hours:377, grade:'B', price:6900000, saleType:'매입형', center:'센터', views:123, condition:'중고' , overhaul:'필요' },
  { id:'TC-123', brand:'rEvo', model:'rEvo III Standard', mount:'BM', control:'Hybrid', year:2021, hours:394, grade:'B', price:16100000, saleType:'위탁형', center:'센터', views:146, condition:'중고' , overhaul:'필요' },
  { id:'TC-124', brand:'Halcyon', model:'Symbios', mount:'BM', control:'mCCR', year:2022, hours:411, grade:'C', price:18400000, saleType:'매입형', center:'센터', views:169, condition:'중고' , overhaul:'필요' },
  { id:'TC-125', brand:'iQsub', model:'X-CCR', mount:'BM', control:'Hybrid', year:2023, hours:428, grade:'S', price:9000000, saleType:'위탁형', center:'센터', views:192, condition:'중고' , overhaul:'완료' },
  { id:'TC-126', brand:'SF2', model:'SF2 Backmount', mount:'BM', control:'eCCR', year:2019, hours:25, grade:'A', price:12800000, saleType:'매입형', center:'센터', views:215, condition:'중고' , overhaul:'완료' },
  { id:'TC-127', brand:'Dive Rite', model:'O2ptima CM', mount:'CM', control:'eCCR', year:2020, hours:42, grade:'A', price:4600000, saleType:'위탁형', center:'센터', views:238, condition:'중고' , overhaul:'완료' },
  { id:'TC-128', brand:'Divesoft', model:'Liberty Sidemount', mount:'SM', control:'eCCR', year:2021, hours:59, grade:'B', price:17300000, saleType:'매입형', center:'센터', views:261, condition:'중고' , overhaul:'완료' },
  { id:'TC-129', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'mCCR', year:2022, hours:76, grade:'B', price:15100000, saleType:'위탁형', center:'센터', views:284, condition:'중고' , overhaul:'완료' },
  { id:'TC-130', brand:'KISS', model:'Sidewinder', mount:'SM', control:'Hybrid', year:2023, hours:93, grade:'C', price:11900000, saleType:'매입형', center:'센터', views:307, condition:'중고' , overhaul:'완료' },
  { id:'TC-131', brand:'AP Diving', model:'Evolution', mount:'BM', control:'eCCR', year:2019, hours:110, grade:'S', price:8600000, saleType:'위탁형', center:'센터', views:330, condition:'중고' , overhaul:'완료' },
  { id:'TC-132', brand:'rEvo', model:'rEvo III Micro', mount:'BM', control:'Hybrid', year:2020, hours:127, grade:'A', price:17900000, saleType:'매입형', center:'센터', views:353, condition:'중고' , overhaul:'완료' },
  { id:'TC-133', brand:'Halcyon', model:'Symbios', mount:'BM', control:'eCCR', year:2021, hours:144, grade:'A', price:20100000, saleType:'위탁형', center:'센터', views:376, condition:'중고' , overhaul:'완료' },
  { id:'TC-134', brand:'iQsub', model:'X-CCR', mount:'BM', control:'mCCR', year:2022, hours:161, grade:'B', price:10700000, saleType:'매입형', center:'센터', views:399, condition:'중고' , overhaul:'완료' },
  { id:'TC-135', brand:'SF2', model:'SF2 Sidemount', mount:'SM', control:'Hybrid', year:2023, hours:178, grade:'B', price:13200000, saleType:'위탁형', center:'센터', views:422, condition:'중고' , overhaul:'완료' },
  { id:'TC-136', brand:'Dive Rite', model:'O2ptima FX', mount:'CM', control:'eCCR', year:2019, hours:195, grade:'C', price:2900000, saleType:'매입형', center:'센터', views:45, condition:'중고' , overhaul:'완료' },
  { id:'TC-137', brand:'Divesoft', model:'Liberty', mount:'BM', control:'eCCR', year:2020, hours:212, grade:'S', price:15700000, saleType:'위탁형', center:'센터', views:68, condition:'중고' , overhaul:'완료' },
  { id:'TC-138', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'eCCR', year:2021, hours:229, grade:'A', price:13500000, saleType:'매입형', center:'센터', views:91, condition:'중고' , overhaul:'완료' },
  { id:'TC-139', brand:'KISS', model:'GEM', mount:'BM', control:'SCR', year:2022, hours:246, grade:'A', price:10200000, saleType:'위탁형', center:'센터', views:114, condition:'중고' , overhaul:'완료' },
  { id:'TC-140', brand:'AP Diving', model:'Inspiration', mount:'BM', control:'Hybrid', year:2023, hours:263, grade:'B', price:9000000, saleType:'매입형', center:'센터', views:137, condition:'중고' , overhaul:'필요' },
  { id:'TC-141', brand:'rEvo', model:'rEvo III Standard', mount:'BM', control:'Hybrid', year:2019, hours:280, grade:'B', price:16300000, saleType:'위탁형', center:'센터', views:160, condition:'중고' , overhaul:'필요' },
  { id:'TC-142', brand:'Halcyon', model:'Symbios', mount:'BM', control:'eCCR', year:2020, hours:297, grade:'C', price:18500000, saleType:'매입형', center:'센터', views:183, condition:'중고' , overhaul:'필요' },
  { id:'TC-143', brand:'iQsub', model:'X-CCR', mount:'BM', control:'eCCR', year:2021, hours:314, grade:'S', price:9100000, saleType:'위탁형', center:'센터', views:206, condition:'중고' , overhaul:'완료' },
  { id:'TC-144', brand:'SF2', model:'SF2 Backmount', mount:'BM', control:'mCCR', year:2022, hours:331, grade:'A', price:11600000, saleType:'매입형', center:'센터', views:229, condition:'중고' , overhaul:'완료' },
  { id:'TC-145', brand:'Dive Rite', model:'O2ptima CM', mount:'CM', control:'Hybrid', year:2023, hours:348, grade:'A', price:3300000, saleType:'위탁형', center:'센터', views:252, condition:'중고' , overhaul:'완료' },
  { id:'TC-146', brand:'Divesoft', model:'Liberty Sidemount', mount:'SM', control:'eCCR', year:2019, hours:365, grade:'B', price:14100000, saleType:'매입형', center:'센터', views:275, condition:'중고' , overhaul:'필요' },
  { id:'TC-147', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'eCCR', year:2020, hours:382, grade:'B', price:11800000, saleType:'위탁형', center:'센터', views:298, condition:'중고' , overhaul:'필요' },
  { id:'TC-148', brand:'KISS', model:'Classic', mount:'BM', control:'eCCR', year:2021, hours:399, grade:'C', price:8600000, saleType:'매입형', center:'센터', views:321, condition:'중고' , overhaul:'필요' },
  { id:'TC-149', brand:'AP Diving', model:'Evolution', mount:'BM', control:'mCCR', year:2022, hours:416, grade:'S', price:7400000, saleType:'위탁형', center:'센터', views:344, condition:'중고' , overhaul:'완료' },
  { id:'TC-150', brand:'rEvo', model:'rEvo III Micro', mount:'BM', control:'Hybrid', year:2023, hours:433, grade:'A', price:16600000, saleType:'매입형', center:'센터', views:367, condition:'중고' , overhaul:'완료' },
  { id:'TC-N01', brand:'Divesoft', model:'Liberty', mount:'BM', control:'eCCR', year:2026, hours:0, grade:'', price:21800000, saleType:'TEAMCCR 정품', center:'센터', views:52, condition:'신품' , overhaul:'완료' },
  { id:'TC-N02', brand:'JJ-CCR', model:'JJ-CCR', mount:'BM', control:'eCCR', year:2026, hours:0, grade:'', price:17200000, saleType:'TEAMCCR 정품', center:'센터', views:41, condition:'신품' , overhaul:'완료' },
  { id:'TC-N03', brand:'KISS', model:'Sidewinder', mount:'SM', control:'mCCR', year:2026, hours:0, grade:'', price:14500000, saleType:'TEAMCCR 정품', center:'센터', views:66, condition:'신품' , overhaul:'완료' },
  { id:'TC-N04', brand:'AP Diving', model:'Inspiration', mount:'BM', control:'eCCR', year:2026, hours:0, grade:'', price:13800000, saleType:'TEAMCCR 정품', center:'센터', views:38, condition:'신품' , overhaul:'완료' },
  { id:'TC-N05', brand:'rEvo', model:'rEvo III Standard', mount:'BM', control:'Hybrid', year:2026, hours:0, grade:'', price:22900000, saleType:'TEAMCCR 정품', center:'센터', views:29, condition:'신품' , overhaul:'완료' },
  { id:'TC-N06', brand:'Halcyon', model:'Symbios', mount:'CM', control:'eCCR', year:2026, hours:0, grade:'', price:23500000, saleType:'TEAMCCR 정품', center:'센터', views:22, condition:'신품' , overhaul:'완료' },
  { id:'TC-N07', brand:'iQsub', model:'X-CCR', mount:'BM', control:'eCCR', year:2026, hours:0, grade:'', price:12600000, saleType:'TEAMCCR 정품', center:'센터', views:34, condition:'신품' , overhaul:'완료' },
  { id:'TC-N08', brand:'SF2', model:'SF2 Backmount', mount:'BM', control:'eCCR', year:2026, hours:0, grade:'', price:15400000, saleType:'TEAMCCR 정품', center:'센터', views:19, condition:'신품' , overhaul:'완료' },
],
    STORE_PRODUCTS: [
  { id:'st1', category:'드라이수트', name:'테크 드라이수트', price:1200000, desc:'테크니컬 다이빙용 트라이라미네이트 드라이수트. 팔뚝 포켓과 강화 무릎 패드 적용.', slotId:'store-st1' },
  { id:'st2', category:'마스크/스노클', name:'로우볼륨 마스크', price:85000, desc:'좁은 시야각을 최소화한 로우볼륨 마스크. 실리콘 스커트로 편안한 착용감.', slotId:'store-st2' },
  { id:'st3', category:'다이브 컴퓨터', name:'테크 다이브 컴퓨터', price:950000, desc:'멀티가스 감압 알고리즘을 지원하는 테크니컬 다이빙 전용 컴퓨터.', slotId:'store-st3' },
  { id:'st4', category:'산소센서', name:'O2 센서 (3셀 세트)', price:180000, desc:'재호흡기 호환 산소센서 3셀 세트. 밀리볼트 정확도 검수 완료.', slotId:'store-st4' },
  { id:'st5', category:'소다라임/스크러버', name:'소다라임 5kg', price:65000, desc:'CO2 흡수 성능이 검증된 소다라임 5kg 팩.', slotId:'store-st5' },
  { id:'st6', category:'호스/피팅', name:'인플레이터 호스', price:45000, desc:'표준 규격 인플레이터 호스, 다양한 길이 옵션.', slotId:'store-st6' },
  { id:'st7', category:'툴/액세서리', name:'다이브 나이프', price:55000, desc:'스테인리스 소재의 컴팩트 다이브 나이프.', slotId:'store-st7' },
  { id:'st8', category:'드라이수트', name:'언더수트', price:320000, desc:'보온성이 뛰어난 드라이수트 전용 언더수트.', slotId:'store-st8' },
  { id:'st9', category:'드라이수트', name:'테크 드라이수트', price:1200000, desc:'드라이수트 카테고리의 테크 드라이수트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st9' },
  { id:'st10', category:'드라이수트', name:'네오프렌 드라이수트', price:890000, desc:'드라이수트 카테고리의 네오프렌 드라이수트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st10' },
  { id:'st11', category:'드라이수트', name:'셸 드라이수트 프로', price:1450000, desc:'드라이수트 카테고리의 셸 드라이수트 프로 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st11' },
  { id:'st12', category:'드라이수트', name:'트라이라미네이트 드라이수트 라이트', price:980000, desc:'드라이수트 카테고리의 트라이라미네이트 드라이수트 라이트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st12' },
  { id:'st13', category:'드라이수트', name:'드라이수트 언더가먼트 세트', price:320000, desc:'드라이수트 카테고리의 드라이수트 언더가먼트 세트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st13' },
  { id:'st14', category:'드라이수트', name:'드라이수트 넥씰 교체 키트', price:65000, desc:'드라이수트 카테고리의 드라이수트 넥씰 교체 키트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st14' },
  { id:'st15', category:'드라이수트', name:'드라이수트 부츠 일체형 모델', price:1350000, desc:'드라이수트 카테고리의 드라이수트 부츠 일체형 모델 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st15' },
  { id:'st16', category:'마스크/스노클', name:'로우볼륨 마스크', price:85000, desc:'마스크/스노클 카테고리의 로우볼륨 마스크 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st16' },
  { id:'st17', category:'마스크/스노클', name:'듀얼렌즈 마스크', price:72000, desc:'마스크/스노클 카테고리의 듀얼렌즈 마스크 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st17' },
  { id:'st18', category:'마스크/스노클', name:'접이식 스노클', price:38000, desc:'마스크/스노클 카테고리의 접이식 스노클 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st18' },
  { id:'st19', category:'마스크/스노클', name:'드라이 스노클', price:45000, desc:'마스크/스노클 카테고리의 드라이 스노클 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st19' },
  { id:'st20', category:'마스크/스노클', name:'프레임리스 마스크', price:68000, desc:'마스크/스노클 카테고리의 프레임리스 마스크 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st20' },
  { id:'st21', category:'마스크/스노클', name:'교정렌즈 마스크', price:95000, desc:'마스크/스노클 카테고리의 교정렌즈 마스크 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st21' },
  { id:'st22', category:'다이브 컴퓨터', name:'테크 다이브 컴퓨터', price:950000, desc:'다이브 컴퓨터 카테고리의 테크 다이브 컴퓨터 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st22' },
  { id:'st23', category:'다이브 컴퓨터', name:'에어 인테그레이션 컴퓨터', price:1180000, desc:'다이브 컴퓨터 카테고리의 에어 인테그레이션 컴퓨터 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st23' },
  { id:'st24', category:'다이브 컴퓨터', name:'백업 다이브 컴퓨터', price:620000, desc:'다이브 컴퓨터 카테고리의 백업 다이브 컴퓨터 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st24' },
  { id:'st25', category:'다이브 컴퓨터', name:'멀티가스 컴퓨터 프로', price:1420000, desc:'다이브 컴퓨터 카테고리의 멀티가스 컴퓨터 프로 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st25' },
  { id:'st26', category:'다이브 컴퓨터', name:'손목형 다이브 컴퓨터 엔트리', price:480000, desc:'다이브 컴퓨터 카테고리의 손목형 다이브 컴퓨터 엔트리 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st26' },
  { id:'st27', category:'산소센서', name:'O2 센서 스탠다드', price:95000, desc:'산소센서 카테고리의 O2 센서 스탠다드 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st27' },
  { id:'st28', category:'산소센서', name:'O2 센서 프리미엄', price:135000, desc:'산소센서 카테고리의 O2 센서 프리미엄 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st28' },
  { id:'st29', category:'산소센서', name:'갈바닉 O2 셀 3팩', price:260000, desc:'산소센서 카테고리의 갈바닉 O2 셀 3팩 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st29' },
  { id:'st30', category:'산소센서', name:'O2 센서 캘리브레이션 키트', price:48000, desc:'산소센서 카테고리의 O2 센서 캘리브레이션 키트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st30' },
  { id:'st31', category:'소다라임/스크러버', name:'소다라임 5kg', price:42000, desc:'소다라임/스크러버 카테고리의 소다라임 5kg 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st31' },
  { id:'st32', category:'소다라임/스크러버', name:'소다라임 프리미엄 8kg', price:68000, desc:'소다라임/스크러버 카테고리의 소다라임 프리미엄 8kg 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st32' },
  { id:'st33', category:'소다라임/스크러버', name:'스크러버 캐니스터 교체용', price:89000, desc:'소다라임/스크러버 카테고리의 스크러버 캐니스터 교체용 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st33' },
  { id:'st34', category:'소다라임/스크러버', name:'소다라임 벌크 20kg', price:150000, desc:'소다라임/스크러버 카테고리의 소다라임 벌크 20kg 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st34' },
  { id:'st35', category:'소다라임/스크러버', name:'일회용 스크러버 카트리지', price:56000, desc:'소다라임/스크러버 카테고리의 일회용 스크러버 카트리지 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st35' },
  { id:'st36', category:'호스/피팅', name:'LP 호스 90cm', price:38000, desc:'호스/피팅 카테고리의 LP 호스 90cm 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st36' },
  { id:'st37', category:'호스/피팅', name:'HP 호스 게이지용', price:32000, desc:'호스/피팅 카테고리의 HP 호스 게이지용 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st37' },
  { id:'st38', category:'호스/피팅', name:'퀵커넥트 피팅 세트', price:45000, desc:'호스/피팅 카테고리의 퀵커넥트 피팅 세트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st38' },
  { id:'st39', category:'호스/피팅', name:'교체용 O링 세트', price:12000, desc:'호스/피팅 카테고리의 교체용 O링 세트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st39' },
  { id:'st40', category:'호스/피팅', name:'호스 프로텍터', price:9000, desc:'호스/피팅 카테고리의 호스 프로텍터 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st40' },
  { id:'st41', category:'호스/피팅', name:'스웨이지 피팅 어댑터', price:27000, desc:'호스/피팅 카테고리의 스웨이지 피팅 어댑터 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st41' },
  { id:'st42', category:'툴/액세서리', name:'다이브 나이프', price:58000, desc:'툴/액세서리 카테고리의 다이브 나이프 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st42' },
  { id:'st43', category:'툴/액세서리', name:'릴 스풀 45m', price:36000, desc:'툴/액세서리 카테고리의 릴 스풀 45m 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st43' },
  { id:'st44', category:'툴/액세서리', name:'백업 라이트', price:72000, desc:'툴/액세서리 카테고리의 백업 라이트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st44' },
  { id:'st45', category:'툴/액세서리', name:'클립 카라비너 세트', price:15000, desc:'툴/액세서리 카테고리의 클립 카라비너 세트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st45' },
  { id:'st46', category:'툴/액세서리', name:'웨이트 벨트', price:42000, desc:'툴/액세서리 카테고리의 웨이트 벨트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st46' },
  { id:'st47', category:'툴/액세서리', name:'다이브 슬레이트', price:18000, desc:'툴/액세서리 카테고리의 다이브 슬레이트 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st47' },
  { id:'st48', category:'툴/액세서리', name:'장비 유지보수 툴킷', price:95000, desc:'툴/액세서리 카테고리의 장비 유지보수 툴킷 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st48' },
  { id:'st49', category:'툴/액세서리', name:'보조 마스크 스트랩', price:11000, desc:'툴/액세서리 카테고리의 보조 마스크 스트랩 상품입니다. TEAMCCR이 엄선한 정품 장비입니다.', slotId:'store-st49' },
],
    STORE_CATEGORIES: ['전체','드라이수트','마스크/스노클','다이브 컴퓨터','산소센서','소다라임/스크러버','호스/피팅','툴/액세서리'],
    MAGAZINE_ARTICLES: [
  { id:'m1', category:'Guide', title:'재호흡기 다이빙 시작 전 알아야 할 것들', excerpt:'첫 CCR 다이빙을 준비하는 다이버를 위한 안전 체크리스트', slotId:'mag-1', imageCount:4 },
  { id:'m7', category:'Guide', title:'오버홀 주기, 놓치면 안 되는 이유', excerpt:'전자계통 점검이 안전에 미치는 영향', slotId:'mag-7', imgSrc:'./assets/mag-7-overhaul.jpg' },
  { id:'m9', category:'Guide', title:'베일아웃 실린더, 몇 개가 적당할까', excerpt:'다이빙 프로필별 여분 가스 계산법', slotId:'mag-9', imageCount:7 },
  { id:'m10', category:'Guide', title:'CCR 다이빙 전 프리다이브 체크리스트', excerpt:'루프 프리브리딩부터 O2 셀 캘리브레이션까지', slotId:'mag-10', imageCount:7, cardSlotId:'mag-10-cover' },
  { id:'m11', category:'Guide', title:'센터 위탁 판매, 이렇게 진행됩니다', excerpt:'검수·촬영·게시·정산까지 전 과정 안내', slotId:'mag-11' },

  { id:'m2', category:'Brand Focus', title:'Divesoft Liberty 완전 분석', excerpt:'Light와 Heavy 옵션의 차이, 실사용 리뷰', slotId:'mag-2', imageCount:7, cardSlotId:'mag-2-cover' },
  { id:'m8', category:'Brand Focus', title:'rEvo III, 하이브리드 CCR의 매력', excerpt:'mCCR/eCCR 전환이 가능한 이유', slotId:'mag-8' },
  { id:'m12', category:'Brand Focus', title:'JJ-CCR, 20년 검증된 단순함', excerpt:'미니멀 설계 철학과 유지보수 편의성', slotId:'mag-12' },
  { id:'m13', category:'Brand Focus', title:'Fathom CCR, 미국 테크 다이버들의 선택', excerpt:'백마운트 카운터렁 구조의 장단점', slotId:'mag-13', imageCount:6, cardSlotId:'mag-13-cover' },
  { id:'m14', category:'Brand Focus', title:'Megalodon vs Optima, 무엇이 다를까', excerpt:'같은 계열 두 모델의 헤드/스크러버 비교', slotId:'mag-14' },

  { id:'m3', category:'Beginner', title:'mCCR vs eCCR, 무엇을 골라야 할까', excerpt:'입문자를 위한 제어방식 비교 가이드', slotId:'mag-3', imageCount:9, cardSlotId:'mag-3-cover' },
  { id:'m15', category:'Beginner', title:'중고 CCR 구매 전 확인할 5가지', excerpt:'이력서, 오버홀 기록, 셀 잔여수명 체크법', slotId:'mag-15' },
  { id:'m16', category:'Beginner', title:'CCR 교육 코스, 어디까지 배우나', excerpt:'입문 과정부터 노멀/디컴프레션까지 단계별 정리', slotId:'mag-16', imageCount:9, cardSlotId:'mag-16-cover' },
  { id:'m17', category:'Beginner', title:'첫 CCR, 자가 구매 vs 렌탈', excerpt:'초기 비용과 유지비를 비교해봤습니다', slotId:'mag-17', imageCount:9, cardSlotId:'mag-17-cover' },
  { id:'m18', category:'Beginner', title:'다이브 컴퓨터, CCR용은 무엇이 다른가', excerpt:'PPO2 트렌드 로그와 알람 설정 이해하기', slotId:'mag-18', imageCount:6, cardSlotId:'mag-18-cover' },

  { id:'m4', category:'Product News', title:'KISS Sidewinder 2, CE 인증 진행 중', excerpt:'신제품 출시 소식과 예상 출고 일정', slotId:'mag-4' },
  { id:'m19', category:'Product News', title:'Shearwater Petrel 3 국내 정식 출시', excerpt:'배터리 개선과 신규 알고리즘 업데이트', slotId:'mag-19' },
  { id:'m20', category:'Product News', title:'차세대 O2 센서, 3셀에서 4셀로', excerpt:'제조사들의 리던던시 강화 트렌드', slotId:'mag-20' },
  { id:'m21', category:'Product News', title:'신형 스크러버 캐니스터 국내 입고', excerpt:'사용시간 15% 늘어난 신규 필터 구조', slotId:'mag-21' },
  { id:'m22', category:'Product News', title:'TEAMCCR 여름 위탁 프로모션 결과', excerpt:'8월 한 달간 접수된 위탁 매물 결산', slotId:'mag-22' },

  { id:'m5', category:'People', title:'책임 트레이너 박정훈 인터뷰', excerpt:'테크니컬 다이빙에 입문하게 된 계기', slotId:'mag-5' },
  { id:'m23', category:'People', title:'10년차 CCR 다이버가 말하는 안전', excerpt:'사고 사례로 배우는 체크리스트의 중요성', slotId:'mag-23', imageCount:10, cardSlotId:'mag-23-cover' },
  { id:'m24', category:'People', title:'여성 테크니컬 다이버 커뮤니티 탐방', excerpt:'국내 CCR 다이버 저변 확대 현황', slotId:'mag-24', imageCount:1, cardSlotId:'mag-24-cover' },
  { id:'m25', category:'People', title:'장비 정비사가 보는 흔한 실수들', excerpt:'오버홀 현장에서 자주 발견되는 문제점', slotId:'mag-25', imageCount:9, cardSlotId:'mag-25-cover' },
  { id:'m26', category:'People', title:'침선 탐사 다이버의 CCR 활용기', excerpt:'딥 렉 다이빙에서 재호흡기가 필요한 이유', slotId:'mag-26' },

  { id:'m6', category:'Research', title:'스크러버 사용시간, 어떻게 계산할까', excerpt:'소다라임 종류별 잔여 사용가능 시간 비교', slotId:'mag-6' },
  { id:'m27', category:'Research', title:'PPO2 셋포인트, 얼마가 최적인가', excerpt:'딥/데코 구간별 셋포인트 전략 비교', slotId:'mag-27' },
  { id:'m28', category:'Research', title:'감압병과 CCR, 통계로 보는 상관관계', excerpt:'오픈서킷 대비 데코 프로파일 분석', slotId:'mag-28', imageCount:7, cardSlotId:'mag-28-cover' },
  { id:'m29', category:'Research', title:'헬리옥스 혼합비, CCR에서의 이점', excerpt:'질소마취 감소와 가스 소모량 비교', slotId:'mag-29', imageCount:6, cardSlotId:'mag-29-cover' },
  { id:'m30', category:'Research', title:'저온 환경에서의 O2 셀 신뢰도', excerpt:'수온에 따른 센서 오차 실측 데이터', slotId:'mag-30' },
],
    MAGAZINE_POST_NUMBERS: [16,18,4,7,10,25,15,29,13,24,26,28,2,23,30,12,1,19,6,9,22,14,17,3,11,8,5,27,20,21],
    MAGAZINE_CATEGORIES: ['NEW','Beginner','Brand Focus','Guide','Product News','People','Research'],
    BRANDS: ['전체','AP Diving','Dive Rite','Divesoft','Halcyon','iQsub','JJ-CCR','KISS','rEvo','SF2'],
    POLICY_EVENTS: [
  { title:'여름 시즌 위탁 프로모션', desc:'거래 수수료 무료 · 7월 한정', bg:'linear-gradient(135deg, oklch(30% 0.05 235), oklch(18% 0.03 235))' },
  { title:'신규 회원 첫 구매 혜택', desc:'가입 후 첫 구매 시 즉시 할인', bg:'linear-gradient(135deg, oklch(55% 0.15 250), oklch(40% 0.12 250))' },
  { title:'오버홀 정기 점검 캠페인', desc:'8월 한정 오버홀 20% 할인', bg:'linear-gradient(135deg, oklch(45% 0.1 150), oklch(30% 0.08 150))' },
  { title:'친구 초대 이벤트', desc:'초대할 때마다 포인트 적립', bg:'linear-gradient(135deg, oklch(60% 0.15 80), oklch(45% 0.12 60))' },
],
    POLICY_NOTICES: [
  { tag:'주요 서비스 공지', title:'개인정보 처리방침 개정 안내', date:'2026.07.14' },
  { tag:'주요 서비스 공지', title:'서비스 이용정책 변경사항 안내', date:'2026.07.10' },
  { tag:'이벤트/프로모션 안내', title:'여름 시즌 위탁 프로모션 결과 안내', date:'2026.07.07' },
  { tag:'주요 서비스 공지', title:'진단 기준 변경 안내', date:'2026.07.03' },
  { tag:'당첨 안내', title:'친구 초대 이벤트 당첨자 발표', date:'2026.06.26' },
],
    INSTRUCTORS: [
  { name:'박정훈', title:'책임 트레이너', certs:'SDI·TDI·ERDI ITE · PADI Tec100 CCR IT\nSF2/X-CCR/AP Evolution/Liberty/Optima', contact:'tdi19866@gmail.com · 010-4099-6530', slotId:'instructor-parkjunghoon', detailSlotId:'instructor-parkjunghoon-detail', photoSrc:'./assets/instructor-parkjunghoon.webp', detailSrc:'./assets/instructor-parkjunghoon-detail.webp' },
  { name:'백승균', title:'책임 트레이너', certs:'SDI·TDI·ERDI IT\nSF2 eCCR·X-CCR·AP Evolution', contact:'yamasg@hanmail.net · 010-7900-8259', slotId:'instructor-baekseunggyun', detailSlotId:'instructor-baekseunggyun-detail', photoSrc:'./assets/instructor-baekseunggyun.webp', detailSrc:'./assets/instructor-baekseunggyun-detail.webp' },
  { name:'조승훈', title:'책임강사', certs:'SDI·TDI·ERDI Instructor\nTDI SF2 eCCR Diluent/Deco Diver', contact:'idun07@naver.com · 010-9198-6494', slotId:'instructor-jhoseunghoon', detailSlotId:'instructor-jhoseunghoon-detail', photoSrc:'./assets/instructor-jhoseunghoon.webp', detailSrc:'./assets/instructor-jhoseunghoon-detail.webp' },
],
    POLICY_DOC_SECTIONS: ['구매/판매 프로세스 및 관련 정책','상품 가격 정책','진단 정책','오버홀 정책','배송 정책','워런티 정책','거래 취소 수수료 및 페널티 정책','회원가입/계정관리/탈퇴 정책','거래 수수료 및 비용 정책','포인트 정책'],
    HERO: [ {slotId:'hero-banner-0'}, {slotId:'hero-banner-1'}, {slotId:'hero-banner-2'} ],
    SITE: { name:'TEAMCCR', ceo:'대표자 성명', bizNo:'000-00-00000', mailOrder:'000-0000-0000', addr:'경기도 오산시 수청동 청학로 607-1 286 TSN', phone:'010-0000-0000' },
    TEAM: { address:'경기도 오산시 수청동 청학로 607-1 286', mapUrl:'https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x357b472e17c18e29%3A0xf935f9a0a410e088!2sTSN!5e0!3m2!1sko!2skr!4v1784445035062!5m2!1sko!2skr', calendarUrl:'' },
    POLICIES: {
      terms: '제1조 (목적)\n본 약관은 TEAMCCR이 제공하는 서비스의 이용조건 및 절차, 권리·의무 및 책임사항을 규정합니다.\n\n제2조 (용어의 정의)\n... 관리자 페이지에서 이 내용을 자유롭게 수정할 수 있습니다.',
      policy: '구매/판매 프로세스 및 관련 정책\nTEAMCCR의 스토어와 검색을 통해 장비 정보를 확인하고 구매/판매를 진행할 수 있습니다.\n... 관리자 페이지에서 이 내용을 자유롭게 수정할 수 있습니다.',
      privacy: '개인정보 처리방침\nTEAMCCR은 이용자의 개인정보를 소중히 다루며 관련 법령을 준수합니다.\n... 관리자 페이지에서 이 내용을 자유롭게 수정할 수 있습니다.'
    },
    MEMBERS: [
      { id:'u1001', name:'김다이버', email:'diver.kim@example.com', phone:'010-1234-5678', region:'한국', joined:'2026.03.12', status:'정상', orders:3 },
      { id:'u1002', name:'이테크', email:'tech.lee@example.com', phone:'010-2222-3333', region:'한국', joined:'2026.04.02', status:'정상', orders:1 },
      { id:'u1003', name:'John Smith', email:'jsmith@example.com', phone:'+1-555-0101', region:'해외', joined:'2026.05.19', status:'정상', orders:0 },
      { id:'u1004', name:'박세정', email:'sjpark@example.com', phone:'010-9876-5432', region:'한국', joined:'2026.06.28', status:'휴면', orders:5 }
    ],
    REQ_CONSIGN: [
      { id:'C-2601', name:'김위탁', phone:'010-1111-2222', model:'Divesoft Liberty', desiredPrice:16000000, memo:'2020년식, 오버홀 이력 있음', date:'2026.07.15', status:'접수' },
      { id:'C-2602', name:'정매물', phone:'010-3333-4444', model:'JJ-CCR', desiredPrice:13500000, memo:'사용시간 90시간', date:'2026.07.12', status:'검토중' }
    ],
    REQ_BUYOUT: [
      { id:'B-2601', name:'이매입', phone:'010-5555-6666', model:'rEvo III', desiredPrice:15000000, memo:'즉시 매입 희망', date:'2026.07.14', status:'접수' }
    ],
    REQ_NEWUNIT: [
      { id:'N-2601', name:'최신품', phone:'010-7777-8888', model:'KISS Sidewinder', memo:'신품 재고 및 납기 문의', date:'2026.07.13', status:'접수' }
    ],
    REQ_OVERHAUL: [
      { id:'O-2601', name:'한정비', phone:'010-1212-3434', model:'AP Inspiration', memo:'전자계통 점검 + 셀 교체', date:'2026.07.11', status:'접수' }
    ],
    REQ_VISIT: [
      { id:'V-2601', name:'방문객', phone:'010-4545-6767', visitDate:'2026.07.20', memo:'실물 확인 후 구매 상담', date:'2026.07.10', status:'예약확정' }
    ],
    REQ_EDUCATION: [
      { id:'E-2601', name:'교육생', phone:'010-8989-1010', course:'테크 CCR 입문', memo:'주말반 희망', date:'2026.07.09', status:'접수' }
    ],
    REQ_INQUIRY: [
      { id:1, email:'diver.kim@example.com', subject:'오버홀 견적 문의', message:'JJ-CCR 오버홀 예상 비용과 소요 기간이 궁금합니다.', status:'답변완료', answer:'부품 상태에 따라 2~3주 소요되며 견적은 검수 후 안내드립니다.', date:'2026.07.08' },
      { id:2, email:'tech.lee@example.com', subject:'위탁 판매 정산 주기 문의', message:'위탁 판매 성사 후 대금 정산까지 얼마나 걸리나요?', status:'답변중', answer:'', date:'2026.07.12' }
    ]
  };
  function get(key, fb){ try{ var v = localStorage.getItem('teamccr_cms_'+key); return v ? JSON.parse(v) : fb; }catch(e){ return fb; } }
  function set(key, val){ try{ localStorage.setItem('teamccr_cms_'+key, JSON.stringify(val)); }catch(e){} return val; }
  function del(key){ try{ localStorage.removeItem('teamccr_cms_'+key); }catch(e){} }
  window.TEAMCCR_DEFAULTS = DEFAULTS;
  window.TEAMCCR_CMS = { get, set, del, DEFAULTS };
})();
