// เลือกทุก Element ที่มี class reveal
const revealElements =
    document.querySelectorAll(".reveal");


// ฟังก์ชันตรวจสอบตำแหน่งการเลื่อนหน้าจอ
function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint =
            100;


        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active");

        }

    });

}


// ทำงานตอนเลื่อนหน้าจอ
window.addEventListener(
    "scroll",
    revealOnScroll
);


// ทำงานทันทีตอนเปิดเว็บ
revealOnScroll();


// Animation การ์ด Anime
const animeCards =
    document.querySelectorAll(".anime-card");


animeCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 30;

            const rotateY =
                (centerX - x) / 30;


            card.style.transform =
                `translateY(-10px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});
