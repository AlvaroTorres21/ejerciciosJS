# Ejercicio 1, Nomenclatura y tipo de variables

### Escribe una varible llamada `user name` utilizando las siguientes nomenclaturas:

- Camel case: userName
- Pascal case: UserName
- Snake case: user_name
- Kebab case: user-nameS

### Define los siguientes tipos de variables, di cuál utilizarías y por qué.

- Var: 
        var name = "Juan"
        console.log(name)

        No utilizaria este tipo de variable ya que tiene ambito global y se puede sobreescribir por lo que en algun momento puedo sobreescribirla sin darme cuenta y perdeia el antiguo valor de la variable para siempre
- Let:
        let dogName = Perla
        {
            let dogName = Coco
            console.log(dogName)
        }
        console.log(dogName)

        Utilizaria esta variable mas que la anterior ya que tiene ambito de bloque, lo que significa que esa variable la puedo utilizar solo dentro de ese bloque y al finalizar ese bloque, esa variable se destruye. 
        Esta variable tambien puede cambiar de valor.
        El primer "dogName" como esta dentro de un bloque, mostrara el nombre de Coco, mientras el segundo mostrara "Perla" ya que esta fuera edl bloque y no se ha sobreescrito el valor de la vriable.

- Const:
        const weekDays = 7
        console.log(weekDays)

        Utilizaria esta variable para que un valor no se modifique, es dicir que es constatnte. Tambien esta variable tiene ambito de bloque por lo que es lo mimsio que let.