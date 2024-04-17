const cardRightBox = document.querySelector('.card-right-box');
const cardRight = document.getElementById('card-right');
const heroContainer = document.querySelector('.hero__container');

let toggleLang = false;
document.querySelector('[data-lang-control-box]').addEventListener('click', function (event) {
  if (event.target.closest('[data-lang-button="HY"]')) {
    document.querySelector('[data-lang-title]').textContent = `
    ԱՋԱԿՑԵՔ ՀԱՅԿԱԿԱՆ ՀՈԿԵՅԻ ԼԻԳԱՅԻՆ!
    `
    document.querySelector('[data-lang-text]').innerHTML = `
      2022 թվականի սեպտեմբերից մեր կազմակերպությունը զարգացնում է հոկեյը Հայաստանի Հանրապետությունում.
      <br><br>
      Այս ընթացքում մենք:
      <br><br>
      - վերակենդանացրինք ազգային առաջնությունը և անցկացրինք AHL-ի երկու մրցաշրջան
      <br><br>
      - բացել են հոկեյի մանկական դպրոց, որտեղ սովորում է 3-ից 15 տարեկան 80 երեխա
      <br><br>
      - նրանք բացեցին մեծահասակների հոկեյի դպրոց, որով արդեն անցել է ավելի քան 200 մարդ
      <br><br>
      - վերակենդանացրին Հայաստանի հավաքականը, որը պատրաստվում է 15 տարի անց վերադառնալ աշխարհի առաջնություն
      <br><br>
      - մենք մի քանի խոշոր միջազգային մրցաշարեր ենք անցկացրել աշխարհի լավագույն լիգաների խաղացողների մասնակցությամբ Այս ամենն արվել է մեկ ներդրողի հաշվին, ով գրեթե երկու տարվա ընթացքում, բացի խոստումներից, տեղական իշխանություններից ոչ մի օգնություն կամ աջակցություն չի ստացել.
      <br><br>
      Մեր նպատակները:
      <br><br>
      - սպորտի զարգացում Հայաստանի Հանրապետությունում՝ երեխաներ և մեծահասակներ
      <br><br>
      - Հայաստանի Հանրապետության կանոնավոր ներկայացուցչություն միջազգային սպորտային ասպարեզում (աշխարհի առաջնություն, Օլիմպիական խաղեր)
    `

    document.querySelector('[wrap-data-lang-text]').innerHTML = `
      <p>Ձեր նվիրատվությունները:<br> <span>1 000 000 AMD | 10 000 000 AMD</span></p>
               
    `
    document.querySelector('[wrap-data-lang-text1]').innerHTML = `
      <span>10% հավաքված է</span>
               
    `
    document.querySelector('[data-lang-text-footer-first]').textContent = `
      Գրում ենք հայկական սպորտի և հոկեյի նոր պատմություն.
    `
    document.querySelector('[data-lang-text-footer-second]').textContent = `
      Աջակցեք Հայաստանի հոկեյի լիգային, որպեսզի այն երբեք չավարտվի.
    `
    document.querySelector('[wrap-data-lang-text2]').innerHTML = `
      <p>Մուտքագրեք ցանկալի գումարը</p>
               
    `
    document.querySelector('[wrap-data-lang-text3]').innerHTML = `
      <p>Ձեր գումարը</p>

    `
    document.querySelector('[wrap-data-lang-text4]').innerHTML = `
      <p>Աջակցություն տրամադրելով՝ դուք հաստատում եք, որ կարդացել և համաձայնում եք<br>
                  «Օգտագործողի համաձայնագրի պայմաններին»</p>

    `
    document.querySelector('[us1]').innerHTML = `
      <p>Ձեր նվիրատվությունները:<br> <span>1 000 000 USD | 10 000 000 USD</span></p>
               
    `
    document.querySelector('[us2]').innerHTML = `
      <span>10% հավաքված է</span>
               
    `
    document.querySelector('[us3]').innerHTML = `
      <p>Մուտքագրեք ցանկալի գումարը</p>
               
    `
    document.querySelector('[us4]').innerHTML = `
      <p>Ձեր գումարը</p>

    `
    document.querySelector('[us5]').innerHTML = `
      <p>Աջակցություն տրամադրելով՝ դուք հաստատում եք, որ կարդացել և համաձայնում եք<br>
                  «Օգտագործողի համաձայնագրի պայմաններին»</p>

    `
    document.querySelector('[EUR1]').innerHTML = `
      <p>Ձեր նվիրատվությունները:<br> <span>1 000 000 EUR | 10 000 000 EUR</span></p>
               
    `
    document.querySelector('[EUR2]').innerHTML = `
      <span>10% հավաքված է</span>
               
    `
    document.querySelector('[EUR3]').innerHTML = `
      <p>Մուտքագրեք ցանկալի գումարը</p>
               
    `
    document.querySelector('[EUR4]').innerHTML = `
      <p>Ձեր գումարը</p>

    `
    document.querySelector('[EUR5]').innerHTML = `
      <p>Աջակցություն տրամադրելով՝ դուք հաստատում եք, որ կարդացել և համաձայնում եք  «Օգտագործողի համաձայնագրի պայմաններին»</p>

    `

    document.querySelector('[RUB1]').innerHTML = `
      <p>Ձեր նվիրատվությունները:<br> <span>1 000 000 RUB | 10 000 000 RUB</span></p>
               
    `
    document.querySelector('[RUB2]').innerHTML = `
      <span>10% հավաքված է</span>
               
    `
    document.querySelector('[RUB3]').innerHTML = `
      <p>Մուտքագրեք ցանկալի գումարը</p>
               
    `
    document.querySelector('[RUB4]').innerHTML = `
      <p>Ձեր գումարը</p>

    `
    document.querySelector('[RUB5]').innerHTML = `
      <p>Աջակցություն տրամադրելով՝ դուք հաստատում եք, որ կարդացել և համաձայնում եք  «Օգտագործողի համաձայնագրի պայմաններին»</p>

    `
    document.querySelector('[wrap-data-lang-tex5]').innerHTML = `
      <p>Աջակցություն</p>

    `
  }
  if (event.target.closest('[data-lang-button="EN"]')) {
    document.querySelector('[data-lang-title]').textContent = `
    SUPPORT THE ARMENIAN HOCKEY LEAGUE!
    `
    document.querySelector('[data-lang-text]').innerHTML = `
      Since September 2022, our organization has been engaged in the development of hockey in the Republic of Armenia. 
      During this time we: 
      - revived the national championship and held two AHL seasons
      <br><br>
      - opened a children's hockey school, where 80 children from 3 to 15 years old are engaged in hockey 
      <br><br>
      - opened an adult hockey school, through which more than 200 people have already passed
      <br><br>
      - revitalized the Armenian national team, which is preparing to return to the World Championship after 15 years
      <br><br>
      - organized several major international tournaments with the participation of players from the best leagues of the world
      All this was done on the funds of one investor, who for almost two years, except for promises, did not receive any help and support from the local authorities. 
      Our goals: 
      - development of sports in the Republic of Armenia: children's and adult sports
      <br><br>
      - Regular representation of the Republic of Armenia in the international sports arena (World Championships, Olympic Games)
    `
    document.querySelector('[wrap-data-lang-text1]').innerHTML = `
      <span>10% collected</span>
               
    `
    document.querySelector('[wrap-data-lang-text2]').innerHTML = `
      <p>Select the amount of support</p>
               
    `
    document.querySelector('[wrap-data-lang-text]').innerHTML = `
      <p>Your donations:<br> <span>1 000 000 AMD from 10 000 000 AMD</span></p>

               
    `
    document.querySelector('[data-lang-text-footer-first]').textContent = `
      We are writing a new history of Armenian sport and hockey. 
    `
    document.querySelector('[data-lang-text-footer-second]').textContent = `
      Support the Armenian Hockey League so that it never ends.
    `

    document.querySelector('[wrap-data-lang-text3]').innerHTML = `
      <p>Your amount</p>

    `

    document.querySelector('[wrap-data-lang-text4]').innerHTML = `
      <p>By providing support you acknowledge that you have read and agree to the terms of the "User Agreement"</p>

    `
    document.querySelector('[us1]').innerHTML = `
      <p>Your donations:<br> <span>1 000 000 USD from 10 000 000 USD</span></p>
               
    `
    document.querySelector('[us2]').innerHTML = `
      <span>10% collected</span>
               
    `
    document.querySelector('[us3]').innerHTML = `
      <p>Select the amount of support</p>
               
    `
    document.querySelector('[us4]').innerHTML = `
      <p>Your amount</p>

    `
    document.querySelector('[us5]').innerHTML = `
      <p>By providing support you acknowledge that you have read and agree to the terms of the "User Agreement"</p>

    `
    document.querySelector('[EUR1]').innerHTML = `
      <p>Your donations:<br> <span>1 000 000 EUR from 10 000 000 EUR</span></p>
               
    `
    document.querySelector('[EUR2]').innerHTML = `
      <span>10% collected</span>
               
    `
    document.querySelector('[EUR3]').innerHTML = `
      <p>Select the amount of support</p>
               
    `
    document.querySelector('[EUR4]').innerHTML = `
      <p>Your amount</p>

    `
    document.querySelector('[EUR5]').innerHTML = `
      <p>By providing support you acknowledge that you have read and agree to the terms of the "User Agreement"</p>

    `
    document.querySelector('[RUB1]').innerHTML = `
      <p>Your donations:<br> <span>1 000 000 RUB from 10 000 000 RUB</span></p>
               
    `
    document.querySelector('[RUB2]').innerHTML = `
      <span>10% collected</span>
               
    `
    document.querySelector('[RUB3]').innerHTML = `
      <p>Select the amount of support</p>
               
    `
    document.querySelector('[RUB4]').innerHTML = `
      <p>Your amount</p>

    `
    document.querySelector('[RUB5]').innerHTML = `
      <p>By providing support you acknowledge that you have read and agree to the terms of the "User Agreement"</p>

    `
    document.querySelector('[wrap-data-lang-tex5]').innerHTML = `
      <p>Support</p>

    `
  }
  if (event.target.closest('[data-lang-button="RU"]')) {
    document.querySelector('[data-lang-title]').textContent = `
      ПОДДЕРЖИ АРМЯНСКУЮ ХОККЕЙНУЮ ЛИГУ!
    `
    document.querySelector('[wrap-data-lang-text]').innerHTML = `
      <p>Ваши донаты:<br> <span>1 000 000 AMD из 10 000 000 AMD</span></p>
               
    `
    document.querySelector('[wrap-data-lang-text3]').innerHTML = `
      <p>Your amount</p>
               
    `
    document.querySelector('[data-lang-text]').innerHTML = `
      С сентября 2022 года наша организация занимается развитием хоккея в Республике Армения. 
      За это время мы:
      - возродили национальный чемпионат и провели два сезона АХЛ
      <br><br>
      - открыли детскую школу хоккея, в которой занимаются 80 детей от 3 до 15 лет
      <br><br>
      - открыли взрослую школу хоккея, через которую прошли уже более 200 человек
      <br><br>
      - возродили национальную сборную Армении, которая готовится к возвращению на чемпионат мира спустя 15 лет
      <br><br>
      - провели несколько крупных международных турниров с участием игроков из лучших лиг мира
      Все это было сделано на средства одного инвестора, который за почти два года, кроме обещаний, не получил никакой помощи и поддержки от местных властей. 
      Наши цели:
      - развитие спорта в Республике Армения: детского и взрослого
      <br><br>
      - регулярное представительство Республики Армения на межуднародной спортивной арене (чемпионат мира, Олимпийские игры)
    `
    document.querySelector('[data-lang-text-footer-first]').textContent = `
      Мы пишем новую историю армянского спорта и хоккея.
    `
    document.querySelector('[data-lang-text-footer-second]').textContent = `
      Поддержите Армянскую хоккейную лигу, чтобы она никогда не заканчивалась.
    `
    document.querySelector('[wrap-data-lang-text1]').innerHTML = `
      <span>10% собрано</span>
    `
    document.querySelector('[wrap-data-lang-text2]').innerHTML = `
      <p>Введите желаемую сумму</p>
    `

    document.querySelector('[wrap-data-lang-text3]').innerHTML = `
      <p>Ваша сумма</p>
    `
    document.querySelector('[wrap-data-lang-text4]').innerHTML = `
      <p>Оказывая поддержку вы подтверждаете, что ознакомились и соглашаетесь с условиями «Пользовательского Соглашения»"</p>
    `
    document.querySelector('[us1]').innerHTML = `
      <p>Ваши донаты:<br> <span>1 000 000 USD из 10 000 000 USD</span></p>
    `
    document.querySelector('[us2]').innerHTML = `
      <span>10% собрано</span>
    `
    document.querySelector('[us3]').innerHTML = `
      <p>Введите желаемую сумму</p>
    `
    document.querySelector('[us4]').innerHTML = `
      <p>Ваша сумма</p>
    `
    document.querySelector('[us5]').innerHTML = `
      <p>Оказывая поддержку вы подтверждаете, что ознакомились и соглашаетесь с условиями «Пользовательского Соглашения»</p>

    `
    document.querySelector('[EUR1]').innerHTML = `
      <p>Ваши донаты:<br> <span>1 000 000 EUR из 10 000 000 EUR</span></p>
    `
    document.querySelector('[EUR2]').innerHTML = `
      <span>10% собрано</span>
    `
    document.querySelector('[EUR3]').innerHTML = `
      <p>Введите желаемую сумму</p>
    `
    document.querySelector('[EUR4]').innerHTML = `
      <p>Ваша сумма</p>
    `
    document.querySelector('[EUR5]').innerHTML = `
      <p>Оказывая поддержку вы подтверждаете, что ознакомились и соглашаетесь с условиями «Пользовательского Соглашения»</p>
    `
    document.querySelector('[RUB1]').innerHTML = `
      <p>Ваши донаты:<br> <span>1 000 000 RUB из 10 000 000 RUB</span></p>
    `
    document.querySelector('[RUB2]').innerHTML = `
      <span>10% собрано</span>
    `
    document.querySelector('[RUB3]').innerHTML = `
      <p>Введите желаемую сумму</p>
    `
    document.querySelector('[RUB4]').innerHTML = `
      <p>Ваша сумма</p>
    `
    document.querySelector('[RUB5]').innerHTML = `
      <p>Оказывая поддержку вы подтверждаете, что ознакомились и соглашаетесь с условиями «Пользовательского Соглашения»</p>
    `
    document.querySelector('[wrap-data-lang-tex5]').innerHTML = `
      <p>Поддержка</p>
    `
  }
})

const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.contentRect.width < 1020) {
      cardRightBox.appendChild(cardRight);
    } else {
      heroContainer.appendChild(cardRight);
    }
  })
})

resizeObserver.observe(document.documentElement)



function amd() {
  resetTabs();
  document.getElementById("amds").classList.add("tab-active");
}

function usd() {
  resetTabs();
  document.getElementById("usds").classList.add("tab-active");
}

function eur() {
  resetTabs();
  document.getElementById("eurs").classList.add("tab-active");
}

function rub() {
  resetTabs();
  document.getElementById("rubs").classList.add("tab-active");
}

function resetTabs() {
  var tabs = document.querySelectorAll(".tab-item");
  tabs.forEach(function (tab) {
    tab.classList.remove("tab-active");
  });
}