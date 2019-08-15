// select all elements
const start = document.getElementById("start");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "Câu 1: Màn hình máy tính được kết nối với Mainboad thông qua cổng nào sau đây?",
        choiceA : "A. Console",
        choiceB : "B. VGA",
        choiceC : "C. USB",
        choiceD : "D. COM",
        correct : "B"
    },{
        question : "Câu 2: Có thể sử dụng những cổng nào dưới đây để kết nối giữa máy tính và máy in?",
        choiceA : "A. USB",
        choiceB : "B. PS/2",
        choiceC : "C. Parallel",
        choiceD : "D. Cả A và C",
        correct : "D"
    },{
        question : "Câu 3: Mục nào sau đây trong Windows 8.1 dùng để kiểm tra các thiết bị đã được cài đặt Driver hay chưa?",
        choiceA : "A. System Information",
        choiceB : "B. Device Manager",
        choiceC : "C. System Configuration Utility",
        choiceD : "D. Registry Editor",
        correct : "B"
    },{
        question : "Câu 4: Trong Device Manager có thể nhận biết các thiết bị chưa cài đặt Driver tại mục?",
        choiceA : "A. Monitors",
        choiceB : "B. Other Devices",
        choiceC : "C. System Devices",
        choiceD : "D. Computer",
        correct : "B"
    },{
        question : "Câu 5: Cổng PS/2 có màu xanh lá được kết nối với thiết bị nào sau đây?",
        choiceA : "A. Chuột",
        choiceB : "B. Scanner",
        choiceC : "C. Bàn phím",
        choiceD : "D. Modem",
        correct : "A"
    },{
        question : "Câu 6: Khi khởi động máy tính, loa tín hiệu phát ra tiếng beep dài liên tục, lỗi do thiết bị nào sau đây?",
        choiceA : "A. Mainboard",
        choiceB : "B. CPU",
        choiceC : "C. VGA Card",
        choiceD : "d. RAM",
        correct : "D"
    },{
        question : "Câu 7: Màn hình được kết nối với máy tính thông qua cổng nào sau đây?",
        choiceA : "A. LPT",
        choiceB : "B. VGA",
        choiceC : "C. Firewire",
        choiceD : "D. COM",
        correct : "B"
    },{
        question : "Câu 8: Thuật ngữ “RAM” là từ viết tắt của cụm từ?",
        choiceA : "A. Read Access Memorys",
        choiceB : "B. Recent Access Memory",
        choiceC : "C. Random Access Memory",
        choiceD : "D. Read And Modify",
        correct : "C"
    },{
        question : "Câu 9: Bộ nhớ đệm bên trong CPU được gọi là?",
        choiceA : "A. ROM",
        choiceB : "B. DRAM",
        choiceC : "C. Cache",
        choiceD : "D. Buffer",
        correct : "C"
    },{
        question : "Câu 10: Khi lựa chọn cấu hình cho máy tính, thiết bị cần quan tâm đầu tiên là?",
        choiceA : "A. CPU",
        choiceB : "B. RAM",
        choiceC : "C. Mainboard",
        choiceD : "D. Monitor",
        correct : "C"
    },{
        question : "Câu 11: DVD Combo có các chức năng nào sau đây?",
        choiceA : "A. Đọc, ghi đĩa CD",
        choiceB : "B. Đọc, ghi đĩa DVD",
        choiceC : "C. Đọc đĩa CD, DVD và ghi đĩa CD",
        choiceD : "D. Đọc đĩa CD, DVD và ghi đĩa DVD",
        correct : "C"
    },{
        question : "Câu 12: Những thiết bị nào sau đây được xếp vào nhóm thiết bị nội vi?",
        choiceA : "A. Mainboard, CPU, CD-ROM Drive, Mouse",
        choiceB : "B. Mainboard, CPU, CD-ROM Drive, RAM",
        choiceC : "C. HDD, CD- ROM Drive, FDD, Keyboard",
        choiceD : "D. Monitor, Keyboard, Mouse, Scanner",
        correct : "B"
    },{
        question : "Câu 13: Cổng DVI dùng để kết nối với thiết bị nào sau đây?",
        choiceA : "a. Printer",
        choiceB : "b. Scanner",
        choiceC : "c. Monitor",
        choiceD : "d. Fax",
        correct : "C"
    },{
        question : "Câu 14: Công nghệ Dual Graphics được ứng dụng cho thiết bị nào sau đây?",
        choiceA : "a. Processor",
        choiceB : "b. Memory",
        choiceC : "c. Mainboard",
        choiceD : "d. VGA Card",
        correct : "D"
    },{
        question : "Câu 15: Trong quá trình làm việc các chương trình sẽ được nạp tạm thời vào thiết bị nào của máy tính?",
        choiceA : "A. RAM",
        choiceB : "B. HDD",
        choiceC : "C. CPU",
        choiceD : "D. ROM-BIOS",
        correct : "A"    
    },{
        question : "Câu 16: Bộ phận nào được xem như bộ não của máy tính?",
        choiceA : "A. CPU",
        choiceB : "B. RAM",
        choiceC : "C. ROM-BIOS",
        choiceD : "D. HDD",
        correct : "A"    
    },{
        question : "Câu 17: Câu nàu sau đây là đúng khi nói về RAM và ROM",
        choiceA : "A. RAM là bộ nhớ lưu trữ tạm thời (mất điện sẽ mất dữ liệu trên RAM)",
        choiceB : "B. ROM là bộ nhớ lưu trữ tạm thời (mất điện sẽ mất dữ liệu trên ROM)",
        choiceC : "C. RAM là bộ nhớ lưu trữ lâu dài",
        choiceD : "D. ROM là Random Only Memory",
        correct : "A"    
    },{
        question : "Câu 18: Chuẩn kết nối phổ biến nhất cho chuột và bàn phím là?",
        choiceA : "A. Firmware",
        choiceB : "B. Serial",
        choiceC : "C. PS/2 và USB",
        choiceD : "D. Parallel",
        correct : "C"       
    },{
        question : "Câu 19: Con người làm việc với máy tính thông qua ",
        choiceA : "A. Hệ điều hành",
        choiceB : "B. Đĩa cứng",
        choiceC : "C. Ổ đĩa Quang",
        choiceD : "D. RAM",
        correct : "A"
    },{
        question : "Câu 20: Người sử dụng vừa mua một máy in mới, máy in này được kết nối với máy tính dùng Hệ điều hành Windows 7 bằng cáp USB, máy tính thông báo đã nhận được một thiết bị mới nhưng máy in vẫn không hoạt động. Nguyên nhân chính là do?",
        choiceA : "A. Kết nối máy in qua cổng USB chuẩn 1.1 thay vì dùng cổng USB chuẩn 2.0",
        choiceB : "B. Chưa cài đặt driver cho máy in",
        choiceC : "C. Có một máy in đã tồn tại",
        choiceD : "D. Không có quyền để cài đặt một máy in mới trong hệ điều hành Windows 7",
        correct : "B"
    },{
        question : "Câu 21: Hệ điều hành mã nguồn mở thông dụng nhất hiện nay là?",
        choiceA : "A. Mac",
        choiceB : "B. Windows Vista",
        choiceC : "C. Windows XP",
        choiceD : "D. Linux",
        correct : "D"
    },{
        question : "Câu 22: Tại Việt Nam người dùng sử dụng công cụ tìm kiếm trên Internet nào phổ biến nhất hiện nay?",
        choiceA : "A. ping",
        choiceB : "B. Google",
        choiceC : "C. yahoo",
        choiceD : "D. ask",
        correct : "B"
    },{
        question : "Câu 23: Trên ổ cứng HDD có ghi : 1T 7200rpm , vậy rpm là gì ?",
        choiceA : "A. Round Per Minute",
        choiceB : "B. Read Per Minute",
        choiceC : "C. Revolutions Per Minute",
        choiceD : "D. Round Per Munites",
        correct : "C"
    },{
        question : "Câu 24: Ứng dụng nào sau đây có thể đọc các File trên Windows với phần đuôi mở rộng là PDF?",
        choiceA : "A. Acrobat Reader",
        choiceB : "B. Foxit Reader",
        choiceC : "C. Microsoft Office PowerPoint",
        choiceD : "D. A và B",
        correct : "D"
    },{
        question : "Câu 25: Trong HĐH Windows khi muốn xóa hẳn File hoặc Folder ta nhấn tổ hợp phím nào?",
        choiceA : "A. Shift+Del",
        choiceB : "B. Alt+Del",
        choiceC : "C. Ctrl+Del",
        choiceD : "D. Cả 3 câu đều sai",
        correct : "A"
    },{
        question : "Câu 26: Cổng PS/2 có màu tím được dùng để kết nối với thiết bị nào sau đây?",
        choiceA : "A. Mouse",
        choiceB : "B. Scanner",
        choiceC : "C. Keyboard",
        choiceD : "D. Modem",
        correct : "C" 
    },{
        question : "Câu 27: Chuột không dây sử dụng công nghệ nào để kết nối tín hiệu với máy tính?",
        choiceA : "A. Infrared",
        choiceB : "B. Bluetooth",
        choiceC : "C. WiFi",
        choiceD : "D. WiMax",
        correct : "B"
    },{
        question : "Câu 28: Sau khi cài đặt hoàn tất driver, hệ thống bị lỗi “dump” (màn hình xanh) là do?",
        choiceA : "A. Hệ điều hành bị lỗi",
        choiceB : "B. Driver bị mất file",
        choiceC : "C. Driver không phù hợp",
        choiceD : "D. Vi xử lý bị lỗi",
        correct : "C"
    },{
        question : "Câu 29: Trong Hệ điều hành Windows XP có thể tiến hành phân chia đĩa cứng bằng chương trình nào?",
        choiceA : "A. Device Manager",
        choiceB : "B. Disk Management",
        choiceC : "C. Disk Defragmenter",
        choiceD : "D. Disk Cleanup",
        correct : "B"
    },{
        question : "Câu 30: Muốn cài đặt Hệ điều hành Windows Vista thì phân vùng cài đặt phải được định dạng theo hệ thống tập tin?",
        choiceA : "A. FAT32",
        choiceB : "B. HPFS",
        choiceC : "C. NTFS",
        choiceD : "D. EXT3",
        correct : "C"
    },{
        question : "Câu 31: Trong Windows 7, cách nào sau đây không thể mở Task Manager?",
        choiceA : "A. Nhấn tổ hợp phím: Ctrl, Alt, Del",
        choiceB : "B. Nhấn tổ hợp phím: Ctrl, Shift, Esc",
        choiceC : "C. Click chuột phải vào thanh Taskbar chọn TaskManager",
        choiceD : "D. Chạy lệnh “taskmanager” trong hộp thoại Run",
        correct : "D"
    },{
        question : "Câu 32: Phiên bản nào của hệ điều hành Windows sau đây cho phép người dùng nâng cấp trực tiếp lên phiên bản Windows 7?",
        choiceA : "A. Windows XP",
        choiceB : "B. Windows Vista",
        choiceC : "C. Windows 2000",
        choiceD : "D. Windows 98",
        correct : "B"
    },{
        question : "Câu 33: Thiết bị nào sau đây có tốc độ truy xuất dữ liệu nhanh nhất?",
        choiceA : "A. Flash memory",
        choiceB : "B. RAM",
        choiceC : "C. HDD",
        choiceD : "D. CD-ROM drive",
        correct : "B"
    },{
        question : "Câu 34: Trong hệ điều hành Windows XP, tiện ích nào sau đây dùng để xóa những tập tin tạm trên ổ cứng?",
        choiceA : "A. Disk Cleanup",
        choiceB : "B. Disk Management",
        choiceC : "C. Scandisk",
        choiceD : "D. Disk Defragmenter",
        correct : "A"
    },{
        question : "Câu 35. Nguyên nhân nào dưới đây có thể gây ra cháy RAM?",
        choiceA : "A. Điện áp quá cao",
        choiceB : "B. Gắn RAM không đồng bộ với mainboard",
        choiceC : "C. Tháo lắp RAM khi nguồn đang hoạt động",
        choiceD : "D. RAM có bus lớn hơn FSB của mainboard",
        correct : "C"
    },{
        question : "Câu 36: Microsoft Office thuộc :",
        choiceA : "A. Phần mềm hệ thống",
        choiceB : "B. Phần mềm ứng dụng",
        choiceC : "C. Phần mềm nghe nhạc",
        choiceD : "D. Phần mềm giải trí",
        correct : "B"
    },{
        question : "Câu 38: Điều nào sau đây không phải ưu điểm của hệ điều hành Mã Nguồn Mở ? ",
        choiceA : "A. Miễn phí",
        choiceB : "B. Được phát triển bởi cộng đồng người dùng hệ điều hành mã nguồn mở",
        choiceC : "C. Không yêu cầu cấu hình phần cứng quá lớn",
        choiceD : "D. Thân thiện như windows",
        correct : "D"
    },{
        question : "Câu 39: Trong Windows 7 sử dụng tổ hợp phím tắt nào để trở về màn hình Desktop?",
        choiceA : "A. Ctrl+D",
        choiceB : "B. Alt+F5",
        choiceC : "C. Ctrl+Z",
        choiceD : "D. Phím cửa sổ Windows + D",
        correct : "D"
    },{
        question : "Câu 40: Trong các phiên bản sau đây, đâu là phiên bản của Microsoft Office?",
        choiceA : "A. Microsoft Office 2007",
        choiceB : "B. Microsoft Office 2010",
        choiceC : "C. Microsoft Office 2013",
        choiceD : "D. Cả 3 đáp án đều đúng",
        correct : "D"
    },{
        question : "Câu 42: Trong HĐH Windows 7 tổ hợp phím tắt nào sau đây được sử dụng để hiển thị Windows Task Manager?",
        choiceA : "A. Ctrl+Shift+Esc ",
        choiceB : "B. Ctrl+Alt+Del",
        choiceC : "C. Alt+F4",
        choiceD : "D. Shift+Del",
        correct : "A"
    },{
        question : "Câu 44: WWW là những chữ cái viết tắt của cụm từ nào sau đây?",
        choiceA : "A. Work Why Wait",
        choiceB : "B. World Wide Web",
        choiceC : "C. What We Went",
        choiceD : "D. Where We When",
        correct : "B"
    },{
        question : "Câu 45: Đường truyền nào sau đây có tốc độ tốt nhất?",
        choiceA : "A. Cáp quang",
        choiceB : "B. ADSL",
        choiceC : "C. Dial-up",
        choiceD : "D. ISDN",
        correct : "A"
    },{
        question : "Câu 46: Windows 10 được Microsoft chính thức phát hành vào ngày tháng năm nào?",
        choiceA : "A. 29/06/2015",
        choiceB : "B. 29/06/2016",
        choiceC : "C. 29/07/2015",
        choiceD : "D. 29/07/2016",
        correct : "C"
    },{
        question : "Câu 47: Trong cửa sổ Command-Line lệnh “ping 8.8.8.8” dùng để làm gì?",
        choiceA : "A. Kiểm tra băng thông đường truyền",
        choiceB : "B. Kiểm tra kết nối ra ngoài Internet",
        choiceC : "C. Xóa Cache",
        choiceD : "D. Chia sẻ tài nguyên",
        correct : "B"
    },{
        question : "Câu 48: Hệ thống tập tin NTFS là từ viết tắt của cụm từ?",
        choiceA : "A. New Technology File Standard",
        choiceB : "B. News Television Fill System",
        choiceC : "C. New Technology File System",
        choiceD : "D. Network Type File System",
        correct : "C"
    },{
        question : "Câu 49: Trong các phần mềm dưới đây, phần mềm nào được dung để nghe nhạc?",
        choiceA : "A. VMware",
        choiceB : "B. JetAudio",
        choiceC : "C. Edraw Max",
        choiceD : "D. Unikey",
        correct : "B"   
    },{
        question : "Câu 50: Tiện ích Contana có sẵn trên Hệ điều hành nào?",
        choiceA : "A. Windows 7",
        choiceB : "B. Windows 8",
        choiceC : "C. Windows XP",
        choiceD : "D. Windows 10",
        correct : "D"  
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    thieu.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();

    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}   

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    document.getElementById("refreshpage").style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(score);
    
    // choose the image based on the scorePerCent
    scoreDiv.innerHTML += "<p>Có  "+ scorePerCent +"/47 Câu đúng </p>";
}





















