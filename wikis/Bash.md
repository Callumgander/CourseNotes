- How to print in bash? echo blahblah
- How to loop in bash?

    for i in {1..10}
    do
        echo $i
    done

- How to read and use input in bash? 

    read varName
    echo Welcome $varName
    
- How do you print the results of expressions?

    echo "$(($x+$y))"
    
- How to do if statements

    if (( x &gt; y )); then
    echo "X is greater than Y"
elif (( x &lt; y)); then
    echo "X is less than Y"
else
    echo "X is equal to Y"
fi

-