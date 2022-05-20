player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

//player1_name = null;
//player2_name = null;


document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player1_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player1_answer").innerHTML = "Answer Turn - " + player2_name;


function send()  
{
    get_word = document.getElementById("word").Value;
    word = get_word.toLowerCase();
    console.log("word in loverCase = " + word);

    charAt1 = word.chartat(1);
    console.log(chartAt1);

    length_divide_2 = math.floor(word.leangth/2);
    charAt1 = word.charAt1(leangth_divice_2);
    console.log(charAt1);


    length_minus_2 = word.leangth - 1;
    charAt1 = word.charAt1(leangth_minus_1);
    console.log(charAt3);

    charAt3 = word.charAt(leangth_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace (chartAt1, "_");
    remove_charAt2 = remove_charAt1.replace(chartAt2, "_");
    remove_charAt3 = remove_charAt2.replace(chartAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id= 'word_display'> Q."+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id= inpute_check_box'>";
    check_button = "<br><br><button class='btn-btn-info'"
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
     

    question_turn = "player1";
    answer_turn = "player2";
}


function check()
{
    get_ansuer = document.getElementById("inpute_check_box").value;
    answer = get_ansuer.toLoverCase();
    console.log ("answer in lover case-" + answer);
    if(answer == word) 
    {

        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score; 
        }   
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score; 
        }
    }
    
       if(question_turn == "player2")
            {
                question_turn = "player2"
                document.getElementById("player question").innerHTML = "question_turn -" + player2_name ; 
            }   
            else
            {
                question_turn = "player1"
                document.getElementById("player question").innerHTML = "question_turn -" + player1_name ; 
            }
        

            if(answer_turn == "player1")
            {
                question_turn = "player1"
                document.getElementById("player_answer").innerHTML = "Answer_turn -" + player1_name ; 
            }   
            else
            {
                question_turn = "player1"
                document.getElementById("player_answer").innerHTML = "Answer_turn -" + player1_name ; 
            }
        


            if(question_turn == "player2")
            {
                question_turn = "player2"
                document.getElementById("player question").innerHTML = "question_turn -" + player2_name ; 
            }   
            else
            {
                question_turn = "player1"
                document.getElementById("player question").innerHTML = "question_turn -" + player1_name ; 
            }
        
    
}