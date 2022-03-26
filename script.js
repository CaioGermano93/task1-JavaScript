
// Estrtura: Sequencial

// Questão 1

// let nome = prompt("Digite o seu nome: ")
// alert("Seu nome é: " + nome)
// console.log(nome)

// Questão 2

// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// console.log(num1+num2)

// alert("A soma dos números é: " + (num1+num2))

// Questão 3

// let nota1 = parseInt(prompt("Digite sua primeira nota "))
// let nota2 = parseInt(prompt("Digite sua segunda nota"))
// console.log(nota1 + nota2 / 2)

// alert("Sua média é: " + (nota1 + nota2) / 2)

// Questão 4

// let n=parseInt(prompt("Digite o ano em que você nasceu: "))
// let at = parseInt(prompt("Digite o ano atual em que estamos: "))
// console.log (at - n)

// alert("Sua idade é: " + (at - n))

// Questão 5

// let sh = parseInt(prompt("Digite quanto você recebe por hora: "))
// let ht = parseInt(prompt("Agora por favor digite quantas horas você trabalha em um mês: "))

// console.log(sh * ht)

// alert("Você recebe por mês = " + (sh * ht))

// Questão 6

// let f = parseInt(prompt("Por favor digite a temperatura em Fahrenheit: "))
// console.log("A conversão da temperatura é: " + (C = 5 * (f-32) / 9 ))
// alert("Temperatura em celcius= " + (C = 5 * (f-32) / 9 )) 

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// // Estrtura: Decisão

// Questão 1

// let num1 = parseInt(prompt("Digite o primeiro número: "))
// let num2 = parseInt(prompt("Digite o segundo número: "))

//     if  (num1 > num2){
//        console.log("num1 é o maior: " + num1)
//        alert("num1 é o maior: " + num1)
//        }else {
//        console.log("num2 é o maior: " + num2)
//        alert("num2 é o maior: " + num2)
//        }   
    

// Questão 2

// let num = parseInt(prompt("Digite um número: "))

// if (num >= 0){
//     console.log("O número digitado é positivo ")
//     alert("O número que você digitou é positivo")
// }else {
//     console.log("O número que você digitou é negativo")
//     alert("O número que você digitou é negativo")
// }
 
// Questão 3

// let genero = prompt("Digite f ou m para definir o seu sexo: ")
//     if (genero === "m"){
//         console.log("Seu sexo é masculino")
//         alert("Seu sexo é masculino ")
//     }else if (genero === "f") {
//         console.log("Seu sexo é feminino")
//         alert("Seu sexo é feminino ")
//     }else{
//         console.log("Sexo inválido, por favor digite f ou m: ")
//         alert("Sexo inválido, por favor digite f ou m: ")
//     }
 
// Questão 4

//    let nota1 = parseInt(prompt("Digite sua primeira nota: "))
//    let nota2 = parseInt(prompt("Digite sua segunda nota"))
   
//    let media = ((nota1 + nota2)/2)
//    console.log(nota1 + nota2)

//      if (media  === 10){ 
//         console.log("Parabéns você foi aprovado com distinção ")
//         alert("Parabéns você foi aprovado com distinção")
//      }else if (media > 10){
//         console.log("Por favor digite uma nota válida")
//         alert("Por favor digite uma nota válida")
//      }else if(media < 7){
//          console.log("Infelizmente você foi reprovado")
//          alert("Infelizmente você foi reprovado")
//      }else if(media  >= 7){
//         console.log("Parabéns você foi aprovado")
//         alert("Parabéns você foi aprovado")
//      }else if (media > 10){
//         console.log("Por favor digite uma nota válida")
//         alert("Por favor digite uma nota válida")
//      }
    

// Questão 5

//   let num1 = parseInt(prompt("Digite o primeiro número: "))
//   let num2 = parseInt(prompt("Digite o segundo número: "))
//   let num3 = parseInt(prompt("Digite o terceiro número: "))

//      let nMaior = Math.max(num1, num2, num3)
//      let nMenor = Math.min(num1, num2, num3)
//         console.log("O número maior é: " + nMaior +  ", e o número menor é: " + nMenor)

// Questão 6

// let num = parseInt(prompt("Digite um número: "))

// if (num % 2 === 0){
//     console.log("Esse número é par")
//     alert("Esse número é par")
// }else{
//     console.log("Esse número é impar")
//     alert("Esse número é impar")
// }

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ESTRUTURAS DE REPETIÇÃO:

// 1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

// while (true) {
//   let nota = parseFloat(prompt("Digite a sua nota, por favor"));
//   if (nota >= 0 && nota <= 10) {
//     console.log(nota);
//   break;
// } else {
//      alert("Sua nota digitada está invalida por favor digite uma nota entre 0 e 10");
//     }
//   }

// 2.	MOSTRAR DIFERENÇA ENTRE VAR E LET

// VAR - Declara variáveis com um escopo 'GLOBAL'.
// LET - Declara variáveis com um escopo de 'BLOCO', 'INSTRUÇÃO' ou 'EXPRESSÃO'.
// Obs.: O termo "escopo" se refere ao "local" onde a variável existe, sendo assim, a grande diferença entre eles é porque o VAR é mais "abrangente" por declarar de forma global, enquanto que o LET é mais "restrito".

// 3.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

// do {
//   var name = prompt("Escreva o seu nome");
//   var password = prompt("Escreva a sua senha");
//     if (name == password) {
//     alert("Por favor, digite uma senha que seja diferente do nome");
//       }
//     } while (name == password);

// 4.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 

// for(let i = 1; i <= 20; i++) {
// console.log(i);
//   }

// 5.	Faça um programa que leia 5 números e informe o maior número.

// let maior = 0;
// for (let i = 0; i < 5; i++) {
//   let n = parseInt(prompt("Por favor, digite um número"));
//   if (n > maior) {
//     maior = n;
//   }
// }
//   console.log(maior);

// 6.	Faça um programa que leia 5 números e informe a s e a média dos números.

// var s = 0;
// let media = 0;
//   for (let i = 0; i < 5; i++) {
//   let n = parseInt(prompt("Por favor, digite apenas um númerio"));
//   s += n;
//   }
//   media = s/5;
//    console.log("O calculo da var s é: " + s);
//    console.log("O cálculo da média é: " + media);

// 7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

// for(let i = 1; i <= 50; i++) {
// if (i%2 != 0) {
//     console.log(i);
//   }
// }
  
// 8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual n ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// a.	Tabuada de 5:
// b.	5 X 1 = 5
// c.	5 X 2 = 10
// d.	...
// e.	5 X 10 = 50

// let nTab = parseInt(prompt("Digite um número para ver sua tabuada")) 
// for(let i = 1; i <= 10; i++) {
//   console.log(nTab + " x " + i + " = " + (nTab * i));
// }

     
     


