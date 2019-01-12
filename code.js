var list = [
    {'title': 'درس برمجة تطبيقات الأندرويد', 'description': 'سوف تتعلم من خلال هذا المسار طريقة برمجة تطبيقات لأجهزة الآندرويد. تم تطوير نظام تشغيل الآندرويد من قبل شركة Google.', 'url': 'https://beta.barmej.com/tracks/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%86%D8%AF%D8%B1%D9%88%D9%8A%D8%AF-Android', 'color': '#3d8929'}, 
    
    {'title': 'برمجة المواقع مع Django', 'description': 'في هذا المسار ستتعلم برمجة المواقع و الخوادم باستخدام لغة Python ونظام Django لبرمجة تطبيقات المواقع.', 'url': 'https://beta.barmej.com/tracks/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D9%85%D8%B9-%D8%AC%D8%A7%D9%86%D8%BA%D9%88-Django', 'color': '#8803b5'},
    
    {'title': 'برمجة تطبيقات الآيفون مع Swift', 'description': 'يشرح هذا المسار طريقة برمجة التطبيقات لأجهزة الآيفون والتي تعمل على نظام iOS الذي تم تطويره من قبل شركة Apple.', 'url': 'https://beta.barmej.com/tracks/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%B9-%D8%B3%D9%88%D9%8A%D9%81%D8%AA-Swift', 'color': '#d64d48'}, 

function prev(){
        console.log ('البوت الاول');
        
        document.getElementById("android_title").style.background= "red";
        document.getElementById("android_title").innerHTML="بوتات دسكود حارقة";  
    }
    function next (){
      console.log ('البوت الثاني');
        document.getElementById("android_title").style.background= "yellow";
        document.getElementById("android_title").innerHTML="بوتات دسكورد ترحيب";  
    }
