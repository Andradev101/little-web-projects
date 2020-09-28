    const upbtn = document.getElementById("upbtn");
    const downbtn = document.getElementById("downbtn");
    const capbtn = document.getElementById("capbtn");
    const phrabtn = document.getElementById("phrabtn");
    const textcopy = document.getElementById("textcopy");

    
    upbtn.addEventListener("click", Upper);
    downbtn.addEventListener("click", Lower);
    capbtn.addEventListener("click", Capitalize);
    phrabtn.addEventListener("click", Phrasecaps);

    //main
    function getText(){
        msg = document.getElementById('txtarea').value; 	//atribui texto digitado a msg
    }
    
    //btns functions
    function Upper(){
        getText();
        var result = msg.toUpperCase();						//transforma em uppercase
        document.getElementById("txtarea").value=result;	//printa de volta no txtarea
    }

    function Lower(){
        getText();
        var result = msg.toLowerCase();						//transforma em uppercase
        document.getElementById("txtarea").value=result;	//printa de volta no txtarea	
    }

    function Capitalize(){					
        getText();
        var capString = (msg) => msg[0].toUpperCase() + msg.slice(1).toLowerCase();
        msg = msg.replace(/\r\n|\n|\r/gm, "");
        var words = msg.split(' ').map(capString);
        var result = words.join(' ');
        document.getElementById('txtarea').value = result;
    }		

    function Phrasecaps(){					
        getText();
        var capString = (msg) => msg[0].toUpperCase() + msg.slice(1).toLowerCase();
        msg = msg.replace(/\r\n|\n|\r/gm, "");
        var phrase = msg.split('. ' && ".").map(capString);
        var result = phrase.join('. ');
        document.getElementById("txtarea").value = result; //troca o msg do txtarea para o de result			
    }