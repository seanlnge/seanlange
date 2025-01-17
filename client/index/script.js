let lastKnownScrollY = 0;
let ticking = false;

const updateAnimation = () => {
    const scrollY = lastKnownScrollY;

    if (scrollY < 850) {
        const val = (scrollY / window.innerHeight) * 50 - 10;
        document.getElementsByClassName("top")[0].style.top = val + "vh";
    }

    if (scrollY < 350) {
        const val = Math.min((scrollY / window.innerHeight) * 250 - 80, 0);
        document.getElementsByClassName("navigation")[0].style.top = val + "px";
    }

    ticking = false;
};

const onScroll = () => {
    lastKnownScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(updateAnimation);
        ticking = true;
    }
};

window.addEventListener("scroll", onScroll);

window.scrollTo(0, 0);
document.getElementsByClassName("navigation")[0].style.top = "-80px";
document.getElementsByClassName("top")[0].style.top = "-10vh";


const rs = new Renderspice('rsc');
rs.camera.x = 0;
rs.camera.y = 0;

rs.camera.w = 50 * Math.sqrt(rs.aspectRatio);
rs.camera.h = 50 / Math.sqrt(rs.aspectRatio);
rs.camera.background = "#0000";

const side = rs.aspectRatio > 1
    ? rs.camera.w / 25
    : rs.camera.h / 8;
const huePeriodSeconds = 40;
const hueOffsetSeconds = 30;
const huePeriodAmplitude = 30;
const huePeriodBase = 300;

const hue = () => {
    const angle = 2 * Math.PI * (rs.totalTime / 1000 + hueOffsetSeconds) / huePeriodSeconds;
    return huePeriodBase + Math.sin(angle) * huePeriodAmplitude;
}
const lig = () => Math.floor(Math.random() * 20 + 50);

let baseSpeed = 3;
const speed = () => baseSpeed * (Math.random() - 2);

const makeBox = (top) => {
    let box = rs.box(
        Math.random() * rs.camera.w - rs.camera.w / 2,
        top
            ? rs.camera.h / 2 + side / 2
            : Math.random() * rs.camera.h - rs.camera.h / 2 + side / 2,
        side,
        side
    );

    box.fill = true;
    box.fillColor = `hsl(${hue()} 100% ${lig()}%)`;
    box.lineColor = box.fillColor;
    box.rotate(Math.random() * 2 * Math.PI);
    box.velocity.y = speed();
}

rs.preRender = () => {
    rs.objects.filter(x => x.y < -rs.camera.h / 2 - side).forEach(x => {
        x.destroy();
        makeBox(true);
    });
}

for (let i = 0; i < (rs.aspectRatio > 1 ? 200 : 50); i++) makeBox();

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function drawScreen() {
    for (let i = 0; i < 200; i++) {
        rs.lastFrame = Date.now() - 45;
        rs.render();
    }
    if(rs.aspectRatio > 1) rs.renderLoop();

    await sleep(300);
    console.log('hello')
    document.querySelector(".nameBox").classList.add("fadein");

    await sleep(700);
    document.querySelector(".saying").classList.add("fadein");

    await sleep(700);
    document.querySelector(".buttonline1").classList.add("fadein");
    document.querySelector(".links").classList.add("fadein");

    await sleep(200);
    document.querySelector(".buttonline2").classList.add("fadein");

    await sleep(200);
    document.querySelector(".buttonline3").classList.add("fadein");
    

    rs.objects.forEach(x => x.velocity.y /= baseSpeed);
    baseSpeed = 1;

    await sleep(100);
    document.querySelector(".fade").classList.add("fadeout")
}
drawScreen();