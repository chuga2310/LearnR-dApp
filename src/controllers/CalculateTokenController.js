import express from 'express';
/** hệ số cho earn token */
let COEFFICIENT_EARNING;
COEFFICIENT_EARNING = process.env.COEFFICIENT_EARNING;;
/*
    Level 1: 240-840(s) ==> 3 LER
    Level 2: 240-720(s) ==> 3 LER
    Level 3: 240-600(s) ==> 3 LER
    Level 4: 180-480(s) ==> 3 LER
    Level 5: 180-360(s) ==> 3 LER
*/
function earn_learning_level(pen_level, total_time_of_course) {
    let token_result = 0;
    
    if (pen_level == 1) {
        token_result = Math.floor((total_time_of_course / 840) * 3);
    }
    else if (pen_level == 2) {
        token_result = Math.floor((total_time_of_course / 720) * 3);
    }
    else if (pen_level == 3) {
        token_result = Math.floor((total_time_of_course / 600) * 3);
    }
    else if (pen_level == 4) {
        token_result = Math.floor((total_time_of_course / 480) * 3);
    }
    else if (pen_level >= 5) {
        token_result = Math.floor((total_time_of_course / 360) * 3);
    }

    return token_result;
}

/*
Calculate dynamic minting cost
    Minting costs = base LER + additional LER (LER * x) 
    1. If LER < $4, x = 0%;
    2. If $4 < LER < $8, x = 50%;
    3. If $8 < LER < $12, x = 100%;
    4. If $12 < LER < $16, x = 200%;
    5. If $16 < LER < $20, x = 400%;
    6. If $20 < LER < $30, x = 800%;
    7. If $30 < LER < $40, x = 1600%;
    8. If $40 < LER < $50, x = 3200%;
    9. If $50 < LER , x=6400%
*/

/** function mint pen */
function cal_dynamic_minting_cost(price_ler) {
    additional_ler = 0;
    minting_cost = 0;

    if (price_ler <= 4) {
        additional_ler = 0;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 4) && (price_ler <= 8)) {
        additional_ler = 0.5;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 8) && (price_ler <= 12)) {
        additional_ler = 1;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 12) && (price_ler <= 16)) {
        additional_ler = 2;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 16) && (price_ler <= 20)) {
        additional_ler = 4;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 20) && (price_ler <= 30)) {
        additional_ler = 8;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 30) && (price_ler <= 40)) {
        additional_ler = 16;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if ((price_ler > 40) && (price_ler <= 50)) {
        additional_ler = 32;
        minting_cost = price_ler + (price_ler * additional_ler);
    }
    else if (price_ler > 50) {
        additional_ler = 64;
        minting_cost = price_ler + (price_ler * additional_ler);
    }

    return minting_cost;
}

/*
Calculate earning learn through videos mode
*/
function cal_earning_learn_mode(pen_energy, average_time_each_video, total_learn_time, total_time_of_course, pen_level) {
    let PLerE = earn_learning_level(pen_level, total_time_of_course);
    let PLerEC = 1;
    let bb_factor = 0;
    let aa_factor;
    let token_learning;

    if (total_learn_time < Math.floor(0.3 * total_time_of_course)) {
        aa_factor = 0;
    }
    else {
        aa_factor = Math.random(1);
    }
    let pen_percent = pen_energy / 100;
    let sum_energy = Math.floor(pen_energy / average_time_each_video);

    if (pen_percent < 0.5) {
        bb_factor = 0.9;
    }
    else if (pen_percent < 0.2) {
        bb_factor = 0.1;
    }

    token_learning = sum_energy * Math.pow((PLerE + PLerEC), Number(COEFFICIENT_EARNING)) * Math.floor(Math.random(5) * 2) * aa_factor * bb_factor

    return token_learning
}

/*
Calculate earning quiz mode
*/
function cal_earning_quiz_mode(point, pen_level, total_time_of_course) {
    let PLerE = earn_learning_level(pen_level, total_time_of_course);
    let PLerEC = 1;

    let value_factor = 0;
    if (point <= 0.25) {
        value_factor = 1;
    }
    else if ((point > 0.25) && (point <= 0.5)) {
        value_factor = 1.5;
    }
    else if ((point > 0.5) && (point <= 0.75)) {
        value_factor = 2;
    }
    else if (point > 0.75) {
        value_factor = 2.5;
    }

    let token_learning = point * value_factor * Math.pow((PLerE + PLerEC), Number(COEFFICIENT_EARNING)) 
    return token_learning;
}

export { cal_earning_quiz_mode, cal_earning_learn_mode };