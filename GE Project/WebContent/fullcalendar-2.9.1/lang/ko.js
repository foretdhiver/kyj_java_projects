!function(a){"function"==typeof define&&define.amd?define(["jquery","moment"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("moment")):a(jQuery,moment)}(function(a,b){!function(){"use strict";var a=(b.defineLocale||b.lang).call(b,"ko",{months:"1��_2��_3��_4��_5��_6��_7��_8��_9��_10��_11��_12��".split("_"),monthsShort:"1��_2��_3��_4��_5��_6��_7��_8��_9��_10��_11��_12��".split("_"),weekdays:"�Ͽ���_������_ȭ����_������_�����_�ݿ���_�����".split("_"),weekdaysShort:"��_��_ȭ_��_��_��_��".split("_"),weekdaysMin:"��_��_ȭ_��_��_��_��".split("_"),longDateFormat:{LT:"A h�� m��",LTS:"A h�� m�� s��",L:"YYYY.MM.DD",LL:"YYYY�� MMMM D��",LLL:"YYYY�� MMMM D�� A h�� m��",LLLL:"YYYY�� MMMM D�� dddd A h�� m��"},calendar:{sameDay:"���� LT",nextDay:"���� LT",nextWeek:"dddd LT",lastDay:"���� LT",lastWeek:"������ dddd LT",sameElse:"L"},relativeTime:{future:"%s ��",past:"%s ��",s:"�� ��",ss:"%d��",m:"�Ϻ�",mm:"%d��",h:"�� �ð�",hh:"%d�ð�",d:"�Ϸ�",dd:"%d��",M:"�� ��",MM:"%d��",y:"�� ��",yy:"%d��"},ordinalParse:/\d{1,2}��/,ordinal:"%d��",meridiemParse:/����|����/,isPM:function(a){return"����"===a},meridiem:function(a,b,c){return 12>a?"����":"����"}});return a}(),a.fullCalendar.datepickerLang("ko","ko",{closeText:"�ݱ�",prevText:"������",nextText:"������",currentText:"����",monthNames:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],monthNamesShort:["1��","2��","3��","4��","5��","6��","7��","8��","9��","10��","11��","12��"],dayNames:["�Ͽ���","������","ȭ����","������","�����","�ݿ���","�����"],dayNamesShort:["��","��","ȭ","��","��","��","��"],dayNamesMin:["��","��","ȭ","��","��","��","��"],weekHeader:"Wk",dateFormat:"yy-mm-dd",firstDay:0,isRTL:!1,showMonthAfterYear:!0,yearSuffix:"��"}),a.fullCalendar.lang("ko",{buttonText:{month:"��",week:"��",day:"��",list:"�������"},allDayText:"����",eventLimitText:"��"})});