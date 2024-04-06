var count = 0;

function change_color()
{
    if(count%2==0)
    {
      document.getElementById("box").style.backgroundColor="green";
    }
    else
    {
       document.getElementById("box").style.backgroundColor="red";
    }

    count++;
  
}

