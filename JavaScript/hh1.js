<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head> 
<body>
    <script>
        // Global Scope
        let globalLet = 30;
        var globalVariable = 10;
        const globalConstant = 20;

        function globalScopeCheck() {
            console.log("Global Variable: " + globalVariable);
            console.log("Global Constant: " + globalConstant);
            console.log("Global Let: " + globalLet);
        }

        globalScopeCheck();

        // Array of Objects
        var arr = [
            {
                id: 1,
                name: "John",
                age: 30,
                email: "abc@gmail.com"
            },
            {
                id: 2,
                name: "Doe",
                age: 25,
                email: "def@gmail.com"
            },
            {
                id: 3,
                name: "Smith",
                age: 35,
                email: "qwq@gmail.com"
            }
        ];

        // Print Names using forEach()
        arr.forEach((data) => {
            console.log(data.name);
        });

        // Print Names with Index
        arr.forEach((data, index, arr) => {
            console.log(data.name + " is at index " + index + " in the array.");
        });

        // Increase Age by 1 using map()
        var obj2 = arr.map((data) => {
            return { ...data, age: data.age + 1 };
        });

        console.log(obj2);

        // Extract Names using map()
        var names = arr.map((data) => {
            return data.name;
        });

        console.log(names);
    </script>
</body>
</html>