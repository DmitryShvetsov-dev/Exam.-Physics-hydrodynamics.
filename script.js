function start() {
  let startbtn = document.getElementById("start");
  let question1 = document.getElementById("question1");
  let question2 = document.getElementById("question2");
  let question3 = document.getElementById("question3");
  let question4 = document.getElementById("question4");
  let button = document.getElementById("button");
  button.style.display = "block";
  question1.style.display = "flex";
  question2.style.display = "flex";
  question3.style.display = "flex";
  question4.style.display = "flex";
  startbtn.style.display = "none";
  question1change();
  question2change();
  question3change();
  question4change();
}
function confirm() {
  let answer1 = document.getElementById("answerInput1").value;
  let answer2 = document.getElementById("answerInput2").value;
  let answer3_1 = document.getElementById("answerInput3_1").value;
  let answer3_2 = document.getElementById("answerInput3_2").value;
  let answer4_1 = document.getElementById("answerInput4_1").value;
  let answer4_2 = document.getElementById("answerInput4_2").value;
  question1InputCheck(answer1);
  question2InputCheck(answer2);
  question3InputCheck(answer3_1, answer3_2);
  question4InputCheck(answer4_1, answer4_2);
}
function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let ro = randomizer(900, 1100);
let error1counter = 0;
let error2counter = 0;
let error3counter = 0;
let error4counter = 0;
function question1change() {
  let question = document.getElementById("questionText1");
  let qtext = `Вариант 1. Определить силу давления на плоский прямоугольный затвор и центр давления. Глубина жидкости в верхнем бьефе 3 метра, в нижнем - 1.2м. Ширина затвора 4м. ρ=${ro}кг/м3`;
  question.innerHTML = qtext;
}
function question2change() {
  let question = document.getElementById("questionText2");
  let qtext = `Вариант 2. Вход в тоннель перекрыт квадратным затвором размером 3 X 3 X 0.8. Глубина жидкости над верхней кромкой затвора h=1.4м, а глубина в тоннеле h2=1.8м. Определить равнодействующую силу давления. ρ=${ro}кг/м3`;
  question.innerHTML = qtext;
}
function question3change() {
  let question = document.getElementById("questionText3");
  let qtext = `Вариант 3. Горизонтальный цилиндрический резервуар длиной L=2м, днища которого представляют собой полусферы радиусом R=1.2м, заполнен жидкостью под давлением. Манометр показывает избыточное давление Pм=0.2атм. Вычислить усилия, разрывающие резервуар по сечению А-А, и усилия, отрывающие днища резервуара (сечение Б-Б). ρ=${ro}кг/м3`;
  question.innerHTML = qtext;
}
function question4change() {
  let question = document.getElementById("questionText4");
  let qtext = `Вариант 4. Смотровой люк, устроенный в боковой стенке резервуара, перекрывается полусферической крышкой радиусом R=0.3м. Определить отрывающее и сдвигающее усилия, воспринимаемые болтами крышки, если уровень жидкости над центром отверстия h=2м, а манометрическое давление паров жидкости p0=4120Па. ρ=${ro}кг/м3`;
  question.innerHTML = qtext;
}
function question1InputCheck(num) {
  let inputDelete = document.getElementById("answerInput1");
  let divColorChange = document.getElementById("question1");
  if (error1counter < 3) {
    let answer =
      (100000 + ro * 9.8 * 1.5) * 12 -
      (100000 + ro * 9.8 * (1.2 / 2)) * 4 * 1.2;
    console.log(`Ответ 1:${answer}`);
    if (num == answer) {
      divColorChange.style.backgroundColor = "#AEF359";
      inputDelete.style.display = "none";
    }
    if (num != answer) {
      error1counter++;
    }
  } else {
    divColorChange.style.backgroundColor = "#FF4122";
    inputDelete.style.display = "none";
  }
}

function question2InputCheck(num) {
  let inputDelete = document.getElementById("answerInput2");
  let divColorChange = document.getElementById("question2");
  if (error2counter < 3) {
    let answer = Math.abs(
      (100000 + ro * 9.8 * (1.8 / 2)) * 9 - (100000 + ro * 9.8 * (3.2 / 2)) * 9
    );
    console.log(`Ответ 2:${answer}`);
    if (num == answer) {
      divColorChange.style.backgroundColor = "#AEF359";
      inputDelete.style.display = "none";
    }
    if (num != answer) {
      error2counter++;
    }
  } else {
    divColorChange.style.backgroundColor = "#FF4122";
    inputDelete.style.display = "none";
  }
}
function question3InputCheck(num, num1) {
  let input1Delete = document.getElementById("answerInput3_1");
  let input2Delete = document.getElementById("answerInput3_2");
  let divColorChange = document.getElementById("question3");
  if (error3counter <= 4) {
    let checker = question3_1InputCheck(num);
    let checker2 = question3_2InputCheck(num1);
    if (checker && checker2) {
      divColorChange.style.backgroundColor = "#AEF359";
      input1Delete.style.display = "none";
      input2Delete.style.display = "none";
    }
  } else {
    divColorChange.style.backgroundColor = "#FF4122";
    input1Delete.style.display = "none";
    input2Delete.style.display = "none";
  }
}
function question3_1InputCheck(num) {
  let answer = (20265 + 9.8 * ro * 1.2) * 4.5216;
  console.log(`Ответ 3 а-а:${answer}`);
  if (num == answer) {
    return true;
  }
  if (num != answer) {
    error3counter++;
  }
}
function question3_2InputCheck(num) {
  let answer = ro * 9.8 * 14.4691;
  console.log(`Ответ 3 б-б:${answer}`);
  if (num == answer) {
    return true;
  }
  if (num != answer) {
    error3counter++;
  }
}

function question4InputCheck(num, num1) {
  let input1Delete = document.getElementById("answerInput4_1");
  let input2Delete = document.getElementById("answerInput4_2");
  let divColorChange = document.getElementById("question4");
  if (error4counter <= 4) {
    let checker = question4_1InputCheck(num);
    let checker2 = question4_2InputCheck(num1);
    if (checker && checker2) {
      divColorChange.style.backgroundColor = "#AEF359";
      input1Delete.style.display = "none";
      input2Delete.style.display = "none";
    }
  } else {
    divColorChange.style.backgroundColor = "#FF4122";
    input1Delete.style.display = "none";
    input2Delete.style.display = "none";
  }
}
function question4_1InputCheck(num) {
  let answer = (4120 + ro * 9.8 * 2) * (3.14 / 4) * 0.6 * 0.6;
  console.log(`Ответ 4 отрыващее:${answer}`);
  if (num == answer) {
    return true;
  }
  if (num != answer) {
    error4counter++;
  }
}
function question4_2InputCheck(num) {
  let answer = ro * 9.8 * (3.14 / 12) * 0.6 * 0.6 * 0.6;
  console.log(`Ответ 4 сдвигающее:${answer}`);
  if (num == answer) {
    return true;
  }
  if (num != answer) {
    error4counter++;
  }
}
