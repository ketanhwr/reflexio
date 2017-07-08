function levelSelect() {
    var colorCheck;
    runtime1++;
    var mark = false;
    gameArena.clearRect(0, 0, width, height);
    drawMovingSpace();
    gameArena.shadowBlur = 20;
    gameArena.shadowColor = "#18CAE6";
    gameArena.font = "70px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("Levels", midx, midy / 3);

    //Rajdeep
    if (mousex >= 255 * (width / 1220) && mousex <= 345 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(255 * (width / 1220), midy - 100 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("1", 300 * (width / 1220), midy - 40 * (width / 1220));

    if (mousex >= 375 * (width / 1220) && mousex <= 465 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(375 * (width / 1220), midy - 100 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("2", 420 * (width / 1220), midy - 40 * (width / 1220));

    if (mousex >= 495 * (width / 1220) && mousex <= 585 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(495 * (width / 1220), midy - 100 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("3", 540 * (width / 1220), midy - 40 * (width / 1220));

    if (mousex >= 615 * (width / 1220) && mousex <= 705 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(615 * (width / 1220), midy - 100 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("4", 660 * (width / 1220), midy - 40 * (width / 1220));

    if (mousex >= 735 * (width / 1220) && mousex <= 825 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(735 * (width / 1220), midy - 100 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("5", 780 * (width / 1220), midy - 40 * (width / 1220));

    if (mousex >= 855 * (width / 1220) && mousex <= 945 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(855 * (width / 1220), midy - 100 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("6", 900 * (width / 1220), midy - 40 * (width / 1220));


    if (mousex >= 255 * (width / 1220) && mousex <= 345 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(255 * (width / 1220), midy * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("7", 300 * (width / 1220), midy + 75 * (width / 1220));

    if (mousex >= 375 * (width / 1220) && mousex <= 465 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(375 * (width / 1220), midy * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("8", 420 * (width / 1220), midy + 75 * (width / 1220));

    if (mousex >= 495 * (width / 1220) && mousex <= 585 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(495 * (width / 1220), midy * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("9", 540 * (width / 1220), midy + 75 * (width / 1220));

    if (mousex >= 615 * (width / 1220) && mousex <= 705 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(615 * (width / 1220), midy * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("10", 660 * (width / 1220), midy + 75 * (width / 1220));

    if (mousex >= 735 * (width / 1220) && mousex <= 825 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(735 * (width / 1220), midy * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("11", 780 * (width / 1220), midy + 75 * (width / 1220));

    if (mousex >= 855 * (width / 1220) && mousex <= 945 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(855 * (width / 1220), midy * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("12", 900 * (width / 1220), midy + 75 * (width / 1220));
    
    //End

    if (mousex >= 30 * (width / 1220) && mousex <= 120 * (width / 1220) && mousey >= midy - 270 * (width / 1220) && mousey <= midy - 195 * (width / 1220)) {
        colorCheck = "#E6FFFF";
        mark = true;
    }
    drawRoundedRectangle(30 * (width / 1220), midy - 270 * (width / 1220), 90 * (width / 1220), 75 * (width / 1220), colorCheck, 4);
    gameArena.shadowBlur = 0;
    gameArena.font = "60px Zorque";
    gameArena.fillStyle = "#E6FFFF";
    gameArena.textAlign = "center";
    gameArena.fillText("<", 73 * (width / 1220), midy - 212 * (width / 1220));

    if (!mark) {
        canvas.style.cursor = "auto";
    }
    else {
        canvas.style.cursor = "pointer";
    }
}
function levelSelects_click() {
    if (mousex >= 30 * (width / 1220) && mousex <= 120 * (width / 1220) && mousey >= midy - 270 * (width / 1220) && mousey <= midy - 195 * (width / 1220)) {
        sceneNumber = 1;
        clearInterval(gameTimer);
        update();
        if (volume) menu_click.play();
    }

    if (mousex >= 255 * (width / 1220) && mousex <= 345 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 1;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 375 * (width / 1220) && mousex <= 465 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 2;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 495 * (width / 1220) && mousex <= 585 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 3;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 615 * (width / 1220) && mousex <= 705 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 4;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 735 * (width / 1220) && mousex <= 825 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 5;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 855 * (width / 1220) && mousex <= 945 * (width / 1220) && mousey >= midy - 100 * (width / 1220) && mousey <= midy - 25 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 6;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 255 * (width / 1220) && mousex <= 345 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 7;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 375 * (width / 1220) && mousex <= 465 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 8;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 495 * (width / 1220) && mousex <= 585 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 9;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 615 * (width / 1220) && mousex <= 705 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 10;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 735 * (width / 1220) && mousex <= 825 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 11;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
    if (mousex >= 855 * (width / 1220) && mousex <= 945 * (width / 1220) && mousey >= midy * (width / 1220) && mousey <= midy + 75 * (width / 1220)) {
        currentScore = 0;
        sceneNumber = 6;
        levelNumber = 12;
        if (gameMode) lives = 1;
        else lives = 3;
        clearInterval(gameTimer);
        update();
        lastClickCounter = 0;
        if (volume) menu_click.play();
    }
}