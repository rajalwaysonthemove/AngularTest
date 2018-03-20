function marcopologame()
{
	for (var i = 1; i <= 100; i++)
            {
				document.getElementById("ques1").value=document.getElementById("ques1").value+((i %28==0) ? "MARCOPOLO" : ((i % 7 == 0 && i % 4 != 0) ? "POLO" : ((i % 7 != 0 && i % 4 == 0) ? "MARCO" : i.ToString())));
                Console.log(((i %28==0) ? "MARCOPOLO" : ((i % 7 == 0 && i % 4 != 0) ? "POLO" : ((i % 7 != 0 && i % 4 == 0) ? "MARCO" : i.ToString()))));
            }
};