import inquirer from "inquirer";

const answer :
{
    num1: number,
    num2: number,
    operator: string
} 
= await inquirer. prompt 
(
    [
        {
            type: "number",
            name: "num1",
            message: "Enter your first number"  
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second number"  
        },
        {
            type: "list",
            name: "operator",
            choices: ["Add +", "Subtract -", "Multiply *", "Divide /"],
            message: "Select Operator"  
        }
    ]
);
const {num1, num2, operator} = answer;

if (num1 && num2 && operator)
{
    let result: number = 0;
    if(operator == "Add +")
    {
result = num1+num2
    }
    else if(operator === "Subtract -")
    {
result = num1-num2
    }
    else if(operator === "Multiply *")
    {
result = num1*num2
    }
    else if(operator === "Divide /")
    {
result = num1/num2
};

console.log("Your result is : ", result);
}
    else{
        console.log("KINDLY INSER VALID INPUT");
    }

