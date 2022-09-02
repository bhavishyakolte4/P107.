function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0aNgNxEir/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
 
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         
        img = document.getElementById('dog1');
        img1 = document.getElementById('cat2');
        img2 = document.getElementById('cow3');
        img3 = document.getElementById('lion4');

        if (results[0].label == "dog") {
            img.src = 'dog-01.png' ;
            img1.src= 'cat-02.png'
            img2.src = 'cow-03.png' ;
            img3.src = 'lion-04.png' ;
        }
        else if (results[0].label == "Cat") {
            img.src = 'dog-01.png' ;
            img1.src= 'cat-02.png'
            img2.src = 'cow-03.png' ;
            img3.src = 'lion-04.png' ;   
        }
        else if (results[0].label == "cow") {
            img.src = 'dog-01.png';
            img1.src= 'cat-02.png' ;
            img2.src = 'cow-03.png' ;
            img3. src= 'lion-04.png' ;
        }
        else{
            img.src = 'dog-01.png';
            img1.src= 'cat-02.png' ;
            img2.src = 'cow-03.png' ;
            img3. src= 'lion-04.png' ;   
        }
    }
}