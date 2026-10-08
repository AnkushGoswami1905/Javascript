const flag = true;

if(!flag)
{
   console.log("Condition satisfied");
}
else
{
    console.log(flag)//flag value remains true because it is a constant variable and cannot be reassigned.
    console.log("Condition not satisfied");
}

let i = 0;
while(i < 5)
{
    i++;
    console.log("I am in while loop");
}