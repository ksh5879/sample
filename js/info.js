/*=====================================================================================
버  전 : 2.0
날  짜 : 2021.02.02
제작사 : (주)에듀마루
본 파일 소스의 모든 저작권은 (주)에듀마루에 있습니다. 임의의 수정 및 배포를 금합니다.
문  의 : 02-6989-9337
=====================================================================================*/

var baseUrl = 'http://edumaru.co.kr/';

var orderLists = [
    { orderCode: 'sc', orderName: '세이브더칠드런' },
    { orderCode: 'kukkiwon', orderName: '국기원' },
];

var contLists = [
    {
        yymm: '202101',
        orderCode1: 'sc',
        orderCode2: 'edumaru',
        orderName: '세이브더칠드런',
        courseName: '아동권리의 기본교육',
        contType: 'html5',
        contSize: [1110, 624],
        target: 'popup',
        memo: '메모',
        chapter: [
            { num: 1, url: '2021/sc/01/01/', name: '아동권리의 이해' },
            { num: 2, url: '2021/sc/01/02/', name: '아동권리의 현실과 실천' }
        ]
    },
    {
        yymm: '202102',
        orderCode1: 'sc',
        orderCode2: 'edumaru',
        orderName: '세이브더칠드런',
        courseName: '긍정적 훈육',
        contType: 'html5',
        contSize: [1110, 624],
        target: 'popup',
        memo: '메모',
        chapter: [
            { num: 1, url: '2021/sc/02/01/', name: '차시명1' },
            { num: 2, url: '2021/sc/02/02/', name: '차시명2' }
        ]
    },
];