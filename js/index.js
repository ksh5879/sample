/*=====================================================================================
버  전 : 2.0
날  짜 : 2021.02.02
제작사 : (주)에듀마루
본 파일 소스의 모든 저작권은 (주)에듀마루에 있습니다. 임의의 수정 및 배포를 금합니다.
문  의 : 02-6989-9337
=====================================================================================*/

document.addEventListener('DOMContentLoaded', function () {
    // console.log('common.js loading');
    setOrderLists();

    // edumaru.event();
    em = new edumaru();
});

var em;

function edumaru() {
    this.selectValue = null;
    this.inputValue = null;
    this.init();
}

edumaru.prototype = {
    init: function () {
        this.events();
    },

    events: function () {
        $('.selectBox').change(function () {
            $('.selectBox option:selected').each(function () {
                em.selectValue = $(this).val();
                $('.terms').val('');
                em.viewList('select');
            });
        });

        $('.searchBtn').click(function () {
            em.viewCheck();
        });

        $('input').keydown(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                em.viewCheck();
            }
        });
    },

    viewCheck: function () {
        em.inputValue = $('.terms').val();

        if (em.inputValue == '') {
            $('.terms').focus(); // input 영역에 포커스
            alert('검색어를 입력한 후 검색 버튼을 클릭하세요.');
            return false;
        }
        else {
            em.viewList('search'); // 검색 결과를 보여주는 함수 호출
        }
    },

    viewList: function (type) {
        var bool = false;

        for (var idx in contLists) {
            if (type == 'select') {
                bool = (contLists[idx].yymm.slice(0, 4) == em.selectValue || contLists[idx].orderCode1 == em.selectValue || contLists[idx].orderCode2 == em.selectValue || contLists[idx].contType == em.selectValue) ? true : false;

                if (bool) {
                    em.createList(idx);
                }
            }

        }
    },

    createList: function (idx) {
        var chapterInfo = contLists[idx].chapter;
        var listHtml = '';

        listHtml += '<div class="courseList">';
        listHtml += '<div class="courseWrap">';
        listHtml += '<div class="course">' + contLists[idx].courseName + '</div>';
        listHtml += '<div class="year">' + contLists[idx].yymm + '</div>';
        listHtml += '<div class="order">' + contLists[idx].orderName + '(' + contLists[idx].orderCode1 + ')</div>';
        listHtml += '</div>';
        listHtml += '<table>';
        listHtml += '<tr>';
        listHtml += '<th class="tableTitle">차시</th>';
        listHtml += '<th class="tableTitle">차시명</th>';
        listHtml += '<th class="tableTitle">콘텐츠</th>';
        listHtml += '</tr>';

        for (var cIdx in chapterInfo) {
            listHtml += '<tr>';
            listHtml += '<td>' + chapterInfo[cIdx].num + '</td>';
            listHtml += '<td>' + chapterInfo[cIdx].name + '</td>';
            listHtml += '<td><span class="viewCont" onclick=em.viewContents("' + chapterInfo[cIdx].url + '","' + contLists[idx].contSize[0] + '","' + contLists[idx].contSize[1] + '","' + contLists[idx].target + '",this)>완료</span></td>';
            listHtml += '</tr>';
        }

        listHtml += '</table>';
        listHtml += '</div>';

        $('.projectWrap').append(listHtml);
    },

    viewContents: function (_url, _w, _h, _target, _element) {
        $(_element).addClass("visited");

        if (_target == 'popup') {
            var url = baseUrl + _url;
            var name = 'edumaru';
            var option = "menubar=no, toolbar=no, location=no, directories=no, status=no, scrollbars=no, resizable=no, top=100, left=100, width=" + _w + ", height=" + _h;

            window.open(url, name, option);
        }
        else {
            window.open(url, '_blank');
        }
    }
}

// 등록된 발주처 설정
function setOrderLists() {
    var orderListsHtml = '';

    for (var idx in orderLists) {
        orderListsHtml += '<option value="' + orderLists[idx].orderCode + '">' + orderLists[idx].orderName + '</option>';
    }

    $('.orders').html(orderListsHtml);
}
