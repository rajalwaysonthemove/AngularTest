function Read_file(){
  var fileToLoad = document.getElementById("txtfiletoread").files[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent){
      var filecontents = fileLoadedEvent.target.result;
	  
                    var filecontents=fileReader.result.split(/[\n]+/g);
                    document.getElementById("filecontents").innerText = parserss(filecontents);
					console.log("file content ....");
  };

  fileReader.readAsText(fileToLoad, "UTF-8");
}

  function parserss(lines)
    {
        var fulltext="";
		console.log(lines.length);
        for(var i = 0; i < lines.length; i = i+3) 
        {   
            var line1=lines[i]+" ";
            var line2=lines[i+1]+" "; 
            var line3=lines[i+2]+" ";
            for(var j = 0; j < 27; j=j+3) 
            {   
                var str=line1.substring(j, j+3)+line2.substring(j, j+3)+line3.substring(j, j+3);  
                fulltext=fulltext+findchar(str)+" ";
            }
            fulltext=fulltext+"\n";

        }
		console.log(fulltext);
        return fulltext
    }
    function findchar(num)
    {
        text="";
        switch(num) {
            case " _ | ||_|":
                text = "0";
                break;
            case "     |  |":
                text = "1";
                break;
            case " _  _||_ ":
                text = "2";
                break;
            case " _  _| _|":
                text = "3";
                break;
            case "   |_|  |":
                text = "4";
                break;
            case " _ |_  _|":
                text = "5";
                break;
            case " _ |_ |_|":
                text = "6";
                break;
            case " _   |  |":
                text = "7";
                break;
            case " _ |_||_|":
                text = "8";
                break;
            case " _ |_| _|":
                text = "9";
                break;
                  }
        return text;
    }
	
