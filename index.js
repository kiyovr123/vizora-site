document.addEventListener("DOMContentLoaded", () => {
    const serviceTitle = document.querySelector(".service-title");
    const serviceItems = document.querySelectorAll(".service-item");

    function animateOnScroll() {
        // タイトルのアニメーション
        const titleRect = serviceTitle.getBoundingClientRect();
        if (titleRect.top < window.innerHeight * 0.9 && !serviceTitle.classList.contains("fade-in-up")) {
            serviceTitle.classList.add("fade-in-up");
        }

        // 各サービス項目のアニメーション
        serviceItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9 && !item.classList.contains("fade-in-left")) {
                item.classList.add("fade-in-left");
            }
        });
    }

    // スクロール時にのみアニメーションを発火
    window.addEventListener("scroll", animateOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const part1 = document.getElementById("part1");
    const highlight = document.getElementById("highlight");
    const part2 = document.getElementById("part2");
    const fadeInText = document.querySelector("#top p");
    const fadeInText2 = document.querySelector("#top h1");

    const text1 = "Crafting";
    const textHighlight = "Lifestyle";
    const text2 = "with Technology.";

    // 初期状態でテキストを空にし、フェードイン対象を非表示にする
    part1.textContent = "";
    highlight.textContent = "";
    part2.textContent = "";
    fadeInText.classList.add("fade-in-target");
    fadeInText2.classList.add("fade-in-target");

    let index = 0;

    // 各部分を1文字ずつ表示する関数
    function typeWriter(element, text, callback) {
        index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, 100); // 各文字の表示間隔
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // 順番に各部分を表示し、最後にフェードインを実行
    typeWriter(part1, text1, () => {
        typeWriter(highlight, textHighlight, () => {
            typeWriter(part2, text2, () => {
                fadeInText.classList.add("fade-in"); // タイプライター終了後にフェードイン
                fadeInText2.classList.add("fade-in");
            });
        });
    });
});
