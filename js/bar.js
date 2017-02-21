 
//variables for calculating width of highlight bar
var width=0;
var wid=0;
var width1=0;
var width2=0;
var width3=0;
var wid1=0; 
var wid2=0;
var wid3=0;

//function to be performed when add 10 is clicked 
function changeBar10()
{
	var bar = $("#selectBar").val(); //storing the value of bar which is selected in the select box
	if(bar == 'bar1')
	{ 
       	width=width1; 	//initializing common variable with current bar's width value
      	wid=wid1; 
        
      	add10("myBar1");	//call the function to add 10
        
       	width1=width;	//storing the width value of the corresponding bar
       	wid1=wid;
    }    
    else if (bar == 'bar2')
    {
      	width=width2;
       	wid=wid2;
       	add10("myBar2");
       	width2=width;
       	wid2=wid;
    }
    else if(bar=='bar3')
   {
    	width=width3;
       	wid=wid3;
      	add10("myBar3");
       	width3=width;
       	wid3=wid;   
   }
   else
   {
       document.getElementById("demo").innerHTML = "Please Choose a Bar";// message to be displayed if no bar is selected
   }
}


function changeBar38()
{
	var bar = $("#selectBar").val(); 
	if(bar == 'bar1')
	{
      	width=width1;
       	wid=wid1;
       	add38("myBar1");
       	width1=width;
       	wid1=wid; 
    } 
    else if (bar == 'bar2')
    {
      	width=width2;
       	wid=wid2;
       	add38("myBar2");
       	width2=width;
       	wid2=wid;   
    }    
    else if(bar=='bar3')
    {
    	width=width3;
       	wid=wid3;
       	add38("myBar3");
       	width3=width;
       	wid3=wid;  
    }
    else
    {
       document.getElementById("demo").innerHTML = "Please Choose a Bar";
    }
}

function changeBar13()
{
	var bar = $("#selectBar").val();
	if(bar == 'bar1')
	{
      	width=width1;
       	wid=wid1;
       	sub13("myBar1");
       	width1=width;
       	wid1=wid;   
    }  
    else if (bar == 'bar2')
    {
     	width=width2;
       	wid=wid2;
       	sub13("myBar2");
       	width2=width;
       	wid2=wid;
    }
 	else if(bar=='bar3')
    {
    	width=width3;
       	wid=wid3;
       	sub13("myBar3");
       	width3=width;
       	wid3=wid;
    }
    else
    {
       document.getElementById("demo").innerHTML = "Please Choose a Bar";
    }
}

function changeBar18()
{
	var bar = $("#selectBar").val();
	if(bar == 'bar1')
	{
       	width=width1;
       	wid=wid1;
       	sub18("myBar1");
       	width1=width;
       	wid1=wid;
    }    
    else if (bar == 'bar2')
    {
      	width=width2;
       	wid=wid2;
       	sub18("myBar2");
       	width2=width;
       	wid2=wid;
    }
    else if(bar=='bar3')
    {
    	width=width3;
       	wid=wid3;
       	sub18("myBar3");
       	width3=width;
       	wid3=wid;    
    }
    else
    {
       document.getElementById("demo").innerHTML = "Please Choose a Bar";
    }
}


//function to add 10,highlight bar id is passed as parameter to add10 function 
function add10(name) 
{
	width=wid;	//initalising width variable with previous percentage value
  	var id = frame();

  	function frame() 
  	{
   		width=width +10 ; //adding value by 10
   		wid=width;
    
      	if(width >=0)	
       	{
          if(wid>100)
          { 
          	var elem = document.getElementById(name);  
 			elem.style.background="#ff8080";
      		elem.style.width = width + '%'; 
       		labelchange();
          }
          else
          {
     		var elem = document.getElementById(name);   
 			elem.style.background= "#80ffff";
 		    elem.style.width = width + '%';
     	    labelchange();    
          } 
      }
      else	//if percentage value is less than 0
      {
      	width=0;
        wid=0;
        var elem = document.getElementById(name);   
        elem.style.background="#FAEBD7";
        elem.style.width = width + '%'; 
        labelchange();
      }
   }
    function labelchange() //inorder to distinguish labls of corresponding bars 
    {
		if(name=="myBar1")
        {
        	document.getElementById("label1").innerHTML = width * 1  + '%';
        }
        else if(name=="myBar2")
        {
        	document.getElementById("label2").innerHTML = width * 1  + '%';
        }
        else
        {
          	document.getElementById("label3").innerHTML = width * 1  + '%';
        }
    }
}

//function to add 38

 function add38(name) 
 {
   	var width=wid;
   	var id = frame();

    function frame() 
    {
       	width=width +38 ; 
       	wid=width;
       
 		if(width >=0)
      	{
        	if(wid>100)
         	{
           		var elem = document.getElementById(name);   
           		elem.style.background="#ff8080";
           		elem.style.width = width + '%'; 
           		labelchange();
         	}
        	else
         	{
          		var elem = document.getElementById(name); 
          		elem.style.background= "#80ffff";
     	  		elem.style.width = width + '%'; 
  		  		labelchange();
         	}
      	}
     	else
      	{
     		width=0;
    		wid=0;
          
 	    	var elem = document.getElementById(name);   
        	elem.style.background="#FAEBD7";
   			elem.style.width = width + '%'; 
    	 	labelchange();
       	}      
	}

  function labelchange()
  {
 	  if(name=="myBar1")
      {
          document.getElementById("label1").innerHTML = width * 1  + '%';
	  }
	  else if(name=="myBar2")
	  {
          document.getElementById("label2").innerHTML = width * 1  + '%';
	  }
      else
      {
          document.getElementById("label3").innerHTML = width * 1  + '%';
      }
   }
}

//function to subtract 13
	function sub13(name)
  	{
    	var width=wid;
       	var id = frame();
       	function frame() 
        {
         width=width -13 ; 
 	     wid=width;
         if(width>0)
         {
         	if(width<=100)
            {
            	var elem = document.getElementById(name);   
                elem.style.background="#80ffff";
                elem.style.width = width + '%'; 
                labelchange();
            } 
            else
            {
            	var elem = document.getElementById(name);   
            	elem.style.background="#ff8080";
            	elem.style.width = width + '%'; 
            	labelchange();
            }
         }
         else
         {
          	width=0;
            wid=0;
          	var elem = document.getElementById(name);   
          	elem.style.background="#FAEBD7";
          	elem.style.width = width + '%'; 
          	labelchange();
         }
      }
      function labelchange()
      {
      	if(name=="myBar1")
        {
          	document.getElementById("label1").innerHTML = width * 1  + '%';
        }
      	else if(name=="myBar2")
        {
          	document.getElementById("label2").innerHTML = width * 1  + '%';
        }
       	else
        {
          	document.getElementById("label3").innerHTML = width * 1  + '%';
        }
      }
 }
 
//function to subtract 18
function sub18(name)
{
	var width=wid;
   	var id = frame();

  	function frame() 
  	{
   		width=width -18 ; 
  		wid=width;
 
      	if(width>0)
      	{
       		if(width<=100)
       		{
       			var elem = document.getElementById(name);   
       			elem.style.background="#80ffff";
      			elem.style.width = width + '%'; 
      			labelchange();
       		}
       		else
      		{
       			var elem = document.getElementById(name);   
      			elem.style.background="#ff8080";
      			elem.style.width = width + '%'; 
      			labelchange();
       		}
      	}	
       	else
      	{
       		width=0;
       		wid=0;
      		var elem = document.getElementById(name);   
      		elem.style.background="#FAEBD7";
      		elem.style.width = width + '%'; 
      		labelchange();
        }   
   }

  function labelchange()
  {
      if(name=="myBar1")
      {
          document.getElementById("label1").innerHTML = width * 1  + '%';
      }
       else if(name=="myBar2")
      {
          document.getElementById("label2").innerHTML = width * 1  + '%';
	  }
        else
      {
          document.getElementById("label3").innerHTML = width * 1  + '%';
      }
   }
 }
