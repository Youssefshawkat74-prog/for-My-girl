document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".content-section");


    navItems.forEach(item => {

        item.onclick = () => {

            let sectionId = item.getAttribute("data-section");


            // اخفاء كل الأقسام
            sections.forEach(section => {
                section.classList.remove("active");
            });


            // إزالة التفعيل من القائمة
            navItems.forEach(nav => {
                nav.classList.remove("active");
            });


            // إظهار القسم المطلوب
            let target = document.getElementById(sectionId);

            if(target){
                target.classList.add("active");
            }


            // تفعيل الزر
            item.classList.add("active");

        };

    });

});// تشغيل زرار الأغاني
const playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach(button => {

    button.addEventListener("click", function(){

        const songCard = this.closest(".song-card");

        const url = songCard.getAttribute("data-url");

        window.open(url, "_blank");

    });

});function updateCounters(){

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const date = new Date(counter.dataset.date);
        const now = new Date();

        let diff = now - date;

        if(diff < 0){
            counter.innerHTML = "لسه هيبدأ ❤️";
            return;
        }


        let seconds = Math.floor(diff / 1000);

        let years = Math.floor(seconds / (365.25*24*60*60));
        seconds %= Math.floor(365.25*24*60*60);


        let months = Math.floor(seconds / (30*24*60*60));
        seconds %= (30*24*60*60);


        let days = Math.floor(seconds / (24*60*60));
        seconds %= (24*60*60);


        let hours = Math.floor(seconds / 3600);
        seconds %= 3600;


        let minutes = Math.floor(seconds / 60);
        seconds %= 60;


        counter.innerHTML = 
        `
        ${years} سنة 
        ${months} شهر 
        ${days} يوم 
        ${hours} ساعة 
        ${minutes} دقيقة 
        ${seconds} ثانية
        `;

    });

}


setInterval(updateCounters,1000);

updateCounters();